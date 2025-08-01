import { Box, Typography } from "@mui/material";
import "./technical-experience.scss";
import TechnicalExperienceClient from "@/src/components/client/about/technical-experience-client/technical-experience-client";
import ITechnicalExperience from "@/src/types/about/technical-experience";

interface Props {
  data: ITechnicalExperience[] | undefined;
}
const TechnicalExperience = async ({ data }: Props) => {
  return (
    <Box className="hobbies">
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Technical Experience
      </Typography>
      <TechnicalExperienceClient data={data} />
    </Box>
  );
};

export default TechnicalExperience;
