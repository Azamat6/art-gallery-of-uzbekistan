import "../scss/index.scss";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect, lazy, createRef } from "react";

import PagesHeader from "../components/PagesHeader";
const Footer = lazy(() => import("../components/Footer"));
import BgIMage from "../assets/images/Daraxt-yonidagi-qiz_Nadejda-Kashina_1930.jpg";

import Pagination from "./Pagination";
import Posts from "./Posts";
import data from "../assets/data/onlineCollection.json"; // Импорт JSON

interface LocalizedText {
  ru: string;
  en: string;
  uz: string;
}

interface Post {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string;
  title: LocalizedText;
  author: LocalizedText;
  year: string;
  category: string;
}

const App: React.FC = () => {
  const { t } = useTranslation();

  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filteredPosts = posts.filter((post) => {
    if (activeCategory === "all") return true;
    return post.category === activeCategory;
  });


  useEffect(() => {
    setPosts(data as Post[]); // типизируем вручную
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  const currentPosts = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  
  const howManyPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);



  return (
    <div className="app-container">
      <PagesHeader
        title={t("PageCollection.header.title")}
        subtitle={t("PageCollection.header.title2")}
        backgroundImage={BgIMage}
      />
      <section className="CollectionPage">
        <div className="container">
          <div className="row">
            <div
              className="startInfo col-xl-8 offset-xl-4 col-lg-9 offset-lg-3 col-12 offset-0"
              ref={topRef}
            >
              <h4>{t("PageCollection.subtitle")}</h4>
            </div>
            <div className="gallery">
              <h2 className="paginationTitle">
                {t("PageCollection.online-collection")}
              </h2>
              {/* <p className="text">{t("PageCollection.text")}</p> */}
              <div className="category-tabs">
                <button
                  className={activeCategory === "all" ? "active" : ""}
                  onClick={() => setActiveCategory("all")}
                >
                  {t("PageCollection.filter_all")}
                </button>
                
                <button
                  className={activeCategory === "painting" ? "active" : ""}
                  onClick={() => setActiveCategory("painting")}
                >
                  {t("PageCollection.filter_painting")}
                </button>
                
                <button
                  className={activeCategory === "graphics" ? "active" : ""}
                  onClick={() => setActiveCategory("graphics")}
                >
                  {t("PageCollection.filter_graphics")}
                </button>
                
                <button
                  className={activeCategory === "photo" ? "active" : ""}
                  onClick={() => setActiveCategory("photo")}
                >
                  {t("PageCollection.filter_photo")}
                </button>
              </div>

              <Posts posts={currentPosts} />
              <Pagination
                pages={howManyPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const topRef = createRef<HTMLDivElement>();
export default App;
