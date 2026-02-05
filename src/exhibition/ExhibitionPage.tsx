import "../scss/index.scss";
import React, { useMemo, useState, lazy } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/Exhibitions.jpg";

import useFetch from "./hooks/useFetch"; 

type StrapiImage = {
  url?: string;
  data?: {
    attributes?: {
      url?: string;
    };
  };
};

type ExhibitionApi = {
  id: number;
  documentId?: string;
  slug?: string;
  title: string;
  exhibition_type?: string;
  date?: string;
  activeStatus: 1 | 2 | 3;
  filterCategory?: string | string[];
  url?: string;
  image?: string | StrapiImage;
};


type ApiResponse<T> = {
  data: T[];
};

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:1337";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const { t, i18n } = useTranslation();


  const apiUrl = `${API_BASE}/api/exhibitions?populate=*&locale=${i18n.language}`;

  const { data, loading, error } = useFetch<ApiResponse<ExhibitionApi>>(apiUrl);
  const exhibitions = data?.data ?? [];

  const filteredExhibitions = useMemo(() => {
    return exhibitions.filter((exhibition) => {
      if (exhibition.activeStatus !== activeTab) return false;

      if (activeTab !== 3) return true;

      // Past filter logic: only applies when activeTab === 3
      if (activeCategory === "all") return true;

      const categories = Array.isArray(exhibition.filterCategory)
        ? exhibition.filterCategory
        : exhibition.filterCategory
        ? [exhibition.filterCategory]
        : [];

      return categories.includes(activeCategory);
    });
  }, [exhibitions, activeTab, activeCategory]);


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

            {activeTab === 3 && (
              <div className="category-tabs col-12">
                <button
                  className={activeCategory === "all" ? "active" : ""}
                  onClick={() => setActiveCategory("all")}
                >
                  {t("PageExhibition.filter_all")}
                </button>

                <button
                  className={
                    activeCategory === "photoExhibition" ? "active" : ""
                  }
                  onClick={() => setActiveCategory("photoExhibition")}
                >
                  {t("PageExhibition.filter_photoExhibition")}
                </button>

                <button
                  className={activeCategory === "goethe" ? "active" : ""}
                  onClick={() => setActiveCategory("goethe")}
                >
                  {t("PageExhibition.filter_Goethe")}
                </button>

                <button
                  className={activeCategory === "c" ? "active" : ""}
                  onClick={() => setActiveCategory("c")}
                >
                  {t("PageExhibition.filter_c")}
                </button>

                <button
                  className={activeCategory === "d" ? "active" : ""}
                  onClick={() => setActiveCategory("d")}
                >
                  {t("PageExhibition.filter_d")}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="cards">
          {loading && (
            <div className="container">
              <div className="row">
                <div className="empty-message">
                  {t("PageExhibition.loading", "Loading...")}
                </div>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="container">
              <div className="row">
                <div className="empty-message">
                  {t("PageExhibition.error", "Failed to load exhibitions")}
                </div>
              </div>
            </div>
          )}

          {!loading && !error && filteredExhibitions.length > 0 ? (
            filteredExhibitions.map((exhibition) => {
              const imageUrlRaw =
                typeof exhibition.image === "string"
                  ? exhibition.image
                  : exhibition.image?.url ??
                    exhibition.image?.data?.attributes?.url;

              const imageUrl =
                imageUrlRaw && imageUrlRaw.startsWith("http")
                  ? imageUrlRaw
                  : imageUrlRaw
                  ? `${API_BASE}${imageUrlRaw}`
                  : undefined;

              const detailsPath = `/${exhibition.slug ?? exhibition.documentId ?? exhibition.id}`;


              return (
                <div
                  key={exhibition.documentId ?? exhibition.id}
                  className="card col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
                >
                  <Link to={detailsPath} className="img">
                    {imageUrl ? (
                      <img src={imageUrl} alt={exhibition.title} />
                    ) : null}
                  </Link>

                  <div className="info">
                    <div className="info-content offset-xl-2 col-xl-8 offset-lg-1 col-lg-10 offset-md-2 col-md-8 offset-sm-1 col-sm-10 offset-1 col-10">
                      <p className="title">{exhibition.exhibition_type}</p>
                      <Link className="info-title" to={detailsPath}>
                        {exhibition.title}
                      </Link>

                      <span>{exhibition.date}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : !loading && !error ? (
            <div className="container">
              <div className="row">
                <div className="empty-message">
                  {t("PageExhibition.empty")}
                </div>
              </div>
            </div>
          ) : null}
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
