import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./types/auth.types";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Called after successful login/register — sets user + token
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Called on logout — clears all auth state
    reset: () => initialState,
  },
});

export const { setCredentials, reset } = authSlice.actions;
export default authSlice.reducer;
