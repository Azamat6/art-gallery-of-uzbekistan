import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

import about from "../assets/images/About-min.jpg";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="aboutGallery">
      <div className="container">
        <div className="row">
          <div className="about-info col-xl-4 col-lg-5 col-md-12">
            <h3 className="title">{t("aboutGallery.title")}</h3>
            <h1 className="subtitle">{t("aboutGallery.subtitle")}</h1>
            <div className="text">{t("aboutGallery.text")}</div>
            <a
              href="/art-gallery-of-uzbekistan/src/about/about.html"
              className="read"
            >
              {t("read_more")} <IoIosArrowForward />
            </a>
          </div>
          <div className="about-img col-xl-8 col-lg-7 col-md-12">
            <img src={about} alt="About Art Gallery" loading="lazy" />
          </div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default AboutUs;
