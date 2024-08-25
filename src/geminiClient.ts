import axios from 'axios';

const geminiClient = axios.create({
  baseURL: 'https://api.gemini.ai/v1', // Replace with actual Gemini API base URL
  headers: {
    'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default geminiClient;
