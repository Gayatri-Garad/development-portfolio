import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const imageData = {
  Retail: [
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand1.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand2.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand3.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand4.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand5.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand6.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand7.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand8.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand9.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand10.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand11.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2FRetailBrand%2Fbrand12.png&w=256&q=75",
  ],
  "BFSI & Ed Tech": [
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Feducation%2Fbrand1.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Feducation%2Fbrand2.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Feducation%2Fbrand3.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Feducation%2Fbrand4.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Feducation%2Fbrand5.png&w=256&q=75",
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Feducation%2Fbrand6.png&w=256&q=75",
  ],
  Healthcare: [
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Fhealth%2Fbrand1.png&w=256&q=75",
  ],
  "QSRs & Hotels": [
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Frestaurant%2Fbrand1.png&w=256&q=75",
  ],
  Automobile: [
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Fautomotive%2Fbrand1.png&w=256&q=75",
  ],
  "Real Estate": [
    "https://rightchoice.ai/_next/image?url=%2FnewImages%2Frealestate%2Fbrand1.png&w=256&q=75",
  ],
};

const BrandsSection = () => {
  const [active, setActive] = useState("Retail");

  const categories = [
    "Retail",
    "BFSI & Ed Tech",
    "Healthcare",
    "QSRs & Hotels",
    "Automobile",
    "Real Estate",
  ];

  return (
    <Box sx={{ textAlign: "center", py: 6, px: 2 }}>
      <Typography
        variant="subtitle2"
        sx={{
          backgroundColor: "#DCFCE7",
          display: "inline-block",
          borderRadius: "30px",
          color: "#16A34A",
          fontWeight: 550,
          paddingTop: "10px",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "1.2rem",
          width: "262px",
          height: "52px",
          marginBottom: "24px",
        }}
      >
        BRANDS WE SERVE
      </Typography>

      <Typography
        variant="h4"
        sx={{ fontWeight: 600, mb: 3, fontSize: "2rem" }}
      >
        Brands Love Us
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 1,
          marginBottom: "24px",
          width: { xs: "100%", sm: "90%", md: "70%" },
          fontFamily: "'Poppins', sans-serif",
          fontSize: "1.2rem",
          color: "#000000",
          fontWeight: 550,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        RightChoice.Ai is a part of daily lives of thousands of social media
        marketers and highly recommended for its capabilities.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
          mt: 3,
        }}
      >
        {categories.map((item) => (
          <Button
            key={item}
            variant="outlined"
            onClick={() => setActive(item)}
            sx={{
              height: "60px",
              border: "1px solid #000000",
              borderRadius: "10px",
              fontWeight: 600,
              backgroundColor: active === item ? "#6f3fc8" : "#fff",
              color: active === item ? "#fff" : "#000",
              borderColor: active === item ? "#6f3fc8" : "#ccc",
              "&:hover": {
                backgroundColor: active === item ? "#5724E1" : "#f5f5f5",
                boxShadow: "0 4px 12px rgba(44, 7, 252, 0.2)",
              },
            }}
          >
            {item}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 2, sm: 3 },
          justifyContent: "center",
          mt: 4,
          width: "100%",
          maxWidth: "1250px",
          mx: "auto",
          px: 2,
        }}
      >
        {imageData[active]?.map((url, idx) => (
          <Box
            key={idx}
            component="img"
            src={url}
            alt={`${active} brand logo`}
            sx={{
              width: { xs: "100px", sm: "150px", md: "180px", lg: "200px" },
              height: "auto",
              objectFit: "contain",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BrandsSection;
