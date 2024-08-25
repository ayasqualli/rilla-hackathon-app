import db from './init-db'; // Adjust the path if necessary

// SQL statements to create tables
const createTables = () => {
  // Create Transcripts table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Transcripts (
      transcriptId TEXT PRIMARY KEY,
      content TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create Comments table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Comments (
      commentId TEXT PRIMARY KEY,
      transcriptId TEXT,
      text TEXT,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      fileUrl TEXT,
      FOREIGN KEY (transcriptId) REFERENCES Transcripts (transcriptId)
    );
  `);

  // Create Files table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Files (
      fileId TEXT PRIMARY KEY,
      fileUrl TEXT,
      commentId TEXT,
      FOREIGN KEY (commentId) REFERENCES Comments (commentId)
    );
  `);
};

// Initialize database
createTables();

console.log('Database tables created or already exist.');
