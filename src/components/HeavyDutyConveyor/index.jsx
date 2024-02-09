import Transition from "../../transition";
import "./style.css";

function HeavyDutyConveyor() {
  return (
    <>
      <Transition />
      <section className="heavyduty">
        <div className="title__container">
          <h1 className="section__title">Heavy duty conveyor belt</h1>
          <p className="section__description">
            Made by Scandia USA Midwest LLC
          </p>
        </div>
        <div className="heavyduty__container container">
          <div className="heavyduty__data">
            <div className="heavyduty__top">
              <img
                src="https://static.wixstatic.com/media/373325_82b2f1e9b4d742f6b2b0a8102d895906~mv2.jpg/v1/fill/w_1034,h_1880,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/373325_82b2f1e9b4d742f6b2b0a8102d895906~mv2.jpg"
                alt="heavy duty conveyor belts"
                className="heavyduty__img1"
              />

              <span className="heavyduty__detail">
                <span className="heavyduty__detail-top">
                  <h2>Heavy Duty Conveyor Belts</h2>
                  <p>
                    A heavy-duty conveyor belt is an essential component for
                    industries requiring robust material handling solutions.
                    Built to withstand demanding conditions, it efficiently
                    transports heavy loads, bulk materials, and abrasive
                    substances such as ores, aggregates, and construction
                    materials. Engineered with durable materials and reinforced
                    structures, it ensures reliable performance in harsh
                    environments like mining, construction, and heavy
                    manufacturing. With superior strength and resistance to
                    wear, tear, and impact, it minimizes downtime and
                    maintenance costs, maximizing productivity and operational
                    efficiency. Trusted for its ruggedness and longevity, a
                    heavy-duty conveyor belt is the backbone of industrial
                    processes requiring high-capacity and high-performance
                    material handling capabilities.
                  </p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeavyDutyConveyor;
