import "./style.css";

function HerculesConveyor() {
  return (
    <section className="hercules">
      <div className="hercules__container">
        <h1 className="hercules__title">Hercules Conveyor Belt Winder</h1>
        <p className="hercules__description">Made by Scandia USA Midwest LLC</p>

        <div className="hercules__data">
          <div className="hercules__top">
            <img
              src="https://static.wixstatic.com/media/2b8fca_ea86f3ca776643b4aae94bd84f1d88b6~mv2_d_1836_3264_s_2.jpg/v1/crop/x_24,y_288,w_1812,h_2099/fill/w_1184,h_1370,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/20190610_131658.jpg"
              alt=""
              className="hercules__img1"
            />

            <span className="hercules__detail">
              <span className="hercules__detail-top">
                <h2>This Conveyor Belt Winder earns its name proudly!</h2>
                <p>
                  The Hercules mythical ability to manage a 72" wide x 1000 ft
                  Roll with weights ranging from 15,000 Lbs to 19,000 Lbs this
                  winder exceeds expectations.
                </p>
              </span>
              <span className="hercules__detail-bottom">
                <h2>The Scandia USA Midwest LLC Team.</h2>
                <p>
                  With years of experience developed this winder with not only
                  maximum performance ability's., The robust construction of it
                  to last the riggers of time and heavy use.{" "}
                </p>
              </span>
            </span>
          </div>

          <div className="hercules__bottom">
            <div className="hercules__bottom-img">
              <img
                src="https://static.wixstatic.com/media/2b8fca_e2c4f0b9ed48494985edf4b379877f5c~mv2_d_1836_3264_s_2.jpg/v1/fill/w_384,h_666,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20190610_131754_jpg.jpg"
                alt=""
                className="hercules__img2"
              />

              <img
                src="https://static.wixstatic.com/media/2b8fca_04f62c12b3274e48a1f95be07ab15c75~mv2_d_1836_3264_s_2.jpg/v1/fill/w_390,h_664,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20190610_131730_jpg.jpg"
                alt=""
                className="hercules__img3"
              />
            </div>

            <div className="hercules__detail">
              <h2>
                The Scandia USA Midwest LLC Team really thought of everything
                when it came to this winder!
              </h2>

              <ul className="hercules__list">
                <li className="hercules__item">
                  Can handle 10 ft diameter Rolls
                </li>
                <li className="hercules__item">
                  Variable speed for controlled pulls.
                </li>
                <li className="hercules__item">Well guarded drive system.</li>
                <li className="hercules__item">Self contained power plant.</li>
                <li className="hercules__item">High tork hydraulics</li>
                <li className="hercules__item">
                  Shaft release sleeves for placing the roll.
                </li>
                <li className="hercules__item">
                  Lifting and stabilization flanges.
                </li>
                <li className="hercules__item">Lite weight construction.</li>
                <li className="hercules__item">
                  Priced low for exposure purposes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HerculesConveyor;
