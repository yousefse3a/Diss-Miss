import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "./Redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
    </Provider>
  </React.StrictMode>
);
