import React from "react";
import Root from "./Root/Root";
import { createBrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from "./NotFound/NotFound";
import Bestseller from "./Bestseller/Bestseller";
import Products from "./Products/Products";
// const LazyHome = React.lazy(() => import("./Home/Home"));

export default function routers() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <Home />
          ),
        },
        { path: "/Bestseller", element: <Bestseller /> },
        { path: "/AllProducts", element: <Products /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/Login", element: <Login /> },
        { path: "/Register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routers;
}
