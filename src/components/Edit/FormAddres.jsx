import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function FormAddres({ title, buttonName, setIsUpdateOrAdd }) {
  return (
    <>
      <Container sx={{ my: "1rem" }} maxWidth="sm">
        <Grid container justifyContent={"center"} sx={{}}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ color: "#1a1a1a", fontSize: "24px" }}
          >
            <Box>{title}</Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="First name"
              sx={{ pr: "1rem" }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Last name"
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Address 1"
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Address 2"
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Email"
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="City"
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Country/region
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Country/region"
                // onChange={handleChange}
              >
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
                <MenuItem value={"Algeria"}>Algeria</MenuItem>
                <MenuItem value={"Aruba"}>Aruba</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Province</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Province"
                // onChange={handleChange}
              >
                <MenuItem value={10}>6th of October</MenuItem>
                <MenuItem value={20}>Giza</MenuItem>
                <MenuItem value={30}>Mansoura</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={12} sx={{ py: "1rem" }}>
            <TextField
              fullWidth
              id="outlined-multiline-flexible"
              label="Phone"
            />
            <FormControlLabel
              sx={{ py: "1rem" }}
              control={<Checkbox size="small" />}
              label=" Set as default address"
            />
          </Grid>
          <Box
            //   className={classess.addToCart}
            sx={{
              border: " #1a1a1a 1px solid",
              cursor: "pointer",
              my: "1rem",
              textAlign: "center",
              p: "0.4rem 2.5rem",
              ml: "0.5rem",
              bgcolor: "#1a1a1a ",
              color: "white",
              "&:hover": {
                bgcolor: "#738964",
                border: "none",
              },
            }}
            onClick={() => {
              //   setIsOpen((prev) => !prev);
              setIsUpdateOrAdd((prev) => !prev);
            }}
          >
            {buttonName}
          </Box>

          <Box
            //   className={classess.addToCart}
            sx={{
              border: " #1a1a1a 1px solid",
              cursor: "pointer",
              "&:hover": {
                color: "#c6565a",
                borderColor: "#c6565a",
              },
              textAlign: "center",
              p: "0.4rem 2.5rem",
              ml: "0.5rem",
              my: "1rem",
            }}
            onClick={() => {
              setIsUpdateOrAdd((prev) => !prev);
            }}
          >
            Cancel
          </Box>
        </Grid>
      </Container>
    </>
  );
}
