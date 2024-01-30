import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Partners from "./components/Partners/Partners";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Partners />
      <Footer />
    </>
  );
}

export default Layout;
