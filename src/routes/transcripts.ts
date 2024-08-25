import db from '../databaseConfig';

export const getAllTranscripts = async () => {
  const stmt = db.prepare('SELECT * FROM transcripts');
  return stmt.all();
};

export const getTranscriptById = async (id: string) => {
  const stmt = db.prepare('SELECT * FROM transcripts WHERE transcriptId = ?');
  return stmt.get(id);
};
