import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface AccordionItem {
  title: string;
  content: { name: string; link: string }[]; // Массив объектов для ссылок
}

const AccordionMenuM: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems: AccordionItem[] = [
    {
      title: "Галерея",
      content: [
        { name: "О нас", link: "/src/about/about.html" },
        { name: "Концепция экспозиции", link: "/src/concept/concept.html" },
        { name: "Коллекция", link: "/src/collection/collection.html" },
        { name: "Древние монеты", link: "/src/coins/coins.html" },
      ],
    },
    {
      title: "Посетителям",
      content: [
        { name: "Спланировать визит", link: "/src/planVisit/planVisit.html" },
        { name: "Выставки", link: "/src/exhibition/exhibition.html" },
        {
          name: "Виртуальный тур",
          link: "https://art-gallery-of-uzbekistan-virtual.netlify.app",
        },
        {
          name: "История искусств Узбекистана",
          link: "/src/history/history.html",
        },
      ],
    },
    {
      title: "Контакты",
      content: [
        { name: "Связаться с нами", link: "/src/contact/contact.html" },
        {
          name: "Контакты общества дружбы «Узбекистан-Япония»",
          link: "/src/japan/japan.html",
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
