import { useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";
import { RiArrowRightUpLine } from "react-icons/ri";

const galleries = [
  {
    src: "https://www.iclamerica.com/wp-content/uploads/2020/08/Belt-Store-700x450.jpg",
    title: "Products",
    link: "/products",

    id: 1,
  },
  {
    src: "https://static.wixstatic.com/media/2b8fca_aa81aa9a824a4a318d3fee3081d7e6b2~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_aa81aa9a824a4a318d3fee3081d7e6b2~mv2_d_3264_2448_s_4_2.jpg",
    title: "Services",
    link: "/services",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1582280871722-424e91cbee8b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Industries",
    link: "/workshop",
    id: 3,
  },
  {
    src: "https://st5.depositphotos.com/10256402/66905/i/600/depositphotos_669056076-stock-photo-construction-worker-wearing-safety-harness.jpg",

    title: "Health & Safety",
    link: "/safety",
    id: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",

    title: "About Us",
    link: "/about",
    id: 5,
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__container">
        {galleries.map((gallery) => (
          <Link to={gallery.link} key={gallery.id}>
            <article className="article">
              <span className="article__title">{gallery.title}</span>
              <img src={gallery.src} alt="" className="article__img" />
            </article>
          </Link>
        ))}
      </div>

      <Link to="/contact" className="gallery__button">
        Contact Us
        <RiArrowRightUpLine className="gallery__icon" />
      </Link>
    </section>
  );
}

export default Gallery;
