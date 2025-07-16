import "../../../scss/index.css";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2025/nbuCollection/nbuCollection.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.nbuCollection")}
        subtitle=" "
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.nbuCollection.text1")}</p>

              <div className="nbuCollection-image1"></div>

              <p className="text">{t("Exhibitions.nbuCollection.text2")}</p>

              <p className="text">{t("Exhibitions.nbuCollection.text3")}</p>

              <div className="nbuCollection-image2"></div>

              <p className="text">
                {t("Exhibitions.nbuCollection.text4")}{" "}
                <a href="/art-gallery-of-uzbekistan/src/collection/collection.html">
                  {t("Exhibitions.nbuCollection.text5")}
                </a>
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
