const express = require("express");
const router = express.Router();
const multer = require("multer"); // For handling file uploads
const xlsx = require("xlsx"); // For parsing Excel files

// Configure multer for Excel file uploads (stores file in buffer)
const excelStorage = multer.memoryStorage();
const excelFileFilter = (req, file, cb) => {
  if (
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || // .xlsx
    file.mimetype === "application/vnd.ms-excel" || // .xls
    file.mimetype === "text/csv" // .csv (optional, if you want to support CSV too)
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only Excel (.xlsx, .xls) or CSV (.csv) files are allowed."
      ),
      false
    );
  }
};
const uploadExcel = multer({
  storage: excelStorage,
  fileFilter: excelFileFilter,
});

// This function will be passed the dbPool from server.js
module.exports = function (dbPool) {
  // POST endpoint to submit a new internship record
  router.post("/", async (req, res) => {
    console.log("Received headers:", JSON.stringify(req.headers, null, 2));
    console.log("Received body:", JSON.stringify(req.body, null, 2));

    const { name, company, majorSpecialization, year } = req.body;

    if (!name || !company) {
      return res
        .status(400)
        .json({ message: "Missing required fields: name, company." });
    }

    let connection;
    try {
      connection = await dbPool.getConnection();
      const query =
        "INSERT INTO internships (name, company, majorSpecialization, year) VALUES (?, ?, ?, ?)";
      const [result] = await connection.execute(query, [
        name,
        company,
        majorSpecialization || null,
        year || null,
      ]);

      res.status(201).json({
        message: "Internship record created successfully!",
        internshipId: result.insertId,
        record: { id: result.insertId, ...req.body },
      });
    } catch (error) {
      console.error("Error creating internship record:", error);
      res.status(500).json({
        message: "Failed to create internship record.",
        error: error.message,
      });
    } finally {
      if (connection) connection.release();
    }
  });

  // GET endpoint to fetch all internship records
  router.get("/", async (req, res) => {
    let connection;
    try {
      connection = await dbPool.getConnection();
      const [rows] = await connection.query(
        "SELECT id, name, company, majorSpecialization, year, created_at FROM internships ORDER BY id"
      );
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching internship records:", error);
      res.status(500).json({
        message: "Failed to fetch internship records.",
        error: error.message,
      });
    } finally {
      if (connection) connection.release();
    }
  });

  // POST endpoint for Excel file upload
  router.post(
    "/upload/excel",
    uploadExcel.single("internshipExcelFile"),
    async (req, res) => {
      if (!req.file) {
        return res.status(400).json({ message: "No Excel file uploaded." });
      }

      let connection;
      try {
        const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // header: 0 uses the first row as headers and keys for the JSON objects
        // defval: '' ensures empty cells are treated as empty strings, not omitted
        const jsonData = xlsx.utils.sheet_to_json(worksheet, {
          header: 0,
          defval: "",
        });

        if (!jsonData || jsonData.length === 0) {
          return res
            .status(400)
            .json({
              message: "Excel sheet is empty or has no data after header.",
            });
        }

        const internshipsToInsert = jsonData
          .map((row, index) => {
            // Match actual Excel column headers
            const name = row["Student Name"] || row["student name"];
            const company =
              row["Placed in Company"] || row["placed in company"];
            const majorSpecialization =
              row["Major Specialization"] || row["major specialization"];
            const year = row["Year"] || row["year"] || null;

            if (!name || !company) {
              // Log a warning and return null for rows missing essential data
              console.warn(
                `Row ${
                  index + 2
                } (Excel row number): Skipping due to missing Name or Company. Data: ${JSON.stringify(
                  row
                )}`
              );
              return null;
            }
            return { name, company, majorSpecialization, year };
          })
          .filter((p) => p !== null); // Filter out rows marked for skipping

        if (internshipsToInsert.length === 0) {
          return res
            .status(400)
            .json({
              message:
                "No valid internship records found in the Excel sheet (Name and Company are required for each row).",
            });
        }

        connection = await dbPool.getConnection();
        await connection.beginTransaction();

        const query =
          "INSERT INTO internships (name, company, majorSpecialization, year) VALUES (?, ?, ?, ?)";
        let successfulInserts = 0;
        const BATCH_SIZE = 100; // Optional: Insert in batches if you expect very large files
        const errors = [];

        for (let i = 0; i < internshipsToInsert.length; i++) {
          const internship = internshipsToInsert[i];
          try {
            await connection.execute(query, [
              internship.name,
              internship.company,
              internship.majorSpecialization,
              internship.year,
            ]);
            successfulInserts++;
          } catch (dbError) {
            console.error(
              `Failed to insert record: ${JSON.stringify(internship)}`,
              dbError
            );
            errors.push({
              record: internship,
              error: dbError.message,
              excel_row: jsonData.findIndex((r) => r === internship) + 2,
            });
            // If one error occurs, you might want to stop the whole batch and rollback
            // For now, we collect errors and proceed, then decide based on counts.
          }
        }

        if (errors.length > 0) {
          if (successfulInserts > 0) {
            // Partial success
            await connection.commit(); // Commit successful ones
            return res.status(207).json({
              // Multi-Status
              message: `Partially processed records. Successfully inserted: ${successfulInserts}. Failed: ${errors.length}. Check errors for details.`,
              successCount: successfulInserts,
              failureCount: errors.length,
              errors: errors,
            });
          } else {
            // All failed in the batch, rollback
            await connection.rollback();
            return res.status(500).json({
              message: `Failed to insert any valid records from the Excel sheet. All attempted insertions failed.`,
              failureCount: errors.length,
              errors: errors,
            });
          }
        } else {
          // All successful
          await connection.commit();
          res.status(201).json({
            message: `Successfully inserted ${successfulInserts} records from the Excel sheet.`,
            successCount: successfulInserts,
          });
        }
      } catch (error) {
        if (connection) await connection.rollback();
        console.error("Error processing Excel file for internships:", error);
        if (error.message && error.message.startsWith("Invalid file type")) {
          // from multer fileFilter
          return res.status(400).json({ message: error.message });
        }
        res
          .status(500)
          .json({
            message: "Failed to process Excel file.",
            error: error.message,
          });
      } finally {
        if (connection) connection.release();
      }
    }
  );

  return router;
};
