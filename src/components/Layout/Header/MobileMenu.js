"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import mobileIcon from "../../../assets/images/logo-2.png";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu}></div>
        <div className="close-btn" onClick={handleMobileMenu}>
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          {/* <div className="nav-logo">
            <Link to="/">
              <img src={mobileIcon} alt="" />
            </Link>
          </div> */}
          {/*menu-outer*/}
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li>
                  <Link to="/" onClick={handleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about/" onClick={handleMobileMenu}>
                    Profile Desa
                  </Link>
                </li>
                <li
                  className={
                    isActive.key === 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link to="/#" onClick={handleMobileMenu}>
                    UMKM
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key === 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link
                        to="/service/service-details-2"
                        onClick={handleMobileMenu}
                      >
                        KOPI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service/service-details-3"
                        onClick={handleMobileMenu}
                      >
                        MADU
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service/service-details-4"
                        onClick={handleMobileMenu}
                      >
                        LEMON
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service/service-details-5"
                        onClick={handleMobileMenu}
                      >
                        POT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service/service-details-6"
                        onClick={handleMobileMenu}
                      >
                        -
                      </Link>
                    </li>
                  </ul>

                  <div
                    className={
                      isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>

                <li>
                  <Link to="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/*End Mobile Menu */}

      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};
export default MobileMenu;
