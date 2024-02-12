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
      duration: 0.7,
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
        delay: 0.3,
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
        onComplete: mobileLanding(),
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

const animateShapes = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .shape", {
      duration: 4,
      rotate: 360,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 2,
    })
    .to(".shapes .shape-3", {
      duration: 1,
      rotate: 360,
      delay: -2,
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 3,
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1,
      opacity: 0,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1.5,
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 1,
    });
};

const animateMainShape = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .main-circle", {
      duration: 6,
      x: -30,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 6,
      x: -30,
      y: 50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 4,
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};

export const boxHover = (e) => {
  const tl = gsap.timeline();
  window.innerWidth >= 986 &&
    tl
      .to(e.target.querySelector(".link"), {
        duration: 0,
        opacity: 1,
      })
      .from(e.target.querySelectorAll(".box-anim"), {
        duration: 0.3,
        opacity: 0,
        y: 30,
        stagger: 0.1,
        ease: "Power3.easeOut",
      });
};

export const boxExit = (e) => {
  window.innerWidth >= 986 &&
    gsap.to(e.target.querySelector(".link"), {
      duration: 0,
      opacity: 0,
    });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 2,
    opacity: 1,
    y: -60,
    ease: "power4.out",
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power4.out",
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
