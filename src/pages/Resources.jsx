import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const resources = [
  {
    title: "Developer Toolkits",
    desc: "Curated tools, IDEs, extensions, productivity systems, and engineering utilities used by modern software teams.",
  },
  {
    title: "Cloud Platforms",
    desc: "Comprehensive resources for AWS, Azure, Google Cloud, Vercel, and scalable infrastructure deployment strategies.",
  },
  {
    title: "AI & Machine Learning APIs",
    desc: "Documentation, SDK references, integration examples, and AI model deployment guides for real-world applications.",
  },
  {
    title: "Cybersecurity Frameworks",
    desc: "Security best practices, encryption standards, authentication models, and compliance documentation.",
  },
  {
    title: "System Design References",
    desc: "Architectural patterns, scalability techniques, database design strategies, and high-performance systems.",
  },
  {
    title: "Startup & SaaS Resources",
    desc: "Product-market fit guides, SaaS architecture blueprints, growth frameworks, and monetization strategies.",
  },
];

const Resources = () => {
  return (
    <Box
      sx={{
        py: 14,
        background: "linear-gradient(to bottom, #0b0f19, #0f172a)",
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
            Professional Resources Hub
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            The AediaX Resources Hub is a centralized knowledge repository
            designed for developers, engineers, founders, and technology
            leaders. Our curated collection of tools, documentation, and
            professional frameworks enables you to build scalable, secure,
            and high-performance digital solutions.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.9,
            }}
          >
            Whether you're architecting cloud-native systems, integrating AI
            capabilities, optimizing DevOps workflows, or scaling a SaaS
            platform, our resources provide actionable clarity. Each section
            focuses on practical execution and industry standards to help you
            operate at a professional level.
          </Typography>
        </Box>

        {/* Resource Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {resources.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%" },
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                p: 4,
                transition: "0.4s",
                backdropFilter: "blur(8px)",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
                  borderColor: "#6366f1",
                },
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
                  mb: 3,
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
                    background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
                  },
                }}
              >
                Explore Resources
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
            Empowering Modern Innovators
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9,
            }}
          >
            Technology evolves rapidly — and staying competitive requires more
            than surface-level knowledge. AediaX Resources are structured to
            support continuous learning, strategic decision-making, and
            enterprise-grade development. Explore frameworks, tools, and
            documentation that align with industry standards and future-ready
            innovation.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Resources;
