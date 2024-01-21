import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./pages/routers";
import { useSelector } from "react-redux";

function App() {

  return (
    <>
      <RouterProvider router={routers()} />
    </>
  );
}

export default App;
