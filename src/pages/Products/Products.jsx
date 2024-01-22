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
import React, { useEffect, useMemo, useState } from "react";
import Product from "../../components/Product/Product";
import { Link, useLocation, Outlet } from "react-router-dom";
import RelatedProduct from "../../components/RelatedProducts/RelatedProduct";
import { getEntity } from "../../API/getAPIs";
import axios from "axios";
import { baseUrl } from "../../Redux/api";

export default function Products() {
  const location = useLocation();
  const current = location.pathname.split("/").slice(-1)[0].toLocaleLowerCase();
  const [color, setcolor] = useState("");
  const [sort, setsort] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [allProduct, setAllProduct] = useState([]);
  const [viewMore, setviewMore] = useState(false);

  const handleColor = (event) => {
    setcolor(event.target.value);
  };

  const handleSort = (event) => {
    setsort(event.target.value);
  };

  const getProducts = async () => {
    let { data } = await axios.get(`${baseUrl}/product.php?page=${pageNumber}`);
    console.log(data.data.length);

    if (data.message == "No products found") {
      return setviewMore(false);
    }
    setAllProduct((prev) => {
      setviewMore(true);
      return [...prev, ...data.data];
    });
  };

  const RenderProducts = useMemo(() => {
    return (
      <>
        {allProduct.map((product, i) => {
          return <RelatedProduct key={i} productDetails={product} />;
        })}
      </>
    );
  }, [allProduct]);

  useEffect(() => {
    getProducts();
  }, [pageNumber]);

  return (
    <Container>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Products</Typography>
        {/* <Grid
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
            </Grid> */}
      </Grid>

      <Grid item xs={12} md={12} sx={{ marginY: "2rem" }}>
        <Grid container>
          {allProduct.length == 0 ? (
            <Grid container justifyContent={"center"} sx={{ py: "3rem" }}>
              <CircularProgress size={"1.5rem"} />
            </Grid>
          ) : (
            RenderProducts
          )}
        </Grid>
      </Grid>
      {viewMore ? (
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
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
              console.log("clicked", viewMore);
              setPageNumber((prev) => (prev += 1));
            }}
          >
            View More
          </Box>
        </Grid>
      ) : (
        ""
      )}
    </Container>
  );
}
