/**
 * Client-side component for the Education section.
 *
 * This component displays a heading and renders the EducationClient component with the provided data.
 *
 * @module Education
 */
import { Box, Typography } from "@mui/material";
import "./education.scss";
import EducationClient from "@/src/components/client/about/education-client/education-client";

/**
 * Props for the Education component.
 *
 * @property {string|undefined} data - The education data to pass to the EducationClient component.
 */
interface Props {
  data: string | undefined;
}

/**
 * Education component.
 *
 * This component displays a heading and renders the EducationClient component with the provided data.
 *
 * @param {Props} props - The props for the component.
 */
const Education = async ({ data }: Props) => {
  return (
    <Box className="education">
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
      >
        Education
      </Typography>
      <EducationClient data={data} />
    </Box>
  );
};

export default Education;
