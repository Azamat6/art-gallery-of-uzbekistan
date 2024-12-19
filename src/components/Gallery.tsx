import { IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

interface CustomCarouselProps {
  children: React.ReactNode;
}

interface BoxProps {
  title: string;
  text: string;
  year: string;
  image: string;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const slider = useRef<HTMLDivElement | null>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number | null>(null);
  const scrollLeft = useRef<number | null>(null);

  useEffect(() => {
    const sliderRef = slider.current;
    if (sliderRef) {
      const handleMouseDown = (e: MouseEvent) => startDragging(e);
      const handleMouseLeave = () => stopDragging();
      const handleMouseUp = () => stopDragging();
      const handleMouseMove = (e: MouseEvent) => drag(e);

      sliderRef.addEventListener("mousedown", handleMouseDown);
      sliderRef.addEventListener("mouseleave", handleMouseLeave);
      sliderRef.addEventListener("mouseup", handleMouseUp);
      sliderRef.addEventListener("mousemove", handleMouseMove);

      return () => {
        sliderRef.removeEventListener("mousedown", handleMouseDown);
        sliderRef.removeEventListener("mouseleave", handleMouseLeave);
        sliderRef.removeEventListener("mouseup", handleMouseUp);
        sliderRef.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const startDragging = (e: MouseEvent) => {
    if (!slider.current) return;
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown.current = false;
  };

  const drag = (e: MouseEvent) => {
    if (
      !isDown.current ||
      !slider.current ||
      startX.current === null ||
      scrollLeft.current === null
    )
      return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="items" ref={slider}>
      {children}
    </div>
  );
};

const Box: React.FC<BoxProps> = ({ title, text, year, image }) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h4 className="box-title">{title}</h4>
      <div className="display-flex">
        <p className="box-text">{text}</p>
        <p className="year">{year}</p>
      </div>
      <img src={image} alt={title} className="box-image" loading="lazy" />
    </motion.div>
  );
};

const Gallery: React.FC = () => {
  const boxesContent: Array<{
    title: string;
    text: string;
    year: string;
    image: string;
  }> = [
    {
      title: "Маки",
      year: "1996",
      text: "Инна Васильевна",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FMaki_Inna-Vasilievna_1996_500x500.JPG?alt=media&token=86a1b20f-d5ba-4d66-9bbd-b0bae343ec47",
    },
    {
      title: "Девочка у дерева",
      year: "1930",
      text: "Надежда Кашина",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FDaraxt-yonidagi-qiz_Nadejda-Kashina_1930_500x500.JPG?alt=media&token=0e5539be-6e65-4f94-8da0-33ddb1707658",
    },
    {
      title: "Древний Ургенч",
      year: "1992",
      text: "Юрий Талдыкин",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FQadimgi-Urganch_Yuriy-Taldykin_1992_500x500.JPG?alt=media&token=c895e637-4543-4d2a-b7e3-d81bf1acc7c9",
    },
    {
      title: "Пейзаж",
      year: "1939",
      text: "Владимир Рождественский",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FLandscape_Vladimir-Rozhdestvensky_1939_500x500.JPG?alt=media&token=e549eea1-371f-482a-ba27-534525a1db95",
    },
    {
      title: "No info",
      year: "#",
      text: "No info",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2Fno-info(4)_500x500.JPG?alt=media&token=878a5705-8762-43a4-a536-fe10bb437551",
    },
    {
      title: "Сумасшедший художник",
      year: "1996",
      text: "Мурад Карбаев",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FThe-crazy-artist_Murad-Karabaev_1996_500x500.JPG?alt=media&token=d268d3bc-726b-456c-b998-7aa6b32cdddd",
    },
    {
      title: "No info",
      year: "#",
      text: "Виктор",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2Fno-info(5)_500x500.JPG?alt=media&token=8353ef2e-da2b-452e-a50e-ead4ef7ecf13",
    },
    {
      title: "Пробуждение",
      year: "2008",
      text: "Рихситилла Акрамов",
      image:
        "https://firebasestorage.googleapis.com/v0/b/art-gallery-of-uzbekistan.firebasestorage.app/o/OnlineCollection%2Fresized-image%2FAwakening_Richcitilla-Akramov_2008_500x500.JPG?alt=media&token=93d5a0f4-50ad-48b7-97fd-43a1465b9da0",
    },
  ];

  //Draggable
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Проверяем ширину экрана
      if (window.innerWidth > 768 && isVisible) {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  return (
    <section className="Gallery">
      <div className="gallery-up">
        <div className="container">
          <h3 className="title">Коллекция онлайн</h3>
          <div className="line"></div>
        </div>
      </div>

      <div
        className="collection target-div"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <>
          <motion.div
            className="custom-cursor"
            style={{
              x: mouseX,
              y: mouseY,
              opacity: isVisible && window.innerWidth > 768 ? 1 : 0, // Скрыть на малых экранах
            }}
          >
            <IoMdArrowDropleft />
            Drag
            <IoMdArrowDropright />
          </motion.div>
        </>
        <CustomCarousel>
          {boxesContent.map((content, index) => (
            <Box
              key={index}
              title={content.title}
              year={content.year}
              text={content.text}
              image={content.image}
            />
          ))}
        </CustomCarousel>
      </div>
      <div className="link">
        <a href="/src/collection/collection.html" className="readmore">
          Вся коллекция <IoIosArrowForward className="arrow" />
        </a>
      </div>
    </section>
  );
};

export default Gallery;
