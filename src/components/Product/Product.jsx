import { Box, Grid } from "@mui/material";
import React from "react";
import proImg from "../../assets/temp.webp";

export default function Product() {
  return (
    <Grid item xs={6} md={3} sx={{ boxSizing: "border-box", padding: ".5rem" }}>
      <Box>
        <img src={proImg} width={"100%"} />
      </Box>
      <Grid sx={{ padding: ".2rem .6rem" }}>
        <Box>AZAI</Box>
        <Box>EG 1600</Box>
      </Grid>
    </Grid>
  );
}
