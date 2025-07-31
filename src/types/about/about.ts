import Certification from "./certification";
import TechnicalExperience from "./technical-experience";
import WorkExperience from "./work-experience";

interface About {
  aboutMe: string;
  education: string;
  hobbies: string;
  workExperience: WorkExperience[];
  certifications: Certification[];
  technicalExperience: TechnicalExperience[];
}

export default About;
