import { Box, Typography } from "@mui/material";
import "./education.scss";
import EducationClient from "@/src/components/client/about/education-client/education-client";

interface Props {
  data: string | undefined;
}
const Education = async ({ data }: Props) => {
  return (
    <Box className="education">
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Education
      </Typography>
      <EducationClient data={data} />
    </Box>
  );
};

export default Education;
