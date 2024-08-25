import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export const requireAuth = ClerkExpressRequireAuth({
  // Optional: Set the Clerk secret key here instead of using environment variables
  // secretKey: 'your_clerk_secret_key',
});