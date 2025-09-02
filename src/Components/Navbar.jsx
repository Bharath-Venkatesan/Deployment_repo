import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory"; 
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={8}
      sx={{
        px: 3,
        py: 0.5,
        background: "linear-gradient(90deg,rgba(48, 4, 95, 0.9) 0%, #174d8cff 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* <MemoryIcon sx={{ fontSize: 36 }} /> */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              letterSpacing: 0.8,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              transition: "color 0.3s",
              "&:hover": { color: "#e3f2fd" },
            }}
          >
            Brain Tumor Detection
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "How It Works", path: "/how-it-works" },
          ].map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{
                px: 2,
                fontWeight: 500,
                borderRadius: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* Admin Page */}
          {/* <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/admin"
            startIcon={<AdminPanelSettingsIcon />}
            sx={{
              fontWeight: 600,
              borderRadius: 2,
              px: 2.5,
              boxShadow: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "secondary.dark",
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            Admin
          </Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
