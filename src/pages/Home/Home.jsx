import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import poster from "../../assets/DeskTop.jpg";
import posterMob from "../../assets/Mobile.jpg";
import Product from "../../components/Product/Product";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          padding: 0,
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={poster} width={"100%"} />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img src={posterMob} width={"100%"} />
        </Box>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ marginY: "1.5rem" }}>
          Our Products
        </Typography>
        <Grid
          container
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
        <Box
          sx={{
            marginY: "1rem",
            padding: ".8rem 1rem",
            boxSizing: "border-box",
            background: "#40a0df",
            color: "#fff",
            borderRadius: "5px",
            border: "1px #40a0df solid",
            transition: ".5s",
            "&:hover": {
              color: "#40a0df",
              background: "#fff",
            },
          }}
        >
          View More
        </Box>
      </Container>
    </>
  );
}
