import { Router } from 'express';
import { getAllTranscripts, getTranscriptById } from '../services/transcriptService';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const transcripts = await getAllTranscripts();
    res.json(transcripts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transcripts' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const transcript = await getTranscriptById(id);
    if (!transcript) {
      return res.status(404).json({ error: 'Transcript not found' });
    }
    res.json(transcript);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching transcript' });
  }
});

export default router;
