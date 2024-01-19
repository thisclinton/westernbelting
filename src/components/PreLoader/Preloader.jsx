import { useEffect, useLayoutEffect, useRef } from "react";
import "./preloader.css";
import gsap from "gsap";
import { preLoaderAnim } from "../Animations";

function Preloader() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    /* let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from([".preloader__title", ".text__container span"], {
        opacity: 0,
        delay: 0.5,
        y: "+=30",
        stagger: 0.5,
      })
        .to([".preloader__title", ".text__container span"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to(
          ".preloader",
          {
            duration: 1.5,
            height: "0vh",
            ease: "Power3.easeOut",
          },
          "-=2"
        );
    }, comp);

    return () => ctx.revert(); */
    preLoaderAnim();
  }, []);

  return (
    <section className="preloader" ref={comp}>
      <div className="text__container">
        <h1 className="preloader__title">Western BELTING</h1>
        <span>Conveyor Belts since 1959</span>
      </div>
    </section>
  );
}

export default Preloader;
