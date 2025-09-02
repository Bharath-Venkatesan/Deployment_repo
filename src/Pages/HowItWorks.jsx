import React from "react";
import { Typography, Container, Box, Paper } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SendIcon from "@mui/icons-material/Send";
import InsightsIcon from "@mui/icons-material/Insights";
import VisibilityIcon from "@mui/icons-material/Visibility";

function HowItWorks() {
  const steps = [
    {
      icon: <CloudUploadIcon sx={{ fontSize: 32, color: "#6a11cb" }} />,
      title: "Upload MRI Scan",
      description: "Upload an MRI scan of the brain securely.",
    },
    {
      icon: <SendIcon sx={{ fontSize: 32, color: "#2575fc" }} />,
      title: "Secure Transfer",
      description: "The image is securely sent to the backend for analysis.",
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 32, color: "#ff6a00" }} />,
      title: "AI Analysis",
      description: "The AI model processes the scan and detects potential tumors.",
    },
    {
      icon: <VisibilityIcon sx={{ fontSize: 32, color: "#00c853" }} />,
      title: "View Results",
      description: "The result is displayed in an easy-to-understand format.",
    },
  ];

  return (
    <Container sx={{ mt: 10, mb: 10, position: "relative" }}>
      {/* Heading */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 8 }}
      >
        How It Works
      </Typography>

      {/* Wrapper for timeline */}
      <Box sx={{ position: "relative", mt: 6 }}>
        {/* Vertical timeline line */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%",
            bgcolor: "#ddd",
            borderRadius: 2,
          }}
        />

        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: isLeft ? "flex-end" : "flex-start",
                mb: 12,
                position: "relative",
              }}
            >
              {/* Step card */}
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  width: { xs: "90%", md: "45%" },
                  textAlign: "left",
                  position: "relative",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Paper>

              {/* Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  top: "32px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "#6a11cb",
                  zIndex: 1,
                  border: "4px solid #fff",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

export default HowItWorks;
