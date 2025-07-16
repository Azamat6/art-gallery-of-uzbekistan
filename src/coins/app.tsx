import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/Coins-min.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageCoins.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="Coins PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                <span>{t("PageCoins.coinsIntro")}</span>
              </p>
              <h4 className="margintopS">
                {t("PageCoins.coinsFormationTitle")}
              </h4>
              <p className="text">{t("PageCoins.coinsText1")}</p>
              <p className="text">{t("PageCoins.coinsText2")}</p>
              <p className="text">{t("PageCoins.coinsText3")}</p>
              <p className="text">{t("PageCoins.coinsText4")}</p>
              <p className="text">{t("PageCoins.coinsText5")}</p>

              <h4 className="margintop">
                {t("PageCoins.coinsHistoricalTitle")}
              </h4>
              <p className="text">{t("PageCoins.coinsText6")}</p>

              <div className="photoGal"></div>

              <p className="text">{t("PageCoins.coinsText7")}</p>
              <p className="text">{t("PageCoins.coinsText8")}</p>
              <p className="text">{t("PageCoins.coinsText9")}</p>
              <p className="text">{t("PageCoins.coinsText10")}</p>

              <h4 className="margintop">{t("PageCoins.coinsCulturalTitle")}</h4>
              <p className="text">{t("PageCoins.coinsText11")}</p>
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
