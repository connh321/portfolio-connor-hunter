"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { setAboutMe } from "@/src/redux/about/actions";
import { Skeleton, Typography, Box, Alert } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { ABOUT_ME_FETCH_ERROR } from "@/src/errors/about";

interface Props {
  data: string | undefined;
}

const AboutMeClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolio: IAbout = useSelector((state: RootState) => state.portfolio);
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
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <Skeleton variant="text" width="100%" height={50} />
        <Skeleton variant="text" width="85%" height={22} />
      </Box>
    );
  }

  // Show error if any
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{ABOUT_ME_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography sx={{ marginY: "1rem" }} variant="body1">
        {portfolio.aboutMe}
      </Typography>
    </Box>
  );
};

export default AboutMeClient;
