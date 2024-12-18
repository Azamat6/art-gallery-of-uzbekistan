import "../../scss/index.scss";

import PagesHeader from "../../components/PagesHeader";
import Footer from "../../components/Footer";
import BgIMage from "../../assets/images/exhibitions/2024/XudoyberganDevonov/Title.png";

function App() {
  return (
    <div className="app-container">
      <PagesHeader
        title="Фотовыставка «Худайберган Деванов и его эпоха»"
        subtitle="21.05.2024 - 17.06.2024"
        backgroundImage={BgIMage}
      />
      <section className="PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                Первые известные фотографические снимки Туркестана были сделаны
                по воле случая именно в Хивинском ханстве. В петербургском Музее
                антропологии и этнографии им. Петра Великого (Кунсткамера)
                Российской Академии наук хранится фотографический альбом - «Виды
                и типы Хивинского ханства».
              </p>

              <p className="text">
                Поначалу среди фотографов, которые снимали Туркестанский край,
                не было представителей местных национальностей. Для менталитета
                Востока, сохранявшего стойкую традицию шариатского запрета на
                изображение одушевленных объектов, фотопортретирование
                первоначально казалось неслыханным. Но в 1903 году в Хивинском
                ханстве, в Новом Ургенче, основал собственное фотоателье
                Худайберган Деванов, творчество которого в последние годы
                внимательно изучается историками фотодела в Узбекистане.
              </p>

              <p className="text">
                Худайберган Деванов, первый узбекский фотограф и кинооператор,
                родился в 1879 году в г. Хива в семье дворцового секретаря
                Нурмухаммада Девана, приближенного к просвещенному хивинскому
                хану Сейиду Мухаммаду Рахиму II.
              </p>

              <p className="text">
                Так случилось, что любознательный мальчишка Худайберген однажды
                стал участником фотосессии, которую проводил на улицах Хивы
                некто Вильгельм Пеннер, староста немецкого поселка
                переселенцев-меннонитов. Этого энтузиаста искусства фотографии
                местное население окрестило прозвищем «Понар-бува»
                (Дедушка-фонарь). В. Пеннер заинтересовал юного хивинца самим
                процессом фотографирования, проявлением стеклянных негативов и
                печатанием снимков. Мальчик быстро освоил ремесло и научился
                выполнять фотографические снимки немецким аппаратом марки «ЗОТ»,
                подаренным ему учителем.
              </p>
              <p className="text">
                Так родился первый в Средней Азии национальный фотограф,
                впоследствии ставший родоначальником узбекского фотоискусства и
                первым национальным кинооператором.
              </p>
              <p className="text">
                Первые фотографии Худайбергена Деванова - этнографические
                снимки, проникнутые неподдельной любовью к народу и к истории
                Хорезма (канатоходцы у городских стен, охотники с ловчими
                птицами, характерные хивинские арбы, ирригаторы на очистке
                арыков). Его снимки отличает стремление сочетать этнографический
                подход с художественным. Это заметно даже в его фотографиях
                историко-архитектурных памятников. По качеству исполнения ранние
                работы Х. Деванова не уступают снимкам других
                фотомастеров-современников. На ряде фотографий, напечатанных им,
                имеются надписи и даты арабским шрифтом, сделанные прямо на
                негативах самим автором, которые свидетельствуют, что молодой
                мастер приступил к творческой фотоработе еще в 90-е годы XIX
                века.
              </p>
              <div className="devonovImg"></div>
              <p className="text">
                Фотографические снимки в начале ХХ века интенсивно
                использовались для воспроизведения на почтовых открытках, тем
                самым пропагандировался новый вид искусства. Однако виды
                Хивинского ханства на подобной массовой продукции встречаются
                крайне редко. Дело в том, что основным издателем фотографических
                почтовых открыток в дореволюционной России было Контрагентство
                А.С.Суворина, известного журналиста, который получил от
                правительства эксклюзивное право продажи почтовых карточек на
                всех железнодорожных станциях империи. Вот и печатались на
                открытках виды даже самых незначительных населенных пунктов,
                расположенных вдоль железных дорог. А в Хивинском ханстве
                железнодорожного сообщения не существовало.
              </p>
              <p className="text">
                Только в 20-30 годы ХХ века появляются значительные массивы
                фотоматериалов, посвященных архитектуре, этнографии и природе
                Хивинского оазиса. Это были, как правило, фотографические снимки
                участников различных научных экспедиций, работавших в отдаленной
                области Узбекистана. Особенно известны многочисленные фотоснимки
                знаменитой Хорезмской экспедиции профессора С.П. Толстова,
                которая с 1936 года в течение ряда лет занималась изучением
                этого региона.
              </p>
              <p className="text">
                К послевоенным годам, когда Хорезм заслуженно превратился в
                «туристическую Мекку» страны, относится большинство популярных
                хорезмийских фоторабот. Особенно это стало заметным в конце 90-х
                годов ХХ века, когда в независимом Узбекистане отмечалось
                2500-летие Хорезма. Сегодня прекрасно изданные художественные
                фотоальбомы и книги доносят до нас неповторимое очарование Хивы,
                справедливо называемой архитектурно-этнографическим музеем под
                открытым небом.
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
