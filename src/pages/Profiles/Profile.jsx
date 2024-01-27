import React, { useContext } from "react";

import { useState } from "react";
import { Box, Button, Grid, Container } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Redux/userSlice";
import { deleteCart, updateUserCartApi } from "../../Redux/cartSlice";

export default function Profile(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userToken);

  function handleLogOut() {
    // dispatch(updateUserCartApi(userToken));
    // dispatch(deleteCart());
    dispatch(Logout());
  }
  return (
    <>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ mt: "2rem", mb: "1rem" }}
        >
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              fontSize: "40px",
              color: "#1a1a1a",
            }}
          >
            <Box>Account</Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            fontSize: "14px",
            color: "#666",
            pb: "1rem",
          }}
        >
          <Grid item xs={6} md={8}>
            <Box
              sx={{
                display: "flex",
                "&:hover": {
                  color: "#c6565a",
                },
              }}
            >
              <PermIdentityIcon fontSize="small" sx={{}}>
                {" "}
              </PermIdentityIcon>{" "}
              <Box
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleLogOut();
                }}
              >
                Log Out
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          // alignItems="center"
          spacing={2}
          sx={{ mt: "2rem" }}
        >
          <Grid item xs={6} md={10}>
            <Box
              sx={{
                fontSize: "24px",
                color: "#1a1a1a",
                mb: "1rem",
              }}
            >
              Order history
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: "#666",
                mb: "1rem",
              }}
            >{`You haven't placed any orders yet.`}</Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Box
              sx={{
                fontSize: "24px",
                color: "#1a1a1a",
                mb: "0.3rem",
              }}
            >
              Account details
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: "#666",
                mb: "0.3rem",
              }}
            >
              Ahmed Ashraf
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: "#666",
                mb: "2rem",
              }}
            >
              Egypt
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: "#666",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/addresses");
              }}
            >
              View addresses (1)
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
