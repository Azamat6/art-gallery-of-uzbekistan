import "../../../scss/index.css";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2024/HelgaParis/Title.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.helga")}
        subtitle="16.04.2024 - 16.05.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.helga.text1")}</p>
              <p className="text">{t("Exhibitions.helga.text2")}</p>

              <div className="Helga1"></div>

              <p className="text">{t("Exhibitions.helga.text3")}</p>
              <p className="text">{t("Exhibitions.helga.text4")}</p>

              <div className="Helga3"></div>

              <p className="text">{t("Exhibitions.helga.text5")}</p>
              <p className="text">{t("Exhibitions.helga.text6")}</p>

              <p className="text">{t("Exhibitions.helga.text7")}</p>
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
