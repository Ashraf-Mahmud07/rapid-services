import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { authReducer } from "@/modules/auth";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
});
