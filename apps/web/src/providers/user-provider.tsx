"use client";
import { apiClient } from "@/api/apiClient";
import { createContext, type ReactNode, useContext } from "react";

const UserContext = createContext<string | null>(null);

export const UserContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string | null;
}) => {
  apiClient.interceptors.request.use(
    async (config) => {
      if (value) {
        config.headers.Authorization = `Bearer ${value}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(
        error instanceof Error
          ? error
          : new Error(error.message || "Unknown error")
      );
    }
  );

  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(
        error instanceof Error
          ? error
          : new Error(error.message || "Unknown error")
      );
    }
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuthToken = () => {
  const authToken = useContext(UserContext);
  if (!authToken) {
    throw new Error("Debes usar el proveedor UserContext");
  }
  return authToken;
};
