import gsap from "gsap";
import "./Hero.css";
import HeroImg from "../../assets/hero.jpg";
import { useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { heroAnim } from "../Animations";

function Hero() {
  const text =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, nam!";

  useEffect(() => {
    heroAnim();
  });

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            dolores veniam eaque neque, <br />
            officiis at. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ipsum, sed!
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
