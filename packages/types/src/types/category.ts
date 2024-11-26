import type { Post } from "./post";

export type Category = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  posts: Post[];
};
