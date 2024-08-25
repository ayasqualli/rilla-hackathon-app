import db from './database';

const createTables = () => {
  // Create tables if they don't exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS transcripts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL
    );
    -- Add other tables as needed
  `);
};

// Run the setup script
createTables();