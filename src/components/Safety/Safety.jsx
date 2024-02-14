import { motion } from "framer-motion";
import "./safety.css";
import Transition from "../../transition";
import safetyCulture from "../../assets/safety/safety-culture.svg";
import safetyEquipment from "../../assets/safety/safety-equipment.svg";
import safetyProtocols from "../../assets/safety/safety-protocols.svg";
import education from "../../assets/safety/education.svg";
import incident from "../../assets/safety/incident.svg";
import communication from "../../assets/safety/communication.svg";
import risk from "../../assets/safety/risk.svg";
import improvement from "../../assets/safety/improvement.svg";
import safetySVG from "../../assets/safety/safety.png";

const safetyProgram = [
  {
    title: "safety culture",
    svg: safetyCulture,
    description:
      "At Western Belting, safety isn't just a priority – it's a core value ingrained in everything we do. We foster a culture of safety consciousness among our team members, encouraging open communication, proactive hazard identification, and continuous improvement in safety practices.",
    id: 1,
  },
  {
    title: "Training and education",
    svg: education,
    description:
      "We invest in the ongoing training and education of our employees to ensure they are equipped with the knowledge and skills necessary to perform their duties safely. From regular safety meetings to specialized training sessions, we prioritize the development of our team's safety competencies.",
    id: 2,
  },
  {
    title: "Safety protocols and procedures",
    svg: safetyProtocols,
    description:
      "Our website safety program encompasses a set of robust protocols and procedures designed to mitigate risks and prevent accidents. From proper equipment usage to emergency response protocols, every aspect of our operations is governed by strict safety guidelines.",
    id: 3,
  },
  {
    title: "risk assessment and management",
    svg: risk,
    description:
      "We conduct thorough risk assessments for each project, identifying potential hazards and implementing measures to control and mitigate risks. Our proactive approach to risk management ensures that safety remains at the forefront of our operations at all times.",
    id: 4,
  },
  {
    title: "safety equipment and gear",
    svg: safetyEquipment,
    description:
      "We provide our employees with access to high-quality safety equipment and gear, including personal protective equipment (PPE) and specialized tools designed to enhance workplace safety. We ensure that our team members have the resources they need to perform their jobs safely and effectively.",
    id: 5,
  },
  {
    title: "continuous improvement",
    svg: improvement,
    description:
      "Safety is an ongoing journey, and we are committed to continuously improving our safety program. We regularly review our processes, solicit feedback from our employees and clients, and implement enhancements to further enhance safety performance.",
    id: 6,
  },
  {
    title: "Reporting and Incident Management",
    svg: incident,
    description:
      "In the event of an incident or near-miss, we have established protocols for reporting and incident management. Our goal is to learn from every experience and take proactive measures to prevent similar incidents from occurring in the future.",
    id: 7,
  },
  {
    title: "client communication",
    svg: communication,
    description:
      "We believe in transparent communication with our clients regarding safety matters. We keep our clients informed about our safety program, address any safety concerns they may have, and collaborate with them to ensure that safety remains a shared priority throughout the duration of our services.",
    id: 8,
  },
];

function Safety() {
  return (
    <>
      <Transition />
      <motion.section
        className="safety"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container safety__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">health & Safety</h1>
            <p className="section__description">
              Explore our safety section for comprehensive guidelines and
              resources. We prioritize safety above all else, ensuring a secure
              environment for all stakeholders.
            </p>
          </div>
        </div>
        <div className="safety__container container">
          <div className="hero-img-container">
            <img
              src={safetySVG}
              alt=""
              className="products__hero-img img__hero"
            />
          </div>
          <p className="safety__description">
            Western Belting, like most of our customers, has a strong commitment
            to safety. We strongly believe that it is the most important thing
            to us to keep our workers safe. We do this by being proactive with
            safety committees and programs that assure the best in safety. ​ We
            don't just meet WCB regulations, but we surpass them. We pride
            ourselves on being as safe as we possibly can, both inside or
            facilities and on the job sites. This is proven when looking at our
            WCB man hour rates, they are lower than the industry average by at
            least 30%. Not only do we have strict safety policies, but we make
            sure we meet all requirements by our customers and their safety
            protocols. We make sure our workers have proper training so we are
            able to meet all requirements set by our customers.
          </p>

          <div className="safety__programs">
            <p className="safety__programs-description">
              That's why we have implemented a comprehensive safety program to
              ensure the well-being of everyone involved in our services.
            </p>

            <div className="safety__box">
              {safetyProgram.map((safety) => (
                <article className="safety__card" key={safety.id}>
                  <div className="safety__shadow"></div>
                  <img
                    src={safety.svg}
                    alt={safety.title}
                    className="safety__img"
                  />
                  <h3 className="safety__title">{safety.title}</h3>
                  <p className="safety__detail">{safety.description}</p>
                </article>
              ))}
            </div>

            {/* <ul className="safety__list">
              <li className="safety__item">
                Monthly Safety Meetings and Discussion
              </li>
              <li className="safety__item">Fall Arrest Certification</li>
              <li className="safety__item">Level 1 First Aid Training</li>
              <li className="safety__item">Forklift Certification</li>
              <li className="safety__item">
                Face Respirator Fitting Certification
              </li>
              <li className="safety__item">Customer Safety In-Doc Training</li>
            </ul> */}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Safety;
