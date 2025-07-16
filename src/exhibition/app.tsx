import "../scss/index.scss";
import React, { useState, lazy } from "react";
import { useTranslation } from "react-i18next";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/Exhibitions.jpg";

import { exhibitionsData } from "./data";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const filteredExhibitions = exhibitionsData.filter(
    (exhibition) => exhibition.id === activeTab
  );

  const { t } = useTranslation();

  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageExhibition.header.title")}
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="Ex">
        <div className="container">
          <div className="row">
            <div className="tabs col-12">
              <button
                className={activeTab === 1 ? "active" : ""}
                onClick={() => setActiveTab(1)}
              >
                {t("PageExhibition.button_now")}
              </button>
              <button
                className={activeTab === 2 ? "active" : ""}
                onClick={() => setActiveTab(2)}
              >
                {t("PageExhibition.button_future")}
              </button>
              <button
                className={activeTab === 3 ? "active" : ""}
                onClick={() => setActiveTab(3)}
              >
                {t("PageExhibition.button_past")}
              </button>
            </div>
          </div>
        </div>
        <div className="cards">
          {filteredExhibitions.length > 0 ? (
            filteredExhibitions.map((exhibition) => (
              <div
                key={exhibition.title}
                className="card col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              >
                <a href={exhibition.url} className="img">
                  <img src={exhibition.image} alt={exhibition.title} />
                </a>
                <div className="info">
                  <div className="info-content offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 offset-md-2 col-md-8 offset-sm-1 col-sm-10 offset-1 col-10">
                    <p className="title">{t(exhibition.description)}</p>
                    <a className="info-title" href={exhibition.url}>
                      {t(exhibition.title)}
                    </a>

                    <span>{exhibition.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="container">
              <div className="row">
                <div className="empty-message">{t("PageExhibition.empty")}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="info-for-previous">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
};

export default App;
