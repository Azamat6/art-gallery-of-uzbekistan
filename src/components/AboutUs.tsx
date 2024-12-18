import { IoIosArrowForward } from "react-icons/io";

import about from "../assets/images/About.jpg";

const AboutUs: React.FC = () => {
  return (
    <section className="aboutGallery">
      <div className="container">
        <div className="row">
          <div className="about-info col-xl-4 col-lg-5 col-md-12">
            <h3 className="title">О нас</h3>
            <h1 className="subtitle">
              Галерея изобразительного искусства Узбекистана
            </h1>
            <div className="text">
              В столице Узбекистана в канун самого великого и дорогого для
              народа страны праздника – Дня Независимости, открылись двери
              нового уникального культурного центра — Галереи изобразительного
              искусства Узбекистана.
            </div>
            <a
              href="/art-gallery-of-uzbekistan/src/About/about.html"
              className="read"
            >
              Подробнее <IoIosArrowForward />
            </a>
          </div>
          <div className="about-img col-xl-8 col-lg-7 col-md-12">
            <img src={about} alt="About us" loading="lazy" />
          </div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default AboutUs;
