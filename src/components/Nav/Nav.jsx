import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import Logo from "../../assets/Western-Belting-Logo-Website.png";

const navVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.35,
      duration: 1.5,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const navLinksVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const navs = [
  { title: "about", link: "/about", id: 1 },
  { title: "products", link: "/products", id: 2 },
  { title: "services", link: "/services", id: 3 },
  { title: "health & safety", link: "/safety", id: 4 },
  { title: "industries", link: "/industries", id: 5 },
  { title: "news", link: "/blog", id: 6 },
];

function Nav() {
  const [nav, setNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className={nav ? "header active" : "header"}>
        <nav className="nav">
          <motion.div
            className="nav__logo-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.7, delay: 4 } }}
          >
            <img
              src={Logo}
              alt="Western-Belting-Logo"
              className="nav__logo-img"
            />
            <Link to="/" className="nav__logo">
              Western <span>BELTING</span>
            </Link>
          </motion.div>

          <motion.ul
            className="nav__list nav__large"
            variants={navVariants}
            initial="hidden"
            animate="show"
          >
            {navs.map((nav) => (
              <motion.li
                className="nav__item"
                key={nav.id}
                variants={navLinksVariants}
              >
                <Link to={nav.link} className="nav__link">
                  {nav.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {toggleMenu && (
            <div className="nav__menu show__menu">
              <motion.ul
                className="nav__list"
                variants={navVariants}
                initial="hidden"
                animate="show"
              >
                {navs.map((nav) => (
                  <motion.li
                    className="nav__item"
                    key={nav.id}
                    variants={navLinksVariants}
                  >
                    <Link
                      to={nav.link}
                      className="nav__link"
                      onClick={() => setToggleMenu(false)}
                    >
                      {nav.title}
                    </Link>
                  </motion.li>
                ))}

                <div
                  className="nav__contact"
                  onClick={() => setToggleMenu(false)}
                >
                  <Link to="/contact">Contact Us</Link>
                </div>
              </motion.ul>

              <div className="nav__close">
                <RiCloseFill onClick={() => setToggleMenu(false)} />
              </div>
            </div>
          )}

          <div className="nav__contact nav__contact-large">
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="nav__toggle">
            <RiMenuFill onClick={() => setToggleMenu(true)} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
