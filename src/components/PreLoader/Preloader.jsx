import { useEffect, useLayoutEffect, useRef } from "react";
import "./preloader.css";
import gsap from "gsap";
import Logo from "../../assets/Western-Belting-Logo-Website.png";
import yearsLogo from "../../assets/years-logo.png";
import { preLoaderAnim } from "../Animations";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.1, -0.05, 0.95],
      duration: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

function Preloader() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <section className="preloader" ref={comp}>
      <motion.div
        className="text__container"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="preloader__head">
          <img
            src={Logo}
            alt="Western-Belting-Logo"
            className="preloader__logo"
          />
          <h1 className="preloader__title">Western BELTING</h1>
        </div>
        <span className="preloader__duration">Conveyor Belts since 1959</span>
        <img src={yearsLogo} alt="" className="preloader__years" />
      </motion.div>
    </section>
  );
}

export default Preloader;
