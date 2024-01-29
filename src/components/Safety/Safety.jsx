import { motion } from "framer-motion";
import "./safety.css";
import Transition from "../../transition";

function Safety() {
  return (
    <>
      <Transition />
      <section className="safety">
        <div className="title__container">
          <h1 className="section__title">Safety</h1>
          <p className="section__description">
            Explore our safety section for comprehensive guidelines and
            resources. We prioritize safety above all else, ensuring a secure
            environment for all stakeholders.
          </p>
        </div>
        <div className="safety__container">
          <p className="safety__description">
            Western Belting, like most of our customers, has a strong commitment
            to safety. We strongly believe that it is the most important thing
            to us to keep our workers safe. We do this by being proactive with
            safety committees and programs that assure the best in safety. ​ We
            don’t just meet WCB regulations, but we surpass them. We pride
            ourselves on being as safe as we possibly can, both inside or
            facilities and on the job sites. This is proven when looking at our
            WCB man hour rates, they are lower than the industry average by at
            least 30%. ​ Not only do we have strict safety policies, but we make
            sure we meet all requirements by our customers and their safety
            protocols. We make sure our workers have proper training so we are
            able to meet all requirements set by our customers.
          </p>

          <div className="safety__programs">
            <h2 className="safety__programs-title">Programs</h2>
            <p className="safety__programs-description">
              To ensure the safest working enviroment, we continually train our
              employees to make sure they are up to date in safety
              certifications.
            </p>
            <ul className="safety__list">
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Safety;
