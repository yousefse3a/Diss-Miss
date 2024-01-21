import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import FormAddres from "./formAddres";

export default function Edit() {
  const [openPopup, setOpenPopUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setOpenPopUp(true);
  };

  const handleClose = () => {
    setOpenPopUp(false);
  };

  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={2}
        textAlign={"center"}
        sx={{ mt: "2rem", mb: "1rem" }}
      >
        <Grid>
          <Box
            sx={{
              fontSize: "22px",
              color: "#1a1a1a",
              mb: "1rem",
            }}
          >
            Default
          </Box>

          <Box
            sx={{
              fontSize: "16px",
              color: "#666",
            }}
          >
            Ahmed Ashraf
          </Box>
          <Box
            sx={{
              fontSize: "16px",
              color: "#666",
            }}
          >
            Egypt
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: "2rem" }}
          >
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
              }}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              Edit
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
              }}
              onClick={handleClickOpen}
            >
              Delete
            </Box>
            <Dialog
              open={openPopup}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button
                  onClick={handleClose}
                  autoFocus
                  sx={{
                    "&:hover": {
                      color: "#c6565a",
                      borderColor: "#c6565a",
                    },
                  }}
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
      {isOpen ? (
        <FormAddres
          title={"Edit address"}
          buttonName={"Update address"}
          setIsUpdateOrAdd={setIsOpen}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
