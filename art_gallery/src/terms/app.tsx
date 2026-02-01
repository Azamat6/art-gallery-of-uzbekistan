import "../scss/index.scss";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/terms.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageTerms.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />

      <section className="PageAbout">
        <div className="container">
          <div className="row">
            {/* <h3 className="pagesSubtitle">История</h3> */}

            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                <span>{t("PageTerms.intro")}</span>
              </p>
              <p className="text margintopS">
                {" "}
                <span>{t("PageTerms.text")}</span>
              </p>
              <p className="text">{t("PageTerms.text1")}</p>
              <p className="text">{t("PageTerms.text2")}</p>
              <p className="text">{t("PageTerms.text3")}</p>

              <p className="text margintopS">{t("PageTerms.text4")}</p>
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
