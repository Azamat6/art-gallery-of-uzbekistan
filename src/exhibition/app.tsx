import "../scss/index.scss";
import React, { useState } from "react";

import PagesHeader from "../components/PagesHeader";
import Footer from "../components/Footer";
import BgIMage from "../assets/images/Exhibitions.jpg";

//Title images for cards
import WomenOfUzb from "../assets/images/exhibitions/2024/WomenOfUzb/Title.png";
import UmarRadjabov from "../assets/images/exhibitions/2024/UmarRadjabov/Title.png";
import Devonov from "../assets/images/exhibitions/2024/XudoyberganDevonov/Title.png";
import Synapse from "../assets/images/exhibitions/2024/Synapse/Title.png";
import Djalolidin from "../assets/images/exhibitions/2024/DjalolidinMirtajiev/Title.jpg";
import EastMotives from "../assets/images/exhibitions/2024/EastMotives/Title.png";
import Memory from "../assets/images/exhibitions/2024/TunnelOfMemory/Title.jpg";

type Exhibition = {
  id: number; // Категория: 1 - текущие, 2 - будущие, 3 - прошлые
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
};

const exhibitionsData: Exhibition[] = [
  {
    id: 3,
    image: WomenOfUzb,
    description: "Выставка",
    title: "«Женщины Узбекистана. Преображение»",
    date: "28.08.2024",
    url: "./women-of-uzbekistan/women.html",
  },
  {
    id: 3,
    image: UmarRadjabov,
    description: "Выставка",
    title: "Персональная выставка Умара Раджабова «Созерцание»",
    date: "22.05.2024",
    url: "./umar-radjabov/umar.html",
  },
  {
    id: 3,
    image: Devonov,
    description: "Фотовыставка",
    title: "«Худайберган Деванов и его эпоха»",
    date: "21.05.2024 - 17.06.2024",
    url: "./xudoybergan-devonov/devonov.html",
  },
  {
    id: 3,
    image: Synapse,
    description: "Выставка",
    title: "Cовременное искусство «Синапс»",
    date: "19.3.2024 - 19.4.2024",
    url: "./synapse/synapse.html",
  },
  {
    id: 3,
    image: Djalolidin,
    description: "Выставка",
    title: "«Я – художник узбекского народа»",
    date: "16.02.2024 - 15.3.2024",
    url: "./mirtajiyev/mirtajiyev.html",
  },
  {
    id: 3,
    image: EastMotives,
    description: "Выставка",
    title: "Миниатюра «Восточные мотивы»",
    date: "09.02.2024",
    url: "./east-motives/east.html",
  },
  {
    id: 3,
    image: Memory,
    description: "Выставка",
    title: "«Тоннель памяти»",
    date: "18.01.2024 - 18.02.2024",
    url: "./tunnel-of-memory/memory.html",
  },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // Текущая активная вкладка

  const filteredExhibitions = exhibitionsData.filter(
    (exhibition) => exhibition.id === activeTab
  );

  return (
    <div className="app-container">
      <PagesHeader title="Выставки" subtitle="" backgroundImage={BgIMage} />
      <section className="Ex">
        <div className="container">
          <div className="row">
            <div className="tabs col-12">
              <button
                className={activeTab === 1 ? "active" : ""}
                onClick={() => setActiveTab(1)}
              >
                Текущие
              </button>
              <button
                className={activeTab === 2 ? "active" : ""}
                onClick={() => setActiveTab(2)}
              >
                Будущие
              </button>
              <button
                className={activeTab === 3 ? "active" : ""}
                onClick={() => setActiveTab(3)}
              >
                Прошедшие
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
                    <p className="title">{exhibition.description}</p>
                    <a className="info-title" href={exhibition.url}>
                      {exhibition.title}
                    </a>
                    <span>{exhibition.date}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="container">
              <div className="row">
                <div className="empty-message">Тут пока ничего нет</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="info-for-previous">
        <div className="container">
          <div className="row">
            <p>
              <span>
                С архивом выставок прошедших до 2024 года Вы можете ознакомиться
                на нашем прошлом веб-сайте -{" "}
                <a href="https://nbu.uz/gallery/events/" target="_blank">
                  nbu.uz/gallery/events
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
};

export default App;
