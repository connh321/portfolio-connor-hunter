import IProject from "@/src/types/project/project";
import { createSlice } from "@reduxjs/toolkit";
import { projectsSliceReducers } from "./reducers";

export const initialState: IProject[] = [];

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: projectsSliceReducers,
});
