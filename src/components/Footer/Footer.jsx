import "./Footer.css";
import Logo from "../../assets/Western-Belting-Logo-Website.png";
import { RiFacebookCircleFill, RiLinkedinBoxFill } from "react-icons/ri";

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
            />
            <a href="#" className="footer__title">
              Western <span>BELTING</span>
            </a>
          </div>

          <div className="footer__socials">
            <span className="footer__socials-text">Follow us on</span>
            <div className="footer__socials-logo">
              <a href="" target="_blank">
                <RiFacebookCircleFill />
              </a>
              <a href="" target="_blank">
                <RiLinkedinBoxFill />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__line"></div>

        <div className="footer__address">
          <span className="footer__head">Our Locations</span>

          <div className="footer__locations">
            <ul className="footer__location">
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
          </div>
        </div>

        <div className="footer__line"></div>

        <div className="footer__copyright">copyright© of Western Belting</div>
      </div>
    </footer>
  );
}

export default Footer;
