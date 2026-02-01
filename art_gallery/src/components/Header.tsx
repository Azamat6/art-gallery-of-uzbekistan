import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import throttle from "lodash.throttle";
import { IoCloseSharp } from "react-icons/io5";
// import { Suspense } from "react";

import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import AccordionMenuM from "./AccordeonMenuM";
import { VscGlobe } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";

import { exhibitionsData } from "../exhibition/data";

const Header: React.FC = () => {
  const currentExhibitions = exhibitionsData.filter((ex) => ex.id === 1);
  const latestExhibition = currentExhibitions[0];
  const latestTwo = exhibitionsData.slice(1, 3);
  // new animation

  //scroll animation

  const { scrollY } = useScroll();
  const [scrollPos, setScrollPos] = useState(0); // Храним только текущую прокрутку

  // Обновляем состояние прокрутки с throttle
  const handleScroll = throttle((latest: number) => {
    setScrollPos(latest);
  }, 100);

  // Слушаем изменения scrollY
  useMotionValueEvent(scrollY, "change", handleScroll);

  // Вычисляем CSS-классы на основе прокрутки
  const isScrolled = scrollPos > 30;
  const scrollClass =
    scrollPos > 160
      ? "blur-effect"
      : scrollPos > 100
      ? "darken-effect-max"
      : scrollPos > 30
      ? "darken-effect"
      : "";

  //getting current working time

  const currentDay = new Date().getDay();

  const openingHours = (day: number): string => {
    if (day >= 2 && day <= 6) {
      return "10:00-17:00"; // Со вторника по субботу
    } else {
      return t("header.wh.closed"); // Воскресенье и понедельник
    }
  };

  //hamburger-menu functioning

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  //language-selector
  const { t, i18n } = useTranslation();
  const handleSelect = (lang: string | null) => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  };

  const languageMap: Record<string, string> = {
    en: "English",
    ru: "Русский",
    uz: "O‘zbek",
  };

  return (
    <header className="header">
      {/* bg-blur */}
      <div className="headerBgWrapper">
        <div
          className={`headerBg ${scrollClass}`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(34, 34, 34, 0.7), rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 40%, rgba(34, 34, 34, 0.7)), url('${latestExhibition?.image}')`,
          }}
        />
      </div>
      <nav className={isScrolled ? "nav-scrolled" : ""}>
        <div className="container">
          <div className="row navbar">
            {/* <Suspense fallback={<div className="logo col-4"> </div>}> */}
            <a
              href="/art-gallery-of-uzbekistan/index.html"
              className={isScrolled ? "logo col-4 logo-scrolled" : "logo col-4"}
            >
              <div className={isScrolled ? "line line-scrolled" : "line"}></div>
              <h2 className={isScrolled ? "logo-h1-scrolled" : ""}>
                <span>Art Gallery</span> Uzbekistan
              </h2>
              <div className={isScrolled ? "line line-scrolled" : "line"}></div>
            </a>
            {/* </Suspense> */}

            <div className="nav-right">
              {/* language-selector */}
              <div className="language-selector">
                <Dropdown onSelect={handleSelect} className="drop-down-parent">
                  <Dropdown.Toggle
                    as="button"
                    id="language-dropdown"
                    className={
                      isScrolled
                        ? "language-select language-select-scrolled "
                        : "language-select"
                    }
                  >
                    <div
                      className={
                        isScrolled
                          ? "menu-text menu-text-scrolled"
                          : "menu-text"
                      }
                    >
                      {languageMap[
                        i18n.resolvedLanguage as "en" | "ru" | "uz"
                      ] || t("Choose_lang")}
                    </div>
                    <VscGlobe
                      className={
                        isScrolled ? "nav-icon nav-icon-scrolled " : "nav-icon"
                      }
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="l-menu-dropdown">
                    {Object.entries(languageMap)
                      .filter(
                        ([langCode]) => langCode !== i18n.resolvedLanguage
                      )
                      .map(([langCode, label]) => (
                        <Dropdown.Item
                          key={langCode}
                          eventKey={langCode}
                          className="l-menu-text"
                        >
                          {label}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              {/* Hamburger-menu */}

              <div className="fullscreen-menu">
                <div
                  className={`menu-toggle ${isOpen ? "hidden" : ""}`}
                  onClick={toggleMenu}
                >
                  <span
                    className={
                      isScrolled
                        ? "menu-text  menu-text-scrolled"
                        : "menu-text "
                    }
                  >
                    {t("header.menu.nav")}
                  </span>
                  <button className="menu-icon">
                    <span className={isScrolled ? "span-scrolled" : ""}></span>
                    <span className={isScrolled ? "span-scrolled" : ""}></span>
                    <span className={isScrolled ? "span-scrolled" : ""}></span>
                  </button>
                </div>

                {/* Fullscreen Menu Overlay */}
                <div className={`menu-overlay ${isOpen ? "open" : ""}`}>
                  {/* Close Icon */}
                  <div className="close-icon" onClick={toggleMenu}>
                    <IoCloseSharp />
                  </div>

                  <div className="menu-social-media">
                    <a href="https://t.me/GalereyaNBU" target="_blank">
                      <FaTelegramPlane />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/art.gallery.of.uzbekistan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    >
                      <FaInstagram />
                    </a>

                    <a
                      target="_blank"
                      href="https://www.facebook.com/share/g/15ByiGK5Re"
                    >
                      <FaFacebook />
                    </a>
                  </div>

                  {/* Menu Content */}
                  <div className="menu-content">
                    <div className="container">
                      <div className="row">
                        <div className="navbar col-12">
                          <div className="container">
                            <div className="row">
                              <a
                                href="/art-gallery-of-uzbekistan/index.html"
                                className="logo col-4"
                              >
                                <div className="line"></div>
                                <h2>
                                  <span>Art Gallery</span> Uzbekistan
                                </h2>
                                <div className="line"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="overlay-content">
                          <div className="overlay-content-title col-12">
                            {/* <div className="overlay-content-wrapper"> */}
                            <h4 className="col-4">
                              {t("header.menu.nav_title_1")}
                            </h4>
                            <h4 className="col-4">
                              {t("header.menu.nav_title_2")}
                            </h4>
                            <h4 className="col-4">
                              {t("header.menu.nav_title_3")}
                            </h4>
                            <div className="overlay-line"></div>
                            {/* </div> */}
                          </div>
                          <div className="overlay-content-links col-12">
                            <div className="overlay-gallery overlay-l col-4">
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/about/about.html">
                                  {t("header.menu.first.item1")}
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/concept/concept.html">
                                  {t("header.menu.first.item2")}
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/collection/collection.html">
                                  {t("header.menu.first.item3")}
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/coins/coins.html">
                                  {t("header.menu.first.item4")}
                                </a>
                              </div>
                            </div>
                            <div className="overlay-visitors overlay-l col-4">
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/planVisit/planVisit.html">
                                  {t("header.menu.second.item1")}
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/exhibition/exhibition.html">
                                  {t("header.menu.second.item2")}
                                </a>
                              </div>
                              <div className="overlay-link">
                                {/* Add here */}
                                <a
                                  href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
                                  target="_blank"
                                >
                                  {" "}
                                  {t("header.menu.second.item3")}
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/history/history.html">
                                  {t("header.menu.second.item4")}
                                </a>
                              </div>
                            </div>
                            <div className="overlay-contacts overlay-l col-4">
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/contact/contact.html">
                                  {t("header.menu.third.item1")}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <AccordionMenuM />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* hamburger-menu end */}
            </div>
          </div>
        </div>
      </nav>

      <div className="whatsnew col-12">
        <div className="container">
          <div className="row">
            <div className="title">{t("header.news.title")}</div>
            <a
              className="btext col-12"
              href={`/art-gallery-of-uzbekistan/src/exhibition/${latestExhibition?.url.replace(
                "./",
                ""
              )}`}
            >
              {t(latestExhibition?.title)}
            </a>
          </div>
        </div>
      </div>

      <div className="underHeader">
        <div className="container">
          <div className="row">
            {/* working hours */}
            <div className="workingHours col-xl-3 col-lg-4 col-md-7">
              <div className="wrapper">
                <h3 className="title">{t("header.wh.title")}</h3>
                <div className="time">{openingHours(currentDay)}</div>
                <div className="text">
                  <p>
                    {t("header.wh.text1")}
                    <span>{t("header.wh.text2")}</span> {t("header.wh.text3")}
                  </p>
                </div>
              </div>
              <a
                href="/art-gallery-of-uzbekistan/src/planVisit/planVisit.html"
                className="link_cost"
              >
                {t("header.wh.plan")}
              </a>
            </div>
            {/* events */}
            <div className="events col-xl-7 offset-xl-2 col-lg-7 offset-lg-1 col-md-12">
              <h3 className="title">{t("header.events.title")}</h3>
              <div className="event-cards col-12">
                {latestTwo.map((exhibition, index) => (
                  <a
                    key={index}
                    href={`/art-gallery-of-uzbekistan/src/exhibition/${exhibition.url.replace(
                      "./",
                      ""
                    )}`}
                  >
                    <div className="card">
                      <div className="card-img-wrapper">
                        <img
                          src={exhibition.image}
                          alt={t(exhibition.title)}
                          className="card-img"
                          loading="lazy"
                        />
                      </div>
                      <div className="text-wrapper">
                        <div className="card-title">{t(exhibition.title)}</div>
                        <div className="text">{exhibition.date}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="right">
                <a
                  className="readmore"
                  href="/art-gallery-of-uzbekistan/src/exhibition/exhibition.html"
                >
                  {t("header.events.read_more")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
