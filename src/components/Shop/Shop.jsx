import { motion } from "framer-motion";
import "./shop.css";
import Transition from "../../transition";

const shopItenery = [
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '96" Just-In Scraper',
    price: "c$3400.00",
    id: 1,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '84" Just-In Scraper',
    price: "c$2900.00",
    id: 2,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '72" Just-In Scraper',
    price: "c$2600.00",
    id: 3,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '60" Just-In Scraper',
    price: "c$2200.00",
    id: 4,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '54" Just-In Scraper',
    price: "c$2000.00",
    id: 5,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '48" Just-In Scraper',
    price: "c$1800.00",
    id: 6,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '42" Just-In Scraper',
    price: "c$1600.00",
    id: 7,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '36" Just-In Scraper',
    price: "c$1400.00",
    id: 8,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '30" Just-In Scraper',
    price: "c$1200.00",
    id: 9,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '24" Just-In Scraper',
    price: "c$900.00",
    id: 10,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg",
    title: '18" Just-In Scraper',
    price: "c$890.00",
    id: 11,
  },
  {
    img: "https://static.wixstatic.com/media/2b8fca_8ac89207324a484aada82026989cafc3~mv2_d_2448_2448_s_4_2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_8ac89207324a484aada82026989cafc3~mv2_d_2448_2448_s_4_2.jpg",
    title: "140C Bolt solid plate fasteners 20012",
    price: "$227.00",
    id: 12,
  },
];

function Shop() {
  return (
    <>
      <Transition />
      <section className="shop">
        <div className="title__container">
          <h1 className="section__title">Shop</h1>
          <p className="section__description">
            Explore our diverse selection, handpicked to ensure quality, style,
            and functionality. From essentials to indulgences, find everything
            you need to elevate your experience and make every purchase a
            delight.
          </p>
        </div>

        <div className="shop__container">
          {shopItenery.map((product) => (
            <article className="shop__card" key={product.id}>
              <img
                src={product.img}
                alt={product.title}
                className="shop__img"
              />
              <div className="shop__data">
                <p className="shop__title">{product.title}</p>
                <span className="shop__price">{product.price}</span>
                <span className="shop__cart">Add to Cart</span>
              </div>
              <div className="shop__shadow"></div>
            </article>
          ))}

          {/* <article className="shop__card">
            <img
              src="https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg"
              alt=""
              className="shop__img"
            />
            <div className="shop__data">
              <p className="shop__title">96" Just-In Scraper</p>
              <span className="shop__price">C$3,400.00</span>
            </div>

            <span className="shop__cart">Add to Cart</span>
          </article>

          <article className="shop__card">
            <img
              src="https://static.wixstatic.com/media/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg/v1/fill/w_452,h_254,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2b8fca_6e99b7c0b645475482201134b7d84b36~mv2.jpg"
              alt=""
              className="shop__img"
            />
            <div className="shop__data">
              <p className="shop__title">96" Just-In Scraper</p>
              <span className="shop__price">C$3,400.00</span>
            </div>

            <span className="shop__cart">Add to Cart</span>
          </article> */}
        </div>
      </section>
      ;
    </>
  );
}

export default Shop;
