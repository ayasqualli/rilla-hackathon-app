import request from 'supertest';
import express from 'express';
import commentsRouter from '../src/routes/comments';

const app = express();
app.use(express.json());
app.use('/comments', commentsRouter);

describe('Comments API', () => {
  it('should add a new comment', async () => {
    const response = await request(app)
      .post('/comments')
      .send({ transcriptId: 'mock-transcript-id', text: 'Sample comment', fileUrl: 'http://example.com/file' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('commentId');
  });

  it('should edit an existing comment', async () => {
    const mockId = 'mock-id'; // Replace with actual mock ID setup
    const response = await request(app)
      .put(`/comments/${mockId}`)
      .send({ text: 'Updated comment', fileUrl: 'http://example.com/updated-file' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('commentId', mockId);
    expect(response.body).toHaveProperty('text', 'Updated comment');
  });

  it('should delete a comment', async () => {
    const mockId = 'mock-id'; // Replace with actual mock ID setup
    const response = await request(app).delete(`/comments/${mockId}`);
    expect(response.status).toBe(204);
  });
});
