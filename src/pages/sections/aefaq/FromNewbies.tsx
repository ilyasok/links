import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import {VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

export const AEFromNewbies: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="from-newbies"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/FromNewbies.tsx" />
      <DetailsSummary title="Первый раз установил After Effects, с чего бы мне начать обучение?">
        {/* fixme: больше курсов: по типу вольницы, видеосмайлов, Панковского и тд и тп */}
        <p>
          Если вы ранее не работали в программах для композитинга, в том числе и{" "}
          <mark className="app">After Effects</mark>, то вы можете начать проходить курс
          от{" "}
          <a
            href="https://www.youtube.com/channel/UCmLY17yagzLy6GRiI1nVBow"
            title="Канал Ильи Зернова на YouTube"
          >
            Ильи Зернова
          </a>
          . Данный курс поможет вам разобраться в интерфейсе программы и не задавать
          глупых вопросов уже в начале своего пути.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="https://www.youtube.com/embed/nogR7eyhYug"
          caption="Видеоплеер YouTube"
        />
        <p>
          Если вы уже знакомы с интерфейсом программы, но испытываете трудности с
          насмотренностью - изучите каналы на YouTube ниже.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/@TutoView">Tutorial View+</a>{" "}
          <a href="https://www.youtube.com/@BenMarriott">Ben Marriott</a>{" "}
          <a href="https://www.youtube.com/@AEPlug">AEPlug</a>{" "}
          <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a>
        </div>
        <p>Могу ещё порекомендовать полноценные курсы от:</p>
        <div className="flexible-links">
          <a href="https://cloudlessons.ru/v/410/">Супер After Effects от VideoSmile</a>
          <a href="https://volnitsa.zenclass.ru/public/course/4b9a6429-5c06-4f91-a73b-312bc57b9e35">
            Быстрый вход в After Effects от Вольница
          </a>
          <a href="https://volnitsa.zenclass.ru/public/course/9221df49-3262-444e-b269-8b3bfd496de2">
            SUPER SILA FOREVER от Вольница
          </a>
        </div>
        <p style={{textAlign: "center"}}>
          Надеюсь что вы найдете для себя что-то полезное. Удачи в начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary title="Не понимаю термины от других пользователей After Effects, проясните!">
        <p>
          Когда пользователь только начинает изучать{" "}
          <mark className="app">After Effects</mark>, у него возникают недопонимания в
          процессе общения с другими пользователями. Это нормально, у каждой сферы есть
          свой сленг и понятия. В этом списке постараемся объяснить часто используемые
          термины и слова.{" "}
        </p>
        <ul>
          <li>
            <mark className="word">Аджастмент</mark> - имеется ввиду корректирующий слой,
            от английского - <mark className="word">Adjustment Layer</mark>. Данный слой
            позволяет применять эффекты поверх слоёв, которые находятся ниже самого{" "}
            <mark className="word">аджастмента</mark> по иерархии на таймлайне. В
            программе его можно создать с помощью комбинации клавиш{" "}
            <mark className="key">Ctrl + Alt + Y</mark>.
          </li>
          <li>
            <mark className="word">Альфа-канал</mark> - название четвёртого канала в
            цветовой модели RGBA. Чаще всего под этим термином подразумевают прозрачность,
            которую можно объединить с изображением. <mark className="file">GIF</mark>{" "}
            поддерживает только бинарную прозрачность (без плавной градации прозрачности),{" "}
            <mark className="file">PNG</mark> - 254 или 65534 уровня прозрачности. Видео с
            прозрачностью можно вывести в формате <mark className="file">MOV</mark>,{" "}
            <mark className="file">AVI</mark> или <mark className="file">WEBM</mark>,{" "}
            <mark className="file">MP4</mark> не поддерживает альфа-канал (кроме
            пользователей macOS, но там отдельная история).{" "}
            <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB">
              Подробнее про альфа-канал
            </a>
            .
          </li>
          <li>
            <mark className="word">Автотрейс</mark> - функция для автоматического создания
            маски или фигуры на основе краёв вашего слоя. Данную функцию можно вызвать в{" "}
            <mark className="ui">Layer &gt; Auto-Trace</mark>
          </li>
          <li>
            <mark className="word">Битрейт</mark> - скорость передачи и обработки
            информации видео файла в некой системе единиц. Чаще всего выражается в{" "}
            <mark>Кбит/с</mark> или <mark>Мбит/с</mark>. В аудио и видео битрейт выражает
            степень сжатия потока и определяет размер канала, для которого сжат поток
            данных. Чем выше битрейт, тем лучше качество (особенно если на видео
            показываются быстро движущиеся объекты).{" "}
            <AdditionInfo>
              Если у исходника был битрейт 10 Мбит, а при экспорте вы укажете 50 Мбит -
              изображение лучше от этого не станет, вы просто раздуете лишний раз размер
              получаемого файла.
            </AdditionInfo>
            Битрейт бывает нескольких видов:
            <ul>
              <li>
                <mark className="word">CBR (Constant Bitrate)</mark> или{" "}
                <mark className="word">Постоянный битрейт</mark> - вариант кодирования
                данных, когда пользователь выбирает значение битрейта и он сохраняется для
                всего файла. В таком типе кодирования размер получаемого файла будет
                предсказуемым. Хорошо подходит для монтажа, но не очень уместен для
                социальных сетей из-за большого веса по сравнению с кодированием через
                VBR.
              </li>
              <li>
                <mark className="word">VBR (Variable Bitrate)</mark> или{" "}
                <mark className="word">Переменный битрейт</mark> - вариант кодирования
                данных в котором кодек сам выбирает значение битрейта исходя из уровня
                желаемого качества. На разных временных промежутках битрейт может
                изменяться. Плохо подходит для монтажа, но хорошо подходит для передачи
                видео или публикации в социальные сети.
              </li>
              <li>
                <mark className="word">ABR (Adaptive Bitrate)</mark> или{" "}
                <mark className="word">Усреднённый битрейт</mark> - похож по своей сути
                как гибрид CBR и VBR, используется редко.
              </li>
              <li>
                <mark className="word">Lossless</mark> - кодирование данных без потерь. В
                повседневных задачах требуется очень редко и используется этот вариант с
                осторожностью. Сжатие без потерь используется, когда важна идентичность
                сжатых данных оригиналу. После такого кодирования полученный файл может
                занять у вас чуть ли не всё дисковое пространство на вашем устройстве.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Борисовский</mark>,{" "}
            <mark className="word">сапфировский</mark> или{" "}
            <mark className="word">континуумовский</mark> - под этими прилагательными
            подразумеваются плагины от компании BorisFX, в частности пакеты{" "}
            <mark className="plugin">Sapphire</mark> и{" "}
            <mark className="plugin">Continuum</mark>. Прилагательное может употребляться
            вместе с названием эффекта, например{" "}
            <mark className="word">сапфировский шейк</mark> или{" "}
            <mark className="word">континуумовский блюр</mark>, что означает{" "}
            <mark className="plugin">S_Shake</mark> и{" "}
            <mark className="plugin">BCC Lens Blur</mark>
          </li>
          <li>
            <mark className="word">Максоновский</mark> или{" "}
            <mark className="word">редгиантовский</mark> - в таком случае подразумеваются
            плагины от Maxon и Red Giant, например{" "}
            <mark className="plugin">Trapcode Particular</mark> или{" "}
            <mark className="plugin">Universe</mark>.
          </li>
          <li>
            <mark className="word">Векторная графика</mark> или{" "}
            <mark className="word">вектор</mark> - форма представления изображения с
            помощью математических формул и геометрических объектов (линии, кривые,
            многоугольники). Отличительная особенность такого типа изображений -
            детализация не падает при увеличении масштаба холста.
            <AdditionInfo>
              Если вы нажмёте на <mark className="ui">Continuously Rasterize</mark> у слоя
              - при увеличении предпросмотра вы никогда не добьётесь &quot;векторного
              предпросмотра&quot;. Это происходит потому что{" "}
              <mark className="app">After Effects</mark> всегда растеризует предпросмотр в
              соответствии с заданным в настройках разрешением композиции.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Растровая графика</mark> - файл изображения или видео
            состоящее из цветных пикселей. Чем выше разрешение, тем лучше качество.
          </li>
          <li>
            <mark className="word">Вотермарк</mark> или{" "}
            <mark className="word">водяной знак</mark> - некая защита от копирования
            недобросовестными заказчиками. Чаще всего лепится полупрозрачным текстовым
            слоем с ником или именем исполнителя.
          </li>
          <li>
            <mark className="word">Выражения</mark>,{" "}
            <mark className="word">экспрешен</mark> или{" "}
            <mark className="word">expression</mark> - некая инструкция для движения
            объекта или расчёты некоторых формул. Часто используется для привязки
            контроллера к объекту, значения аттрибутов из одного слоя и другому или просто
            фиксации определённого значения в массиве.
            <AdditionInfo>
              Чтобы активировать режим написания выражений - нажмите на иконку{" "}
              <mark className="ui">секундомера</mark> у нужного параметра с зажатой
              клавишей <mark className="key">Alt</mark>. После этого на таймлайне появится
              текстовое поле куда вы сможете ввести своё выражение.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Говорящая голова</mark> - формат видео в котором, как
            правило, присутствует только диктор, снятый крупным планом.
          </li>
          <li>
            <mark className="word">ЕМНИП</mark> - сокращение от выражения{" "}
            <mark className="word">Если мне не изменяет память</mark>.
          </li>
          <li>
            <mark className="word">Инфлюкс</mark> - сторонний плагин{" "}
            <mark className="plugin">Autokroma Influx</mark>, позволяющий импортировать в{" "}
            <mark className="app">After Effects</mark> неподдерживаемые типы файлов,
            например <mark className="file">.mkv</mark> или{" "}
            <mark className="file">.flv</mark>.
          </li>
          <li>
            <mark className="word">Кеинг</mark> - процедура удаления однородного или
            однотонного фона из видео или изображения. Часто применяется в контексте
            удаления зелёного или синего фона или отделения объекта от фона.
          </li>
          <li>
            <mark className="word">Клинап</mark> - процедура удаления ненужных объектов на
            видео. Сделать это можно встроенным{" "}
            <mark className="plugin">Content-Aware Fill</mark> или через плагин{" "}
            <mark className="plugin">Mocha Pro</mark>.
          </li>
          <li>
            <mark className="word">Кодек</mark> - программа или библиотека, которая
            кодирует или декодирует данные видео. С помощью кодеков компьютер понимает как
            ему работать с различными форматами видео-файлов. Существует несколько типов
            кодеков, в нашем случае мы разберём <mark className="word">монтажные</mark> и{" "}
            <mark className="word">не монтажные (delivery) кодеки</mark>. Видео с не
            монтажными кодеками для монтажа вашего видео использовать не рекомендуется.
            <ul>
              <p
                style={{textAlign: "center", fontWeight: "bold", color: "var(--accent)"}}
              >
                Монтажные кодеки
              </p>
              <li>
                <mark className="file">Apple Prores</mark> - высококачественный кодек,
                который широко используется в качестве формата получения, производства и
                доставки и имеет различные шаблоны кодирования. Некоторых может расстроить
                большой вес файлов с таким кодеком.{" "}
                <mark className="file">Prores 422</mark> чаще всего используется в монтаже
                как исходники или прокси, а <mark className="file">Prores 4444</mark>{" "}
                используется для того чтобы импортировать видео с прозрачным фоном без
                сильной потери качества. Чтобы вывести такой файл из{" "}
                <mark className="app">After Effects</mark>, вам нужно выбрать{" "}
                <mark className="file">Quicktime</mark> из списка доступных кодеков для
                вывода.{" "}
                <AdditionInfo>
                  В кодеках <mark className="file">Apple Prores</mark> вы не можете
                  настроить битрейт, так как у каждого типа, например <mark>422</mark>,{" "}
                  <mark>422 (LT)</mark> или <mark>4444</mark> имеют различные битрейты по
                  умолчанию.{" "}
                  <a href="https://ru.wikipedia.org/wiki/Apple_ProRes#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B2_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B0_ProRes">
                    Подробнее...
                  </a>
                </AdditionInfo>
              </li>
              <li>
                <mark className="file">DNxHD</mark> или{" "}
                <mark className="file">DNxHR</mark> - монтажные кодеки от Avid, были
                создан с акцентом на меньший вес после создания такого файла. По своей
                сути похожи как ProRes.
              </li>
              <li>
                <mark className="file">GoPro Cineform</mark> - также популярен в индустрии
                кино и на телевидении, поддерживает вывод видео с альфа-каналом и также
                имеет меньший вес по сравнению с{" "}
                <mark className="file">Apple Prores 4444</mark>.
              </li>
            </ul>
            <ul>
              <p
                style={{textAlign: "center", fontWeight: "bold", color: "var(--accent)"}}
              >
                Не монтажные (delivery) кодеки
              </p>
              <li>
                <mark className="file">H.264</mark>, <mark className="file">H.265</mark>{" "}
                или <mark className="file">HEVC</mark> - популярный кодек для
                распространения видео и публикаций в интернете, для воспроизведения видео
                на различных устройствах. При должном кодировании вы можете получить
                хорошее соотношение качества, веса и совместимости с другими устройствами.{" "}
                <AdditionDanger>
                  Настоятельно не рекомендуется использовать для монтажа видео из
                  интернета с данными кодеками! Такие кодеки предназначены только для
                  вывода. Определённая площадка, например YouTube, может
                  переконвертировать видео по своим алгоритмам, чтобы уместить у себя на
                  своих серверах, но не рассчитывает на то, что пользователь скачает видео
                  из этой площадки и начнёт с ним работать в монтажной программе. Из-за
                  этого при монтаже вы можете получить неожиданные результаты в виде
                  непонятных артефактов или{" "}
                  <mark className="word">проблемы зелёного экрана</mark>, так как
                  монтажная программа не понимает, как с таким файлом работать. Прежде чем
                  использовать видео из популярных площадок для монтажа - стоит их
                  перекодировать в монтажный кодек, например в{" "}
                  <mark className="file">Apple Prores 422</mark>, чтобы не заработать себе
                  головные боли в дальнейшем. <a href="#5.1">Подробнее...</a>
                </AdditionDanger>
                <AdditionInfo>
                  <mark className="word">Проблема зелёного экрана</mark> часто встречается
                  при использовании кривых исходников в{" "}
                  <mark className="file">H.264</mark> или при использовании видеокарт от
                  AMD. Иногда в таком случае перекодировка не требуется и достаточно
                  отключить{" "}
                  <mark className="ui">Enable hardware accelerated decoding</mark> в{" "}
                  <mark className="ui">Edit &gt; Preferences &gt; Import</mark>
                </AdditionInfo>
              </li>
              <li>
                <mark className="file">VP9</mark> и <mark className="file">AV1</mark> -
                кодеки от Google в контейнере <mark className="file">WebM</mark> с
                возможностью вывода с альфа-каналом. Видео с таким кодеком обычно
                используются для размещения на веб-страницах. За счёт своих алгоритмов
                сжатия видео с кодеком VP9 или AV1 имеют гораздо меньший вес по сравнению
                с видео в кодеке H.264 или H.265.{" "}
                <AdditionInfo>
                  Из <mark className="app">After Effects</mark> файлы с таким кодеком
                  нативно вывести не получится, для этого перегнать ваше видео через
                  конвертер, например{" "}
                  <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
                </AdditionInfo>
              </li>
              <li>
                <mark className="file">MPEG</mark> - устаревший кодек на данный момент.
                Раньше его использовали для записи фильма или домашнего видео на DVD или
                Blu-ray диск, чтобы воспроизвести это видео с помощью видео проигрывателя
                или дисковода.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Контейнер</mark> - расширение видео файла, в котором
            содержится само видео в определённом кодеке, например{" "}
            <mark className="file">.mp4</mark>, <mark className="file">.mov</mark> или{" "}
            <mark className="file">.mkv</mark>.
          </li>
          <li>
            <mark className="word">Коллект файл</mark> - функция{" "}
            <mark className="ui">Collect Files</mark> для сборки всех файлов, используемые
            в вашем проекте <mark className="app">After Effects</mark> в одну папку. Эту
            папку вы можете заархивировать и отправить другому человеку или перенести в
            другое место, например на внешний жёсткий диск.
            <AdditionInfo>
              Данная функция находится в{" "}
              <mark className="ui">File &gt; Dependencies &gt; Collect Files</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Композиция</mark> или{" "}
            <mark className="word">композ</mark> - некая сцена вашего проекта в{" "}
            <mark className="app">After Effects</mark>. В композиции пользователь обычно
            собирает свою сцену с слоями, фигурами, эффектами или видео-файлами. У каждой
            композиции есть частота кадров, разрешение и соотношение пикселя.
            <AdditionInfo>
              Чтобы открыть окно настроек композиции - используйте комбинацию клавиш{" "}
              <mark className="key">Ctrl + K</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Комп сеттер</mark> - бесплатный сторонний JSX-скрипт{" "}
            <a href="https://github.com/msongz/rd_CompSetter">rd_CompSetter</a> для
            одновременного изменения параметров нескольких композиций.
            <AdditionInfo>
              Инструкцию по установке сторонних плагинов и скриптов вы можете найти в{" "}
              <a href="#2.1">пункте 2.1</a>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Кубик</mark> - индикация у слоя, отвечающая на вопрос
            &quot;слой или эффект находится в трёхмерном пространстве?&quot;. С такими
            слоями можно взаимодействовать в 3D-пространстве, например управлять камерой
            или положение по одной из трёх осей.
          </li>
          <li>
            <mark className="word">Могрт</mark> или <mark className="word">Mogrt</mark> -
            шаблон анимационного дизайна, который создаётся в{" "}
            <mark className="app">After Effects</mark>, чтобы использовать в дальнейшем в
            других проектах. Чаще всего такие шаблоны делают для использования в{" "}
            <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            <mark className="word">Мокка</mark> или <mark className="word">моча</mark> -
            плагин <mark className="plugin">BorisFX Mocha</mark>, которая используется для
            трекинга и привязки объектов. Данный плагин включён в базовую поставку{" "}
            <mark className="app">After Effects</mark>, но в урезанном виде. Для
            разблокировки некоторых функций требуется полная версия{" "}
            <mark className="plugin">BorisFX Mocha Pro</mark>.{" "}
            <a href="https://support.borisfx.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
              О различиях между AE и Pro...
            </a>
          </li>
          <li>
            <mark className="word">Морфинг</mark> - название техники для плавного
            превращения одной фигуры в другую, часто применяется с фигурными слоями.
          </li>
          <li>
            <mark className="word">Стесняшка</mark>, <mark className="word">шляпка</mark>{" "}
            или
            <mark className="word">медуза</mark> - функция <mark className="ui">Shy</mark>
            . Если у слоя помечен такой аттрибут, то такие слои можно легко скрыть на
            таймлайне, при этом такие слои будут видимыми в предпросмотре композиции.
          </li>
          <li>
            <mark className="word">Решётка</mark> - индикация у слоя{" "}
            <mark className="ui">Guide Layer</mark>, которая рендерится только в
            предпросмотре композиции и не будет рендериться в финальном файле. Такие файлы
            используются для описания &quot;как работать с данной композицией&quot;.
          </li>
          <li>
            <mark className="word">Моушен блюр</mark> - размытие в движении. С помощью
            него можно сделать плавное движение объекта. Это можно сделать с помощью
            включения <mark className="ui">Motion Blur</mark> у слоя или применив эффект{" "}
            <mark className="plugin">CC Force Motion Blur</mark>.
          </li>
          <li>
            <mark className="word">Мультифрейм рендер</mark> или{" "}
            <mark className="word">MFR</mark> - относительно свежая функция{" "}
            <mark className="ui">Multi Frame Render</mark>, добавленная в{" "}
            <mark className="app">After Effects 2022</mark>, призванная ускорить время
            рендера за счёт рендера несколько кадров одновременно. Для раскрытия
            потенциала этой функции требуется многоядерный процессор.
          </li>
          <li>
            <mark className="word">Нулевой объект</mark> или{" "}
            <mark className="word">нуль</mark> - пустой объект, который используется для
            расположения контроллеров или манипуляторов. Полезен при привязке нескольких
            объектов в одно целое.{" "}
          </li>
          <li>
            <mark className="word">Одинаковый год</mark> - часто встречается в контексте
            вопроса &quot;у тебя точно одинаковые версии программ от Adobe стоят?&quot;.
            Данный вопрос задаётся в случае когда пользователь, например, не может
            подсоединить <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Media Encoder</mark> между собой. В таких случаях часто
            виноват сам пользователь при выборе версии программы.
            <AdditionInfo>
              Программы <mark className="app">After Effects</mark>,
              <mark className="app">Premiere Pro</mark> и
              <mark className="app">Media Encoder</mark> разных годов (например 2020, 2018
              и 2022) не совместимы друг с другом.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Патч</mark> или <mark className="word">путь</mark> -
            своеобразная линия или кривая, которая применяется для создания фигуры или
            маски у слоя.
            <AdditionInfo>
              Path маски и фигурного слоя взаимозаменяемые, поэтому вы можете превратить
              слой-фигуру в маску и наоборот с помощью копирования и вставки этих
              аттрибутов.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Перекодируй видос</mark> - призыв к процессу
            конвертации исходников в монтажный кодек, чаще всего через{" "}
            <mark className="app">Media Encoder</mark> или{" "}
            <mark className="app">Shutter Encoder</mark>.
          </li>
          <li>
            <mark className="word">Перелинкуй исходники</mark> - переподключение
            потерянных файлов в вашем проекте. Это делается с помощью{" "}
            <mark className="key">ПКМ</mark> по потерянным исходникам в окне{" "}
            <mark className="ui">Project</mark> и выбора пункта{" "}
            <mark className="ui">Replace Footage</mark>.
            <AdditionInfo>
              Если остальные потерянные исходники находятся в одной папке, то они
              автоматически подключатся после указания первого потерянного файла.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Плагин</mark> - подключаемые (встроенные или сторонние)
            эффекты с расширением <mark className="file">.aex</mark> (Windows) или{" "}
            <mark className="file">.plugin</mark> (macOS). Часто применяется с выражением
            &quot;где скачать?&quot;.
          </li>
          <li>
            <mark className="file">Плейхед</mark> - вертикальная временная метка,
            показывающая где находится точка текущего кадра в предпросмотре.
          </li>
          <li>
            <mark className="file">Превью</mark> или{" "}
            <mark className="file">предпросмотр</mark> - то, что вы видите на вашем экране
            в окне, где отображается предварительный вывод вашей композиций.
          </li>
          <li>
            <mark className="file">Зайди в окно превью</mark> - вам предлагают открыть
            окно с настройками предварительного просмотра с помощью{" "}
            <mark className="ui">Window &gt; Preview</mark>. Обычно в таких случаях у
            пользователя стоят кривые настройки FPS (видео из-за этого идёт слишком быстро
            или медленно) или плохое качество предпросмотра (Auto или Quarter вместо
            Full).
          </li>
          <li>
            <mark className="file">Прекомпоз</mark> - обычно это дочерняя композиция
            созданная за счёт выделенных объектов из родительской композиции. Создаётся с
            помощью комбинации клавиш <mark className="key">Ctrl + Shift + C</mark>. Чаще
            всего такую композицию создают для группировки кучи объектов, чтобы получился
            в итоге один слой на таймлайне. Новая композиция появится в панели проекта и
            её можно будет использовать в любой другой композиции.
            <AdditionInfo>
              В любой непонятной ситуации - используйте прекомпоз, часто помогает.
            </AdditionInfo>
          </li>
          <li>
            <mark className="file">Дупликатор</mark> - обычно используется в качестве
            обозначения бесплатного стороннего скрипта{" "}
            <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>
            . Он используется для того чтобы дублировать композиции так, чтобы они не были
            зависимы друг от друга.
            <AdditionInfo>
              Чтобы его скачать, вам нужно зарегистрироваться на сайте{" "}
              <a href="https://aescripts.com">aescripts</a> и на странице с плагином
              указать цену 0. После этого данный плагин появится в ваших заказах и вы
              можете оттуда его скачать.
            </AdditionInfo>
          </li>
          <li>
            <mark className="file">Пресет</mark> - заготовленный набор эффектов формата{" "}
            <mark className="file">.ffx</mark> для дальнейшего применения. Может
            сохраняться вместе с анимацией по ключам.
            <AdditionWarning>
              Не все пресеты, созданные сторонними пользователями могут корректно работать
              с вашим проектом, иногда их надо отредактировать под свои нужды.
            </AdditionWarning>
          </li>
          <li>
            <mark className="file">Прокси</mark> - более производительная копия исходника
            для монтажа за счёт использования монтажного кодека или понижения разрешения.
            Его нужно создавать если вы имеете проблемы с производительностью из-за
            большого разрешения исходника или когда нужна более стабильная работа с
            проектом. Обычно такие прокси создаются с помощью программ{" "}
            <mark className="app">Media Encoder</mark>,{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">Handbrake</mark>.
            <AdditionInfo>
              По умолчанию если у исходника есть прокси - в финальный рендер попадает
              оригинальный файл. Это поведение можно изменить в настройках вывода.
            </AdditionInfo>
          </li>
          <li>
            <mark className="file">Разрешение</mark> или{" "}
            <mark className="file">резолюшен</mark> - количество пикселей в ширину и
            высоту. Иногда используется в контексте выбора качества предпросмотра{" "}
            <mark className="ui">Full</mark>, <mark className="ui">Half</mark>,{" "}
            <mark className="ui">Third</mark> или <mark className="ui">Quarter</mark>
            <AdditionInfo>
              Если у вас есть композиция с разрешением 1280 на 720, а в настройках рендера
              вы поставили <mark className="ui">Resize</mark> до 3840 на 2160 - вы просто
              растянете 720p композицию до 4K без фактического улучшения качества,
              композиция не будет рендериться сразу в 4K.
            </AdditionInfo>
          </li>
          <li>
            <mark className="file">Ракета</mark> - окно{" "}
            <mark className="ui">Project Settings</mark> в котором обычно меняется
            цветовое пространство проекта или настраивается использование GPU.
            <AdditionInfo>
              Данное окно открывается с помощью комбинации клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Редьюс</mark> - функция{" "}
            <mark className="ui">Reduce Project</mark> которая облегчает ваш проект за
            счёт удаления всех объектов, кроме выбранной композиции в окне{" "}
            <mark className="ui">Project</mark>. Сделать это можно с помощью{" "}
            <mark className="ui">File &gt; Dependencies &gt; Reduce Project</mark>.
            <AdditionWarning>
              Если вы первый раз пользуетесь этой функцией - создайте на крайний случай
              копию файла вашего проекта, вдруг эта функция удалит не те файлы, как
              планировалось.
            </AdditionWarning>
            Также существует пункт <mark className="ui">Remove Unused Footage</mark> для
            удаления неиспользованных исходников в вашем проекте.
          </li>
          <li>
            <mark className="word">Рендер</mark> - процесс генерации кадров и дальнейшей
            их упаковки в нужный контейнер и кодек. Часто используется в контексте вывода
            композиции в видео или изображение.
          </li>
          <li>
            <mark className="word">Референс</mark> - синоним к словам{" "}
            <mark className="word">пример</mark> и <mark className="word">образец</mark>.
            Используется для иллюстрации анимации, вдохновения или согласования своего
            видения с заказчиком.
          </li>
          <li>
            <mark className="word">Ромбик</mark>, <mark className="word">ключ</mark> или{" "}
            <mark className="word">кейфрейм</mark> - ключевые кадры или же метки, на
            основе которых создаётся движения того или иного параметра слоя. Данные метки
            указывают на то, как будет выглядеть анимированный элемент в конкретный момент
            времени.
          </li>
          <li>
            <mark className="word">Ротобраш</mark> - стандартный инструмент в{" "}
            <mark className="app">After Effects</mark> для выделения движущегося объекта в
            кадре. Часто используется для создания обводки вокруг объекта или отделения от
            фона.
          </li>
          <li>
            <mark className="word">Ротоскоп</mark> - процесс разделения сцены или кадра на
            несколько слоёв.
          </li>
          <li>
            <mark className="word">Семплы</mark> - часто применяется в 3D-плагинах или в
            настройке размытия в движении. Чем больше семплов, тем лучше картинка, но хуже
            производительность.
          </li>
          <li>
            <mark className="word">Скрипт</mark> - файлы формата{" "}
            <mark className="file">.jsx</mark> или
            <mark className="file">.jsxbin</mark>, выполняющее определённые инструкции или
            действия. Могут быть встроенными или сторонними. Если у вас есть навыки в
            программировании скриптов - вы можете создать свой скрипт, выполняющую нужную
            вам задачу. <a href="#2.1">Как установить сторонние скрипты?</a>
          </li>
          <li>
            <mark className="word">Солид</mark> - слой с заданным цветом. Часто
            применяется как фон или как инициализатор 3D-эффектов, например{" "}
            <mark className="plugin">Trapcode Particular</mark>.
          </li>
          <li>
            <mark className="word">Солнышко</mark> или{" "}
            <mark className="word">звёздочка</mark> - пункт{" "}
            <mark className="ui">Continuously Rasterize</mark> для уменьшения
            &quot;пикселей&quot; у векторных объектов.
            <AdditionInfo>
              При включенной опции <mark className="ui">Continuously Rasterize</mark> у
              слоя - при увеличении предпросмотра вы никогда не добьётесь &quot;векторного
              предпросмотра&quot;. Это происходит потому что{" "}
              <mark className="app">After Effects</mark> всегда растеризует предпросмотр в
              соответствии с заданным в настройках разрешением композиции.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Тайлинг</mark> - зеркальная плитка, которую можно
            использовать для заполнения пустоты при использования эффекта &quot;пьяного
            оператора с трясущимися руками&quot;. Обычно такая плитка делается с помощью
            эффектов <mark className="plugin">CC Repetile</mark> или{" "}
            <mark className="plugin">Motion Tile</mark>.
          </li>
          <li>
            <mark className="word">Тайм-ремапинг</mark> - принцип изменения скорости видео
            в определённых промежутках времени. Делается это с помощью встроенной функции{" "}
            <mark className="ui">Time Remapping</mark>, которая включается с помощью
            комбинации клавиш <mark className="key">Ctrl + Alt + T</mark> или с помощью
            сторонних плагинов, например <mark className="plugin">Twixtor</mark> или{" "}
            <mark className="plugin">BCC Retimer ML</mark>.
          </li>
          <li>
            <mark className="word">Топик стартер</mark> - человек, который изначально
            задал вопрос или поднял определённую тему в чате.
          </li>
          <li>
            <mark className="word">Трансформ</mark> - настройка или анимация базовых
            свойств слоя, например положение или размер. Иногда означает встроенный эффект{" "}
            <mark className="plugin">Transform</mark>.
          </li>
          <li>
            <mark className="word">Элемент 3Д</mark> - сторонний плагин{" "}
            <mark className="plugin">Element 3D</mark> от VideoCopilot, позволяющий
            создавать 3D-сцены в композициях <mark className="app">After Effects</mark>.
          </li>
          <li>
            <mark className="word">Трекинг</mark> - механизм определения местоположения
            движущегося объекта для дальнейшей его привязки к другому объекту. Часто
            применяется для замены экранов мониторов или биллбордов на видео.
          </li>
          <li>
            <mark className="word">Туториал</mark> - обучающее видео о том, как
            пользоваться программой или как использовать определённый эффект или плагин.
            Такие видео помогают новичку ориентироваться в интерфейсе программы и иногда
            раскрывают некоторые хитрости при создании эффектов.
          </li>
          <li>
            <mark className="word">Улитка</mark>, <mark className="word">спираль</mark>{" "}
            или <mark className="word">лассо</mark> - инструмент для привязки слоя или его
            параметров к другому слою.
            <AdditionInfo>
              Если вы не видите инструмента для привязки на вашем таймлайне - включите его
              видимость с помощью <mark className="key">ПКМ</mark> по столбцам и выберите{" "}
              <mark className="ui">Columns &gt; Parent & Link</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Усики</mark> - манипуляторы графика скорости в{" "}
            <mark className="ui">Graph Editor</mark>, пути движения в предпросмотре или
            угла у фигуры.
          </li>
          <li>
            <mark className="word">Хоткей</mark> - сокращение от &quot;горячие
            клавиши&quot;, означает некую комбинацию клавиш, которые должен знать
            пользователь для выполнения нужного действия.
          </li>
          <li>
            <mark className="word">Часы</mark> или{" "}
            <mark className="word">секундомер</mark> - элемент интерфейса на таймлайне или
            в панели управления эффектом для добавления.
            <AdditionInfo>
              Если нажать на секундомер с зажатым <mark className="key">Alt</mark> -
              включится режим работы с выражениями. Выключается аналогичным образом.
            </AdditionInfo>
          </li>
          <li>
            <mark className="word">Шаблон</mark> - некий заготовок проекта или пресета для
            уменьшения времени создания композиций или поиска вдохновения.
          </li>
          <li>
            <mark className="word">Шейп</mark> - от английского{" "}
            <mark className="word">shape</mark>, означает слой с фигурой.
          </li>
          <li>
            <mark className="word">Эдиты</mark> - обычно это видео под музыку, за основу
            которого берутся кадры из фильмов, аниме или игр. Часто распространён на
            YouTube и TikTok с очень сильным разбросом по качеству изготовления таких
            видео. И иногда порой нарезку со вспышками тоже называют эдитами, что
            абсурдно.
          </li>
          <li>
            <mark className="word">Экстеншен</mark> - расширения, часто запакованные в{" "}
            <mark className="file">.zxp</mark>. После установки таких расширений - они
            появятся в <mark className="ui">Window &gt; Extensions</mark>.
            <AdditionInfo>
              Если такие расширения не открываются - убедитесь в том, что вы применили{" "}
              <a
                download
                href="files/Enable Extensions Adobe.reg"
              >
                -патч
              </a>{" "}
              (Windows) или ввели нужные команды для их активации в терминале (macOS).
            </AdditionInfo>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш для работы в After Effects?">
        <p>
          {/* fixme: написать */}
        </p>
      </DetailsSummary>
      <DetailsSummary title="Где я могу узнать об нововведениях в обновлениях After Effects?">
        <p>
          Обычно на сайте Adobe в день выхода публичной стабильной версии выкладываются
          основные нововведения. Это сделано для того, чтобы каждый прохожий не спрашивал
          из каждого угла <mark>&quot;А что обновилось то?&quot;</mark>
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
        </div>
        <p>
          Время от времени Adobe также выкладывает на сайт список выявленных неполадок и
          старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">After Effects</mark>, а также сторонние плагины, чтобы
          исключить возможные проблемы при дальнейшем использовании программы. Многие баги
          из старых версий уже исправлены, например утечка ОЗУ или смещение кадра при
          экспорте.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Хочу обновиться с одного года программы на другой. Как мне перенести плагины без танцев с бубнами?">
        <AdditionDanger>
          Данный способ обновления не гарантирует 100% стабильность работы новой версии
          программы, поэтому обновляйтесь таким способом на свой страх и риск. Если после
          такого способа обновления вы столкнулись с трудностями в работе - переустановите
          программу начисто, предварительно удалив предыдущие версии с помощью{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>
          .
        </AdditionDanger>
        <p>
          Прежде чем обновить программу без потери плагинов - вам нужно переименовать
          папку установленной программы в{" "}
          <mark className="path">C:\Program Files\Adobe</mark>. Для этого дублируем
          исходную папку с программой, убираем приставку <mark>- копия</mark> и меняем
          номер года на нужный.
        </p>
        <AdditionInfo>
          Если вы обновляетесь, например, с 2022 на 2025 - вы должны переименовать новую
          дублированную папку в <mark className="file">Adobe After Effects 2025</mark>.
        </AdditionInfo>
        <p>
          После успешного переименования папки - откройте установщик новой версии
          программы. Она должна увидеть продублированную папку и предложить установить в
          неё. Далее выбираем нужный язык программы и нажимаем на{" "}
          <mark className="ui">Продолжить</mark>. После установки новая версия программы
          предложит вам перенести настройки со старой версии, с чем мы и соглашаемся.
          После успешного запуска программы проверьте - всё ли на месте и продолжайте
          работу как ни в чём не бывало.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Зачем мне с каждого угла советуют поставить английский язык программы и как мне это сделать?">
        <p>
          Установив английскую версию программы - вы оберегаете себя от возможных ошибок с
          выражениями или кривой работы сторонних плагинов. Не все выражения и плагины
          спокойно дружат с языками, отличными от английского.
        </p>
        <p>
          Также при начале своего пути - вам будет гораздо легче найти нужный туториал по
          определённому эффекту на английском языке в котором будет продемонстрирована
          работа английской версии. Ещё будет легче находить эффекты, потому что на
          русской локализации некоторые эффекты максимально нелогично переведены.
        </p>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                Для быстрой смены языка программы на английский - просто создайте пустой
                текстовый документ <mark className="file">ae_force_english.txt</mark>. В
                текстовый файл ничего прописывать не надо. Созданный пустой текстовый
                документ переместите в папку{" "}
                <mark className="path">%USERPROFILE%/Documents</mark>, а затем
                перезапустите <mark className="app">After Effects</mark>. После этого у
                вас программа станет на английском языке.
              </p>
              <p>
                Создать пустой текстовый документ можно с помощью команды ниже в командной
                строке Windows. Через <mark className="app">PowerShell</mark> эта команда
                не будет работать, используйте <mark className="app">cmd</mark>.
              </p>
              <code>
                echo.{">"}&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
              </code>
              <AdditionDanger>
                После такого способа смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановить программу сразу на русский язык.
              </AdditionDanger>
            </div>
          }
          macContent={
            <div>
              <p>{/* fixme: написать */}</p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="Как найти нужный эффект на английском языке, если у меня стоит русский язык в After Effects?">
        <p>{/* предположим что пользователь не хочет менять язык. про колхозный способ двойного языка и про таблицу эффектов */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему предпросмотр проигрывается в хреновом качестве, в пикселях?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что такое Null Object и как с ним работать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что такое Adjustment Layer и для чего он нужен?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему у меня отсутствует звук в предпросмотре?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Применяю эффект, например Glow, но он обрезается. Как расширить действие эффекта?">
        <p>{/* fixme: написать!! ПЕРЕМЕСТИТЬ В ДРУГОЙ ПУНКТ */}</p>
      </DetailsSummary>
      <DetailsSummary title="Не могу изменить параметры наложения у 3D-слоёв. Что делать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему не исчезает фон при использовании режимов наложения?">
        <p>{/* под слоём с включенным режимом наложения должен быть ещё один слой */}</p>
      </DetailsSummary>
      <DetailsSummary title="Продублировал композицию на таймлайне, но копия зависит от оригинала. Как сделать композиции независимыми друг от друга?">
        <p>
          Копируя композицию с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + D</mark> на таймлайне - вы клонируете ссылку на
          одну и ту же композицию, а не создаёте новую. Таким образом изменения в
          &quot;продублированной композиции&quot; будут отражаться и в оригинале.
        </p>
        <p>
          Для того, чтобы сделать композиции независимыми - достаточно нужную композицию
          клонировать в окне <mark className="ui">Project</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc={"/images/aftereffects/duplicate_composition.mp4"}
          caption="Правильное клонирование композиции"
        />
        <p>
          Если вам нужно клонировать одну и ту же композицию с указанием нужного
          количества копий, обновлением выражений, дублированием футажей или группировкой
          в одну папку - воспользуйтесь бесплатным<sup>*</sup> скриптом{" "}
          <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>{" "}
          на aescripts.
        </p>
        <AdditionInfo>
          <sup>*</sup>Чтобы скачать скрипт бесплатно - зарегистрируйтесь на сайте,
          вернитесь на страницу с плагином, установите цену 0 в{" "}
          <mark className="ui">Name Your Own Price</mark>, добавьте его в корзину и
          подтвердите заказ. Нужный плагин появится в вашем профиле.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Переместил слой из одной композиции в другую, но оно ушло за пределы моей композиции. Как его вернуть на своё место?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему первый кадр в композиции начинается не с нулевой секунды?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему не все параметры выравнивания текста доступны в окне Paragraph?">
        {/* fixme: написать */}
        <p>
          Если вы создаёте текстовый слой простым нажатием на композицию, то вы создаёте
          слой без ограничений на высоту и ширину. В таком случае как вы представляете
          работу выравнивания текста по ширине, если оно не задано явно?
        </p>
        <p>
          Чтобы &quot;активировать&quot; оставшиеся четыре параметра выравнивания текста -
          вам нужно изначально создать слой в формате{" "}
          <mark className="ui">Paragraph Text</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="/images/aftereffects/create_paragraph_text.mp4"
          caption="Создание Paragraph Text"
        />
        <p>
          Или переконвертировать уже существующий текстовый слой в формат{" "}
          <mark className="ui">Paragraph Text</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc={"/images/aftereffects/convert_to_paragraph_text.mp4"}
          caption="Конвертация текстового слоя в Paragraph Text"
        />
        <p></p>
      </DetailsSummary>
      <DetailsSummary title="Чем отличается однонодовая камера от двунодовой?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Чем отличается Mocha AE от Mocha Pro?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что за решётка у слоя на таймлайне и для чего нужен Guides Layer?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Делал проект, но я его изначально не сохранял. Вдруг After Effects вылетел. Возможно ли восстановить проект?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему After Effects иногда сам меняет начертание шрифта?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
