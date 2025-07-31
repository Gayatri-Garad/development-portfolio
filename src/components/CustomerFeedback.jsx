import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

import { Box, Typography, Avatar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import feedback1 from "../assets/rightchoiceaiImage/imagefeedback1.png";
import feedback2 from "../assets/rightchoiceaiImage/imagefeedback2.png";
import feedback3 from "../assets/rightchoiceaiImage/imagefeedback3.png";
import feedback4 from "../assets/rightchoiceaiImage/imagefeedback4.png";

const testimonials = [
  {
    bgColor: "#FCE7F3",
    title: "We got 700+ of Our Locations Live!",
    desc: `Something we had been trying for years, team RightChoice help us get 700 of our Villas live on Google & Bing driving 20% of our Growth!
`,
    name: "Ritika Gupta",
    designation: "AVP Marketing - StayVista",
    image: feedback1,
  },
  {
    bgColor: "#DCFCE7",
    title: "100% Growth in Inbound Calls!- Here’s How!",
    desc: `With RightChoice, Physics Wallah Coaching Centers saw a 800% surge in calls and visits.Best choice for boosting online presence for Vidyapeeths!
`,
    name: "Nomendra Rajput",
    designation: "Manager - Physiocs Wallash",
    image: feedback2,
  },
  {
    bgColor: "#FEF9C3",
    title: "Help us build our Organic Growth Channel ",
    desc: `Being Malaysia's Biggest Workshop Network ,RightChoice helped us build a 0 CAC Channel driven by Organic Searches.They have a lovely dashboard`,
    name: "Brandon",
    designation: "Marketing - MyMechanic",
    image: feedback3,
  },
  {
    bgColor: "#F3E8FF",
    title: "Best Software to Manage Local Listings",
    desc: `Helped us get all our Workshops listed on Google, Bing & increase our organic demand by 200%. Love their support as well!
`,
    name: "Chirenj Chandran",
    designation: "Founder -MySyara",
    image: feedback4,
  },
];

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <ArrowBackIosIcon sx={{ fontSize: 30, color: "#333" }} />
    </Box>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "-40px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 30, color: "#333" }} />
    </Box>
  );
};

const CustomerFeedbackCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "380px",
    slidesToShow: 1,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 4 },
        py: 8,
        backgroundColor: "#fafafa",
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} px={2}>
            <Box
              sx={{
                backgroundColor: testimonial.bgColor,
                borderRadius: 4,
                p: 4,
                minHeight: 280,
                boxShadow: 3,
                marginRight: 20,
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={2} mt={10}>
                {testimonial.title}
              </Typography>
              <Typography
                dangerouslySetInnerHTML={{ __html: testimonial.desc }}
                sx={{
                  mb: 6,
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              />
              <Box display="flex" alignItems="center" mt={2}>
                <Avatar
                  src={testimonial.image}
                  sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Box>
                  <Typography fontWeight={700}>{testimonial.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.designation}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomerFeedbackCarousel;
