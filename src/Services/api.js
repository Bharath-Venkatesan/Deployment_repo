export const getPrediction = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.result; // expects { result: "No Tumor" } from backend
  } catch (error) {
    console.error("Error:", error);
    return "Error in prediction";
  }
};
