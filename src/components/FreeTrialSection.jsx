import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const FreeTrialSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#6f3fc8",
        color: "#ffffff",
        textAlign: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
      >
        Try Right Choice For Free Today
      </Typography>

      <Typography sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 5, mt: 6 }}>
        Find out if RightChoice.ai helps your Local Business Grow with <br />7
        Days Free Trial. No Credit Card Required.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 8,
          mt: 9,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#6f3fc8",
            fontWeight: "bold",
            px: 5,
            py: 1.9,
            marginRight: "15px",
            fontSize: "1.5rem",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#e6e6e6",
            },
          }}
        >
          Start Free Trial
        </Button>

        <Button
          variant="outlined"
          sx={{
            color: "#ffffff",
            borderColor: "#ffffff",
            fontWeight: "bold",
            px: 8,
            py: 2,
            fontSize: "1.5rem",
            marginLeft: "10px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#5e35b1",
              borderColor: "#ffffff",
            },
          }}
        >
          Book A Demo
        </Button>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        sx={{ maxWidth: "1000px", mx: "auto" }}
      >
        <Grid item xs={12} sm={4} textAlign="left">
          <Box>
            <Box
              sx={{
                backgroundColor: "#00c853",
                width: 80,
                height: 80,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                mb: 2,
              }}
            >
              <PersonIcon sx={{ color: "#ffffff", fontSize: 36 }} />
            </Box>
            <Typography fontWeight="bold" fontSize={20}>
              Dedicated
            </Typography>
            <Typography fontWeight="bold" fontSize={20}>
              Business Coach
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="center">
          <Box>
            <Box
              sx={{
                backgroundColor: "#00c853",
                width: 80,
                height: 80,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                mb: 2,
                mx: "auto",
              }}
            >
              <AppsIcon sx={{ color: "#ffffff", fontSize: 36 }} />
            </Box>
            <Typography fontWeight="bold" fontSize={20}>
              Access
            </Typography>
            <Typography fontWeight="bold" fontSize={20}>
              All Features
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} textAlign="right">
          <Box>
            <Box
              sx={{
                backgroundColor: "#00c853",
                width: 80,
                height: 80,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 12px rgba(35, 13, 13, 0.2)",
                mb: 2,
                ml: "auto",
              }}
            >
              <AccessTimeIcon sx={{ color: "#ffffff", fontSize: 36 }} />
            </Box>
            <Typography fontWeight="bold" fontSize={20}>
              Real Time
            </Typography>
            <Typography fontWeight="bold" fontSize={20}>
              Support
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FreeTrialSection;
