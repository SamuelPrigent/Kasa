import React from "react";
import ReactDOM from "react-dom/client";
// components
import Header from "./components/Header.jsx"; // nav
import Footer from "./components/Footer.jsx"; // footer
// style
import "./style/index.css";
import "./style/reset.css";
// Router
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// utils
import ScrollToTop from "./utils/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>
);
