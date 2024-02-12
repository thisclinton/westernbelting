import "./services.css";
import Transition from "../../transition";
import beltWinding from "../../assets/services/belt-winding.jpg";
import fabricBeltSplicing from "../../assets/services/fabric-belt-splicing.jpg";
import steelCordSplicing from "../../assets/services/steel-cord-splicing.jpg";
import installation from "../../assets/services/installation.jpg";
import conveyorAccessoriesInstallation from "../../assets/services/conveyor-accessories-installation.jpg";
import mechanical from "../../assets/services/mechanical.jpeg";
import pulleyLagging from "../../assets/services/pulley-lagging.jpg";
import { motion } from "framer-motion";

const services = [
  {
    title: "inspection & audit",
    img: "https://www.iclamerica1.com/wp-content/uploads/2014/11/slide_quality-check1.jpg",
    description:
      "Essential for safety and efficiency, ensuring compliance, identifying hazards, and optimizing conveyor systems through thorough assessment and proactive maintenance strategies.",
    id: 1,
  },
  {
    title: "conveyor system scanning",
    img: "https://images.unsplash.com/photo-1701328778019-e95dedbf5346?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Advanced technology diagnoses system performance, identifying wear and inefficiencies, facilitating targeted maintenance to improve conveyor longevity and performance.",
    id: 2,
  },
  {
    title: "fabric belt cover thickness testing",
    img: "https://safety-evo-production.s3.ca-central-1.amazonaws.com/6h8v3qpg3wqh7yw9k2cqtfbrw8bh?response-content-disposition=inline%3B%20filename%3D%22C3%20Gauge%20Scan%2002.02.2024%20img-1a.jpg%22%3B%20filename%2A%3DUTF-8%27%27C3%2520Gauge%2520Scan%252002.02.2024%2520img-1a.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIUHODAYXGXUBMTKA%2F20240209%2Fca-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240209T163008Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=970b2532a7147976499bbe068aa869cd082dd5cf0c3c261dbd3476a2bc08b57e",
    description:
      "Evaluates belt integrity, predicts wear patterns, and ensures durability, minimizing downtime and maximizing efficiency of fabric conveyor belts.",
    id: 3,
  },
  {
    title: "Pulley lagging",
    img: pulleyLagging,
    description:
      "Enhances traction, reduces slippage, and extends belt and pulley life, improving safety and reliability in conveyor systems.",
    id: 4,
  },
  {
    title: "conveyor belt repair",
    img: "https://www.asgco.com/wp-content/uploads/2019/07/ASGCO-Fourthane-3-768x576.jpg",
    description:
      "Restores functionality, prevents downtime, and extends conveyor belt life through patching, splicing, and specialized coatings.",
    id: 5,
  },
  {
    title: "conveyor belting installation",
    img: installation,
    description:
      "Expert alignment, tensioning, and fastening ensure proper positioning and security, maximizing conveyor performance and longevity.",
    id: 6,
  },
  {
    title: "training",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Equips personnel with skills for safe and effective conveyor operation, maintenance, and troubleshooting, enhancing system performance and reducing accidents.",
    id: 7,
  },
  {
    title: "conveyor maintenance services",
    img: "https://www.iclamerica.com/wp-content/uploads/2018/07/Belt-instal-1-700x300.jpg",
    description:
      "Prevents failures, minimizes downtime, and optimizes performance through lubrication, inspection, and component replacement, tailored to specific needs.",
    id: 8,
  },
  {
    title: "steel cord belt splicing",
    img: steelCordSplicing,
    description:
      "Precision technique ensures strong, durable splices for steel cord conveyor belts, minimizing risk of failure and production disruptions.",
    id: 9,
  },
  {
    title: "belt winding",
    img: beltWinding,
    description:
      "Efficient storage and transportation method optimizes space and prevents damage during storage and transit of conveyor belts.",
    id: 10,
  },
  {
    title: "fabric belt splicing",
    img: fabricBeltSplicing,
    description:
      "Expert technique creates secure, durable splices for fabric conveyor belts, ensuring reliability and minimizing downtime.",
    id: 11,
  },
  {
    title: "conveyor accessories installation",
    img: conveyorAccessoriesInstallation,
    description:
      "Enhance functionality, efficiency, and safety with idlers, rollers, cleaners, and guards, optimizing conveyor system performance.",
    id: 12,
  },
  {
    title: "mechanical",
    img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Engineering solutions optimize design, performance, and integration of conveyor systems, ensuring reliability and efficiency in material handling processes.",
    id: 13,
  },
];

function Services() {
  return (
    <>
      <Transition />

      <motion.section
        className="services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container services__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">Our Services</h1>
            <p className="services__description">
              Explore our comprehensive range of specialized services for
              industrial needs.
            </p>
          </div>
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
                <article className="services__card" key={service.id}>
                  <img src={service.img} alt="" className="services__img" />
                  <h3 className="services__title">{service.title}</h3>
                  <span className="services__info">{service.description}</span>
                  <div className="services__shadow"></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Services;
