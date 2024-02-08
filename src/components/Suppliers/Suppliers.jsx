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
import Ammeraal from "../../assets/ammeraal.png";
import Forbo from "../../assets/forbo.svg";

const suppliersData = [
  {
    title: "Icl America Limited",
    description:
      " ICL AMERICA LIMITED is involved in the sales and marketing of Fabric Rubber Conveyor Belting, servicing bulk material handling industry requirements. All Synthetic constructions provide higher adhesion, excellent resistance to Edge wear, higher impact resistance, Superior tear and longitudinal rip-resistance, excellent rot/mildew resistance, higher breaking strength, deep troughing and improved tracking, controlled elongation.",
    img: "data:image/png;base64,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",
    id: 1,
    link: "https://www.iclamerica.com/",
  },

  {
    title: "Flexco",
    description:
      "When an unexpected shut down occurs because of a conveyor belt problem, your productivity suffers. Fortunately, Flexco can help you get up and running fast. We offer a wide array of quick and easy belt splicing solutions, including long-lasting mechanical fasteners and reliable endless splicing tools. So whether you’re moving apples or aggregate, there's a Flexco product that helps ensure you'll get maximum uptime from your belt line.",
    img: "https://flexco.co.za/Files/Logos/Flexco_logo.svg",
    id: 2,
    link: "https://www.flexco.com/NA/EN/Flexco.htm",
  },
  {
    title: "Scandia USA",
    description:
      "Scandia USA is a leading provider of amusement park and entertainment solutions, offering a wide range of rides, attractions, and themed experiences. With expertise in design, manufacturing, and installation, Scandia USA creates memorable entertainment environments for theme parks, family entertainment centers, and other leisure destinations worldwide. Since its establishment, Scandia USA has been dedicated to delivering high-quality and innovative entertainment solutions that delight visitors of all ages.",
    img: "http://scandiamidwestllc.com/wp-content/uploads/2015/01/logo2.png",
    id: 3,
    link: "https://scandiamidwestllc.com/",
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
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACMAQADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAUGAwQHAQL/xABEEAABAwMBAgcLCwMEAwAAAAABAAIDBAURBiExEhMVQVVxkxZRUmFzkaGxstHSByIyNDZTcoGCksEUI0IzQ+HwNWJj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKYiK00umKKCiiqL3Xf0xl2tY1wGzrOc825BVkVs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0Vs5I0t0tN2jfhTkjS3S03aN+FBU0VubZtLvcGtusuScD+434VJdw1s+/q/3t+FBz9F0DuGtn39X+9vwp3DWz7+r/e34UHP0XQO4a2ff1f72/CncNbPv6v97fhQc/RdA7hrZ9/V/vb8Kdw1s+/q/wB7fhQc/RdA7hrZ9/V/vb8KgNRaYdaIm1FPI6WnzwXFw2tPN+SCvIiICtmvwBWUYAwBEfWqmrZ8oH12k8mfWgqaIiAiIgIiICIiAiIgIiICIiAiIgIiICvGj7+6oxbqx+ZGj+y9x2uHg9ao6+4pXwSslicWSMIc1w3goOxotCy3Ft0tkNSMcIjDwOZw3rfQEREBERAULq8A6bq8jdwPbappQur/ALN1f6Pbag5miIgK2fKB9dpPJn1qpq2fKB9dpPJn1oKmiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgtugq7gVU9E4/NkbxjM+EN/o9SvK5RY6g0t5o5QcYlaCfEdh9BK6ugIiICIiAoXV/wBm6v8AR7bVNKF1f9m6v9HttQczREQFbPlA+u0nkz61U1bPlA+u0nkz60FTREQEREBERAREQEREBERAREQEREBERAREQetcWuDhvByuyrjTGGR7WN3uIAXZUBERAREQFC6v+zdX+j22qaULq/7N1f6Pbag5miIgK2fKB9dpPJn1qpq2fKB9dpPJn1oKmim9IMbJf4WvaHNLX5BGR9Epq+NkeoJ2xsaxvBZsaMD6IQQiIiAiIgIrtZIInaKrJHRMLxHNhxaMj5p51SUBERAREQEREHrWuccNaXHxBCC04cCD3ipTTt0itFxNTMx72mMtwzGduPcte8VrLjdJ6qNrmskIIDt42Afwg0kUncrFWWqmjmrAxvGO4IYHZI2Z28yjEBERBv2GnNVe6OLGQZQ4jvgbT6AurqhaDojLcJqs54MLOCNm9zv+AfOr6gIiICIiAq9rSsghsktM9446ct4DOc4cCT1bFu3y9wWam4cnz5n/AOnEDtPjPeCqVdbKuqtFXe7q9wmcG8THu4ILgN3MMHYPzQVpERAVs+UD67SeTPrVTVs+UD67SeTPrQR+jftFB+F/slTt+tFCbpLcLvV8TTu4LWRsGXSYaP8Au7zKC0b9ooPwv9krLreYyX0sO6KJrR6/5QSVPYLDeIJBa6qVsrBzk7OsEbR1KuUlnqam78m4DJWvLXk7mgbz41JaGkLL4Wjc+FwPoP8AC+ryysOsKlls4wTu4IBYcEZY3O3mCDZrKHTVnm/pav8AqaicAF3BP0fNhfFbp6gq7Q642SV7mxgl7HneBtPNkFezaVkLjNeLxTwTP2kuPCzuG8kKd0/b6egtlVFT10Vax7iS6PGB83dsJQamm4X1GjqiGIZkkbKxozjJIwFDCj07QSGCuqp6mcHgvMTcMYefr9Kl9PzvpdF1E8Zw+MSOae8cbFRCSTknJKCzXHTdPJbRcLJM+ohAy6N212OfHjHeWppuwctTSOleY6aLY4t+kSdwCltATOLq2ndtYQ14Hj2g/wAeZR1vt11kuFbRWyV0MEczmSO4RDNhI29/Yg2D3JMk4kipdg4MwJI6/wDoWvqTT8dsjjrKKQyUkpAHCOS0kZG3nGFndpSkhPAqr7Swyj6TCBs87gpXUcTYNHwxRzCdjOLa2Ru5wHOEETS6do6O2suF8qHxxyY4EUY27RkA+PHN6VsUln0/eWuit1RPDUNGcP27O/g7/wAit0S27VNngp5KptNUxY+acAhwGNx3jq8Sj36Rutvk463VTXvGQCxxjdj1elBpWewsmv8APba8u/tNcSY3b8EYPmK2DbrBSXGtprhUzxCJ7REBk5HBBOcNPOsmkjUHU839aXmoETg/h/Szkb1F6p+0VZ+IeyEF01RDa5qeAXaplgYHngGMZycdRXPa9lLHWytoZHS0wPzHvG0jHUOfxK4/KB9SpPKH1KjIC9aC5wa0EknAA514rVoyyf1M4uNQ3+zE7+0D/k8c/UPX1ILVp+3cl2mGBwAkPz5COdx/6B+SkkRARFjnniponSzyNjjaMlzjgBBkUDfdSQ27NNSgVFa48EMbtDD4/H4lH1V+rr1O6jsEbmsH06h2wgfx61KWPTlPaRxrzx9U7fI4fR/D3utBpWjTss1SLne3mapceE2I7m97PV3twW7q/wCzdX+j22qaUDrKeKOwVET5GiSQtDGk7XYcCfQEHN0REBWz5QPrtJ5M+tVNWz5QPrtJ5M+tBH6N+0UH4X+yU1l9op/ws9kKMoK6a3VbammIEjQQMjI2jCXCumuVU6pqS0yOABLRgbEEvon/AM+zyblZ7c2PuvvDjjjAyIN7+OCM/wAKhW64T2yqFRTFokAI+cMjBWR94rXXN1xbLxdS7GXMGBsAG7qCD28RVYu1SKtj+OdI47QdvV4sK76Wt8tvsUgqGlk0pdIWO3tGMDI5tyro1vdAzg8XTE+FwDn14WlFqa5xOncJmudOcvLm55sbO8gtGl4G1OkpYHuDWycY0uPNkb1R62iqKCodBUxuje042jYfGO+Ft018raW2yUETmcRIHBwLcnDhg7Vs0erLpSQiISMla0AN4xuSB1j+UE7pimNitNVcrh/bEgBa078DOPzJKy20zVWjqh9Dsq5XSPeWnaXcLJ3c/BwPMqjc7zW3ZwNXLljTlrGjDR+XvS13ittL3Gklw130mOGWuQYKahqaupFPBC90pOODjd195XfU8DaXScVODkRGNhwd+NhUBVayutREY2mGDO90TDn0k4WhUXutqbc2gme10LcYyPnbPGgk71pllJQw1ltfLUxO+ludgHcRhZNHNunKUfA44UYB4wPzwMYOMZ5843KLtuobjbGcXBPwouaOQcIDq735LaqtYXWojLGvigB54m4PnJKCxQPifryfisZFNh5HO7Z/GFVdU/aKs/EPZC1Lfc6m21Zqadw40gglwznO9Y62rlr6uSpnxxkhBdgYG7CC766pp6ihpjBC+QMkJdwGk4GOfCoT2OjcWvaWuG8EYKsNq1Leg2Okpo21bmjDQ5hc7HWCNgU1RaYkrqw3G9lpkkIcadmwZ8Z/gIIDTmnZbtKJpg6Ojadrtxf4h710aKJkETIomhkbAGtaNwC9YxsbAxjQ1oGAGjAC+KipgpY+HUzRws773AD0oMq8JAGScAKtVmsYOGYbXTy1c5OGngkNPUN58y147Ve75867VJpaY/7LNhI6vflBuXXVlNSvNPQNNZVE4AZtYD1jf+S04LFcr5I2pvs7o4gctp27MDq5vWp+22eitbMUsIa7G2R21x/NbxIAyTgBBipaSCihENLE2KMf4tHpWUkAZJwAoK56tt1CHNif/VTDZwYz80dbt3myoYxX7U+ONxSUROQCC0EdW93qQSV21bDTvdTW1hqqnPBBaMsB/Lf+ShLhY6zkmqu13mcar5vAZkbMuA297edg3K2Wiw0VpaDAzhzYwZX7XHq7yw6v+zdX+j22oOZoiICvN9t0mpaajrrbJG8Bpa5rjjHP6FRlmgq6mm+r1EsPk3lvqQTXcbdvAh7RO427eBD2ijOWLn0jV9u73pyxc+kavt3e9BJ9xt28CHtE7jbt4EPaKM5YufSNX27venLFz6Rq+3d70En3G3bwIe0TuNu3gQ9oozli59I1fbu96csXPpGr7d3vQSfcbdvAh7RO427eBD2ijOWLn0jV9u73pyxc+kavt3e9BJ9xt28CHtE7jbt4EPaKM5YufSNX27venLFz6Rq+3d70En3G3bwIe0TuNu3gQ9oozli59I1fbu96csXPpGr7d3vQSfcbdvAh7RBoy7E4LYR4zIozli59I1fbu96+XXW4uGHV9U4eOZ3vQT0Gha13+vUwRj/1y4/wpKHR9qo+C+vqnSY3h7xG0/z6VS5K2qlGJKmZ47zpCVgJJOSckoOlsvFhtcPFQVEDGD/GEcLPmzlaU2tqYu4FFST1D9wyMA+bJ7yoKzxVtVC3gxVM0be82QgILianVF1JbDTtoIjs4ThwSPPt8wWSHR8bn8fd6+WokJyQDgZ72TtPoVLdX1jhh1XOR45D71gc5zjlzi4+MoOnwS2SzxlkM1LADvxIC49e3JWtUaxtMOeBJJMR4DD/ADhc4X0yR8Tg6N7mOG4tOCgu51Ndbg4i0WtxZ95ICR/AHnXz3PXm7ua6813AiB/0mYPoGz89qqgu9yAwLhVgD/7O9695YufSNX27veg6JbtPW22gGKASSD/clw53/H5KVXJuWLn0jV9u73pyxc+kavt3e9B1lV3WtZFDZX0xe3jZy3gt58Agk+hUjli59I1fbu961ZZZJnl80jpHn/JxyUHwiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z",
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
      <div className="suppliers__container container">
        {suppliersData.map((supplier, index) => (
          <article className="suppliers__card" key={supplier.id}>
            <span className="suppliers__number">
              {supplier.id}/{lengthOfSuppliers}
            </span>
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
