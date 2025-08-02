/**
 * Client-side component for the header.
 *
 * This component uses React hooks to handle scrolling and resizing.
 *
 * @module Header
 */
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

/**
 * Navigation items for the header.
 *
 * @property {string} label - The label of the navigation item.
 * @property {string} id - The ID of the navigation item.
 */
const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

/**
 * Header component.
 *
 * This component renders the header with navigation buttons and a down arrow icon.
 *
 */
const Header = () => {
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /**
   * Effect hook to handle scrolling and toggle the expanded state.
   *
   * This hook adds an event listener to the window's scroll event and updates the expanded state accordingly.
   */
  useEffect(() => {
    const handleScroll = () => setExpanded(window.scrollY <= 1);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handle scrolling to a section.
   *
   * This function scrolls to a section with the given ID and offset.
   *
   * @param {string} id - The ID of the section to scroll to.
   * @param {number} [offset=112] - The offset to scroll to.
   */
  const handleScrollToSection = (id: string, offset = 112) => {
    const section = document.getElementById(id);
    if (section) {
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Memoized button size based on screen size and expanded state
  const buttonSize = useMemo(() => {
    if (isMobile) return "small";
    return expanded ? "large" : "medium";
  }, [isMobile, expanded]);

  /**
   * Header component JSX.
   */
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
          className="nav-buttons"
        >
          {NAV_ITEMS.map(({ label, id }) => (
            <Button
              key={label}
              className="animated"
              color="inherit"
              variant="text"
              size={buttonSize}
              onClick={() => handleScrollToSection(id)}
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
          onClick={() => handleScrollToSection(NAV_ITEMS[0].id)}
        />
      )}
    </Box>
  );
};

export default Header;
