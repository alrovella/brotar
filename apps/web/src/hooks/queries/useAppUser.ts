import { useQuery } from "@tanstack/react-query";
import type { User } from "@repo/types";
import { apiClient } from "@/api/apiClient";

export function useAppUser() {
  const { data, refetch, isLoading, isRefetching } = useQuery<User>({
    queryKey: ["getAppUser"],
    queryFn: async () => {
      return apiClient.get("/users/me").then((res) => res.data);
    },
  });

  return { data, isLoading, refetch, isRefetching };
}
