import "../scss/index.scss";

import PagesHeader from "../components/PagesHeader";
import Footer from "../components/Footer";
import BgIMage from "../assets/images/onlineGallery/Daraxt-yonidagi-qiz_Nadejda-Kashina_1930.jpg";

import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Posts from "./Posts";
import data from "../assets/data/onlineCollection.json"; // Импорт JSON

interface Post {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  year: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);

  useEffect(() => {
    // Simulate fetching data
    setPosts(data); // Assign data from JSON file to state
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="app-container">
      <PagesHeader
        title="более 1 900 картин и около 2500 уникальных древних монет"
        subtitle="коллекция галереи"
        backgroundImage={BgIMage}
      />
      <section className="CollectionPage">
        <div className="container">
          <div className="row">
            {/* <h3 className="pagesSubtitle">История</h3> */}
            <div className="startInfo col-xl-8 offset-xl-4 col-lg-9 offset-lg-3 col-12 offset-0">
              <h4>
                В недавно созданной онлайн-коллекции представлено более 100
                экспонатов, и каждый месяц она пополняется новыми шедеврами из
                фондов галереи.
              </h4>
            </div>
            <div className="gallery">
              <h2 className="paginationTitle"> Онлайн Коллекция</h2>
              <p className="text">
                Нажмите на изображение чтобы открыть его на весь экран
              </p>
              <Posts posts={currentPosts} />
              <Pagination
                pages={howManyPages}
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

export default App;
