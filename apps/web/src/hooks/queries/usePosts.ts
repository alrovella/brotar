import { useQuery } from "@tanstack/react-query";
import type { Post } from "@repo/types";
import { apiClient } from "@/api/apiClient";

export function usePosts() {
  const { data, refetch, isLoading, isRefetching } = useQuery<Post[]>({
    queryKey: ["getPosts"],
    queryFn: async () => {
      return apiClient.get("/posts").then((res) => res.data);
    },
  });

  return { data, isLoading, refetch, isRefetching };
}

export function usePostBySlug(slug: string) {
  const { data, refetch, isLoading, isRefetching } = useQuery<Post>({
    queryKey: ["getPostBySlug", slug],
    queryFn: async () => {
      return apiClient.get(`/posts/${slug}`).then((res) => res.data);
    },
  });

  return { data, isLoading, refetch, isRefetching };
}
