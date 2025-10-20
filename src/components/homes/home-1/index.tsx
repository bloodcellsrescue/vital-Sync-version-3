 import { Element } from "react-scroll";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import PortfolioAreaHomeOne from "./PortfolioAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import ProcessAreaHomeOne from "./ProcessAreaHomeOne";
// import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import BlogAreaHomeOne from "./BlogAreaHomeOne";
import CtaAreaHomeOne from "./CtaAreaHomeOne"; 
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";
import BackToTop from "../../../common/BackToTop";

const HomeOne = () => {
	return (
		<>
			<HeaderOne />
      <HeroAreaHomeOne />
      
      <Element name="about">
      <AboutAreaHomeOne />
      </Element>

      <PortfolioAreaHomeOne />
       <Element name="features">
        <ServiceAreaHomeOne />
      </Element>

      
      <ProcessAreaHomeOne />
      {/* <TestimonialAreaHomeOne /> */}
      <BlogAreaHomeOne />
      <CtaAreaHomeOne />
      <FooterOne />
      <BackToTop />
		</>
	);
};

export default HomeOne;
