import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import AutomationIcon from "@mui/icons-material/SettingsSuggest";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StorageIcon from "@mui/icons-material/Storage";
import BlogCard from "./BlogCard";

const blogs = [
  {
    icon: <SmartToyIcon />,
    title: "AI Chatbots for College Help Desk",
    description:
      "Discover how AI-powered chatbots can automate student queries and improve institutional efficiency.",
    link: "/blog/ai-chatbots",
  },
  {
    icon: <CodeIcon />,
    title: "React + Firebase Projects",
    description:
      "Build scalable real-time applications using React and Firebase architecture.",
    link: "/blog/react-firebase",
  },
  {
    icon: <SecurityIcon />,
    title: "Signature Verification Using AI",
    description:
      "Enhance security systems using AI-based signature validation models.",
    link: "/blog/signature-verification",
  },
  {
    icon: <CloudIcon />,
    title: "Cloud Architecture for Startups",
    description:
      "Design cost-effective and scalable cloud infrastructure for modern startups.",
    link: "/blog/cloud-architecture",
  },
  {
    icon: <AutomationIcon />,
    title: "Business Automation with AI",
    description:
      "Streamline business workflows using automation tools and intelligent systems.",
    link: "/blog/business-automation",
  },
  {
    icon: <RocketLaunchIcon />,
    title: "How to Build an AI MVP",
    description:
      "Launch your AI startup faster by building a validated Minimum Viable Product.",
    link: "/blog/ai-mvp",
  },
  {
    icon: <StorageIcon />,
    title: "Modern SaaS Development Guide",
    description:
      "Best practices for building secure and scalable SaaS platforms in 2026.",
    link: "/blog/saas-development",
  },
  {
    icon: <SchoolIcon />,
    title: "AI Education & Certification Programs",
    description:
      "Why structured AI learning and certification matter in today’s tech industry.",
    link: "/blog/ai-education",
  },
];

const BlogSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#ffffff" }}>
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
            AEDIAX INSIGHTS
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mt: 2,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Latest Articles & Technology Insights
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#555",
              maxWidth: 650,
              mx: "auto",
            }}
          >
            Explore AI innovations, SaaS engineering strategies, automation
            systems, and digital transformation insights from AediaX Tech
            Private Limited.
          </Typography>
        </Box>

        {/* Blog Cards */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
