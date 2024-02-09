import { motion } from "framer-motion";
import Transition from "../../transition";
import "./aboutus.css";

function AboutUs() {
  return (
    <>
      <Transition />
      <motion.section
        className="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container">
          <h1 className="section__title">About Us</h1>
          <p className="section__description"></p>
        </div>

        <div className="about__container container">
          <p className="about__description">
            Western Belting Canada is a premier provider of conveyor belting
            solutions, catering to a diverse range of industries across Canada
            and beyond. With decades of experience in the field, we have
            established ourselves as a trusted partner for businesses seeking
            top-quality belting products and exceptional service. <br /> <br />
            At Western Belting Canada, we prioritize customer satisfaction above
            all else. We understand the critical role that conveyor systems play
            in the efficiency and productivity of industrial operations. That's
            why we are committed to delivering solutions that not only meet but
            exceed our customers' expectations. Our extensive product range
            includes conveyor belts designed for various applications, from
            heavy-duty mining operations to specialized manufacturing processes.
            We source our materials from leading manufacturers worldwide,
            ensuring the highest standards of quality and performance. What sets
            us apart is our dedication to personalized service and technical
            expertise. Our team of experienced professionals works closely with
            customers to understand their unique requirements and provide
            tailored solutions to meet their needs. Whether it's recommending
            the right belting product or providing on-site installation and
            maintenance services, we go above and beyond to ensure our
            customers' success.
          </p>
          <article className="about__card">
            <div className="about__data">
              <h3>About us</h3>
              <p>
                Western Belting Ltd was established in 1959 with one mission: to
                bring a real high quality of support, products and service to
                the industry. Our passion for excellence is what inspired us in
                the beginning and it continues to drive us today. We pride
                ourselves in the superior experience in Conveyor, Material
                Handling and in the long-term relationships we’ve built with our
                customers. ​ People come back to Western Belting Ltd because
                they know they’ll find what they’re looking for, if they don’t,
                we’ll help them find it!
              </p>
            </div>
            <div className="about__img-container">
              <div className="about__img-shadow"></div>
              <img
                src="https://static.wixstatic.com/media/2b8fca_edb703d3cba746cfbb37bbce2bd5b937~mv2.jpg/v1/crop/x_40,y_0,w_403,h_480/fill/w_483,h_576,al_c,lg_1,q_80,enc_auto/Pic-A.jpg"
                alt="about us image"
                className="about__img"
              />
            </div>
          </article>

          <p className="about__description">
            At Western Belting , our operations align with ISO:9001 principles,
            resulting in heightened customer satisfaction, enhanced performance,
            and improved consistency in our conveyor belt systems. Each team
            member comprehends their role and actively contributes to our
            processes. Emphasizing our commitment to product and service
            excellence, we prioritize understanding our customers' needs.
            Through our ongoing improvement initiatives, we strive to elevate
            our QA/QC system to surpass customer expectations in both cost and
            quality. We are devoted to delivering top-notch products and
            services, ensuring prompt and cost-effective delivery tailored to
            our customers' specifications. To achieve this, we hold our
            suppliers to rigorous quality management standards. Our suppliers
            undergo evaluation according to ISO 90001:2015 requirements and
            adhere to CSA (Canadian Standards Association) standards, upholding
            the highest quality benchmarks throughout our supply chain.
          </p>

          <h2 className="mission__title" data-name>
            Our Mission
          </h2>
          <p className="mission__description about__description">
            At Western Belting, our mission is to revolutionize conveyor
            solutions by prioritizing cutting-edge technology, exceptional
            quality, and unwavering commitment to client success. We aim to
            exceed industry standards, fostering innovation, sustainability, and
            safety in every aspect of our operations. Through collaborative
            partnerships and a relentless pursuit of excellence, we strive to
            empower our clients to achieve their goals while contributing
            positively to the communities we serve.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default AboutUs;
