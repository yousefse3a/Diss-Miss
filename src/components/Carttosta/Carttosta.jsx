import { Box, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import tempImg from "../../assets/temp.webp";
import { Link } from "react-router-dom";

export default function Carttosta() {
  const tosta = useRef();

  const handleTosta = function () {
    const ele = tosta.current.style;
    console.log(ele);
    ele.top == "-100%" || ele.top == ""
      ? (ele.top = "25%")
      : (ele.top = "-100%");
  };
  return (
    <>
      <Box
        onClick={() => {
          handleTosta();
        }}
      >
        show
      </Box>
      <Grid
        ref={tosta}
        sx={{
          position: "absolute",
          top: "-100%",
          border: "1px solid rgba(0,0,0,.7)",
          background: "#FFF",
          zIndex: "10000",
          boxSizing: "border-box",
          padding: ".5rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            padding: ".5rem",
            cursor: "pointer",
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={() => {
            handleTosta();
          }}
        >
          <CloseIcon />
        </Box>
        <Grid fontSize=".8rem" sx={{ padding: ".5rem 4rem .5rem 0" }}>
          <DoneIcon sx={{ marginRight: ".5rem", fontSize: ".8rem" }} />
          item added to your cart
        </Grid>
        <Grid
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "30%",
              display: "flex",
              border: "1px solid #bbb",
              overflow: "hidden",
              justifyContent: "center",
            }}
          >
            <img src={tempImg} width={"50rem"} />
          </Box>
          <Box sx={{ marginLeft: "15px" }}>AZAI</Box>
        </Grid>
        <Link to={"/Cart"}>
          <Grid
            sx={{
              background: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              paddingY: ".5rem",
            }}
          >
            View Cart <span> (5) </span>
          </Grid>
        </Link>
        <Link to={"/Checkout"}>
          <Grid
            sx={{
              background: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              paddingY: ".5rem",
            }}
          >
            checkout
          </Grid>
        </Link>
      </Grid>
    </>
  );
}
