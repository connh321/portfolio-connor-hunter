import { Box, Typography } from "@mui/material";

const Resume = () => {
  const url = process.env.NEXT_PUBLIC_S3_RESUME_URL!;

  return (
    <Box id="resume">
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: "1rem",
          display: "flex",
          justifyContent: "center",
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
