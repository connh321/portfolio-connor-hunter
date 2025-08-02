/**
 * Client-side component for rendering the technical experience section.
 *
 * This component uses Redux to fetch and store the technical experience data.
 *
 * @module TechnicalExperienceClient
 * @see setTechnicalExperience
 */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { Skeleton, Typography, Box, Alert, Stack, Chip } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { TECHNICAL_EXPERIENCE_FETCH_ERROR } from "@/src/errors/about";
import ITechnicalExperience from "@/src/types/about/technical-experience";
import { setTechnicalExperience } from "@/src/redux/about/actions";

/**
 * Props for the TechnicalExperienceClient component.
 *
 * @property {ITechnicalExperience[] | undefined} data - The technical experience data to render.
 */
interface Props {
  data: ITechnicalExperience[] | undefined;
}

/**
 * Client-side component for rendering the technical experience section.
 *
 * This component uses Redux to fetch and store the technical experience data.
 *
 * @param {Props} props - The component props.
 */
const TechnicalExperienceClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const about: IAbout = useSelector((state: RootState) => state.about);
  const [loading, setLoading] = useState(true);

  /**
   * Effect hook to fetch and store the technical experience data.
   *
   * If the data is already fetched, it sets the loading state to false.
   *
   * @see setTechnicalExperience
   */
  useEffect(() => {
    if (
      data &&
      (!about.technicalExperience || about.technicalExperience.length === 0)
    ) {
      dispatch(setTechnicalExperience(data));
    }
    setLoading(false);
  }, [data, about.technicalExperience, dispatch]);

  /**
   * Show loading skeleton if loading.
   */
  if (loading) {
    const sectionCount = 4;

    return (
      <Box sx={{ width: "100%", marginY: "1rem" }}>
        {Array.from({ length: sectionCount }).map((_, sectionIdx) => {
          const chipsInThisSection = 12;
          return (
            <Box key={sectionIdx} sx={{ mb: 3 }}>
              <Skeleton
                variant="rectangular"
                width="30%"
                height={"28px"}
                sx={{ mb: ".5rem" }}
              />
              <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
                {Array.from({ length: chipsInThisSection }).map(
                  (__, chipIdx) => (
                    <Skeleton
                      key={chipIdx}
                      variant="rounded"
                      height={"32px"}
                      width="60px"
                      sx={{ borderRadius: "16px" }}
                    />
                  ),
                )}
              </Stack>
            </Box>
          );
        })}
      </Box>
    );
  }

  /**
   * Show error if any.
   */
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{TECHNICAL_EXPERIENCE_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  /**
   * Get the technical experience data to render.
   *
   * @type {ITechnicalExperience[]}
   */
  const sections: ITechnicalExperience[] = about.technicalExperience;

  return (
    <Box sx={{ marginY: "1rem" }}>
      {sections.map((section, idx) => (
        <Box key={idx} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            {section.title}:
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
            {section.chips.map((chip, i) => (
              <Chip
                key={i}
                label={chip}
                color="primary"
                variant="outlined"
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.background.default,
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TechnicalExperienceClient;
