import type { Category } from "./category";
import type { Comment } from "./comment";
import type { Image } from "./image";
import type { User } from "./user";

export type Post = {
  id: string;
  title: string;
  slug: string;
  keywords: string | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
  images: Image[];
  categoryId: string;
  category: Category;
  visits: number;
  userId: string;
  user: User;
};
