import db from '../database/uploads/local.db/init-db';

// Get all transcripts
export const getAllTranscripts = () => {
  const stmt = db.prepare('SELECT * FROM Transcripts');
  return stmt.all(); // Returns an array of all transcripts
};

// Get transcript by ID
export const getTranscriptById = (id: number) => {
  const stmt = db.prepare('SELECT * FROM Transcripts WHERE transcriptId = ?');
  return stmt.get(id); // Returns a single transcript or undefined if not found
};
