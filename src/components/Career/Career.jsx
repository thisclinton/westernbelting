import "./career.css";
import { motion } from "framer-motion";
import Transition from "../../transition";
import careerBG from "../../assets/backgrounds/career-bg.jpeg";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";

function Career() {
  return (
    <>
      <Transition />
      <motion.section
        className="career"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container career__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">Careers and Opportunities</h1>
            <p className="section__description">
              Shape the Future of Conveyor Belt Technology: Join Western Belting
              Ltd for Exciting Career Opportunities
            </p>
          </div>
        </div>

        <div className="career__container">
          <h2 className="career__title">
            Join Our Team: Career Opportunities at Western Belting Ltd
          </h2>

          <p className="career__description">
            Explore exciting career opportunities with Western Belting Ltd, a
            trusted leader in conveyor belt solutions. Join our dynamic team and
            contribute to innovative projects in the fields of manufacturing,
            engineering, sales, and operations. Whether you're an experienced
            professional or just starting your career journey, Western Belting
            offers a supportive work environment, opportunities for growth, and
            competitive benefits. Discover your potential with Western Belting
            Ltd and be part of shaping the future of conveyor belt technology.
            Apply now and embark on a rewarding career path with us.
          </p>

          <div className="career__contact">
            <Link to="/contact" className="career__contact-btn">
              Contact Us
              <RiArrowRightUpLine className="career__icon" />
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Career;
