// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import awordImage from "../assets/rightchoiceaiImage/image2.png";
// import ToolsSection from "./ToolsSection";

// const AwardSection = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         backgroundColor: "#652DE7",
//         py: { xs: 4, sm: 6, md: 8 },
//         px: { xs: 2, sm: 4, md: 10 },
//         textAlign: "center",
//       }}
//     >
//       <Typography
//         variant="h6"
//         fontWeight="bold"
//         color="white"
//         mb={{ xs: 3, sm: 4 }}
//         fontSize={{ xs: "24px", sm: "28px", md: "32px" }}
//       >
//         Winter 2025 G2 Awards
//       </Typography>

//       <Box
//         component="img"
//         src={awordImage}
//         alt="Winter 2025 G2 Awards"
//         sx={{
//           width: "95%",
//           maxWidth: "1100px",
//           height: "auto",
//           mx: "auto",
//           display: "block",
//         }}
//       />

//       <ToolsSection />
//     </Box>
//   );
// };

// export default AwardSection;

import React from "react";
import { Box, Typography } from "@mui/material";
import awordImage from "../assets/rightchoiceaiImage/image2.png";
import ToolsSection from "./ToolsSection";

const AwardSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#652DE7",
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        fontWeight="bold"
        color="white"
        mb={{ xs: 3, sm: 4 }}
        fontSize={{ xs: "20px", sm: "28px", md: "36px" }}
        lineHeight={1.3}
      >
        Winter 2025 G2 Awards
      </Typography>

      {/* Responsive Image */}
      <Box
        component="img"
        src={awordImage}
        alt="Winter 2025 G2 Awards"
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%" },
          maxWidth: "1800px",
          height: "auto",
          borderRadius: 2,
          mx: "auto",
          display: "block",
        }}
      />

      {/* Tools Section */}
      <Box mt={{ xs: 4, sm: 6 }}>
        <ToolsSection />
      </Box>
    </Box>
  );
};

export default AwardSection;
