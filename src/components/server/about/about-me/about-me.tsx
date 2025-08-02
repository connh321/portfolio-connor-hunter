/**
 * Client-side component for the About Me section.
 *
 * This component displays a heading and renders the AboutMeClient component with the provided data.
 *
 * @module AboutMe
 */
import { Box, Typography } from "@mui/material";
import AboutMeClient from "../../../client/about/about-me-client/about-me-client";

/**
 * Props for the AboutMe component.
 *
 * @property {string|undefined} data - The data to pass to the AboutMeClient component.
 * @property {string|undefined} aboutMeShort - The short about me text to pass to the AboutMeClient component.
 */
interface Props {
  data: string | undefined;
  aboutMeShort: string | undefined;
}

/**
 * AboutMe component.
 *
 * This component displays a heading and renders the AboutMeClient component with the provided data.
 *
 * @param {Props} props - The props for the component.
 */
const AboutMe = async ({ data, aboutMeShort }: Props) => {
  return (
    <Box className="about-me">
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        About Me
      </Typography>
      <AboutMeClient data={data} aboutMeShort={aboutMeShort} />
    </Box>
  );
};

export default AboutMe;
