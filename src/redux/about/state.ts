import { createSlice } from "@reduxjs/toolkit";
import { aboutSliceReducers } from "./reducers";
import IAbout from "@/src/types/about/about";

export const initialState: IAbout = {
  aboutMe: "",
  education: "",
  hobbies: "",
  workExperience: [],
  certifications: [],
  technicalExperience: [],
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: aboutSliceReducers,
});
