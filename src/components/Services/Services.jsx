import { motion } from "framer-motion";
import "./services.css";
import Transition from "../../transition";

function Services() {
  return (
    <>
      <Transition />

      <section className="services">
        <div className="services__container">
          <div className="title__container">
            <h1 className="section__title">Our Services</h1>
            <p className="services__description">
              we offer the best services you can ever think of
            </p>
          </div>

          <div className="services__detail">
            <p className="services__text">
              To bring a real high quality of support, products and service to a
              wide range of industries is our biggest mission. We take pride in
              offering the following services:
            </p>

            <div className="services__data">
              <article class="services__card">
                <h3 class="services__title">Vulcanizing</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Pulley Lagging</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Lacing</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Tracking</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Stringing</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Patching</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Steel Cable Splicing</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>

              <article class="services__card">
                <h3 class="services__title">Lightweight/Specialty</h3>
                <span class="services__info">
                  The preferred method of joining two ends of a belt together.
                  With vulcanizing a belt, you attain the longest life possible
                  from that splice.
                </span>
                <span className="services__btn">Learn More</span>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
