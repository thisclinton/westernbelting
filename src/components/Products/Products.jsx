import { Link } from "react-router-dom";
import "./product.css";

function Products() {
  return (
    <section className="products">
      <h1 className="products__title">Products</h1>
      <div className="products__container">
        <div className="product">
          <img
            src="https://static.wixstatic.com/media/2b8fca_ea86f3ca776643b4aae94bd84f1d88b6~mv2_d_1836_3264_s_2.jpg/v1/crop/x_0,y_220,w_1836,h_2277/fill/w_618,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20190610_131658.jpg"
            alt=""
            className="product__img"
          />
          <span className="product__title">Hercules Conveyor Belt Winder</span>
          <Link to="/products/herculesconveyor" className="product__more">
            Learn More
          </Link>
        </div>

        <div className="product">
          <img
            src="https://static.wixstatic.com/media/2b8fca_538070cd1fe341498f16547e5a1f2352~mv2.jpg/v1/fill/w_570,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84%20inch%20wide%20just%20in%20scraper.jpg"
            alt=""
            className="product__img"
          />
          <span className="product__title">
            Just-In Scraper Conveyor Belt Cleaner
          </span>

          <Link to="/products/scraperconveyor" className="product__more">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Products;
