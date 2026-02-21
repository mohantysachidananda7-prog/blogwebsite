import React from "react";
import { Box, Container, Skeleton } from "@mui/material";

const PageLoader = () => {
  return (
    <Container sx={{ py: 10 }}>
      {/* Hero Skeleton */}
      <Skeleton
        variant="rectangular"
        height={220}
        animation="wave"
        sx={{ borderRadius: 4, mb: 4 }}
      />

      {/* Title */}
      <Skeleton
        variant="text"
        height={50}
        width="50%"
        animation="wave"
        sx={{ mb: 2 }}
      />

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {[1, 2, 3].map((item) => (
          <Box
            key={item}
            sx={{
              flex: "1 1 300px",
              minWidth: "280px",
            }}
          >
            <Skeleton
              variant="rectangular"
              height={180}
              animation="wave"
              sx={{ borderRadius: 3, mb: 2 }}
            />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" width="80%" animation="wave" />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PageLoader;
