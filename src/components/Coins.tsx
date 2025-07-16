import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

import coinsI from "../assets/images/Coins-min.jpg";

const Coins: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="coin-collection">
      <div className="container">
        <div className="row">
          <div className="about-img col-xl-8 col-lg-7 col-md-12">
            <img src={coinsI} alt="Coins" loading="lazy" />
          </div>
          <div className="about-info col-xl-4 col-lg-5 col-md-12">
            <h3 className="title">{t("coin_collection.title")}</h3>
            {/* <div className="wrapper"> */}
            <h4 className="subtitle">{t("coin_collection.subtitle")}</h4>
            <div className="text">{t("coin_collection.text")}</div>
            {/* </div> */}
            <a
              href="/art-gallery-of-uzbekistan/src/coins/coins.html"
              className="read"
            >
              {t("read_more")} <IoIosArrowForward />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coins;
