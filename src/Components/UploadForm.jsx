import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { getPrediction } from "../Services/api";
import PredictionResult from "./PredictionResult";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await getPrediction(formData);
    setResult(response);
    setLoading(false);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          {loading ? "Predicting..." : "Upload & Predict"}
        </Button>
      </form>
      {result && <PredictionResult result={result} />}
    </Box>
  );
}

export default UploadForm;
