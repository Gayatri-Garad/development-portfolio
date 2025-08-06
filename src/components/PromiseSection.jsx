// import React from "react";
// import { Box, Typography } from "@mui/material";
// import promise1 from "../assets/promiseSection_1.png";
// import promise2 from "../assets/promiseSection_2.png";
// import promise3 from "../assets/promiseSection_3.png";

// const PromiseSection = () => {
//   const data = [
//     {
//       icon: promise1,
//       value: "2X",
//       label: "More Storefront Visits",
//     },
//     {
//       icon: promise2,
//       value: "+300%",
//       label: "Local Impressions",
//     },
//     {
//       icon: promise3,
//       value: "60%",
//       label: "More Phone Calls",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         backgroundColor: "#fff",
//         py: 10,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <Typography
//         variant="subtitle2"
//         sx={{
//           backgroundColor: "#DCFCE7",
//           borderRadius: "30px",
//           color: "#16A34A",
//           fontWeight: 600,
//           px: 3,
//           py: 1,
//           mb: 2,
//           fontSize: "1rem",
//         }}
//       >
//         OUR PROMISE
//       </Typography>

//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 550,
//           mb: 6,
//           fontSize: "2.5rem",
//           textAlign: "center",
//           mt: 5,
//         }}
//       >
//         Level Up Your Local SEO
//       </Typography>

//       <Box
//         sx={{
//           width: "80%",
//           maxWidth: "2427px",
//           height: "330px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           backgroundColor: "#ffffff",
//         }}
//       >
//         {data.map((item, index) => (
//           <Box
//             key={index}
//             sx={{
//               width: "300px",
//               backgroundColor: "#F9FAFB",

//               boxShadow: 3,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               p: 4,
//               textAlign: "center",
//               paddingLeft: "20px",
//               paddingRight: "20px",
//             }}
//           >
//             <img src={item.icon} alt="icon" style={{ width: 70, height: 70 }} />
//             <Typography
//               variant="h4"
//               sx={{
//                 color: "#1D4ED8",
//                 fontWeight: "bold",
//                 mt: 2,
//                 fontSize: "2rem",

//                 fontFamily: "'Poppins', sans-serif",
//               }}
//             >
//               {item.value}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 mt: 1,
//                 fontSize: "1.1rem",
//                 color: "#374151",
//                 fontFamily: "'Poppins', sans-serif",
//                 fontWeight: 550,
//               }}
//             >
//               {item.label}
//             </Typography>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default PromiseSection;

import React from "react";
import { Box, Typography } from "@mui/material";
import promise1 from "../assets/promiseSection_1.png";
import promise2 from "../assets/promiseSection_2.png";
import promise3 from "../assets/promiseSection_3.png";

const PromiseSection = () => {
  const data = [
    {
      icon: promise1,
      value: "2X",
      label: "More Storefront Visits",
    },
    {
      icon: promise2,
      value: "+300%",
      label: "Local Impressions",
    },
    {
      icon: promise3,
      value: "60%",
      label: "More Phone Calls",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        py: { xs: 6, sm: 8, md: 10 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          backgroundColor: "#DCFCE7",
          borderRadius: "30px",
          color: "#16A34A",
          fontWeight: 600,
          px: 3,
          py: 1,
          mb: 2,
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        OUR PROMISE
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 550,
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          textAlign: "center",
          mt: { xs: 2, md: 5 },
        }}
      >
        Level Up Your Local SEO
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "2427px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 4, md: 3 },
          px: { xs: 2, md: 0 },
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "300px" },
              backgroundColor: "#F9FAFB",
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 3, md: 4 },
              textAlign: "center",
              borderRadius: "12px",
            }}
          >
            <img
              src={item.icon}
              alt="icon"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "#1D4ED8",
                fontWeight: "bold",
                mt: 2,
                fontSize: { xs: "1.5rem", sm: "2rem" },
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {item.value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                fontSize: { xs: "1rem", sm: "1.1rem" },
                color: "#374151",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 550,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PromiseSection;
