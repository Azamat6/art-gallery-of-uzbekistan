import { IoIosArrowForward } from "react-icons/io";

const VirtualConcept: React.FC = () => {
  return (
    <section className="virtualConcept">
      <a
        href="https://art-gallery-of-uzbekistan-virtual.netlify.app"
        target="_blank"
        className="virtualTour"
      >
        <div className="container">
          <div className="row">
            <h3 className="title">
              Виртуальный тур <IoIosArrowForward className="arrow" />
            </h3>
            <div className="text">Посетите галерею, не выходя из дома.</div>
          </div>
        </div>
      </a>
      <a href="/src/concept/concept.html" className="museumConcept">
        <div className="container">
          <div className="row">
            <h3 className="title">
              Концепция экспозиции галереи{" "}
              <IoIosArrowForward className="arrow" />
            </h3>
            <div className="text">
              2-этажная экспозиционно-выставочная площадь в 3 500 кв. м.
            </div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default VirtualConcept;
