const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mysql = require("mysql2/promise"); // Using mysql2/promise for async/await
const cors = require("cors"); // Import the cors middleware

const app = express();

// --- CORS Configuration ---
// Enable CORS for all routes and origins by default
// For more specific control, you can configure it: e.g., app.use(cors({ origin: 'http://localhost:5174' }));
app.use(cors());

const port = process.env.PORT || 8100;

// --- MySQL Connection Pool ---
// IMPORTANT: Replace with your actual database credentials!
const dbPool = mysql.createPool({
  host: "localhost", // Or your MySQL host
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "ssim_db", // Your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true, // Allow multiple SQL statements for table creation
});

async function initializeDatabaseSchema() {
  let connection;
  try {
    connection = await dbPool.getConnection();
    console.log(
      "Checking and creating database tables if they do not exist..."
    );

    const createEventsTableSQL = `
            CREATE TABLE IF NOT EXISTS events (
                id VARCHAR(255) NOT NULL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createEventImagesTableSQL = `
            CREATE TABLE IF NOT EXISTS event_images (
                image_id INT AUTO_INCREMENT PRIMARY KEY,
                event_id VARCHAR(255) NOT NULL,
                image_path VARCHAR(255) NOT NULL,
                uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
            );
        `;

    const createPlacementsTableSQL = `
            CREATE TABLE IF NOT EXISTS placements (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                designation VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createInternshipsTableSQL = `
            CREATE TABLE IF NOT EXISTS internships (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                majorSpecialization VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createGuestLecturesTableSQL = `
            CREATE TABLE IF NOT EXISTS guest_lectures (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                designation VARCHAR(255) NOT NULL,
                company VARCHAR(255) NOT NULL,
                topic VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    const createPublicationsTableSQL = `
            CREATE TABLE IF NOT EXISTS publications (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                authors VARCHAR(255) NOT NULL,
                journal VARCHAR(255) NOT NULL,
                classification VARCHAR(255),
                year VARCHAR(10),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `;

    await connection.query(createEventsTableSQL);
    console.log("Table 'events' checked/created.");

    await connection.query(createEventImagesTableSQL);
    console.log("Table 'event_images' checked/created.");

    await connection.query(createPlacementsTableSQL);
    console.log("Table 'placements' checked/created.");

    await connection.query(createInternshipsTableSQL);
    console.log("Table 'internships' checked/created.");

    await connection.query(createGuestLecturesTableSQL);
    console.log("Table 'guest_lectures' checked/created.");
  } catch (error) {
    console.error("Error initializing database schema:", error);
    // Exit the process if we can't set up the database, as the app won't work.
    process.exit(1);
  } finally {
    if (connection) connection.release();
  }
}

// Middleware to test DB connection (optional, can be removed in production)
app.use(async (req, res, next) => {
  try {
    const connection = await dbPool.getConnection();
    console.log("Successfully connected to the database.");
    connection.release();
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    // Optionally, you might want to stop the app or prevent requests if DB is down
    // For now, we'll just log and continue, but routes needing DB will fail.
  }
  next();
});

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const eventId = req.body.id;
    console.log(
      `Multer destination: eventId from req.body.id = '${eventId}' for file ${file.originalname}`
    );
    if (!eventId) {
      console.error(
        "Multer destination: Event ID is missing for file " + file.originalname
      );
      return cb(
        new Error("Event ID is missing. Cannot determine upload folder.")
      );
    }
    const eventSpecificPath = path.join(uploadsDir, String(eventId));
    console.log(
      `Multer destination: Determined eventSpecificPath = '${eventSpecificPath}' for file ${file.originalname}`
    );
    try {
      if (!fs.existsSync(eventSpecificPath)) {
        fs.mkdirSync(eventSpecificPath, { recursive: true });
        console.log(
          `Multer destination: Directory CREATED: ${eventSpecificPath}`
        );
      } else {
        console.log(
          `Multer destination: Directory ALREADY EXISTS: ${eventSpecificPath}`
        );
      }
      cb(null, eventSpecificPath);
    } catch (mkdirError) {
      console.error(
        `Multer destination: FAILED to create/access directory ${eventSpecificPath}`,
        mkdirError
      );
      cb(mkdirError);
    }
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const ext = path.extname(originalName);
    console.log(
      `Multer filename: originalname='${originalName}', ext='${ext}'`
    );
    // Add a random number component to ensure higher uniqueness for temporary filenames
    const randomComponent = Math.floor(Math.random() * 10000);
    const tempFilename = `${
      file.fieldname
    }-${Date.now()}-${randomComponent}${ext}`;
    console.log(
      `Multer filename: tempFilename='${tempFilename}' for original name '${originalName}'`
    );
    cb(null, tempFilename);
  },
});

