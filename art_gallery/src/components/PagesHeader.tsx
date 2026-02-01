import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import AccordionMenuM from "./AccordeonMenuM";
import { VscGlobe } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";

import { useTranslation } from "react-i18next";

type PagesHeaderProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

//Images

const PagesHeader: React.FC<PagesHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  //scroll animation

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const [scrollClass, setScrollClass] = useState(""); //bg-blur

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 30 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 30 && isScrolled) {
      setIsScrolled(false);
    }
  });

  //bg-blur functioning

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setScrollClass("darken-effect-max");
    } else if (latest > 30) {
      setScrollClass("darken-effect");
    } else {
      setScrollClass("");
    }
  });

  //hamburger-menu functioning

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  //language functioning

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

  //Content

  return (
    <header className="PagesHeader">
      {/* bg-blur */}
      <div className="PagesheaderBgWrapper">
        <div
          className={`PagesheaderBg ${scrollClass}`}
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(34, 34, 34, 0.7),
              rgba(0, 0, 0, 0) 35%,
              rgba(0, 0, 0, 0) 50%,
              rgba(34, 34, 34, 0.7)
            ), url(${backgroundImage})`,
          }}
        />
      </div>
      {/* nav */}
      <nav className={isScrolled ? "nav-scrolled" : ""}>
        <div className="container">
          <div className="row navbar">
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
            <div className="nav-right col-xl-3 col-lg-4 col-md-2 col-sm-4 col-4">
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
                      isScrolled ? "menu-text menu-text-scrolled" : "menu-text"
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
                  <button className="close-icon" onClick={toggleMenu}>
                    <IoCloseSharp />
                  </button>

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
                                {/* add here */}
                                <a
                                  href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
                                  target="_blank"
                                >
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

      <div className="PagesWhatsnew col-12">
        <div className="container">
          <div className="row">
            <h2 className="title col-xl-3">{subtitle}</h2>
            <h1 className="titleBig col-12">{title}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
