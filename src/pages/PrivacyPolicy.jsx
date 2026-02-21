import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        py: 14,
        background: "linear-gradient(to bottom, #0b0f19, #111827)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">

        <Typography
          variant="h3"
          sx={{ fontWeight: 800, mb: 6, textAlign: "center" }}
        >
          Privacy Policy – AediaX Tech Private Limited
        </Typography>

        <Typography sx={{ color: "#94a3b8", mb: 4 }}>
          Last Updated: February 20, 2026
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          AediaX Tech Private Limited (“Company”, “we”, “our”, or “us”)
          values your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when
          you visit our website or use our services.
        </Typography>

        {/* Section 1 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          1. Information We Collect
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          We may collect personal information including your name,
          email address, contact details, company information, and
          any other information you voluntarily provide through
          contact forms or communication channels.
        </Typography>

        {/* Section 2 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          2. How We Use Your Information
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          Your information may be used to:
          <br />• Respond to inquiries and provide support
          <br />• Improve our services and website performance
          <br />• Send important updates or communications
          <br />• Maintain security and prevent fraud
        </Typography>

        {/* Section 3 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          3. Data Security
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          We implement industry-standard security measures to protect
          your personal data against unauthorized access, alteration,
          disclosure, or destruction.
        </Typography>

        {/* Section 4 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          4. Third-Party Services
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          We may use trusted third-party services to operate our
          website and business operations. These parties are required
          to maintain confidentiality and data protection standards.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          5. Your Rights
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          You have the right to request access, correction, or deletion
          of your personal data. For any privacy-related requests,
          please contact us at:
        </Typography>

        <Typography sx={{ color: "#8b5cf6", mb: 6 }}>
          mohantysachidananda7@gmail.com
        </Typography>

        {/* Section 6 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          6. Policy Updates
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9 }}>
          AediaX Tech Private Limited reserves the right to update
          this Privacy Policy at any time. Changes will be posted on
          this page with an updated revision date.
        </Typography>

      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
