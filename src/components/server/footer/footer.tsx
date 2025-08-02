/**
 * Server-side component for the Footer section.
 *
 * This component renders the footer with a copyright notice.
 *
 * @module Footer
 */
"use server";
import { Box, Typography } from "@mui/material";
import "./footer.scss";

/**
 * Footer component.
 *
 * This component renders the footer with a copyright notice.
 *
 */
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
