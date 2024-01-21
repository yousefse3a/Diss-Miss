import { Container, Grid, Box } from "@mui/material";
import React from "react";
import classess from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

export default function CartEmpty() {
  const navigate = useNavigate();

  return (
    <>
      <Container sx={{mt:"1rem",mb:"2rem"}}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              fontSize: "40px",
              color: "#121212",
            }}
          >
            <Box>Your cart is empty</Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              cursor: "pointer",
              color: "#121212",
              width: "50%",
              maxWidth: "",
            }}
          >
            <Box
              className={classess.addToCart}
              sx={{
                bgcolor: "#1a1a1a",
                fontSize: "15px",
                color: "white",
                pl: "2rem",
                pr: "2rem",
                "&:hover": {
                  bgcolor: "#738964",
                  border: "none",
                },
              }}
              onClick={() => {
                navigate("/Allproducts");
              }}
            >
              Continue shopping
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
