import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import googleServiseImage from "../assets/google_Servise.png";
import keywordServiseImage from "../assets/servise2_keyword.png";
import postingServiseImage from "../assets/service3_postingandScheduling.png";
import reviewServiseImage from "../assets/service4_reviewMangement.png";

const tabLabels = [
  "Listing & Management",
  "Keyword Analytics",
  "Posting & Scheduling",
  "Review Management",
];

const tabContent = {
  "Listing & Management": {
    title: "Access All Features To Manage Your Business Listing In One Place",
    description: "Manage And Secure Business Listings",
    points: [
      "Efficiently create, verify, manage, and protect your Google Business listings.",
    ],
    description2: "Detailed Performance Data",
    points2: [
      "Gain a complete view of performance data for all your listings in one place.",
    ],
  },
  "Keyword Analytics": {
    title: "Track your business's Keyword Rank and compare it with competitors",
    description: "Keyword Heat Map & Ranking",
    points: [
      "Generate a customer heat map to see how your business performs across targeted keywords in specific local areas.",
    ],
    description2: "Competitors Rank Analysis",
    points2: [
      "Refine your strategies with our advanced competitor analysis, including insights on high-search-volume keywords.",
    ],
  },
  "Posting & Scheduling": {
    title:
      "Post Content and Product Updates on all Business Listings with a single click",
    description: "Add Creative GMB Posts at Scale",
    points: [
      "Update Engagement Posts, Events, and Offers across all listings with a single post.",
    ],
    description2: "Update Products on Multiple Listings",
    points2: [
      "Post about the latest products and services with our Bulk Product Update Solutions.",
    ],
  },
  "Review Management": {
    title:
      "Manage & Analyse Reviews with AI-automated tools and sort them by sentiments",
    description: "AI-Automation and Tracking",
    points: [
      "Use our context-driven AI Reply Generator to set automated, personalized responses to customer reviews and receive monthly reports.",
    ],
    description2: "Sentiment Analysis",
    points2: [
      "Easily categorize, analyze, and organize customer feedback by keywords and review ratings.",
    ],
  },
};

const tabImages = {
  "Listing & Management": googleServiseImage,
  "Keyword Analytics": keywordServiseImage,
  "Posting & Scheduling": postingServiseImage,
  "Review Management": reviewServiseImage,
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("Listing & Management");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  const content = tabContent[activeTab];

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          mb: 4,
          fontSize: "1rem",
          backgroundColor: "#DCFCE7",
          borderRadius: "30px",
          color: "#16A34A",
          width: "fit-content",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 3,
          py: 1,
          mx: "auto",
        }}
      >
        POWERFUL FEATURES
      </Typography>

      <Typography
        variant="h4"
        sx={{ fontWeight: 550, textAlign: "center", mb: 1 }}
      >
        Services That Help You Rank
      </Typography>

      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        centered={!isMobile}
        indicatorColor="none"
        sx={{
          mb: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          "& .MuiTab-root": {
            minWidth: "200px",
            px: 2,
            py: 1,
            textTransform: "none",
            border: "1px solid #000",
            borderRadius: "12px",
            fontSize: isMobile ? "0.85rem" : "1rem",
            fontWeight: 600,
            backgroundColor: "#ffffff",
            color: "#000000",
            margin: "50px",
          },
          "& .Mui-selected": {
            backgroundColor: "#6F3FC8",
            fontWeight: 500,
            color: "#ffffff",
          },
        }}
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} value={label} />
        ))}
      </Tabs>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            component="img"
            src={tabImages[activeTab]}
            alt={activeTab}
            sx={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: 3,
              objectFit: "contain",
            }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "20px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {content.title}
            </Typography>

            {content.description && (
              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <Typography
                  sx={{
                    color: "#6F3FC8",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  {content.description}
                </Typography>
                <ArrowRightAltIcon sx={{ color: "green" }} />
              </Box>
            )}

            <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
              {content.points.map((point, idx) => (
                <li key={idx} style={{ marginBottom: "8px" }}>
                  {point}
                </li>
              ))}
            </ul>

            {content.description2 && (
              <>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Typography
                    sx={{
                      color: "#6F3FC8",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                    }}
                  >
                    {content.description2}
                  </Typography>
                  <ArrowRightAltIcon sx={{ color: "green" }} />
                </Box>
                <ul style={{ paddingLeft: "20px" }}>
                  {content.points2?.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: "8px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Box>

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                mr: 2,
                backgroundColor: "#6F3FC8",
                color: "#ffffff",
                fontWeight: "600",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "uppercase",
              }}
            >
              START FREE TRIAL
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "2px solid #6F3FC8",
                color: "#6F3FC8",
                fontWeight: "600",
                px: 4,
                py: 1.5,
                borderRadius: "8px",
                textTransform: "uppercase",
              }}
            >
              REQUEST A DEMO
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
