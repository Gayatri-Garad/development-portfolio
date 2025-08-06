// import React from "react";
// import { Box, Typography, Button, Grid } from "@mui/material";

// import localHeatMapImage from "../assets/rightchoiceaiImage/image_localheatMap.png";
// import aiContentGeneration from "../assets/rightchoiceaiImage/imageaiContentGenration.png";
// import compotiotresTracker from "../assets/rightchoiceaiImage/imageCompetitorsTracker.png";
// import LocalKeywordFinder from "../assets/rightchoiceaiImage/imageLocalKeywordFinder.png";
// import AireviewAutoreply from "../assets/rightchoiceaiImage/imageAiReviewAutoReply.png";
// import profileSuspensionRisk from "../assets/rightchoiceaiImage/imageProfileSuspensionRisk.png";
// import bingChatGpt from "../assets/rightchoiceaiImage/imagebingChatGptDirectories.png";
// import profileProtection from "../assets/rightchoiceaiImage/imageprofilrProtection.png";

// const tools = [
//   {
//     image: LocalKeywordFinder,
//     title: "Local Keywords Finder",
//     desc: "Identify Relevant Local, Search Volumes, Importance & Ranks",
//     buttonText: "Check Keywords",
//   },
//   {
//     image: profileProtection,
//     title: "Profile Protection",
//     desc: "Defend your profile against unfounded claims & Google updates",
//     buttonText: "Protect Now",
//   },
//   {
//     image: profileSuspensionRisk,
//     title: "Profile Suspension Risk",
//     desc: "Evaluate your Listing’s Suspension Risk & Profile Strength across 70+ Parameters",
//     buttonText: "Check Now",
//   },
//   {
//     image: bingChatGpt,
//     title: "Bing, ChatGPT Directories",
//     desc: "Create a Free Bing Listing with RightChoice & appear on ChatGPT searches too",
//     buttonText: "Set Up Now",
//   },
//   {
//     image: localHeatMapImage,
//     title: "Local Heat Map",
//     desc: "Discover hotspots where customers frequently encounter your business profile",
//     buttonText: "Free Demo",
//   },
//   {
//     image: aiContentGeneration,
//     title: "AI Content Generator",
//     desc: "AI Generated Keyword Optimised Content to help you Rank Better Locally",
//     buttonText: "Set Tracking",
//   },
//   {
//     image: compotiotresTracker,
//     title: "Competitors Tracker",
//     desc: "Track your competitors’ listings and performance",
//     buttonText: "Free Demo",
//   },
//   {
//     image: AireviewAutoreply,
//     title: "AI Review Auto Reply",
//     desc: "Automatically reply to reviews using AI",
//     buttonText: "Track Now",
//   },
// ];

// const ToolsSection = () => {
//   const leftCards = tools.slice(0, 4);
//   const rightCards = tools.slice(4);

//   return (
//     <Box
//       sx={{
//         py: 10,
//         px: { xs: 2, md: 4 },

//         marginTop: 10,
//         marginLeft: -15,
//       }}
//     >
//       <Button
//         variant="contained"
//         sx={{
//           mt: { xs: 3, sm: 4 },
//           backgroundColor: "#C5FBD7",
//           color: "#17693D",
//           fontWeight: "bold",
//           borderRadius: "30px",
//           px: { xs: 3, sm: 4 },
//           py: 1.5,
//           fontSize: { xs: "14px", sm: "16px" },
//           "&:hover": {
//             backgroundColor: "#a3e5be",
//           },
//         }}
//       >
//         TOOLS
//       </Button>
//       <Typography
//         variant="h4"
//         align="center"
//         color="white"
//         marginTop={4}
//         fontWeight="bold"
//         mb={7}
//       >
//         Tools That Save Time & Get Results
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} md={6}>
//           <Box display="flex" flexDirection="column" gap={4}>
//             {leftCards.map((tool, index) => (
//               <ToolCard key={index} tool={tool} />
//             ))}
//           </Box>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Box display="flex" flexDirection="column" gap={4}>
//             {rightCards.map((tool, index) => (
//               <ToolCard key={index + 4} tool={tool} />
//             ))}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// const ToolCard = ({ tool }) => (
//   <Box
//     sx={{
//       backgroundColor: "white",

//       p: 3,
//       height: "100%",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "flex-start",
//       gap: 2,
//     }}
//   >
//     <Box
//       sx={{
//         backgroundColor: "#f1e8ff",
//         width: 40,
//         height: 40,
//         borderRadius: 1,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img
//         src={tool.image}
//         alt={tool.title}
//         style={{ width: 40, height: 40, objectFit: "contain" }}
//       />
//     </Box>

//     <Typography variant="h4" fontWeight="bold" color="#000000" mb={1}>
//       {tool.title}
//     </Typography>

//     <Typography variant="body2" color="#000000" fontSize={17}>
//       {tool.desc}
//     </Typography>

