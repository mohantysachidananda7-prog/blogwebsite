import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background:
              "linear-gradient(135deg, #f8fbff, #eef4ff)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#1976d2",
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            NEWSLETTER
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mt: 2,
              mb: 2,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Stay Ahead with AediaX Insights
          </Typography>

          <Typography
            sx={{
              mb: 5,
              color: "#555",
              maxWidth: 500,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Subscribe to receive updates on AI innovations, software
            engineering insights, and digital transformation strategies.
          </Typography>

          {/* FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{
                maxWidth: { sm: 350 },
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
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
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
