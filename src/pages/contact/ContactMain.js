import React from "react";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import bannerbg from "../../assets/images/banner/bannerdesa1.JPG";
import bgImg2 from "../../assets/images/background/contact-bg.jpg";
import icon1 from "../../assets/images/icons/icon-14.svg";
import icon2 from "../../assets/images/icons/icon-15.svg";
import icon3 from "../../assets/images/icons/icon-16.svg";
import { Link } from "react-router-dom";

const ContactMain = () => {
  return (
    <React.Fragment>
      {/* SiteBreadcrumb */}
      <SiteBreadcrumb
        pageTitle="Contact Us"
        pageName="Contact Us"
        breadcrumbsImg={bannerbg}
      />
      {/* SiteBreadcrumb */}
      {/* Contact Section Start */}

      {/* contact-style-two */}
      <section className="contact-style-two sec-pad-2">
        <div className="bg-layer" />
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 content-column">
              <div className="content_block_seven">
                <div className="content-box">
                  <div className="sec-title mb_60">
                    <span className="sub-title">Contact Us</span>
                    <h2>Contact Info</h2>
                  </div>
                  <div className="inner-box pb_20">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <img src={icon1} alt="" />
                          </div>
                          <h5>Head Office:</h5>
                          <p>
                            Tegalsari, Kec. Garung, Kabupaten Wonosobo, Jawa
                            Tengah 56353
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <img src={icon3} alt="" />
                          </div>
                          <h5>Email:</h5>
                          <p>
                            <Link to="mailto:garungtegalsari@gmail.com">
                              garungtegalsari@gmail.com
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <img src={icon3} alt="" />
                          </div>
                          <h5>Phone No:</h5>
                          <p>
                            <Link to="https://wa.me/6281380974808">
                              +6281380974808
                            </Link>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <img src={icon3} alt="" />
                          </div>
                          <h5>Email:</h5>
                          <p>
                            <Link to="mailto:tegalsari.pemdes@gmail.com">
                              tegalsari.pemdes@gmail.com
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <Link to="https://instagram.com/desa.tegalsarigarung">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact-style-two end */}

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="outer-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4688243019696!2d109.9044195175031!3d-7.301106874640349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700af446a91bfd%3A0xc1684afcf9b435e!2skantor%20kelurahan%20desa%20TEGALSARI!5e0!3m2!1sid!2sid!4v1753625765954!5m2!1sid!2sid"
            width="100%"
            height="560"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Map of New York, NY, USA"
          ></iframe>
        </div>
      </section>
      {/* Google Map Section End */}
    </React.Fragment>
  );
};

export default ContactMain;
