import db from './database/uploads/local.db/init-db';

const testDB = () => {
  // Create a sample entry
  db.exec(`
    CREATE TABLE IF NOT EXISTS Transcripts (
      transcriptId INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL
    );
  `);

  db.exec(`
    INSERT INTO Transcripts (content) VALUES ('Sample transcript content');
  `);

  // Fetch all entries
  const transcripts = db.prepare('SELECT * FROM Transcripts').all();
  console.log('Transcripts:', transcripts);

  // Fetch by ID
  const transcript = db.prepare('SELECT * FROM Transcripts WHERE transcriptId = ?').get(1);
  console.log('Transcript with ID 1:', transcript);
};

testDB();
