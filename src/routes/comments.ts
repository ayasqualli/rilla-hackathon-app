import { Router } from 'express';
import { addComment, editComment, deleteComment } from '../services/commentService'; // Ensure this path is correct

const router = Router();

router.post('/', async (req, res) => {
  const { transcriptId, text, fileUrl } = req.body;
  try {
    const comment = await addComment(transcriptId, text, fileUrl);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { text, fileUrl } = req.body;
  try {
    const comment = await editComment(id, text, fileUrl);
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteComment(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
