import { ENV } from "../../../data/env";

 
const CtaAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-cta-section">
        <div className="uxora-cta-shape2">
          <img src="assets/images/cta/shape2.svg" alt="" />
        </div>
        <div className="uxora-cta-shape1">
          <img src="assets/images/cta/shape3.svg" alt="" />
        </div>
        <div className="uxora-cta-title">
          <h2 className="tw:text-3xl! tw:md:text-6xl! tw:leading-20">Start Saving Lives Smarter <br /> Get Vital Sync Today.</h2>
          <div className="uxora-cta-btn">
            <a className="uxora-default-btn outline-btn2" href={ENV.APP_REGISTER}>Get Started</a>
          </div>
          <div className="uxora-cta-shape3">
            <img src="assets/images/cta/shape1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;