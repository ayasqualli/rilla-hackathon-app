import db from '../databaseConfig';

export const addComment = async (transcriptId: string, text: string, fileUrl?: string) => {
  const stmt = db.prepare('INSERT INTO comments (commentId, transcriptId, text, createdAt, fileUrl) VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?)');
  return stmt.run(generateUniqueId(), transcriptId, text, fileUrl);
};

export const editComment = async (id: string, text: string, fileUrl?: string) => {
  const stmt = db.prepare('UPDATE comments SET text = ?, fileUrl = ? WHERE commentId = ?');
  return stmt.run(text, fileUrl, id);
};

export const deleteComment = async (id: string) => {
  const stmt = db.prepare('DELETE FROM comments WHERE commentId = ?');
  return stmt.run(id);
};
