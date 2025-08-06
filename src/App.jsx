import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/BrandsSection";
import PromiseSection from "./components/PromiseSection";
import ServicesSection from "./components/ServicesSection";
import AwardSection from "./components/AwardSection";
import CustomerFeedback from "./components/CustomerFeedback";
import FaqAccordion from "./components/FaqAccordion";
import ToolsTimeAndResult from "./components/ToolsTimeAndResult";
import FreeTrialSection from "./components/FreeTrialSection";
import FeatureCardsSection from "./components/FeatureCardsSection";
import BussinessOptimationTool from "./components/BussinessOptimationTool";
import RightChoiceFooter from "./components/RightChoiceFooter";
import IntegrationSection from "./components/IntegrationSection";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <PromiseSection />
      <ServicesSection />
      <AwardSection />
      <CustomerFeedback />
      <FaqAccordion />
      <ToolsTimeAndResult />
      <FeatureCardsSection />
      <IntegrationSection />
      <BussinessOptimationTool />
      <FreeTrialSection />
      <RightChoiceFooter />
    </>
  );
}

export default App;
