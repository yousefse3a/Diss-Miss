import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "62.7vh",
          display: "flex",
          flexFlow: "column",
          justifyContent: "start",
          alignItems: "center",
          // background:"gray"
          //   overflow:"hidden",
          //   "&> div": { borderRadius: "5px" },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
