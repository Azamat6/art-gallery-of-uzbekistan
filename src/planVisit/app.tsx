import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/PlanVisit-min.jpg";
import PlanImage from "../assets/images/ArtGallery.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageVisit.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="Tour">
        <div className="container">
          <div className="row">
            <div className="tourWrapper col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h3 className="title ">{t("PageVisit.tour.title")}</h3>
              <p className="text">{t("PageVisit.tour.text")}</p>
            </div>
            <div className="table col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="firstrow">
                <p className="text">{t("PageVisit.tour.table_text1")}</p>
                <p className="text">{t("PageVisit.tour.table_text2")}</p>
              </div>
              <div className="firstrow">
                <p className="text">{t("PageVisit.tour.table_text3")}</p>
                <p className="text">{t("PageVisit.tour.table_text4")}</p>
              </div>
              <div className="firstrow">
                <p className="text">{t("PageVisit.tour.table_text5")}</p>
                <p className="text">{t("PageVisit.tour.table_text6")}</p>
              </div>
              <div className="firstrow">
                <p className="text">{t("PageVisit.tour.table_text7")}</p>
                <p className="text">{t("PageVisit.tour.table_text8")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Prices">
        <div className="container">
          <div className="row">
            <h3 className="title">{t("PageVisit.prices.title")}</h3>
            <p className="text col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              {t("PageVisit.prices.text1")}
            </p>
            <p className="text col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              {t("PageVisit.prices.text2")}
            </p>
            <p className="text col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 margintop">
              {t("PageVisit.prices.text3")}
              <sup>2</sup> {t("PageVisit.prices.text4")}
            </p>
          </div>
        </div>
      </section>
      <section className="PlanVisit">
        <div className="VisitorInfo">
          <div className="img">
            <img src={PlanImage} alt="Art Gallery" loading="lazy" />
          </div>
          <div className="info">
            <div className="container">
              <div className="row">
                <div className="info-content">
                  <h4 className="title">{t("PageVisit.visitorInfo.title1")}</h4>
                  <div className="info-text">
                    <div className="category">
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text1")}
                      </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text2")}
                      </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text3")}
                      </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text4")}
                      </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text5")}
                      </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text6")}
                      </p>
                    </div>
                    <div className="price">
                      <p className="text">
                        10.000 {t("PageVisit.visitorInfo.price")}
                      </p>
                      <p className="text">
                        5.000 {t("PageVisit.visitorInfo.price")}
                      </p>
                      <p className="text">
                        5.000 {t("PageVisit.visitorInfo.price")}
                      </p>
                      <p className="text">
                        50.000 {t("PageVisit.visitorInfo.price")}
                      </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.noprice")}
                      </p>
                      <div className="text margintopL">
                        {t("PageVisit.visitorInfo.noprice")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-content margintop">
                  <h4 className="title">{t("PageVisit.visitorInfo.title2")}</h4>
                  <div className="info-text">
                    <div className="category ">
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text7")}
                      </p>
                      <p className="text">
                        {" "}
                        {t("PageVisit.visitorInfo.category_text8")}
                      </p>
                    </div>
                    <div className="price width-more">
                      <p className="text ">10:00 - 17:00 </p>
                      <p className="text">
                        {t("PageVisit.visitorInfo.category_text9")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <div className="row">
            <h3 className="title">{t("PageVisit.map.title")}</h3>
            <p className="text">{t("PageVisit.map.text")}</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.79057046405!2d69.2714339!3d41.3154408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b4873c949%3A0x1b0fa19865bd296a!2sArt%20Gallery%20of%20Uzbekistan!5e0!3m2!1sru!2s!4v1732047903361!5m2!1sru!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
}

export default App;
