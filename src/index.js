import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { ProductProvider } from "./contexts/productContext";
import { FilterProvider } from "./contexts/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <FilterProvider>
          <App />
        </FilterProvider>
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
