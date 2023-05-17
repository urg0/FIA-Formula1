import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* import ModalContextProvider from "./store/modal-store"; */
import DriverContextProvider from "store/driver-store";
import ConstructorContextProvider from "store/constructor-store";
import SearchContextProvider from "store/search-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchContextProvider>
    <ConstructorContextProvider>
      <DriverContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DriverContextProvider>
    </ConstructorContextProvider>
  </SearchContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
