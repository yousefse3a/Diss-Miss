import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import classess from "./Addresse.module.css";
import Edit from "../../components/Edit/Edit";
import FormAddres from "../../components/Edit/FormAddres";
import { useNavigate } from "react-router-dom";

export default function Addresse() {
  const [isUpdateOrAdd, setIsUpdateOrAdd] = useState(false);

  const navigate = useNavigate();

  return (
    <Container sx={{ py: "2rem" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ mt: "2rem", mb: "1rem" }}
      >
        <Grid>
          <Box
            sx={{
              fontSize: "40px",
              color: "#1a1a1a",
              mb: "1.4rem",
              textAlign: "center",
            }}
          >
            Addresses
          </Box>

          <Box
            sx={{
              fontSize: "14px",
              color: "#666",
              textDecoration: "underline",
              cursor: "pointer",
              mb: "2rem",
              textAlign: "center",
            }}
            onClick={() => {
              navigate("/Profile");
            }}
          >
            Return to Account details
          </Box>

          <Box
            className={classess.addToCart}
            sx={{
              bgcolor: "#1a1a1a ",
              color: "white",
              "&:hover": {
                bgcolor: "#738964",
                border: "none",
              },
              textAlign: "center",
              p: "0.6rem 1.3rem",
            }}
            onClick={() => {
              setIsUpdateOrAdd((prev) => !prev);
            }}
          >
            Add a new address
          </Box>
        </Grid>
      </Grid>
      {isUpdateOrAdd ? (
        <>
          <FormAddres
            title={"Add a new address"}
            buttonName={"Add address"}
            setIsUpdateOrAdd={setIsUpdateOrAdd}
          />
        </>
      ) : (
        ""
      )}

      <Edit />
      <Edit />
    </Container>
  );
}
