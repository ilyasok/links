import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {FlexibleLinks} from "../../../components/FlexibleLinksFaQ";
const AEFromNewbies: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="from-newbies"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/FromNewbies.tsx" />
      <DetailsSummary title="Первый раз установил After Effects, с чего бы мне начать обучение?">
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
          link="https://www.youtube.com/embed/nogR7eyhYug"
          caption="Основы After Effects от Ильи Зернова"
        />
        <p>
          Если вы уже знакомы с интерфейсом программы, но испытываете трудности с
          насмотренностью - изучите каналы на YouTube ниже.
        </p>
        <FlexibleLinks>
          <a href="https://www.youtube.com/@TutoView">Tutorial View+</a>
          <a href="https://www.youtube.com/@BenMarriott">Ben Marriott</a>
          <a href="https://www.youtube.com/@AEPlug">AEPlug</a>
          <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a>
        </FlexibleLinks>
        <p>Могу ещё порекомендовать бесплатные и платные полноценные курсы:</p>
        <FlexibleLinks>
          <a href="https://cloudlessons.ru/v/410/">
            &quot;Супер After Effects&quot; от VideoSmile
          </a>
          <a href="https://volnitsa.zenclass.ru/public/course/4b9a6429-5c06-4f91-a73b-312bc57b9e35">
            &quot;Быстрый вход в After Effects&quot; от Вольница
          </a>
          <a href="https://volnitsa.zenclass.ru/public/course/9221df49-3262-444e-b269-8b3bfd496de2">
            &quot;SUPER SILA FOREVER&quot; от Вольница
          </a>
          <a href="https://sabatovsky.com/after">
            &quot;After Effects от новичка до специалиста&quot; от Сабатовского
          </a>
          <a href="https://www.profileschool.ru/category/video/course_adobe_after_effects_base">
            &quot;After Effects базового уровня&quot; от Никиты Чеснокова
          </a>
        </FlexibleLinks>
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
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "var(--accent)",
                }}
              >
                Монтажные кодеки
              </div>
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
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "var(--accent)",
                }}
              >
                Не монтажные (delivery) кодеки
              </div>
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
            или <mark className="word">медуза</mark> - функция{" "}
            <mark className="ui">Shy</mark>. Если у слоя помечен такой аттрибут, то такие
            слои можно легко скрыть на таймлайне, при этом такие слои будут видимыми в
            предпросмотре композиции.
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
                REG-патч
              </a>{" "}
              (Windows) или ввели нужные команды для их активации в терминале (macOS).
            </AdditionInfo>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш или же горячих клавиш для работы в After Effects?">
        <p>
          Горячие клавиши могут помочь ускорить ваш рутинный процесс нахождения нужной
          функции программы, поэтому ниже приведены популярные у многих пользователей
          комбинации.
        </p>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Отображение свойств слоя
          </div>
          <li>
            <mark className="key">E</mark>: раскрыть добавленные эффекты у выделенного
            слоя.
          </li>
          <li>
            Дважды <mark className="key">E</mark>: раскрыть параметры у выделенного слоя с
            применёнными выражениями.
          </li>
          <li>
            <mark className="key">L</mark>: раскрыть параметр громкости у выделенного слоя
            с аудиодорожкой.
          </li>
          <li>
            Дважды <mark className="key">L</mark>: раскрыть звуковую волну у выделенного
            слоя с аудиодорожкой.
          </li>
          <li>
            <mark className="key">A</mark>: раскрыть положение якорной точки у выделенного
            слоя.
          </li>
          <li>
            <mark className="key">M</mark>: раскрыть список масок у выделенного слоя, если
            они созданы.
          </li>
          <li>
            <mark className="key">P</mark>: раскрыть положение объекта у выделенного слоя.
          </li>
          <li>
            <mark className="key">R</mark>: раскрыть поворот объекта у выделенного слоя.
          </li>
          <li>
            <mark className="key">S</mark>: раскрыть масштаб объекта у выделенного слоя.
          </li>
          <li>
            <mark className="key">T</mark>: раскрыть процент прозрачности у выделенного
            слоя.
          </li>
          <li>
            <mark className="key">U</mark>: раскрыть аттрибуты с ключевыми кадрами у
            выделенного слоя.
          </li>
          <li>
            Дважды <mark className="key">U</mark>: раскрыть изменённые аттрибуты эффектов
            без анимации и аттрибуты с ключевыми кадрами у выделенного слоя.
          </li>
          <li>
            Модификатор <mark className="key">Shift</mark> вместе с вышеуказанными
            комбинациями: раскрыть нужное свойство, не скрывая предыдущее.
            <AdditionInfo>
              Например, нажав на <mark className="key">S</mark>,{" "}
              <mark className="key">Shift + P</mark> и{" "}
              <mark className="key">Shift + R</mark> на выделенном слое, то у вас
              отобразится одновременно свойство масштаба, положения и поворота. Это будет
              работать если хотя бы одно свойство будет открыто.
            </AdditionInfo>
          </li>
          <li>
            Модификатор <mark className="key">Alt + Shift</mark> вместе с вышеуказанными
            комбинациями: добавление ключевого кадра для нужного свойства.
            <AdditionInfo>
              Например, нажав на <mark className="key">Alt + Shift + P</mark> вы добавите
              кейфрейм для аттрибута положения.
            </AdditionInfo>
          </li>
        </ul>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Выбор инструментов
          </div>
          <li>
            <mark className="key">V</mark>: инструмент выделения объектов, стандартный
            инструмент при открытии программы.
          </li>
          <li>
            <mark className="key">H</mark> или зажать <mark className="key">Space</mark>:
            инструмент руки, позволяет перемещать мышкой таймлайн и предпросмотр, а также
            некоторые элементы интерфейса.
          </li>
          <li>
            <mark className="key">G</mark>: инструмент пера, позволяющий рисовать фигуру
            или маску.
            <AdditionInfo>
              Если выделен не шейповый слой, то инструмент будет рисовать маску. Если
              выделен шейповый слой - будет рисовать фигуру, изменить поведение на
              рисование маски можно в верхней панели.
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">Ctrl + T</mark>: инструмент создания и редактирования
            текста.
          </li>
          <li>
            <mark className="key">Y</mark>: инструмент для выбора положения якорной точки.
          </li>
          <li>
            <mark className="key">Z</mark>: инструмент лупы, позволяющий увеличить
            предпросмотр по нажатию или выделению области мышкой.
            <AdditionInfo>
              С модификатором <mark className="key">Alt</mark> будет выполняться
              уменьшение предпросмотра.
            </AdditionInfo>
          </li>
        </ul>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Работа с ключевыми кадрами на таймлайне
          </div>
          <li>
            <mark className="key">Shift + F2</mark> или{" "}
            <mark className="key">Ctrl + Alt + Shift + A</mark>: убрать выделение у
            ключевых кадров и их параметров, но не у слоя.
          </li>
          <li>
            <mark className="key">Shift + F3</mark>: открыть{" "}
            <mark className="ui">Graph Editor</mark> для редактирования графиков скорости.
          </li>
          <li>
            <mark className="key">J</mark>: переместить плейхед к ближайшему ключевому
            кадру слева.
          </li>
          <li>
            <mark className="key">K</mark>: переместить плейхед к ближайшему ключевому
            кадру справа.
          </li>
          <li>
            <mark className="key">F9</mark>: задать выделенным ключевым кадрам
            интерполяцию вида <mark className="word">Easy Ease</mark>.
          </li>
          <li>
            <mark className="key">Shift + F9</mark>: задать выделенным ключевым кадрам
            интерполяцию вида <mark className="word">Easy Ease In</mark>.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + F9</mark>: задать выделенным ключевым
            кадрам интерполяцию вида <mark className="word">Easy Ease Out</mark>.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + H</mark>: задать выделенным ключевым кадрам
            интерполяцию вида <mark className="word">Hold</mark>.
          </li>
          <li>
            <mark className="key">Alt + стрелка влево</mark>: переместить выделенные
            ключевые кадры на один кадр левее.
          </li>
          <li>
            <mark className="key">Alt + стрелка вправо</mark>: переместить выделенные
            ключевые кадры на один кадр правее.
          </li>
          <li>
            <mark className="key">Alt + Shift + стрелка влево</mark>: переместить
            выделенные ключевые кадры на десять кадров левее.
          </li>
          <li>
            <mark className="key">Alt + Shift + стрелка вправо</mark>: переместить
            выделенные ключевые кадры на десять кадров правее.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + K</mark>: открыть диалог{" "}
            <mark className="ui">Keyframe Interpolation</mark> для изменения интерполяции
            выделенных ключевых кадров.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + K</mark>: открыть диалог{" "}
            <mark className="ui">Keyframe Velocity</mark> для изменения скорости
            выделенных ключевых кадров.
          </li>
        </ul>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Работа с слоями на таймлайне
          </div>
          <li>
            <mark className="key">I</mark>: перенести плейхед к началу выделенного слоя.
          </li>
          <li>
            <mark className="key">O</mark>: перенести плейхед к концу выделенного слоя.
          </li>
          <li>
            <mark className="key">Ctrl + A</mark>: выделить все слои.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + A</mark> или{" "}
            <mark className="key">F2</mark>: убрать выделение со всех слоёв.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + C</mark>: создать прекомпозицию из
            выделенных слоёв.
          </li>
          <li>
            <mark className="key">Ctrl + D</mark>: создать дубликат слоя или ссылку на
            композицию.
            <AdditionWarning>
              Дублируя копии композиции на таймлайне, вы не сделаете их независимыми.
              Дублируйте нужные композиции в окне <mark className="ui">Project</mark>.
            </AdditionWarning>
          </li>
          <li>
            <mark className="key">Ctrl + Shift + D</mark>: разделить выделенный слой на
            две части, выделение останется у правой части слоя, которая пойдёт по иерархии
            наверх.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + T</mark> или{" "}
            <mark className="key">F3</mark>: открыть или скрыть панель{" "}
            <mark className="ui">Effect Controls</mark> для выделенного слоя.
          </li>
          <li>
            <mark className="key">Ctrl + Home</mark>: расположить слой в центр композиции.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Home</mark>: установить якорную точку по
            центру слоя.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Shift + G</mark>: растянуть слой и
            подогнать его положение по под высоту композиции.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Shift + H</mark>: растянуть слой и
            подогнать его положение по под ширину композиции.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + T</mark>: включить{" "}
            <mark className="ui">Time-Remap</mark> у выделенного слоя.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + R</mark>: выполнить команду{" "}
            <mark className="ui">Time-Reverse Layer</mark> для выделенного слоя.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + Y</mark>: открыть настройки выделенного
            слоя для изменения некоторых параметров. Работает для{" "}
            <mark className="ui">Null Object</mark>,{" "}
            <mark className="ui">Light Layer</mark>,{" "}
            <mark className="ui">Solid Layer</mark> и{" "}
            <mark className="ui">Adjustment Layer</mark>.
          </li>
          <li>
            <mark className="key">[</mark>: передвинуть слой к плейхеду справа.
          </li>
          <li>
            <mark className="key">]</mark>: передвинуть слой к плейхеду слева.
          </li>
          <li>
            <mark className="key">Alt + [</mark>: обрезать или продлить слой от плейхеда.
          </li>
          <li>
            <mark className="key">Alt + ]</mark>: обрезать или продлить слой до плейхеда.
          </li>
          <li>
            <mark className="key">Ctrl + [</mark>: опустить слой ниже по иерархии на
            таймлайне.
          </li>
          <li>
            <mark className="key">Ctrl + ]</mark>: поднять слой выше по иерархии на
            таймлайне.
          </li>
          <li>
            <mark className="key">Shift и +</mark> или{" "}
            <mark className="key">Shift и -</mark>: изменить режим наложения слоя.
          </li>
        </ul>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Создание слоёв
          </div>
          <li>
            <mark className="key">Ctrl + Y</mark>: создать{" "}
            <mark className="ui">Solid Layer</mark>.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Y</mark>: создать{" "}
            <mark className="ui">Adjustment Layer</mark>.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Shift + Y</mark>: создать{" "}
            <mark className="ui">Null Object</mark>.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Shift + T</mark>: создание пустого
            текстового слоя.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Shift + C</mark>: создать камеру.
          </li>
          <li>
            <mark className="key">Ctrl + Alt + Shift + L</mark>: создать источник света.
          </li>
        </ul>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Работа с таймлайном и композицией
          </div>
          <li>
            <mark className="key">B</mark>: установить начало рабочей области для
            предпросмотра.
          </li>
          <li>
            <mark className="key">N</mark>: установить конец рабочей области для
            предпросмотра.
          </li>
          <li>
            <mark className="key">Ctrl + K</mark>: открыть настройки композиции. В нём вы
            можете изменить FPS, разрешение, длину композиции и другие параметры.
          </li>
          <li>
            <mark className="key">Ctrl + R</mark>: включить отображение линейки.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + X</mark>: обрезать композицию до начала и
            конца рабочей области.
          </li>
          <li>
            <mark className="key">+</mark> или <mark className="key">-</mark>: увеличить
            или уменьшить размер таймлайна.
          </li>
          <li>
            <mark className="key">* (Num)</mark>: поставить маркер на таймлайне в месте,
            где стоит временная метка.
            <AdditionInfo>
              Если у вас клавиатура без цифрового блока справа, то вы можете переназначить
              эту клавишу на любую другую в{" "}
              <mark className="ui">Edit + Keyboard Shortcuts</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">Page Up</mark>: передвинуть плейхед к предыдущему кадру.
          </li>
          <li>
            <mark className="key">Page Down</mark>: передвинуть плейхед к следующему
            кадру.
          </li>
        </ul>
        <ul>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Работа с окном предпросмотра
          </div>
          <li>
            <mark className="key">Ctrl + Shift + H</mark>: отображение границы и выделение
            слоёв, контролёров и путей движения объектов. Более эффективен с включенным{" "}
            <mark className="ui">Toggle Mask and Shape Path Visibility</mark>.
            <AdditionInfo>
              Убрать или добавить отображение определённых типов слоёв можно в View
              Options, которое можно вызвать с помощью{" "}
              <mark className="key">Ctrl + Alt + U</mark>. Следы от движения объектов
              можно сократить или удлинить в{" "}
              <mark className="ui">Edit &gt; Preferences &gt; Display</mark>
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">Ctrl + &apos;</mark>: включить отображение сетки.
            <AdditionInfo>
              Цвет и размер сетки можно настроить в{" "}
              <mark className="ui">Edit &gt; Preferences &gt; Grid & Guides</mark>.
            </AdditionInfo>
          </li>
          <li>
            <mark className="key">Ctrl + ;</mark>: включить отображение направляющих.
          </li>
          <li>
            <mark className="key">Ctrl + Shift + ;</mark>: включить привязку объектов к
            направляющим.
          </li>
          <li>
            <mark className="key">&apos;</mark>: включить отображение сетки безопасных зон
            для телевидения.
          </li>
          <li>
            <mark className="key">,</mark> и <mark className="key">.</mark>: увеличение
            или уменьшение масштаба предпросмотра.
          </li>
          <li>
            <mark className="key">Пробел</mark>: начать воспроизведение предпросмотра.
            <AdditionInfo>
              При установленных параметрах{" "}
              <mark className="ui">Cache Before Playback</mark> и{" "}
              <mark className="ui">If Caching, play cached frames</mark> в окне{" "}
              <mark className="ui">Preview</mark> после нажатия на{" "}
              <mark className="key">Пробел</mark> начнётся кэширование предпросмотра
              композиции. Чтобы его прервать и начать воспроизведение предпросмотра
              принудительно, нажмите на <mark className="key">Пробел</mark> ещё раз.
            </AdditionInfo>
          </li>
        </ul>
        <ul>
          {" "}
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "var(--accent)",
            }}
          >
            Работа с файлами в проекте
          </div>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
          <li>
            <mark className="key"></mark>
          </li>
        </ul>
        {/* todo: дополнить комбинации по возможности */}
      </DetailsSummary>
      <DetailsSummary title="Где я могу узнать об нововведениях в обновлениях After Effects?">
        <p>
          Обычно на сайте Adobe в день выхода публичной стабильной версии выкладываются
          основные нововведения. Это сделано для того, чтобы каждый прохожий не спрашивал
          из каждого угла <mark>&quot;А что обновилось то?&quot;</mark>. Ещё время от
          времени Adobe выкладывает на сайт список выявленных неполадок и старается
          приложить к ним временное решение.
        </p>
        <FlexibleLinks>
          <a href="https://helpx.adobe.com/ru/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </FlexibleLinks>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">After Effects</mark>, а также сторонние плагины, чтобы
          исключить возможные проблемы при дальнейшем использовании программы. Многие баги
          из старых версий уже исправлены, например утечка ОЗУ или смещение кадра при
          экспорте.
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
                строке Windows.
              </p>
              <AdditionWarning>
                Через <mark className="app">PowerShell</mark> эта команда не будет
                работать, используйте <mark className="app">cmd</mark>.
              </AdditionWarning>
              <code>
                echo.{">"}&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
              </code>
              <AdditionWarning>
                Альтернативный способ ниже работает только с версиями программы 24.x и
                новее, зато универсален для обеих систем.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                caption="Включение вида Debug Database View"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">After Effects</mark>.
              </p>
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                caption="Установка английского языка в консоли"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
              <AdditionDanger>
                После таких способов смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановите программу сразу на русский язык.
              </AdditionDanger>
            </div>
          }
          macContent={
            <div>
              <AdditionWarning>
                Приведённый ниже способ работает только с версиями программы 24.x и новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                caption="Включение вида Debug Database View"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">After Effects</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                caption="Установка английского языка в консоли"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
              <AdditionDanger>
                После таких способов смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановите программу сразу на русский язык.
              </AdditionDanger>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="В каком случае нужно использовать After Effects, а в каком - Premiere Pro?">
        <p>
          Начнём сразу с того, что эти две программы используются для совершенно разных
          целей. В <mark className="app">After Effects</mark> конечно можно смонтировать
          двухчасовой ролик, а в <mark className="app">Premiere Pro</mark> - сделать всю
          работу по композингу... Но это всё звучит как полнейший бред до такой степени,
          что некоторые пользователи до сих пор почему-то используют программы не для
          того, для чего они созданы.
        </p>
        <p>
          Давайте разъясним, для чего нужно использовать{" "}
          <mark className="app">After Effects</mark>, а для чего{" "}
          <mark className="app">Premiere Pro</mark>:
        </p>
        <ul>
          <li>
            В <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Premiere Pro</mark> можно делать короткие видеоролики до
            одной минуты, а также вешать на них различные эффекты. Обе программы отлично
            подойдут для создания &quot;рилсов&quot; и &quot;тиктоков&quot;, а также
            создания различных анонсов, анимированных афиш, баннеров и коротких
            &quot;эдитов&quot;.
          </li>
          <li>
            В <mark className="app">Premiere Pro</mark> можно создавать видеоролики с
            использованием моушен-дизайна с нуля, но работа с анимацией в этой программе
            реализована настолько неудобно, что уж проще сделать моушен-дизайн в{" "}
            <mark className="app">After Effects</mark>, а затем вывести оттуда композиции
            и импортировать их в <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            <mark className="app">After Effects</mark> - программа не для создания очень
            длинных видеороликов, так как работает с памятью и исходниками совершенно по
            другому, в отличие от <mark className="app">Premiere Pro</mark>. Даже если вы
            и выполните всю работу по созданию длинного видеоролика в{" "}
            <mark className="app">After Effects</mark> (представлю, сколько нервов уйдет
            из-за <mark>Out of Memory</mark>), то время и скорость рендера вас явно не
            впечатлит. Лучше соберите проект изначально в{" "}
            <mark className="app">Premiere Pro</mark> и выдёргивайте только нужные кусочки
            для дальнейшего редактирования в <mark className="app">After Effects</mark>{" "}
            или создавайте короткие композиции и выводите их частями, а потом склеивайте
            их в <mark className="app">Premiere Pro</mark>.
            <AdditionDanger>
              В <mark className="app">After Effects</mark> можно делать композиции длиной
              максимум до трёх часов, но крайне не рекомендуется делать их с такой длиной.
            </AdditionDanger>
          </li>
          <li>
            <mark className="app">After Effects</mark> не годится для обработки звука и
            голоса, несмотря на наличие нескольких встроенных эффектов, например{" "}
            <mark className="plugin">Echo</mark> или
            <mark className="plugin">Reverb</mark>. Для этого хорошо подходит{" "}
            <mark className="app">Premiere Pro</mark> или{" "}
            <mark className="app">Audition</mark> за счёт удобной работы с несколькими
            аудиодорожками и поддержкой VST-плагинов.
          </li>
          <li>
            В <mark className="app">Premiere Pro</mark> можно и нужно делать длинные
            видеоролики, например подкасты, фильмы, короткометражки или сериалы. Если вы
            хотите использовать <mark className="app">After Effects</mark> в длинном видео
            - импортируйте кусочек вашего видео, например с помощью{" "}
            <mark className="ui">Replace with After Effects Composition</mark> и после
            редактирования экспортируйте оттуда композиции в монтажный кодек, например в{" "}
            <mark className="file">Apple Prores 4444</mark>. Затем замените нужный кусок
            на то, что вы экспортировали из <mark className="app">After Effects</mark> и
            продолжайте работу дальше в <mark className="app">Premiere Pro</mark>.
            <AdditionWarning>
              Не рекомендуется частое использование функции <mark>Dynamic Link</mark>, так
              как на больших проектах его работа может быть крайне нестабильна и может
              вызывать проблемы при финальном экспорте.
            </AdditionWarning>
          </li>
          <li>
            <mark className="app">Premiere Pro</mark> не очень подходит для композитинга и
            создания эффектов уровня фильмов от Marvel.{" "}
            <mark className="app">After Effects</mark> лучше подходит для редактирования
            сложных сцен и применения различных спецэффектов, так как он даёт гораздо
            больший простор воорбражению для создания 3D-сцен и поддерживает больше
            сторонних эффектов и плагинов для генерации эффектов с нуля, например{" "}
            <mark className="plugin">Trapcode Particular</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Как очистить кэш предпросмотра и зачем это надо делать?">
        <p>
          Очистка кэша предпросмотра помогает избавиться от случаев, когда возникают
          непонятные артефакты и нежелательные кадры в предпросмотре. Также очистив кэш вы
          освобождаете оперативную память. После очистки кэша предпросмотр нужно
          закэшировать заново.
        </p>
        <p>
          Чтобы быстро очистить кэш предпросмотра, перейдите в{" "}
          <mark className="ui">Edit &gt; Purge &gt; All Memory & Disk Cache</mark>. По
          желанию вы можете создать свою комбинацию клавиш для быстрой очистки оперативной
          памяти и дискового кэша в{" "}
          <mark className="ui">Edit &gt; Keyboard Shortcuts</mark>, по умолчанию в{" "}
          <mark className="app">After Effects</mark> предусмотрена только комбинация для
          очистки оперативной памяти: <mark className="key">Ctrl + Alt + / (Num)</mark>.
        </p>
        <AdditionInfo>
          Если у вас достаточно много оперативной памяти на вашем устройстве, то вы можете
          отключить дисковый кэш в настройках программы. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark> и
          уберите галочку с пункта <mark className="ui">Enable Disk Cache</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Почему предпросмотр проигрывается в хреновом качестве, в пикселях?">
        <p>
          Скорее всего вы забыли переключить качество предпросомтра в окне{" "}
          <mark className="ui">Preview</mark>. Для изменения качества выставьте значение{" "}
          <mark className="ui">Resolution</mark> на <mark className="ui">Full</mark> или
          на удобное вам значение.
        </p>
        <AdditionInfo>
          Если в <mark className="ui">Resolution</mark> стоит значение{" "}
          <mark className="ui">Auto</mark>, то предпросмотр будет проигрываться в том
          разрешении, которое вы указали там, где отображается ваша композиция.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_resolution_preview.png"
          imgTitle="Изменение предпросмотра в окне Preview"
          caption="Preview"
        />
        <p>
          Ещё проверьте разрешение в окне <mark className="ui">Composition</mark>. Список
          с выбором разрешения предпросмотра отображается в нижней границе окна.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_resolution_comppreview.mp4"
          caption="After Effects"
        />
        <p>
          А вообще, часто бывают случаи, когда пользователь сам устанавливает в настройках
          композиции низкое разрешение, например <mark>256x128</mark>, а потом удивляется,
          почему он видит пиксели, особенно когда пытается увеличить предпросмотр более,
          чем на 100%.
        </p>
        <p>
          Есть ещё отдельная категория лиц, которая считает, что{" "}
          <mark className="app">After Effects</mark> имеет возможность отображения
          предпросмотра с функцией увеличения без потери качества, как в{" "}
          <mark className="app">Adobe Illustrator</mark>. Спешу огорчить,{" "}
          <mark className="app">After Effects</mark> не работает так и не может отобразить
          больше пикселей, чем то, что указано в настройках композиции.
        </p>
        <AdditionInfo>
          Исключение, где вы можете увеличить предпросмотр без потери качества больше чем
          на 100% является функция <mark className="plugin">Draft 3D</mark> с включенной
          опцией <mark className="ui">Extented Preview</mark>. Работать будет только
          тогда, когда у вас есть векторные слои или 3D-модели. При экспорте вы получите
          файл с разрешением, указанная в настройках композиции.
        </AdditionInfo>
        <p>
          Если вы импортировали векторный файл, например <mark className="file">.ai</mark>{" "}
          из <mark className="app">Adobe Illustrator</mark>, то вам нужно включить{" "}
          <mark className="ui">Continuously Rasterize</mark>. Это позволит программе при
          любом взаимодействии с слоем уменьшить эффект пикселизации за счёт того, что
          программа будет каждый раз растрировать этот слой до нужного разрешения.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/enable_continuously_rasterize.png"
          imgTitle="Включаем Continuously Rasterize"
          caption="Timeline"
        />
        <AdditionWarning>
          При включенной опции <mark className="ui">Continuously Rasterize</mark> могут
          быть побочные явления, например разрывы слоя при использовании{" "}
          <mark className="plugin">Puppet Tool</mark>.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Почему у меня предпросмотр проигрывается ускоренно или замедленно?">
        <p>
          Проверьте окно <mark className="ui">Preview</mark>. Вполне вероятно, что вы
          установили там значение FPS, отличное от того, что у вас установлено в
          композиции. Для этого откройте окно Preview с помощью{" "}
          <mark className="ui">Window &gt; Preview</mark> и укажите в FPS значение{" "}
          <mark className="ui">Auto</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_preview_fps.png"
          imgTitle="Изменение предпросмотра в окне Preview"
          caption="Preview"
        />
      </DetailsSummary>
      <DetailsSummary title='У меня график скорости отличается от того, что у туториала. Как мне сделать "нормальный вид" графика?'>
        <p>
          Вы пытаетесь отредактировать график скорости в виде отличный от того, который вы
          привыкли видеть. Измените вид на <mark className="ui">Value Graph</mark> или на{" "}
          <mark className="ui">Speed Graph</mark>, в зависимости от того, что вам нужно.
          Для этого откройте <mark className="ui">Graph Editor</mark> с помощью комбинации
          клавиш <mark className="key">Shift + F3</mark> или соответствующей кнопки на
          таймлайне, открыть контекстное меню и выбрать то, что нам нужно.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_graph_view.mp4"
          caption="Изменение вида графика скорости"
        />
      </DetailsSummary>
      <DetailsSummary title='Почему я не могу изменить график скорости с помощью "усиков"?'>
        <p>
          Вы пытаетесь отредактировать график значения у аттрибута, имеющий более одного
          значения в массиве, например <mark className="ui">Position</mark> или{" "}
          <mark className="ui">Anchor Point</mark>. В таком случае в режиме графика{" "}
          <mark className="ui">Value Graph</mark> вы не можете отредактировать скорость.
          Вам нужно либо разделить значения через{" "}
          <mark className="ui">Separate Dimensions</mark>, если это возможно, либо
          переключиться на вид графика скорости <mark className="ui">Speed Graph</mark>.
        </p>
        <p>
          Для того, чтобы разделить значения, например положения, вам нужно нажать правой
          кнопкой мыши по аттрибуту и нажать на{" "}
          <mark className="ui">Separate Dimensions</mark>. Если разделить значения не
          получается, то вам нужно переключиться на другой вид графика.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/separate_dimensions.mp4"
          caption="Разделение аттрибутов положения на X и Y"
        />
        <p>
          Для того, чтобы изменить вид графика с <mark className="ui">Value Graph</mark>{" "}
          на <mark className="ui">Speed Graph</mark>, вам нужно открыть{" "}
          <mark className="ui">Graph Editor</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Shift + F3</mark> или соответствующей кнопки на таймлайне,
          открыть контекстное меню и выбрать то, что нам нужно.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/change_graph_view.mp4"
          caption="Изменение вида графика скорости"
        />
      </DetailsSummary>
      <DetailsSummary title="Что такое Null Object и как с ним работать?">
        <p>
          <mark>Нулевой слой</mark> или же <mark>Null Object</mark> - это невидимый
          манипулятор для объектов, слоёв или параметров эффекта. Он часто применяется для
          создания &quot;рига&quot;, то есть для создания зависимости между управляющими и
          управляемыми элементами.
        </p>
        <p>
          К нулевому объекту можно прилинковать сразу несколько слоёв, например, для их
          вращения по определённой оси. Для этого можно воспользоваться лассо в столбце{" "}
          <mark className="ui">Parent & Link</mark>.
        </p>
        <AdditionInfo>
          Если вы скрыли отображение столбца на таймлайне, нажмите{" "}
          <mark className="key">F4</mark> или <mark className="key">ПКМ</mark> по
          столбцам, и выбрать <mark className="ui">Columns &gt; Parent & Link</mark>.
        </AdditionInfo>
        <YouTubeVideo
          link="8ei_cj6A2Gg"
          caption="Тебе НУЖНО использовать нулевые слои в After Effects"
        />
      </DetailsSummary>
      <DetailsSummary title="Что такое Adjustment Layer и для чего он нужен?">
        <p>
          <mark>Корректирующий слой</mark> или же <mark>Adjustment Layer</mark> - довольно
          мощный инструмент. С помощью него можно сделать цветокоррекцию, заставить
          трястись весь экран или просто добавить искажения от линзы.
        </p>
        <YouTubeVideo
          link="rgMKGFWWqjA"
          caption="Используем корректирующие слои в After Effects"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему у меня отсутствует звук в предпросмотре?">
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Audio Hardware</mark> и указать
          в пункте <mark className="ui">Default Output</mark> нужный вам аудиовыход.
        </p>
        <p>
          Если вы проигрываете видео не в реальном времени и звук отсутствует (даже если
          он вам и нужен запинающийся и растянутый), то возможно вы в настройках{" "}
          <mark className="app">After Effects</mark> включили галочку{" "}
          <mark className="ui">Mute Audio When Preview Is Not Real-time</mark> в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Previews</mark>.
        </p>
        <p>
          Если советы выше не помогли - проверьте окно <mark className="ui">Preview</mark>
          , включен ли там вывод звука? Если нет, то включите и проиграйте предпросмотр
          снова.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/toggle_audio_preview.png"
          imgTitle="Включение звука в окне Preview"
          caption="Preview"
        />
      </DetailsSummary>
      <DetailsSummary title="Применяю эффект, например Glow, но он обрезается. Как расширить действие эффекта?">
        <p>{/* fixme: написать!! ПЕРЕМЕСТИТЬ В ДРУГОЙ ПУНКТ */}</p>
      </DetailsSummary>
      <DetailsSummary title="Не могу изменить параметры наложения у 3D-слоёв. Что делать?">
        <p>
          Скорее всего у вас включен режим <mark className="plugin">Advanced 3D</mark> или{" "}
          <mark className="plugin">Cinema 4D</mark>, а там не поддерживаются режимы
          наложения, как вы бы ни хотели их применить. Для возвращения функции режимов
          наложения - верните движок рендера на <mark className="plugin">Classic 3D</mark>
          .
        </p>
        <p>
          Для возвращения классического движка рендера - нужно открыть настройки проекта с
          помощью комбинации клавиш <mark className="key">Ctrl + Alt + Shift + K</mark>,
          перейти в вкладку <mark className="ui">3D Renderer</mark> и установить там{" "}
          <mark className="plugin">Classic 3D</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_3d_renderer.png"
          imgTitle="Изменяем движок для рендера 3D-слоёв"
          caption="Composition Settings"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему не исчезает фон при использовании режимов наложения?">
        <p>
          Убедитесь в том, что по иерархии слой, на котором вы хотите применить режим
          наложения - находится выше, чем слои с фоном или остальными объектами. Режимы
          наложения не будут работать, если под слоем, на котором вы выбрали режим
          наложения, ничего не находится.
        </p>
        <p>
          Если вы хотите убрать фон из слоя - воспользуйтесь{" "}
          <mark className="plugin">Extract</mark> или{" "}
          <mark className="plugin">uni.unmult</mark> из пакета плагинов{" "}
          <mark className="plugin">Red Giant Universe</mark>.
        </p>
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
          <sup>*</sup>Чтобы скачать скрипт - зарегистрируйтесь на сайте{" "}
          <a href="https://aescripts.com">aescripts</a>, вернитесь на страницу с плагином,
          установите цену 0 в <mark className="ui">Name Your Own Price</mark>, добавьте
          его в корзину и подтвердите заказ. Нужный плагин появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>{" "}
          и вы можете его скачать абсолютно бесплатно.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Переместил слой из одной композиции в другую, но оно ушло за пределы моей композиции. Как его вернуть на своё место?">
        <p>
          Чтобы вернуть слой на место после временной метки, нажмите на{" "}
          <mark className="key">[</mark>. Если нужно расположить слой до временной метки -
          нажмите на <mark className="key">]</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Почему первый кадр в композиции начинается не с нулевой секунды?">
        <p>
          Скорее всего вы при создании прекомпозиции указали галочку в пункте{" "}
          <mark className="ui">
            Adjust composition duration to the time span of the selected layers
          </mark>
          . Данная опция делает отсчёт кадров с времени начала самого раннего слоя в
          родительской композиции. То есть, если вы выделили три слоя, первый из них
          начинающийся на второй секунде, а последний на седьмой. А родительская
          композиция длится 10 секунд. Соответственно новая композиция начнёт отсчёт в
          первом кадре со второй секунды.
        </p>
        <p>
          Для установки верного стартового таймкода вам нужно открыть настройки композиции
          с помощью комбинации клавиш <mark className="key">Ctrl + K</mark> и в поле{" "}
          <mark className="ui">Start Timecode</mark> указать нужное значение, например{" "}
          <mark>00:00:00:00</mark>, чтобы отсчёт вёлся с нуля.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="/images/aftereffects/change_start_timecode.mp4"
          caption="Composition Settings"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему точки для того чтобы прицепить объект не отображаются в 3D Camera Tracker?">
        <p>
          Вы скрыли отображение границ слоёв и их манипуляторов в окне предпросмотра. Для
          того чтобы их вернуть, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + H</mark> или нажмите на соответствующую
          иконку в окне предпросмотра и продолжайте работу.
        </p>
        <AdditionInfo>
          Точки будут отображаться если выделен сам эффект{" "}
          <mark className="plugin">3D Camera Tracker</mark>
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/view_layer_bounds.png"
          imgTitle="Включение отображение границ масок и слоёв"
          caption="Composition"
        />
        <p>
          Если вам нужно принудительно отобразить точки трекинга, то включите функцию{" "}
          <mark className="ui">Render Track Points</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/render_track_points.png"
          imgTitle="Включение точек трекинга"
          caption="Effects Controls"
        />
      </DetailsSummary>
      <DetailsSummary title="Почему не все параметры выравнивания текста доступны в окне Paragraph?">
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
          <mark className="ui">Paragraph Text</mark>, предварительно выбрав инструмент
          Text.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc={"/images/aftereffects/convert_to_paragraph_text.mp4"}
          caption="Конвертация текстового слоя в Paragraph Text"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем отличается однонодовая камера от двунодовой?">
        <p>
          При создании камеры в <mark className="app">After Effects</mark> можно
          наткнуться на настройку типа камеры: <mark>One-Node</mark> и{" "}
          <mark>Two-Node</mark>. Да, они действительно отличаются в плане способов
          перемещения и поворота камеры.
        </p>
        <ul>
          <li>
            <mark>One-Node</mark> работает как физическая камера, которая перемещается
            независимо от выбранной точки.
          </li>
          <li>
            <mark>Two-Node</mark> смотрит на заданную точку и сама камера будет
            поворачивать в сторону <mark>Point of Interest</mark>. Данный тип камер
            полезен для создания параллакс-эффекта.
          </li>
        </ul>
        <YouTubeVideo
          link="zgMHWFolli8"
          caption="Техники с 3D камерами в After Effects"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем отличается Mocha AE от Mocha Pro?">
        <p>
          В стандартную поставку <mark className="app">After Effects</mark> входит
          встроенный плагин для трекинга различных объектов{" "}
          <mark className="plugin">Mocha AE</mark>. Но у него функционал, по сравнению с
          Pro-версией, несколько урезан.
        </p>
        <p>
          В встроенной <mark className="plugin">Mocha AE</mark> вы не сможете
          стабилизировать видео, делать клин-ап (удалять объекты), использовать магнитное
          лассо и прочее. <mark className="plugin">Mocha Pro</mark> же лишена этих
          ограничений, а также можно вставить в <mark className="app">Premiere Pro</mark>{" "}
          и другие программы.
        </p>
        <AdditionInfo>
          Подробнее о различиях между этими версиями вы можете прочитать на{" "}
          <a href="https://support.borisfx.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
            официальном сайте BorisFX
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Что за решётка у слоя на таймлайне и для чего нужен Guides Layer?">
        <p>
          <mark>Guide Layer</mark> - это как слой-комментарий, который виден только в
          предпросмотре и не будет рендериться при финальном экспорте. Его можно
          использовать для технических оверлеев, например для отображения границ
          перекрытий интерфейса TikTok, YouTube Shorts или для послания другому монтажёру,
          чтобы он исправил что-то в дальнейшем.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/guide_layer_example.png"
          imgTitle="Пример использования Guide Layer"
          caption="Timeline"
        />
        <p>
          <mark>Guide Layer</mark> можно включить как для текстовых слоёв, так и для
          композиций, изображений или видео.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Делал проект, но я его изначально не сохранял. Вдруг After Effects вылетел. Возможно ли восстановить проект?">
        <p>
          Нет, примите мои соболезнования. В следующий раз перед началом работы - сразу
          сохраняйте файл проекта и периодически прожимайте{" "}
          <mark className="key">Ctrl + S</mark>.
        </p>
        <p>
          <mark className="app">After Effects</mark> не создаёт авто-сохранения или
          какие-нибудь файлы проекта, если изначально проект не был сохранён.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Почему After Effects иногда сам меняет начертание шрифта?">
        <p>
          Предположим, что вы решили написать какой-нибудь текст определённым шрифтом. Но
          вот незадача, шрифт при написании какого-то хрена меняется. Если вы уверены, что
          с шрифтом всё в порядке (например в <mark className="app">Photoshop</mark> всё
          работает отлично), то скорее всего вы столкнулись с редким багом, который может
          встретиться на абсолютно любой версии <mark className="app">After Effects</mark>
          . К сожалению, не все шрифты, прекрасно работающие в{" "}
          <mark className="app">Photoshop</mark> и{" "}
          <mark className="app">Illustrator</mark> будут прекрасно работать и в{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <p>
          Суть бага заключается в том, что при смене начертания шрифта,{" "}
          <mark className="app">After Effects</mark> почему-то оставляет на некоторых
          буквах предыдущий вариант шрифта. Или просто сбрасывает стиль до{" "}
          <mark className="app">Times New Roman</mark>. Также такой багованный шрифт не
          реагирует на кнопки <mark className="ui">Bold</mark> и{" "}
          <mark className="ui">Italic</mark>.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="/images/aftereffects/font-reset_bug.mp4"
          caption="Проблема кривого начертания на примере Cascadia Mono"
        />
        <AdditionWarning>
          Приведённые ниже способы{" "}
          <u>
            <b>не являются панацеей</b>
          </u>{" "}
          для решения этой проблемы и позволяют лишь исключить часть проблем при
          использовании конкретного шрифта.
        </AdditionWarning>
        <ul>
          <li>
            Для попытки устранения проблемы попробуйте переконвертировать ваш шрифт в
            другой формат, например из <mark className="file">.ttf</mark> в{" "}
            <mark className="file">.otf</mark> или наоборот. Вполне возможно, что тот, кто
            опубликовал шрифт, срукожопил и файл оказался непригоден для использования в
            некоторых программах. Ну или просто скачайте нужный шрифт из другого
            источника, например <a href="https://fonts.google.com/">Google Fonts</a>.
          </li>
          <li>
            Если совет выше не помог, то попробуйте переключить рендер на процессор в{" "}
            <mark className="ui">Project Manager</mark> и почистить кэши программы в{" "}
            <mark className="ui">Edit &gt; Purge &gt; All Memory</mark>.
          </li>
          <li>
            Если ваш шрифт работает прекрасно, но при попытке написать что-то на кириллице
            - сбрасывается, то убедитесь в том, что шрифт действительно поддерживает
            кириллицу. Если шрифт не поддерживает кириллицу, то попробуйте найти на
            просторах интернета ваш шрифт с поддержкой кириллицы или договоритесь с
            заказчиком о смене шрифта в проекте, если это возможно.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Как сделать прозрачный фон у слоя с эффектом Saber?">
        <p>
          Для этого в настройках эффекта <mark className="plugin">Saber</mark> раскройте
          пункт <mark className="ui">Render Settings</mark>. В этом же подпункте найдите
          пункт <mark className="ui">Composite Settings</mark> и установите значение{" "}
          <mark className="ui">Transparent</mark>.
        </p>
        <ImageFigure
          imgSrc="images/aftereffects/transparent_saber.png"
          styleClass="figure_windows-dark"
          imgTitle="Включение прозрачности в Saber"
          caption="Включение прозрачности в Saber"
        />
        <p>
          Теперь слой с <mark className="plugin">Saber</mark> будет прозрачный и вы
          сможете применять его поверх своей композиции.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Применил Saber, но он обрезается в пределах слоя. Grow Bounds не помогает. Как расширить эффект?">
        <p>
          Это происходит из-за того, что эффект работает только в пределах размера слоя. А
          вы зачем-то применили этот эффект на слой, размер которого отличается от размера
          композиции.
        </p>
        <p>
          Вам нужно создать Solid и применить <mark className="plugin">Saber</mark> на
          него. А затем нужно синхронизировать маски: из слоя, из которого вы хотели
          изначально сделать обводку маской нужно прилинковать маску в Solid, на котором
          применён <mark className="plugin">Saber</mark> нужного размера.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/linking_masks_for_saber.png"
          imgTitle="Соединяем маски для Saber"
          caption="Timeline"
        />
      </DetailsSummary>
    </div>
  );
};
export default AEFromNewbies;
