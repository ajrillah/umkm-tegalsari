import SingleService from "../../components/Service/SingleService";

import serviceIcon1 from "../../assets/images/service/service-1.jpg";
import serviceIcon2 from "../../assets/images/service/service-1.jpg";
import serviceIcon3 from "../../assets/images/service/service-1.jpg";

const Service = () => {
  return (
    <section className="service-section bg-color-1 sec-pad centred">
      <div className="auto-container">
        <div className="sec-title mb_60">
          <span className="sub-title"></span>
          <h2>Produk UMKM</h2>
        </div>

        <div className="row clearfix">
          {/* KOPI */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img
                src={serviceIcon1}
                alt="Kopi"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Kopi</h3>
              <p className="text-justify text-gray-700">
                Kopi Tegalsari dihasilkan dari biji pilihan yang tumbuh di
                dataran tinggi Wonosobo. Dengan aroma khas dan cita rasa yang
                kuat, kopi ini menjadi pilihan tepat bagi pecinta kopi yang
                menghargai kualitas lokal dan proses panen alami yang dilakukan
                langsung oleh petani desa.
              </p>
            </div>
          </div>

          {/* LEMON */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img
                src={serviceIcon2}
                alt="Lemon"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Lemon</h3>
              <p className="text-justify text-gray-700">
                Lemon segar dari kebun UMKM Tegalsari dipetik langsung dari
                tanaman yang dirawat secara organik. Rasanya yang asam
                menyegarkan menjadikannya cocok untuk minuman sehat, infused
                water, maupun olahan kuliner yang membutuhkan sentuhan rasa
                alami.
              </p>
            </div>
          </div>

          {/* MADU */}
          <div className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="p-4 bg-white rounded shadow-sm h-100">
              <img
                src={serviceIcon3}
                alt="Madu"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Madu</h3>
              <p className="text-justify text-gray-700">
                Madu murni dari peternakan lebah desa kami dipanen secara
                tradisional untuk menjaga keaslian rasa dan nutrisinya. Madu ini
                tidak hanya manis dan lezat, tetapi juga menyimpan banyak
                manfaat kesehatan, menjadikannya favorit sebagai pemanis alami
                dan suplemen harian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
