import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function PredictionResult({ result, confidence }) {
  const isTumor = result !== "No Tumor";

  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "30px auto",
        borderRadius: 3,
        boxShadow: 6,
        textAlign: "center",
        background: "linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)",
      }}
    >
      <CardContent>
        {/* Header */}
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 600, color: "text.secondary" }}
        >
          Prediction Result
        </Typography>

        {/* Icon + Result */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
            mt: 2,
          }}
        >
          {isTumor ? (
            <WarningAmberIcon sx={{ fontSize: 40, color: "error.main" }} />
          ) : (
            <CheckCircleIcon sx={{ fontSize: 40, color: "success.main" }} />
          )}

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: isTumor ? "error.main" : "success.main",
            }}
          >
            {result}
          </Typography>
        </Box>

        {/* Confidence Score (optional) */}
        {confidence && (
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "text.secondary", fontWeight: 500 }}
          >
            Confidence: {confidence}%
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default PredictionResult;
