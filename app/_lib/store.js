import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/slices/userSlice";
import cartReducer from "@/app/slices/cartSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
    // devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();