//     <Button
//       variant="text"
//       sx={{
//         alignSelf: "flex-start",
//         color: "#000",
//         fontWeight: "bold",
//         textTransform: "none",
//         display: "flex",
//         alignItems: "center",
//         gap: 1,
//         mt: 1,
//       }}
//     >
//       {tool.buttonText}
//       <Box
//         sx={{
//           width: 24,
//           height: 24,
//           backgroundColor: "#25c950",
//           borderRadius: "50%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <span style={{ color: "white", fontWeight: "bold" }}>➤</span>
//       </Box>
//     </Button>
//   </Box>
// );

// export default ToolsSection;

import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

import localHeatMapImage from "../assets/rightchoiceaiImage/image_localheatMap.png";
import aiContentGeneration from "../assets/rightchoiceaiImage/imageaiContentGenration.png";
import compotiotresTracker from "../assets/rightchoiceaiImage/imageCompetitorsTracker.png";
import LocalKeywordFinder from "../assets/rightchoiceaiImage/imageLocalKeywordFinder.png";
import AireviewAutoreply from "../assets/rightchoiceaiImage/imageAiReviewAutoReply.png";
import profileSuspensionRisk from "../assets/rightchoiceaiImage/imageProfileSuspensionRisk.png";
import bingChatGpt from "../assets/rightchoiceaiImage/imagebingChatGptDirectories.png";
import profileProtection from "../assets/rightchoiceaiImage/imageprofilrProtection.png";

const tools = [
  {
    image: LocalKeywordFinder,
    title: "Local Keywords Finder",
    desc: "Identify Relevant Local, Search Volumes, Importance & Ranks",
    buttonText: "Check Keywords",
  },
  {
    image: profileProtection,
    title: "Profile Protection",
    desc: "Defend your profile against unfounded claims & Google updates",
    buttonText: "Protect Now",
  },
  {
    image: profileSuspensionRisk,
    title: "Profile Suspension Risk",
    desc: "Evaluate your Listing’s Suspension Risk & Profile Strength across 70+ Parameters",
    buttonText: "Check Now",
  },
  {
    image: bingChatGpt,
    title: "Bing, ChatGPT Directories",
    desc: "Create a Free Bing Listing with RightChoice & appear on ChatGPT searches too",
    buttonText: "Set Up Now",
  },
  {
    image: localHeatMapImage,
    title: "Local Heat Map",
    desc: "Discover hotspots where customers frequently encounter your business profile",
    buttonText: "Free Demo",
  },
  {
    image: aiContentGeneration,
    title: "AI Content Generator",
    desc: "AI Generated Keyword Optimised Content to help you Rank Better Locally",
    buttonText: "Set Tracking",
  },
  {
    image: compotiotresTracker,
    title: "Competitors Tracker",
    desc: "Track your competitors’ listings and performance",
    buttonText: "Free Demo",
  },
  {
    image: AireviewAutoreply,
    title: "AI Review Auto Reply",
    desc: "Automatically reply to reviews using AI",
    buttonText: "Track Now",
  },
];

const ToolsSection = () => {
  const leftCards = tools.slice(0, 4);
  const rightCards = tools.slice(4);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        mt: { xs: 6, md: 10 },
      }}
    >
      <Box textAlign="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C5FBD7",
            color: "#17693D",
            fontWeight: "bold",
            borderRadius: "30px",
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

      <Typography
        variant="h4"
        align="center"
        color="white"
        fontWeight="bold"
        mt={4}
        mb={6}
        fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
      >
        Tools That Save Time & Get Results
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={4}>
            {leftCards.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={4}>
            {rightCards.map((tool, index) => (
              <ToolCard key={index + 4} tool={tool} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ToolCard = ({ tool }) => (
  <Box
    sx={{
      backgroundColor: "white",
      borderRadius: 2,
      p: { xs: 2.5, sm: 3 },
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: 2,
      boxShadow: 3,
    }}
  >
    <Box
      sx={{
        backgroundColor: "#f1e8ff",
        width: 48,
        height: 48,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={tool.image}
        alt={tool.title}
        style={{ width: 30, height: 30, objectFit: "contain" }}
      />
    </Box>

    <Typography
      variant="h6"
      fontWeight="bold"
      color="#000000"
      fontSize={{ xs: "18px", sm: "20px" }}
    >
      {tool.title}
    </Typography>

    <Typography variant="body2" color="#000000" fontSize={{ xs: 15, sm: 16 }}>
      {tool.desc}
    </Typography>

    <Button
      variant="text"
      sx={{
        alignSelf: "flex-start",
        color: "#000",
        fontWeight: "bold",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: 1,
      }}
    >
      {tool.buttonText}
      <Box
        sx={{
          width: 24,
          height: 24,
          backgroundColor: "#25c950",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "white", fontWeight: "bold" }}>➤</span>
      </Box>
    </Button>
  </Box>
);

export default ToolsSection;
