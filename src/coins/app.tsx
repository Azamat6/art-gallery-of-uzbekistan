import "../scss/index.scss";

import PagesHeader from "../components/PagesHeader";
import Footer from "../components/Footer";
import BgIMage from "../assets/images/Coins.jpg";

function App() {
  return (
    <div className="app-container">
      <PagesHeader
        title="Коллекция древних монет"
        subtitle=""
        backgroundImage={BgIMage}
      />
      <section className="Coins PageAbout">
        <div className="container">
          <div className="row">
            <div className="firstColumn col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="text">
                <span>
                  Национальный банк внешнеэкономической деятельности Республики
                  Узбекистан вносит достойный вклад в благородное дело
                  сохранения памятников прошлого страны — её национального
                  достояния. Неудивительно, что в силу специфики деятельности,
                  для банка наиболее интересными являются нумизматические
                  памятники прошлого — монеты, обращавшиеся на территории
                  Узбекистана на протяжении нескольких тысячелетий.
                </span>
              </p>
              <h4 className="margintopS">
                Формирование уникальной коллекции монет
              </h4>
              <p className="text">
                С обретением независимости, наша страна стала активно и
                целенаправленно создавать свою национальную систему денежного
                обращения. Монеты и банкноты суверенного Узбекистана являются
                полновесными инструментами денежного обращения и полноценно
                отражают самостоятельную финансовую политику нашего государства.
                При их изготовлении учтены богатейшие исторические и культурные
                ценности нашего народа.
              </p>
              <p className="text">
                В этой связи, не будет преувеличением отметить, что в числе
                достижений Национального Банка несомненно, свое место занимает
                создание первой в стране банковской коллекции древних монет.
              </p>
              <p className="text">
                Формирование коллекции — непростое и ответственное дело,
                предполагающее соответствующую методику. Такая методика
                выработана и успешно применяется в процессе формирования
                коллекции, о которой идёт речь. В самом общем плане, эту
                методику можно свести к двум взаимодополняющим принципам,
                вытекающим из одного, самого главного — сохранения национального
                достояния страны, выраженного в нумизматических памятниках.
              </p>
              <p className="text">
                Спасать и сохранять надо, в первую очередь, конечно, самые
                редкие памятники. И в составе нумизматического собрания Банка
                уже немало уникальных образцов монет, способных украсить любой
                музей мира. Однако собрание редкостей ещё не даёт цельную
                картину денежного обращения региона, поэтому с неизбежностью
                требуется реализация и второго принципа — стремление к
                максимально полному и детализированному (вплоть до штемпельной
                разновидности) отражению в коллекции Банка денежного обращения
                на территории Узбекистана.
              </p>
              <p className="text">
                Таким образом, отнюдь не случайно по мере пополнения
                нумизматического собрания Национального банка, коллекция
                приобретает всё более совершенный и цельный облик. Шаг за шагом
                заполняются пробелы в уже созданных его разделах, некоторые
                монеты дают начало новым разделам, редкости вызывают особую
                гордость и восхищение. Количество постепенно переходит в новое
                качество.
              </p>

              <h4 className="margintop">Историческое значение</h4>
              <p className="text">
                Особое значение этой коллекции заключается в том, что она,
                большей частью, состоит из монет регионального чекана, почти
                совсем не известных мировой науке. Достаточно назвать здесь
                монеты Согда, Хорезма, Чача, Уструшаны, монеты среднеазиатских
                наместников Омейядов и Абасидов, местных мусульманских династий.
              </p>

              <div className="photoGal"></div>

              <p className="text">
                На каждом этапе этого огромного исторического периода палитра
                денежной массы удивительно многообразна. Причём, кроме местной
                чеканки, разумеется превалирующей, наблюдается обращение и так
                называемой привозной монеты. Для Центральной Азии и Узбекистана,
                в частности, в древности — это, прежде всего, монеты Александра
                Македонского и Китая. В коллекции представлены драхма Александра
                и медная монета Китая, выпущенная две тысячи лет назад. Однако
                гораздо больший интерес должны вызывать монеты государств, в
                состав которых входила территория современного Узбекистана. Для
                раннего периода — это монеты Селевкидов и греко-бактрийских
                правителей, монеты Парфии и Кушанского царства.
              </p>
              <p className="text">
                Особо хочется отметить великолепные драхмы и медные номиналы с
                очень живописными портретами древнехорезмийских царей. Эти
                монеты, а их, как известно, очень мало, составляют гордость
                крупнейших нумизматических собраний мира. Что касается
                средневековых монет, особо выделяются монеты так называемого
                Бухарского Согда и Чача, дающие очень ценную информацию о
                периоде, почти совсем не освещённом письменными источниками.
              </p>
              <p className="text">
                Трудно переоценить значение и монет среднеазиатских наместников
                Омейядов, Аббасидов и Саманидов, которые и сами по себе
                представляют большую редкость. А уж об их историческом значении,
                как, зачастую, единственном источнике сведений о местных
                властителях написано много исследований.
              </p>
              <p className="text">
                В основном золотыми монетами представлен, Бухарский эмират.
                Великолепные по сохранности тилли, отчеканенные, по историческим
                меркам, не так уж и давно, порой таят в себе загадку — то они
                имеют две разные даты чекана, то надписи на них оказываются
                зарифмованные, иногда же золотые монеты этого государства
                оказываются связанными в серии особыми знаками, расшифровать
                которые еще предстоит науке.
              </p>

              <h4 className="margintop">Культурное наследие</h4>
              <p className="text">
                {" "}
                Хорошо известно — любая коллекция — это нечто большее, чем
                просто совокупность входящих в неё предметов. Настоящая
                коллекция, а тем более такая значительная, как нумизматическая
                коллекция Национального банка Узбекистана — это, прежде всего,
                одна из форм отражения вечного стремления человека к познанию, в
                данном случае к познанию, достойному сохранению и передаче
                будущим поколениям великого исторического прошлого своей Родины.
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
