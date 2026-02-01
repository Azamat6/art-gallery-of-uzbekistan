import React from "react";
import { topRef } from "./app";

interface PaginationProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  setCurrentPage,
}) => {
  const generatePaginationButtons = (): (number | string)[] => {
    const numberOfPages = Array.from({ length: pages }, (_, i) => i + 1);
    const dots = "...";

    if (pages < 6) {
      return numberOfPages;
    } else if (currentPage <= 3) {
      return [1, 2, 3, 4, dots, pages];
    } else if (currentPage > 3 && currentPage < pages - 2) {
      return [
        1,
        dots,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        dots,
        pages,
      ];
    } else {
      return [1, dots, ...numberOfPages.slice(-4)];
    }
  };

  const arrOfCurrButtons = generatePaginationButtons();

  return (
    <div className="pagination-container">
      {/* LEFT ARROW */}
      <a
        className={currentPage === 1 ? "disabled arrowLeft" : "arrowLeft"}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setTimeout(() => {
              topRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 300);
          }
        }}
      >
        <div className="arrow left" />
      </a>

      {/* PAGE NUMBERS */}
      {arrOfCurrButtons.map((item, index) => (
        <a
          key={index}
          className={
            currentPage === item
              ? "active paginationNumbers"
              : "paginationNumbers"
          }
          onClick={() => {
            if (typeof item === "number") {
              setCurrentPage(item);
              setTimeout(() => {
                topRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }
          }}
        >
          {item}
        </a>
      ))}

      {/* RIGHT ARROW */}
      <a
        className={
          currentPage === pages ? "disabled arrowRight" : "arrowRight"
        }
        onClick={() => {
          if (currentPage < pages) {
            setCurrentPage(currentPage + 1);
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
