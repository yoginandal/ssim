const express = require("express");
const router = express.Router();
const multer = require('multer'); // For handling file uploads
const xlsx = require('xlsx');   // For parsing Excel files

// Configure multer for Excel file uploads (stores file in buffer)
const excelStorage = multer.memoryStorage();
const excelFileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || // .xlsx
        file.mimetype === 'application/vnd.ms-excel' || // .xls
        file.mimetype === 'text/csv' // .csv (optional, if you want to support CSV too)
    ) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only Excel (.xlsx, .xls) or CSV (.csv) files are allowed.'), false);
    }
};
const uploadExcel = multer({ storage: excelStorage, fileFilter: excelFileFilter });

// This function will be passed the dbPool from server.js
module.exports = function (dbPool) {
  // POST endpoint to submit a new placement record
  router.post("/", async (req, res) => {
    console.log("Received headers:", JSON.stringify(req.headers, null, 2));
    console.log("Received body:", JSON.stringify(req.body, null, 2));

    const { title, authors, journal, classification, year } = req.body;

    if (!title || !authors || !journal) {
      return res
        .status(400)
        .json({ message: "Missing required fields: title, authors, journal." });
    }

    let connection;
    try {
      connection = await dbPool.getConnection();
      const query =
        "INSERT INTO publications (title, authors, journal, classification, year) VALUES (?, ?, ?, ?, ?)";
      const [result] = await connection.execute(query, [
        title,
        authors,
        journal,
        classification,
        year,
      ]);

      res.status(201).json({
        message: "Publication record created successfully!",
        publicationId: result.insertId,
        record: { id: result.insertId, ...req.body },
      });
    } catch (error) {
      console.error("Error creating publication record:", error);
      res
        .status(500)
        .json({
          message: "Failed to create publication record.",
          error: error.message,
        });
    } finally {
      if (connection) connection.release();
    }
  });

  // GET endpoint to fetch all placement records
  router.get("/", async (req, res) => {
    let connection;
    try {
      connection = await dbPool.getConnection();
      const [rows] = await connection.query(
        "SELECT id, title, authors, journal, classification, year, created_at FROM publications ORDER BY id"
      );
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching publication records:", error);
      res
        .status(500)
        .json({
          message: "Failed to fetch publication records.",
          error: error.message,
        });
    } finally {
      if (connection) connection.release();
    }
  });

  // POST endpoint for Excel file upload
  router.post('/upload/excel', uploadExcel.single('publicationExcelFile'), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No Excel file uploaded.' });
    }

    let connection;
    try {
      const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      // header: 0 uses the first row as headers and keys for the JSON objects
      // defval: '' ensures empty cells are treated as empty strings, not omitted
      const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 0, defval: '' });

      if (!jsonData || jsonData.length === 0) {
        return res.status(400).json({ message: 'Excel sheet is empty or has no data after header.' });
      }

      const publicationsToInsert = jsonData.map((row, index) => {
        // Match actual Excel column headers
        const title = row['Title'] || row['title']; 
        const authors = row['Authors'] || row['authors'];
        const journal = row['Journal'] || row['journal'];
        const classification = row['Classification'] || row['classification'];
        const year = row['Year'] || row['year'] || null;

        if (!title || !authors || !journal) {
          // Log a warning and return null for rows missing essential data
          console.warn(`Row ${index + 2} (Excel row number): Skipping due to missing Title or Authors or Journal. Data: ${JSON.stringify(row)}`);
          return null;
        }
        return { title, authors, journal, classification, year };
      }).filter(p => p !== null); // Filter out rows marked for skipping

      if (publicationsToInsert.length === 0) {
        return res.status(400).json({ message: 'No valid publication records found in the Excel sheet (Title and Authors and Journal are required for each row).' });
      }

      connection = await dbPool.getConnection();
      await connection.beginTransaction();

      const query = "INSERT INTO publications (title, authors, journal, classification, year) VALUES (?, ?, ?, ?, ?)";
      let successfulInserts = 0;
      const BATCH_SIZE = 100; // Optional: Insert in batches if you expect very large files
      const errors = [];

      for (let i = 0; i < publicationsToInsert.length; i++) {
        const publication = publicationsToInsert[i];
        try {
          await connection.execute(query, [publication.title, publication.authors, publication.journal, publication.classification, publication.year]);
          successfulInserts++;
        } catch (dbError) {
          console.error(`Failed to insert record: ${JSON.stringify(publication)}`, dbError);
          errors.push({ record: publication, error: dbError.message, excel_row: jsonData.findIndex(r => r === publication) + 2});
          // If one error occurs, you might want to stop the whole batch and rollback
          // For now, we collect errors and proceed, then decide based on counts.
        }
      }

      if (errors.length > 0) {
        if (successfulInserts > 0) { // Partial success
          await connection.commit(); // Commit successful ones
          return res.status(207).json({ // Multi-Status
            message: `Partially processed records. Successfully inserted: ${successfulInserts}. Failed: ${errors.length}. Check errors for details.`,
            successCount: successfulInserts,
            failureCount: errors.length,
            errors: errors
          });
        } else { // All failed in the batch, rollback
          await connection.rollback();
          return res.status(500).json({
            message: `Failed to insert any valid records from the Excel sheet. All attempted insertions failed.`,
            failureCount: errors.length,
            errors: errors
          });
        }
      } else {
        // All successful
        await connection.commit();
        res.status(201).json({
          message: `Successfully inserted ${successfulInserts} records from the Excel sheet.`,                    
          successCount: successfulInserts
        });
      }

    } catch (error) {
      if (connection) await connection.rollback(); 
      console.error('Error processing Excel file for publications:', error);
      if (error.message && error.message.startsWith('Invalid file type')) { // from multer fileFilter
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: 'Failed to process Excel file.', error: error.message });
    } finally {
      if (connection) connection.release();
    }
  });

  return router;
};
