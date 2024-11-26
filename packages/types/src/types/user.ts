export type User = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  clerkId: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
};
