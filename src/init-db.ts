import Database from 'better-sqlite3';
import path from 'path';

// Initialize the SQLite database
const db = new Database(path.join(__dirname, '../database/local.db'), {
  verbose: console.log, // Logs SQL queries to the console
});

export default db;
