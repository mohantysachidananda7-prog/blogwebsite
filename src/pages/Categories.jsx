import React from "react";
import { Box, Container, Typography } from "@mui/material";

const categories = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Frontend Engineering",
  "Backend Architecture",
  "Cloud Computing",
  "Cyber Security",
  "DevOps",
  "SaaS Platforms",
  "Startup Strategy",
  "UI/UX Design",
  "Product Engineering",
  "Blockchain",
  "Mobile Development",
  "Open Source",
  "System Design",
  "API Development",
  "Digital Transformation",
  "Enterprise Solutions",
  "Automation",
  "Internet of Things (IoT)",
  "Performance Optimization",
  "Software Testing",
  "Technical Leadership"
];

const Categories = () => {
  return (
    <Box
      sx={{
        py: 14,
        background: "linear-gradient(to bottom, #0b0f19, #0f172a)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">

        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              letterSpacing: 1,
            }}
          >
            Explore Knowledge Domains
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
            At AediaX Blog, we believe knowledge should not only inform but also
            empower innovation. Our categories are thoughtfully structured to
            guide professionals, students, and technology leaders through the
            evolving digital landscape. From core engineering principles to
            advanced AI-driven systems, each domain reflects the practical and
            strategic aspects of modern software development.
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              margin: "0 auto",
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.9,
            }}
          >
            Whether you're building scalable cloud architectures, exploring
            cybersecurity best practices, designing intuitive user interfaces,
            or launching a SaaS startup, our curated insights provide
            real-world value. These categories are designed to help you move
            beyond theory — toward execution, innovation, and leadership in
            technology.
          </Typography>
        </Box>

        {/* Categories Layout */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {categories.map((cat, index) => (
            <Box
              key={index}
              sx={{
                px: 5,
                py: 2.5,
                borderRadius: "50px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontWeight: 500,
                letterSpacing: 0.6,
                cursor: "pointer",
                transition: "all 0.4s ease",
                textAlign: "center",
                minWidth: 180,
                fontSize: "0.95rem",

                "&:hover": {
                  background:
                    "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  transform: "translateY(-6px)",
                  boxShadow: "0 15px 40px rgba(99,102,241,0.4)",
                },
              }}
            >
              {cat}
            </Box>
          ))}
        </Box>

        {/* Bottom Content Section */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Built for Modern Innovators
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#cbd5e1",
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            Technology is no longer confined to code — it is shaping industries,
            redefining business models, and transforming human experiences.
            AediaX Blog serves as a digital knowledge hub for developers,
            founders, engineers, researchers, and decision-makers who aim to
            stay ahead of the curve. Our goal is not just to publish articles,
            but to cultivate an ecosystem of insight, innovation, and
            professional growth.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "20px auto 0 auto",
              color: "#94a3b8",
              lineHeight: 1.9,
              fontSize: "0.95rem",
            }}
          >
            Each category represents a strategic pillar of the modern digital
            economy. Through deep technical tutorials, architectural breakdowns,
            industry analysis, and startup-focused discussions, we provide
            clarity in a rapidly evolving technological world. Explore, learn,
            build, and lead with AediaX.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Categories;
