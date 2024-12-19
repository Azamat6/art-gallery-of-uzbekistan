import "../scss/index.scss";

import PagesHeader from "../components/PagesHeader";
import Footer from "../components/Footer";
import BgIMage from "../assets/images/PlanVisit.jpg";
import PlanImage from "../assets/images/ArtGallery.jpg";

function App() {
  return (
    <div className="app-container">
      <PagesHeader
        title="Спланировать визит"
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="Tour">
        <div className="container">
          <div className="row">
            <div className="tourWrapper col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <h3 className="title ">Экскурсия</h3>
              <p className="text">
                Чтобы лучше погрузиться в атмосферу галереи и исследовать нашу
                уникальную коллекцию живописи, графики и древних монет, мы
                советуем воспользоваться услугами нашего профессионального гида.
                Он расскажет вам о значении каждого экспоната, его истории и
                культурной ценности.
              </p>
            </div>
            <div className="table col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="firstrow">
                <p className="text">Группы</p>
                <p className="text">от 1 до 25 человек</p>
              </div>
              <div className="firstrow">
                <p className="text">Стоимость</p>
                <p className="text">25 000 сум с человека</p>
              </div>
              <div className="firstrow">
                <p className="text">Длительность</p>
                <p className="text">1 час</p>
              </div>
              <div className="firstrow">
                <p className="text">Язык</p>
                <p className="text">Узбекский, Русский</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Prices">
        <div className="container">
          <div className="row">
            <h3 className="title">Наши услуги</h3>
            <p className="text col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <span>
                Проведение разовый однодневных официальных мероприятий
              </span>
              , включая выставки, презентации, концерты и другие значимые
              события — 2 400 000 сум. Минимальный заказ — 3 часа. В одном
              мероприятии могут участвовать до 50 человек.
            </p>
            <p className="text col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <span>Фото- и видеосъемки в коммерческих целях</span> — 300 000
              сум за час cъемки, при минимальном заказе в 2 часа. Максимальное
              количество участников съемочного процесса — 25 человек.
            </p>
            <p className="text col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 margintop">
              <span>
                Услуги по проведению временных фициальных мероприятий, выставок,
                презентаций и т. п.{" "}
              </span>
              — 20 000 сум за м<sup>2</sup> в день.
            </p>
          </div>
        </div>
      </section>
      <section className="PlanVisit">
        <div className="VisitorInfo">
          <div className="img">
            <img src={PlanImage} alt="" loading="lazy" />
          </div>
          <div className="info">
            <div className="container">
              <div className="row">
                <div className="info-content">
                  <h4 className="title">Стоимость билетов</h4>
                  <div className="info-text">
                    <div className="category">
                      <p className="text">Взрослым</p>
                      <p className="text">Студентам</p>
                      <p className="text">Пенсионерам</p>
                      <p className="text">Иностранцам</p>
                      <p className="text">Детям</p>
                      <p className="text">
                        Студентам художественных школ / Членам Творческого
                        объединения художников Узбекистана
                      </p>
                    </div>
                    <div className="price">
                      <p className="text">10.000 сум</p>
                      <p className="text">5.000 сум</p>
                      <p className="text">5.000 сум</p>
                      <p className="text">50.000 сум</p>
                      <p className="text">Бесплатно</p>
                      <div className="text margintopL">Бесплатно</div>
                    </div>
                  </div>
                </div>
                <div className="info-content margintop">
                  <h4 className="title">Расписание</h4>
                  <div className="info-text">
                    <div className="category">
                      <p className="text">Вторник - Суббота</p>
                      <p className="text">Воскресенье / Понедельник</p>
                    </div>
                    <div className="price">
                      <p className="text">10:00 - 17:00</p>
                      <p className="text">Выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <div className="row">
            <h3 className="title">Адрес</h3>
            <p className="text">
              Улица Буюк Турон 2, Ташкент, Узбекистан. Ориентир — метро
              Мустакиллик.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11986.79057046405!2d69.2714339!3d41.3154408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b4873c949%3A0x1b0fa19865bd296a!2sArt%20Gallery%20of%20Uzbekistan!5e0!3m2!1sru!2s!4v1732047903361!5m2!1sru!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
      <div id="PmS2WwDTR"></div>
    </div>
  );
}

export default App;
