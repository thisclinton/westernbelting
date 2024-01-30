import Transition from "../../transition";
import "./contact.css";

function Contact() {
  return (
    <>
      <Transition />
      <section className="contact">
        <div className="title__container">
          <h1 className="section__title">Contact Us</h1>
        </div>
        <div className="contact__container">
          <div className="contact__img">
            <img
              src="https://static.wixstatic.com/media/2b8fca_50adb6b7570a44f4922ca2ed0ed0b9a8~mv2_d_2448_3264_s_4_2.jpg/v1/fill/w_920,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_50adb6b7570a44f4922ca2ed0ed0b9a8~mv2_d_2448_3264_s_4_2.jpg"
              alt="contact page image"
            />
          </div>

          <form action="" className="contact__form">
            <div className="form__box">
              <input
                type="text"
                className="form__input"
                placeholder="Enter Name"
              />
              <label htmlFor="" className="form__label">
                enter name
              </label>
              <div className="form__shadow"></div>
            </div>

            <div className="form__box">
              <input
                type="email"
                className="form__input"
                placeholder="Enter Email"
              />
              <label htmlFor="" className="form__label">
                enter email
              </label>
              <div className="form__shadow"></div>
            </div>

            <div className="form__box">
              <input
                type="text"
                className="form__input"
                placeholder="Subject"
              />
              <label htmlFor="" className="form__label">
                subject
              </label>
              <div className="form__shadow"></div>
            </div>

            <div className="form__box form__message">
              <input
                type="text"
                className="form__input"
                placeholder="Message"
              />
              <label htmlFor="" className="form__label">
                Message
              </label>
              <div className="form__shadow"></div>
            </div>

            <button className="btn form__btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
