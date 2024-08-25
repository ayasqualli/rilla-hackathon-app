import request from 'supertest';
import express from 'express';
import path from 'path';
import attachmentsRouter from '../src/routes/attachments';
import upload from '../src/middleware/uploadMiddleware';  // Adjust path if needed
import { uploadAttachment, getAttachmentById } from '../src/services/attachmentService';

const app = express();

// Middleware setup for testing file uploads
app.use(express.json());

// Use the multer middleware only for the upload route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send({ message: 'File uploaded successfully', filePath: req.file.path });
});

app.use('/attachments', attachmentsRouter);

describe('Attachments API', () => {
  // Mock file upload test
  it('should upload a file', async () => {
    const response = await request(app)
      .post('/upload')
      .attach('file', Buffer.from('file content'), 'test.mp3'); // Mock file upload

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'File uploaded successfully');
    expect(response.body).toHaveProperty('filePath');
    expect(typeof response.body.filePath).toBe('string');
  });

  // Mock data setup for retrieval test
  it('should get an attachment by ID', async () => {
    const mockId = 'mock-id'; // Replace with actual mock ID setup
    const mockFileUrl = `http://localhost:3000/uploads/${mockId}`;

    // Mock the service function directly
    jest.spyOn(attachmentService, 'getAttachmentById').mockResolvedValue({
      fileUrl: mockFileUrl,
      commentId: mockId,
    });

    const response = await request(app).get(`/attachments/${mockId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('fileUrl', mockFileUrl);
    expect(response.body).toHaveProperty('commentId', mockId);
  });

  // Cleanup after tests
  afterAll(() => {
    // Clean up any files or resources if necessary
    // Example: delete files in the 'uploads' directory
  });
});
