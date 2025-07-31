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
    </>
  );
}

export default App;
