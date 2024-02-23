import gsap from "gsap";
import "./suppliers.css";
import { useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";
import {
  useAnimation,
  useInView,
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import Ammeraal from "../../assets/ammeraal.png";
import Forbo from "../../assets/forbo.svg";
import Icl from "../../assets/Icl-logo.png";

const suppliersData = [
  {
    title: "Icl America Limited",
    description:
      " ICL AMERICA LIMITED is involved in the sales and marketing of Fabric Rubber Conveyor Belting, servicing bulk material handling industry requirements. All Synthetic constructions provide higher adhesion, excellent resistance to Edge wear, higher impact resistance, Superior tear and longitudinal rip-resistance, excellent rot/mildew resistance, higher breaking strength, deep troughing and improved tracking, controlled elongation.",
    img: Icl,
    id: 1,
    link: "https://www.iclamerica.com/",
  },
  {
    title: "Scandia USA",
    description:
      "Scandia USA, Midwest LLC is a company that specializes in providing various types of conveyor belting products for different industries, such as heavy duty, lightweight, agriculture, and sheet rubber. The company operates in multiple states, including Kansas, Oregon, Tennessee, and Texas. Scandia USA, Midwest LLC is a partner of Scandia Belting Company, a leading manufacturer of conveyor belts in Scandinavia. The company aims to offer high-quality products, competitive prices, and excellent customer service.",
    img: "http://scandiamidwestllc.com/wp-content/uploads/2015/01/logo2.png",
    id: 2,
    link: "https://scandiamidwestllc.com/",
  },

  {
    title: "Flexco",
    description:
      "When an unexpected shut down occurs because of a conveyor belt problem, your productivity suffers. Fortunately, Flexco can help you get up and running fast. We offer a wide array of quick and easy belt splicing solutions, including long-lasting mechanical fasteners and reliable endless splicing tools. So whether you’re moving apples or aggregate, there's a Flexco product that helps ensure you'll get maximum uptime from your belt line.",
    img: "https://flexco.co.za/Files/Logos/Flexco_logo.svg",
    id: 3,
    link: "https://www.flexco.com/NA/EN/Flexco.htm",
  },

  {
    title: "Asgco",
    description:
      "To Provide the World’s Material Handling Industry with Efficient, Safe and Productive “Complete Conveyor Solutions”. ASGCO® “Complete Conveyor Solutions”, founded in 1971 and headquartered in Allentown, PA is a leading global manufacturer and service provider of proprietary bulk conveyor components and systems. We use proven products, practical engineering and turn-key service solutions to increase conveyor efficiencies and production capabilities while improving safe work environment.",
    img: "https://www.asgco.com/wp-content/themes/asgco/assets/img/logo.svg",
    id: 4,
    link: "https://www.asgco.com/",
  },

  {
    title: "Forbo",
    description:
      "The Movement Systems division is a global industry leader in supplying high-quality conveyor belts and processing belts as well as plastic modular belts, power transmission belts, and timing and flat belts made of synthetic materials. They are used in a variety of ways in manufacturing and in the retail and service sectors, for example as conveyor and processing belts in the food industry, as treadmills in fitness studios or as flat belts in letter sorting systems.",
    img: Forbo,
    id: 5,
    link: "https://www.forbo.com/corporate/en-gl/",
  },

  {
    title: "Ammeraal Beltech",
    description:
      " Ammeraal Beltech offers the largest range of belting products worldwide to over 150 countries. A truly global company, we have production plants in 7 countries, over 80 service centres, more than 2,500 employees and 25,000 customers in 26 different countries. It’s no wonder therefore that we’re well-known and respected in the world of belting. Indeed, we have built up a reputation as specialists for the innovative design and manufacture of a variety of belting systems for very diverse markets. These include food, airports, logistics & mail, tobacco, paper & print, textile, automotive, rubber & tyre and wood.",
    img: Ammeraal,
    id: 6,
    link: "https://www.ammeraalbeltech.com/",
  },

  {
    title: "Habasit",
    description:
      "Habasit is a global leader in conveyor belt solutions, offering a comprehensive range of belts, chains, and accessories for various industries. With a focus on quality, innovation, and sustainability, Habasit provides reliable and efficient solutions for material handling, processing, and manufacturing applications. Since its inception, Habasit has been committed to delivering superior products and services that meet the diverse needs of its customers worldwide.",
    img: "data:image/jpeg;base64,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",
    id: 7,
    link: "https://www.habasit.com/",
  },

  {
    title: "Intralox",
    description:
      "Intralox is a global leader in conveyance solutions, offering modular plastic conveyor belts, equipment, and services for various industries. Established in 1971, they pioneered modular plastic belting, with innovations like Activated Roller Belt™ and ThermoDrive®. These technologies optimize material handling, improve efficiency, and reduce maintenance costs. With a focus on customer-centric innovation, Intralox continues to revolutionize conveyor technology worldwide.",
    img: "https://www.intralox.com/static/intralox-logo-box-194a1e40631d2cf9cd7d463fa5afc04b.svg",
    id: 8,
    link: "https://www.intralox.com/",
  },
];

function Suppliers() {
  const containerRef = useRef(null);

  const lengthOfSuppliers = suppliersData.length;

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
        transition={{ delay: 1, duration: 0.8 }}
      >
        Our Suppliers
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
      <div className="suppliers__container container">
        {suppliersData.map((supplier, index) => (
          <article className="suppliers__card" key={supplier.id}>
            <div className="suppliers__img-container">
              <a href={supplier.link} target="_blank">
                <img
                  src={supplier.img}
                  alt={`${supplier.title} image`}
                  className="suppliers__img"
                  loading="lazy"
                />
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
