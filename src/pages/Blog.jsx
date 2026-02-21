import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StorageIcon from "@mui/icons-material/Storage";
import SchoolIcon from "@mui/icons-material/School";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DataObjectIcon from "@mui/icons-material/DataObject";

/* ================= BLOG DATA ================= */

const blogs = [
  {
    icon: <SmartToyIcon />,
    title: "AI Chatbots for College Help Desk",
    description:
      "Automate student support systems using AI-powered conversational agents and NLP-driven automation.",
  },
  {
    icon: <CodeIcon />,
    title: "React + Firebase Architecture",
    description:
      "Build scalable, real-time applications using modern frontend-backend integration patterns.",
  },
  {
    icon: <SecurityIcon />,
    title: "AI-Based Signature Verification",
    description:
      "Enhance security infrastructure using intelligent pattern recognition models.",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Architecture for Startups",
    description:
      "Design cost-efficient and highly scalable infrastructure for growing businesses.",
  },
  {
    icon: <SettingsSuggestIcon />,
    title: "Business Automation Systems",
    description:
      "Streamline enterprise workflows using AI-driven automation platforms.",
  },
  {
    icon: <RocketLaunchIcon />,
    title: "Building an AI MVP",
    description:
      "Launch faster with validated AI product architecture and MVP development strategies.",
  },
  {
    icon: <StorageIcon />,
    title: "Modern SaaS Development Guide",
    description:
      "Architect secure, multi-tenant SaaS platforms with performance optimization.",
  },
  {
    icon: <SchoolIcon />,
    title: "AI Education & Certification",
    description:
      "Structured AI learning pathways and professional certification systems.",
  },
  {
    icon: <PsychologyIcon />,
    title: "Machine Learning in Real World",
    description:
      "Applications of ML across fintech, healthcare and enterprise automation.",
  },
  {
    icon: <DataObjectIcon />,
    title: "Backend API Engineering",
    description:
      "Best practices for scalable and secure RESTful API development in 2026.",
  },
];

/* ================= RAIN SETUP ================= */

const rainDrops = new Array(100).fill(0);

/* ================= COMPONENT ================= */

const Blog = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          background: "linear-gradient(180deg, #0f172a, #020617)",
          backgroundAttachment: "fixed",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Rain Layer */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          {rainDrops.map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: "-10px",
                left: `${Math.random() * 100}%`,
                width: "2px",
                height: `${Math.random() * 20 + 10}px`,
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
                animation: `rain ${Math.random() * 1 + 0.5}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </Box>

        {/* Hero Content */}
        <Container sx={{ position: "relative", zIndex: 2, maxWidth: 850 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              color: "#60a5fa",
              fontWeight: 600,
            }}
          >
            AEDIAX TECHNOLOGY BLOG
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mt: 3,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              lineHeight: 1.2,
            }}
          >
            Engineering the Future with AI & Scalable Software
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontSize: "1.1rem",
              color: "#cbd5e1",
              lineHeight: 1.8,
            }}
          >
            Explore in-depth articles covering Artificial Intelligence,
            SaaS engineering, automation frameworks, cloud architecture,
            and modern software systems developed by AediaX Tech Private Limited.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: "1rem",
              color: "#94a3b8",
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Our mission is to provide high-quality technical insights,
            real-world implementation strategies, and scalable architectural
            guidance for startups and enterprises.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 6,
              px: 5,
              py: 1.6,
              fontWeight: 600,
              borderRadius: 3,
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Explore Articles
          </Button>
        </Container>

        {/* Rain Animation */}
        <style>
          {`
            @keyframes rain {
              0% {
                transform: translateY(0);
                opacity: 0.6;
              }
              100% {
                transform: translateY(100vh);
                opacity: 0;
              }
            }
          `}
        </style>
      </Box>

      {/* ================= BLOG LIST SECTION ================= */}
      <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#ffffff" }}>
        <Container sx={{ maxWidth: 1200 }}>
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", md: "2.4rem" },
              }}
            >
              Latest Research & Technical Articles
            </Typography>

            <Typography
              sx={{
                mt: 3,
                color: "#555",
                maxWidth: 750,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Discover curated content on AI systems, SaaS platforms,
              backend engineering, DevOps automation, and digital
              transformation strategies.
            </Typography>
          </Box>

          {/* Symmetric Cards */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 5,
            }}
          >
            {blogs.map((blog, index) => (
              <Box
                key={index}
                sx={{
                  flex: "1 1 300px",
                  maxWidth: 350,
                  border: "1px solid #eee",
                  borderRadius: 4,
                  p: 4,
                  transition: "0.3s",
                  textAlign: "left",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <Box sx={{ fontSize: 40, color: "#1976d2", mb: 2 }}>
                  {blog.icon}
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {blog.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {blog.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
