import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

function About() {
  return (
    <Container sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 10 } }}>
      {/* Header Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        <InfoIcon
          sx={{
            fontSize: 60,
            color: "primary.main",
            mb: 2,
            bgcolor: "rgba(106,17,203,0.1)",
            borderRadius: "50%",
            p: 1.5,
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 1,
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About This Project
        </Typography>
        <Divider
          sx={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, #6a11cb, #2575fc)",
            mx: "auto",
            mt: 1,
          }}
        />
      </Box>

      {/* Content Card */}
      <Card
        elevation={8}
        sx={{
          borderRadius: 4,
          p: { xs: 3, md: 5 },
          bgcolor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
        }}
      >
        <CardContent>
          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            This web application leverages{" "}
            <strong>deep learning models</strong> to assist in the early detection
            of <strong>brain tumors</strong> using MRI scans. By analyzing medical
            imaging data, it provides an efficient way to support healthcare
            professionals in diagnosis and decision-making.
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            The platform is built with modern technologies including <strong>React</strong> and <strong>AWS Amplify</strong> for the front-end, and <strong>AWS Lambda</strong>  for the backend. It integrates three machine learning models: a binary classifier, a multi-class classifier, and a segmentation model. 
            This website is primarily designed for <strong>doctors and hospitals</strong> to efficiently manage patient data and track tumor types.


          </Typography>

          <Box
            sx={{
              mt: 4,
              textAlign: "center",
              p: 3,
              borderRadius: 3,
              bgcolor: "rgba(106,17,203,0.05)",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "medium", color: "primary.main" }}
            >
              Empowering medical diagnostics with AI and modern web technology.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default About;
