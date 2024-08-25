import db from '../db';

// This service is for handling file metadata. For simplicity, we assume files are managed elsewhere.
export const uploadAttachment = async (file: any) => {
  const stmt = db.prepare(`
    INSERT INTO Files (fileId, fileUrl, commentId)
    VALUES (?, ?, ?)
  `);
  const result = stmt.run([
    /* Generate a unique ID for the file */
    `${Date.now()}`,
    file.path, // or another property depending on your file handling
    /* You might associate the file with a comment if needed */
    null,
  ]);
  return result;
};

export const getAttachmentById = async (id: string) => {
  const stmt = db.prepare('SELECT * FROM Files WHERE fileId = ?');
  return stmt.get(id);
};
