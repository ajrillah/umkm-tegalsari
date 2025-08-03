import React from "react";
import { Link } from "react-router-dom";

import footerPart1 from "../../../assets/images/icons/icon-6.svg";
import footerPart2 from "../../../assets/images/icons/icon-7.svg";
import footerPart3 from "../../../assets/images/icons/icon-8.svg";
import footerbgImg from "../../../assets/images/background/footer-bg.jpg";
import footerLogo1 from "../../../assets/images/logo-2.png";

const Footer = (props) => {
  const { footerLogo, footerClass } = props;
  return (
    <footer className={footerClass ? footerClass : "main-footer"}>
      <div className="widget-section">
        <div
          className="bg-layer"
          style={{
            backgroundImage: `url(${footerbgImg})`,
          }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <Link to="/">
                    <img
                      src={footerLogo ? footerLogo : footerLogo1}
                      alt="Logo"
                    />
                  </Link>
                </figure>
                <div className="text-box">
                  <p>
                    UMKM Desa Tegalsari hadir untuk mendukung kemandirian
                    ekonomi warga melalui produk-produk lokal unggulan. Kami
                    percaya kekuatan desa bisa mendunia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_50"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_30"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h3>Contact</h3>
                </div>
                <div className="widget-content">
                  <ul className="info-list clearfix">
                    <li>
                      <img src={footerPart1} alt="" />
                      <Link to="https://maps.app.goo.gl/JRK8csUtNxfYg5WD6">
                        Tegalsari, Kec. Garung, Kabupaten Wonosobo, Jawa Tengah
                        56353
                      </Link>
                    </li>
                    <li>
                      <img src={footerPart2} alt="" />
                      <Link to="mailto:garungtegalsari@gmail.com">
                        garungtegalsari@gmail.com
                      </Link>
                    </li>
                    <li>
                      <img src={footerPart2} alt="" />
                      <Link to="mailto:tegalsari.pemdes@gmail.com">
                        tegalsari.pemdes@gmail.com
                      </Link>
                    </li>
                    <li>
                      <img src={footerPart3} alt="" />
                      <Link to="https://wa.me/6281380974808">
                        +6281380974808
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom centred">
        <div className="auto-container">
          <div className="copyright">
            <p>Copyright 2025 by UGM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
