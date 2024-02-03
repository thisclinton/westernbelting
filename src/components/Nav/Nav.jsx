import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 1.3,
      delay: 4,
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
  { title: "shop", link: "/shop", id: 5 },
  { title: "about us", link: "/about", id: 6 },
  { title: "blog", link: "/blog", id: 7 },
];

function Nav() {
  const [nav, setNav] = useState(false);

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

          <div className="nav__menu">
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
          </div>

          <div className="nav__contact">
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
