import { PayloadAction } from "@reduxjs/toolkit";
import WorkExperience from "@/src/types/about/work-experience";
import Certification from "@/src/types/about/certification";
import TechnicalExperience from "@/src/types/about/technical-experience";
import About from "@/src/types/about/about";

export const aboutSliceReducers = {
  setAboutMe(state: About, action: PayloadAction<string>) {
    state.aboutMe = action.payload;
  },
  setEducation(state: About, action: PayloadAction<string>) {
    state.education = action.payload;
  },
  setHobbies(state: About, action: PayloadAction<string>) {
    state.hobbies = action.payload;
  },
  setWorkExperience(state: About, action: PayloadAction<WorkExperience[]>) {
    state.workExperience = action.payload;
  },
  setCertifications(state: About, action: PayloadAction<Certification[]>) {
    state.certifications = action.payload;
  },
  setTechnicalExperience(
    state: About,
    action: PayloadAction<TechnicalExperience[]>,
  ) {
    state.technicalExperience = action.payload;
  },
};
