import {
  Box,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import { Link, useLocation, Outlet } from "react-router-dom";
import RelatedProduct from "../../components/RelatedProducts/RelatedProduct";
import imageA from "../../assets/image1.webp";
import imageB from "../../assets/image2.webp";
import image5 from "../../assets/Image5.webp";
import image6 from "../../assets/Image6.webp";
import imageC from "../../assets/image3.webp";
import imageD from "../../assets/iamge4.webp";
import aruroa1 from "../../assets/Aurora1.webp";
import aruroa2 from "../../assets/Aurora2.webp";
import { relatedProducts } from "../../Data/data";
import { getEntity } from "../../API/getAPIs";

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
export default function Products() {
  const location = useLocation();
  const current = location.pathname.split("/").slice(-1)[0].toLocaleLowerCase();

  const [color, setcolor] = React.useState("");
  const [sort, setsort] = React.useState("");
  const [pageNumber, setPageNumber] = React.useState(1);
  const [allProduct, setAllProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleColor = (event) => {
    setcolor(event.target.value);
  };

  const handleSort = (event) => {
    setsort(event.target.value);
  };
  useEffect(() => {
    getEntity({ pageNumber, setLoading, setAllProduct });
  }, [pageNumber]);

  return (
    <Container>
      {current != "allproducts" ? (
        <Outlet></Outlet>
      ) : (
        <>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">Products</Typography>
            <Grid
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid sx={{ display: "flex" }}>
                <Box>Filter : </Box>
                <Box sx={{ height: "20px" }}>
                  <FormControl
                    sx={{
                      mx: "1rem",
                      minWidth: 120,
                      "&  .Mui-focused": {
                        color: "#666 !important",
                        borderColor: "#666  !important",
                      },
                    }}
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-label">color</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={color}
                      label="color"
                      onChange={handleColor}
                      sx={{}}
                    >
                      <MenuItem value={10}>red</MenuItem>
                      <MenuItem value={20}>blue</MenuItem>
                      <MenuItem value={30}>green</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box></Box>
              </Grid>
              <Grid sx={{ display: "flex" }}>
                <Box>Sort By : </Box>
                <Box sx={{ height: "20px" }}>
                  <FormControl sx={{ mx: "1rem", minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">sort</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={sort}
                      label="sort"
                      onChange={handleSort}
                    >
                      <MenuItem value={10}>red</MenuItem>
                      <MenuItem value={20}>blue</MenuItem>
                      <MenuItem value={30}>green</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box></Box>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item xs={12} md={12} sx={{ mt: "2rem", mb: "2rem" }}>
            <Grid container rowGap={1}>
              {relatedProducts.map((item, i) => {
                return (
                  // <Link to={`/AllProducts/${item.id}`}>
                  <RelatedProduct key={i} item={item} />
                  // </Link>
                );
              })}
            </Grid>
          </Grid> */}
          {loading ? (
            <Container>
              <Grid container justifyContent={"center"} sx={{ py: "3rem" }}>
                <CircularProgress size={"1.5rem"} />
              </Grid>
            </Container>
          ) : (
            <>
              <Grid item xs={12} md={12} sx={{ marginY: "2rem" }}>
                <Grid container>
                  {/* {relatedProducts.map((item, i) => {
                return (
                  // <Link to="/SingleProduct">
                  <RelatedProduct key={i} item={item} />
                  // </Link>
                );
              })} */}
                  {allProduct.map((item, i) => {
                    return (
                      // <Link to="/SingleProduct">
                      <RelatedProduct key={i} item={item} />
                      // </Link>
                    );
                  })}
                </Grid>
              </Grid>
            </>
          )}
        </>
      )}

      {/* <Grid
          container
          item
          sx={{
            marginY: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid> */}
      {current == "allproducts" ? (
        <>
          <Container>
            <Grid container justifyContent={"center"} sx={{ py: "3rem" }}>
              <Grid>
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
                  onClick={() => {
                    setPageNumber((prev) => (prev += 1));
                  }}
                >
                  View More
                </Box>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}
