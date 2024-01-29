import Transition from "../../transition";
import "./aboutus.css";

function AboutUs() {
  return (
    <>
      <Transition />
      <section className="about">
        <div className="title__container">
          <h1 className="section__title">About Us</h1>
          <p className="section__description"></p>
        </div>

        <div className="about__container">
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
              <img
                src="https://static.wixstatic.com/media/2b8fca_edb703d3cba746cfbb37bbce2bd5b937~mv2.jpg/v1/crop/x_40,y_0,w_403,h_480/fill/w_483,h_576,al_c,lg_1,q_80,enc_auto/Pic-A.jpg"
                alt="about us image"
                className="about__img"
              />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
