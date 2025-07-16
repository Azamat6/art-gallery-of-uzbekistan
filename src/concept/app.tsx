import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/ConceptOfGallery.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageConcept.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <h4>{t("PageConcept.first_floor.title")}</h4>
              <p className="text margintop">
                <span>{t("PageConcept.first_floor.subtitle1")}</span>
              </p>
              <p className="text">{t("PageConcept.first_floor.text1")}</p>
              <p className="text">{t("PageConcept.first_floor.text2")}</p>
              <p className="text margintop">
                <span>{t("PageConcept.first_floor.subtitle2")}</span>
              </p>
              <p className="text">{t("PageConcept.first_floor.text3")}</p>
              <div className="photoFirstFloor"></div>
              <p className="text">
                <span>{t("PageConcept.first_floor.subtitle3")}</span>
              </p>
              <p className="text">{t("PageConcept.first_floor.text4")}</p>

              <h4 className="margintopS">
                {t("PageConcept.second_floor.title")}
              </h4>

              <p className="text margintop">
                <span>{t("PageConcept.second_floor.subtitle1")}</span>
              </p>
              <p className="text">{t("PageConcept.second_floor.text1")}</p>
              <div className="photoConceptRoom"></div>
              <p className="text margintop">
                <span>{t("PageConcept.second_floor.subtitle2")}</span>
              </p>
              <p className="text">{t("PageConcept.second_floor.text2")}</p>

              <p className="text margintop">
                <span>{t("PageConcept.second_floor.subtitle3")}</span>
              </p>
              <p className="text">{t("PageConcept.second_floor.text3")}</p>
              <p className="text">{t("PageConcept.second_floor.text4")}</p>
              <p className="text margintop">
                <span>{t("PageConcept.second_floor.subtitle4")}</span>
              </p>
              <p className="text">{t("PageConcept.second_floor.text5")}</p>
              <p className="text">
                {t("PageConcept.second_floor.text6")}{" "}
                <a href="/art-gallery-of-uzbekistan/src/coins/coins.html">
                  {t("PageConcept.second_floor.text7")}
                </a>{" "}
                {t("PageConcept.second_floor.text8")}
              </p>
              <p className="text">{t("PageConcept.second_floor.text9")}</p>

              <p className="text margintopS creditsKamola">
                <span>{t("PageConcept.author")}</span>
                <span>{t("PageConcept.author_role")}</span>
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
