import axios, { type AxiosError } from "axios";
import { env } from "@/config/env";

// Store reference — set after store is created to avoid circular dependency
// Injected via setupHttpStore() called from StoreProvider
let storeRef: {
  getState: () => { auth: { token: string | null } };
  dispatch: (action: unknown) => void;
} | null = null;

export function setupHttpStore(store: typeof storeRef) {
  storeRef = store;
}

const httpService = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor — attach auth token to every request
httpService.interceptors.request.use((config) => {
  const token = storeRef?.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — normalize errors, handle 401 auto-logout
httpService.interceptors.response.use(
  (res) => res,
  (err: AxiosError<{ message?: string; code?: string }>) => {
    const normalizedError = {
      message: err.response?.data?.message ?? "Unexpected error occurred",
      code: err.response?.data?.code ?? "UNKNOWN",
      status: err.response?.status ?? 0,
    };

    // Auto logout when token expires
    if (err.response?.status === 401 && storeRef) {
      // Dynamically import to avoid circular dep
      import("@/modules/auth").then(({ resetAuth }) => {
        storeRef?.dispatch(resetAuth());
      });
    }

    return Promise.reject(normalizedError);
  }
);

export const http = {
  get: httpService.get.bind(httpService),
  post: httpService.post.bind(httpService),
  put: httpService.put.bind(httpService),
  patch: httpService.patch.bind(httpService),
  delete: httpService.delete.bind(httpService),
  instance: httpService,
};
