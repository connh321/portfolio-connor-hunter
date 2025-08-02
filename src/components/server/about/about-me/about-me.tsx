import { Box, Typography } from "@mui/material";
import AboutMeClient from "../../../client/about/about-me-client/about-me-client";

interface Props {
  data: string | undefined;
}
const AboutMe = async ({ data }: Props) => {
  return (
    <Box className="about-me">
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        About Me
      </Typography>
      <AboutMeClient data={data} />
    </Box>
  );
};

export default AboutMe;
