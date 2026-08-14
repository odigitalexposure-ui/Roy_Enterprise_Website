import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Gallery from "../components/Gallery";
import MaterialsUsed from "../components/MaterialsUsed";
import HowItWorks from "../components/HowItWorks";
import WorkGallery from "../components/WorkGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Gallery />
        <MaterialsUsed />
        <HowItWorks />
        <WorkGallery />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default Home;
