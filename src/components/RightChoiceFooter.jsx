// import React from "react";
// import {
//   Box,
//   Grid,
//   Typography,
//   Link,
//   IconButton,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import CloseIcon from "@mui/icons-material/Close";
// import logo from "../assets/logo.png"; // Replace with actual path

// const footerLinks = {
//   SERVICES: [
//     "Listing Management",
//     "Reviews & Reputation",
//     "Enterprise Solutions",
//     "Keyword Tracker",
//   ],
//   TOOLS: [
//     "Local Keywords Ranker",
//     "AI Content Generation",
//     "Profile Protection",
//     "Profile Suspension Risk",
//     "AI Review Auto Reply",
//     "Geo Grid Tracker",
//     "Competitor Tracker",
//     "Products & Menu Upload",
//     "OTA Pricing Comparison",
//     "Manage Multiple Listings",
//     "Local Post Scheduler",
//     "Customer Heat Map",
//     "AI Sentiment Analysis",
//     "Profile Strength & Audit",
//     "20+ Directories Integration ",
//     "Bussiness Performance Data",
//   ],
//   "FREE TOOLS": [
//     "Review Reply Generator",
//     "Profile Category Generator",
//     "Profile Strength Calculator",
//     "Profile Audit Calculator",
//   ],
//   Compare: [
//     "Localo Alternative",
//     "Birdeye Alternative",
//     "Uberall Alternative",
//     "BrightLocal Alternative",
//   ],
// };

// const RightChoiceFooter = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box sx={{ bgcolor: "#0D0D15", color: "#ffffff", px: 4, py: 10 }}>
//       {/* Top Logo and Social Icons */}
//       <Box
//         display="flex"
//         alignItems="center"
//         justifyContent={isMobile ? "center" : "flex-start"}
//         gap={8}
//         flexWrap="wrap"
//         padding={5}
//         mb={7}
//       >
//         <Box display="flex" alignItems="center" gap={1}>
//           <Box component="img" src={logo} alt="Logo" sx={{ width: 45 }} />
//           <Typography variant="h4" fontWeight="bold">
//             RightChoice.Ai
//           </Typography>
//         </Box>

//         <Box display="flex" alignItems="center" gap={2}>
//           <CloseIcon sx={{ width: "40px", fontSize: "50px" }} />
//           <FacebookIcon sx={{ width: "40px", fontSize: "50px" }} />
//           <InstagramIcon sx={{ width: "40px", fontSize: "50px" }} />
//           <LinkedInIcon sx={{ width: "40px", fontSize: "50px" }} />
//         </Box>
//       </Box>

//       {/* Links Section */}
//       <Grid container spacing={5}>
//         {Object.entries(footerLinks).map(([title, items]) => (
//           <Grid item xs={12} sm={6} md={2} key={title}>
//             <Typography
//               variant="subtitle1"
//               fontWeight="bold"
//               fontSize={25}
//               paddingLeft={10}
//               gutterBottom
//             >
//               {title}
//             </Typography>
//             {items.map((item, index) => (
//               <Typography variant="body2" key={index} sx={{ mb: 0.5 }}>
//                 <Link
//                   href="#"
//                   color="inherit"
//                   underline="hover"
//                   fontSize={15}
//                   paddingLeft={8}
//                   fontFamily="Poppines ,sans-erif"
//                 >
//                   {item}
//                 </Link>
//               </Typography>
//             ))}
//           </Grid>
//         ))}

//         {/* Company & Contact Section */}
//         <Grid item xs={12} sm={6} md={2}>
//           <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//             Company
//           </Typography>
//           <Typography variant="body2">
//             <Link href="#" color="inherit" underline="hover">
//               Privacy Policy
//             </Link>
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 2 }}>
//             <Link href="#" color="inherit" underline="hover">
//               Terms and Conditions
//             </Link>
//           </Typography>

//           <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//             Contact Us
//           </Typography>
//           <Typography variant="body2">📧 gmb@rightchoice.ai</Typography>
//           <Typography variant="body2">📞 +91 96500 16787</Typography>
//         </Grid>
//       </Grid>

//       {/* Bottom Social Section */}
//       <Box mt={6} textAlign="center">
//         <Typography variant="subtitle1" fontWeight="bold">
//           FOLLOW US ON
//         </Typography>
//         <Box mt={1} display="flex" justifyContent="center" gap={2}>
//           <IconButton color="inherit">
//             <FacebookIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <CloseIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <InstagramIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <LinkedInIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default RightChoiceFooter;

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";
import footerawardImge from "../assets/rightchoiceaiImage/footer1.png";
import footerAwardImage2 from "../assets/rightchoiceaiImage/footer2.png";

