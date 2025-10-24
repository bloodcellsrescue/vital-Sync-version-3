 
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ENV } from '../../data/env';

const MobileMenu = ({openMenu, setOpenMenu} : {openMenu: boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>}) => {

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
            </ul>
          </div>
          <div className="uxora-mobile-menu-btn">
            <a className="uxora-default-btn sm-size" href={ENV.APP_REGISTER}>Get Started</a>
            <a className="uxora-default-btn sm-size" href={ENV.APP_LOGIN}>Login</a>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default MobileMenu;