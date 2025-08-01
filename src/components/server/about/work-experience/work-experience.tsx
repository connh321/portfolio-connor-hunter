import { Box, Typography } from "@mui/material";
import "./work-experience.scss";
import WorkExperienceClient from "@/src/components/client/about/work-experience-client/work-experience-client";
import IWorkExperience from "@/src/types/about/work-experience";

interface Props {
  data: IWorkExperience[] | undefined;
}
const WorkExperience = async ({ data }: Props) => {
  return (
    <Box className="hobbies">
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Work Experience
      </Typography>
      <WorkExperienceClient data={data} />
    </Box>
  );
};

export default WorkExperience;
