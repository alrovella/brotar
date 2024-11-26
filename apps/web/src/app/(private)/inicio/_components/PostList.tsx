"use client";

import { usePosts } from "@/hooks/queries/usePosts";
import PostCard from "./PostCard.";

const PostList = () => {
  const { data } = usePosts();

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
