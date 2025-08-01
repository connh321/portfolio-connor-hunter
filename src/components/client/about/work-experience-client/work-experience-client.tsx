"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { setWorkExperience } from "@/src/redux/about/actions";
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

interface Props {
  data: IWorkExperience[] | undefined;
}

const WorkExperienceClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolio: IAbout = useSelector((state: RootState) => state.portfolio);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(
      "WorkExperienceClient useEffect triggered",
      data,
      portfolio.workExperience
    );
    if (
      data &&
      (!portfolio.workExperience || portfolio.workExperience.length === 0)
    ) {
      console.log("Dispatching setWorkExperience with data:", data);
      dispatch(setWorkExperience(data));
    }
    setLoading(false);
  }, [data, portfolio.workExperience, dispatch]);

  if (loading) {
    return (
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <Skeleton variant="text" width="100%" height={50} />
        <Skeleton variant="text" width="80%" height={22} />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{WORK_EXPERIENCE_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  const experiences: IWorkExperience[] = portfolio.workExperience ?? data;

  return (
    <Box sx={{ marginY: "1rem" }}>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: '1rem' }}>
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
