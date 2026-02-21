import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const tutorials = [
  {
    title: "Complete React JS Mastery",
    desc: "A structured deep dive into React fundamentals, hooks, routing, performance optimization, and scalable architecture patterns."
  },
  {
    title: "Building Full-Stack Apps with Firebase",
    desc: "Learn authentication, Firestore database, cloud functions, and real-time systems to build production-ready applications."
  },
  {
    title: "AI Integration in Web Applications",
    desc: "Step-by-step guide to integrating AI APIs, building chatbots, automation tools, and intelligent dashboards."
  },
  {
    title: "Cloud Deployment & DevOps",
    desc: "Deploy applications using AWS, Vercel, Docker, CI/CD pipelines, and performance monitoring strategies."
  },
  {
    title: "Secure Web Applications",
    desc: "Understand authentication, authorization, JWT, encryption, and modern security best practices."
  },
  {
    title: "System Design for Developers",
    desc: "Scalable backend architecture, microservices, API design principles, and database optimization techniques."
  }
];

const Tutorials = () => {
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
            Professional Tutorials & Guides
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
            The AediaX Tutorials section is designed to provide structured,
            industry-aligned learning experiences for developers, engineers,
            and technology innovators. Each guide focuses on practical
            implementation rather than theoretical explanations, helping you
            build real-world systems with confidence.
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
            From frontend engineering and full-stack development to AI
            integration and cloud architecture, our tutorials are curated to
            bridge the gap between learning and professional execution.
            Whether you are a beginner or an advanced developer, these guides
            will elevate your technical capabilities.
          </Typography>
        </Box>

        {/* Tutorials Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {tutorials.map((item, index) => (
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
                Start Learning
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
            Learn. Build. Scale.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            Our mission is to empower developers with actionable knowledge.
            Every tutorial at AediaX is crafted with clarity, depth, and
            practical implementation in mind. Explore structured pathways,
            experiment with code, and accelerate your journey toward becoming
            a technology leader.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Tutorials;
