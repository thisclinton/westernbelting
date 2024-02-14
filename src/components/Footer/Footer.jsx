import Logo from "../../assets/Western-Belting-Logo-Website.png";
import yearsLogo from "../../assets/years-logo.png";
import "./Footer.css";
import { RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";

const locations = [
  {
    province: "SURREY",
    street: "5510 192 Street,",
    city: "Surrey,",
    postal: "BC V3S 8E5",
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
    city: " Kamloops,",
    postal: "BC V2B 2C8",
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
    city: "Prince George,",
    postal: "BC V2N 2P9",
    number1: "(877) 480-2358 Toll Free",
    number2: "(250) 561-2358 Phone",
    number3: "(250) 562-7406 Fax",
    email: "onlinesales@westernbelting.ca",
    location:
      "https://www.google.com/maps/place/Western+Belting+%26+Hose+Ltd/@53.9006096,-122.7854371,17z/data=!3m1!4b1!4m6!3m5!1s0x5388996b4aaaeb0d:0xab1cfaa85a0446de!8m2!3d53.9006096!4d-122.7854371!16s%2Fg%2F1thq9jpm?entry=ttu",
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
      "https://www.google.com/maps/d/u/0/viewer?mid=1BB5M9Xl1qfUqX-Qbbwsr5K2NQBU&hl=en&ll=50.9821303196227%2C-113.93729280000001&z=18",
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
    location: "",
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title-container">
          <div>
            <img
              src={Logo}
              alt="Western-Belting-Logo"
              className="nav__logo-img"
              loading="lazy"
            />
            <a href="#" className="footer__title">
              Western <span>BELTING</span>
            </a>
          </div>
          <img
            src={yearsLogo}
            alt="number of years logo"
            className="footer__logo-years"
            loading="lazy"
          />

          <div className="footer__socials">
            <span className="footer__socials-text">Follow us on</span>
            <div className="footer__socials-logo">
              <a
                href="https://www.facebook.com/WesternBelting"
                aria-label="Visit our Facebook page"
                target="_blank"
              >
                <RiFacebookCircleFill />
              </a>
              <a
                href="https://ca.linkedin.com/company/western-belting-hose"
                aria-label="visit our LinkedIn Page"
                target="_blank"
              >
                <RiLinkedinBoxFill />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__line"></div>

        <div className="footer__address">
          <span className="footer__head">Our Locations</span>

          <div className="footer__locations">
            {locations.map((location) => (
              <article className="footer__location" key={location.id}>
                <h3 className="footer__location-title">{location.province}</h3>
                <p className="footer__info">{location.street}</p>
                <p className="footer__info">{location.city}</p>
                <p className="footer__info">{location.postal}</p>
                <p className="footer__info">{location.number1}</p>
                <p className="footer__info">{location.number2}</p>
                <p className="footer__info">{location.number3}</p>
                <a href="" className="footer__email">
                  {location.email}
                </a>
              </article>
            ))}

            {/* <ul className="footer__location">
              <li className="footer__location-title">Surrey</li>
              <li className="footer__info">Head Office</li>
              <li className="footer__info">5510 192 Street</li>
              <li className="footer__info">Surrey, BC V3S 8E5</li>
              <li className="footer__info">(866) 451-2358 Toll Free</li>
              <li className="footer__info">(604) 451-4133 Phone</li>
              <li className="footer__info">(604) 451-4166 Fax</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  onlinesales@westernbelting.ca
                </a>
              </li>
            </ul>

            <ul className="footer__location">
              <li className="footer__location-title">Prince George</li>
              <li className="footer__info">3490 Opie Crescent</li>
              <li className="footer__info">Prince George,</li>
              <li className="footer__info">SBC V2N 2P9</li>
              <li className="footer__info">(877) 480-2358 Toll Free</li>
              <li className="footer__info">(250) 561-2358 Phone</li>
              <li className="footer__info">(250) 562-7406 Fax</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  onlinesales@westernbelting.ca
                </a>
              </li>
            </ul>

            <ul className="footer__location">
              <li className="footer__location-title">CALGARY, AB​</li>
              <li className="footer__info">7880 66th Street SE</li>
              <li className="footer__info">Building 2, Unit 106</li>
              <li className="footer__info">Calgary, AB T2C 5V2</li>
              <li className="footer__info">(866) 451-2358 Toll Free</li>
              <li className="footer__info">(604) 451-4133 Phone</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  calgary@westernbelting.ca
                </a>
              </li>
            </ul>

            <ul className="footer__location">
              <li className="footer__location-title">BARRIE, ON​</li>
              <li className="footer__info">220 Bayview Drive</li>
              <li className="footer__info">Unit 15 & 16</li>
              <li className="footer__info">Barrie, ON LYN 4YB</li>
              <li className="footer__info">(905) 251-2125</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  onlinesales@westernbelting.ca
                </a>
              </li>
            </ul>

            <ul className="footer__location">
              <li className="footer__location-title">CALGARY, AB​</li>
              <li className="footer__info">7880 66th Street SE</li>
              <li className="footer__info">Building 2, Unit 106</li>
              <li className="footer__info">Calgary, AB T2C 5V2</li>
              <li className="footer__info">(866) 451-2358 Toll Free</li>
              <li className="footer__info">(604) 451-4133 Phone</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  calgary@westernbelting.ca
                </a>
              </li>
            </ul>

            <ul className="footer__location">
              <li className="footer__location-title">CALGARY, AB​</li>
              <li className="footer__info">7880 66th Street SE</li>
              <li className="footer__info">Building 2, Unit 106</li>
              <li className="footer__info">Calgary, AB T2C 5V2</li>
              <li className="footer__info">(866) 451-2358 Toll Free</li>
              <li className="footer__info">(604) 451-4133 Phone</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  calgary@westernbelting.ca
                </a>
              </li>
            </ul>

            <ul className="footer__location">
              <li className="footer__location-title">CALGARY, AB​</li>
              <li className="footer__info">7880 66th Street SE</li>
              <li className="footer__info">Building 2, Unit 106</li>
              <li className="footer__info">Calgary, AB T2C 5V2</li>
              <li className="footer__info">(866) 451-2358 Toll Free</li>
              <li className="footer__info">(604) 451-4133 Phone</li>
              <li className="footer__info">
                <a href="#" className="footer__email">
                  calgary@westernbelting.ca
                </a>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="footer__line"></div>

        <div className="footer__copyright">© copyright of Western Belting</div>
      </div>
    </footer>
  );
}

export default Footer;
