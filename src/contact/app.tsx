import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/Contact.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageContact.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="PageAbout Contact">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
              <h4>{t("PageContact.title1")}</h4>
              <p className="text margintopM">
                <a href="tel:+998712098015">+998 (71) 209-80-15</a>
                <a className="margintopM" href="tel:+998712098016">
                  +998 (71) 209-80-16
                </a>
              </p>
              <h4 className="margintopS">{t("PageContact.title2")}</h4>
              <p className="text margintopM">
                <a href="mailto:gmail@mail.ru">gmail@mail.ru</a>
              </p>
              <h4 className="margintopS">{t("PageContact.title3")}</h4>
              <div className="timetable bb margintopM">
                <p className="text">
                  {t("PageVisit.visitorInfo.category_text7")}
                </p>
                <p className="text">10:00 - 17:00</p>
              </div>
              <div className="timetable margintopM">
                <p className="text">
                  {t("PageVisit.visitorInfo.category_text8")}
                </p>
                <p className="text">
                  {t("PageVisit.visitorInfo.category_text9")}
                </p>
              </div>
            </div>
            <div className="firstColumn col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.79057046405!2d69.2714339!3d41.3154408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b4873c949%3A0x1b0fa19865bd296a!2sArt%20Gallery%20of%20Uzbekistan!5e0!3m2!1sru!2s!4v1732047903361!5m2!1sru!2s"
                loading="lazy"
              ></iframe>
            </div>
            <div className="request firstColumn col-12 margintopS">
              <p className="text">
                <span>{t("PageContact.text")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
}

export default App;
