import request from 'supertest';
import express from 'express';
import multer from 'multer';
import attachmentsRouter from '../src/routes/attachments';

const app = express();
const upload = multer({ dest: 'uploads/' }); // Configure as needed

app.use(express.json());
app.use('/attachments', upload.single('file'), attachmentsRouter);

describe('Attachments API', () => {
  it('should upload a file', async () => {
    const response = await request(app)
      .post('/attachments')
      .attach('file', Buffer.from('file content'), 'test.txt'); // Mock file upload

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('fileUrl');
    expect(response.body).toHaveProperty('commentId');
  });

  it('should get an attachment by ID', async () => {
    const mockId = 'mock-id'; // Replace with actual mock ID setup
    const mockFileUrl = `http://localhost:3000/uploads/${mockId}`;

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ fileUrl: mockFileUrl, commentId: mockId }),
      status: 200
    } as Response);

    const response = await request(app).get(`/attachments/${mockId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('fileUrl', mockFileUrl);
    expect(response.body).toHaveProperty('commentId', mockId);
  });
});
