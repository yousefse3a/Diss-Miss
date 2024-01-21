/* eslint-disable no-unused-vars */
import { Badge, Box, Grid } from "@mui/material";
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
        // background: "green",
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
        <Badge
          badgeContent={4}
          sx={{
            ".MuiBadge-badge": {
              backgroundColor: "#c6565a",
            },
          }}
          color="error"
        >
          <Box
            sx={{
              display: "flex",
              border: "1px solid #666",
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
