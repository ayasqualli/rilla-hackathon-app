import db from '../database/uploads/local.db/init-db';

export const getAllTranscripts = async () => {
  const stmt = db.prepare('SELECT * FROM Transcripts');
  return stmt.all();
};

export const getTranscriptById = async (id: string) => {
  const stmt = db.prepare('SELECT * FROM Transcripts WHERE transcriptId = ?');
  return stmt.get(id);
};
