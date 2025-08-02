"use server";
import { Box, Stack, Typography } from "@mui/material";
import "./projects.scss";
import getProjectsData from "@/src/lib/projects";
import ProjectsClient from "../../client/projects/projects-client";
const Projects = async () => {
  const projects = await getProjectsData();
  console.log("Projects data:", projects);
  return (
    <Box id="projects">
      <Stack direction="column" spacing={2}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: "1rem !important",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Projects
        </Typography>
        <ProjectsClient data={projects}></ProjectsClient>
      </Stack>
    </Box>
  );
};

export default Projects;
