import { Link } from "react-router-dom";

 
 

const AboutAreaHomeOne = () => {
  return (
    <>
      <section className="uxora-section-padding position-relative">
        <div className="container" data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title max-680">
            <h2>Driven by passion and innovation</h2>
            <div className="uxora-about-shape1">
              <img src="assets/images/about/shape1.svg" alt="" />
            </div>
          </div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-xxl-4 col-xl-12 d-flex align-items-center">
              <div className="uxora-counter-wrap">
                <div className="uxora-counter-item">
                  <h3 className="uxora-counter-data" aria-label="14">75%</h3>
                  <div className="uxora-counter-line">
                    <img src="assets/images/about/line.png" alt="" />
                  </div>
                  <p>Increase in donor retention rate with our software</p>
                </div>
                <div className="uxora-counter-item">
                  <h3 className="uxora-counter-data" aria-label="6k">24/4</h3>
                  <div className="uxora-counter-line">
                    <img src="assets/images/about/line.png" alt="" />
                  </div>
                  <p>Real-Time monitoring of blood availability </p>
                </div>
                <div className="uxora-counter-item">
                  <h3 className="uxora-counter-data" aria-label="80k">80%</h3>
                  <div className="uxora-counter-line">
                    <img src="assets/images/about/line.png" alt="" />
                  </div>
                  <p>Reduction in processing time for blood donation</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="uxora-counter-thumb">
                <img src="assets/images/about/thumb1.png" alt="" />
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6 d-flex align-items-center">
              <div className="uxora-default-content counter-content">
                <h3>Transforming Blood Donation: Vital Sync's Impact on Blood Bank Efficiency.</h3>
                <p>Every two seconds, someone in the U.S needs blood. With Vital Sync, bllod banks have increased their operational efficiency by over 50%.</p>
                <p>Our platform connects donors, hospitals, and blood banks in real time to save more lives with fewer delays.</p>
                <div className="mt-50">
                  <Link to="/contact-us" className="uxora-default-btn">Explore More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;