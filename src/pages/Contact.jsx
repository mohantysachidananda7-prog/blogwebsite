import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <Box
      sx={{
        py: 14,
        background: "linear-gradient(to bottom, #0b0f19, #111827)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">

        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
            Contact – AediaX Tech Private Limited
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: 1.9,
            }}
          >
            Reach out to us for business inquiries, partnerships,
            enterprise solutions, or technical collaborations.
          </Typography>
        </Box>

        {/* Contact Card */}
        <Box
          sx={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 4,
            p: 6,
            backdropFilter: "blur(6px)",
            transition: "0.4s",
            "&:hover": {
              boxShadow: "0 20px 40px rgba(99,102,241,0.3)",
              borderColor: "#6366f1"
            }
          }}
        >

          {/* Email Section */}
          <Stack direction="row" spacing={2} alignItems="center" mb={3}>
            <EmailIcon sx={{ color: "#8b5cf6", fontSize: 30 }} />
            <Typography sx={{ color: "#cbd5e1", fontSize: "1rem" }}>
              mohantysachidananda7@gmail.com
            </Typography>
          </Stack>

          {/* WhatsApp Section */}
          <Stack direction="row" spacing={2} alignItems="center" mb={5}>
            <WhatsAppIcon sx={{ color: "#25D366", fontSize: 30 }} />
            <Typography sx={{ color: "#cbd5e1", fontSize: "1rem" }}>
              +91 8926302004
            </Typography>
          </Stack>

          {/* Contact Form */}
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#94a3b8" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#8b5cf6" }
                }
              }}
            />

            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{
                input: { color: "#fff" },
                label: { color: "#94a3b8" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#8b5cf6" }
                }
              }}
            />

            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{
                textarea: { color: "#fff" },
                label: { color: "#94a3b8" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover fieldset": { borderColor: "#6366f1" },
                  "&.Mui-focused fieldset": { borderColor: "#8b5cf6" }
                }
              }}
            />

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                textTransform: "none",
                borderRadius: 3,
                fontWeight: 600,
                py: 1.5,
                "&:hover": {
                  background: "linear-gradient(90deg, #4f46e5, #7c3aed)"
                }
              }}
            >
              Send Message
            </Button>
          </Stack>

        </Box>

      </Container>
    </Box>
  );
};

export default Contact;
