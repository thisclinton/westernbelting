import { useRef } from "react";
import Transition from "../../transition";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { RiArrowRightUpLine } from "react-icons/ri";

const locations = [
  {
    province: "PRINCE GEORGE",
    street: "3490 Opie Crescent",
    city: "Prince George,",
    postal: "BC V2N 2P9",
    number1: "(877) 480-2358 Toll Free",
    number2: "(250) 561-2358 Phone",
    number3: "(250) 562-7406 Fax",
    email: "onlinesales@westernbelting.ca",
    location:
      "https://www.google.com/maps/place/Western+Belting+%26+Hose+Ltd/@53.9006096,-122.7854371,17z/data=!3m1!4b1!4m6!3m5!1s0x5388996b4aaaeb0d:0xab1cfaa85a0446de!8m2!3d53.9006096!4d-122.7854371!16s%2Fg%2F1thq9jpm?entry=ttu",
    id: 1,
  },

  {
    province: "CALGARY, AB",
    street: "7880 66th Street SE",
    city: "Building 2, Unit 106",
    postal: "Calgary, AB T2C 5V2",
    number1: "(866) 451-2358 Toll Free",
    number2: "(604) 451-4133 Phone",
    number3: "",
    email: "calgary@westernbelting.ca",
    location:
      "https://www.google.com/maps/d/u/0/viewer?mid=1BB5M9Xl1qfUqX-Qbbwsr5K2NQBU&hl=en&ll=50.9821303196227%2C-113.93729280000001&z=18",
    id: 2,
  },

  {
    province: "BARRIE, ON",
    street: "220 Bayview Drive",
    city: "Unit 15 & 16",
    postal: "Barrie, ON LYN 4YB",
    number1: "(905) 251-2125",
    number2: "",
    number3: "",
    email: "onlinesales@westernbelting.ca",
    location: "",
    id: 3,
  },

  {
    province: "ABBOTSFORD, BC",
    street: "",
    city: "",
    postal: "",
    number1: "(604) 968-3963",
    number2: "",
    number3: "",
    email: "RMcBride@westernbelting.ca",
    location: "",
    id: 4,
  },

  {
    province: "VANCOUVER ISLAND, BC",
    street: "",
    city: "",
    postal: "",
    number1: "(250) 327-4109",
    number2: "",
    number3: "",
    email: "onlinesales@westernbelting.ca",
    location: "",
    id: 5,
  },

  {
    province: "KELOWNA, BC​",
    street: "",
    city: "",
    postal: "",
    number1: "(250) 300-8240",
    number2: "",
    number3: "",
    email: "mdeans@westernbelting.ca",
    location: "",
    id: 6,
  },
];

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
        <div className="title__container contact__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">Contact Us</h1>
            <p className="section__description">
              Connect with us! Reach out for inquiries, feedback, or
              collaboration opportunities.
            </p>
          </div>
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
                  loading="lazy"
                />
              </div>
            </article>
          </div>

          <div className="locations__container">
            {locations.map((location) => (
              <article className="location__card" key={location.id}>
                <h3>{location.province}</h3>
                <p>{location.street}</p>
                <p>{location.city}</p>
                <p>{location.postal}</p>
                <p>{location.number1}</p>
                <p>{location.number2}</p>
                <p>{location.number3}</p>
                <a href="" className="location__email">
                  {location.email}
                </a>
                {/* <a
                  href={location.location}
                  className="location__map"
                  target="_blank"
                >
                  View Location
                  <RiArrowRightUpLine className="contact__icon" />
                </a> */}
              </article>
            ))}
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
              <label className="form__label">enter name</label>
              <div className="form__shadow"></div>
            </div>

            <div className="form__box">
              <input
                type="email"
                className="form__input"
                placeholder="Enter Email"
                name="user_email"
              />
              <label className="form__label">enter email</label>
              <div className="form__shadow"></div>
            </div>

            <div className="form__box">
              <input
                type="text"
                className="form__input"
                placeholder="Subject"
              />
              <label className="form__label">subject</label>
              <div className="form__shadow"></div>
            </div>

            <div className="form__box form__message">
              <input
                type="text"
                className="form__input"
                placeholder="Message"
              />
              <label className="form__label">Message</label>
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
