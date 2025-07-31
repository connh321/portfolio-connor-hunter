"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { setAboutMe } from "@/src/redux/about/actions";
import { Skeleton, Typography, Box, Alert } from "@mui/material";
import About from "@/src/types/about/about";
import { ABOUT_ME_FETCH_ERROR } from "@/src/errors/about";

interface Props {
  data: string | undefined;
}

const AboutMeClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolio: About = useSelector((state: RootState) => state.portfolio);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && !portfolio.aboutMe) {
      dispatch(setAboutMe(data));
    }
    setLoading(false);
  }, [data, portfolio.aboutMe, dispatch]);

  // Show loading skeleton if loading
  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <Skeleton variant="text" width="100%" height={50} />
        <Skeleton variant="text" width="80%" height={22} />
      </Box>
    );
  }

  // Show error if any
  if (!data) {
    return (
      <Box>
        <Alert severity="error">{ABOUT_ME_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="body1">{portfolio.aboutMe || data}</Typography>
    </Box>
  );
};

export default AboutMeClient;
