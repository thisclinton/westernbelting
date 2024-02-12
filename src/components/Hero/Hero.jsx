import gsap from "gsap";
import "./Hero.css";
import Logo from "../../assets/Western-Belting-Logo-Website.png";
import { useEffect, useLayoutEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import heroBG from "../../assets/backgrounds/hero-bg.jpg";

const textVariants = {
  hidden: { opacity: 0, y: "1vh", transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      staggerChildren: 1,
    },
  },
};

function Hero() {
  useLayoutEffect(() => {}, []);

  return (
    <section className="hero">
      <div className="hero__img">
        <img src={heroBG} alt="Hero Image" />
      </div>
      <div className="hero__shadow"></div>

      <div className="hero__container">
        <motion.div
          className="hero__data"
          variants={textVariants}
          initial="hidden"
          animate="show"
        >
          <div className="hero__title-container">
            <img
              src={Logo}
              alt="Western-Belting-Logo"
              className="nav__logo-img hero-logo"
            />
            <h1 className="hero__title">
              Western <span>BELTING</span>
            </h1>
          </div>
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
      </div>
    </section>
  );
}

export default Hero;
