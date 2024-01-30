import { motion } from "framer-motion";
import "./services.css";
import Transition from "../../transition";

const services = [
  {
    title: "Vulcanizing",
    description:
      "The preferred method of joining two ends of a belt together. With vulcanizing a belt, you attain the longest life possible from that splice.",
    id: 1,
  },
  {
    title: "Pulley Lagging",
    description:
      "Pulley lagging is a protective layer applied to conveyor pulleys, enhancing traction between the belt and pulley surface, reducing slippage, wear, and increasing efficiency.",
    id: 2,
  },
  {
    title: "Lacing",
    description:
      "This is a method of joining conveyor belts using metal or plastic fasteners, ensuring secure and flexible connections, facilitating belt repairs and maintenance in industrial applications.",
    id: 3,
  },
  {
    title: "Tracking",
    description:
      "Tracking in conveyor systems refers to the alignment and adjustment of belts to ensure they run smoothly, preventing misalignment, reducing wear, and optimizing performance in material handling operations.",
    id: 4,
  },
  {
    title: "Stringing",
    description:
      "Stringing in conveyor systems is the process of threading or installing a conveyor belt onto its pulleys, rollers, and idlers, ensuring proper alignment and tension for efficient operation.",
    id: 5,
  },
  {
    title: "Patching",
    description:
      "Patching involves repairing damaged areas on conveyor belts using specialized materials or techniques, extending their lifespan, maintaining operational integrity, and minimizing downtime in industrial settings.",
    id: 6,
  },
  {
    title: "Steel Cable Splicing",
    description:
      "Steel cable splicing is the process of joining individual strands of steel cables to form a continuous loop, ensuring strength and reliability in applications like lifting, rigging, and suspension systems.",
    id: 7,
  },
  {
    title: "Lightweight / Specialty",
    description:
      "Lightweight or specialty conveyor belting refers to belts designed for specific applications such as food processing, packaging, or high-temperature environments, offering flexibility, durability, and customization for specialized industrial needs.",
    id: 8,
  },
];

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
              {services.map((service) => (
                <article class="services__card" key={service.id}>
                  <h3 class="services__title">{service.title}</h3>
                  <span class="services__info">{service.description}</span>
                  <span className="services__btn">Learn More</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
