import { Link } from "react-router-dom";
import "./product.css";
import { motion } from "framer-motion";
import Transition from "../../transition";

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
        <div className="title__container">
          <h1 className="section__title">Products</h1>
          <p className="section__description">
            Browse through our product offerings and discover how our conveyor
            belting solutions can streamline your processes, improve efficiency,
            and elevate performance.
          </p>
        </div>
        <div className="products__container">
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

            <div className="product__shadow"></div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Products;
