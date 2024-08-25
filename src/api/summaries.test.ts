import request from 'supertest';
import express from 'express';
import { expect } from 'chai';
import summariesRoutes from './summariesRoutes'; // Ensure correct path

const app = express();
app.use(express.json()); // Middleware if needed
app.use('/api/summaries', summariesRoutes);

describe('GET /api/summaries/:transcriptId', () => {
  it('should generate a summary', async () => {
    const response = await request(app).get('/api/summaries/1'); // Replace with actual transcript ID
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('summary');
  });
});
