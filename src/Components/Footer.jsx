import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        textAlign: "center",
        bgcolor: "rgba(79, 2, 161, 0.9)", // Dark background
        color: "#e0e0e0",    // Light text
      }}
    >
      {/* Project Name */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#ffffff" }}>
        Brain Tumor Detection
      </Typography>

      {/* Divider */}
      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.3)",
          mb: 2,
          mx: "auto",
          width: "50%",
        }}
      />

      {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        {/* <Link href="/" color="#ffffffff" underline="hover">
          Dashboard
        </Link> */}
        <Link href="/about" color="rgba(255, 255, 255, 1)" underline="hover">
          About the Project
        </Link>
        <Link href="/how-it-works" color="#ffffffff" underline="hover">
          AI Workflow
        </Link>
        {/* <Link href="/admin" color="#ffffffff" underline="hover">
          Admin Panel
        </Link> */}
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <Link href="https://github.com/" target="_blank" color="#e0e0e0">
          <GitHubIcon sx={{ "&:hover": { color: "#90caf9" } }} />
        </Link>
        <Link href="https://linkedin.com/" target="_blank" color="#e0e0e0">
          <LinkedInIcon sx={{ "&:hover": { color: "#90caf9" } }} />
        </Link>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} Brain Tumor Detection — Powered by AI & Deep Learning
      </Typography>
    </Box>
  );
}

export default Footer;
