"use client";
import { Box } from "@mui/material";
import "./home.scss";
const Home = () => {
  return (
    <Box
      className="home"
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    ></Box>
  );
};

export default Home;
