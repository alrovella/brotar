import { useQuery } from "@tanstack/react-query";
import type { Category } from "@repo/types";
import { apiClient } from "@/api/apiClient";

export function useCategories() {
  const { data, refetch, isLoading, isRefetching } = useQuery<Category[]>({
    queryKey: ["getCategories"],
    queryFn: async () => {
      return apiClient.get("/categories").then((res) => res.data);
    },
  });

  return { data, isLoading, refetch, isRefetching };
}
