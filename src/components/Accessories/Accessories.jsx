import { motion } from "framer-motion";
import Transition from "../../transition";
import "./accessories.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slider = [
  {
    img: "https://www.iclamerica.com/wp-content/uploads/2014/11/slide_pit11-700x300.jpg",
    title: "Accessory 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresinventore quae praesentium ex consectetur nemo aut.",
    id: 1,
  },
  {
    img: "https://www.iclamerica.com/wp-content/uploads/2015/12/788-700x300.jpg",
    title: "Accessory 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresinventore quae praesentium ex consectetur nemo aut.",
    id: 2,
  },
  {
    img: "https://www.iclamerica.com/wp-content/uploads/2020/08/Scrapers-700x300.jpg",
    title: "Accessory 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresinventore quae praesentium ex consectetur nemo aut.",
    id: 3,
  },
  {
    img: "https://images.pexels.com/photos/14052419/pexels-photo-14052419.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Accessory 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresinventore quae praesentium ex consectetur nemo aut.",
    id: 4,
  },
  {
    img: "https://images.pexels.com/photos/3693017/pexels-photo-3693017.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Accessory 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresinventore quae praesentium ex consectetur nemo aut.",
    id: 5,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "black",
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function Accessories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Transition />
      <motion.section
        className="accessories"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container accessories__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">Accessories</h1>
            <p className="section__description">
              Browse through our product offerings and discover how our conveyor
              belting solutions can streamline your processes, improve
              efficiency, and elevate performance.
            </p>
          </div>
        </div>

        <div className="accessories__container container">
          <article className="accessories__card">
            <img
              src="https://images.pexels.com/photos/6595775/pexels-photo-6595775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="accessories image"
              className="accessories__img"
            />
            <div className="accessories__detail">
              <h2 className="accessories__title">Accessories and components</h2>
              <p className="accessories__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                inventore quae praesentium ex consectetur nemo aut. Quasi
                mollitia corporis enim distinctio veniam, qui nihil corrupti ex
                commodi quae, ipsa doloremque? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Voluptates, minus? Iste nobis odio
                quo optio ipsum quaerat aperiam nisi mollitia quas, labore
                repellendus esse incidunt! Eos ab quo delectus, quae
                voluptatibus est nihil error, repudiandae id, earum magni? Ullam
                laudantium natus et, soluta provident optio eveniet debitis
                dolore ratione cumque.
              </p>
            </div>
          </article>

          <div className="slider__container">
            <Slider {...settings}>
              {slider.map((slide) => (
                <div className="accessories__slider" key={slide.id}>
                  <div className="accessories__slider-container">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="slider__img"
                    />
                    <div className="slider__data">
                      <h2 className="slider__title">{slide.title}</h2>
                      <p className="slider__description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Neque odit libero ipsa consequuntur sunt sint
                        placeat, necessitatibus odio itaque incidunt rem cumque
                        ea, harum illum. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Blanditiis, ipsa alias! Magnam placeat
                        pariatur, quod fugiat aperiam repellat et! Cupiditate.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Accessories;
