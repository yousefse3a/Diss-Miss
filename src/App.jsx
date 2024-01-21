import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./pages/routers";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={routers()} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
