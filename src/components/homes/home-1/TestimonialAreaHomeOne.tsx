 
 
import Slider from 'react-slick';
import { LazyLoadTypes } from 'react-slick'; 
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 


// Custom Previous Arrow
const PrevArrow = (props: any) => {
  const {onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-slider-next`}       
      onClick={onClick}
    >
     
    </button>
  );
};

// Custom Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className={`slide-arrow uxora-t-slider-prev`} 
      onClick={onClick}
    >
     
    </button>
  );
};

// Slider settings
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  infinite: true,
  speed: 1500, 
  lazyLoad: "ondemand" as LazyLoadTypes,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const TestimonialAreaHomeOne = () => {
 


  return (
    <>
      <div className="uxora-section-padding">
        <div className="container">
          <div className="uxora-section-title title2 max-680 position-relative" data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});">
            <h2>Hear our client's success stories</h2>
            <div className="uxora-t-shape">
              <img src="assets/images/testimonial/shape1.svg" alt="" />
            </div>
          </div>
          <Slider {...settings} className="uxora-t-slider-init">
            <div className="uxora-t-wrap">
              <div className="uxora-t-thumb">
                <img src="assets/images/testimonial/t-thumb1.png" alt="" />
              </div>
              <div className="uxora-default-content">
                <h3>Working with them was a game-changer for us</h3>
                <p>“Vital Sync has completely transformed how we manage our blood inventory. What used to take hours of manual coordination now happens in minutes. The visibility we have across all our partner hospitals is incredible — it’s not just technology; it’s lifesaving efficiency.”</p>
                <div className="mt-50">
                  <div className="uxora-t-author-title">
                    <p><span>Dr. Onyinye Eze,</span> Medical Director — Blood Cells Rescue Initiative</p>
                  </div>
                  <div className="uxora-t-brand">
                    <img src="assets/images/testimonial/brand1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-thumb">
                <img src="assets/images/testimonial/t-thumb2.png" alt="" />
              </div>
              <div className="uxora-default-content">
                <h3>Highly recommend their expertise!</h3>
                <p>“Before adopting Vital Sync, our team struggled to track requests and deliveries in real time. Now, every unit of blood is traceable from donor to patient. The platform’s analytics have helped us reduce waste and respond faster during emergencies — it’s been a game-changer.”</p>
                <div className="mt-50">
                  <div className="uxora-t-author-title">
                    <p><span>James Tim,</span> Head of operations</p>
                  </div>
                  <div className="uxora-t-brand">
                    <img src="assets/images/testimonial/brand1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="uxora-t-wrap">
              <div className="uxora-t-thumb">
                <img src="assets/images/testimonial/t-thumb3.png" alt="" />
              </div>
              <div className="uxora-default-content">
                <h3>I must say they are the perfect Blood management System</h3>
                <p>“Vital Sync has made donor engagement easier and more meaningful. Automated reminders, impact tracking, and the seamless registration process have helped us increase repeat donations. Our donors love seeing the difference they make — and so do we.”</p>
                <div className="mt-50">
                  <div className="uxora-t-author-title">
                    <p><span>Carlos Vell,</span>Donor Relations Coordinator</p>
                  </div>
                  <div className="uxora-t-brand">
                    <img src="assets/images/testimonial/brand1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default TestimonialAreaHomeOne;
 