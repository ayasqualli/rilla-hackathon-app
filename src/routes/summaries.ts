import { Router } from 'express';
import { generateSummary } from '../services/llmService'; // Ensure this file is properly set up

const router = Router();

router.get('/:transcriptId', async (req, res) => {
  const { transcriptId } = req.params;
  // Fetch transcript from the database using transcriptId
  const transcript = 'Sample transcript text'; // Replace with actual fetch logic

  try {
    const summary = await generateSummary(transcript);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
