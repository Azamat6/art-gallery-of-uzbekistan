import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "./hooks/useFetch";
import "bootstrap/dist/css/bootstrap.css";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));

const API_BASE =
  "https://strapi-cloud-template-blog-386fd08964-production.up.railway.app";

type ApiResponse<T> = { data: T[] };

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
  slug?: string;
  title: string;
  content?: string;
  date: string;
  image?: string | StrapiImage;
};

const ExhibitionDetails: React.FC = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  const rawLanguage = i18n.resolvedLanguage ?? i18n.language;
  const language = rawLanguage ? rawLanguage.split("-")[0] : "en";

  const apiUrl = `${API_BASE}/api/exhibitions?filters[slug][$eq]=${encodeURIComponent(
    slug ?? "",
  )}&fields[0]=title&fields[1]=date&fields[2]=content&populate[image][fields][0]=url&locale=${language}`;

  const { data, loading, error } = useFetch<ApiResponse<ExhibitionApi>>(apiUrl);

  const exhibition = data?.data?.[0];

  if (loading) {
    return (
      <div className="loading-container" id="spinner">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error || !exhibition) return <div>Not found</div>;

  const imageUrlRaw =
    typeof exhibition.image === "string"
      ? exhibition.image
      : exhibition.image?.url ?? exhibition.image?.data?.attributes?.url;

  const imageUrl =
    imageUrlRaw && imageUrlRaw.startsWith("http")
      ? imageUrlRaw
      : imageUrlRaw
      ? `${API_BASE}${imageUrlRaw}`
      : undefined;

  return (
    <div className="app-container">
      <PagesHeader
        title={exhibition.title}
        subtitle={exhibition.date}
        backgroundImage={imageUrl}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text preline">{exhibition.content}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
};

export default ExhibitionDetails;
