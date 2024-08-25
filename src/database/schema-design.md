**Transcripts Table:**
- `transcriptId` (string, primary key)
- `content` (string)
- `createdAt` (timestamp)

**Comments Table:**
- `commentId` (string, primary key)
- `transcriptId` (string, foreign key)
- `text` (string)
- `createdAt` (timestamp)
- `fileUrl` (string, optional)

**Files Table:**
- `fileId` (string, primary key)
- `fileUrl` (string)
- `commentId` (string, foreign key)
