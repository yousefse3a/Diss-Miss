import { Box, Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#738964",
        color: "#ffffffe6",
        paddingY: "1.5rem",
        boxSizing: "border-box",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Grid item md={4} display={{ xs: "none", md: "block" }}>
          <Box>About US</Box>
          <Box>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            dolorem accusamus, totam explicabo provident, fuga quod repudiandae
            vitae sit porro, voluptas debitis doloribus tempora nisi veritatis
            quaerat nemo necessitatibus ab?
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box>Policies</Box>
          <Box>Shipping</Box>
          <Box>Policy Refund Policy</Box>
        </Grid>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Box> Terms of Service</Box>
            <Box>Refund & Exchange policy</Box>
            <Box>Terms of Services</Box>
          </Grid>
          <Grid>
            <InstagramIcon />
            <FacebookIcon />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
