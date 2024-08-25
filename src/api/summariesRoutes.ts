import { Router } from 'express';

const router = Router();

router.get('/:transcriptId', async (req, res) => {
  const { transcriptId } = req.params;
  // Mock summary for demonstration
  res.status(200).json({ summary: `Summary for transcript ${transcriptId}` });
});

export default router;
