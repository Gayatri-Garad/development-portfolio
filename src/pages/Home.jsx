import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React, { useState, useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  const navItems = [
    {
      label: "Talk to Doctor",
      icon: "https://www.medibuddy.in/assets/services/doctor.svg",
    },
    {
      link: "/order-medicine",
      label: "Medicine",
      icon: "https://www.medibuddy.in/assets/services/medicine.svg",
    },
    {
      label: "Book Dr. Appointment",
      icon: "https://www.medibuddy.in/assets/services/consulation.svg",
    },
    {
      label: "Lab.Test & Packages",
      icon: "https://www.medibuddy.in/assets/services/labtest.svg",
    },
    {
      label: "Surgery",
      icon: "https://www.medibuddy.in/assets/services/surgery.svg",
    },
  ];

  const cardData = [
    {
      title: "Unlimited Free Consultations",
      img: "https://www.medibuddy.in/assets/services/mb-gold/unlimited-consultations.svg",
      desc: "Get unlimited free consultations with all doctors 24x7",
    },
    {
      title: "Free For Full Family",
      img: "https://www.medibuddy.in/assets/services/mb-gold/family.svg",
      desc: "Free consultations for upto 6 family members",
    },
    {
      title: "Free For All Health Problems",
      img: "https://www.medibuddy.in/assets/services/mb-gold/free-health.svg",
      desc: "Consult with any doctor from 18 departments at any time",
    },
    {
      title: "Video Consultations",
      img: "https://www.medibuddy.in/assets/services/mb-gold/video-consultation.svg",
      desc: "Video Consults with top doctors 24x7",
    },
  ];

  const bannerImages = [
    {
      src: "https://views.medibuddy.in/mb-config/IMAGE/surgery_revamped_banner_1741548411366.png",
      alt: "Surgery Banner",
    },
    {
      src: "https://views.medibuddy.in/mb-config/IMAGE/labs_diagnostic_centre_banner_test_1746685618507.webp",
      alt: "labs_diagnostic_centre_banner_test",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container maxWidth="lg" marginBottom={10} marginTop={10}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#fff", padding: "10px" }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-around", marginTop: 7 }}
        >
          {navItems.map((item, index) => (
            <Button key={index} sx={{ textTransform: "none" }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <NavLink to={item.link} style={{ textDecoration: "none" }}>
                  <img
                    src={item.icon}
                    alt={item.label}
                    style={{ width: 40, height: 40 }}
                  />

                  <Typography
                    variant="body2"
                    sx={{ color: "black", fontWeight: 600, fontSize: "13px" }}
                  >
                    {item.label}
                  </Typography>
                </NavLink>
              </Box>
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Box className="consult-box">
        <Typography variant="h6">
          Consult with Top Doctors Online, 24x7
        </Typography>
        <a className="consult-link" href="#">
          Start Consultation <ArrowRightAltIcon />
        </a>
      </Box>

      <Box mt={4} mb={6}>
        <img
          src={bannerImages[currentIndex].src}
          alt={bannerImages[currentIndex].alt}
          style={{
            width: "100%",
            transition: "opacity 0.5s",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />
      </Box>

      <Box mt={3} mb={6}>
        <img
          src="https://views.medibuddy.in/dynamic-banner/medibuddyHomeFirstFoldWebABHA.svg"
          alt="Government Banner"
          style={{ width: "100%", boxShadow: 2 }}
        />
      </Box>

      <Box sx={{ padding: 4, minHeight: "00px" }}>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                padding: 4,
                borderRadius: 3,
                boxShadow: 0,
                height: "70%",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                fontSize={26}
                color="#1a237e"
              >
                <span style={{ color: "#1778f2" }}>Medi</span>
                <span style={{ color: "red" }}>Buddy</span>
                <span style={{ color: "#1a237e" }}> GOLD</span>
              </Typography>

              <Typography
                variant="h4"
                fontWeight={600}
                sx={{ mt: 2 }}
                className="graidiant-text"
              >
                Give the care your family deserves
              </Typography>

              <Typography sx={{ marginTop: 5 }}>
                Unlimited Consultations with top Doctors for 6 family members in
                22+ specialities and 16 languages
              </Typography>

              <Box sx={{ marginTop: 3 }}>
                <a className="gold-consult-link">
                  Buy MedBuddy gold <ArrowRightAltIcon />
                </a>
              </Box>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid size={{ xs: 6, md: 6 }} container spacing={1}>
            {cardData.map((card, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card
                  sx={{
                    height: "95%",
                    borderRadius: 3,
                    boxShadow: 3,
                    marginTop: 2,
                  }}
                >
                  <CardContent className="card-content" margin={3}>
                    <img src={card.img} alt={card.title} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box mt={3} mb={6}>
        <img
          src="https://views.medibuddy.in/dynamic-banner/medibuddyHomeThirdFoldWebsurgery.svg"
          alt="Dynamic Banner"
          style={{ width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://views.medibuddy.in/mb-config/BANNER/2_million_employees_banner_1745838121516.png"
          alt="employees_banner"
          style={{ width: "50%", marginRight: "10px" }}
        />

        <img
          src="https://views.medibuddy.in/mb-config/BANNER/fight_with_corona_banner_1745838171585.png"
          alt="corona_banner"
          style={{ width: "50%" }}
        />
      </Box>
    </Container>
  );
}

export default Home;
