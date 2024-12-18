import { IoIosArrowForward } from "react-icons/io";

import coinsI from "../assets/images/Coins.jpg";

const Coins: React.FC = () => {
  return (
    <section className="coin-collection">
      <div className="container">
        <div className="row">
          <div className="about-img col-xl-8 col-lg-7 col-md-12">
            <img src={coinsI} alt="" loading="lazy" />
          </div>
          <div className="about-info col-xl-4 col-lg-5 col-md-12">
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
            <a
              href="/art-gallery-of-uzbekistan/src/coins/coins.html"
              className="read"
            >
              Подробнее <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coins;
