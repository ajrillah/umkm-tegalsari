import React from "react";
import { Link } from "react-router-dom";

const MenuItems = (props) => {
  const { parentMenu, secondParentMenu, activeMenu } = props;

  return (
    <React.Fragment>
      <li
        className={
          parentMenu === "Home" ? "dropdown current-menu-item" : "dropdown"
        }
      >
        <Link to="#">Home</Link>
      </li>
      <li className={parentMenu === "about" ? "current-menu-item" : ""}>
        <Link
          to="https://tegalsari.desacantik.id/"
          className={activeMenu === "/about" ? "active-menu" : ""}
        >
          Profile Desa
        </Link>
      </li>
      <li
        className={
          parentMenu === "Services" ? "dropdown current-menu-item" : "dropdown"
        }
      >
        <Link to="#">UMKM</Link>
        <ul className="sub-menu">
          <li>
            <Link
              to="/service/service-details-2"
              className={
                activeMenu === "/service-details-2" ? "active-menu" : ""
              }
            >
              KOPI
            </Link>
          </li>
          <li>
            <Link
              to="/service/service-details-3"
              className={
                activeMenu === "/service-details-3" ? "active-menu" : ""
              }
            >
              MADU
            </Link>
          </li>
          <li>
            <Link
              to="/service/service-details-4"
              className={
                activeMenu === "/service-details-4" ? "active-menu" : ""
              }
            >
              LEMON
            </Link>
          </li>
          <li>
            <Link
              to="/service/service-details-5"
              className={
                activeMenu === "/service-details-5" ? "active-menu" : ""
              }
            >
              POT
            </Link>
          </li>
          <li>
            <Link
              to="/service/service-details-6"
              className={
                activeMenu === "/service-details-6" ? "active-menu" : ""
              }
            >
              -
            </Link>
          </li>
        </ul>
      </li>

      <li className={parentMenu === "contact" ? "current-menu-item" : ""}>
        <Link
          to="/contact"
          className={activeMenu === "/contact" ? "active-menu" : ""}
        >
          Contact
        </Link>
      </li>
    </React.Fragment>
  );
};

export default MenuItems;
