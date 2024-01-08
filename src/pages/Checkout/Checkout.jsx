import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

export default function Checkout() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <Grid sx={{ maxWidth: "100vw", display: "flex" }}>
        <Grid
          sx={{
            // background: "red",
            padding: "1rem 2rem",
            boxSizing: "border-box",
            width: "50%",
          }}
        >
          <Typography variant="h5" sx={{ marginY: "1rem" }}>
            Contact
          </Typography>
          <TextField fullWidth label="email" id="email" sx={{ m: 1 }} />
          <Typography variant="h5" sx={{ marginY: "1rem" }}>
            Delivery
          </Typography>
          <TextField
            label="Frist name"
            id="outlined-size-small"
            size="small"
            sx={{ m: 1, maxWidth: "46%" }}
          />
          <TextField
            label="Last name"
            id="outlined-size-small"
            size="small"
            sx={{ m: 1, maxWidth: "46%" }}
          />
          <TextField fullWidth label="Address" id="email" sx={{ m: 1 }} />
          <TextField
            label="state"
            id="outlined-size-small"
            size="small"
            sx={{ m: 1, maxWidth: 120 }}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
          <TextField
            label="postal code"
            id="outlined-size-small"
            size="small"
            sx={{ m: 1, maxWidth: 120 }}
          />
          <TextField fullWidth label="phone" id="phone" sx={{ m: 1 }} />
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
              marginY:"1rem"
            }}
          >
            Compelte order
          </Grid>
        </Grid>
        <Grid
          sx={{
            background: "#bbb",
            height: "90vh",
            width: "50%",
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
              width: "100%",
              maxHeight: "75%",
              overflowY: "auto",
            }}
          >
            <CheckoutItem />
            {/* <CheckoutItem />
          <CheckoutItem /> */}
            {/* <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem /> */}
          </Grid>
          <Grid
            sx={{
              width: "100%",
              maxHeight: "70%",
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
