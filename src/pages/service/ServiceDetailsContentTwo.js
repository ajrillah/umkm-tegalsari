import React from "react";
// import { Link } from "react-router-dom";
// import bgImg1 from "../../assets/images/shape/shape-16.png";
// import aboutPart1 from "../../assets/images/resource/men-2.png";
import aboutPart2 from "../..//assets/images/banner/bannerkopiatas.png";
import aboutPart3 from "../../assets/images/banner/bannerkopitengah.png";
import aboutPart4 from "../../assets/images/banner/bannerkopibawah.png";
// import aboutPart5 from "../../assets/images/banner/madu3.JPG";
// import aboutPart6 from "../../assets/images/banner/madu3.JPG";
// import aboutPart7 from "../../assets/images/service/service-13.jpg";
// import aboutPart8 from "../../assets/images/service/service-14.jpg";

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
                      <h2>Circle Coffee</h2>
                      <p>
                        Circle Coffee merupakan UMKM kopi asal Desa Tegalsari
                        yang memproduksi kopi lokal dari biji kopi yang tumbuh
                        langsung di lereng Gunung Bismo. Didirikan pada tahun
                        2021, setiap produk yang dihasilkan membawa rasa khas
                        alam Desa Tegalsari dan semangat masyarakatnya. Circle
                        Coffee dirintis oleh Ahmad Fadol, pemuda desa yang ingin
                        memperkenalkan cita rasa khas kopi asli Desa Tegalsari
                        ke khalayak yang lebih luas.
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
                          <h2>Kopi</h2>
                          <p>
                            Kopi yang dihasilkan oleh Circle Coffee berasal dari
                            kebun-kebun kopi milik warga yang tersebar di
                            lereng-lereng sekitar desa. Biji kopi yang digunakan
                            merupakan jenis Arabika dan Robusta, yang tumbuh
                            secara alami dan memiliki cita rasa asam yang khas.
                            Karakteristik tanah serta iklim sejuk di ketinggian
                            900–1200 mdpl menjadikan kopi dari wilayah lereng
                            Gunung Bismo ini memiliki kualitas alami yang
                            unggul. Selain itu, setiap tahapan dilakukan
                            sekaligus memberdayakan warga sekitar melalui
                            pertanian kopi dan industri kreatif berbasis produk
                            lokal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-three mb_70">
                    <div className="text-box mb_40">
                      <h2>Produk</h2>
                      <p>
                        Circle Coffee menawarkan berbagai produk unggulan yang
                        berasal dari kekayaan alam Desa Tegalsari, dengan dua
                        jenis utama yaitu kopi Arabika dan Robusta. Varian
                        Arabika menggunakan jenis Java Arabica yang diolah
                        melalui beragam metode tersedia seperti full wash,
                        natural, semi-wash, hingga wine process yang
                        masing-masing memberikan karakter rasa berbeda, mulai
                        dari bersih dan strong hingga kompleks dan fermentatif.
                        Sementara itu, Robusta yang digunakan adalah Robusta
                        Highland, yang tumbuh di dataran tinggi dan tetap
                        menyimpan cita rasa asam khas meski berkarakter kuat.
                        Selain kopi, Circle Coffee juga memproduksi coklat asli
                        dari kakao lokal yang diolah tanpa tambahan bahan kimia,
                        serta lemon kering yang cocok untuk diseduh sebagai
                        minuman sehat alami. Seluruh produk dikemas dengan
                        konsep sederhana namun berkelas, cocok sebagai
                        oleh-oleh, konsumsi harian, maupun bagian dari gaya
                        hidup sehat dan berkelanjutan.
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
