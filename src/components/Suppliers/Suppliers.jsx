import gsap from "gsap";
import "./suppliers.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionHeader from "../SectionHeader";
import {
  useAnimation,
  useInView,
  motion,
  useTransform,
  useScroll,
} from "framer-motion";

const suppliersData = [
  {
    title: "Icl America Limited",
    description:
      " ICL AMERICA LIMITED is involved in the sales and marketing of Fabric Rubber Conveyor Belting, servicing bulk material handling industry requirements. All Synthetic constructions provide higher adhesion, excellent resistance to Edge wear, higher impact resistance, Superior tear and longitudinal rip-resistance, excellent rot/mildew resistance, higher breaking strength, deep troughing and improved tracking, controlled elongation.",
    img: "https://static.wixstatic.com/media/2b8fca_2cee23fe51f242bc993b03b7d5f54c2a~mv2.jpg/v1/fill/w_402,h_101,al_c,lg_1,q_80,enc_auto/2b8fca_2cee23fe51f242bc993b03b7d5f54c2a~mv2.jpg",
    id: 1,
    link: "https://www.iclamerica.com/",
  },

  {
    title: "Flexco",
    description:
      "When an unexpected shut down occurs because of a conveyor belt problem, your productivity suffers. Fortunately, Flexco can help you get up and running fast. We offer a wide array of quick and easy belt splicing solutions, including long-lasting mechanical fasteners and reliable endless splicing tools. So whether you’re moving apples or aggregate, there's a Flexco product that helps ensure you'll get maximum uptime from your belt line.",
    img: "https://static.wixstatic.com/media/2b8fca_781b7167058f449aa37eafd0704ea90d~mv2.gif",
    id: 2,
    link: "https://www.flexco.com/NA/EN/Flexco.htm",
  },

  {
    title: "Asgco",
    description:
      "To Provide the World’s Material Handling Industry with Efficient, Safe and Productive “Complete Conveyor Solutions”. ASGCO® “Complete Conveyor Solutions”, founded in 1971 and headquartered in Allentown, PA is a leading global manufacturer and service provider of proprietary bulk conveyor components and systems. We use proven products, practical engineering and turn-key service solutions to increase conveyor efficiencies and production capabilities while improving safe work environment.",
    img: "https://static.wixstatic.com/media/2b8fca_a42b7b92c91e40caaa902253a5912844~mv2.jpg/v1/crop/x_0,y_41,w_154,h_62/fill/w_211,h_87,al_c,lg_1,q_80,enc_auto/2b8fca_a42b7b92c91e40caaa902253a5912844~mv2.jpg",
    id: 3,
    link: "https://www.asgco.com/",
  },

  {
    title: "Forbo",
    description:
      "The Movement Systems division is a global industry leader in supplying high-quality conveyor belts and processing belts as well as plastic modular belts, power transmission belts, and timing and flat belts made of synthetic materials. They are used in a variety of ways in manufacturing and in the retail and service sectors, for example as conveyor and processing belts in the food industry, as treadmills in fitness studios or as flat belts in letter sorting systems.",
    img: "https://static.wixstatic.com/media/2b8fca_4254b96b79a6410a9716fdbd195b0fc9~mv2.jpg/v1/crop/x_13,y_43,w_227,h_102/fill/w_309,h_143,al_c,lg_1,q_80,enc_auto/2b8fca_4254b96b79a6410a9716fdbd195b0fc9~mv2.jpg",
    id: 4,
    link: "https://www.forbo.com/corporate/en-gl/",
  },

  {
    title: "Ammeraal Beltech",
    description:
      " Ammeraal Beltech offers the largest range of belting products worldwide to over 150 countries. A truly global company, we have production plants in 7 countries, over 80 service centres, more than 2,500 employees and 25,000 customers in 26 different countries. It’s no wonder therefore that we’re well-known and respected in the world of belting. Indeed, we have built up a reputation as specialists for the innovative design and manufacture of a variety of belting systems for very diverse markets. These include food, airports, logistics & mail, tobacco, paper & print, textile, automotive, rubber & tyre and wood.",
    img: "https://static.wixstatic.com/media/2b8fca_aca333d4e2e7448e8ebf868fcb16f32c~mv2.jpg/v1/fill/w_287,h_101,al_c,lg_1,q_80,enc_auto/2b8fca_aca333d4e2e7448e8ebf868fcb16f32c~mv2.jpg",
    id: 5,
    link: "https://www.ammeraalbeltech.com/en-US/",
  },
];

function Suppliers() {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <section className="suppliers" ref={containerRef}>
      <motion.h2
        className="section__title"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Suppliers
      </motion.h2>
      <motion.p
        className="section__description"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Discover our trusted suppliers section, where we partner with
        industry-leading providers to ensure premium-quality materials and
        services. Our rigorous selection process guarantees reliability,
        efficiency, and unmatched performance, empowering your projects with the
        best-in-class solutions.
      </motion.p>
      <div className="suppliers__container">
        {suppliersData.map((supplier) => (
          <article className="suppliers__card" key={supplier.id}>
            <span className="suppliers__number">{supplier.id}/5</span>
            <div className="suppliers__img-container">
              <a href={supplier.link} target="_blank">
                <img src={supplier.img} alt="" className="suppliers__img" />
              </a>
            </div>
            <motion.div className="suppliers__data">
              <a href={supplier.link} target="_blank">
                <h3 className="suppliers__title">{supplier.title}</h3>
              </a>
              <p className="suppliers__description">{supplier.description}</p>
            </motion.div>
          </article>
        ))}
      </div>
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

export default Suppliers;
