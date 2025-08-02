import { PayloadAction } from "@reduxjs/toolkit";
import IWorkExperience from "@/src/types/about/work-experience";
import ICertification from "@/src/types/about/certification";
import ITechnicalExperience from "@/src/types/about/technical-experience";
import IAbout from "@/src/types/about/about";

export const aboutSliceReducers = {
  setAboutMe(state: IAbout, action: PayloadAction<string>) {
    state.aboutMe = action.payload;
  },
  setAboutMeShort(state: IAbout, action: PayloadAction<string>) {
    state.aboutMeShort = action.payload;
  },
  setEducation(state: IAbout, action: PayloadAction<string>) {
    state.education = action.payload;
  },
  setHobbies(state: IAbout, action: PayloadAction<string>) {
    state.hobbies = action.payload;
  },
  setWorkExperience(state: IAbout, action: PayloadAction<IWorkExperience[]>) {
    state.workExperience = action.payload;
  },
  setCertifications(state: IAbout, action: PayloadAction<ICertification[]>) {
    state.certifications = action.payload;
  },
  setTechnicalExperience(
    state: IAbout,
    action: PayloadAction<ITechnicalExperience[]>
  ) {
    state.technicalExperience = action.payload;
  },
};
