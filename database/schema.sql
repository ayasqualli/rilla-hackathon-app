CREATE TABLE IF NOT EXISTS transcripts (
  transcriptId TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments (
  commentId TEXT PRIMARY KEY,
  transcriptId TEXT NOT NULL,
  text TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fileUrl TEXT,
  FOREIGN KEY (transcriptId) REFERENCES transcripts (transcriptId)
);

CREATE TABLE IF NOT EXISTS files (
  fileId TEXT PRIMARY KEY,
  fileUrl TEXT NOT NULL,
  commentId TEXT,
  FOREIGN KEY (commentId) REFERENCES comments (commentId)
);
