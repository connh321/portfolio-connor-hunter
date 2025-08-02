/**
 * Client-side component for the Work Experience section.
 *
 * This component displays a heading and renders the WorkExperienceClient component with the provided data.
 *
 * @module WorkExperience
 */
import { Box, Typography } from "@mui/material";
import "./work-experience.scss";
import WorkExperienceClient from "@/src/components/client/about/work-experience-client/work-experience-client";
import IWorkExperience from "@/src/types/about/work-experience";

/**
 * Props for the WorkExperience component.
 *
 * @property {IWorkExperience[]|undefined} data - The list of work experiences to pass to the WorkExperienceClient component.
 */
interface Props {
  data: IWorkExperience[] | undefined;
}

/**
 * WorkExperience component.
 *
 * This component displays a heading and renders the WorkExperienceClient component with the provided data.
 *
 * @param {Props} props - The props for the component.
 */
const WorkExperience = async ({ data }: Props) => {
  return (
    <Box className="hobbies">
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Work Experience
      </Typography>
      <WorkExperienceClient data={data} />
    </Box>
  );
};

export default WorkExperience;
