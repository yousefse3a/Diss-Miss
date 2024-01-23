import React, { useEffect } from "react";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StraightenIcon from "@mui/icons-material/Straighten";
import {
  Typography,
  Box,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import classess from "./Info.module.css";
import CardPop from "../CardPop/CardPop";
import { useNavigate } from "react-router";

export default function Info({ ProductDetail }) {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState([]);
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Fuunctions
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleColorChange = (e) => {
    const colorValue = e;
    setSelectedColor(colorValue);
    const selectedColor = ProductDetail.colorSize[`${colorValue}`];
    setSelectedSize(selectedColor);
  };

  return (
    <>
      <Grid sx={{ pl: "2rem" }} container>
        <Grid item xs={12} md={12}>
          <Typography sx={{ color: "#666", fontSize: "10px" }} gutterBottom>
            Diss Miss
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography sx={{ color: "#1a1a1a ", fontSize: "40px" }} gutterBottom>
            {ProductDetail.title}
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography sx={{ color: "#1a1a1a ", fontSize: "18px" }} gutterBottom>
            <Grid container>
              {ProductDetail.onSale ? (
                <>
                  <Box sx={{ textDecoration: "line-through", mr: "1rem" }}>
                    LE {ProductDetail.priceBeforeSale} EGP
                  </Box>
                  <Box>LE {ProductDetail.price} EGP</Box>
                </>
              ) : (
                <Box>LE {ProductDetail.price} EGP</Box>
              )}
            </Grid>
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} sx={{}}>
          <Typography
            sx={{
              color: "#666",
              fontSize: "12px",
              mb: "1.5rem",
            }}
            gutterBottom
          >
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
            calculated at checkout.
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Typography
            sx={{ color: "#1a1a1a ", fontSize: "18px" }}
            gutterBottom
          ></Typography>
          <Grid container justifyContent="flex-start" sx={{ mb: "1.2rem" }}>
            Colors :
            {Object.keys(ProductDetail.colorSize).map((color, index) => {
              console.log(color);
              return (
                <>
                  <Box
                    key={index}
                    className={`${classess.colorOption} ${
                      color == selectedColor ? classess.active : ""
                    }`}
                    sx={{
                      bgcolor: color,
                      ml: "0.3rem",
                      width: "1.2rem",
                      height: " 1.2rem",
                      borderRadius: "50%",
                      marginRight: " .5rem",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleColorChange(color);
                    }}
                  ></Box>
                </>
              );
            })}
            <Grid container justifyContent="flex-start">
              <FormControl sx={{ width: "9rem", mt: "1.5rem" }}>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Size"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                >
                  {selectedSize.map((item, i) => {
                    return (
                      <MenuItem key={i} value={item.productID}>
                        {item.size}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={5} sx={{ mb: "1.5rem" }}>
          <Typography
            sx={{ mr: "3rem", textAlign: "center" }}
            variant="caption"
            gutterBottom
          >
            Quantity :
          </Typography>
          <Box className={classess.wrapper}>
            <Box
              sx={{
                fontSize: "1.5rem",
                // bgcolor:"red",
                width: "100%",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => {
                setQuantity((prev) => (prev == 0 ? 0 : (prev -= 1)));
              }}
            >
              -
            </Box>
            <TextField
              sx={{
                textAlign: "center",
                borderRight: "1px solid",
                borderLeft: "1px solid",
                minWidth: "4rem",
              }}
              variant="standard"
              value={quantity}
              InputProps={{
                disableUnderline: true,
              }}
              inputProps={{
                style: { textAlign: "center" },
              }}
              onChange={(e) => {
                let quen = Number(e.target.value);
                if (isNaN(quen)) {
                  setQuantity(0);
                } else {
                  setQuantity(Number(e.target.value));
                }
              }}
            ></TextField>
            <Box
              sx={{
                fontSize: "1.5rem",
                // bgcolor:"red",
                width: "100%",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setQuantity((prev) => (prev += 1));
              }}
            >
              +
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={12} sx={{ mt: "20px" }}>
          <Box
            className={classess.addToCart}
            sx={{
              "&:hover": {
                color: "#c6565a",
                borderColor: "#c6565a",
              },
            }}
            onClick={() => {
              console.log("Request=>", {
                color: selectedColor,
                size: size,
                quantity: quantity,
              });
              handleOpen();
              // setIsCartPop(true);
            }}
          >
            Add to cart
          </Box>
          <CardPop
            product={ProductDetail}
            handleClose={handleClose}
            open={open}
            quantity={quantity}
          ></CardPop>
        </Grid>

        <Grid item xs={12} md={12} sx={{ mt: "20px", mb: "1.5rem" }}>
          <Box
            sx={{
              bgcolor: "#1a1a1a ",
              color: "white",
              "&:hover": {
                bgcolor: "#738964",
                border: "none",
              },
            }}
            onClick={() => {
              navigate("/cart");
            }}
            className={classess.addToCart}
          >
            Buy it now
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{ mt: "20px", color: "#1a1a1a", mb: "1.5rem" }}
        >
          {ProductDetail.description}
        </Grid>

        <Grid item xs={12} md={12} sx={{ mt: "20px" }}>
          <Accordion
            sx={{
              "& #panel1bh-header": {
                border: "none",
              },
            }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel2bh-header"
            >
              <StraightenIcon sx={{ mr: "0.3rem" }} /> Dimensions
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#1a1a1a" }}>
                {ProductDetail.size}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
