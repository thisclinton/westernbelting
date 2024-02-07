import { useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

const galleries = [
  {
    src: "https://static.wixstatic.com/media/2b8fca_33f3899e9ff74397833eba868bd620eb~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_33f3899e9ff74397833eba868bd620eb~mv2_d_3264_2448_s_4_2.jpg",

    title: "Products",
    link: "/products",

    id: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Services",
    link: "/services",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Our Workshops",
    link: "/workshop",
    id: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Safety",
    link: "/safety",
    id: 4,
  },
  {
    src: "https://static.wixstatic.com/media/2b8fca_aa81aa9a824a4a318d3fee3081d7e6b2~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_aa81aa9a824a4a318d3fee3081d7e6b2~mv2_d_3264_2448_s_4_2.jpg",

    title: "Shop",
    link: "/shop",
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
      </Link>
    </section>
  );
}

export default Gallery;
