import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question:
      "Can RightChoice.Ai also help me create & verify my Business Location?",
    answer:
      "Yes, we do help customers in verification & creation of business listings as well. Our Monitor plan also helps you automatically create a listing on Bing & ChatGPT.",
  },
  {
    question: "Which all Directories are synced with RightChoice.Ai?",
    answer:
      "We help you get listed on Google, Bing, Apple, Waze, Facebook Locations & all other directories linked with Google Business Profiles & Bing Places.",
  },
  {
    question:
      "How can RightChoice.Ai help my Business Rank better on Local Search?",
    answer:
      "With our Keyword Position Tracker & AI Optimized Tasks to help you boost your Profile Strength, you are guaranteed to rank better & get more customers.",
  },
  {
    question:
      "Does RightChoice.Ai also help with Reviews & Reputation Management?",
    answer:
      "Yes, our Advanced Reviews & Reputation Management Module helps you set Contextual Review Replies, understand Customer Sentiment & manage FAQs about your Business.",
  },
  {
    question:
      "Do you have solutions for Brands & Agencies with Multiple Locations?",
    answer:
      "RightChoice offers Advanced Reporting, Bulk Updates, Detailed Comparison & various modules for Brands & Agencies to manage Multiple Locations.",
  },
];

const FaqAccordion = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ backgroundColor: "#F9FAFB", py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "90%",
            px: { xs: 2, sm: 4, md: 10 },
            textAlign: "center",
            mb: 5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "#c2f5d3",
              display: "inline-block",
              px: 4,
              py: 1,
              borderRadius: "30px",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            FAQS
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{ fontWeight: "500", mt: 2 }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        {faqData.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 4,

              p: 1,
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontWeight: "700", fontSize: "20px" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FaqAccordion;
