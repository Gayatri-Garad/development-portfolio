import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import axios from "axios";

const LoanApplicationDashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    type: "",
    duration: 12,
    interest: 10,
  });
  const [applications, setApplications] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("http://localhost:3000/applications");
      setApplications(res.data);
    } catch (error) {
      console.error("Error fetching applications", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.amount || !formData.type)
      return;
    const newApp = {
      ...formData,
      status: "Pending",
    };
    try {
      await axios.post("http://localhost:3000/applications", newApp);
      fetchApplications();
      setFormData({
        name: "",
        email: "",
        amount: "",
        type: "",
        duration: 12,
        interest: 10,
      });
    } catch (error) {
      console.error("Error submitting application", error);
    }
  };

  const calculateEMI = (P, R, N) => {
    const monthlyRate = R / 12 / 100;
    const emi =
      (P * monthlyRate * Math.pow(1 + monthlyRate, N)) /
      (Math.pow(1 + monthlyRate, N) - 1);
    return emi ? emi.toFixed(2) : 0;
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: 900,
        mx: "auto",
        backgroundColor: darkMode ? "#121212" : "#f5f7fa",
        minHeight: "100vh",
        color: darkMode ? "#fff" : "#000",
        transition: "0.3s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: darkMode
            ? "linear-gradient(135deg, #1e1e1e, #333)"
            : "linear-gradient(135deg, #4facfe, #00f2fe)",
          p: 2,
          borderRadius: 3,
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: darkMode ? "#fff" : "#fff" }}
        >
          Loan Application Dashboard
        </Typography>
        <IconButton
          onClick={() => setDarkMode(!darkMode)}
          sx={{ color: "#fff" }}
        >
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Box>

      <Paper
        elevation={4}
        sx={{
          p: { xs: 2, sm: 3 },
          mb: 4,
          borderRadius: 3,
          backgroundColor: darkMode ? "#1e1e1e" : "#fff",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Apply for a Loan
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: darkMode ? "#ccc" : "#000" },
                }}
                sx={{ input: { color: darkMode ? "#fff" : "#000" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: darkMode ? "#ccc" : "#000" },
                }}
                sx={{ input: { color: darkMode ? "#fff" : "#000" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Loan Amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                type="number"
                InputLabelProps={{
                  style: { color: darkMode ? "#ccc" : "#000" },
                }}
                sx={{ input: { color: darkMode ? "#fff" : "#000" } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Loan Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                InputLabelProps={{
                  style: { color: darkMode ? "#ccc" : "#000" },
                }}
                sx={{
                  color: darkMode ? "#fff" : "#000",
                  "& .MuiSelect-select": { color: darkMode ? "#fff" : "#000" },
                }}
              >
                <MenuItem value="Personal">Personal Loan</MenuItem>
                <MenuItem value="Home">Home Loan</MenuItem>
                <MenuItem value="Education">Education Loan</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                label="Months"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                type="number"
                InputLabelProps={{
                  style: { color: darkMode ? "#ccc" : "#000" },
                }}
                sx={{ input: { color: darkMode ? "#fff" : "#000" } }}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                label="Interest %"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                type="number"
                InputLabelProps={{
                  style: { color: darkMode ? "#ccc" : "#000" },
                }}
                sx={{ input: { color: darkMode ? "#fff" : "#000" } }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.3,
              borderRadius: 2,
              background: darkMode
                ? "linear-gradient(135deg, #ff9966, #ff5e62)"
                : "linear-gradient(135deg, #4facfe, #00f2fe)",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            Apply Now
          </Button>
        </form>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
        Submitted Applications
      </Typography>
      {applications.length === 0 ? (
        <Typography>No applications submitted yet.</Typography>
      ) : (
        <Grid container spacing={2}>
          {applications.map((app) => (
            <Grid item xs={12} sm={6} key={app.id}>
              <Paper
                elevation={5}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <Typography>
                  <strong>Name:</strong> {app.name}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {app.email}
                </Typography>
                <Typography>
                  <strong>Amount:</strong> ₹{app.amount}
                </Typography>
                <Typography>
                  <strong>Type:</strong> {app.type}
                </Typography>
                <Typography>
                  <strong>Status:</strong> {app.status}
                </Typography>
                <Typography>
                  <strong>Approx. EMI:</strong> ₹
                  {calculateEMI(app.amount, app.interest, app.duration)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default LoanApplicationDashboard;
