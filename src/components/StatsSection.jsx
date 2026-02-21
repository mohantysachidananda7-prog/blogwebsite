import React from "react";
import { Box, Container, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import CodeIcon from "@mui/icons-material/Code";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PublicIcon from "@mui/icons-material/Public";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const stats = [
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    number: "2025",
    label: "Founded",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40 }} />,
    number: "India",
    label: "Headquarters",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    number: "50+",
    label: "Tech Solutions Designed",
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    number: "AI-Driven",
    label: "Innovation Focus",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
    number: "Enterprise",
    label: "Quality Standards",
  },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container>
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#1976d2",
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            COMPANY OVERVIEW
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mt: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            AediaX Tech at a Glance
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#555",
              maxWidth: 650,
              mx: "auto",
            }}
          >
            Delivering intelligent software solutions, AI innovation,
            and scalable technology systems built for modern businesses.
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {stats.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", sm: "45%", md: "18%" },
                textAlign: "center",
                p: 4,
                borderRadius: 4,
                backgroundColor: "#f9fbff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  color: "#1976d2",
                  mb: 2,
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                }}
              >
                {item.number}
              </Typography>

              <Typography
                sx={{
                  color: "#666",
                  fontSize: "0.95rem",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;
