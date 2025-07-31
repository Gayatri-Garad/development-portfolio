import React from "react";
import { Box, Typography, Button } from "@mui/material";
import awordImage from "../assets/rightchoiceaiImage/image2.png";
import ToolsSection from "./ToolsSection";

const AwardSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#652DE7",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        color="white"
        mb={{ xs: 3, sm: 4 }}
        fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
      >
        Winter 2025 G2 Awards
      </Typography>

      <Box
        component="img"
        src={awordImage}
        alt="Winter 2025 G2 Awards"
        sx={{
          width: "95%",
          maxWidth: "1100px",
          height: "auto",
          mx: "auto",
          display: "block",
        }}
      />

      <ToolsSection />
    </Box>
  );
};

export default AwardSection;
