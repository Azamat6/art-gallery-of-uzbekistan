import "../../../scss/index.css";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2023/MamaShawl/Title.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.shawl")}
        subtitle="8.10.2023 - 8.11.2023"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("Exhibitions.shawl.text1")}</p>

              <div className="shawl"></div>

              <p className="text">{t("Exhibitions.shawl.text2")}</p>
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
