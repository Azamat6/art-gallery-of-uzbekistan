import "../../../scss/index.scss";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2024/Synapse/Title.png";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.synapse")}
        subtitle="19.3.2024 - 19.4.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.synapse.text1")}</p>

              <p className="text">{t("Exhibitions.synapse.text2")}</p>

              <p className="text">{t("Exhibitions.synapse.text3")}</p>

              <div className="synapseImg"></div>

              <p className="text">{t("Exhibitions.synapse.text4")}</p>
              <p className="text">{t("Exhibitions.synapse.text5")}</p>
              <p className="text">{t("Exhibitions.synapse.text6")}</p>

              <p className="text">{t("Exhibitions.synapse.text7")}</p>
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
