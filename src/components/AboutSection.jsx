import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#1976d2",
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              ABOUT AEDIAX TECH
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mt: 2,
                mb: 3,
                fontSize: { xs: "2rem", md: "2.6rem" },
                lineHeight: 1.3,
              }}
            >
              Building Intelligent Software
              <br />
              for the Modern Digital World
            </Typography>

            <Typography
              sx={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              AediaX Tech Private Limited is an emerging Indian software
              development company incorporated in 2025 and headquartered in
              Odisha, India. We specialize in delivering secure, scalable, and
              future-ready digital solutions tailored to business needs.
            </Typography>

            <Typography
              sx={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Our expertise spans custom software development, AI-powered
              applications, web platforms, automation systems, and cloud-based
              infrastructures. We focus on building technology that not only
              solves today’s challenges but prepares organizations for
              tomorrow’s growth.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "0 8px 20px rgba(25,118,210,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 25px rgba(25,118,210,0.35)",
                },
              }}
            >
              Explore Our Services
            </Button>
          </Box>

          {/* RIGHT VISUAL / HIGHLIGHT CARD */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                p: 5,
                borderRadius: 4,
                background:
                  "linear-gradient(135deg, #f8fbff, #eef4ff)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                maxWidth: 420,
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Why Choose AediaX?
              </Typography>

              <Typography sx={{ mb: 2, color: "#444" }}>
                • Innovative & scalable architecture
              </Typography>

              <Typography sx={{ mb: 2, color: "#444" }}>
                • AI-driven automation & intelligent systems
              </Typography>

              <Typography sx={{ mb: 2, color: "#444" }}>
                • Secure & performance-optimized applications
              </Typography>

              <Typography sx={{ color: "#444" }}>
                • Client-focused and future-ready approach
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
