import React from "react"; //imr+Tab
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import Product from "./Components/shoppingCart";
// import ShoppingCart from "./Components/shoppingCart";
import App from "./Components/App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
