import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Services from "./components/Services/Services.jsx";
import Workshop from "./components/Industries/Industries.jsx";
import Safety from "./components/Safety/Safety.jsx";
import Shop from "./components/Shop/Shop.jsx";
import HerculesConveyor from "./components/LightDutyConveyor/index.jsx";
import ScraperConveyor from "./components/HeavyDutyConveyor/index.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Partners from "./components/Partners/Partners.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AnimatedRoutes from "./components/Animations/index.jsx";
import Preloader from "./components/PreLoader/Preloader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Preloader />
      <Nav />
      <AnimatedRoutes />
      <Partners />
      <Footer />
    </Router>
  </React.StrictMode>
);
