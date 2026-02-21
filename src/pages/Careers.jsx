import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const jobOpenings = [
  {
    title: "Frontend Developer (React.js)",
    desc: "Build scalable and high-performance user interfaces using React.js, MUI, and modern frontend architecture patterns."
  },
  {
    title: "Backend Developer (Node.js)",
    desc: "Design and develop secure REST APIs, microservices, and scalable backend systems for enterprise applications."
  },
  {
    title: "DevOps Engineer",
    desc: "Implement CI/CD pipelines, cloud infrastructure automation, container orchestration, and system monitoring solutions."
  },
  {
    title: "AI/ML Engineer",
    desc: "Develop machine learning models, predictive analytics systems, and AI-driven automation platforms."
  },
  {
    title: "UI/UX Designer",
    desc: "Create intuitive, user-centric interface designs with strong visual consistency and modern SaaS aesthetics."
  },
  {
    title: "Cloud Solutions Architect",
    desc: "Design scalable cloud-native systems with high availability, security compliance, and performance optimization."
  }
];

const Careers = () => {
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
            Careers – AediaX Tech Private Limited
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
            Join AediaX Tech Private Limited and become part of a team
            building scalable AI systems, secure enterprise architectures,
            and innovative cloud-native platforms. We believe in
            engineering excellence, continuous learning, and
            measurable impact.
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
            Explore exciting opportunities across frontend engineering,
            backend systems, DevOps automation, artificial intelligence,
            and cloud architecture.
          </Typography>
        </Box>

        {/* Job Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {jobOpenings.map((job, index) => (
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
                {job.title}
              </Typography>

              <Typography
                sx={{
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                {job.desc}
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
                Apply Now
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
            Build the Future with Us
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            At AediaX Tech Private Limited, we empower innovators,
            engineers, and creators to solve complex real-world
            challenges through technology-driven solutions.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Careers;
