import { configureStore } from "@reduxjs/toolkit";
import { aboutSlice } from "./about/state";
import { projectsSlice } from "./projects/state";

export const store = configureStore({
  reducer: {
    about: aboutSlice.reducer,
    projects: projectsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
