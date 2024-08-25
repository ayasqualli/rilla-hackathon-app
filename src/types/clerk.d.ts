import { User } from '@clerk/clerk-sdk-node';

declare global {
  namespace Express {
    interface Request {
      user?: User; // or any other relevant property from Clerk
    }
  }
}
