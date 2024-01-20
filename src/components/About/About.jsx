import gsap from "gsap";
import "./About.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionHeader from "../SectionHeader";

function About() {
  return (
    <section className="about">
      <SectionHeader title="about us" />
      <p className="about__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        laudantium doloremque deserunt saepe, sunt beatae est corrupti tenetur?
        Nobis assumenda rem dolorum eaque? Reprehenderit doloribus repudiandae
        porro placeat rem quibusdam necessitatibus odit quisquam blanditiis
        facere quidem illo, mollitia fugit sint!
      </p>
    </section>
  );
}

/* function About() {
  let target = 0;
  let current = 0;
  let ease = 0.075;

  const slider = document.querySelector(".slider");
  const sliderWrapper = document.querySelector(".slider__wrapper");
  const markerWrapper = document.querySelector(".marker__wrapper");
  const activeSlide = document.querySelector(".active__slide");

  let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function updateActiveSliderNumber(markerMove, markerMaxmove) {
    const partWidth = markerMaxmove / 10;
    let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
    currentPart = Math.min(10, currentPart);
    activeSlide.textContent = `${currentPart}/10`;
  }

  function update() {
    current = lerp(current, target, ease);
    gsap.set(".slider__wrapper", {
      x: -current,
    });

    let moveRatio = current / maxScroll;

    let markerMaxmove = window.innerWidth - markerWrapper.offsetWidth - 170;
    let markerMove = 70 + moveRatio * markerMaxmove;
    gsap.set(".marker__wrapper", {
      x: markerMove,
    });

    updateActiveSliderNumber(markerMove, markerMaxmove);

    requestAnimationFrame(update);
  }

  window.addEventListener("resize", () => {
    maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
  });

  window.addEventListener("wheel", (e) => {
    target += e.deltaY;

    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
  });

  update();

  return (
    <section className="about">
      <div className="marker__wrapper">
        <div className="marker">
          <div className="grab"></div>
        </div>
        <div className="active__slide">1/10</div>
      </div>

      <div className="slider">
        <div className="slider__wrapper">
          <div className="slide">1</div>
          <div className="slide">2</div>
          <div className="slide">3</div>
          <div className="slide">4</div>
          <div className="slide">5</div>
          <div className="slide">6</div>
          <div className="slide">7</div>
        </div>
      </div>
    </section>
  );
} */

export default About;
