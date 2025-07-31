import { Box } from "@mui/material";
import "./about-me.scss";
import AboutMeClient from "../../../client/about-me-client/about-me-client";

interface Props {
  data: string | undefined;
}
const AboutMe = async ({ data }: Props) => {
  return (
    <Box className="about-me">
      <h1>About Me</h1>
      <AboutMeClient data={data} />
    </Box>
  );
};

export default AboutMe;
