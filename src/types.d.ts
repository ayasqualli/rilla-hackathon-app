// src/types.d.ts
import { Auth } from '@clerk/clerk-sdk-node';

declare global {
  namespace Express {
    interface Request {
      auth?: Auth;
    }
  }
}
