import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 6,
        textAlign: "center",
        bgcolor: "#1976d2", // primary.main color
        color: "white",
      }}
    >
      {/* Brand */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        Brain Tumor Detection
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
        AI-powered MRI analysis for early tumor detection
      </Typography>

      {/* Divider */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", my: 2, mx: "auto", width: "60%" }} />

      {/* Quick Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap", mb: 2 }}>
        <Link href="/" color="inherit" underline="hover">Dashboard</Link>
        <Link href="/about" color="inherit" underline="hover">About the Project</Link>
        <Link href="/how-it-works" color="inherit" underline="hover">AI Workflow</Link>
        <Link href="/admin" color="inherit" underline="hover">Admin Panel</Link>
      </Box>

      {/* Contact & Social */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 3 }}>
        <Link href="mailto:support@braintumordetection.com" color="inherit" underline="hover">
          <EmailIcon sx={{ verticalAlign: "middle", mr: 0.5 }} />
          support@braintumordetection.com
        </Link>
        <Link href="https://github.com/" target="_blank" color="inherit">
          <GitHubIcon />
        </Link>
        <Link href="https://linkedin.com/" target="_blank" color="inherit">
          <LinkedInIcon />
        </Link>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} Brain Tumor Detection. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
