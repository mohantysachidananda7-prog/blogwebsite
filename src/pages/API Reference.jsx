import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const apiEndpoints = [
  {
    title: "Authentication API",
    desc: "Secure JWT-based authentication endpoints for user login, registration, token refresh, and role-based access control."
  },
  {
    title: "User Management API",
    desc: "Endpoints for managing user profiles, permissions, account settings, and enterprise-level access management."
  },
  {
    title: "Analytics Data API",
    desc: "Real-time data processing and analytics endpoints delivering high-volume business intelligence insights."
  },
  {
    title: "AI Prediction API",
    desc: "Machine learning inference endpoints enabling predictive analytics, recommendation systems, and AI-driven automation."
  },
  {
    title: "Payment Gateway API",
    desc: "Secure financial transaction endpoints with encryption, compliance standards, and multi-currency processing support."
  },
  {
    title: "System Monitoring API",
    desc: "Infrastructure health monitoring, logging systems, and performance metrics endpoints for DevOps automation."
  }
];

const ApiReference = () => {
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
            API Reference – AediaX Tech Private Limited
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
            The API Reference section provides detailed technical
            documentation for integrating with AediaX Tech Private Limited
            platforms. Our APIs are built with scalability, security,
            and performance at the core.
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
            Explore RESTful endpoints, authentication mechanisms,
            request-response formats, and integration best practices
            to accelerate your development workflow.
          </Typography>
        </Box>

        {/* API Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {apiEndpoints.map((item, index) => (
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
            Developer-First Architecture
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            AediaX Tech Private Limited delivers high-performance,
            secure, and developer-friendly APIs designed for modern
            enterprise ecosystems and scalable cloud-native systems.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default ApiReference;
