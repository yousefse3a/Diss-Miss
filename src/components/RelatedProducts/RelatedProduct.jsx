import { Box, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import classess from "./RelatedProduct.module.css";
import { Link } from "react-router-dom";

const imageUrls = [imageB, imageA];
export default function RelatedProduct({
  imgSrc1,
  imgSrc2,
  title,
  price,
  onSale,
  priceBeforeSale,
  item,
}) {
  //   const [onSale, setOnSale] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Grid
        item
       
        xs={12}
        sm={6}
        md={3}
        sx={{ padding: ".5rem" }}
        className={classess.imageWrapper}
        onClick={() => {
          console.log(item);
        }}
      >
        <Link to={`/AllProducts/${item.id}`}>
          <img
            src={isHovered ? item.imgList[0] : item.imgList[1]}
            width="100%"
            className={classess.imageHover}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <Box sx={{
            "&:hover": {
              textDecoration: "underline"
            },
            "&:visited": {
              color: "#666"
            },
          }} >{item.title}</Box>

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

        <Box sx={{ textDecoration: isHovered ? "underline" : "" }}>
          {item.title}
        </Box>
        <Grid container>
          {item.onSale ? (
            <>
              <Box sx={{ textDecoration: "line-through", mr: "1rem" }}>
                LE {item.priceBeforeSale} EGP
              </Box>
              <Box >LE {item.price} EGP</Box>
            </>
          ) : (
            <Box >LE {item.price} EGP</Box>
          )}
        </Grid>
      </Grid >

    </>
  );
}
