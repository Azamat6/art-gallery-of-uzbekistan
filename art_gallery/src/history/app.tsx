import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/Dedication-of-Yassaviy_Fayzulla-Akhmadaliev_2018.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageHistory.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">{t("PageHistory.text1")}</p>
              <p className="text">{t("PageHistory.text2")}</p>
              <p className="text">{t("PageHistory.text3")}</p>

              <p className="text">{t("PageHistory.text4")}</p>

              <p className="text">{t("PageHistory.text5")}</p>

              <h3 className="margintop">{t("PageHistory.Vasiliy_title")}</h3>

              <p className="text">{t("PageHistory.Vasiliy_text1")}</p>
              <p className="text">{t("PageHistory.Vasiliy_text2")}</p>
              <h3 className="margintop">{t("PageHistory.Sergey_title")}</h3>
              <p className="text">{t("PageHistory.Sergey_text")}</p>
              <h3 className="margintop">{t("PageHistory.Leonard_title")}</h3>
              <p className="text">{t("PageHistory.Leonard_text")}</p>
              <h3 className="margintop">{t("PageHistory.Alex_title")}</h3>
              <p className="text">{t("PageHistory.Alex_text1")}</p>
              <p className="text">{t("PageHistory.Alex_text2")}</p>
              <p className="text">{t("PageHistory.Alex_text3")}</p>
              <p className="text">{t("PageHistory.Alex_text4")}</p>
              <div className="autumn"></div>
              <h3 className="margintop">{t("PageHistory.Mumin_title")}</h3>
              <p className="text">{t("PageHistory.Mumin_text1")}</p>
              <p className="text">{t("PageHistory.Mumin_text2")}</p>
              <h3 className="margintop">{t("PageHistory.Fergana_title")}</h3>
              <p className="text">{t("PageHistory.Fergana_text1")}</p>
              <p className="text">{t("PageHistory.Fergana_text2")}</p>
              <p className="text">{t("PageHistory.Fergana_text3")}</p>
              <p className="text">{t("PageHistory.Fergana_text4")}</p>
              <h3 className="margintop">{t("PageHistory.Graphics_title")}</h3>
              <p className="text">{t("PageHistory.Graphics_text1")}</p>
              <p className="text">{t("PageHistory.Graphics_text2")}</p>
              <p className="text">{t("PageHistory.Graphics_text3")}</p>
              <h3 className="margintop">{t("PageHistory.Ural_title")}</h3>
              <p className="text">{t("PageHistory.Ural_text1")}</p>
              <p className="text">{t("PageHistory.Ural_text2")}</p>
              <p className="text">{t("PageHistory.Ural_text3")}</p>
              <h3 className="margintop">{t("PageHistory.Nikolay_title")}</h3>
              <p className="text">{t("PageHistory.Nikolay_text")}</p>
              <h3 className="margintop">{t("PageHistory.Shamsira_title")}</h3>
              <p className="text">{t("PageHistory.Shamsira_text")}</p>
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
