import React from "react";
import { Box, Container, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CloudIcon from "@mui/icons-material/Cloud";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AppsIcon from "@mui/icons-material/Apps";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LayersIcon from "@mui/icons-material/Layers";

const services = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "AI Software Consultancy",
    desc: "Expert guidance for your AI and software projects.",
  },
  {
    icon: <AppsIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Web & Mobile App Development",
    desc: "Cross-platform applications for any business need.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Business Automation",
    desc: "Streamline operations with custom automation.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Custom SaaS Development",
    desc: "Scalable cloud solutions for your business.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "AI MVP Development",
    desc: "Validate your AI idea quickly with an MVP.",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Internship Programs",
    desc: "Hands-on experience for aspiring developers and AI enthusiasts.",
  },
  {
    icon: <LayersIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Education Programs",
    desc: "Comprehensive learning paths for modern technology.",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "Exam & Certification",
    desc: "Validate skills with industry-recognized certifications.",
  },
  {
    icon: <DeveloperModeIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    title: "More Services",
    desc: "Explore our complete service portfolio.",
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#fff" }}>
      <Container>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#1976d2",
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            OUR SERVICES
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mt: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Technology Solutions Designed for Growth
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#555",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            AediaX Tech delivers intelligent software solutions,
            AI-driven innovation, automation systems, and
            professional technology programs to empower businesses
            and individuals.
          </Typography>
        </Box>

        {/* Service Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              component="a"
              href="https://aediax.com/services"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                textDecoration: "none",
                p: 4,
                borderRadius: 4,
                backgroundColor: "#f9fbff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  backgroundColor: "#ffffff",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>

              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1, color: "#111" }}
              >
                {service.title}
              </Typography>

              <Typography sx={{ color: "#555", fontSize: "0.95rem" }}>
                {service.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
