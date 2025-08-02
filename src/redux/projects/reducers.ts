import { PayloadAction } from "@reduxjs/toolkit";
import IProject from "@/src/types/project/project";

export const projectsSliceReducers = {
  setProjects(_: IProject[], action: PayloadAction<IProject[]>) {
    return action.payload;
  },
};
