"use server";
import { Box, Stack } from "@mui/material";
import "./about.scss";
import AboutMe from "./about-me/about-me";
import Education from "./education/education";
import TechnicalExperience from "./technical-experience/technical-experience";
import Certifications from "./certifications/certifications";
import getAboutData from "@/src/lib/about";
import WorkExperience from "./work-experience/work-experience";
import Hobbies from "./hobbies/hobbies";
const About = async () => {
  const portfolio = await getAboutData();

  return (
    <Box className="about">
      <Stack direction="column" spacing={2}>
        <AboutMe data={portfolio?.aboutMe}></AboutMe>
        <Education></Education>
        <Hobbies></Hobbies>
        <WorkExperience></WorkExperience>
        <Certifications></Certifications>
        <TechnicalExperience></TechnicalExperience>
      </Stack>
    </Box>
  );
};

export default About;
