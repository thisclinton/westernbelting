import { useRef } from "react";
import Transition from "../../transition";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { RiArrowRightUpLine } from "react-icons/ri";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ti6c5ce", "template_9aij86e", form.current, {
        publicKey: "dFHokw6GgVLju7RVZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Transition />
      <section className="contact">
        <div className="title__container">
          <h1 className="section__title">Contact</h1>
        </div>
        <div className="contact__container">
          <div className="contact__address">
            <article className="contact__card">
              <div className="contact__detail">
                <h2 className="contact__title">Contact Us</h2>
                <p className="contact__description">
                  5510 192 Street, Surrey, BC V3S 8E5 <br />
                  onlinesales@westernbelting.ca <br />
                  Phone: (604) 451-4133
                </p>
                <a
                  href="https://www.google.com/maps?cid=1159887035919818481"
                  className="contact__location"
                  target="_blank"
                >
                  View Office Location
                  <RiArrowRightUpLine className="contact__icon" />
                </a>
              </div>

              <div className="contact__img-container">
                <img
                  src="https://images.unsplash.com/photo-1651672397008-01d088f4a9f6?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="contact__img"
                />
              </div>
            </article>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="contact__form"
          >
            <div className="form__box">
              <input
                type="text"
                className="form__input"
                placeholder="Enter Name"
                name="user_name"
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
                name="user_email"
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
