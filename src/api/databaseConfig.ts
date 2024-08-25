import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(__dirname, '../database/local.db'), {
  verbose: console.log,
});

export default db;
