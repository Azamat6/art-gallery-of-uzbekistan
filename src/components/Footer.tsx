import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { PiBankBold } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import FooterLogo from "../assets/images/logo.png";
import AccordionMenu from "./AccordeonMenu";

import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="footer-nav col-12">
            <div className="contacts">
              <h3 className="title">{t("header.menu.nav_title_3")}</h3>
              <div className="text">
                <a href="mailto:gmail@mail.ru">
                  {" "}
                  <MdOutlineEmail className="icon" /> gmail@mail.ru
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
                  <FaLocationDot className="icon" />
                  {t("footer.location")}
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
              <h3 className="title">{t("header.menu.nav_title_1")}</h3>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/about/about.html">
                  {t("header.menu.first.item1")}
                </a>
              </div>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/concept/concept.html">
                  {t("header.menu.first.item2")}
                </a>
              </div>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/collection/collection.html">
                  {t("header.menu.first.item3")}
                </a>
              </div>
              <div className="text">
                <a href="/art-gallery-of-uzbekistan/src/coins/coins.html">
                  {t("header.menu.first.item4")}
                </a>
              </div>
            </div>

            <AccordionMenu />

            <div className="visitors">
              <div className="visitors-left">
                <h3 className="title">{t("header.menu.nav_title_2")}</h3>
                <div className="text">
                  <a href="/art-gallery-of-uzbekistan/src/planVisit/planVisit.html">
                    {t("header.menu.second.item1")}
                  </a>
                </div>
                <div className="text">
                  <a href="/art-gallery-of-uzbekistan/src/exhibition/exhibition.html">
                    {t("header.menu.second.item2")}
                  </a>
                </div>
                <div className="text">
                  {/* add here */}
                  <a
                    href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
                    target="_blank"
                  >
                    {t("header.menu.second.item3")}
                  </a>
                </div>
                <div className="text">
                  <a href="/art-gallery-of-uzbekistan/src/history/history.html">
                    {t("header.menu.second.item4")}
                  </a>
                </div>
              </div>
              <div className="footer-logo">
                <div className="logo">
                  <img src={FooterLogo} alt="NBU logo" loading="lazy" />
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
                  <a href="/art-gallery-of-uzbekistan/src/terms/terms.html">
                    {t("footer.end.usage")}
                  </a>
                </div>
                <div className="gov ">2025 © {t("footer.end.gov")}</div>
                <div className="credits">
                  {t("footer.end.credits")} -&nbsp;
                  <a
                    href="https://www.linkedin.com/in/azamatbek-sultanov-485311310"
                    target="_blank"
                  >
                    {t("footer.end.me")}
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
