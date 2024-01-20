import gsap from "gsap";
import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";
import { useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__img">
        <img src={HeroImg} alt="Hero Image" />
      </div>
      <div className="hero__shadow"></div>

      <div className="hero__container">
        <div className="hero__data">
          <h1 className="hero__title">
            Western <span>BELTING</span>
          </h1>
          <span className="hero__subtitle">
            Welcome to Western Belting Company, where precision meets
            performance in every belt we craft. As industry leaders, we take
            pride in delivering high-quality belting solutions tailored to your
            unique needs. Whether it's conveying efficiency, industrial power,
            or innovative solutions, we are your trusted partner on the road to
            seamless operations. Explore the frontier of belting technology with
            Western Belting Company – where reliability and excellence come
            together for your success.
          </span>
        </div>
        <div className="hero__scroll">
          <span>scroll</span>
          <div className="hero__line"></div>
          <RiArrowDownSLine className="hero__arrow" />
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
