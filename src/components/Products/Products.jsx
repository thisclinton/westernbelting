import { Link } from "react-router-dom";
import "./product.css";
import { motion } from "framer-motion";
import Transition from "../../transition";
import { RiArrowRightUpLine } from "react-icons/ri";
import conveyorBeltWinder1 from "../../assets/products/conveyor-belt-winder-1.jpg";
import conveyorBeltWinder2 from "../../assets/products/conveyor-belt-winder-2.jpg";
import conveyorBeltWinder3 from "../../assets/products/conveyor-belt-winder-3.jpg";
import heavyDutyBelt1 from "../../assets/products/heavy-duty-belt-1.jpg";
import heavyDutyBelt2 from "../../assets/products/heavy-duty-belt-2.jpg";
import lightDutySVG from "../../assets/products/light-duty.svg";
import heavyDutySVG from "../../assets/products/heavy-duty.svg";
import accessoriesSVG from "../../assets/products/accesories-svg.png";
import winderSVG from "../../assets/products/winder-svg.png";
import production from "../../assets/products/production.png";

function Products() {
  return (
    <>
      <Transition />
      <motion.section
        className="products"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.65,
        }}
      >
        <div className="title__container products__header">
          <div className="overlay"></div>
          <div className="title__front">
            <h1 className="section__title">Products</h1>
            <p className="section__description">
              Browse through our product offerings and discover how our conveyor
              belting solutions can streamline your processes, improve
              efficiency, and elevate performance.
            </p>
          </div>
        </div>
        <div className="products__container">
          <div className="hero-img-container">
            <img
              src={production}
              alt=""
              className="products__hero-img img__hero"
            />
          </div>
          <p className="products__intro">
            Understanding the classification of conveyor belts allows
            <span className="products__intro-bold"> Western Belting </span>
            Specialist to select the most appropriate belt for their specific
            needs, ensuring optimal performance, efficiency, and safety in
            material handling operations.
          </p>

          <div className="products__components">
            <p className="products__card">
              Conveyor belts are crucial components in various industries,
              facilitating the efficient movement of materials and products
              along manufacturing and distribution processes. These belts come
              in a variety of classifications, each tailored to specific
              applications and operating conditions. Understanding the
              classification of conveyor belts is essential for selecting the
              most suitable option for your needs. this includes material
              composition, belt structure, surface properties and application.
              With consideration to this classification, Western Belting carries
              a wide range of products for specific needs, ensuring optimal
              performance, efficiency, and safety in material handling
              operations.
            </p>

            <div className="components__container">
              <img src={lightDutySVG} alt="" className="components__svg" />
              <h3 className="components__title">Light Weight Belt </h3>
              <p className="components__description">
                Lightweight conveyor belts are designed for applications with
                lower loads and less demanding operating conditions. They are
                typically used in industries such as food processing, packaging,
                and light manufacturing. These belts are characterized by their
                flexibility, smooth surface, and ease of installation.
                Lightweight belts are often made from materials such as PVC,
                polyurethane, or rubber, and they may feature fabric
                reinforcement for added strength. Examples of lightweight belt
                applications include conveying packaged goods, sorting and
                inspection processes, and transporting lightweight materials.
              </p>

              <div className="components__img-container">
                <img
                  src="https://www.asgco.com/wp-content/uploads/2020/04/ASGCO-Conveyor-Belting-Light-Duty-PERFORATION-CAPABILITIES-1.jpg"
                  alt="light weight conveyor belt 1"
                  className="components__img"
                  loading="lazy"
                />

                <img
                  src="https://cdn.pixabay.com/photo/2016/01/13/14/16/factory-1137993_1280.jpg"
                  alt="light weight conveyor belt 2"
                  className="components__img"
                  loading="lazy"
                />

                <img
                  src="https://www.iclamerica.com/wp-content/uploads/2020/08/Sample-Book-2-700x300.jpg"
                  alt="light weight conveyor belt 3"
                  className="components__img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="components__container">
              <img src={heavyDutySVG} alt="" className="components__svg" />
              <h3 className="components__title">Heavy Duty Belt</h3>
              <p className="components__description">
                Heavy-duty conveyor belts are engineered to withstand high
                loads, abrasive materials, and harsh operating environments.
                They are commonly used in industries such as mining,
                construction, and bulk material handling. Heavy-duty belts are
                characterized by their rugged construction, high tensile
                strength, and resistance to impact and wear. These belts may
                feature reinforced fabric layers, steel cords, or specialized
                rubber compounds to enhance durability and longevity. Heavy-duty
                belts are employed in applications such as ore and aggregate
                transport, heavy machinery feeding, and industrial processing
                operations.
              </p>

              <div className="components__img-container">
                <img
                  src={heavyDutyBelt1}
                  alt="heavy duty conveyor belt"
                  className="components__img"
                  loading="lazy"
                />
                <img
                  src={heavyDutyBelt2}
                  alt="heavy duty conveyor belt"
                  className="components__img"
                  loading="lazy"
                />

                <img
                  src="https://cdn.pixabay.com/photo/2018/06/12/18/42/conveyor-belt-3471181_1280.jpg"
                  alt="heavy duty conveyor belt"
                  className="components__img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="components__container">
              <img src={accessoriesSVG} alt="" className="components__svg" />
              <h3 className="components__title">
                Conveyor Systems Accessories
              </h3>
              <p className="components__description">
                Conveyor systems accessories play a critical role in enhancing
                the performance, reliability, and safety of conveyor belt
                systems across various industries. These components are
                carefully selected and integrated into conveyor systems to
                optimize material handling processes and maximize operational
                efficiency. These accessories include:
                <span>
                  <span>Idlers</span>
                  Support and guide the conveyor belt along the conveyor frame,
                  reducing friction and wear.
                </span>
                <span>
                  <span>Rollers</span>
                  Provide support and facilitate smooth movement of conveyed
                  materials along the conveyor path.
                </span>
                <span>
                  <span>Pulleys</span>
                  Transmit power and tension to the conveyor belt, facilitating
                  its movement and direction.
                </span>
                <span>
                  <span>Belt cleaners</span>
                  Remove debris, spills, and buildup from the conveyor belt
                  surface to maintain cleanliness and prevent material
                  carryback.
                </span>
                <span>
                  <span>Skirting and sealing systems</span>
                  Seal the conveyor belt edges to prevent spillage and contain
                  material on the conveyor.
                </span>
                <span>
                  <span>Tracking devices</span>
                  Ensure proper alignment and tracking of the conveyor belt to
                  prevent misalignment and reduce wear.
                </span>
                <span>
                  <span>Impact beds and bars</span>
                  Absorb impact and cushion conveyed materials to reduce damage
                  to the conveyor belt and components.
                </span>
              </p>

              <div className="components__img-container">
                <img
                  src="https://www.asgco.com/wp-content/uploads/2019/07/TT_Flat-Return_Gallery-5_web.jpg"
                  alt="heavy duty conveyor belt"
                  className="components__img"
                  loading="lazy"
                />
                <img
                  src="https://www.asgco.com/wp-content/uploads/2021/10/ASGCO-Grizzly-Screw-Splice_Application-19-web.jpg"
                  alt="heavy duty conveyor belt"
                  className="components__img"
                  loading="lazy"
                />
                <img
                  src="https://www.asgco.com/wp-content/uploads/2019/07/ASGCO-Super-Skalper-HD_7-1.jpg"
                  alt="heavy duty conveyor belt"
                  className="components__img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="components__container">
              <img src={winderSVG} alt="" className="components__svg" />
              <h3 className="components__title">Conveyor Belt Winder</h3>
              <p className="components__description">
                Conveyor belt winder is an essential tool for safely handling
                and managing conveyor belts, streamlining maintenance and
                installation processes while ensuring the safety of operators
                and personnel involved in belt handling operations. Our Conveyor
                Belt Winder earns its name proudly! The Hercules mythical
                ability to manage a 72" wide x 1000 ft Roll with weights ranging
                from 15,000 Lbs to 19,000 Lbs this winder exceeds expectations.
                The Scandia USA Midwest LLC Team. With years of experience
                developing this winder with not only maximum performance
                ability, The robust construction of it to last the riggers of
                time and heavy use.
              </p>
              <div className="components__img-container">
                <img
                  src={conveyorBeltWinder1}
                  alt=""
                  className="components__img"
                  loading="lazy"
                />

                <img
                  src={conveyorBeltWinder2}
                  alt=""
                  className="components__img"
                  loading="lazy"
                />

                <img
                  src={conveyorBeltWinder3}
                  alt=""
                  className="components__img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* <div className="products__card">
            <div className="product">
              <img
                src="https://static.wixstatic.com/media/16e0a7_721a699f203042d180da48c53c469141~mv2.jpg/v1/fill/w_452,h_567,fp_0.50_0.50,q_80,enc_auto/16e0a7_721a699f203042d180da48c53c469141~mv2.jpg"
                alt=""
                className="product__img"
              />
              <span className="product__title">Light Duty Conveyor Belts</span>
              <Link to="/products/lightdutyconveyor" className="product__more">
                Learn More
              </Link>

              <div className="product__shadow"></div>
            </div>

            <div className="product">
              <img
                src="https://static.wixstatic.com/media/373325_82b2f1e9b4d742f6b2b0a8102d895906~mv2.jpg/v1/fill/w_1034,h_1360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/373325_82b2f1e9b4d742f6b2b0a8102d895906~mv2.jpg"
                alt=""
                className="product__img"
              />
              <span className="product__title">Heavy Duty Conveyor Belts</span>

              <Link to="/products/heavydutyconveyor" className="product__more">
                Learn More
              </Link>
            </div>

            <div className="product__shadow"></div>
          </div> */}
        </div>

        {/* <div className="product__accessories-container">
          <article className="product__accessories-card">
            <h2 className="product__accessories-title">Accessories</h2>
            <div className="product__accessories-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              qui. Molestias tempora consequatur, dolorem quo harum recusandae
              nostrum accusantium numquam tenetur placeat a officiis quia amet
              porro ab pariatur modi iste illo maxime! Ipsa amet doloremque quae
              laboriosam. Dolorem, repudiandae?
            </div>

            <Link
              to="/products/accessories"
              className="product__accessories-btn"
            >
              Learn More
              <RiArrowRightUpLine className="product__accessories-icon" />
            </Link>
          </article>
        </div> */}
      </motion.section>
    </>
  );
}

export default Products;
