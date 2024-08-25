import request from 'supertest';
import express from 'express';
import summariesRouter from '../src/routes/summaries';

const app = express();
app.use(express.json());
app.use('/summaries', summariesRouter);

describe('Summaries API', () => {
  it('should generate a summary for a transcript', async () => {
    const mockTranscriptId = 'mock-transcript-id'; // Replace with actual mock transcript ID setup
    const response = await request(app).get(`/summaries/${mockTranscriptId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('summary');
  });
});
