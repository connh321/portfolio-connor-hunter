"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./header.scss";

const NAV_ITEMS = ["Home", "Projects", "Resume", "Contact Me"];

const Header = () => {
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Scroll handler to toggle expanded state
  useEffect(() => {
    const handleScroll = () => setExpanded(window.scrollY <= 1);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoized button size based on screen size and expanded state
  const buttonSize = useMemo(() => {
    if (isMobile) return "small";
    return expanded ? "large" : "medium";
  }, [isMobile, expanded]);

  return (
    <Box
      component="header"
      className={`header ${expanded ? "expanded" : ""}`}
      sx={{
        color: (theme) => theme.palette.background.default,
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      {/* Title */}
      <Typography
        component="h1"
        fontSize={expanded ? "2.5rem" : "1.25rem"}
        className="name animated"
      >
        Connor Hunter
      </Typography>

      {/* Navigation Buttons */}
      <Box component="nav" aria-label="Main navigation" width="100%">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          {NAV_ITEMS.map((label) => (
            <Button
              key={label}
              className="animated"
              color="inherit"
              variant="text"
              size={buttonSize}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Down Arrow Icon */}
      {expanded && (
        <KeyboardArrowDownIcon
          fontSize="large"
          className="arrow-icon animated"
          sx={{ cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 2, behavior: "smooth" })}
        />
      )}
    </Box>
  );
};

export default Header;
