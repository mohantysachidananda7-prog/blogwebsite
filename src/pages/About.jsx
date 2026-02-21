import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const About = () => {
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
            About AediaX
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
            AediaX Tech Private Limited is a forward-thinking technology
            company focused on innovation, scalable software engineering,
            artificial intelligence integration, and digital transformation.
            Through our blog and knowledge platforms, we aim to empower
            developers, entrepreneurs, and organizations with practical,
            industry-relevant insights.
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
            Our mission extends beyond publishing content. We are building a
            digital ecosystem where technology meets strategy — helping
            individuals and enterprises transform ideas into scalable,
            secure, and impactful solutions.
          </Typography>
        </Box>

        {/* Vision & Mission Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mb: 12,
          }}
        >
          {/* Vision Card */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4,
              p: 5,
              backdropFilter: "blur(8px)",
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(-8px)",
                borderColor: "#6366f1",
                boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
              },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Our Vision
            </Typography>

            <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9 }}>
              To become a globally recognized technology innovation platform
              that bridges knowledge, engineering excellence, and strategic
              digital transformation. We envision AediaX as a hub where
              professionals gain clarity in complex technological landscapes
              and drive meaningful impact through modern solutions.
            </Typography>
          </Box>

          {/* Mission Card */}
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4,
              p: 5,
              backdropFilter: "blur(8px)",
              transition: "0.4s",
              "&:hover": {
                transform: "translateY(-8px)",
                borderColor: "#8b5cf6",
                boxShadow: "0 20px 40px rgba(139,92,246,0.3)",
              },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Our Mission
            </Typography>

            <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9 }}>
              To provide structured, professional, and practical content
              focused on AI, cloud computing, full-stack development,
              cybersecurity, and enterprise architecture — enabling individuals
              and organizations to build scalable, secure, and future-ready
              digital systems.
            </Typography>
          </Box>
        </Box>

        {/* Company Philosophy Section */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            Our Philosophy
          </Typography>

          <Typography
            sx={{
              maxWidth: 950,
              margin: "0 auto",
              color: "#cbd5e1",
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            At AediaX, we believe technology should be practical,
            scalable, and strategically aligned with business outcomes.
            We emphasize clarity over complexity and execution over theory.
            Every article, tutorial, and resource is designed to translate
            knowledge into measurable progress.
          </Typography>

          <Typography
            sx={{
              maxWidth: 950,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9,
            }}
          >
            In an era of rapid innovation, organizations require more than
            fragmented information — they require structured insights and
            technical direction. AediaX Blog exists to provide that direction,
            empowering modern innovators to design, build, and scale with
            confidence.
          </Typography>
        </Box>

        {/* Call To Action */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Join the AediaX Ecosystem
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              margin: "0 auto",
              color: "#94a3b8",
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            Explore our blog, tutorials, and resources to stay ahead in
            technology. Whether you are an aspiring developer, a startup
            founder, or an enterprise leader — AediaX is your partner in
            innovation.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              textTransform: "none",
              borderRadius: 3,
              fontWeight: 600,
              px: 4,
              py: 1.5,
              "&:hover": {
                background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
              },
            }}
          >
            Explore Our Blog
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default About;
