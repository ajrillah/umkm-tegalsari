import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import SiteBreadcrumb from "../../components/Common/Breadcumb";
import bannerbg from "../../assets/images/banner/madu1.jpeg";
import ServiceTwoMain from "../../components/ServiceOne/ServiceTwoMain";

const ServiceTwo = () => {
  return (
    <React.Fragment>
      <Header
        parentMenu="page"
        secondParentMenu="services"
        activeMenu="/service-2"
      />
      {/* breadcrumb-area-start */}
      <SiteBreadcrumb
        pageTitle="kopi"
        pageName="Our Service 2"
        breadcrumbsImg={bannerbg}
      />
      {/* breadcrumb-area-start */}
      {/* ServiceOneMain */}
      <ServiceTwoMain />
      {/* ServiceOneMain */}

      <Footer />
    </React.Fragment>
  );
};

export default ServiceTwo;
