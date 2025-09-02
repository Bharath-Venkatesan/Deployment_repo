import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function PatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    date: "",
    mri: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "age" && value < 0) {
      e.target.value = 0;
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let file = null;
  const handleFileChange = (e) => {
    console.log(e.target.files);
    file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        mri: file,
      }));
    }
  };
  //   const handleClearImage = () => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     mri: null,
  //   }));
  // };  


  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submitted Data:", formData);

  try {
    const response = await axios.post('https://2v35bsuq61.execute-api.ap-south-1.amazonaws.com/dev/add-patients', formData);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Patient Form
        </Typography>

        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Age */}
        <TextField
          fullWidth
          type="number"
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          margin="normal"
          required
          inputProps={{ min: 0 }}
        />

        {/* Gender */}
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        {/* Date */}
        <TextField
          fullWidth
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{ shrink: true }}
        />

        {/* Upload MRI Scan */}
        <Button
          variant="outlined"
          component="label"
          fullWidth
          startIcon={<CloudUploadIcon />}
          sx={{ mt: 2 }}
        >
        {formData.mri ? formData.mri.name : "Upload MRI Scan"}
          <input type="file" hidden accept="image/*" onChange={handleFileChange} />
        </Button>

        {formData.mri && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, wordBreak: "break-word" }}
          >
            Selected: {formData.mri.name}
          </Typography>
        )}

        {/* Submit */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, py: 1 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
