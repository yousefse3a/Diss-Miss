import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./pages/routers";

function App() {
  return (
    <>
      <RouterProvider router={routers()} />
    </>
  );
}

export default App;
