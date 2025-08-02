"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { Skeleton, Typography, Box, Alert } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { EDUCATION_FETCH_ERROR } from "@/src/errors/about";
import { setEducation } from "@/src/redux/about/actions";

interface Props {
  data: string | undefined;
}

const EducationClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const about: IAbout = useSelector((state: RootState) => state.about);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && !about.education) {
      dispatch(setEducation(data));
    }
    setLoading(false);
  }, [data, about.education, dispatch]);

  // Show loading skeleton if loading
  if (loading) {
    return (
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <Skeleton variant="text" width="100%" height={50} />
        <Skeleton variant="text" width="20%" height={22} />
      </Box>
    );
  }

  // Show error if any
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{EDUCATION_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="body1" sx={{ marginY: "1rem" }}>
        {about.education}
      </Typography>
    </Box>
  );
};

export default EducationClient;
