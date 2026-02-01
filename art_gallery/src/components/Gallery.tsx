import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        carousel.current.scrollWidth -
          window.innerWidth +
          window.innerWidth / 50
      );
    }
  }, []);

  const { t } = useTranslation();

  return (
    <section className="Gallery">
      <div className="gallery-up">
        <div className="container">
          <h3 className="title">{t("gallery.title")}</h3>
          <div className="line"></div>
        </div>
      </div>

      <motion.div ref={carousel} className="collection">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="items"
        >
          <div className="box">
            <h4 className="box-title">{t("gallery.box1_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box1_text")}</p>
              <p className="year">1996</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FMaki_Inna-Vasilievna_1996_500x500.JPG?alt=media&token=86a1b20f-d5ba-4d66-9bbd-b0bae343ec47"
              className="box-image"
              loading="lazy"
              alt="Maki Inna Vasilyevna"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box2_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box1_text")}</p>
              <p className="year">1930</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FDaraxt-yonidagi-qiz_Nadejda-Kashina_1930_500x500.JPG?alt=media&token=0e5539be-6e65-4f94-8da0-33ddb1707658"
              className="box-image"
              loading="lazy"
              alt="Devochka u dereva Nadejda Kashina"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box3_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box3_text")}</p>
              <p className="year">1992</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FQadimgi-Urganch_Yuriy-Taldykin_1992_500x500.JPG?alt=media&token=c895e637-4543-4d2a-b7e3-d81bf1acc7c9"
              className="box-image"
              loading="lazy"
              alt="Drevniy Urgench Yuriy Taldikin"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box4_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box4_text")}</p>
              <p className="year">1939</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FLandscape_Vladimir-Rozhdestvensky_1939_500x500.JPG?alt=media&token=e549eea1-371f-482a-ba27-534525a1db95"
              className="box-image"
              loading="lazy"
              alt="Peyzaj Vladimir Rozhdestvensky"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box5_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box5_text")}</p>
              <p className="year">1910</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2Fno-info(4)_500x500.JPG?alt=media&token=878a5705-8762-43a4-a536-fe10bb437551"
              className="box-image"
              loading="lazy"
              alt="Zimniy vecher Sergey Yudin"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box6_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box6_text")}</p>
              <p className="year">1996</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FThe-crazy-artist_Murad-Karabaev_1996_500x500.JPG?alt=media&token=d268d3bc-726b-456c-b998-7aa6b32cdddd"
              className="box-image"
              loading="lazy"
              alt="Hudojnik Murad Karabayev"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box7_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box7_text")}</p>
              <p className="year">1958</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2Fno-info(5)_500x500.JPG?alt=media&token=8353ef2e-da2b-452e-a50e-ead4ef7ecf13"
              className="box-image"
              loading="lazy"
              alt="Granati i lepeshki Viktor"
            />
          </div>

          <div className="box">
            <h4 className="box-title">{t("gallery.box8_title")}</h4>
            <div className="display-flex">
              <p className="box-text">{t("gallery.box8_text")}</p>
              <p className="year">2008</p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FAwakening_Richcitilla-Akramov_2008_500x500.JPG?alt=media&token=93d5a0f4-50ad-48b7-97fd-43a1465b9da0"
              className="box-image"
              loading="lazy"
              alt="Probujdeniye Richsitilla Akramov"
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="link">
        <a
          href="/art-gallery-of-uzbekistan/src/collection/collection.html"
          className="readmore"
        >
          {t("gallery.read_more")}
          <IoIosArrowForward className="arrow" />
        </a>
      </div>
    </section>
  );
};

export default Gallery;
