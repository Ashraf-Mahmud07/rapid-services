import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { authReducer } from "@/modules/auth";
import { productFilterReducer } from "@/modules/product";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  productFilter: productFilterReducer,
});
