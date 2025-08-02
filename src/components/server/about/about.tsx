"use server";
import { Box, Stack, Typography } from "@mui/material";
import "./about.scss";
import AboutMe from "./about-me/about-me";
import TechnicalExperience from "./technical-experience/technical-experience";
import Certifications from "./certifications/certifications";
import WorkExperience from "./work-experience/work-experience";
import Hobbies from "./hobbies/hobbies";
import Education from "./education/education";
import IAbout from "@/src/types/about/about";

interface Props {
  data: IAbout | null;
}
const About = async ({ data }: Props) => {
  return (
    <Box id="about">
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: "1rem !important",
          }}
        >
          Welcome!
        </Typography>
        <AboutMe
          data={data?.aboutMe}
          aboutMeShort={data?.aboutMeShort}
        ></AboutMe>
        <Education data={data?.education}></Education>
        <Hobbies data={data?.hobbies}></Hobbies>
        <WorkExperience data={data?.workExperience}></WorkExperience>
        <Certifications data={data?.certifications}></Certifications>
        <TechnicalExperience
          data={data?.technicalExperience}
        ></TechnicalExperience>
      </Stack>
    </Box>
  );
};

export default About;
