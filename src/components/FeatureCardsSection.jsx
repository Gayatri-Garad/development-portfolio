import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import multiLocationBrand from "../assets/rightchoiceaiImage/multi-brand78d3ae71.png";
import solostorefrontagency from "../assets/rightchoiceaiImage/agencies858109d1.png";
import agncyBarnd from "../assets/rightchoiceaiImage/brands.ec2bfa32.png";

const features = [
  {
    title: "Solo Storefronts",
    points: [
      "Manage Business Profiles & get Complete Audit",
      "Check Reviews, Sentiment Analysis & set AI Replies",
      "Track Rank on Local Keywords & Check Geo Grid Rank",
      "Analyze Local Competitors & check their best practices",
    ],
    image: solostorefrontagency,
    link: "#",
  },
  {
    title: "Agencies",
    points: [
      "Connect & manage Multiple Locations on a single dashboard",
      "Whitelabel dashboard as per your needs",
      "Get Advanced Data Analytics & Custom Reporting",
      "Manage Locations at scale & publish content with help of AI",
    ],
    image: agncyBarnd,
    link: "#",
  },
  {
    title: "Multi-Location Brands",
    points: [
      "Assistance for Google Business Profile Bulk Verification",
      "Invite Team Members based on roles & share access within the team",
      "Leverage content library to save evergreen and reusable content",
      "Get 24 X 7 Support & Custom Pricing Plans",
    ],
    image: multiLocationBrand,
    link: "#",
  },
];

const FeatureCardsRow = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#fff", py: 8, px: { xs: 2, sm: 4, md: 10 } }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Typography
          variant="subtitle2"
          sx={{
            backgroundColor: "#c6f5d5",
            px: 4,
            py: 1.5,
            borderRadius: "20px",
            fontWeight: "bold",
            color: "#2c9c5c",
          }}
        >
          MADE FOR ALL
        </Typography>
      </Box>

      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Features Designed For Teams Of Every Type & Size
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="center"
        fontSize="20px"
        mb={6}
      >
        RightChoice is designed for every type of team and their needs.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              borderRadius: 3,
              boxShadow: 3,
              position: "relative",
              overflow: "hidden",
              minHeight: 350,
              paddingBottom: "110px",
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {feature.title}
              </Typography>
              <List dense>
                {feature.points.map((point, i) => (
                  <ListItem key={i} disablePadding>
                    <ListItemText
                      primaryTypographyProps={{
                        fontSize: "19px",
                        fontFamily: "sans-serif",
                        color: "#000000",
                      }}
                      primary={
                        <span>
                          <Box
                            component="span"
                            sx={{
                              color: "#6395f9ff",
                              display: "inline",
                            }}
                          >
                            •
                          </Box>{" "}
                          {point}
                        </span>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Link
                href={feature.link}
                underline="none"
                sx={{
                  color: "#6f3fc8",
                  fontWeight: "bold",
                  fontSize: "20px",
                  mt: 2,
                  display: "inline-block",
                }}
              >
                Explore Now &gt;
              </Link>
            </CardContent>

            <Box
              component="img"
              src={feature.image}
              alt={feature.title}
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: "150px",
                opacity: 1,
                zIndex: 0,
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureCardsRow;
