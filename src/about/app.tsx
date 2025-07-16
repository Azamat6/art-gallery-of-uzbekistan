import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/About.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageAbout.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />

      <section className="PageAbout">
        <div className="container">
          <div className="row">
            {/* <h3 className="pagesSubtitle">История</h3> */}

            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                <span>{t("PageAbout.intro")}</span>
              </p>
              <h4 className="margintopS">{t("PageAbout.buildingTitle")}</h4>
              <p className="text ">{t("PageAbout.buildingText1")}</p>
              <p className="text">{t("PageAbout.buildingText2")}</p>
              <p className="text">{t("PageAbout.buildingText3")}</p>

              <h4 className="margintop">{t("PageAbout.treasuresTitle")}</h4>
              <p className="text ">{t("PageAbout.treasuresText1")}</p>

              <p className="text">
                {t("PageAbout.treasuresText2")}
                <a href="/art-gallery-of-uzbekistan/src/coins/coins.html">
                  {t("PageAbout.treasuresText3")}
                </a>
                {t("PageAbout.treasuresText4")}
              </p>

              <div className="photoGal"></div>
              <h4>{t("PageAbout.missionTitle")}</h4>
              <p className="text ">{t("PageAbout.missionText1")}</p>
              <p className="text">{t("PageAbout.missionText2")}</p>
              <h4 className="margintop">{t("PageAbout.sponsorsTitle")}</h4>
              <p className="text ">{t("PageAbout.sponsorsText")}</p>
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
