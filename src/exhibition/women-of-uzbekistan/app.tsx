import "../../scss/index.scss";

import PagesHeader from "../../components/PagesHeader";
import Footer from "../../components/Footer";
import BgIMage from "../../assets/images/exhibitions/2024/WomenOfUzb/Title.png";

function App() {
  return (
    <div className="app-container">
      <PagesHeader
        title="Выставка «Женщины Узбекистана. Преображение»"
        subtitle="28.08.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                <span>
                  Выставка стала возможна благодаря партнерскому участию
                  Национального архива кинофотофонодокументов Узбекистана.
                </span>
              </p>
              <p className="text">
                Через фокус архивных фото и киноматериалов приглашаем Вас в
                увлекательное путешествие в историю и культуру Узбекистана через
                призму женской силы, творчества и вдохновения. Выставка «Женщины
                Узбекистана. Преображение» — это уникальный проект, который
                раскрывает многогранность жизни женщин и их влияние на общество
                в разные исторические периоды.
              </p>
              <p className="text">
                В 1920-е годы прошлого века женщины сбросили паранджу, как
                символ отсутствия свободы и тотальной зависимости, что положило
                начало эмансипации женщин, а также заложило основы гендерного
                равноправия. В своих произведениях известные просветители того
                времени – М. Кори, М. Бехбудий, А. Кодирий, Х. Ниёзий, А.
                Фитрат, А. Чулпан – выдвигают идею защиты прав женщин, поднимают
                вопрос об их образовании, так как женщины – «воспитатели нации»,
                а будущее нации напрямую зависит от уровня их образованности.
                Впоследствии, чтобы изменить жизнь узбекских женщин, была
                организована кампания по снятию паранджи – «Худжум». Женщины,
                оставаясь хранительницами домашнего очага и занимаясь
                воспитанием детей, стали активно участвовать в
                общественно-политической жизни страны.
              </p>

              <p className="text">
                История Узбекистана ХХ века, наполнена яркими личностями
                прекрасной половины нашей страны, которые оставили неизгладимый
                след в формировании современного общества и доказали свою силу и
                самоотверженность.
              </p>

              <p className="text">
                За минувший век облик узбекской женщины постепенно менялся, а
                буквально за несколько последних лет роль и положение женщин в
                стране существенно возросли. Обретение независимости Узбекистана
                стало новой и важной вехой в жизни женщин Узбекистана,
                повысившее их статус в общественно-политической жизни. При
                Президенте Республики Узбекистан Ш.М.Мирзияеве женщины стали
                занимать важные посты в парламенте и правительстве, а также в
                местных органах власти. Более того, на законодательном уровне
                прописаны особые меры защиты прав женщин от дискриминации и
                бытового насилия.
              </p>

              <div className="WomenOfUzbImg"></div>
              <h4>Экспозиционные зоны</h4>
              <p className="list">
                <span>1920–1930-е годы: Строительство нового общества</span>
                <span>－ Первые женщины-врачи, учителя и инженеры.</span>
                <span>－ Одежда и аксессуары того времени.</span>

                <span>
                  1940–1950-е годы: Великая Отечественная война и годы
                  восстановления.
                </span>
                <span>－ Женщины на фронте и в тылу.</span>
                <span>－ Героические моменты и повседневная жизнь.</span>

                <span>1960–1970-е годы: Модернизация и индустриализация</span>
                <span>
                  － Возросшая роль женщин в разных сферах социальной жизни.
                </span>
                <span>－ Мода и стиль.</span>

                <span>
                  1980–1990-е годы: Период распада Советского Союза и
                  формирования независимой страны
                </span>
                <span>－ Женщины-предприниматели: первые шаги.</span>
                <span>
                  － Эволюция образа женщин в кино, музыке и литературе.
                </span>

                <span>2000–2016-е годы: Развитие независимого Узбекистана</span>
                <span>－ Женщины в бизнесе, культуре и политике.</span>
                <span>－ Модные тренды и стиль.</span>

                <span>2016–2024-е годы: Современность и вызовы</span>
                <span>－ Женщины-лидеры в политике, экономике, культуре.</span>
                <span>－ Образы современных женщин Узбекистана. </span>
              </p>
              <p className="text">
                <span>
                  Выставка приглашает Вас еще раз посмотреть на путь, который
                  прошли женщины Узбекистана, оценить их вклад в разные сферы
                  общественной жизни, а также вдохновить будущее поколение!
                </span>
              </p>
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