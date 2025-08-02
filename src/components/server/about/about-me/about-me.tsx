import { Box, Typography } from "@mui/material";
import AboutMeClient from "../../../client/about/about-me-client/about-me-client";

interface Props {
  data: string | undefined;
  aboutMeShort: string | undefined;
}
const AboutMe = async ({ data, aboutMeShort }: Props) => {
  return (
    <Box className="about-me">
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        About Me
      </Typography>
      <AboutMeClient data={data} aboutMeShort={aboutMeShort} />
    </Box>
  );
};

export default AboutMe;
