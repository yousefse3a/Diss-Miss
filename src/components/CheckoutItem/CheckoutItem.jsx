/* eslint-disable no-unused-vars */
import { Badge, Box, Collapse, Grid } from "@mui/material";
import tempImg from "../../assets/temp.webp";
import React from "react";

export default function CheckoutItem() {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        padding: ".5rem",
      }}
    >
      <Grid
        sx={{
          width: "23%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Badge badgeContent={4} color="secondary">
          <Box
            sx={{
              display: "flex",
              border: "1px solid #bbb",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <img src={tempImg} width={"50rem"} />
          </Box>
        </Badge>
        <Box sx={{ marginLeft: "15px" }}>AZAI</Box>
      </Grid>
      <Grid>
        EG <span>1500</span>
      </Grid>
     
    </Grid>
  );
}
