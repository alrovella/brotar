import type { Post } from "./post";
import type { User } from "./user";

export type Comment = {
  id: string;
  content: string;
  postId: string;
  post: Post;
  userId: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
};
