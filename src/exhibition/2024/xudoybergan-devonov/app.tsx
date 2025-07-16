import "../../../scss/index.scss";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2024/XudoyberganDevonov/Title.png";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.devonov")}
        subtitle="21.05.2024 - 17.06.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.devonov.text1")}</p>

              <p className="text">{t("Exhibitions.devonov.text2")}</p>

              <p className="text">{t("Exhibitions.devonov.text3")}</p>

              <p className="text">{t("Exhibitions.devonov.text4")}</p>
              <p className="text">{t("Exhibitions.devonov.text5")}</p>
              <p className="text">{t("Exhibitions.devonov.text6")}</p>
              <div className="devonovImg"></div>
              <p className="text">{t("Exhibitions.devonov.text7")}</p>
              <p className="text">{t("Exhibitions.devonov.text8")}</p>
              <p className="text">{t("Exhibitions.devonov.text9")}</p>
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
