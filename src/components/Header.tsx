import { useState, useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import throttle from "lodash.throttle";
import { IoCloseSharp } from "react-icons/io5";
import { VscGlobe } from "react-icons/vsc";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import AccordionMenuM from "./AccordeonMenuM";
//Images

import eventOne from "../assets/exhibitions/content-img(272).png";
import eventTwo from "../assets/exhibitions/content-img(229).png";

const Header: React.FC = () => {
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
      return "Закрыто"; // Воскресенье и понедельник
    }
  };

  //hamburger-menu functioning

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  //dropdown-menu functioning

  const [Open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* bg-blur */}
      <div className={`headerBg ${scrollClass}`} />
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

              <div className="language-selector" ref={dropdownRef}>
                <div onClick={toggleDropdown} className="language">
                  <span
                    className={
                      isScrolled ? "menu-text menu-text-scrolled" : "menu-text"
                    }
                  >
                    Русский
                  </span>
                  <VscGlobe
                    className={
                      isScrolled ? "nav-icon nav-icon-scrolled" : "nav-icon"
                    }
                  />
                </div>
                {Open && (
                  <div className="dropdown__menu">
                    <div className="dropdown__item">
                      <a href="#">Oʻzbekcha</a>{" "}
                    </div>
                    <div className="dropdown__item pt">
                      <a href="#">English</a>{" "}
                    </div>
                  </div>
                )}
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
                    меню
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
                              <div className="overlay-language  col-3">
                                <a href="" className="overlay-language-text ">
                                  Oʻzbekcha
                                </a>
                                <a
                                  href="#"
                                  className="overlay-language-text active"
                                >
                                  Русский
                                </a>
                                <a href="" className="overlay-language-text">
                                  English
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="overlay-content">
                          <div className="overlay-content-title col-12">
                            {/* <div className="overlay-content-wrapper"> */}
                            <h4 className="col-4">Галерея</h4>
                            <h4 className="col-4">Посетителям</h4>
                            <h4 className="col-4">Контакты</h4>
                            <div className="overlay-line"></div>
                            {/* </div> */}
                          </div>
                          <div className="overlay-content-links col-12">
                            <div className="overlay-gallery overlay-l col-4">
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/about/about.html">
                                  О нас
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/concept/concept.html">
                                  Концепция экспозиции
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/collection/collection.html">
                                  Коллекция
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/coins/coins.html">
                                  Древние монеты
                                </a>
                              </div>
                            </div>
                            <div className="overlay-visitors overlay-l col-4">
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/planVisit/planVisit.html">
                                  Спланировать визит
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/exhibition/exhibition.html">
                                  Выставки
                                </a>
                              </div>
                              <div className="overlay-link">
                                {/* Add here */}
                                <a
                                  href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
                                  target="_blank"
                                >
                                  Виртуальный тур
                                </a>
                              </div>
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/history/history.html">
                                  История искусств Узбекистана
                                </a>
                              </div>
                            </div>
                            <div className="overlay-contacts overlay-l col-4">
                              <div className="overlay-link">
                                <a href="/art-gallery-of-uzbekistan/src/contact/contact.html">
                                  Связаться с нами
                                </a>
                                <div className="overlay-link">
                                  <a href="/art-gallery-of-uzbekistan/src/japan/japan.html">
                                    Контакты общества дружбы «Узбекистан-Япония»
                                  </a>
                                </div>
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
            <div className="title">сейчас в галерее</div>
            <a className="btext col-12" href="">
              Выставка «Женщины Узбекистана. Преображение»
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
                <h3 className="title">Расписание сегодня</h3>
                <div className="time">{openingHours(currentDay)}</div>
                <div className="text">
                  <p>
                    Для пенсионеров и студентов действует{" "}
                    <span>50% скидка</span> на покупку билетов.
                  </p>
                </div>
              </div>
              <a
                href="/art-gallery-of-uzbekistan/src/planVisit/planVisit.html"
                className="link_cost"
              >
                Спланировать визит
              </a>
            </div>
            {/* events */}
            <div className="events col-xl-7 offset-xl-2 col-lg-7 offset-lg-1 col-md-12">
              <h3 className="title">Выставки</h3>
              <div className="event-cards col-12">
                {/* first card */}

                <a href="">
                  <div className="card">
                    <div className="card-img-wrapper">
                      {/* Image1 */}
                      <img
                        src={eventOne}
                        alt="exhibition"
                        className="card-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-wrapper">
                      <div className="card-title">
                        Женщины Узбекистана. Преображение
                      </div>
                      <div className="text">28 августа - 2 октября</div>
                    </div>
                  </div>
                </a>

                {/* second card */}
                <a href="">
                  <div className="card">
                    <div className="card-img-wrapper">
                      {/* Image2 */}
                      <img
                        src={eventTwo}
                        alt="exhibition"
                        className="card-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-wrapper">
                      <div className="card-title">
                        Умар Раджабов: “Созерцание”
                      </div>
                      <div className="text">22 мая - 1 июля</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="right">
                <a
                  className="readmore"
                  href="/art-gallery-of-uzbekistan/src/exhibition/exhibition.html"
                >
                  Показать еще
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
