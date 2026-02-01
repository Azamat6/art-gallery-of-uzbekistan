import React, { useState } from "react";
import { topRef } from "./app";

interface PaginationProps {
  pages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pages, setCurrentPage }) => {
  const [currentButton, setCurrentButton] = useState<number>(1);

  const generatePaginationButtons = (): (number | string)[] => {
    const numberOfPages = Array.from({ length: pages }, (_, i) => i + 1);
    const dots = "...";

    if (pages < 6) {
      return numberOfPages;
    } else if (currentButton <= 3) {
      return [1, 2, 3, 4, dots, pages];
    } else if (currentButton > 3 && currentButton < pages - 2) {
      return [
        1,
        dots,
        currentButton - 1,
        currentButton,
        currentButton + 1,
        dots,
        pages,
      ];
    } else {
      return [1, dots, ...numberOfPages.slice(-4)];
    }
  };

  const handlePageChange = (newPage: number | string) => {
    if (typeof newPage === "number") {
      setCurrentButton(newPage);
      setCurrentPage(newPage);
    }
  };

  const arrOfCurrButtons = generatePaginationButtons();

  return (
    <div className="pagination-container">
      <a
        className={currentButton === 1 ? "disabled arrowLeft" : "arrowLeft"}
        onClick={() => {
          if (currentButton > 1) {
            const newPage = currentButton - 1;
            setCurrentButton(newPage);
            setCurrentPage(newPage);
            setTimeout(() => {
              topRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }
        }}
      >
        <div className="arrow left" />
      </a>
      {arrOfCurrButtons.map((item, index) => (
        <a
          key={index}
          className={
            currentButton === item
              ? "active paginationNumbers"
              : "paginationNumbers"
          }
          onClick={() => {
            handlePageChange(item);
            setTimeout(() => {
              topRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }}
        >
          {item}
        </a>
      ))}
      <a
        className={
          currentButton === pages ? "disabled arrowRight" : "arrowRight"
        }
        onClick={() => {
          if (currentButton < pages) {
            const newPage = currentButton + 1;
            setCurrentButton(newPage);
            setCurrentPage(newPage);
            setTimeout(() => {
              topRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }
        }}
      >
        <div className="arrow right" />
      </a>
    </div>
  );
};

export default Pagination;
