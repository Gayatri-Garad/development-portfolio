import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Facebook, LinkedIn, Twitter, RssFeed } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import footerBg from "../assets/footer-medizen.svg";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        pt: 35,
        pb: 5,
        color: "white",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        px={{ xs: 2, md: 10 }}
      >
        {/* Health */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Health
          </Typography>
          {[
            "MediBuddy Gold",
            "Book Medicines",
            "Doctor Consultation",
            "Book a Lab test",
            "Covid Essential Items",
            "Surgery Care",
            "Dental",
            "Cancer Care",
            "Partner with MediBuddy",
          ].map((text) => (
            <Typography key={text} variant="body2" mb={0.5}>
              <Link href="#" color="inherit" underline="hover">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Hospitalization + Policies */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Hospitalization
          </Typography>
          {["Locate hospital", "Download: eCard", "Track claim", "FAQs"].map(
            (text) => (
              <Typography key={text} variant="body2" mb={0.5}>
                <Link href="#" color="inherit" underline="hover">
                  {text}
                </Link>
              </Typography>
            )
          )}

          <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
            Our Policies
          </Typography>
          {[
            "Terms of Use",
            "Privacy Policy",
            "Grievance Redressal",
            "Cancellation & Refund Policy",
            "Security at MediBuddy",
          ].map((text) => (
            <Typography key={text} variant="body2" mb={0.5}>
              <Link href="#" color="inherit" underline="hover">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* About */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            ABOUT
          </Typography>
          {[
            "Overview",
            "Tailored Corporate Plans",
            "Testimonials",
            "Contact",
            "Blog",
            "Careers",
            "Security",
            "Medical Value Travel Facilitator",
            "MediBuddy Beliefs",
          ].map((text) => (
            <Typography key={text} variant="body2" mb={0.5}>
              <Link href="#" color="inherit" underline="hover">
                {text}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Download & Social */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            DOWNLOAD APP
          </Typography>
          <Box display="flex" gap={2} mb={2}>
            <IconButton color="inherit" sx={{ border: "1px solid white" }}>
              <PlayArrowIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ border: "1px solid white" }}>
              <AppleIcon />
            </IconButton>
          </Box>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            FOLLOW US
          </Typography>
          <Box display="flex" gap={2}>
            <IconButton color="inherit" sx={{ border: "1px solid white" }}>
              <Facebook />
            </IconButton>
            <IconButton color="inherit" sx={{ border: "1px solid white" }}>
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" sx={{ border: "1px solid white" }}>
              <Twitter />
            </IconButton>
            <IconButton color="inherit" sx={{ border: "1px solid white" }}>
              <RssFeed />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
