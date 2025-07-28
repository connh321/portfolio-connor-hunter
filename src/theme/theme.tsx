"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#484849",
    },
    background: {
      default: "#ffffeb",
    },
  },
});

const ThemeRegistry = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeRegistry;
