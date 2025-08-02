import { configureStore } from "@reduxjs/toolkit";
import { aboutSlice } from "./about/state";
export const store = configureStore({
  reducer: {
    portfolio: aboutSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
