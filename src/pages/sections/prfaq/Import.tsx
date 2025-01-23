import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {Divider} from "antd";
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";

const PRImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Import.tsx" />
      <DetailsSummary title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Почему у меня появляются различные артефакты при использовании исходников в кодеке H.264"
        tag="зелёный экран, зелень, дергается изображение, полосы, глитчи, артефакты, глюки, искажения"
      >
        <p>
          Скорее всего вы импортируете исходники, которые были загружены из интернета.
          Такое часто бывает при загрузке видео из YouTube и последующем импорте в
          программу. Подобные сервисы перекодируют видео непонятно во что и непонятно по
          каким алгоритмам, поэтому их не рекомендуется использовать в дальнейшей работе.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/h264_artifacts.webm"
          caption="Артефакты кривых исходников из просторов интернета"
        />
        <p>
          Чтобы с такими видео из интернета можно было спокойно работать - вам нужно
          перегнать ваши видео в удобоваримый кодек и формат для монтажа, например в{" "}
          <mark className="video">Apple Prores 422</mark>, а затем заменить их в проекте.
          Да, это нормальный процесс и желательно так делать каждый раз, когда скачиваете
          видео с сервисов, которые любят пережимать для себя, но не для монтажёров.
          Перекодировать видео можно с помощью программ{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Handbrake</mark> или{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/convert_to_prores_shutterencoder.png"
          imgTitle="Конвертируем в ProRes через Shutter Encoder"
          caption="Shutter Encoder"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Импортировал видео, а оно слишком засвеченное. Как исправить?"
        tag="пересвет, айфон, яркость, цветовое пространство, рек709"
      >
        <p>
          Скорее всего вы импортировали видео, записанное на iPhone или на камеру в
          цветовом пространстве HLG. Для решения цветовых проблем есть два способа.
        </p>
        <Divider>Включаем Auto Tone Map Media</Divider>
        <p>
          В <mark className="app">Premiere Pro</mark> версии 23.2 и выше появилась
          возможность активировать коррекцию цвета для исходников с большим цветовым
          диапазоном. Чтобы его включить - перейдите в настройки нужной секвенции через{" "}
          <mark className="ui">Sequence &gt; Sequence Settings</mark> и активируйте опцию{" "}
          <mark className="ui">Auto Tone Map Media</mark> в вкладке{" "}
          <mark className="ui">Color Management</mark>.
        </p>
        <AdditionInfo>
          При создании новых секвенций эта опция обычно включена по умолчанию.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/enable_auto_tone_map.png"
          imgTitle="Включение Auto Tone Map Media в настройках секвенции"
          caption="Sequence Settings"
        />
        <Divider>Перекодируем в другой цветовой профиль</Divider>
        <p>
          Или же, если результат от <mark className="ui">Auto Tone Map Media</mark> не
          устраивает или этот пункт не помогает, то вам нужно все ваши исходники
          перекодировать из одного цветового пространства в другой. Какое цветовое
          пространство у ваших исходников - вы можете об этом узнать через{" "}
          <mark className="app">MediaInfo</mark>. Обычно через эту утилиту можно извлечь
          информацию о формате, FPS и цветовом пространстве вашего исходника.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/mediainfo_example.png"
          imgTitle="Пример открытого в MediaInfo файла"
          caption="Терминал - MediaInfo-CLI"
        />
        <p>
          Чтобы начать перекодирование ваших исходников, вам нужно установить программу{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>. После установки
          просто запустите программу и перетащите в него ваши файлы, можно даже целую
          папку.
        </p>
        <AdditionInfo>
          Чтобы скачать программу бесплатно, просто переместите ползунок из{" "}
          <mark className="ui">It helps me to pay for the server & the domain</mark> на
          ноль, а затем нажмите на кнопку скачивания, соответствующую вашей операционной
          системе.
        </AdditionInfo>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться сложным, но на самом деле это не так. Для перекодирования исходников
          вам нужно сделать всего несколько простых шагов.
        </p>
        <ImageFigure
          styleClass="figure_macos-dark"
          imgSrc="images/shutter_encoder_interface.png"
          imgTitle="Интерфейс Shutter Encoder"
          caption="Shutter Encoder"
        />
        <ul>
          <li>
            Сначала выберите кодек в <mark className="ui">Choose Function</mark>. Обычно
            выбирают <mark className="video">Apple Prores 422</mark>,{" "}
            <mark className="video">H.264</mark> или <mark className="video">DNxHR</mark>.
          </li>
          <li>
            После выбора кодека определитесь с режимом кодирования. В правой части, рядом
            с выбором битрейта, есть кнопка, которая переключает кодировщик между режимами{" "}
            <mark className="ui">CBR</mark>, <mark className="ui">VBR</mark> или{" "}
            <mark className="ui">CQ</mark>.
            <AdditionInfo>
              При кодировании в некоторые кодеки, например,{" "}
              <mark className="file">Apple ProRes</mark>, этот пункт можно пропустить, так
              как там обычно используются стандартные шаблоны для битрейта.
              <ul>
                <li>
                  <mark>CBR</mark> - это постоянный битрейт, который хорошо подходит для
                  монтажа, но не очень для социальных сетей из-за большого размера файлов
                  по сравнению с VBR.
                </li>
                <li>
                  <mark>VBR</mark> - это переменный битрейт, который может изменяться в
                  зависимости от временных промежутков. Он не очень подходит для монтажа
                  из-за непредсказуемого качества, но отлично подходит для передачи видео
                  или публикации в соцсетях.
                </li>
                <li>
                  <mark>CQ</mark> - это метод, при котором качество видео регулируется
                  изменением уровня сжатия. Чем ниже значение, тем выше качество, но и
                  размер файла больше. Этот подход позволяет достичь оптимального баланса
                  между качеством и размером.
                </li>
              </ul>
            </AdditionInfo>
          </li>
          <li>
            После выбора режима кодирования укажите рекомендуемое значение битрейта или
            квантования.
          </li>
          <li>
            Если цветовое пространство вашего исходника отличается от <mark>Rec.709</mark>
            , то в пункте <mark className="ui">Colorimetry</mark> включите галочку{" "}
            <mark className="ui">Convert Colorspace</mark>. Затем установите первым
            значением ваш цветовой профиль, указанный в{" "}
            <mark className="app">MediaInfo</mark>, а вторым - <mark>Rec.709</mark>.
          </li>
          <li>
            После настройки укажите путь для сохранения перекодированных файлов и нажмите
            на кнопку <mark className="ui">Start Function</mark>.
            <AdditionInfo>
              Если у вас видеокарта от NVIDIA, не забудьте установить галочку в пункте{" "}
              <mark className="ui">Hardware Acceleration</mark> и выбрать рядом параметр{" "}
              <mark className="ui">Nvidia NVENC</mark>.
            </AdditionInfo>
          </li>
        </ul>
        <p>
          После перекодирования исходников замените каждый в окне{" "}
          <mark className="ui">Project</mark>, нажав <mark className="key">ПКМ</mark> по
          нужному исходнику и нажав на <mark className="ui">Replace Footage</mark>. В
          открывшемся окне укажите путь до нового перекодированного исходника. При
          необходимости проделайте эти действия с остальными исходниками.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой. Как мне их импортировать?">
        <p>
          <mark className="app">Premiere Pro</mark> может не поддерживать некоторые
          кодеки, например <mark className="video">VP9</mark>,{" "}
          <mark className="video">AV1</mark>, а также контейнеры по типу{" "}
          <mark className="file">.flv</mark>, <mark className="file">.mkv</mark> и прочие.
        </p>
        <p>
          Любая программа для монтажа и композитинга чего-угодно была изначально
          предназначена работать только с монтажным кодеком. Но в последнее время для
          упрощения работы Adobe постепенно добавляет поддержку различных форматов, но всё
          ещё не всех. Если у вас небольшой проект и нет желания заниматься
          перекодированием исходников, то вы можете попробовать плагин{" "}
          <a href="https://www.autokroma.com/Influx">Autokroma Influx</a>. Он облегчает
          импорт некоторых файлов которые не поддерживаются в{" "}
          <mark className="app">Premiere Pro</mark>,{" "}
          <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <AdditionWarning>
          Поскольку декодирование из немонтажных кодеков, а также через{" "}
          <mark className="plugin">Autokroma Influx</mark> работает не так, как хотелось
          бы, то вы можете столкнуться с некоторыми проблемами, например появление
          различных артефактов, дёрганные кадры, искажённые цвета, долгий рендер или вовсе
          отсутствие изображения. Поэтому рекомендуется в следующий раз всё-таки
          перекодировать ваши исходники в монтажный кодек, например через{" "}
          <mark className="app">Shutter Encoder</mark>.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .heic, .heif или .hevc. Как мне импортировать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать композиции из After Effects в секвенцию Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Откуда-то появились на предпросмотре чёрные полосы, что это может быть?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRImport;
