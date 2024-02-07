import gsap from "gsap";
import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";
import { useEffect, useLayoutEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: "1vh", transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 5,
      duration: 1,
      staggerChildren: 1,
    },
  },
};

function Hero() {
  useLayoutEffect(() => {}, []);

  return (
    <section className="hero">
      <div className="hero__img">
        {/* <img src={HeroImg} alt="Hero Image" /> */}
      </div>
      <div className="hero__shadow"></div>

      <div className="hero__container">
        <motion.div
          className="hero__data"
          variants={textVariants}
          initial="hidden"
          animate="show"
        >
          <h1 className="hero__title">
            Western <span>BELTING</span>
          </h1>
          <motion.span className="hero__subtitle">
            Welcome to Western Belting Company, where precision meets
            performance in every belt we craft. As industry leaders, we take
            pride in delivering high-quality belting solutions tailored to your
            unique needs. Whether it's conveying efficiency, industrial power,
            or innovative solutions, we are your trusted partner on the road to
            seamless operations. Explore the frontier of belting technology with
            Western Belting Company – where reliability and excellence come
            together for your success.
          </motion.span>
        </motion.div>
        <div className="hero__scroll">
          <span>scroll</span>
          <motion.div
            className="hero__line"
            /* initial={{ translateY: 0 }} */
            animate={{ y: 10 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
          >
            <RiArrowDownSLine className="hero__arrow" />
          </motion.div>
        </div>
      </div>

      {/* <div className="reveal">
        <div>
          {text.split("").map((letters, index) => {
            <span className="reveal__text" key={index}>
              {letters}
            </span>;
          })}
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
