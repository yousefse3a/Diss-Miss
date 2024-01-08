import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginY: "1rem",
      }}
    >
      <Typography variant="h4" sx={{ margin: "1rem" }}>
        Login
      </Typography>
      <TextField sx={{ m: 1, width: "25rem" }} label="email" id="email" />
      <FormControl sx={{ m: 1, width: "25rem" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Box
        sx={{
          width: "20rem",
          textAlign: "left",
          fontSize: ".8rem",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Forgot Password
      </Box>
      <Box
        sx={{
          margin: "1.5rem  0 .5rem 0",
          padding: ".5rem 1.5rem",
          boxSizing: "border-box",
          background: "#40a0df",
          color: "#fff",
          borderRadius: "5px",
          border: "1px #40a0df solid",
          transition: ".5s",
          "&:hover": {
            color: "#40a0df",
            background: "#fff",
          },
        }}
      >
        Sign In
      </Box>
      <Link
        to="/Register"
        sx={{
          fontSize: ".8rem",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Create Account
      </Link>
    </Grid>
  );
}
