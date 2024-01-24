import { useState } from "react";
import { Link } from "react-router-dom";
import "./gallery.css";

const images = [
  {
    src: "https://static.wixstatic.com/media/2b8fca_33f3899e9ff74397833eba868bd620eb~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_33f3899e9ff74397833eba868bd620eb~mv2_d_3264_2448_s_4_2.jpg",

    title: "Vulcanizing",

    description:
      "The preferred method of joining two ends of a belt together. With vulcanizing a belt, you attain the longest life possible from that splice. Our technicians are trained by the manufacturers to provide our customers with the best possible splice for each belt. Some systems don’t allow you to install belts with the belt already endless. We can come to your site and string the belt on your system. Once the belt is strung on your system, we can then begin to prep the belt and vulcanize the belt on site.",
  },
  {
    src: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Lacing",

    description:
      "Depending on the size of the system pulleys and other specifications, vulcanizing a belt is not the best solution. If you have small diameter pulleys, or need to quickly replace a belt on a system, then the other solution is to lace the belt on both ends and join it together with a lacing pin. This allows for quick change out of a belt and also allows for use of small diameter pulleys. We are able to lace belts with a large selection of lacing ranging from lace that will work on a 1/64″ thick belt to a belt that might be over 1-1/2″ thick. Also, we can install stainless steel lacing for belts that handle food products, to regular steel for belts that handle packaged goods. Our lacing can handle any job you can throw at it. ",
  },
  {
    src: "https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Tracking",

    description:
      "The most important thing next to the installation of a belt is the tracking of a belt. Our experienced mechanics always find a way to make sure your belt is tracking properly on your system. Whether we are installing a new belt or fixing a tracking problem on an existing system, we always make sure we track the belt properly. We do this by using the many different options available to us. First we make sure that the slack adjusters are set properly. If this doesn’t work we then proceed to eliminate all the other possibilities such as pulleys not being aligned, skirting not in proper condition or alignment, crowns, cleaners and guidlers. One thing is for sure, we will track your belt after every new installation and make sure the system is running properly.",
  },
  {
    src: "https://static.wixstatic.com/media/2b8fca_aa81aa9a824a4a318d3fee3081d7e6b2~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_aa81aa9a824a4a318d3fee3081d7e6b2~mv2_d_3264_2448_s_4_2.jpg",

    title: "Stringing",

    description:
      "We have strung the most challenging conveyor systems in the province of British Columbia.With our experienced mechanics, we have been able to string belts on systems that are over a hundred feet in the air to systems that are a hundred feet underground. We have strung belts on systems that are 3 feet long and on systems that are 3 kilometers long. When it comes to experience in stringing belts on conveyor systems, nobody beats Western Belting. Not only will we string your new belt, but we can wind your old belt into a manageable roll. We usually do this at the time we string your new belt as it saves time if we don’t have to come back and do it at a later date.",
  },

  {
    src: "https://static.wixstatic.com/media/2b8fca_a0a04ad4b2da4381a73466e3518439ad~mv2.jpg/v1/fill/w_576,h_270,al_c,lg_1,q_80,enc_auto/2b8fca_a0a04ad4b2da4381a73466e3518439ad~mv2.jpg",

    title: "Patching",

    description:
      "Got a hole in your belt? <br /> We have the experience and the tools to patch holes in any size belt. We can hot patch, which involves cooking new rubber into the belt. Or we can cold patch holes which requires the bonding agent to dry onto the belt. Hot patching is the preferred method, but it requires the belt to be stationary longer. We can patch all types of belts from PVC, Usflex, Multiple Plied Belts and even some lightweight belts.",
  },

  {
    src: "https://static.wixstatic.com/media/2b8fca_5174277afc8f420c892817a4da8430e3~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_5174277afc8f420c892817a4da8430e3~mv2_d_3264_2448_s_4_2.jpg",

    title: "Steel Cable Splicing",

    description:
      "Fenner Dunlop Factory Certified splicing for Steel Cable conveyor belting.",
  },

  {
    src: "https://static.wixstatic.com/media/2b8fca_1372465f3f0c49498763da5d3c9d5f98~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_1200,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2b8fca_1372465f3f0c49498763da5d3c9d5f98~mv2_d_3264_2448_s_4_2.jpg",

    title: "Lightweight / Specialty",

    description:
      "We also specialize in lightweight belting. From printers, bakeries, food packaging, paper folding to small conveyor systems, plastic belting systems, wire mesh systems. We service, install, lace and vulcanize a huge variety of lightweight and specialty belts.  We have suppliers all over North America that supply us with custom made belts that we install and service all over British Columbia.",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__container">
        <Link to="/products">
          <article className="article">
            <span className="article__title">Products</span>
            <img src={images[0].src} alt="" className="article__img" />
            <span className="article__description"></span>
          </article>
        </Link>

        <article className="article">
          <span className="article__title">Services</span>
          <img src={images[1].src} alt="" className="article__img" />
          <span className="article__description"></span>
        </article>

        <article className="article">
          <span className="article__title">Our Workshops</span>
          <img src={images[2].src} alt="" className="article__img" />
          <span className="article__description"></span>
        </article>

        <article className="article">
          <span className="article__title">Safety</span>
          <img src={images[3].src} alt="" className="article__img" />
          <span className="article__description"></span>
        </article>

        <article className="article">
          <span className="article__title">Shop</span>
          <img src={images[4].src} alt="" className="article__img" />
          <span className="article__description"></span>
        </article>
      </div>

      <a href="#" className="gallery__button">
        Discover More
      </a>
    </section>
  );
}

export default Gallery;
