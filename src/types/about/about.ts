import ICertification from "./certification";
import ITechnicalExperience from "./technical-experience";
import IWorkExperience from "./work-experience";

interface IAbout {
  aboutMe: string;
  education: string;
  hobbies: string;
  workExperience: IWorkExperience[];
  certifications: ICertification[];
  technicalExperience: ITechnicalExperience[];
}

export default IAbout;
