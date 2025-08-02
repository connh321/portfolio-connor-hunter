"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import { setTechnicalExperience } from "@/src/redux/about/actions";
import { Skeleton, Typography, Box, Alert, Stack, Chip } from "@mui/material";
import IAbout from "@/src/types/about/about";
import { TECHNICAL_EXPERIENCE_FETCH_ERROR } from "@/src/errors/about";
import ITechnicalExperience from "@/src/types/about/technical-experience";

interface Props {
  data: ITechnicalExperience[] | undefined;
}

const TechnicalExperienceClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolio: IAbout = useSelector((state: RootState) => state.portfolio);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      data &&
      (!portfolio.technicalExperience ||
        portfolio.technicalExperience.length === 0)
    ) {
      dispatch(setTechnicalExperience(data));
    }
    setLoading(false);
  }, [data, portfolio.technicalExperience, dispatch]);

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
                  )
                )}
              </Stack>
            </Box>
          );
        })}
      </Box>
    );
  }

  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{TECHNICAL_EXPERIENCE_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  const sections = portfolio.technicalExperience ?? data;

  return (
    <Box sx={{ marginY: "1rem" }}>
      {sections.map((section, idx) => (
        <Box key={idx} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            {section.title}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={"1rem"}>
            {section.chips.map((chip, i) => (
              <Chip key={i} label={chip} color="primary" variant="outlined" />
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default TechnicalExperienceClient;
