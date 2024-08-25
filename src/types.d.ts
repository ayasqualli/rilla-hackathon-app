// src/types.d.ts
import { User } from '@clerk/clerk-sdk-node';
import { Multer } from 'multer'; // Import Multer types

declare global {
  namespace Express {
    interface Request {
      auth?: User;
      file?: Multer.File; // Add Multer file type
    }
  }
}
