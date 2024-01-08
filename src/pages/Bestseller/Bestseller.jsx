import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import Product from "../../components/Product/Product";

export default function Bestseller() {
  const [color, setcolor] = React.useState("");
  const [sort, setsort] = React.useState("");

  const handleColor = (event) => {
    setcolor(event.target.value);
  };

  const handleSort = (event) => {
    setsort(event.target.value);
  };
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
        <Typography variant="h4">Best Seller</Typography>
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
              <FormControl sx={{ mx: "1rem", minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-label">color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={color}
                  label="color"
                  onChange={handleColor}
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
      <Grid
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
      </Grid>
    </Container>
  );
}
