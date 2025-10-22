 
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const MobileMenu = ({openMenu, setOpenMenu} : any) => {

  const handleWrapperClick = () => {
    setOpenMenu(false);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };


  return (
    <> 
      <div className={`uxora-menu-wrapper ${openMenu ? 'uxora-body-visible' : ''}`} onClick={handleWrapperClick}>
     
        <div className="uxora-menu-area text-center" onClick={stopPropagation}>
          <div className="uxora-menu-mobile-top">
            <div className="mobile-logo">
              <RouterLink to="/">
                <img src="assets/images/logo/vitals-logo.svg" alt="logo" />
              </RouterLink>
            </div>
            <button className="uxora-menu-toggle mobile" onClick={() => setOpenMenu(!openMenu)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
        
          <div className="uxora-mobile-menu">          
            <ul>
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink></li>
              <li><ScrollLink to ="features" smooth= {true} duration={500} offset={-70}>Features</ScrollLink></li>
              {/* <li className={`menu-item-has-children uxora-item-has-children ${openSubMenu ? 'uxora-active' : ''}`}>
                <a style={{cursor: "pointer"}} onClick={() => setOpenSubMenu(!openSubMenu)}>Pages
                <span className="uxora-mean-expand"></span>
                </a>
                <ul className={`sub-menu uxora-submenu ${openSubMenu ? 'uxora-open' : ''}`} style={{display: openSubMenu ? 'block' : 'none'}}>
                  <li><Link to="/service">Service</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/faq">Faq</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                </ul>
              </li>
              <li><Link to="/blog">Blog</Link></li> */}
              <li><RouterLink to="/contact-us">Contact</RouterLink></li>
            </ul>
          </div>
          <div className="uxora-mobile-menu-btn">
            <RouterLink className="uxora-default-btn sm-size" to="/contact-us">Get in Touch</RouterLink>
            <RouterLink className="uxora-default-btn sm-size" to="/contact-us">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default MobileMenu;