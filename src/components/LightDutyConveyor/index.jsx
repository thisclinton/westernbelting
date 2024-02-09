import Transition from "../../transition";
import "./style.css";

function LightDutyConveyor() {
  return (
    <>
      <Transition />
      <section className="lightduty">
        <div className="title__container">
          <h1 className="section__title">Light duty conveyor belt</h1>
          <p className="section__description">
            Made by Scandia USA Midwest LLC
          </p>
        </div>
        <div className="lightduty__container">
          <div className="lightduty__data">
            <div className="lightduty__top">
              <img
                src="https://static.wixstatic.com/media/16e0a7_721a699f203042d180da48c53c469141~mv2.jpg/v1/fill/w_452,h_567,fp_0.50_0.50,q_80,enc_auto/16e0a7_721a699f203042d180da48c53c469141~mv2.jpg"
                alt=""
                className="lightduty__img1"
              />

              <span className="lightduty__detail">
                <span className="lightduty__detail-top">
                  <h2>This Conveyor Belt earns its name proudly!</h2>
                </span>
                <p>
                  A light-duty conveyor belt is a versatile and cost-effective
                  solution for transporting small to medium-sized loads in
                  industries such as retail, food processing, and light
                  manufacturing. With its lightweight construction and flexible
                  design, it efficiently moves products along assembly lines,
                  sorting systems, and packaging processes. Offering durability
                  and reliability, it's ideal for applications where continuous
                  but lighter-duty material handling is required. Its easy
                  installation and low maintenance make it an essential
                  component for enhancing efficiency and productivity in various
                  industrial environments.
                </p>
                <span className="lightduty__detail-bottom"></span>
              </span>
              <div className="lightduty__shadow"></div>
            </div>

            {/* <div className="lightduty__bottom">
              <div className="lightduty__bottom-img">
                <img
                  src="https://static.wixstatic.com/media/2b8fca_e2c4f0b9ed48494985edf4b379877f5c~mv2_d_1836_3264_s_2.jpg/v1/fill/w_384,h_666,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20190610_131754_jpg.jpg"
                  alt=""
                  className="lightduty__img2"
                />

                <img
                  src="https://static.wixstatic.com/media/2b8fca_04f62c12b3274e48a1f95be07ab15c75~mv2_d_1836_3264_s_2.jpg/v1/fill/w_390,h_664,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20190610_131730_jpg.jpg"
                  alt=""
                  className="lightduty__img3"
                />
              </div>

              <div className="lightduty__shadow-bottom"></div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default LightDutyConveyor;
