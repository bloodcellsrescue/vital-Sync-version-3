 
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import useSticky from '../../hooks/use-sticky';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { ENV } from '../../data/env';

const HeaderOne = () => { 
  useSticky();
  const [openMenu, setOpenMenu] = useState(false);
  

  return (
    <>
      <header className={`site-header uxora-header-section`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <RouterLink to="/">
                  <img src="assets/images/logo/vitals-logo.svg" alt="logo" style={{height:"auto", width:"200px"}} />
                </RouterLink>
              </div>
            </div>
            <div className="col">
              <div className="uxora-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    <li style={{cursor: 'pointer'}}>
                      <Link to="/" >Home</Link>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                      <ScrollLink to="about" smooth={true} duration={500} offset={-70} >About</ScrollLink>
                    </li>

                    <li style={{cursor: 'pointer'}}>
                      <ScrollLink to="features" smooth={true} duration={500} offset={-70} >Features</ScrollLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center g-3">
              <a className="uxora-default-btn uxora-header-btn" href={ENV.APP_REGISTER}>Register</a>
              <a className="uxora-default-btn tw:bg-gray-100! tw:hidden! tw:md:inline-block! tw:ml-2! tw:border-0! outline-btn" href={ENV.APP_LOGIN}>Login</a>
              <div className="uxora-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button className="uxora-menu-toggle d-inline-block d-lg-none" onClick={() => setOpenMenu(!openMenu)}>
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>
      <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderOne;