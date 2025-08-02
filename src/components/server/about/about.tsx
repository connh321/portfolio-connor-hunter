/**
 * Server-side component for the About page.
 *
 * This component renders the About page with various sections, including About Me, Education, Hobbies, Work Experience, Certifications, and Technical Experience.
 *
 * @module About
 */
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

/**
 * Props for the About component.
 *
 * @property {IAbout|null} data - The about data to render the various sections.
 */
interface Props {
  data: IAbout | null;
}

/**
 * About component.
 *
 * This component renders the About page with various sections, including About Me, Education, Hobbies, Work Experience, Certifications, and Technical Experience.
 *
 * @param {Props} props - The props for the component.
 */
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
