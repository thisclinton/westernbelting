import gsap from "gsap";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home.jsx";
import Products from "../Products/Products.jsx";
import Services from "../Services/Services.jsx";
import Industries from "../Industries/Industries.jsx";
import Safety from "../Safety/Safety.jsx";
import Shop from "../Shop/Shop.jsx";
import LightDutyConveyor from "../LightDutyConveyor/index.jsx";
import HeavyDutyConveyor from "../HeavyDutyConveyor/index.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Contact from "../Contact/Contact.jsx";
import Blog from "../Blog/Blog.jsx";
import Accessories from "../Accessories/Accessories.jsx";
import News from "../News/News.jsx";
import { AnimatePresence, motion } from "framer-motion";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.from(
    [
      ".preloader__logo",
      ".preloader__title",
      ".text__container span",
      ".preloader__years",
    ],
    {
      duration: 1,
      opacity: 0,
      delay: 0.3,
      y: "+=30",
      stagger: 0.5,
      ease: "Power3.easeOut",
    }
  )
    .to(
      [
        ".preloader__title",
        ".preloader__logo",
        ".preloader__years",
        ".text__container span",
      ],
      {
        opacity: 0,
        y: "-=30",
        delay: 0.5,
        stagger: 0.5,
      }
    )
    .to(
      ".preloader",
      {
        duration: 1.2,
        delay: 1.3,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}></Route>
          <Route
            path="/products/lightdutyconveyor"
            element={<LightDutyConveyor />}
          />
          <Route
            path="/products/heavydutyconveyor"
            element={<HeavyDutyConveyor />}
          />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="safety" element={<Safety />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:id" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
