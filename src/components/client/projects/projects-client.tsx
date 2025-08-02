"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Stack,
  Box,
  Skeleton,
  Alert,
} from "@mui/material";

import IProject from "@/src/types/project/project";
import { setProjects } from "@/src/redux/projects/actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PROJECTS_FETCH_ERROR } from "@/src/errors/about";

interface Props {
  data: IProject[];
}

const ProjectsClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const projects: IProject[] = useSelector(
    (state: RootState) => state.projects,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length !== 0) {
      dispatch(setProjects(data));
    }
    setLoading(false);
  }, [data, dispatch]);

  const skeletonArray = Array.from({ length: 6 });

  if (loading) {
    return (
      <Box sx={{ mt: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {skeletonArray.map((_, index) => (
            <Grid key={index} size={{ xs: 4, sm: 8, md: 6, lg: 4 }}>
              <Card elevation={1}>
                <CardContent>
                  <Skeleton variant="text" width="60%" height={30} />
                  <Skeleton variant="text" width="90%" />
                  <Skeleton variant="text" width="80%" />
                  <Stack direction="row" spacing={1} mt={2}>
                    <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
                      {Array.from({ length: 8 }).map((__, chipIdx) => (
                        <Skeleton
                          key={chipIdx}
                          variant="rounded"
                          height={"32px"}
                          width="60px"
                          sx={{ borderRadius: "16px" }}
                        />
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Skeleton variant="rectangular" width={80} height={30} />
                  <Skeleton variant="rectangular" width={80} height={30} />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{PROJECTS_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project, index) => (
          <Grid key={index} size={{ xs: 4, sm: 8, md: 6, lg: 4 }}>
            <Card elevation={1}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Stack direction="row" mt={2} flexWrap="wrap" gap={"1rem"}>
                  {project.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      variant="filled"
                      color="primary"
                      size="small"
                      sx={{
                        transition: ` color 0.3s ease, background-color 0.3s ease, border 0.1s ease`,
                        "&:hover": {
                          color: (theme) => theme.palette.primary.main,
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                          border: (theme) =>
                            `1px solid ${theme.palette.primary.main} !important`,
                        },
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
                {project?.websiteLink && (
                  <Button
                    size="small"
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<OpenInNewIcon />}
                  >
                    Website
                  </Button>
                )}

                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                >
                  {" "}
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsClient;
