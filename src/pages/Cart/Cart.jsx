import { Grid, Box, Paper, Container } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import imageA from "../../assets/image1.webp";
import classess from "./Cart.module.css";
import QuanButton from "../../components/Quantity/QuanButton";
import CartEmpty from "./CartEmpty";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cart() {
  const userToken = useSelector((state) => state.user.userToken);
  const [quantity, setQuantity] = useState(1);
  const [finalPrice, setFinalPrice] = useState(1);
  const [price, setPrice] = useState(1040);
  const navigate = useNavigate();
  return (
    <>
      {quantity == 0 ? (
        <>
          <CartEmpty />
        </>
      ) : (
        <Box sx={{ flexGrow: 1, mb: "2rem", mt: "2rem" }}>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              spacing={2}
            >
              <Grid
                item
                xs={6}
                md={6}
                sx={{
                  fontSize: "40px",
                  color: "#121212",
                }}
              >
                <Box>Your cart</Box>
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                sx={{
                  textAlign: "right",
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#121212",
                }}
              >
                <Box
                  onClick={() => {
                    navigate("/Allproducts");
                  }}
                >
                  Continue shopping
                </Box>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                fontSize: "10px",
                borderBottom: "1px solid rgba(18,18,18,0.75)",
                mt: "2rem",
                pb: "1rem",
              }}
            >
              <Grid item xs={6} md={8}>
                <Box>PRODUCT</Box>
              </Grid>
              <Grid item sx={{ display: { xs: "none", md: "flex" } }} md={2}>
                <Box>QUANTITY</Box>
              </Grid>
              <Grid item xs={6} md={2} sx={{ textAlign: "right" }}>
                <Box>TOTAL</Box>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                fontSize: "10px",
                borderBottom: "1px solid rgba(18,18,18,0.75)",
                mt: "4rem",
                pb: "1rem",
              }}
            >
              <Grid item xs={6} md={8}>
                <Grid container spacing={1}>
                  <Grid item xs={6} md={3}>
                    <img src={imageA} width={"80%"} />
                  </Grid>
                  <Grid item xs={6} md={8} sx={{ textAlign: "left" }}>
                    <Box sx={{ fontSize: "15px", mb: "0.5rem" }}> Aurora </Box>
                    <Box sx={{ fontSize: "14px" }}>LE 1,040.00</Box>
                    <Box sx={{ display: { xs: "", md: "none" }, mt: "1rem" }}>
                      <QuanButton
                        setQuantity={setQuantity}
                        quantity={quantity}
                      ></QuanButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sx={{ display: { xs: "none", md: "block" } }} md={2}>
                <Grid item sx={{ display: "flex", p: "0px", m: "0" }}>
                  <QuanButton setQuantity={setQuantity} quantity={quantity} />
                </Grid>
              </Grid>

              <Grid
                item
                xs={6}
                md={2}
                sx={{ textAlign: "right", fontSize: "16px", color: "#121212" }}
              >
                <Box>LE {price * quantity} </Box>
              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="flex-end"
              sx={{ mt: "2rem" }}
              // width={"100%"}
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  color: "#121212",
                  // bgcolor: "blue",
                  fontSize: "13px",
                  textAlign: "right",
                }}
              >
                <Box
                  sx={{
                    color: "#121212",
                    fontSize: "16px",
                  }}
                >
                  Subtotal
                  <Box
                    sx={{
                      display: "inline",
                      ml: "2rem",
                      color: "rgba(18,18,18,0.75)",
                      fontSize: "18px",
                    }}
                  >
                    LE {price * quantity} EGP
                  </Box>
                </Box>
                <Box
                  sx={{
                    color: "rgba(18,18,18,0.75)",
                    fontSize: "13px",
                    mt: "1rem",
                  }}
                >
                  Taxes and{" "}
                  <Box
                    sx={{
                      display: "inline",
                      textDecoration: "underline",
                      cursor: "pointer",
                      mr: "3px",
                    }}
                    onClick={() => {
                      console.log("Shipping");
                    }}
                  >
                    Shipping
                  </Box>
                  calculated at checkout
                </Box>

                <Box
                  sx={{
                    bgcolor: "#1a1a1a ",
                    color: "white",
                    fontSize: "15px",
                    transition: "all .25s linear",
                    mt: "2rem",
                    p: "1rem",
                    "&:hover": {
                      bgcolor: "#738964",
                      border: "none",
                    },
                  }}
                  className={classess.addToCart}
                  onClick={() => {
                    userToken ? navigate("/checkout") : navigate("/login");
                  }}
                >
                  {userToken ? "Check Out" : "Login To checkout"}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}
