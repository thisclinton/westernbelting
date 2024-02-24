import { useRef } from "react";
import Transition from "../../transition";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { RiArrowRightUpLine } from "react-icons/ri";
import contactSVG from "../../assets/contact/contact.png";

const locations = [
  {
    province: "SURREY",
    street: "5510 192 Street,",
    city: "",
    postal: "Surrey, BC V3S 8E5",
    number1: "(866) 451-2358 Toll Free",
    number2: "(604) 451-4133 Phone",
    number3: "(604) 451-4166 Fax",
    email: "onlinesales@westernbelting.ca",
    location: "https://www.google.com/maps?cid=1159887035919818481",
    id: 1,
  },

  {
    province: "KAMLOOPS",
    street: "630 Kingston Ave,",
    city: "",
    postal: "Kamloops, BC V2B 2C8",
    number1: "1-866-451-2358 Toll Free",
    number2: "(604) 451-4133 Phone",
    number3: "(604) 451-4166 Fax",
    email: "onlinesales@westernbelting.ca",
    location:
      "https://www.google.com/maps/place/630+Kingston+Ave,+Kamloops,+BC+V2B+2C8,+Canada/@50.7118439,-120.3604259,17z/data=!3m1!4b1!4m6!3m5!1s0x537e2d31fc64da13:0x634b8da1c728e3f6!8m2!3d50.7118405!4d-120.357851!16s%2Fg%2F11c0r5s0g8?entry=ttu",
    id: 2,
  },

  {
    province: "PRINCE GEORGE",
    street: "3490 Opie Crescent",
    city: "",
    postal: "Prince George, BC V2N 2P9",
    number1: "(877) 480-2358 Toll Free",
    number2: "(250) 561-2358 Phone",
    number3: "(250) 562-7406 Fax",
    email: "onlinesales@westernbelting.ca",
    location:
      "https://www.google.com/maps/place/3490+Opie+Crescent,+Prince+George,+BC+V2N+2P9,+Canada/@53.9006097,-122.7854234,17z/data=!3m1!4b1!4m6!3m5!1s0x5388996b3559ce47:0x6ea5ae23d93359e7!8m2!3d53.9006097!4d-122.7854234!16s%2Fg%2F11c2bb9z82?entry=ttu",
    id: 3,
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
      "https://www.google.com/maps/place/7880+66+St+SE,+Calgary,+AB+T2C+5V2,+Canada/@50.9822984,-113.9398601,17z/data=!4m14!1m7!3m6!1s0x5371798777c228a1:0xc022e8d830a96d68!2s7880+66+St+SE+Building+2,+Unit+106,+Calgary,+AB+T2C+5V2,+Canada!3b1!8m2!3d50.9822984!4d-113.9372852!3m5!1s0x5371798777c228a1:0xaa6c48288595b746!8m2!3d50.9822933!4d-113.9373016!16s%2Fg%2F11spx53p0w?entry=ttu",
    id: 4,
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
    location:
      "https://www.google.com/maps/place/220+Bayview+Dr+%2315,+Barrie,+ON+L4N+4Y8,+Canada/@44.3580296,-79.6858189,19z/data=!4m9!1m2!2m1!1s220+Bayview+Drive++Unit+15+%26+16++Barrie,+ON+LYN+4YB!3m5!1s0x882abce5789f7bff:0x7de9053b1653497c!8m2!3d44.357977!4d-79.6844402!15sCjMyMjAgQmF5dmlldyBEcml2ZSAgVW5pdCAxNSAmIDE2ICBCYXJyaWUsIE9OIExZTiA0WUKSARBjb21wb3VuZF9zZWN0aW9u4AEA?entry=ttu",
    id: 5,
  },

  {
    province: "Calgary, AB",
    street: "Unit 16, 261024 Dwight McLellan Trail",
    city: "",
    postal: "Rockyview County, AB  T4A 0T5",
    number1: "(403) 731-7474",
    number2: "",
    number3: "",
    email: "onlinesales@westernbelting.ca",
    location:
      "https://www.google.com/maps/place/261024+Dwight+McLellan+Trail+%2316,+Calgary,+AB+T4A+0T5,+Canada/@51.199393,-113.975217,17z/data=!3m1!4b1!4m6!3m5!1s0x53716055a93fa2eb:0x4db066363a8706f3!8m2!3d51.199393!4d-113.975217!16s%2Fg%2F11j4qwlvx1?entry=ttu",
    id: 6,
  },

  {
    province: "ST. Albert, AB",
    street: "300, 25 Corriveau Avenue",
    city: "",
    postal: "St. Albert, AB, T8N 5A3 Canada",
    number1: "(780) 544-9209",
    number2: "",
    number3: "",
    email: "onlinesales@westernbelting.ca",
    location:
      "https://www.google.com/maps/place/25+Corriveau+Ave+%23300,+St.+Albert,+AB+T8N+5A3,+Canada/@53.6431061,-113.5780009,17z/data=!3m1!4b1!4m5!3m4!1s0x53a025dcc9838581:0x5ae9a04a8cd274!8m2!3d53.6431029!4d-113.575426?entry=ttu",
    id: 7,
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
    location: "https://www.google.com/maps?cid=1159887035919818481",
    id: 8,
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
    location: "https://www.google.com/maps?cid=1159887035919818481",
    id: 9,
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
    location: "https://www.google.com/maps?cid=1159887035919818481",
    id: 10,
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
          <div className="hero-img-container">
            <img
              src={contactSVG}
              alt=""
              className="products__hero-img img__hero"
            />
          </div>

          <div className="career">
            <h2 className="career__title">
              Shape the Future of Conveyor Belt Technology: Join Western Belting
              Ltd for Exciting Career Opportunities
            </h2>
            <p className="career__description">
              Explore exciting career opportunities with Western Belting Ltd, a
              trusted leader in conveyor belt solutions. Join our dynamic team
              and contribute to innovative projects in the fields of
              manufacturing, engineering, sales, and operations. Whether you're
              an experienced professional or just starting your career journey,
              Western Belting offers a supportive work environment,
              opportunities for growth, and competitive benefits. Discover your
              potential with Western Belting Ltd and be part of shaping the
              future of conveyor belt technology. Apply now and embark on a
              rewarding career path with us.
            </p>
            <p className="career__contact">
              Contact us below for open opportunities
            </p>
          </div>

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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.142365507712!2d-122.9695767!3d49.216827099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676360ca8f6e5%3A0x1018bf1d2394def1!2sWestern%20Belting%20%26%20Hose!5e0!3m2!1sen!2sng!4v1708785534957!5m2!1sen!2sng"
                  width="100%"
                  height="600"
                  loading="async"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
                <a
                  href={location.location}
                  className="location__map"
                  target="_blank"
                >
                  View Location
                  <RiArrowRightUpLine className="contact__icon" />
                </a>
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
