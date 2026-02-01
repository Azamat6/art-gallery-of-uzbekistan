import "../../../scss/index.scss";
import { useTranslation } from "react-i18next";
import { lazy } from "react";

import PagesHeader from "../../../components/PagesHeader";
const Footer = lazy(() => import("../../../components/Footer"));
import BgIMage from "../../../assets/images/exhibitions/2024/DjalolidinMirtajiev/Title.jpg";

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.cards.mirtajiyev")}
        subtitle="16.02.2024 - 15.3.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                <span>{t("Exhibitions.mirtajiyev.span1")}</span>
              </p>

              <p className="text">{t("Exhibitions.mirtajiyev.text1")}</p>

              <p className="text">{t("Exhibitions.mirtajiyev.text2")}</p>

              <p className="text">{t("Exhibitions.mirtajiyev.text3")}</p>

              <div className="mirtajiyevImg"></div>

              <p className="text">
                <span>{t("Exhibitions.mirtajiyev.span2")}</span>
              </p>
              <p className="list">
                <span>{t("Exhibitions.mirtajiyev.list1")}</span>
                <span>{t("Exhibitions.mirtajiyev.list2")}</span>
                <span>{t("Exhibitions.mirtajiyev.list3")}</span>
                <span>{t("Exhibitions.mirtajiyev.list4")}</span>
                <span>{t("Exhibitions.mirtajiyev.list5")}</span>
                <span>{t("Exhibitions.mirtajiyev.list6")}</span>
                <span>{t("Exhibitions.mirtajiyev.list7")}</span>
                <span>{t("Exhibitions.mirtajiyev.list8")}</span>
                <span>{t("Exhibitions.mirtajiyev.list9")}</span>
              </p>

              <p className="text">
                <span>{t("Exhibitions.mirtajiyev.span3")}</span>
              </p>

              <p className="list">
                <span>{t("Exhibitions.mirtajiyev.list10")}</span>{" "}
                <span>{t("Exhibitions.mirtajiyev.list11")}</span>{" "}
                <span>{t("Exhibitions.mirtajiyev.list12")}</span>
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
