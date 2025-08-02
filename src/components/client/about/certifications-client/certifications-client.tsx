"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/src/redux/store";
import {
  Skeleton,
  Box,
  Alert,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import IAbout from "@/src/types/about/about";
import { CERTIFICATIONS_FETCH_ERROR } from "@/src/errors/about";
import ICertification from "@/src/types/about/certification";
import { setCertifications } from "@/src/redux/about/actions";

interface Props {
  data: ICertification[] | undefined;
}

const CertificationsClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const about: IAbout = useSelector((state: RootState) => state.about);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && (!about.certifications || about.certifications.length === 0)) {
      dispatch(setCertifications(data));
    }
    setLoading(false);
  }, [data, about.certifications, dispatch]);

  // Show loading skeleton if loading
  if (loading) {
    return (
      <Box sx={{ width: "100%", marginY: "1rem", pl: 2 }}>
        <Skeleton variant="text" width="15%" height={22} />
        <Skeleton variant="text" width="10%" height={22} />
      </Box>
    );
  }

  // Show error if any
  if (!data) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{CERTIFICATIONS_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  const certifications = about.certifications ?? data;

  return (
    <Box>
      <List dense>
        {certifications.map((cert, index) => (
          <ListItem key={index} disableGutters>
            <Box>
              <Typography component="span" sx={{ pl: 2 }}>
                • {cert.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ pl: 3, display: "block" }}
              >
                Earned: {cert.date}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CertificationsClient;
