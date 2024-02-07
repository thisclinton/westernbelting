import Transition from "../../transition";
import About from "../Suppliers/Suppliers";
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
