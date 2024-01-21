import {
  Box,
  Button,
  CardContent,
  CardHeader,
  CircularProgress,
  Collapse,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FormInput from "../../components/FormInput/FormInput";
import { DevTool } from "@hookform/devtools";

export default function Checkout() {
  const [isLoading, setisLoading] = useState(false);
  const [country, setcountry] = useState("");
  const [Payment, setPayment] = useState("");
  const [collapseOpen, setcollapseOpen] = useState(false);

  const handleCollapse = () => {
    setcollapseOpen((prev) => {
      console.log("prev", prev);
      return !prev;
    });
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
    Phone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "phone is empty",
        "string.pattern.base": "not right number",
      }),
    secPhone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "second phone is empty",
        "string.pattern.base": "not right number",
      }),
    Address: Joi.string().required().messages({
      "string.empty": "address is empty",
    }),
    Country: Joi.string().optional().messages({
      "string.empty": "country is empty",
    }),
    State: Joi.string().optional().messages({
      "string.empty": "state is empty",
    }),
    Payment: Joi.string().required().messages({
      "string.empty": "must choose one",
    }),
  });
  const form = useForm({
    resolver: joiResolver(schema),
  });
  const { register, handleSubmit, control, getValues, formState, setError } =
    form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    console.log("first");
    setisLoading(true);
    // const resData = await registerApi({
    //   ...data,
    //   type: data.year == 2 ? type : 0,
    // });
    setisLoading(false);
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
          component={"form"}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item xs={12} padding={1}>
            <Typography fontFamily={"inherit"} variant="h5">
              Contact Details
            </Typography>
          </Grid>
          <FormInput
            xs={12}
            md={6}
            register={register}
            errors={errors}
            ele="Fname"
            type="text"
            label="Frist name"
          />
          <FormInput
            xs={12}
            md={6}
            register={register}
            errors={errors}
            ele="Lname"
            type="text"
            label="Last name"
          />
          <FormInput
            xs={12}
            md={6}
            register={register}
            errors={errors}
            ele="Phone"
            type="phone"
            label="phone"
          />
          <FormInput
            xs={12}
            md={6}
            register={register}
            errors={errors}
            ele="secPhone"
            type="phone"
            label="second phone"
          />
          <FormInput
            xs={12}
            md={12}
            register={register}
            errors={errors}
            ele="Address"
            type="text"
            label="Address"
          />
          <FormInput
            xs={12}
            md={12}
            register={register}
            errors={errors}
            ele="Email"
            type="text"
            label="Email"
          />
          <Grid item xs={4} paddingX={1} paddingY={".2rem"}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-select-small-label">country</InputLabel>
              <Select
                {...register("Country", {
                  onChange: () => {
                    setcountry(getValues("Country"));
                  },
                })}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={country}
                label="Country"
              >
                <MenuItem value={"cairo"}>Cairo</MenuItem>
                <MenuItem value={"Giza"}>Giza</MenuItem>
                <MenuItem value={"Alex"}>Alex</MenuItem>
              </Select>
            </FormControl>
            <FormHelperText
              sx={{
                color: "#fff !important",
                bgcolor: `${errors.Country ? "#e65257" : "transparent"}`,
                fontFamily: "inherit",
                borderRadius: "5px",
                boxSizing: "border-box",
                padding: "5px",
                marginX: "0",
              }}
            >
              {errors.Country ? errors.Country.message : " "}
            </FormHelperText>
          </Grid>
          <FormInput
            xs={4}
            md={4}
            register={register}
            errors={errors}
            ele="State"
            type="text"
            label="state"
          />

          <Grid item xs={12} paddingX={1} paddingY={0}>
            <Typography fontFamily={"inherit"} variant="h5">
              Payment
            </Typography>
            <FormControl sx={{ mx: 1 }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                {...register("Payment", {
                  onChange: (e) => {
                    setPayment(getValues("Payment"));
                  },
                })}
                value={Payment}
              >
                <FormControlLabel
                  value="Cash"
                  control={<Radio />}
                  label="Cash On Delivery"
                  {...register("Payment")}
                />
                <FormControlLabel
                  value="Debit"
                  control={<Radio />}
                  label="Debit / credit"
                  {...register("Payment")}
                />
              </RadioGroup>
              <FormHelperText
                sx={{
                  color: "#fff !important",
                  bgcolor: `${errors.Payment ? "#e65257" : "transparent"}`,
                  fontFamily: "inherit",
                  borderRadius: "5px",
                  boxSizing: "border-box",
                  padding: "5px",
                  marginX: "0",
                }}
              >
                {errors.Payment ? errors.Payment.message : " "}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid
            item
            sx={{
              bordeRadius: "5px",
              transition: "all .25s linear",
              minWidth: "150px",
              boxSizing: "border-box",
              borderRadius: ".5rem",
              display: "flex",
              justifyContent: "center",
              flexWrap: "nowrap",
              margin: "auto",
              marginY: "1rem",
              background: "#1a1a1a",
              color: "#fff",
              border: "1px solid #1a1a1a",
              "&:hover": {
                background: "#738964",
                color: "#fff",
              },
            }}
            type="submit"
            component={Button}
          >
            {isLoading ? <CircularProgress size={"1.5rem"} /> : "order"}
          </Grid>
          <DevTool control={control} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            background: "#d8d8d8",
            height: "50%",
            padding: "2rem",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius:"2%",
            my:"1rem"
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
              title="Show more"
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
                ".MuiCardHeader-title": { color: "#1a1a1a", fontSize: "1rem" },
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
                    py:"1rem"
                  }}
                >
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
