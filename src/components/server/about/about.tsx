"use server";
import { Box, Stack, Typography } from "@mui/material";
import "./about.scss";
import AboutMe from "./about-me/about-me";
import TechnicalExperience from "./technical-experience/technical-experience";
import Certifications from "./certifications/certifications";
import getAboutData from "@/src/lib/about";
import WorkExperience from "./work-experience/work-experience";
import Hobbies from "./hobbies/hobbies";
import Education from "./education/education";
const About = async () => {
  const portfolio = await getAboutData();

  return (
    <Box id="about">
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: "1rem !important",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Welcome!
        </Typography>
        <AboutMe data={portfolio?.aboutMe}></AboutMe>
        <Education data={portfolio?.education}></Education>
        <Hobbies data={portfolio?.hobbies}></Hobbies>
        <WorkExperience data={portfolio?.workExperience}></WorkExperience>
        <Certifications data={portfolio?.certifications}></Certifications>
        <TechnicalExperience
          data={portfolio?.technicalExperience}
        ></TechnicalExperience>
      </Stack>
    </Box>
  );
};

export default About;
