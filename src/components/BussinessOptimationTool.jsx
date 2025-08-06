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
import starIcon from "../assets/rightchoiceaiImage/imageAiReviewReply.png";
import categoryIcon from "../assets/rightchoiceaiImage/imageAdditonalCategory.png";
import profileIcon from "../assets/rightchoiceaiImage/imageProfileStrenth.png";
import ProfileAudit from "../assets/rightchoiceaiImage/imageGMBProfileAudit.png";

const toolFeatureData = [
  {
    title: "AI Review Reply Generator",
    desc: "Use AI to generate customizable & engaging Customer Review Replies for Free.",
    button: "Generate Now",
    bgColor: "#FCE4EC",
    icon: starIcon,
  },
  {
    title: "Generate Additional Category",
    desc: "Get Additional Category suggestions based on the Primary Category of your Profile.",
    button: "Generate Now",
    bgColor: "#E0F7FA",
    icon: categoryIcon,
  },
  {
    title: "Calculate Profile Strength",
    desc: "Get a profile strength of your Google My Business Profile to find the missing gaps in the local SEO for free.",
    button: "Calculate Now",
    bgColor: "#FFF9C4",
    icon: profileIcon,
  },
  {
    title: "Free GMB Profile Audit",
    desc: "Audit your Local Bussiness Profile for free and find scope for improvement in the Local SEO and Content Updates.",
    button: "Get Audit",
    bgColor: "#eff2f3ff",
    icon: ProfileAudit,
  },
];

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

const BussinessOptimationTool = () => {
  const settings = {
    dots: false,
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
            mt: 1,
            backgroundColor: "#C5FBD7",
            color: "#17693D",
            fontWeight: "bold",
            borderRadius: "30px",
            marginBottom: "20px",
            px: 3,
            py: 1.2,
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#a3e5be",
            },
          }}
        >
          FREE TOOL FEATURE
        </Button>
      </Box>

      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
        Free Google My Business Optimisation Tools
      </Typography>
      <Typography textAlign="center" mb={5} fontWeight="medium" fontSize="16px">
        Harness the power of Generative AI to Improve Local SEO of your Google
        My Business Profile for Free
      </Typography>

      <Box
        sx={{
          position: "relative",
          px: { xs: 1, sm: 3, md: 6 },
        }}
      >
        <Slider {...settings}>
          {toolFeatureData.map((tool, index) => (
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

export default BussinessOptimationTool;
