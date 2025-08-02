"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { setHobbies } from "@/src/redux/about/actions";
import { Skeleton, Typography, Box, Alert } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { HOBBIES_FETCH_ERROR } from "@/src/errors/about";

interface Props {
  data: string | undefined;
}

const HobbiesClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolio: IAbout = useSelector((state: RootState) => state.portfolio);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && !portfolio.hobbies) {
      dispatch(setHobbies(data));
    }
    setLoading(false);
  }, [data, portfolio.hobbies, dispatch]);

  // Show loading skeleton if loading
  if (loading) {
    return (
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <Skeleton variant="text" width="95%" height={50} />
      </Box>
    );
  }

  // Show error if any
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{HOBBIES_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ marginY: "1rem" }}>
      <Typography variant="body1">{portfolio.hobbies}</Typography>
    </Box>
  );
};

export default HobbiesClient;
