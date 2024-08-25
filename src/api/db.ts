import betterSqlite3 from 'better-sqlite3';

const db = betterSqlite3('database.db');

export const getAttachmentById = (id: string) => {
  return db.prepare('SELECT * FROM attachments WHERE id = ?').get(id);
};

export const addAttachment = (filePath: string) => {
  return db.prepare('INSERT INTO attachments (filePath) VALUES (?)').run(filePath);
};
