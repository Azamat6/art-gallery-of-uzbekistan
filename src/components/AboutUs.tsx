import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

import about from "../assets/images/About.jpg";

const AboutUs: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="aboutGallery">
      <div className="container">
        <div className="row">
          <div className="about-info hidden col-xl-4 col-lg-5 col-md-12">
            <h3 className="title">О нас</h3>
            {/* <div className="wrapper"> */}
            <h1 className="subtitle">
              Галерея изобразительного искусства Узбекистана
            </h1>
            <div className="text">
              В столице Узбекистана в канун самого великого и дорогого для
              народа страны праздника – Дня Независимости, открылись двери
              нового уникального культурного центра — Галереи изобразительного
              искусства Узбекистана.
            </div>
            {/* </div> */}
            <a href="/src/About/about.html" className="read">
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
