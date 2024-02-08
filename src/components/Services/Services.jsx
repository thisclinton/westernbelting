import { motion } from "framer-motion";
import "./services.css";
import Transition from "../../transition";

const services = [
  {
    title: "inspection & audit",
    description:
      "Essential for safety and efficiency, ensuring compliance, identifying hazards, and optimizing conveyor systems through thorough assessment and proactive maintenance strategies.",
    id: 1,
  },
  {
    title: "conveyor system scanning",
    description:
      "Advanced technology diagnoses system performance, identifying wear and inefficiencies, facilitating targeted maintenance to improve conveyor longevity and performance.",
    id: 2,
  },
  {
    title: "fabric belt cover thickness testing",
    description:
      "Evaluates belt integrity, predicts wear patterns, and ensures durability, minimizing downtime and maximizing efficiency of fabric conveyor belts.",
    id: 3,
  },
  {
    title: "Pulley lagging",
    description:
      "Enhances traction, reduces slippage, and extends belt and pulley life, improving safety and reliability in conveyor systems.",
    id: 4,
  },
  {
    title: "conveyor belt repair",
    description:
      "Restores functionality, prevents downtime, and extends conveyor belt life through patching, splicing, and specialized coatings.",
    id: 5,
  },
  {
    title: "conveyor belting installation",
    description:
      "Expert alignment, tensioning, and fastening ensure proper positioning and security, maximizing conveyor performance and longevity.",
    id: 6,
  },
  {
    title: "training",
    description:
      "Equips personnel with skills for safe and effective conveyor operation, maintenance, and troubleshooting, enhancing system performance and reducing accidents.",
    id: 7,
  },
  {
    title: "conveyor maintenance services",
    description:
      "Prevents failures, minimizes downtime, and optimizes performance through lubrication, inspection, and component replacement, tailored to specific needs.",
    id: 8,
  },
  {
    title: "steel cord belt splicing",
    description:
      "Precision technique ensures strong, durable splices for steel cord conveyor belts, minimizing risk of failure and production disruptions.",
    id: 9,
  },
  {
    title: "belt winding",
    description:
      "Efficient storage and transportation method optimizes space and prevents damage during storage and transit of conveyor belts.",
    id: 10,
  },
  {
    title: "fabric belt splicing",
    description:
      "Expert technique creates secure, durable splices for fabric conveyor belts, ensuring reliability and minimizing downtime.",
    id: 11,
  },
  {
    title: "conveyor accessories",
    description:
      "Enhance functionality, efficiency, and safety with idlers, rollers, cleaners, and guards, optimizing conveyor system performance.",
    id: 12,
  },
  {
    title: "mechanical",
    description:
      "Engineering solutions optimize design, performance, and integration of conveyor systems, ensuring reliability and efficiency in material handling processes.",
    id: 13,
  },
];

function Services() {
  return (
    <>
      <Transition />

      <section className="services">
        <div className="title__container">
          <h1 className="section__title">Our Services</h1>
          <p className="services__description">
            Explore our comprehensive range of specialized services for
            industrial needs.
          </p>
        </div>
        <div className="services__container">
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
                  <div className="services__shadow"></div>
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
