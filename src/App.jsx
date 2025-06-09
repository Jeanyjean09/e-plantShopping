import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";  // <-- Import Router here
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>  {/* Wrap your whole app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>
);
