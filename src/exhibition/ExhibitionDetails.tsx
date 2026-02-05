import React, {lazy} from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "./hooks/useFetch";
import "bootstrap/dist/css/bootstrap.css";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));

const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:1337";

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

  const apiUrl = `${API_BASE}/api/exhibitions?filters[slug][$eq]=${encodeURIComponent(slug ?? "")}&populate=*&locale=${i18n.language}`;

  const { data, loading, error } = useFetch<ApiResponse<ExhibitionApi>>(apiUrl);

  const exhibition = data?.data?.[0];

  if (loading) return <div>Loading...</div>;
  if (error || !exhibition) return <div>Not found</div>;

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
              <p className="text">{exhibition.content}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  )
};

export default ExhibitionDetails;
