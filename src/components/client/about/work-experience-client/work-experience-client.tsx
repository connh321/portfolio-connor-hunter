/**
 * Client-side component for rendering the work experience section.
 *
 * This component uses Redux to fetch and store the work experience data.
 *
 * @module WorkExperienceClient
 * @see setWorkExperience
 */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import {
  Skeleton,
  Typography,
  Box,
  Alert,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import IAbout from "@/src/types/about/about";
import { WORK_EXPERIENCE_FETCH_ERROR } from "@/src/errors/about";
import IWorkExperience from "@/src/types/about/work-experience";
import { setWorkExperience } from "@/src/redux/about/actions";

/**
 * Props for the WorkExperienceClient component.
 *
 * @property {IWorkExperience[] | undefined} data - The work experience data to render.
 */
interface Props {
  data: IWorkExperience[] | undefined;
}

/**
 * Client-side component for rendering the work experience section.
 *
 * This component uses Redux to fetch and store the work experience data.
 *
 * @param {Props} props - The component props.
 */
const WorkExperienceClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const about: IAbout = useSelector((state: RootState) => state.about);
  const [loading, setLoading] = useState(true);

  /**
   * Effect hook to fetch and store the work experience data.
   *
   * If the data is already fetched, it sets the loading state to false.
   *
   * @see setWorkExperience
   */
  useEffect(() => {
    if (data && (!about.workExperience || about.workExperience.length === 0)) {
      dispatch(setWorkExperience(data));
    }
    setLoading(false);
  }, [data, about.workExperience, dispatch]);

  /**
   * Show loading skeleton if loading.
   */
  if (loading) {
    const skeletonCount = 2;
    return Array.from(Array(skeletonCount)).map((_, index) => (
      <Box sx={{ width: "100%", marginY: "1rem" }} key={index}>
        <Skeleton variant="text" width="30%" height={37} />
        <Skeleton variant="text" width="25%" height={27} />
        <Skeleton variant="text" width="85%" height={27} sx={{ pl: 2 }} />
        <Skeleton variant="text" width="80%" height={27} sx={{ pl: 2 }} />
        <Skeleton variant="text" width="75%" height={27} sx={{ pl: 2 }} />
      </Box>
    ));
  }

  /**
   * Show error if any.
   */
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{WORK_EXPERIENCE_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  /**
   * Get the work experience data to render.
   *
   * @type {IWorkExperience[]}
   */
  const experiences: IWorkExperience[] = about.workExperience;

  return (
    <Box sx={{ marginY: "1rem" }}>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: "1rem" }}>
          <Typography variant="h6">
            {exp.title} — {exp.company}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {exp.location} | {exp.startDate} – {exp.endDate}
          </Typography>
          <List dense sx={{ pl: 2 }}>
            {exp.responsibilities.map((responsibility, idx) => (
              <ListItem key={idx} disableGutters>
                <ListItemText primary={`• ${responsibility}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default WorkExperienceClient;
