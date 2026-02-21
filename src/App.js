import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import Documentation from "./pages/Documentation";
import CaseStudies from "./pages/CaseStudies";
import Whitepapers from "./pages/Whitepapers";
import ApiReference from "./pages/API Reference";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Lazy Pages
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Categories = lazy(() => import("./pages/Categories"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));



function App() {
  return (
    <Router>
      <Navbar />

      <Suspense
        fallback={
          <Box sx={{ minHeight: "80vh" }}>
            <PageLoader />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/whitepapers" element={<Whitepapers />} />
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
