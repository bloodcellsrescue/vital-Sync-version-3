import { ENV } from "../../../data/env";

 
const HeroAreaHomeOne = () => {
  return (
    <>
      <div className="uxora-hero-section section" style={{ backgroundImage: 'url(/assets/images/hero/hero-bg20.png)' }}>
        <div className="container">
          <div className="uxora-hero-content" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h1 className="title tw:md:text-8xl!">Empower your blood bank management</h1>
            <p>Vital Sync revolutionizes blood donation and bank management, ensuring efficiency and safety in every step. Join us in making a differnce in the world of blood donation.</p>
            <div className="mt-50 hero-btn-wrap">
              <a className="uxora-default-btn hero-btn" target="__blank" href={ENV.APP_URL}>Get Started Now</a>
              <a className="uxora-default-btn hero-btn outline-btn" href="#about">Learn More</a>
            </div>
            <div className="uxora-hero-shape">
              <img src="assets/images/hero/shape2.svg" alt="" />
            </div>
            <div className="uxora-hero-shape2">
              <img src="assets/images/hero/shape1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="uxora-hero-thumb">
          <img src="assets/images/hero/vitalsync-dashboard.png" className="tw:rounded-2xl! tw:shadow-lg" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeOne;