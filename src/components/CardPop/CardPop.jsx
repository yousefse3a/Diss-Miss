import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import classess from "./CardPop.module.css";
import {
  Grid,
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Dialog,
} from "@mui/material";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import imageC from "../../assets/image3.webp";
import imageD from "../../assets/iamge4.webp";
import { Link, useNavigate } from "react-router-dom";
const itemData = [
  {
    img: imageB,
    title: "Breakfast",
    rows: 2,
    cols: 2,
    width: "20%",
  },
  {
    img: imageA,
    title: "Burger",
    width: "100%",
  },
  {
    img: imageD,
    title: "Burger",
    width: "100%",
  },
  {
    img: imageC,
    title: "Burger",
    width: "100%",
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CardPop({ handleClose, open, product, quantity }) {
  const navigate = useNavigate();
  return (
    <>
      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle sx={{ fontSize: "13px" }}>
            <CheckIcon fontSize="13px" /> Item added to your cart
          </DialogTitle>

          <DialogContent>
            {product.title}
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ mt: "1rem" }}
            >
              <img src={product.imgList[0]} width={"20%"} />
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Grid container rowGap={1}>
              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    "&:hover": {
                      color: "#c6565a",
                      borderColor: "#c6565a",
                    },
                  }}
                  className={classess.addToCart}
                  onClick={() => {
                    {
                      console.log("hello");
                      handleClose();
                    }
                  }}
                >
                  Continue shopping
                </Box>
              </Grid>

              <Grid item xs={12} md={12}>
                <Box
                  sx={{
                    bgcolor: "#1a1a1a",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#738964",
                      border: "none",
                    },
                  }}
                  onClick={() => {
                    navigate("/checkout");
                  }}
                  className={classess.addToCart}
                >
                  Check Out
                </Box>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}
