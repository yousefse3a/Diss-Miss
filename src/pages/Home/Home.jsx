import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import poster from "../../assets/DeskTop.jpg";
import posterMob from "../../assets/Mobile.jpg";
import Product from "../../components/Product/Product";
import RelatedProduct from "../../components/RelatedProducts/RelatedProduct";
import category1 from "../../assets/1.avif";
import category2 from "../../assets/2.avif";
import category3 from "../../assets/3.avif";
import category4 from "../../assets/4.avif";
import category5 from "../../assets/5.jpg";
import category6 from "../../assets/6.jpg";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import image5 from "../../assets/Image5.webp";
import image6 from "../../assets/Image6.webp";
import imageC from "../../assets/image3.webp";
import imageD from "../../assets/iamge4.webp";
import aruroa1 from "../../assets/Aurora1.webp";
import aruroa2 from "../../assets/Aurora2.webp";
import { relatedProducts } from "../../Data/data";
// const relatedProducts = [
//   {
//     imgSrc1: image5,
//     imgSrc2: image6,
//     title: "Backpack & cross",
//     price: "855",
//     onSale: true,
//     priceBeforeSale: "980",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     imgSrc1: imageA,
//     imgSrc2: imageB,
//     title: "Test 33",
//     price: "200",
//     onSale: true,
//     priceBeforeSale: "980",
//   },
//   {
//     imgSrc1: imageD,
//     imgSrc2: imageC,
//     title: "Samka",
//     price: "650",
//     onSale: true,
//     priceBeforeSale: "1900",
//   },
// ];
let categoryObj = [
  { catName: "DRESS", imgSrc: category1 },
  { catName: "TSHIRT", imgSrc: category2 },
  { catName: "PANTS", imgSrc: category3 },
  { catName: "JACKET", imgSrc: category4 },
  { catName: "SKIRT", imgSrc: category5 },
  { catName: "TOPS", imgSrc: category6 },
];
let categoryStyle = (imgSRC) => {
  let x = {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    backgroundImage: `url(${imgSRC})`,
    backgroundPosition: "center",
    backgroundPositionY: "-25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    color: "#FFF",
  };
  return x;
};
export default function Home() {
  return (
    <>
      <Box
        sx={{
          padding: 0,
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={poster} width={"100%"} />
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <img src={posterMob} width={"100%"} />
        </Box>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "1rem",
        }}
      >
        {categoryObj.map((cat, index) => {
          return (
            <>
              <Grid
                key={index}
                item
                xs={12}
                md={4}
                sx={{
                  overflow: "hidden",
                  aspectRatio: "2/1",
                  padding: ".3rem",
                }}
              >
                <Grid sx={categoryStyle(cat.imgSrc)}>
                  <Box sx={{ border: "1px solid #ffffff71" }}>
                    {cat.catName}
                  </Box>
                </Grid>
              </Grid>
            </>
          );
        })}
      </Grid>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#1a1a1a ",
        }}
      >
        <Typography
          fontFamily={"inherit"}
          variant="h4"
          sx={{ marginY: "1.5rem" }}
        >
          Our Products
        </Typography>

        <Grid item xs={12} md={12} sx={{ marginY: "2rem" }}>
          <Grid container>
            {relatedProducts.map((item, i) => {
              return <RelatedProduct key={i} item={item} />;
            })}
          </Grid>
        </Grid>
        <Box
          sx={{
            marginY: "1rem",
            padding: ".8rem 1rem",
            boxSizing: "border-box",

            background: "#c6565a",
            color: "#fff",
            borderRadius: "5px",
            border: "1px #c6565a solid",
            transition: ".5s",
            "&:hover": {
              color: "#c6565a",
              background: "#fff",
            },
          }}
        >
          View More
        </Box>
      </Container>
    </>
  );
}
