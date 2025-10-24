import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { ENV } from "../../data/env";



const FooterOne = () => {
  return (
    <>
      <footer className="uxora-footer-section section" style={{ backgroundImage: 'url(/assets/images/footer/hero-bg20.png)' }}>
        <div className="container">
          <div className="uxora-footer-one">
            <div className="row ">
              <div className="col-md-6 col-12">
                <div className="uxora-footer-textarea">
                  <RouterLink to="/">
                    <img src="assets/images/logo/vitals-logo.svg" alt="" style={{ height: "auto", width: "200px" }} />
                  </RouterLink>
                  <p>Vital Sync is a digital platform dedicated to transforming blood donation and management through innovation, transparency, and data-driven solutions—connecting donors, hospitals, and communities for a healthier tomorrow.</p>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="uxora-footer-menu pl-100">
                  <h5>Quick Links</h5>
                  <ul>
                    <li style={{ cursor: 'pointer' }}>
                      <ScrollLink to="about"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li style={{ cursor: 'pointer' }}>
                      <ScrollLink to="features"
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        Features
                      </ScrollLink>
                    </li>
                    <li>
                      <a href={ENV.APP_REGISTER}>Get Started</a>
                    </li>
                    <li>
                      <a href={ENV.APP_LOGIN}>Login</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="uxora-footer-bottom-text">
            <p>&copy; Powered by <a href="https://bloodrescue.org" className="tw:text-red-600!" target="__blank" >Blood Cells Rescue Initiative</a>. All Rights Reserved by Blood Cells Rescue Initiative</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;