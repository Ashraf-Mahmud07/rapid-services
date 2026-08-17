import { baseApi } from "@/store/api/baseApi";
import { URLS } from "@/shared/constants/urls";
import {
  loginResponseSchema,
  registerResponseSchema,
  type LoginFormData,
  type RegisterFormData,
} from "../validation/auth.schema";
import type { LoginResponse, RegisterResponse } from "../types/auth.types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginFormData>({
      query: (credentials) => ({
        url: URLS.AUTH.LOGIN,
        method: "POST",
        data: credentials,
      }),
      transformResponse: (response: unknown): LoginResponse => {
        return loginResponseSchema.parse(response);
      },
    }),
    register: build.mutation<RegisterResponse, RegisterFormData>({
      query: (data) => ({
        url: URLS.AUTH.REGISTER,
        method: "POST",
        data,
      }),
      transformResponse: (response: unknown): RegisterResponse => {
        return registerResponseSchema.parse(response);
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
