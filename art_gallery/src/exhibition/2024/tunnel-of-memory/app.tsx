import "../../../scss/index.scss";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2024/TunnelOfMemory/Title.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.memory")}
        subtitle="18.01.2024 - 18.02.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.memory.text1")}</p>
              <p className="text">{t("Exhibitions.memory.text2")}</p>

              <p className="text">{t("Exhibitions.memory.text3")}</p>

              <div className="memoryImg"></div>

              <p className="text">{t("Exhibitions.memory.text4")}</p>

              <p className="text">{t("Exhibitions.memory.text5")}</p>
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