// File filter to accept only images
const imageFileFilter = (req, file, cb) => {
  console.log(
    `File filter processing: originalname: ${file.originalname}, mimetype: ${file.mimetype}`
  ); // Logging
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    console.log(
      `File rejected by filter: ${file.originalname}, mimetype: ${file.mimetype}`
    ); // Logging
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(uploadsDir));

// Import and use placement routes
const placementRoutes = require("./routes/placementsRoutes")(dbPool); // Pass dbPool to the router
app.use("/api/placements", placementRoutes);

// Import and use internship routes
const internshipRoutes = require("./routes/internshipRoutes")(dbPool); // Pass dbPool to the router
app.use("/api/internships", internshipRoutes);

// Import and use guest lecture routes
const guestRoutes = require("./routes/guestRoutes")(dbPool); // Pass dbPool to the router
app.use("/api/guest-lectures", guestRoutes);

// Import and use publication routes
const publicationRoutes = require("./routes/publicationRoutes")(dbPool); // Pass dbPool to the router
app.use("/api/publications", publicationRoutes);

// POST endpoint for event upload
app.post("/api/events", upload.array("eventImages"), async (req, res) => {
  console.log(
    "Route handler /api/events: req.files received from Multer:",
    JSON.stringify(req.files, null, 2)
  ); // Logging
  const { id, title, description } = req.body; // id here is eventId
  const tempUploadedFiles = req.files; // Files as uploaded by multer with temporary names

  if (!id || !title || !description) {
    return res.status(400).json({
      message: "Missing required event fields: id, title, description.",
    });
  }

  let connection;
  const finalImagePathsForDB = []; // Store final, renamed image paths for DB
  const successfullyRenamedFiles = []; // To keep track of files successfully renamed for potential cleanup

  try {
    connection = await dbPool.getConnection();
    await connection.beginTransaction();

    // --- Start: File Renaming Logic ---
    if (tempUploadedFiles && tempUploadedFiles.length > 0) {
      const eventIdStr = String(id);
      const eventSpecificPath = path.join(uploadsDir, eventIdStr);

      // Ensure event directory exists (multer's destination should have created it, but check for safety)
      fs.mkdirSync(eventSpecificPath, { recursive: true });

      let existingFilesInDir = [];
      try {
        existingFilesInDir = fs.readdirSync(eventSpecificPath);
      } catch (e) {
        console.error(
          `Error reading directory ${eventSpecificPath} for sequencing:`,
          e
        );
        throw new Error(
          `Server error: Could not read event directory for image sequencing.`
        );
      }

      let currentMaxSeq = 0;
      existingFilesInDir.forEach((f) => {
        const match = f.match(/^(\d+)\..+$/); // Matches 'NUMBER.extension'
        if (match) {
          const num = parseInt(match[1], 10);
          if (num > currentMaxSeq) {
            currentMaxSeq = num;
          }
        }
      });

      let sequenceForThisBatch = currentMaxSeq + 1;

      for (const tempFile of tempUploadedFiles) {
        const tempFilePath = tempFile.path;
        const extension = path.extname(tempFile.originalname);
        // More detailed logging for the file being processed in the loop
        console.log(
          `Route handler loop: Processing originalname: ${tempFile.originalname}, Extracted extension: ${extension}, Multer tempFile.path: ${tempFile.path}, Multer tempFile.destination: ${tempFile.destination}, Multer tempFile.filename: ${tempFile.filename}`
        );

        const newFilename = `${sequenceForThisBatch}${extension}`;
        const newFilePath = path.join(eventSpecificPath, newFilename);

        // Check if the temporary source file actually exists before attempting to rename
        if (!fs.existsSync(tempFilePath)) {
          console.error(
            `CRITICAL: Source file for rename does not exist or is inaccessible. Path: ${tempFilePath}`
          );
          console.error(
            `tempFile details: destination: ${tempFile.destination}, filename: ${tempFile.filename}, originalname: ${tempFile.originalname}`
          );
          throw new Error(
            `Failed to process uploaded image ${tempFile.originalname}. Reason: Temporary file not found at ${tempFilePath}.`
          );
        }

        try {
          fs.renameSync(tempFilePath, newFilePath);
          successfullyRenamedFiles.push(newFilePath);

          const publicImagePath = `/uploads/${eventIdStr}/${newFilename}`;
          finalImagePathsForDB.push(publicImagePath);
          sequenceForThisBatch++;
        } catch (renameError) {
          console.error(
            `Error renaming file ${tempFilePath} to ${newFilePath}:`,
            renameError
          );
          throw new Error(
            `Failed to process uploaded image ${
              tempFile.originalname
            }. Details: ${
              renameError.message || renameError.code || String(renameError)
            }`
          );
        }
      }
    }
    // --- End: File Renaming Logic ---

    // 1. Insert into events table
    const eventQuery =
      "INSERT INTO events (id, title, description) VALUES (?, ?, ?)";
    await connection.execute(eventQuery, [id, title, description]);

    const eventDataForResponse = {
      id,
      title,
      description,
      imagePaths: [], // Will be populated from finalImagePathsForDB
    };

    // 2. Insert into event_images table if images exist
    if (finalImagePathsForDB.length > 0) {
      const imageInsertQuery =
        "INSERT INTO event_images (event_id, image_path) VALUES (?, ?)";
      for (const dbImagePath of finalImagePathsForDB) {
        await connection.execute(imageInsertQuery, [id, dbImagePath]); // 'id' is eventId
        eventDataForResponse.imagePaths.push(dbImagePath); // Add final path to response
      }
    }

    await connection.commit();
    console.log("Event data saved to database and images processed.");
    res.status(201).json({
      message: "Event uploaded and saved successfully!",
      event: eventDataForResponse,
    });
  } catch (error) {
    if (connection) await connection.rollback();
    console.error(
      "Error saving event to database or processing images:",
      error
    );

    // Cleanup:
    // 1. Attempt to delete files that were successfully renamed in this batch.
    successfullyRenamedFiles.forEach((filePath) => {
      fs.unlink(filePath, (err) => {
        if (err)
          console.error(
            "Error deleting successfully renamed file during rollback:",
            filePath,
            err
          );
      });
    });

    // 2. Attempt to delete original temporary files that might not have been renamed or if rename failed.
    if (tempUploadedFiles && tempUploadedFiles.length > 0) {
      tempUploadedFiles.forEach((file) => {
        fs.access(file.path, fs.constants.F_OK, (errAccess) => {
          if (!errAccess) {
            // File exists at original temp path
            fs.unlink(file.path, (errUnlink) => {
              if (errUnlink)
                console.error(
                  "Error deleting temporary uploaded file after error:",
                  file.path,
                  errUnlink
                );
            });
          }
        });
      });
    }

    if (
      error.code === "ER_DUP_ENTRY" &&
      error.message.includes("events.PRIMARY")
    ) {
      return res.status(409).json({
        message: "Conflict: Event with this ID already exists.",
        error: error.message,
      });
    }
    const clientMessage =
      error.message &&
      (error.message.startsWith("Failed to process") ||
        error.message.startsWith("Server error:"))
        ? error.message
        : "Failed to save event.";
    return res
      .status(500)
      .json({ message: clientMessage, errorDetails: error.toString() });
  } finally {
    if (connection) connection.release();
  }
});

