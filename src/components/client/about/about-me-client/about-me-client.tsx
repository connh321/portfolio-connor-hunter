/**
 * Client-side component for rendering the about me section.
 *
 * This component uses Redux to fetch and store the about me data.
 *
 * @module AboutMeClient
 * @see setAboutMe
 * @see setAboutMeShort
 */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { Skeleton, Typography, Box, Alert } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { ABOUT_ME_FETCH_ERROR } from "@/src/errors/about";
import { setAboutMe, setAboutMeShort } from "@/src/redux/about/actions";

/**
 * Props for the AboutMeClient component.
 *
 * @property {string | undefined} data - The about me data to render.
 * @property {string | undefined} aboutMeShort - The short version of the about me data.
 */
interface Props {
  data: string | undefined;
  aboutMeShort: string | undefined;
}

/**
 * Client-side component for rendering the about me section.
 *
 * This component uses Redux to fetch and store the about me data.
 *
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const AboutMeClient = ({ data, aboutMeShort }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const about: IAbout = useSelector((state: RootState) => state.about);
  const [loading, setLoading] = useState(true);

  /**
   * Effect hook to fetch and store the about me data.
   *
   * If the data is already fetched, it sets the loading state to false.
   *
   * @see setAboutMe
   * @see setAboutMeShort
   */
  useEffect(() => {
    if (data && !about.aboutMe) {
      dispatch(setAboutMe(data));
      dispatch(setAboutMeShort(aboutMeShort ?? ""));
    }
    setLoading(false);
  }, [data, about.aboutMe, dispatch, aboutMeShort]);

  /**
   * Show loading skeleton if loading.
   */
  if (loading) {
    return (
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        <Skeleton variant="text" width="100%" height={50} />
        <Skeleton variant="text" width="85%" height={22} />
      </Box>
    );
  }

  /**
   * Show error if any.
   */
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
        {about.aboutMe}
      </Typography>
    </Box>
  );
};

export default AboutMeClient;
