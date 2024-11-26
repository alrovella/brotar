import type { Post } from "./post";

export type Image = {
  id: string;
  url: string;
  postId: string;
  post: Post;
};
