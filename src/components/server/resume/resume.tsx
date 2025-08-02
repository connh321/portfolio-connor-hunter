/**
 * Client-side component for the Resume page.
 *
 * This component renders the Resume page with a heading and an iframe to display the resume.
 *
 * @module Resume
 */
import { Box, Typography } from "@mui/material";
/**
 * Resume component.
 *
 * This component renders the Resume page with a heading and an iframe to display the resume.
 *
 */
const Resume = () => {
  const url = process.env.NEXT_PUBLIC_S3_RESUME_URL!;

  return (
    <Box id="resume">
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: "1rem !important",
        }}
      >
        Resume
      </Typography>
      <iframe
        src={url}
        style={{ width: "100%", height: "800px", border: "none" }}
        title="Connor Hunter Resume"
      />
    </Box>
  );
};

export default Resume;
