import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Products from "./components/Products/Products.jsx";
import Services from "./components/Services/Services.jsx";
import Workshop from "./components/Workshop/Workshop.jsx";
import Safety from "./components/Safety/Safety.jsx";
import Shop from "./components/Shop/Shop.jsx";
import HerculesConveyor from "./components/HerculesConveyor/index.jsx";
import ScraperConveyor from "./components/ScraperConveyor/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="products" element={<Products />}></Route>
      <Route path="/products/herculesconveyor" element={<HerculesConveyor />} />
      <Route path="/products/scraperconveyor" element={<ScraperConveyor />} />
      <Route path="services" element={<Services />} />
      <Route path="workshop" element={<Workshop />} />
      <Route path="safety" element={<Safety />} />
      <Route path="shop" element={<Shop />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
