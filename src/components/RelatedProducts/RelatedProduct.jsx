import { Box, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import classess from "./RelatedProduct.module.css";
import { Link } from "react-router-dom";
import placeHolder from "../../assets/placeholder.webp";
const imageUrls = [imageB, imageA];
export default function RelatedProduct({ productDetails }) {
  //   const [onSale, setOnSale] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  console.log("related",productDetails)
  
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ padding: ".5rem" }}
        className={classess.imageWrapper}
        onClick={() => {
          console.log(productDetails);
        }}
      >
        <Link to={`/Product/${productDetails.bigid}`}>
          <img
            // src={isHovered ? productDetails.imgList[0] : productDetails.imgList[1]}
            src={
              productDetails.image == "no" ||
              productDetails.image == "http://example.com/image.jpg"
                ? placeHolder
                : productDetails.image
            }
            width="100%"
            className={classess.imageHover}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <Box
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
              "&:visited": {
                color: "#666",
              },
            }}
          >
            {/* {productDetails.title} */}
            {productDetails.name}
          </Box>
        </Link>

        {/* <Box>
          <img
            src={imageA}
            width="100%"

            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          />
          <img
            src={imageB}
            width="100%"
            className={classess.imageHover}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          />
        </Box> */}

        {/* <Grid container>
          {productDetails.onSale ? (
            <>
              <Box sx={{ textDecoration: "line-through", mr: "1rem" }}>
                LE {productDetails.priceBeforeSale} EGP
              </Box>
              <Box>LE {productDetails.price} EGP</Box>
            </>
          ) : (
            <Box>LE {productDetails.price} EGP</Box>
          )}
        </Grid> */}

        <Grid container>
          <Box>LE {productDetails.price} EGP</Box>
        </Grid>
      </Grid>
    </>
  );
}
