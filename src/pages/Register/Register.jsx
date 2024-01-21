import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
Button,
  CircularProgress,
  FormControl,
FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Redux/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userAuth } from "../../Redux/userSlice";
import { DevTool } from "@hookform/devtools";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import Joi from "joi";
import FormInput from "../../components/FormInput/FormInput";

export default function Register() {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const schema = Joi.object({
    Fname: Joi.string().min(2).max(30).required().messages({
      "string.empty": "name can't be empty",
      "string.pattern.base": "name can't have marks",
    }),
    Lname: Joi.string().min(2).max(30).required().messages({
      "string.empty": "name can't be empty",
      "string.pattern.base": "name can't have marks",
    }),
    Email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .optional()
      .messages({
        "string.empty": "email empty",
        "string.email": "not rigth email",
      }),
    Password: Joi.string().messages({ "string.empty": "password empty" }),
  });
  const form = useForm({
    resolver: joiResolver(schema),
  });
  const { register, handleSubmit, control, getValues, formState, setError } =
    form;
  const { errors } = formState;

  const onSubmit = async (inputs) => {
    setisLoading(true);
    console.log(inputs);
    let { data } = await axios.post(`${baseUrl}/register.php`, {
      username: `${inputs.Fname} ${inputs.Lname}`,
      email: inputs.Email,
      password: inputs.Password,
    });
    console.log("register", data);
    console.log("dd", data.success);
    if (data.success) {
      dispatch(userAuth({ email: inputs.Email, pass: inputs.Password }));
    } else {
      setError(
        "Email",
        { type: "focus", message: "email used before" },
        { shouldFocus: true }
      );
    }
    setisLoading(false);
  };
  return (
    <Grid
container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: { xs: "100%", md: "50%" },
      }}
component={"form"}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" sx={{ margin: "1rem", fontFamily: "inherit" }}>
        Create account
      </Typography>
      <FormInput
        xs={10}
        md={8}
        register={register}
        errors={errors}
        ele="Fname"
        type="text"
        label="Frist Name"
      />
      <FormInput
        xs={10}
        md={8}
        register={register}
        errors={errors}
        ele="Lname"
        type="text"
        label="Last Name"
      />
      <FormInput
        xs={10}
        md={8}
        register={register}
        errors={errors}
        ele="Email"
        type="email"
        label="Email"
      />
      <Grid item xs={10} md={8} paddingX={1} paddingY={".2rem"}>
        <FormControl variant="outlined" fullWidth size="small">
        <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        {...register("Password")}
          />
<FormHelperText
            sx={{
              color: "#fff !important",
              bgcolor: `${errors.Password ? "#e65257" : "transparent"}`,
              fontFamily: "inherit",
              borderRadius: "5px",
              boxSizing: "border-box",
              padding: "5px",
              marginX: "0",
            }}
          >
            {errors.Password ? errors.Password.message : " "}
          </FormHelperText>
      </FormControl>
</Grid>

      <DevTool control={control} />
      <Grid
        container
        item
        xs={8}
        md={8}
        sx={{
display: "felx",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={4}
          type="submit"
          component={Button}
          sx={{
            display: "flex",
          margin: "1.5rem  0 .5rem 0",
          padding: ".5rem 3rem",
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
        {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress size={"1.5rem"} sx={{ color: "wheat" }} />
      </Box>
) : (
            "Create"
          )}
        </Grid>
      <Link to="/Login">
          <Box
        sx={{
          margin: ".5rem 0 .7rem 0",
              padding: ".5rem 1.7rem",
          boxSizing: "border-box",
              borderRadius: "5px",
              transition: ".5s",
          "&:hover": {
            background: "#40a0df",
                color: "#fff",
          },
        }}
      >
        login
</Box>
      </Link>
</Grid>
    </Grid>
  );
}
