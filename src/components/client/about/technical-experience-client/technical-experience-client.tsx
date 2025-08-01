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
    console.log(
      "TechnicalExperienceClient useEffect triggered",
      data,
      portfolio.technicalExperience,
    );
    if (
      data &&
      (!portfolio.technicalExperience ||
        portfolio.technicalExperience.length === 0)
    ) {
      console.log("Dispatching setTechnicalExperience with data:", data);
      dispatch(setTechnicalExperience(data));
    }
    setLoading(false);
  }, [data, portfolio.technicalExperience, dispatch]);

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
