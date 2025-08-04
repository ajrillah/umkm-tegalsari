import React from "react";
import { Link } from "react-router-dom";
import bgImg1 from "../../assets/images/shape/shape-16.png";
import aboutPart1 from "../../assets/images/resource/men-2.png";
import aboutPart2 from "../..//assets/images/banner/bannerlemonatas.jpg";
import aboutPart3 from "../../assets/images/banner/bannerlemontengah.jpg";
import aboutPart4 from "../../assets/images/banner/bannerlemonbawah.jpg";
import aboutPart5 from "../../assets/images/banner/madu3.JPG";
import aboutPart6 from "../../assets/images/banner/madu3.JPG";
import aboutPart7 from "../../assets/images/service/service-13.jpg";
import aboutPart8 from "../../assets/images/service/service-14.jpg";

const ServiceDetailsContentTwo = () => {
  return (
    <React.Fragment>
      <>
        {/* service-details */}
        <section className="service-details sec-pad-2">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-side">
                <div className="service-details-content">
                  <div className="content-one mb_70">
                    <figure className="image-box mb_35">
                      <img src={aboutPart2} alt="" />
                    </figure>
                    <div className="text-box">
                      <h2>Lemon di Desa Tegalsari</h2>
                      <p>
                        Desa Tegalsari yang terletak di kawasan pegunungan
                        Wonosobo memiliki kondisi tanah yang subur dan iklim
                        yang sejuk, menjadikannya tempat yang ideal untuk
                        budidaya tanaman lemon. Buah lemon yang dihasilkan
                        memiliki warna cerah, kulit yang tebal, serta aroma
                        segar yang khas. Lemon dari desa ini dikenal memiliki
                        rasa yang seimbang antara asam dan segar, menjadikannya
                        bahan favorit dalam berbagai olahan makanan dan minuman.
                      </p>
                    </div>
                  </div>
                  <div className="content-two mb_70">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <figure className="image-box">
                          <img src={aboutPart3} alt="" />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                        <div className="text-box ml_30">
                          <h2>Proses Budidaya yang Alami</h2>
                          <p>
                            Budidaya lemon dilakukan oleh petani lokal dengan
                            metode organik, tanpa penggunaan pestisida atau
                            bahan kimia sintetis. Tanaman dirawat secara rutin
                            dengan pemangkasan, penyiraman teratur, dan
                            pemupukan alami. Proses panen dilakukan secara
                            selektif saat buah mencapai kematangan sempurna
                            untuk menjaga kualitas dan kandungan gizinya.
                            Pendekatan alami ini tidak hanya menjaga kesegaran
                            dan rasa lemon, tetapi juga mendukung pertanian
                            berkelanjutan yang ramah lingkungan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-three mb_70">
                    <div className="text-box mb_40">
                      <h2>Manfaat dan Olahan Produk</h2>
                      <p>
                        Lemon Tegalsari banyak dimanfaatkan sebagai bahan
                        infused water, campuran teh herbal, serta sebagai
                        penambah cita rasa pada masakan. Selain itu, para pelaku
                        UMKM juga mengolah lemon menjadi sirup lemon, selai, dan
                        permen lemon yang alami dan menyehatkan. Dengan
                        kandungan vitamin C yang tinggi dan sifat
                        antibakterinya, lemon ini menjadi salah satu produk
                        unggulan yang memiliki potensi besar untuk dikembangkan
                        ke pasar yang lebih luas.
                      </p>
                    </div>
                    <div className="inner-box centred">
                      <div className="row clearfix">
                        <div className="col-lg-12 col-md-6 col-sm-12 single-column">
                          {/* <div className="single-item"> */}
                          {/* <div className="icon-box"> */}
                          <img src={aboutPart4} alt="" />
                          {/* </div> */}
                          {/* <h4>Expert Investigator Agents</h4> */}
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service-details end */}
      </>
    </React.Fragment>
  );
};

export default ServiceDetailsContentTwo;
