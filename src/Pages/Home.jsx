import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  CloudUpload as CloudUploadIcon,
  Insights as InsightsIcon,
  Security as SecurityIcon,
  Healing as HealingIcon,
  Analytics as AnalyticsIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";

function Home() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      console.log("Selected file:", e.target.files[0]);
    }
  };

  const features = [
    {
      title: "High Accuracy",
      description:
        "Trained on thousands of MRI scans for consistent and dependable diagnostic support.",
      icon: <InsightsIcon sx={{ fontSize: 64, color: "#6a11cb" }} />,
      link: "/accuracy",
    },
    {
      title: "Secure & Private",
      description:
        "Patient data is encrypted and confidential — we prioritize your privacy at every step.",
      icon: <SecurityIcon sx={{ fontSize: 64, color: "#2575fc" }} />,
      link: "/security",
    },
    {
      title: "Early Diagnosis Aid",
      description:
        "Detects potential tumors early, empowering doctors with insights for faster treatment.",
      icon: <HealingIcon sx={{ fontSize: 64, color: "#ff6a00" }} />,
      link: "/diagnosis",
    },
  ];

  const steps = [
    {
      icon: <CloudUploadIcon />,
      step: "Upload Scan",
      description: "Upload your MRI securely through our encrypted system.",
    },
    {
      icon: <AnalyticsIcon />,
      step: "AI Analysis",
      description: "Our deep learning model analyzes the scan within seconds.",
    },
    {
      icon: <CheckCircleIcon />,
      step: "Get Results",
      description:
        "Receive detailed insights that help guide further medical decisions.",
    },
  ];

  return (
    <Box sx={{ width: "100%", bgcolor: "#f5f6fa" }}>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          py: { xs: 8, md: 14 },
          px: { xs: 2, md: 0 },
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(106,17,203,0.9) 0%, rgba(37,117,252,0.9) 100%)",
          color: "#fff",
          textAlign: "center",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
            AI-Powered Brain Tumor Detection
          </Typography>
          <Typography
            variant="h6"
            sx={{ lineHeight: 1.7, maxWidth: 600, mx: "auto", mb: 6 }}
          >
            Early diagnosis saves lives. Our cutting-edge AI model analyzes MRI
            scans accurately, helping doctors make faster and reliable decisions.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Link to="/add-patient" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<CloudUploadIcon />}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                }}
              >
                Add Patient
              </Button>
            </Link>
            {/* <Button
              variant="contained"
              size="large"
              onClick={handleUploadClick}
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                textTransform: "none",
                bgcolor: "#ff6a00",
                color: "#fff",
                "&:hover": { bgcolor: "#ff8a3c" },
              }}
            >
              Upload Scan
            </Button> */}
          </Stack>

          {selectedFile && (
            <Typography mt={2} variant="body2">
              Selected File: {selectedFile.name}
            </Typography>
          )}

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept=".jpg,.png,.jpeg,.dcm"
          />
        </Container>
      </Box>

      {/* ===== FEATURES ===== */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Why Choose Our AI System?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ maxWidth: 700, mx: "auto", mb: 8 }}
        >
          Designed with doctors and patients in mind, our platform ensures
          accurate detection, strong data privacy, and actionable insights.
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {features.map((feature, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Link to={feature.link} style={{ textDecoration: "none" }}>
                <Paper
                  elevation={10}
                  sx={{
                    p: 5,
                    textAlign: "center",
                    borderRadius: 5,
                    bgcolor: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(8px)",
                    transition: "0.4s",
                    "&:hover": {
                      transform: "translateY(-10px) scale(1.05)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: 2,
                      "& svg": { transition: "0.3s", "&:hover": { transform: "scale(1.2)" } },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ===== HOW IT WORKS TIMELINE ===== */}
      <Box sx={{ mt: 14, py: 12, bgcolor: "#f0f2f5" }}>
        <Container maxWidth="md">
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
            How It Works
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 700, mx: "auto", mb: 8 }}
          >
            A simple 3-step process to get instant AI-powered insights from your MRI scans.
          </Typography>

          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 },
            }}
          >
            {steps.map((item, i) => (
              <TimelineItem key={i}>
                <TimelineSeparator>
                  <TimelineDot color="primary">{item.icon}</TimelineDot>
                  {i < steps.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: "#fff",
                      textAlign: "center",
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.step}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* ===== CTA ===== */}
      <Box sx={{ py: 12, textAlign: "center", bgcolor: "#6a11cb" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom color="#fff">
          Ready to Get Started?
        </Typography>
        <Typography
          variant="body1"
          color="rgba(255,255,255,0.85)"
          sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
        >
          Upload your MRI scan today and experience the power of AI in early brain tumor detection.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleUploadClick}
          sx={{
            borderRadius: 3,
            px: 6,
            py: 2,
            fontSize: "1.1rem",
            textTransform: "none",
            bgcolor: "#ff6a00",
            color: "#fff",
            boxShadow: "0 6px 20px rgba(255,106,0,0.5)",
            transition: "0.3s",
            "&:hover": { transform: "translateY(-2px) scale(1.05)", boxShadow: "0 10px 25px rgba(255,106,0,0.6)", bgcolor: "#ff8a3c" },
          }}
        >
          Upload Scan
        </Button>
      </Box>

      {/* ===== FOOTER ===== */}
      <Box sx={{ py: 4, textAlign: "center", bgcolor: "#333", color: "#fff" }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Brain Tumor AI Detection. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
