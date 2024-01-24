import About from "../About/About";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Preloader from "../PreLoader/Preloader";

function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default Home;
