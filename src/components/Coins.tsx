import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

import coinsI from "../assets/images/Coins.jpg";

const Coins: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Убираем наблюдение
          }
        });
      },
      {
        threshold: 0.1, // Настраиваем видимость
        rootMargin: "0px 0px -50px 0px", // Смещение (добавить, если нужно)
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Чистка наблюдателя при размонтировании компонента
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="coin-collection">
      <div className="container">
        <div className="row">
          <div className="about-img col-xl-8 col-lg-7 col-md-12">
            <img src={coinsI} alt="" loading="lazy" />
          </div>
          <div className="about-info hidden col-xl-4 col-lg-5 col-md-12">
            <h3 className="title">древние монеты</h3>
            {/* <div className="wrapper"> */}
            <h4 className="subtitle">
              История первой в стране нумизматической коллекции
            </h4>
            <div className="text">
              В коллекцию входят монеты бывшие в обращении на территории Средней
              Азии с древности до наших дней, которые представляют собой большую
              историческую, культурную и научную ценность.
            </div>
            {/* </div> */}
            <a href="/src/coins/coins.html" className="read">
              Подробнее <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coins;
