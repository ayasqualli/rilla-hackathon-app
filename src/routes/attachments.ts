import { Router } from 'express';
import upload from '../middleware/uploadMiddleware';
import { uploadAttachment, getAttachmentById } from '../services/attachmentService';

const router = Router();

// Route to upload an attachment
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    // Ensure a file was uploaded
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Call service to handle file storage
    const attachment = await uploadAttachment(file);
    res.status(201).json(attachment);
  } catch (error) {
    // Handle unexpected errors
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get an attachment by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const attachment = await getAttachmentById(id);

    // Ensure the attachment was found
    if (!attachment) {
      return res.status(404).json({ error: 'Attachment not found' });
    }

    res.json(attachment);
  } catch (error) {
    // Handle unexpected errors
    console.error('Error retrieving file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
