import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/Suppliers/Suppliers";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader/Preloader";
import Gallery from "./components/Gallery/Gallery";
import Partners from "./components/Partners/Partners";
import transition from "./transition";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div className="wrapper">
        {/* <Preloader /> */}
        {/* <Nav />
        <Hero />
        <About />
        <Gallery />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
