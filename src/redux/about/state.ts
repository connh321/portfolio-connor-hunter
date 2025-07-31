import { createSlice } from "@reduxjs/toolkit";
import { aboutSliceReducers } from "./reducers";
import About from "@/src/types/about/about";

export const initialState: About = {
  aboutMe: "",
  education: "",
  hobbies: "",
  workExperience: [],
  certifications: [],
  technicalExperience: [],
};

export const aboutSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: aboutSliceReducers,
});
