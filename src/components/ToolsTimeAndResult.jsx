import React from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bussinessListing from "../assets/rightchoiceaiImage/imagemultiplebissnessList.png";
import GenerateContentAI from "../assets/rightchoiceaiImage/imageGenerateContentAI.png";
import ProtectProfile from "../assets/rightchoiceaiImage/imageprotectBussinessProfile.png";
import localKeywordsRank from "../assets/rightchoiceaiImage/imageLocalKeywordsRank.png";
import sheduleGMB from "../assets/rightchoiceaiImage/imageSheduleGMB.png";
import trankRank from "../assets/rightchoiceaiImage/imageTrankRank.png";
const toolData = [
  {
    title: "Local Keywords Rank Tracker",
    desc: "Find & Rank on Local Keywords with 30+ Keyword Trackers & Visibility Score",
    button: "Check Keyword Rank",
    bgColor: "#FFF0D5",
    icon: localKeywordsRank,
  },
  {
    title: "Track Ranks on Geo-Grid",
    desc: "Track Rank in your Local Area with Geo Grid Track on Google Search & Maps",
    button: "Generate Geo Grid",
    bgColor: "#FFE3E3",
    icon: trankRank,
  },
  {
    title: "Generate Content Using AI",
    desc: "Use AI to write Local SEO Optimized Content for Services, Posts, Offers, Products & More",
    button: "Generate Content",
    bgColor: "#FCE4EC",
    icon: GenerateContentAI,
  },
  {
    title: "Schedule GMB & Social Media Post ",
    desc: "Create & Schedule Social Media & GMB Post on Your Business Profiles",
    button: "Schedule Post",
    bgColor: "#D8F3DC",
    icon: sheduleGMB,
  },
  {
    title: "Manage Multiple Business Listings",
    desc: "Manage & Update Multiple Listings in a single go across 20+ Search Directories",
    button: "Connect Multiple Listing",
    bgColor: "#E0F7FA",
    icon: bussinessListing,
  },
  {
    title: "Protect Business Profile",
    desc: "Protect Your Listing from Google Updates False Claims & Suspension",
    button: "Manage Reviews",
    bgColor: "#F3E8FF",
    icon: ProtectProfile,
  },
];

// Custom Arrow Components
const ArrowBtn = ({ onClick, direction }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 2,
      backgroundColor: "#7e57c2",
      color: "#ffffff",
      "&:hover": { backgroundColor: "#5e35b1" },
      left: direction === "left" ? "-40px" : "auto",
      right: direction === "right" ? "-40px" : "auto",
    }}
  >
    {direction === "left" ? (
      <ArrowBackIosNewIcon fontSize="small" />
    ) : (
      <ArrowForwardIosIcon fontSize="small" />
    )}
  </IconButton>
);

const ToolsTimeAndResult = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowBtn direction="left" />,
    nextArrow: <ArrowBtn direction="right" />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, py: 6, position: "relative" }}>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            mt: { xs: 3, sm: 4 },
            backgroundColor: "#C5FBD7",
            color: "#17693D",
            fontWeight: "bold",
            borderRadius: "30px",
            marginBottom: "20px",
            px: { xs: 3, sm: 4 },
            py: 1.5,
            fontSize: { xs: "14px", sm: "16px" },
            "&:hover": {
              backgroundColor: "#a3e5be",
            },
          }}
        >
          TOOLS
        </Button>
      </Box>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
        Tools That Save Time & Get Results
      </Typography>
      <Typography
        textAlign="center"
        mb={5}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        Advanced Keywords tracking feature to help you analyze your business
        keywords
      </Typography>

      <Box
        sx={{
          position: "relative",
          px: { xs: 1, sm: 3, md: 6 },
        }}
      >
        <Slider {...settings}>
          {toolData.map((tool, index) => (
            <Box key={index} px={2}>
              <Card
                sx={{
                  backgroundColor: tool.bgColor,
                  borderRadius: 3,
                  height: "100%",
                  minHeight: 280,
                  width: "300px",
                  px: 2,
                  py: 3,
                }}
              >
                <CardContent>
                  <Box mb={2}>
                    <img
                      src={tool.icon}
                      alt={tool.title}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography variant="body2" mb={3}>
                    {tool.desc}
                  </Typography>
                  <Button
                    variant="text"
                    sx={{
                      color: "black",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                    endIcon={
                      <Box
                        sx={{
                          backgroundColor: "#66fa98",
                          padding: "6px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                      </Box>
                    }
                  >
                    {tool.button}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ToolsTimeAndResult;
