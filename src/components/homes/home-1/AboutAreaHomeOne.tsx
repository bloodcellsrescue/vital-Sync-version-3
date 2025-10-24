import { Link } from "react-router-dom";
import AboutUseItem from "./partials/about-use-item";
import { ENV } from "../../../data/env";

 
 

const AboutAreaHomeOne = () => {
  return (
    <>
      <section id="about" className="uxora-section-padding position-relative">
        <div className="container" data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
          <div className="uxora-section-title">
            <h2 className="tw:text-7xl! tw:font-semibold!">Driven by care, built for saving lives</h2>
            <div className="uxora-about-shape1">
              <img src="assets/images/about/shape1.svg" alt="" />
            </div>
          </div>
          <div className="row" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});">
            <div className="col-xxl-4 col-xl-12 d-flex align-items-center">
              <div className="uxora-counter-wrap">
                <AboutUseItem 
                  title="Boost donor retention"
                  description="Increase in donor retention rate through automated reminders and notifications"
                />

                <AboutUseItem 
                  title="Real-time blood supply management"
                  description="Track every unit of blood from collection to transfusion, and recieve notifications when your blood bank is running out"
                />

                <AboutUseItem 
                  title="Faster Processing time"
                  description="Reduce the processing time for each donation through automation across different units ensuring seamless processing and monitoring"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="uxora-counter-thumb">
                <img src="assets/images/about/thumb8.jpg" alt="" />
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6 d-flex">
              <div className="uxora-default-content counter-content">
                <h3>Start building safer blood systems today with Vital Sync</h3>
                
                <p>With Vital Sync, you’re in control of every step in the blood supply chain. Our intelligent platform gives you real-time insights, automated traceability, and secure data management — so you can make confident, data-driven decisions that protect every donor and recipient.</p>
                
                <p>From the moment blood is donated to the moment it’s transfused, Vital Sync helps you track, verify, and ensure safety with precision and ease.</p> 
                  
                {/* <p>By connecting people, systems, and data, Vital Sync strengthens the chain of trust — safeguarding lives at every step of the journey.</p> */}

                <div className="">
                  <Link to={ENV.APP_URL} target="__blank" className="uxora-default-btn">Get Started</Link>
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