import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [nav, setNav] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className={nav ? "header active" : "header"}>
        <nav className="nav">
          <a className="nav__logo">
            Western <span>BELTING</span>
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Products
                </a>
                <ul className="nav__dropmenu">
                  <li>
                    <a href="#">Heavy Duty Belting</a>
                  </li>
                  <li>
                    <a href="#">Hercules Belt Winder</a>
                  </li>
                  <li>
                    <a href="#">Just-In Conveyor Belt Scraper</a>
                  </li>
                  <li>
                    <a href="#">Piranha Plate Protection Products</a>
                  </li>
                </ul>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Services
                </a>

                <ul className="nav__dropmenu">
                  <li>
                    <a href="#">Vulcanizing</a>
                  </li>
                  <li>
                    <a href="#">Pulley Lagging</a>
                  </li>
                  <li>
                    <a href="#">Lacing</a>
                  </li>
                  <li>
                    <a href="#">Tracking</a>
                  </li>
                  <li>
                    <a href="#">Stringing</a>
                  </li>
                  <li>
                    <a href="#">Patching</a>
                  </li>
                  <li>
                    <a href="#">Steel Cable Splicing</a>
                  </li>
                  <li>
                    <a href="#">Lightweight Speciality</a>
                  </li>
                </ul>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Our Workshops
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Safety
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Shop
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__contact">
            <a href="#">Contact Us</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
