import React from "react";
import Root from "./Root/Root";
import { Navigate, createBrowserRouter, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Checkout from "./Checkout/Checkout";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import NotFound from "./NotFound/NotFound";
import Bestseller from "./Bestseller/Bestseller";
import Products from "./Products/Products";
import Carttosta from "../components/Carttosta/Carttosta";
import SingleProduct from "../components/Product/SingleProduct";
import Cart from "./Cart/Cart";
import Profile from "./Profiles/Profile";
import Addresse from "./Addresses/Addresse";
import { useSelector } from "react-redux";
// const LazyHome = React.lazy(() => import("./Home/Home"));

export default function Routers() {
  const userToken = useSelector((state) => state.user.userToken);

  const routers = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        // { path: "/t", element: <Carttosta /> },
        { path: "/Bestseller", element: <Bestseller /> },

        { path: "/cart", element: <Cart /> },
        {
          path: "/AllProducts",
          element: <Products />,
          children: [{ path: "/AllProducts/:id", element: <SingleProduct /> }],
        },
        {
          path: "/Profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        { path: "/addresses", element: <Addresse /> },
        { path: "/checkout", element: <Checkout /> },
        {
          path: "/Login",
          element: <> {userToken ? <Home /> : <Login />}</>,
        },
        {
          path: "/Register",
          element: <> {userToken ? <Home /> : <Register />}</>,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return routers;
}

export function ProtectedRoute({ children }) {
  let location = useLocation();

  const userToken = useSelector((state) => state.user.userToken);
  console.log("ddwa", userToken);
  console.log("userrrr", location.pathname);
  if (userToken) {
    if (["/Register", "/Login"].includes(location.pathname)) {
      return <Navigate to={"/"} replace />;
    }
    return children;
  } else {
    return <Navigate to={"/Login"} replace />;
  }
}
