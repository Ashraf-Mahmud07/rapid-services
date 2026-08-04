import { baseApi } from "@/store/api/baseApi";
import { URLS } from "@/shared/constants/urls";
import type { LoginFormData, RegisterFormData } from "./validation/auth.schema";
import type { LoginResponse, RegisterResponse } from "./types/auth.types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginFormData>({
      query: (credentials) => ({ url: URLS.AUTH.LOGIN, method: "POST", data: credentials }),
    }),
    register: build.mutation<RegisterResponse, RegisterFormData>({
      query: (data) => ({ url: URLS.AUTH.REGISTER, method: "POST", data }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
