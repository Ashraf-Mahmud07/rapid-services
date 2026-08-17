import type {
  UserSchema,
  LoginResponseSchema,
  RegisterResponseSchema,
} from "../validation/auth.schema";

export type User = UserSchema;
export type LoginResponse = LoginResponseSchema;
export type RegisterResponse = RegisterResponseSchema;

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}