const footerLinks = {
  SERVICES: [
    "Listing Management",
    "Reviews & Reputation",
    "Enterprise Solutions",
    "Keyword Tracker",
  ],
  TOOLS: [
    "Local Keywords Ranker",
    "AI Content Generation",
    "Profile Protection",
    "Profile Suspension Risk",
    "AI Review Auto Reply",
    "Geo Grid Tracker",
    "Competitor Tracker",
    "Products & Menu Upload",
    "OTA Pricing Comparison",
    "Manage Multiple Listings",
    "Local Post Scheduler",
    "Customer Heat Map",
    "AI Sentiment Analysis",
    "Profile Strength & Audit",
    "20+ Directories Integration ",
    "Bussiness Performance Data",
  ],
  "FREE TOOLS": [
    "Review Reply Generator",
    "Profile Category Generator",
    "Profile Strength Calculator",
    "Profile Audit Calculator",
  ],
  Compare: [
    "Localo Alternative",
    "Birdeye Alternative",
    "Uberall Alternative",
    "BrightLocal Alternative",
  ],
};

const RightChoiceFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#0D0D15", color: "#ffffff", px: 4, py: 10 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={isMobile ? "center" : "flex-start"}
        gap={8}
        flexWrap="wrap"
        padding={5}
        mb={7}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: 45 }} />
          <Typography variant="h4" fontWeight="bold">
            RightChoice.Ai
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <CloseIcon sx={{ width: "40px", fontSize: "50px" }} />
          <FacebookIcon sx={{ width: "40px", fontSize: "50px" }} />
          <InstagramIcon sx={{ width: "40px", fontSize: "50px" }} />
          <LinkedInIcon sx={{ width: "40px", fontSize: "50px" }} />
        </Box>
      </Box>
      <Grid container spacing={5} marginBottom={5}>
        {Object.entries(footerLinks).map(([title, items]) => (
          <Grid item xs={12} sm={6} md={2} key={title}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              fontSize={25}
              paddingLeft={7}
              gutterBottom
            >
              {title}
            </Typography>
            {items.map((item, index) => (
              <Typography variant="body2" key={index} sx={{ mb: 0.5 }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="hover"
                  fontSize={18}
                  paddingLeft={5}
                  fontFamily="Poppines ,sans-erif"
                >
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}

        <Grid item xs={12} sm={6} md={2}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ fontFamily: "Poppines,sans-serif", fontSize: "26px" }}
            gutterBottom
          >
            Company
          </Typography>
          <Typography variant="body2">
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontFamily: "Poppines,sans-serif", fontSize: "20px" }}
            >
              Privacy Policy
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              sx={{ fontFamily: "Poppines,sans-serif", fontSize: "20px" }}
            >
              Terms and Conditions
            </Link>
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            fontSize={26}
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppines,sans-serif", fontSize: "20px" }}
          >
            📧 gmb@rightchoice.ai
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, fontSize: "20px" }}>
            📞 +91 96500 16787
          </Typography>

          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ fontFamily: "Poppines,sans-serif", fontSize: "25px" }}
          >
            FOLLOW US ON
          </Typography>
          <Box mt={1} display="flex" gap={1} marginLeft={-2.5}>
            <IconButton color="inherit">
              <FacebookIcon
                sx={{ width: "40px", fontSize: "45px", marginTop: "-10px" }}
              />
            </IconButton>
            <IconButton color="inherit">
              <CloseIcon
                sx={{ width: "40px", fontSize: "45px", marginTop: "-10px" }}
              />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon
                sx={{ width: "40px", fontSize: "45px", marginTop: "-10px" }}
              />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon
                sx={{ width: "40px", fontSize: "45px", marginTop: "-10px" }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={34}
      >
        <Box
          component="img"
          src={footerawardImge}
          alt="Award Image 1"
          sx={{
            maxWidth: "100%",
            width: { xs: "90%", sm: "70%", md: "50%" },
            height: "auto",
            objectFit: "contain",
          }}
        />

        <Box
          component="img"
          src={footerAwardImage2}
          alt="Award Image 2"
          sx={{
            maxWidth: "100%",
            width: { xs: "60%", sm: "40%", md: "25%" },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <hr />

      <Box>
        <Typography
          variant="body2"
          margin={3}
          fontFamily="Poppins, sans-serif"
          fontSize={19}
          fontWeight={400}
          color="#FFFFFF"
        >
          Copyright © 2023 Genshi Solutions Private Limited All Rights Reserved:{" "}
          <Link
            href="#"
            sx={{
              color: "#FFFFFF",
              textDecorationColor: "#FFFFFF",
              textUnderlineOffset: "4px",
            }}
          >
            Privacy Policy
          </Link>
        </Typography>

        <Typography
          margin={3}
          fontFamily="Poppins, sans-serif"
          fontSize={19}
          fontWeight={400}
          color="#FFFFFF"
        >
          RightChoice's use and transfer to any other app of information
          received from Google APIs will adhere to{" "}
          <Link
            href="#"
            sx={{
              color: "#FFFFFF",
              textDecorationColor: "#FFFFFF",
              textUnderlineOffset: "4px",
            }}
          >
            Google API Services User Data Policy
          </Link>
          , including the Limited Use requirements.
        </Typography>
      </Box>
    </Box>
  );
};

export default RightChoiceFooter;
