import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Fragment>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </Provider>
      </React.Fragment>
    </BrowserRouter>
  </React.StrictMode>,
);
