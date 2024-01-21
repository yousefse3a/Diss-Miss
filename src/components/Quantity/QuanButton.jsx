import { Grid, Box, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import classess from "./QuanButton.module.css";
import React, { useState } from "react";

export default function QuanButton({ quantity, setQuantity }) {
  //   const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Grid item sx={{ display: { xs: "flex" } }}>
        <Box className={classess.wrapper} >
          <Box
            sx={{
              fontSize: "1rem",
              p: "1rem",
              zIndex: "999",
              cursor: "pointer",
            }}
            onClick={() => {
              setQuantity((prev) => (prev == 0 ? 0 : (prev -= 1)));
            }}
          >
            -
          </Box>
          <TextField
            sx={{
              textAlign: "center",
              borderRight: "1px solid",
              borderLeft: "1px solid",
              minWidth: "2rem",
              zIndex: "999"
            }}
            variant="standard"
            value={quantity}
            InputProps={{
              disableUnderline: true,
            }}
            inputProps={{
              style: { textAlign: "center" },
            }}
            onChange={(e) => {
              let quen = Number(e.target.value);
              if (isNaN(quen)) {
                setQuantity(0);
              } else {
                setQuantity(Number(e.target.value));
              }
            }}
          ></TextField>
          <Box
            sx={{
              fontSize: "1rem",
              p: "1rem",
              cursor: "pointer",
              zIndex: "999"
            }}
            onClick={() => {
              setQuantity((prev) => (prev += 1));
            }}
          >
            +
          </Box>
        </Box>
        <DeleteOutlineIcon
          sx={{
            cursor: "pointer",
            m: "auto",
            pl: "1rem",
            zIndex: "99",
            fontSize: "2.5rem",
            "&:hover": {
              color: "#c6565a",
              
            },
          }}
          onClick={() => {
            setQuantity(0);
          }}
        />
      </Grid>
    </>
  );
}
