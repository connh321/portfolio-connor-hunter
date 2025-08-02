/**
 * Client-side component for rendering the hobbies section.
 *
 * This component uses Redux to fetch and store the hobbies data.
 *
 * @module HobbiesClient
 * @see setHobbies
 */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { Skeleton, Typography, Box, Alert } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { HOBBIES_FETCH_ERROR } from "@/src/errors/about";
import { setHobbies } from "@/src/redux/about/actions";

/**
 * Props for the HobbiesClient component.
 *
 * @property {string | undefined} data - The hobbies data to render.
 */
interface Props {
  data: string | undefined;
}

/**
 * Client-side component for rendering the hobbies section.
 *
 * This component uses Redux to fetch and store the hobbies data.
 *
 * @param {Props} props - The component props.
 */
const HobbiesClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const about: IAbout = useSelector((state: RootState) => state.about);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && !about.hobbies) {
      dispatch(setHobbies(data));
    }
    setLoading(false);
  }, [data, about.hobbies, dispatch]);

  /**
   * Show loading skeleton if loading.
   */
  if (loading) {
    return (
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <Skeleton variant="text" width="95%" height={50} />
      </Box>
    );
  }

  /**
   * Show error if any.
   */
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{HOBBIES_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ marginY: "1rem" }}>
      <Typography variant="body1">{about.hobbies}</Typography>
    </Box>
  );
};

export default HobbiesClient;
