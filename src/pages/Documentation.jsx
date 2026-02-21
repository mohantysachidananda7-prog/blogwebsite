import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const docs = [
  {
    title: "Getting Started Guide",
    desc: "Complete setup instructions including environment configuration, installation steps, and initial project structure overview."
  },
  {
    title: "API Reference",
    desc: "Detailed documentation of endpoints, authentication methods, request/response formats, and integration examples."
  },
  {
    title: "Authentication & Security",
    desc: "Learn how to implement JWT authentication, OAuth integration, encryption techniques, and secure access control systems."
  },
  {
    title: "Deployment & Hosting",
    desc: "Step-by-step deployment guides using Vercel, AWS, Docker containers, and CI/CD best practices."
  },
  {
    title: "Architecture Overview",
    desc: "Understand system design, microservices structure, database architecture, and scalability patterns."
  },
  {
    title: "Performance Optimization",
    desc: "Advanced strategies for caching, lazy loading, server-side rendering, and monitoring system performance."
  }
];

const Documentation = () => {
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
            AediaX Documentation Center
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
            The AediaX Documentation hub provides comprehensive technical
            guidance for developers, engineers, and technology teams. This
            section contains structured references, system architecture
            breakdowns, API specifications, and deployment workflows.
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
            Whether you are integrating AI services, building scalable
            applications, or deploying enterprise-grade systems, our
            documentation ensures clarity, precision, and practical
            implementation support.
          </Typography>
        </Box>

        {/* Documentation Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {docs.map((item, index) => (
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
                View Documentation
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
            Build with Confidence
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            Our documentation is engineered for clarity and scalability.
            Explore structured guides, reference architectures, and
            production-ready implementation strategies to accelerate
            your development journey with AediaX.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Documentation;
