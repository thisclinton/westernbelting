import gsap from "gsap";
import "./Hero.css";
import Logo from "../../assets/Western-Belting-Logo-Website.png";
import { useEffect, useLayoutEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: "1vh", transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
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
        <img
          src="https://images.unsplash.com/photo-1623742110056-e01d81db039d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
        />
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
