"use server";
import { Box, Typography } from "@mui/material";
import "./resume.scss";
const Resume = () => {
  return (
    <Box id="resume">
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: "1rem" }} // for scroll into view to work correctly
      >
        Resume
      </Typography>
      {/* <iframe
        src="/Connor_Hunter_Resume.pdf"
        style={{ width: "100%", height: "800px", border: "none" }}
        title="Connor Hunter Resume"
      /> */}
    </Box>
  );
};

export default Resume;
