"use client";

import { Provider } from "react-redux";
import { makeStore, type AppStore } from "./store";
import { setupHttpStore } from "@/shared/services/http.service";

const store: AppStore = makeStore();

// Wire the store reference to the http service interceptors
// This must run before any API call is made
setupHttpStore(store);

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
