import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

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
  { title: "products", link: "/products", id: 1 },
  { title: "services", link: "/services", id: 2 },
  { title: "our workshops", link: "/workshop", id: 3 },
  { title: "safety", link: "/safety", id: 4 },
  { title: "about us", link: "/about", id: 5 },
  { title: "blog", link: "/blog", id: 6 },
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
            <Link to="/" className="nav__logo">
              Western <span>BELTING</span>
            </Link>
          </motion.div>

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
                    <Link to={nav.link} className="nav__link">
                      {nav.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="nav__close">
                <RiCloseFill onClick={() => setToggleMenu(false)} />
              </div>
            </div>
          )}

          {/* <div className="nav__contact">
            <Link to="/contact">Contact Us</Link>
          </div> */}

          <div className="nav__toggle">
            <RiMenuFill onClick={() => setToggleMenu(true)} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
