import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Banner = () => {
  return (
    <Box
    sx={{
        position: "relative",
        backgroundImage: `url('https://i.ibb.co/zTTxkfBH/slider-2-1-1.jpg')`, // Corrected image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        mb:'20px',
        p: 3,
      }}
    >
      <Container>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          New Products
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 1 }}>
          Flexible Chair
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, maxWidth: "600px", mx: "auto" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 3, px: 4, py: 1, fontSize: "16px", fontWeight: "bold" }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
};

export default Banner;
