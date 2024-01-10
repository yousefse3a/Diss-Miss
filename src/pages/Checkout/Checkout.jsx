import {
  Box,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

export default function Checkout() {
  const [age, setAge] = useState("");
  const [collapseOpen, setcollapseOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleCollapse = () => {
    setcollapseOpen((prev) => {
      console.log("prev", prev);
      return !prev;
    });
  };
  return (
    <Container>
      <Grid container sx={{ maxWidth: "100vw", display: "flex" }}>
        <Grid
          container
          item
          xs={12}
          md={6}
          sx={{
            padding: "1rem 2rem",
            boxSizing: "border-box",
          }}
        >
          <Grid item xs={12} padding={1}>
            <Typography variant="h5">Contact</Typography>
          </Grid>
          <Grid item xs={12} padding={1}>
            <TextField fullWidth label="email" id="email" />
          </Grid>
          <Grid item xs={12} padding={1}>
            <Typography variant="h5">Delivery</Typography>
          </Grid>
          <Grid item xs={6} padding={1}>
            <TextField
              label="Frist name"
              id="outlined-size-small"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} padding={1}>
            <TextField
              label="Last name"
              id="outlined-size-small"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} padding={1}>
            <TextField fullWidth label="Address" id="email" />
          </Grid>
          <Grid item xs={4} padding={1}>
            <TextField label="state" id="outlined-size-small" size="small" />
          </Grid>
          <Grid item xs={4} padding={1}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} padding={1}>
            <TextField
              label="postal code"
              id="outlined-size-small"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} padding={1}>
            <TextField fullWidth label="phone" id="phone" />
          </Grid>
          <Grid item xs={12} padding={1}>
            <Typography variant="h5" sx={{ marginY: "1rem" }}>
              Payment
            </Typography>
            <FormControl sx={{ mx: 1 }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Cash On Delivery"
                  control={<Radio />}
                  label="Cash On Delivery"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Pay via credit"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            sx={{
              width: "50%",
              background: "#2196f3",
              color: "white",
              padding: "1rem",
              boxSizing: "border-box",
              borderRadius: ".5rem",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              marginY: "1rem",
            }}
          >
            Compelte order
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#bbb",
            height: "50%",
            padding: "2rem",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <CardHeader
              title="show more"
              action={
                <IconButton
                  onClick={handleCollapse}
                  aria-label="expand"
                  size="small"
                >
                  {collapseOpen ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </IconButton>
              }
              sx={{
                width: "100%",
                padding: "0",
                marginBottom: "1rem",
                ".MuiCardHeader-title": { color: "black", fontSize: "1rem" },
              }}
            ></CardHeader>
            <Collapse
              in={collapseOpen}
              timeout="auto"
              sx={{ width: "100%" }}
              unmountOnExit
            >
              <CardContent>
                <Grid
                  sx={{
                    width: "100%",
                    maxHeight: "75%",
                    overflowY: "auto",
                  }}
                >
                  <CheckoutItem />
                  <CheckoutItem />
                  <CheckoutItem />
                  <CheckoutItem />
                </Grid>
              </CardContent>
            </Collapse>
          </Grid>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>Subtotal</span>
              <span> EG 3,600</span>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>Shopping</span>
              <span> EG 3,600</span>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
              <span>Total</span>
              <span> EG 3,600</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
