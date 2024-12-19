import "../scss/index.scss";

import PagesHeader from "../components/PagesHeader";
import Footer from "../components/Footer";
import BgIMage from "../assets/images/Contact.jpg";

function App() {
  return (
    <div className="app-container">
      <PagesHeader
        title="Контакты общества дружбы «Узбекистан-Япония»"
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="PageAbout Contact japan">
        <div className="container">
          <div className="row">
            {/* <h3 className="pagesSubtitle">История</h3> */}

            <div className="firstColumn order2 col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-12 col-12">
              <h4>Адрес</h4>
              <p className="text">
                100084, Республика Узбекистан, г.Ташкент, проспект Амира Темура,
                101
              </p>
              <h4 className="margintopS">Электронная почта</h4>
              <p className="text">
                <a href="mailto:nshanigora@gmail.com">nshanigora@gmail.com</a>
              </p>
              <h4 className="margintopS">Веб-сайт</h4>
              <a className="text" href="https://nbu.uz/" target="_blank">
                www.nbu.uz
              </a>
              <p className="text margintopS">
                <span> Нигора Эркиновна Шарафходжаева</span> - исполнительный
                директор Общества дружбы «Узбекистан – Япония»
              </p>
            </div>
            <div className="firstColumn col-xl-4 offset-xl-1 col-lg-4 offset-lg-1 col-md-4 offset-md-1 col-sm-12 col-12 order1">
              <h4>Тел</h4>
              <a className="text" href="tel:+998712335674">
                +998 (71) 233-56-74
              </a>
              <h4 className="margintopS">Мобильный Тел.</h4>
              <a className="text" href="tel:+998983058685">
                +998 (98) 305-86-85
              </a>
              <h4 className="margintopS">Факс</h4>
              <a className="text" href="tel:+998712337765">
                +998 (71) 233-77-65
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
}

export default App;
