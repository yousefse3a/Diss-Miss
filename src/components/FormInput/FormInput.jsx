import { Grid, TextField } from "@mui/material";
import React from "react";

export default function FormInput({
  register,
  label,
  errors,
  ele,
  type,
  xs,
  md,
}) {
  function FormHelperTextProps(indicator) {
    return {
      sx: {
        color: "#fff !important",
        bgcolor: `${indicator ? "#e65257" : ""}`,
        fontFamily: "inherit",
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: "5px",
        marginX: "0",
      },
    };
  }
  return (
    <Grid item xs={xs} md={md} paddingX={1} paddingY={".2rem"}>
      <TextField
        id="outlined-size-small"
        size="small"
        fullWidth
        label={<>{label}</>}
        errors={errors[ele]}
        helperText={errors[ele] ? errors[ele].message : " "}
        FormHelperTextProps={FormHelperTextProps(errors[ele])}
        type={type}
        {...register(ele)}
      />
    </Grid>
  );
}
