// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   Menu,
//   MenuItem,
//   IconButton,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import aiSymbol from "../assets/aiSymbol.png";
// import logo from "../assets/logo.png";

// function Navbar() {
//   const [anchorElTools, setAnchorElTools] = React.useState(null);
//   const [anchorElServices, setAnchorElServices] = React.useState(null);

//   const handleMenuOpen = (event, setAnchor) => setAnchor(event.currentTarget);
//   const handleMenuClose = (setAnchor) => setAnchor(null);

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         backgroundColor: "#ffffff",
//         boxShadow: "none",
//         px: 2,
//         py: 1,
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         {/* Logo */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: 1,

//             p: "4px 8px",
//             bgcolor: "#ffffff",
//           }}
//         >
//           <img src={logo} alt="RightChoice" width={36} height={36} />
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#5724E1",
//               fontWeight: "bold",
//               display: "flex",
//               alignItems: "center",
//               gap: 1,
//               fontSize: "1.2rem",
//             }}
//           >
//             RightChoice
//             <img src={aiSymbol} alt="AI" width={36} height={36} />
//           </Typography>
//         </Box>

//         {/* Menu Links */}
//         <Box
//           sx={{
//             display: { xs: "none", md: "flex" },
//             gap: 3,
//             alignItems: "center",
//           }}
//         >
//           <Button
//             sx={{
//               color: "#000000",
//               fontFamily: "poppins, sans-serif",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Home
//           </Button>
//           <Button
//             sx={{
//               color: "#000000",
//               fontFamily: "poppins, sans-serif",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//           >
//             Pricing
//           </Button>

//           <Button
//             sx={{
//               color: "#000000",
//               fontFamily: "poppins, sans-serif",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//             endIcon={<ArrowDropDownIcon />}
//             onClick={(e) => handleMenuOpen(e, setAnchorElTools)}
//           >
//             Tools
//           </Button>
//           <Menu
//             anchorEl={anchorElTools}
//             open={Boolean(anchorElTools)}
//             onClose={() => handleMenuClose(setAnchorElTools)}
//           >
//             <MenuItem onClick={() => handleMenuClose(setAnchorElTools)}>
//               Keyword Tracker
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuClose(setAnchorElTools)}>
//               Review Manager
//             </MenuItem>
//           </Menu>

//           <Button
//             sx={{
//               color: "#000000",
//               fontFamily: "poppins, sans-serif",
//               fontWeight: "bold",
//               fontSize: "1rem",
//             }}
//             endIcon={<ArrowDropDownIcon />}
//             onClick={(e) => handleMenuOpen(e, setAnchorElServices)}
//           >
//             Services
//           </Button>
//           <Menu
//             anchorEl={anchorElServices}
//             open={Boolean(anchorElServices)}
//             onClose={() => handleMenuClose(setAnchorElServices)}
//           >
//             <MenuItem onClick={() => handleMenuClose(setAnchorElServices)}>
//               SEO Services
//             </MenuItem>
//             <MenuItem onClick={() => handleMenuClose(setAnchorElServices)}>
//               Business Profile
//             </MenuItem>
//           </Menu>

//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#5724E1",
//               borderRadius: 2,
//               textTransform: "none",
//               width: "156px",
//               height: "40px",
//               color: "#ffffff",
//               px: 3,
//             }}
//           >
//             LOGIN
//           </Button>
//         </Box>

//         {/* Mobile Menu Icon */}
//         <IconButton sx={{ display: { md: "none" }, color: "#6f3fc8" }}>
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import aiSymbol from "../assets/aiSymbol.png";
import logo from "../assets/logo.png";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [toolsOpen, setToolsOpen] = React.useState(false);
  const [toolsLocked, setToolsLocked] = React.useState(false);

  const handleMouseEnter = () => {
    if (!toolsLocked) setToolsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!toolsLocked) setToolsOpen(false);
  };

  const handleClick = () => {
    setToolsLocked(!toolsLocked);
    setToolsOpen(true);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", boxShadow: "none", px: 2, py: 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={logo} alt="RightChoice" width={36} height={36} />
          <Typography
            variant="h6"
            sx={{
              color: "#5724E1",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "1.2rem",
            }}
          >
            RightChoice
            <img src={aiSymbol} alt="AI" width={36} height={36} />
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            alignItems: "center",
            position: "relative",
          }}
        >
          <Button sx={{ color: "#000", fontWeight: "bold" }}>Home</Button>
          <Button sx={{ color: "#000", fontWeight: "bold" }}>Pricing</Button>

          <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <Button
              sx={{ color: "#000", fontWeight: "bold" }}
              endIcon={<ArrowDropDownIcon />}
            >
              Tools
            </Button>
            {toolsOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100vw",
                  backgroundColor: "#fff",
                  boxShadow: 4,
                  display: "flex",
                  justifyContent: "center",
                  py: 4,
                  zIndex: 1300,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    maxWidth: "2200px",
                    justifyContent: "space-between",
                    gap: 4,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight="bold" gutterBottom>
                      Ranking Tools
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Local Keywords Finder</strong>
                      <br />
                      Identify Relevant Local, Search Volumes, Importance &
                      Ranks
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>AI Content Generation</strong>
                      <br />
                      AI Generated Keyword Optimized Content to help you Rank
                      Better Locally
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Local Heat Map</strong>
                      <br />
                      Discover Local Hotspots & understand where your Customers
                      are Discovering you from!
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight="bold" gutterBottom>
                      Tracking & Audit Tools
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Profile Protection</strong>
                      <br />
                      Defend your Listing from false Claims & Google Updates
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Bing, ChatGPT Directories</strong>
                      <br />
                      Create a Free Bing Listing with RightChoice & appear on
                      ChatGPT searches too
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Competitors Tracker</strong>
                      <br />
                      Track Local Competitors, Compare with them & Discover New
                      Secrets
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight="bold" gutterBottom>
                      More Features
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>Profile Suspension Risk</strong>
                      <br />
                      Evaluate your Listing’s Suspension Risk & Profile Strength
                      across 70+ Parameters
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      <strong>AI Review Auto Reply</strong>
                      <br />
                      Appease & Delight your Customers with specific AI
                      Generated Review Replies
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>

          <Button sx={{ color: "#000", fontWeight: "bold" }}>Services</Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5724E1",
              borderRadius: 2,
              textTransform: "none",
              color: "#fff",
              width: "156px",
              height: "40px",
              px: 3,
            }}
          >
            LOGIN
          </Button>
        </Box>

        <IconButton
          sx={{ display: { md: "none" }, color: "#6f3fc8" }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
