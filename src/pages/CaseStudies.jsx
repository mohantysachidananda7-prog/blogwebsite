import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const caseStudies = [
  {
    title: "AI-Powered Customer Support System",
    desc: "AediaX Tech Private Limited designed and deployed an AI chatbot platform handling over 50,000 monthly interactions, reducing support response time by 65% and improving customer satisfaction metrics."
  },
  {
    title: "Scalable Cloud Migration Strategy",
    desc: "Migrated a legacy enterprise infrastructure to a cloud-native architecture using AWS and containerized microservices, improving system uptime to 99.98%."
  },
  {
    title: "Real-Time Analytics Dashboard",
    desc: "Developed a real-time analytics engine processing millions of data events daily, enabling data-driven decision-making with dynamic visualization dashboards."
  },
  {
    title: "Secure FinTech Platform Architecture",
    desc: "Implemented enterprise-grade security with JWT authentication, encryption layers, and compliance-ready infrastructure for a financial technology startup."
  },
  {
    title: "AI-Based Predictive Sales Engine",
    desc: "Built a machine learning model predicting customer buying behavior, increasing conversion rates by 32% within the first quarter of deployment."
  },
  {
    title: "DevOps Automation & CI/CD Pipeline",
    desc: "Designed and automated CI/CD pipelines reducing deployment cycles by 70%, enabling rapid feature delivery with zero downtime releases."
  }
];

const CaseStudies = () => {
  return (
    <Box
      sx={{
        py: 14,
        background: "linear-gradient(to bottom, #0b0f19, #111827)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, mb: 3 }}
          >
            Case Studies – AediaX Tech Private Limited
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              mb: 3
            }}
          >
            At AediaX Tech Private Limited, we engineer scalable,
            intelligent, and secure digital solutions tailored to
            enterprise and startup ecosystems. Our case studies
            highlight real-world implementations across AI systems,
            cloud infrastructure, and enterprise architecture.
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              margin: "0 auto",
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.9
            }}
          >
            Each project reflects our commitment to performance,
            scalability, and measurable business impact. Explore how
            our engineering expertise transforms complex challenges
            into high-performing digital systems.
          </Typography>
        </Box>

        {/* Case Study Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {caseStudies.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                p: 4,
                transition: "0.4s",
                backdropFilter: "blur(6px)",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
                  borderColor: "#6366f1"
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                {item.desc}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  textTransform: "none",
                  borderRadius: 3,
                  fontWeight: 600,
                  "&:hover": {
                    background: "linear-gradient(90deg, #4f46e5, #7c3aed)"
                  }
                }}
              >
                View Case Study
              </Button>
            </Box>
          ))}
        </Box>

        {/* Bottom Section */}
        <Box sx={{ textAlign: "center", mt: 12 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Engineering Measurable Impact
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            AediaX Tech Private Limited combines advanced AI,
            cloud-native engineering, and secure infrastructure
            strategies to deliver measurable business transformation.
            Our case studies demonstrate how innovation meets execution
            at scale.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default CaseStudies;
