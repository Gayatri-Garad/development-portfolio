import React from "react";
import { Box, Typography, Chip, useTheme, useMediaQuery } from "@mui/material";

import apple from "../assets/rightchoiceaiImage/integration1.png";
import googleAssistant from "../assets/rightchoiceaiImage/integration2.png";
import sparkle from "../assets/rightchoiceaiImage/integration3.png";
import bing from "../assets/rightchoiceaiImage/integration4.png";
import openAi from "../assets/rightchoiceaiImage/integration5.png";
import yext from "../assets/rightchoiceaiImage/integration6.png";
import cortana from "../assets/rightchoiceaiImage/integration7.png";
import googleMyBusiness from "../assets/rightchoiceaiImage/integration8.png";
import google from "../assets/rightchoiceaiImage/integration9.png";
import instagram from "../assets/rightchoiceaiImage/integration10.png";
import googleMaps from "../assets/rightchoiceaiImage/integration11.png";
import googleTravel from "../assets/rightchoiceaiImage/integration12.png";
import waze from "../assets/rightchoiceaiImage/integration13.png";
import facebook from "../assets/rightchoiceaiImage/integration14.png";
import lyft from "../assets/rightchoiceaiImage/integration15.png";
import uber from "../assets/rightchoiceaiImage/integration16.png";

const logos = [
  apple,
  googleAssistant,
  sparkle,
  bing,
  openAi,
  yext,
  cortana,
  googleMyBusiness,
  google,
  instagram,
  googleMaps,
  googleTravel,
  waze,
  facebook,
  lyft,
  uber,
];

const IntegrationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ textAlign: "center", py: 8, px: 2 }}>
      <Chip
        label="INTEGRATIONS"
        sx={{
          bgcolor: "#DFFFE6",
          color: "#009f4d",
          fontWeight: 800,
          mb: 4,
          px: 3,
          py: 3,
          fontSize: "15px",
        }}
      />
      <Typography variant="h5" fontWeight={600}>
        Direct Integration With Directories
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 2,
          mb: 3,
          fontSize: "20px",
          fontWeight: "bold",
          color: "gray",
        }}
      >
        Link your Business Profiles with Multiple Directories,
        <br />
        CRMs & more
      </Typography>

      {/* LOGO FLEX GRID */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "70%",
          margin: "auto",
          marginTop: "65px",
        }}
      >
        {logos.map((logo, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: "25%", sm: "12.5%" },
              marginTop: "25px",
              p: 1,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                border: "1px solid #eee",
                borderRadius: 2,
                p: 1,
                bgcolor: "#ffffff",
                boxShadow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IntegrationSection;
