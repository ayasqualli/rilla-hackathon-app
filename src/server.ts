import express from 'express';
import dotenv from 'dotenv';
import { requireAuth } from './clerkMiddleware';  // Middleware for Clerk authentication
import { errorHandler } from './errorHandler';  // Error handling middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Public route
app.get('/public', (req, res) => {
  res.json({ message: 'This is a public route' });
});

// Protected route
app.get('/protected', requireAuth, (req, res) => {
  if (!req.auth) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  res.json({ message: 'This is a protected route', userId: req.auth.userId });
});

// Error handling middleware should be added after all routes
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
