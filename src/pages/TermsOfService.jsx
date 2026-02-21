import React from "react";
import { Box, Container, Typography } from "@mui/material";

const TermsOfService = () => {
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
          Terms of Service – AediaX Tech Private Limited
        </Typography>

        <Typography sx={{ color: "#94a3b8", mb: 4 }}>
          Last Updated: February 20, 2026
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          These Terms of Service (“Terms”) govern your access to and use of
          the website and services provided by AediaX Tech Private Limited
          (“Company”, “we”, “our”, or “us”). By accessing or using our
          services, you agree to be bound by these Terms.
        </Typography>

        {/* Section 1 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          1. Use of Services
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          You agree to use our services only for lawful purposes and in
          accordance with applicable laws and regulations. Unauthorized
          use, misuse, or disruption of our platform is strictly prohibited.
        </Typography>

        {/* Section 2 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          2. Intellectual Property
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          All content, trademarks, logos, software, and intellectual
          property displayed on this website are owned by or licensed
          to AediaX Tech Private Limited. You may not reproduce,
          distribute, or modify any content without prior written consent.
        </Typography>

        {/* Section 3 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          3. User Responsibilities
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          Users are responsible for maintaining the confidentiality of
          their account credentials and for all activities conducted
          under their account. Any breach must be reported immediately.
        </Typography>

        {/* Section 4 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          4. Limitation of Liability
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          AediaX Tech Private Limited shall not be liable for any
          indirect, incidental, or consequential damages arising
          from the use or inability to use our services.
        </Typography>

        {/* Section 5 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          5. Termination
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          We reserve the right to suspend or terminate access to our
          services at any time without prior notice if a user violates
          these Terms.
        </Typography>

        {/* Section 6 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          6. Governing Law
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9, mb: 4 }}>
          These Terms shall be governed and interpreted in accordance
          with the laws applicable to AediaX Tech Private Limited’s
          registered jurisdiction.
        </Typography>

        {/* Section 7 */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          7. Changes to Terms
        </Typography>

        <Typography sx={{ color: "#cbd5e1", lineHeight: 1.9 }}>
          We may update these Terms from time to time. Continued use
          of our services after changes are posted constitutes your
          acceptance of the revised Terms.
        </Typography>

      </Container>
    </Box>
  );
};

export default TermsOfService;
