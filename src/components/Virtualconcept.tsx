import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const VirtualConcept: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="virtualConcept">
      <a
        href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
        target="_blank"
        className="virtualTour"
      >
        <div className="container">
          <div className="row">
            <h3 className="title">
              {t("virtualConcept.vr.title")}
              <IoIosArrowForward className="arrow" />
            </h3>
            <div className="text">{t("virtualConcept.vr.text")}</div>
          </div>
        </div>
      </a>
      <a
        href="/art-gallery-of-uzbekistan/src/concept/concept.html"
        className="museumConcept"
      >
        <div className="container">
          <div className="row">
            <h3 className="title">
              {t("virtualConcept.concept.title")}
              <IoIosArrowForward className="arrow" />
            </h3>
            <div className="text">{t("virtualConcept.concept.text")}</div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default VirtualConcept;
