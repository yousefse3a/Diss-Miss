import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Paper,
  Container,
  Card,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ImageContainer from "../ImageContainer/ImageContainer";
import Info from "../Info/Info";
import RelatedProduct from "../RelatedProducts/RelatedProduct";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import image5 from "../../assets/Image5.webp";
import image6 from "../../assets/Image6.webp";
import imageC from "../../assets/image3.webp";
import imageD from "../../assets/iamge4.webp";
import aruroa1 from "../../assets/Aurora1.webp";
import aruroa2 from "../../assets/Aurora2.webp";
import { useLocation } from "react-router-dom";
import { relatedProducts } from "../../Data/data";
import { getEntityByID } from "../../API/getAPIs";

// const relatedProducts = [
//   {
//     id: 1,
//     imgSrc1: image5,
//     imgSrc2: image6,
//     title: "Backpack & cross",
//     price: "855",
//     onSale: true,
//     priceBeforeSale: "980",
//   },
//   {
//     id: 2,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 3,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 4,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 5,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 6,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 7,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 8,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 9,
//     imgSrc1: aruroa1,
//     imgSrc2: aruroa2,
//     title: "Aurora",
//     price: "1,040.00",
//   },
//   {
//     id: 10,
//     imgSrc1: imageA,
//     imgSrc2: imageB,
//     title: "Test 33",
//     price: "200",
//     onSale: true,
//     priceBeforeSale: "980",
//   },
//   {
//     id: 11,
//     imgSrc1: imageD,
//     imgSrc2: imageC,
//     title: "Samka",
//     price: "650",
//     onSale: true,
//     priceBeforeSale: "1900",
//   },
// ];

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

export default function SingleProduct() {
  const location = useLocation();
  const projectID = location.pathname
    .split("/")
    .slice(-1)[0]
    .toLocaleLowerCase();

  window.scrollTo(0, 0);

  // const product = relatedProducts.find((item) => {
  //   if (item.id == projectID) {
  //     return item;
  //   }
  // });
  // console.log(product);
  const [loading, setLoading] = useState(false);
  const [sProduct, setSProduct] = useState({});
  const productByName = sProduct.productsByName ? sProduct.productsByName[0] : [] ;
  const productByColor = sProduct.productsByColor;

  console.log("sProduct");
  console.log(sProduct);

  useEffect(() => {
    console.log("Dasdasd");
    getEntityByID({ productID: projectID, setLoading, setSProduct });
  }, []);

  return (
    <>
      {loading ? (
        <Container>
          <Grid container justifyContent={"center"} sx={{ py: "3rem" }}>
            <CircularProgress size={"1.5rem"} />
          </Grid>
        </Container>
      ) : (
        <>
          <Container maxWidth="xl" sx={{ mb: "2rem", mt: "2rem" }}>
            <Box sx={{ width: "100%" }}>
              <Grid container rowSpacing={1}>
                <Grid item xs={12} md={7} sx={{ mr: "1rem" }}>
                  {/* <Item sx={{ m: "5px" }}> */}
                  <Box>
                    <ImageContainer imgList={productByName.media_url} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box>
                    <Info productByName={productByName} productByColor={productByColor}  />
                  </Box>
                </Grid>

                {/* <Box sx={{ fontSize: "2rem", mt: "2rem" }}>
                  You may also like
                </Box>
                <Grid item xs={12} md={12}>
                  <Grid container rowGap={1}>
                    {relatedProducts.map((item, i) => {
                      return <RelatedProduct key={i} item={item} />;
                    })}
                  </Grid>
                </Grid> */}
              </Grid>
            </Box>
          </Container>
        </>
      )}
    </>
  );
}