// GET endpoint to fetch all events with their images
app.get("/api/events", async (req, res) => {
  let connection;
  try {
    connection = await dbPool.getConnection();

    // 1. Fetch all events
    const [events] = await connection.query(
      "SELECT id, title, description, created_at FROM events ORDER BY id"
    );

    if (!events || events.length === 0) {
      return res.status(200).json([]); // Return empty array if no events
    }

    const eventsWithImages = [];

    // 2. For each event, fetch its images
    for (const event of events) {
      const [images] = await connection.query(
        "SELECT image_path FROM event_images WHERE event_id = ? ORDER BY uploaded_at ASC",
        [event.id]
      );
      eventsWithImages.push({
        ...event,
        imagePaths: images.map((img) => img.image_path),
      });
    }

    res.status(200).json(eventsWithImages);
  } catch (error) {
    console.error("Error fetching events:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch events.", error: error.message });
  } finally {
    if (connection) connection.release();
  }
});

// Global error handler for multer errors (like file type mismatch)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("MulterError caught in global handler:", err); // Logging
    return res.status(400).json({ message: err.message, code: err.code });
  } else if (err) {
    console.error("Unknown error caught in global handler:", err); // Logging
    if (err.message && err.message.includes("Event ID is missing")) {
      return res.status(400).json({ message: err.message });
    }
    // For other errors, including the one we throw from the route handler if file not found
    return res.status(500).json({
      message: err.message || "An unexpected error occurred.",
      errorDetails: err.stack || err.toString(), // Include stack for more detail
    });
  }
  next();
});

// F // Initialize DB schema before starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// }

// startServer();
