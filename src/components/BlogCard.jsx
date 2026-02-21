import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogCard = ({ icon, title, description, link }) => {
  return (
    <Box
      component="a"
      href={link}
      sx={{
        width: { xs: "100%", sm: "45%", md: "30%" },
        textDecoration: "none",
        p: 4,
        borderRadius: 4,
        background: "linear-gradient(145deg, #f9fbff, #ffffff)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        transition: "all 0.35s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "#fff",
          mb: 3,
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 1, color: "#111" }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "#555",
          fontSize: "0.95rem",
          mb: 3,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>

      {/* Read More */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          color: "#1976d2",
        }}
      >
        Read Article <ArrowForwardIcon sx={{ ml: 1 }} />
      </Box>
    </Box>
  );
};

export default BlogCard;
