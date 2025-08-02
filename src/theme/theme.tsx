"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(59, 61, 64)",
    },
    background: {
      default: "#ffffeb",
      paper: "#aec19b",
    },
  },
});

const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeRegistry;
