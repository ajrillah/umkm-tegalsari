import React from "react";
import { Link } from "react-router-dom";
import aboutPart1 from "../../assets/images/banner/banner-2.jpg";
import aboutPart2 from "../../assets/images/banner/banner-2.jpg";
import bgImg1 from "../../assets/images/shape/shape-5.png";
import bgImg2 from "../../assets/images/shape/shape-6.png";

const About = (props) => {
  return (
    <>
      {/* about-section */}
      <section className="about-section pt_150 pb_150">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_one">
                <div className="image-box mr_40 pl_80 pb_70">
                  <div
                    className="image-shape"
                    style={{
                      backgroundImage: `url(${bgImg1})`,
                    }}
                  />
                  <figure className="image image-1">
                    <img className="main" src={aboutPart1} alt="" />
                  </figure>
                  <figure className="image image-2">
                    <img className="main" src={aboutPart2} alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box ml_45">
                  <div className="sec-title mb_25">
                    <span className="sub-title mb_13">Tentang Kami</span>
                    <h2>UMKM DESA TEGALSARI</h2>
                  </div>
                  <div className="text-box mb_35">
                    <p>
                      “UMKM Desa Tegalsari hadir untuk mendukung kemandirian
                      ekonomi warga melalui produk-produk lokal unggulan. Kami
                      percaya kekuatan desa bisa mendunia.”
                    </p>
                  </div>

                  <div className="btn-box">
                    <Link to="contact" className="theme-btn btn-one">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
    </>
  );
};

export default About;
