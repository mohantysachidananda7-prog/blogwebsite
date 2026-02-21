import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const pressReleases = [
  {
    title: "AediaX Tech Launches Enterprise AI Platform",
    desc: "AediaX Tech Private Limited announces the launch of its next-generation AI platform designed for scalable enterprise automation and predictive analytics."
  },
  {
    title: "Strategic Cloud Partnership Announcement",
    desc: "The company enters a strategic collaboration to enhance cloud-native infrastructure solutions and accelerate digital transformation initiatives."
  },
  {
    title: "Expansion into FinTech Innovation",
    desc: "AediaX Tech expands its AI-driven financial technology solutions, focusing on secure payment systems and predictive risk modeling."
  },
  {
    title: "Recognition for DevOps Excellence",
    desc: "Awarded for implementing high-performance DevOps automation frameworks with 99.99% deployment reliability."
  },
  {
    title: "Research Publication on Zero-Trust Security",
    desc: "Published an in-depth research paper detailing modern zero-trust cybersecurity architecture for enterprise environments."
  },
  {
    title: "Global Talent Acquisition Initiative",
    desc: "AediaX Tech Private Limited announces global hiring expansion to strengthen AI research and cloud engineering teams."
  }
];

const Press = () => {
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
            Press – AediaX Tech Private Limited
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
            Stay updated with the latest announcements, strategic
            partnerships, product launches, and industry recognitions
            from AediaX Tech Private Limited.
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
            Our press releases highlight innovation milestones,
            research publications, and key developments shaping
            the future of AI and cloud engineering.
          </Typography>
        </Box>

        {/* Press Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {pressReleases.map((item, index) => (
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
                Read More
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
            Media & Public Relations
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9
            }}
          >
            For media inquiries, partnerships, or press-related
            information, please contact AediaX Tech Private Limited’s
            communications team.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default Press;
