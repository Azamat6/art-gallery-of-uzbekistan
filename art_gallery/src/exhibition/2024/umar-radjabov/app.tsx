import "../../../scss/index.scss";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2024/UmarRadjabov/Title.png";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.umar")}
        subtitle="22.05.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.umar.text1")}</p>
              <p className="text">{t("Exhibitions.umar.text2")}</p>

              <p className="text">{t("Exhibitions.umar.text3")}</p>

              <p className="text">{t("Exhibitions.umar.text4")}</p>

              <div className="UmarRadjabovImg"></div>

              <p className="text">{t("Exhibitions.umar.text5")}</p>
              <p className="text">{t("Exhibitions.umar.text6")}</p>
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
