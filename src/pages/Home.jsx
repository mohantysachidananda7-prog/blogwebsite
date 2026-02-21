import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import StatsSection from "../components/StatsSection";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <Box>
      <Hero />

      {/* Content Sections */}
      <Box sx={{ position: "relative", zIndex: 1, marginTop: "100vh" }}>
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <StatsSection />
        <Newsletter />
      </Box>
    </Box>
  );
};

export default Home;
