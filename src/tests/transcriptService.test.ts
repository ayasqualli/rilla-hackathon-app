import { getAllTranscripts, getTranscriptById } from '../src/services/transcriptService';

describe('Transcript Service', () => {
  test('should fetch all transcripts', async () => {
    const transcripts = await getAllTranscripts();
    expect(transcripts).toBeDefined();
    expect(Array.isArray(transcripts)).toBe(true);
  });

  test('should fetch a transcript by ID', async () => {
    const id = 'test-id';
    const transcript = await getTranscriptById(id);
    expect(transcript).toBeDefined();
    expect(transcript.id).toBe(id);
  });
});
