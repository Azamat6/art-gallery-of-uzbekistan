import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { PiBankBold } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import FooterLogo from "../assets/images/logo.png";
import AccordionMenu from "./AccordeonMenu";

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="footer-nav col-12">
            <div className="contacts">
              <h3 className="title">Контакты</h3>
              <div className="text">
                <a href="mailto:azasultanov06@gmail.com">
                  {" "}
                  <MdOutlineEmail className="icon" /> azasultanov06@gmail.com
                </a>
              </div>
              <div className="text">
                <a href="tel:+998712098015">
                  {" "}
                  <FaPhone className="icon" /> +998 (71) 209-80-15
                </a>
              </div>
              <div className="text">
                <a
                  href="https://maps.app.goo.gl/bHYkEgAhmko3a8WC8"
                  target="_blank"
                >
                  {" "}
                  <FaLocationDot className="icon" /> улица Буюк Турон 2, Ташкент
                </a>
              </div>
              <div className="text">
                <a href="https://nbu.uz" target="_blank">
                  {" "}
                  <PiBankBold className="icon" /> NBU.uz
                </a>
              </div>
            </div>

            <div className="about-footer">
              <h3 className="title">Галерея</h3>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/about/about.html">
                  О нас
                </a>
              </div>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/concept/concept.html">
                  Концепция экспозиции
                </a>
              </div>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/collection/collection.html">
                  Коллекция
                </a>
              </div>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/coins/coins.html">
                  Древние монеты
                </a>
              </div>
            </div>

            <AccordionMenu />

            <div className="visitors">
              <div className="visitors-left">
                <h3 className="title">Посетителям</h3>
                <div className="text">
                  <a href="/art-gallery-of-uzbekistan/src/planVisit/planVisit.html">
                    Спланировать визит
                  </a>
                </div>
                <div className="text">
                  <a href="/art-gallery-of-uzbekistan/src/exhibition/exhibition.html">
                    Выставки
                  </a>
                </div>
                <div className="text">
                  {/* add here */}
                  <a
                    href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
                    target="_blank"
                  >
                    Виртуальный тур
                  </a>
                </div>
                <div className="text">
                  <a href="/art-gallery-of-uzbekistan/src/history/history.html">
                    История искусств Узбекистана
                  </a>
                </div>
              </div>
              <div className="footer-logo">
                <div className="logo">
                  <img src={FooterLogo} alt="" loading="lazy" />
                </div>
              </div>
            </div>

            {/* absolute */}
            <div className="social-media">
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

            <div className="line"></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="footer-end col-12">
                <div className="usage">
                  <a href="">Условие использования материалов сайта</a>
                </div>
                <div className="gov ">
                  2024 © Галерея изобразительного искусства Узбекистана
                </div>
                <div className="credits">
                  Разработка сайта -&nbsp;
                  <a
                    href="https://www.linkedin.com/in/azamatbek-sultanov-485311310"
                    target="_blank"
                  >
                    А. Султанов
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
