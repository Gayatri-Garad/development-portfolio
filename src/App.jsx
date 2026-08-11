import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
<Experience />
<Projects />
<Skills />
<Education />
<Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
