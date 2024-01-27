import {
  AppBar,
  Badge,
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/Diss & Miss.png";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

import { styled } from "@mui/system";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-dot": {
    backgroundColor: "#c6565a", // Set your desired color here
  },
});

export default function Navbar() {
  const userToken = useSelector((state) => state.user.userToken);
  const cartQuantity = useSelector((state) => state.cart.quantity);

  const [mobMenuIcon, setmobMenuIcon] = useState(false);
  const menu = useRef();
  const closeOpenMenu = function () {
    console.log(document.body.style.overflow);
    document.body.style.overflow == ""
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
    mobMenuIcon == false ? setmobMenuIcon(true) : setmobMenuIcon(false);
    console.log(menu.current.style.left);
    menu.current.style.left == "-110%" || menu.current.style.left == ""
      ? (menu.current.style.left = "0px")
      : (menu.current.style.left = "-110%");
  };

  return (
    <>
      <Grid>
        <Container position={"relative"}>
          <Grid container item justifyContent="space-between">
            <Grid
              xs={0}
              container
              item
              sx={{
                display: { xs: "none", md: "flex" },
                visibility: "hidden",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "stretch",
                color: "#666",
              }}
            >
              <SearchOutlinedIcon />
            </Grid>
            <Grid
              xs={2}
              container
              item
              sx={{
                display: { xs: "flex", md: "flex" },
                // display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "stretch",
                color: "#666",
                cursor: "pointer",
              }}
              onClick={() => {
                closeOpenMenu();
              }}
            >
              {mobMenuIcon ? <CloseIcon /> : <DensityMediumOutlinedIcon />}
            </Grid>
            <Link to="/">
              <Grid item xs={8}>
                <img src={logo} className={classes.img} />
              </Grid>
            </Link>

            <Grid
              xs={2}
              container
              item
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                flexWrap: "nowrap",
              }}
            >
              <Link to="/Profile">
                <Grid
                  container
                  item
                  md={4}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    padding: ".5rem 1rem",

                    color: "#666",
                    "&:hover": {
                      background: "#666",
                      color: "#bbb",
                      borderRadius: "20%",
                    },
                  }}
                >
                  <PersonOutlineOutlinedIcon />
                </Grid>
              </Link>
              <Link to="/Cart">
                <Grid
                  container
                  item
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: ".5rem 1rem",

                    color: "#666",
                    "&:hover": {
                      background: "#666",
                      color: "#bbb",
                      borderRadius: "20%",
                    },
                  }}
                >
                  <Badge
                    badgeContent={+cartQuantity}
                    sx={{
                      ".MuiBadge-badge": {
                        backgroundColor: "#c6565a",
                      },
                    }}
                    color="error"
                  >
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Container>
        <Container
          sx={{ display: { xs: "none", md: "none" }, justifyContent: "center" }}
          // sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Grid
            sx={{
              width: "30%",
              display: "flex",
              justifyContent: "space-around",
              paddingY: "1rem",
              "&>a": {
                cursor: "pointer",
                textDecoration: "none",
                "&:visited": {
                  color: "inherit",
                },
              },
            }}
          >
            <Link to={"/"}>
              <Box>Home</Box>
            </Link>
            <Link to={"/Allproducts"}>
              <Box>Products</Box>
            </Link>
            <Link to={"/BestSeller"}>
              <Box>Best Seller</Box>
            </Link>
          </Grid>
        </Container>
      </Grid>
      <Grid
        ref={menu}
        sx={{
          background: "rgba(255,255,255,.2)",
          width: "100vw",
          height: `calc(100vh - 107px)`,
          zIndex: "10000",
          position: "absolute",
          left: "-110%",
          transition: ".5s linear",
          display: { xs: "block", md: "block" },
          // display: { xs: "block", md: "none" },
        }}
        onClick={() => {
          closeOpenMenu();
        }}
      >
        <Grid
          sx={{
            zIndex: "101",
            width: "80%",
            height: "100%",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Grid
            sx={{
              display: "flex",
              zIndex: "101",
              flexDirection: "column",
              justifyContent: "start",
              "& > a": {
                textDecoration: "none",
                "&:visited": {
                  color: "inherit",
                },
              },
              "& > a > div": {
                boxSizing: "border-box",
                padding: "1rem",
                "&:hover": {
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                },
              },
            }}
          >
            <Link to={"/"}>
              <Box
                onClick={() => {
                  closeOpenMenu();
                }}
              >
                Home
              </Box>
            </Link>
            <Link to={"/Allproducts"}>
              <Box
                onClick={() => {
                  closeOpenMenu();
                }}
              >
                Products
              </Box>
            </Link>
            <Link to={"/BestSeller"}>
              <Box
                onClick={() => {
                  closeOpenMenu();
                }}
              >
                Best Seller{" "}
              </Box>
            </Link>
          </Grid>
          <Grid
            sx={{
              background: "#738964",
              boxSizing: "border-box",
              padding: "1rem",
              "&>div": {
                margin: ".5rem 0 1rem 0",
              },
            }}
          >
            <Box
              sx={{
                "&:hover": {
                  color: "white",
                  cursor: "pointer",
                },
              }}
            >
              Profile
            </Box>
            <Grid>
              <InstagramIcon />
              <FacebookIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
