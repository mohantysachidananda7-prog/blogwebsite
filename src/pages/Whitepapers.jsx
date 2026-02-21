import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const whitepapers = [
  {
    title: "Enterprise AI Implementation Framework",
    desc: "A comprehensive whitepaper detailing AI adoption strategies for enterprises, including infrastructure planning, model lifecycle management, and governance compliance."
  },
  {
    title: "Cloud-Native Architecture at Scale",
    desc: "An in-depth technical document outlining scalable cloud infrastructure design using microservices, container orchestration, and automated CI/CD systems."
  },
  {
    title: "Zero-Trust Security Architecture",
    desc: "Exploring modern cybersecurity frameworks with zero-trust principles, identity verification layers, and encryption standards for enterprise environments."
  },
  {
    title: "Data-Driven Decision Intelligence",
    desc: "AediaX Tech Private Limited presents advanced analytics methodologies for real-time business intelligence and predictive modeling systems."
  },
  {
    title: "DevOps Automation & Operational Excellence",
    desc: "A technical whitepaper on implementing DevOps culture, pipeline automation, monitoring systems, and high-availability deployment strategies."
  },
  {
    title: "Future of AI in FinTech Ecosystems",
    desc: "Research insights into AI-driven financial platforms, fraud detection models, regulatory compliance automation, and predictive risk assessment."
  }
];

const Whitepapers = () => {
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
            Whitepapers – AediaX Tech Private Limited
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
            Our whitepapers provide deep technical insights, research-backed
            strategies, and enterprise-grade frameworks developed by
            AediaX Tech Private Limited. These documents are designed for
            CTOs, architects, and decision-makers seeking scalable
            and secure digital transformation.
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
            Explore our thought leadership across artificial intelligence,
            cloud infrastructure, DevOps automation, and cybersecurity
            engineering.
          </Typography>
        </Box>

        {/* Whitepaper Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {whitepapers.map((item, index) => (
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
                Download Whitepaper
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
            Research. Innovation. Enterprise Impact.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            AediaX Tech Private Limited continues to publish strategic
            research and architectural insights that empower organizations
            to build secure, scalable, and intelligent digital ecosystems.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Whitepapers;
