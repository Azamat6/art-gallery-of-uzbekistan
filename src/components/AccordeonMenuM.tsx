import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { useTranslation } from "react-i18next";

interface AccordionItem {
  title: string;
  content: { name: string; link: string }[]; // Массив объектов для ссылок
}

const AccordionMenuM: React.FC = () => {
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems: AccordionItem[] = [
    {
      title: t("header.menu.nav_title_1"),
      content: [
        {
          name: t("header.menu.first.item1"),
          link: "/art-gallery-of-uzbekistan/src/about/about.html",
        },
        {
          name: t("header.menu.first.item2"),
          link: "/art-gallery-of-uzbekistan/src/concept/concept.html",
        },
        {
          name: t("header.menu.first.item3"),
          link: "/art-gallery-of-uzbekistan/src/collection/collection.html",
        },
        {
          name: t("header.menu.first.item4"),
          link: "/art-gallery-of-uzbekistan/src/coins/coins.html",
        },
      ],
    },
    {
      title: t("header.menu.nav_title_2"),
      content: [
        {
          name: t("header.menu.second.item1"),
          link: "/art-gallery-of-uzbekistan/src/planVisit/planVisit.html",
        },
        {
          name: t("header.menu.second.item2"),
          link: "/art-gallery-of-uzbekistan/src/exhibition/exhibition.html",
        },
        {
          name: t("header.menu.second.item3"),
          link: "https://art-gallery-of-uzbekistan-virtual.netlify.app",
        },
        {
          name: t("header.menu.second.item4"),
          link: "/art-gallery-of-uzbekistan/src/history/history.html",
        },
      ],
    },
    {
      title: t("header.menu.nav_title_3"),
      content: [
        {
          name: t("header.menu.third.item1"),
          link: "/art-gallery-of-uzbekistan/src/contact/contact.html",
        },
      ],
    },
  ];

  return (
    <div className="accordion-menu">
      <div className="container">
        <div className="row">
          {menuItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => toggleItem(index)}
              >
                {item.title}
                <span className={`icon ${openIndex === index ? "open" : ""}`}>
                  <IoIosArrowForward />
                </span>
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? "show" : ""
                }`}
              >
                <ul>
                  {item.content.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.link}
                        rel="noopener noreferrer"
                        className="text"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionMenuM;
