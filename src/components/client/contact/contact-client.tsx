/**
 * Client-side component for rendering the contact information.
 *
 * This component uses Redux to fetch and store the contact data.
 *
 * @module ContactClient
 * @see setContacts
 */
"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  Box,
  Alert,
  IconButton,
  Tooltip,
  Skeleton,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/redux/store";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import IContacts from "@/src/types/contacts/contacts";
import { setContacts } from "@/src/redux/contacts/actions";
import { CONTACTS_FETCH_ERROR } from "@/src/errors/about";

/**
 * Props for the ContactClient component.
 *
 * @property {IContacts | null} data - The contact data to render.
 */
interface Props {
  data: IContacts | null;
}

/**
 * Client-side component for rendering the contact information.
 *
 * This component uses Redux to fetch and store the contact data.
 *
 * @param {Props} props - The component props.
 */
const ContactClient = ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts: IContacts = useSelector((state: RootState) => state.contacts);
  const [loading, setLoading] = useState(true);

  /**
   * Effect hook to fetch and store the contact data.
   *
   * If the data is already fetched, it sets the loading state to false.
   *
   * @see setContacts
   */
  useEffect(() => {
    if (data && contacts.github === "") {
      dispatch(setContacts(data));
    }
    setLoading(false);
  }, [data, contacts, dispatch]);

  /**
   * Handle copying a text to the clipboard.
   *
   * @param {string} text - The text to copy.
   */
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {});
  };

  /**
   * Show error if data not present.
   */
  if (!contacts.github) {
    return (
      <Box sx={{ marginY: "1rem" }}>
        <Alert severity="error">{CONTACTS_FETCH_ERROR}</Alert>
      </Box>
    );
  }

  /**
   * Render a contact row.
   *
   * @param {string} label - The label of the contact row.
   * @param {string} value - The value of the contact row.
   * @returns {JSX.Element} The rendered contact row.
   */
  const renderContactRow = (label: string, value: string) => (
    <>
      <Typography variant="h6">{label}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          wordBreak: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ flex: 1, wordBreak: "break-word" }}
        >
          {value}
        </Typography>
        <Tooltip title="Copy">
          <IconButton size="small" onClick={() => handleCopy(value)}>
            <ContentCopyIcon sx={{ fontSize: "0.875rem" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );

  /**
   * Show loading skeleton if loading.
   */
  if (loading) {
    return (
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          pb: 1,
          flexDirection: "row",
          justifyContent: { xs: "center", md: "flex-start" }, // vertical centering on mobile          gap: 2,
        }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <Card
            key={i}
            sx={{
              width: { xs: "100%", md: "250px" },
              flexShrink: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "flex-start" }, // vertical centering on mobile
            }}
          >
            <CardContent>
              <Skeleton variant="text" width="60%" height={28} />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="text" width="80%" />
            </CardContent>
            <CardActions>
              <Skeleton
                variant="rectangular"
                width={80}
                height={36}
                sx={{ ml: 1 }}
              />
            </CardActions>
          </Card>
        ))}
      </Stack>
    );
  }
  /**
   * Show some cards, they display differently when on mobile.
   */
  return (
    <Box sx={{}}>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          pb: 1,
          flexDirection: "row",
          justifyContent: { xs: "center", md: "flex-start" }, // vertical centering on mobile          gap: 2,
        }}
      >
        {contacts.github && (
          <Card
            sx={{
              width: { xs: "100%", md: "250px" },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mt: 1,
              ml: 1,
            }}
          >
            <CardContent>
              {renderContactRow("GitHub", contacts.github)}
            </CardContent>
            <CardActions>
              <Tooltip title="Visit" placement="right">
                <Button
                  size="small"
                  href={contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
        )}

        {contacts.linkedIn && (
          <Card
            sx={{
              width: { xs: "100%", md: "250px" },
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              mt: 1,
              ml: 1,
            }}
          >
            <CardContent>
              {renderContactRow("LinkedIn", contacts.linkedIn)}
            </CardContent>
            <CardActions>
              <Tooltip title="Visit" placement="right">
                <Button
                  size="small"
                  href={contacts.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                >
                  LinkedIn
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
        )}

        {contacts.email && (
          <Card
            sx={{
              width: { xs: "100%", md: "250px" },
              flexShrink: 0,
              mt: 1,
              ml: 1,
            }}
          >
            <CardContent>
              {renderContactRow("Email", contacts.email)}
            </CardContent>
          </Card>
        )}

        {contacts.phone && (
          <Card
            sx={{
              width: { xs: "100%", md: "250px" },
              flexShrink: 0,
              mt: 1,
              ml: 1,
            }}
          >
            <CardContent>
              {renderContactRow("Phone", contacts.phone)}
            </CardContent>
          </Card>
        )}
      </Stack>
    </Box>
  );
};

export default ContactClient;
