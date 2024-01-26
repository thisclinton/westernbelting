import { useEffect, useLayoutEffect, useRef } from "react";
import "./preloader.css";
import gsap from "gsap";
import { motion } from "framer-motion";
import { preLoaderAnim } from "../Animations";

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
      duration: 1.6,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
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
      >
        <h1 className="preloader__title">
          Western <h1>BELTING</h1>
        </h1>
        <span>Conveyor Belts since 1959</span>
      </motion.div>
    </section>
  );
}

export default Preloader;
