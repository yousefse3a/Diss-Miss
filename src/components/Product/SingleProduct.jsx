import React, { useEffect, useState } from "react";
import { Grid, Box, Container, CircularProgress } from "@mui/material";
import ImageContainer from "../ImageContainer/ImageContainer";
import Info from "../Info/Info";

import { useLocation, useParams } from "react-router-dom";
import { getEntityByID } from "../../API/getAPIs";
import { baseUrl } from "../../Redux/api";
import axios from "axios";

export default function SingleProduct() {
  // window.scrollTo(0, 0);
  let { productID } = useParams();
  const [colorSize, setcolorSize] = useState({});
  const [ProductDetail, setProductDetail] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const getProductData = async () => {
    let { data } = await axios.get(
      `${baseUrl}/detailsproduct.php?bigid=${productID}`
    );
    let colors = Object.keys(data.productsByColor);
    const colorSize = {};
    colors.forEach((element) => {
      colorSize[element] = [];
    });
    colors.map((color) => {
      data.productsByColor[`${color}`].products.map((i) => {
        colorSize[color].push({
          size: i.size,
          productID: i.product_id,
          productImg: i.media_url,
          stock: i.stock,
        });
      });
    });
    setcolorSize(colorSize);
    setProductDetail({ ...data.productsByCodeOrBigid[2], colorSize });
    setSelectedImage(data.productsByCodeOrBigid[2].media_url)
  };
  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    console.log("llll",selectedImage);
  }, [selectedImage]);

  return ProductDetail ? (
    <Container maxWidth="xl" sx={{ mb: "2rem", mt: "2rem" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={7}>
            <Box paddingX={"1rem"}>
              <ImageContainer imgList={selectedImage} />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box paddingX={"1rem"}>
              <Info ProductDetail={ProductDetail} setSelectedImage={setSelectedImage} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  ) : (
    <Container>
      <Grid container justifyContent={"center"} sx={{ py: "3rem" }}>
        <CircularProgress size={"1.5rem"} />
      </Grid>
    </Container>
  );
}
