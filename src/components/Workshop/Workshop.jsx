import { motion } from "framer-motion";
import "./workshop.css";
import Transition from "../../transition";

function Workshop() {
  return (
    <>
      <Transition />
      <section className="workshop">
        <div className="title__container">
          <h1 className="section__title">Our Workshops</h1>
          <p className="section__description">
            Our locations around British Columbia for servicing the north west
          </p>
        </div>

        <article class="workshop__card">
          <div className="workshop__img">
            <img
              src="https://static.wixstatic.com/media/2b8fca_e00b48a167f24d43aa81993f47636a42~mv2.jpg/v1/fill/w_432,h_227,al_c,lg_1,q_80,enc_auto/2b8fca_e00b48a167f24d43aa81993f47636a42~mv2.jpg"
              alt=""
            />
          </div>
          <div className="workshop__data">
            <h3 class="workshop__title">Prince George, BC</h3>
            <span class="workshop__info">
              3490 Opie Crescent <br />
              Prince George, BC V2N 2P9 <br /> (877) 480-2358 Toll Free <br />
              (250) 561-2358 Phone <br />
              (250) 562-7406 Fax <br />
              info@westernbelting.ca
            </span>
          </div>

          <span className="workshop__btn">Browse Location</span>
        </article>

        <article class="workshop__card">
          <div className="workshop__img">
            <img
              src="https://static.wixstatic.com/media/2b8fca_85b7bf5257fa42ef844c06b2772a8ff3~mv2.jpg/v1/fill/w_672,h_353,al_c,lg_1,q_80,enc_auto/2b8fca_85b7bf5257fa42ef844c06b2772a8ff3~mv2.jpg"
              alt=""
            />
          </div>
          <div className="workshop__data">
            <h3 class="workshop__title">Surrey</h3>
            <span class="workshop__info">
              Head Office <br />
              5510 192 Street <br />
              Surrey, BC V3S 8E5 <br />
              (866) 451-2358 Toll Free <br />
              (604) 451-4133 Phone <br />
              (604) 451-4166 Fax <br />
              info@westernbelting.ca
            </span>
          </div>

          <span className="workshop__btn">Browse Location</span>
        </article>

        <article class="workshop__card">
          <div className="workshop__img">
            <img
              src="https://static.wixstatic.com/media/2b8fca_e00b48a167f24d43aa81993f47636a42~mv2.jpg/v1/fill/w_432,h_227,al_c,lg_1,q_80,enc_auto/2b8fca_e00b48a167f24d43aa81993f47636a42~mv2.jpg"
              alt=""
            />
          </div>
          <div className="workshop__data">
            <h3 class="workshop__title"> CALGARY, AB</h3>
            <span class="workshop__info">
              7880 66th Street SE <br />
              Building 2, Unit 106 <br />
              Calgary, Alberta <br />
              (866) 451-2358 Toll Free <br />
              (604) 451-4133 Phone <br />
              calgary@westernbelting.ca
            </span>
          </div>

          <span className="workshop__btn">Browse Location</span>
        </article>
      </section>
    </>
  );
}

export default Workshop;
