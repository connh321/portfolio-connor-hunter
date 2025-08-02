/**
 * Client-side component for the Technical Experience section.
 *
 * This component displays a heading and renders the TechnicalExperienceClient component with the provided data.
 *
 * @module TechnicalExperience
 */
import { Box, Typography } from "@mui/material";
import "./technical-experience.scss";
import TechnicalExperienceClient from "@/src/components/client/about/technical-experience-client/technical-experience-client";
import ITechnicalExperience from "@/src/types/about/technical-experience";

/**
 * Props for the TechnicalExperience component.
 *
 * @property {ITechnicalExperience[]|undefined} data - The list of technical experiences to pass to the TechnicalExperienceClient component.
 */
interface Props {
  data: ITechnicalExperience[] | undefined;
}

/**
 * TechnicalExperience component.
 *
 * This component displays a heading and renders the TechnicalExperienceClient component with the provided data.
 *
 * @param {Props} props - The props for the component.
 */
const TechnicalExperience = async ({ data }: Props) => {
  return (
    <Box className="hobbies">
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Technical Experience
      </Typography>
      <TechnicalExperienceClient data={data} />
    </Box>
  );
};

export default TechnicalExperience;
