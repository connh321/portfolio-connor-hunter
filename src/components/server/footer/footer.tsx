"use server";
import { Box, Typography } from "@mui/material";
import "./footer.scss";
const Footer = () => {
  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        width: "100%",
        textAlign: "center",
        padding: "1rem 0",
        mt: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary" className="text">
        © {new Date().getFullYear()} Connor Hunter
      </Typography>
    </Box>
  );
};

export default Footer;
