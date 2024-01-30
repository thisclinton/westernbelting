import Transition from "../../transition";
import About from "../About/About";
import Partners from "../Partners/Partners";
import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";

function Home() {
  return (
    <>
      <Transition />
      <Hero />
      <About />
      <Gallery />
    </>
  );
}

export default Home;
