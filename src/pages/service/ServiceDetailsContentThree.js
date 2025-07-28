import React from "react";
import { Link } from "react-router-dom";
import bgImg1 from "../../assets/images/shape/shape-16.png";
import aboutPart1 from "../../assets/images/resource/men-2.png";
import aboutPart2 from "../..//assets/images/banner/madu-besar.png";
import aboutPart3 from "../../assets/images/banner/madu-mid.png";
import aboutPart4 from "../../assets/images/banner/madu8.jpeg";
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
                      <h2>Madu Tegalsari</h2>
                      <p>
                        Desa Tegalsari, yang terletak di tengah keindahan alam
                        pedesaan, menjadi rumah bagi sebuah UMKM unik yang
                        mengandalkan potensi alam liar: produksi madu asli dari
                        lebah liar. Tidak seperti madu komersial pada umumnya
                        yang berasal dari lebah jenis Apis mellifera, madu dari
                        Tegalsari dipanen langsung dari sarang lebah liar yang
                        hidup di hutan sekitar desa.
                      </p>
                      <p>
                        Proses pemanenan dilakukan secara alami dan
                        berkelanjutan oleh warga lokal yang telah mewarisi
                        pengetahuan ini secara turun-temurun. UMKM ini tidak
                        hanya menghadirkan produk madu murni berkualitas tinggi,
                        tetapi juga menciptakan lapangan kerja dan menumbuhkan
                        kesadaran akan pentingnya menjaga ekosistem hutan.
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
                          <h2>Lebah</h2>
                          <p>
                            Madu dari lebah liar dikenal memiliki khasiat yang
                            lebih tinggi karena dihasilkan dari beragam jenis
                            bunga hutan yang tidak bisa ditemukan pada budidaya
                            lebah biasa. Warna, rasa, dan aroma madunya sangat
                            khas dan cenderung lebih pekat. Lebah liar juga
                            lebih tahan terhadap penyakit, sehingga produksi
                            madunya tidak memerlukan perlakuan kimiawi.
                          </p>
                          <p>
                            Selain itu, proses panen yang dilakukan secara
                            tradisional tanpa sentuhan bahan tambahan membuat
                            madu ini tetap alami dan bernutrisi. UMKM Tegalsari
                            memastikan setiap tetes madu yang dijual merupakan
                            hasil alam yang murni, aman, dan bergizi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-three mb_70">
                    <div className="text-box mb_40">
                      <h2>Produk</h2>
                      <p>
                        UMKM Madu Tegalsari menghadirkan beragam produk madu
                        murni dari lebah liar, dikemas dalam berbagai ukuran
                        sesuai kebutuhan konsumen. Madu tersedia dalam bentuk
                        cair botolan serta dalam bentuk sarang madu utuh
                        (honeycomb), yang masih terjaga keasliannya. Tanpa
                        tambahan pemanis, pengawet, atau proses pemanasan
                        tinggi, setiap produk mempertahankan enzim, aroma, dan
                        nutrisi alaminya. Kemasannya pun sederhana namun
                        higienis. Produk ini cocok dikonsumsi sebagai suplemen
                        harian, oleh-oleh khas desa, atau bahan alami untuk
                        pengobatan tradisional.
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
