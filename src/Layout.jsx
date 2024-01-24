import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
}

export default Layout;
