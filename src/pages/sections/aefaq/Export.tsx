import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
const AEExport: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="export"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Export.tsx" />
      <DetailsSummary title="Какие настройки экспорта стоит установить для вывода в социальные сети?">
        <p>{/* fixme: написать!! */}</p>
      <DetailsSummary title="Почему из каждого угла советуют не использовать Media Encoder для экспорта композиций из After Effects?">
        <p>
          <mark className="app">Media Encoder</mark> славится своими багами и различными
          проблемами при экспорте композиций из <mark className="app">After Effects</mark>
          . Поэтому чтобы исключить траблы и не морочить себе голову при экспорте -
          советуем от него отказаться и использовать его только в крайних случаях,
          например для создания прокси-видео.
        </p>
        <p>
          Вы спросите, а в чём собственно проблема? Да проблем то от него целая куча...
        </p>
        <ul>
          <li>
            <mark className="app">Media Encoder</mark> при экспорте сложных сцен может
            просто остановить процесс рендера, и всё. Без объяснения причин, а потом ищи и
            гадай, что ему не нравится.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> любит терять исходники просто так,
            поэтому не удивляйтесь, если вы вместо изображения или видео вы увидите
            палитру цветов как при технических работах на ТВ.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> может вывести композиции с
            артефактами, например сместив изображение в сторону. Хоть этот баг и исправили
            в поздних версиях программ, но тем не менее.
          </li>
          <li>
            При экспорте из <mark className="app">After Effects</mark> в{" "}
            <mark className="app">Media Encoder</mark> также могут появиться красные
            кресты, водяные знаки или ещё что-то похожее, сигнализирующее об отсутствии
            лицензии на плагин. Если в <mark className="app">After Effects</mark> всё с
            активацией хорошо, то не факт что она адекватно перенесётся в{" "}
            <mark className="app">Media Encoder</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Media Encoder</mark> вы не получите
            стабильную работу функции Multi-frame Render, которая отлично работает в самом{" "}
            <mark className="app">After Effects</mark>.
          </li>
        </ul>
        <p>
          Изначально <mark className="app">Media Encoder</mark> был создан для
          перекодирования исходников из одного формата в другой и для создания прокси,
          чтобы в дальнейшем их подключить в <mark className="app">Premiere Pro</mark>. Но
          со временем Adobe решил добавить туда функцию экспорта из{" "}
          <mark className="app">After Effects</mark> и понеслась. Большинство
          пользователей экспортом в этой программе занимались по причине того, что в{" "}
          <mark className="app">After Effects</mark> по стандарту в старых версиях не было
          возможности экспортировать в кодек <mark className="file">H.264</mark>.
        </p>
        <AdditionInfo>
          Если вам нужно поставить на очередь просчёта сразу несколько композиций -
          создайте проект болванку и импортируйте туда несколько своих проектов. Затем вы
          сможете все нужные композиции закинуть в очередь просчёта и начать его,
          предварительно указав нужный формат и расположение.
        </AdditionInfo>
        <p>
          При экспорте напрямую из <mark className="app">After Effects</mark> вы можете
          уберечь себя от ужасов, описанных в списке выше. Надеюсь, что мы убедили вас его
          не использовать.
        </p>
        <AdditionInfo>
          О том, как экспортировать в популярные форматы, вы можете посмотреть в следующих
          пунктах по списку.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .mp4 и H.264/H.265?">
        <p>
          Вы можете вывести композиции в популярном кодеке напрямую из{" "}
          <mark className="app">After Effects</mark> тремя способами.
        </p>
        <ul>
          <li>
            Через встроенный кодек <mark className="plugin">H.264</mark>. Доступен только
            на <mark className="app">After Effects</mark> версий 2023 или новее.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">Voukoder</mark>. Доступен
            только для Windows, поддержка устройств на macOS косвенно присутствует с
            версий Voukoder Pro 2.0 и новее, но мы его рассматривать не будем.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">AfterCodecs</mark>. Доступен
            для Windows и macOS, а также поддерживает достаточно много старых версий
            программы.
          </li>
        </ul>
        <AdditionWarning>
          В кодеке H.264 нельзя вывести видео с альфа-каналом, то есть с прозрачностью.
          Для вывода видео на прозрачном фоне воспользуйтесь форматами{" "}
          <mark className="video">Quicktime - Apple Prores 4444</mark> или{" "}
          <mark className="video">WebM - VP9</mark>.
        </AdditionWarning>
        <p>
          Сначала разберёмся, куда что тыкать. Для того чтобы засунуть вашу нужную
          композицию в очередь экспорта, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Вы переместитесь в окно очереди экспорта,
          где вы можете установить кодек для экспорта в пункте{" "}
          <mark className="ui">Output Module</mark>, параметры экспорта (например
          использование прокси или принудительно отключить эффекты) в пункте{" "}
          <mark className="ui">Render Settings</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/render_queue.png"
          imgTitle="Интерфейс очереди просчёта"
          caption="Render Queue"
        />
        <p>
          Начнём по порядку, с первого и простого способа. После того, как в{" "}
          <mark className="app">After Effects</mark> версии 2023 и новее вернули нативный
          экспорт в <mark className="file">H.264</mark>, то теперь вместо AVI по умолчанию
          уже стоит то, что нам нужно. Обычно в большинстве случаев хватает трёх
          стандартных пресетов: <mark className="video">H.264 - 5 Мбит/c</mark>,{" "}
          <mark className="video">H.264 - 15 Мбит/c</mark> и{" "}
          <mark className="video">H.264 - 40 Мбит/c</mark>.
        </p>
        <p>
          Чтобы начать изменять битрейт и аналогичные настройки для встроенного кодека
          H.264, откройте окно <mark className="ui">Output Module</mark>, нажав на
          название выбранного пресета. Для выбора нужного нам битрейта откройте окно{" "}
          <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/output_module_format_options.png"
          imgTitle="Окно Output Module"
          caption="Output Module Settings"
        />
        <p>
          В открывшемся окне мы можем выбрать <mark>VBR</mark> или <mark>CBR</mark>. Если
          в вашем видео есть слишком быстрые движения объектов и куча частиц - установите
          больше битрейта и <mark>CBR</mark>, но не переусердствуйте. Пункт{" "}
          <mark>VBR</mark> больше подойдет тем, кому нужен минимальный вес файла.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/h264_options.png"
          imgTitle="Окно настроек H.264"
          caption="H.264 Options"
        />
        <p>
          После того, как вы указали нужный битрейт, прожимайте кнопки{" "}
          <mark className="ui">OK</mark> до полного закрытия{" "}
          <mark className="ui">Output Module</mark>. В графе{" "}
          <mark className="ui">Output To</mark> вы можете указать путь и название для
          вашей экспортируемой композиции, в стрелочке слева можно указать
          предустановленный шаблон названия или создать свой. Для начала экспорта нажмите
          на кнопку <mark className="ui">Render</mark> или на{" "}
          <mark className="key">Enter</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/start_render_button.png"
          imgTitle="Кнопка начала рендера"
          caption="Render Queue"
        />
        <p>
          Если же вас результат рендера от стандартного H.264 не устраивает, то можно
          воспользоваться плагином <mark className="plugin">Voukoder</mark>. В этом
          примере мы рассмотрим плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro версию.
        </p>
        <AdditionWarning>
          Демонстрируемая версия плагина <mark className="plugin">Voukoder</mark>{" "}
          недоступна на устройствах с macOS. Чтобы подключить плагин к программе, нужно
          скачать и установить{" "}
          <a href="https://github.com/Vouk/voukoder/releases/download/13.4.1/voukoder-13.4.1.msi">
            сам Voukoder
          </a>{" "}
          и{" "}
          <a href="https://github.com/Vouk/voukoder-connectors/blob/master/aftereffects/aftereffects-connector-0.10.0.msi?raw=true">
            коннектор для After Effects
          </a>{" "}
          к нему.
        </AdditionWarning>
        <p>
          Для того чтобы начать рендер с помощью Voukoder, вам нужно снова зайти в{" "}
          <mark className="ui">Output Module</mark> и выбрать пункте{" "}
          <mark className="ui">Format</mark> плагин <mark className="ui">Voukoder</mark>.
          Чтобы перейти в настройки <mark className="ui">Voukoder</mark> нужно нажать
          рядом кнопку <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/selecting_voukoder.png"
          imgTitle="Выбираем Voukoder из списка форматов"
          caption="Output Module Settings"
        />
        <p>
          После открытия настроек нам нужно выбрать кодек, в который мы хотим
          экспортировать видео. В основном для вывода видео и его корректного открытия на
          многих современных устройствах используется кодек{" "}
          <mark className="video">H.264</mark>. Но можно и воспользоваться{" "}
          <mark className="video">HEVC (H.265)</mark>, если вам нужно примерно сохранить
          качество видео с меньшим объёмом файла. Кодеки{" "}
          <mark className="video">AV1</mark> и <mark className="video">VP9</mark> для
          вывода из <mark className="app">After Effects</mark> используются редко, а если
          уж и надо вывести в таком формате, то проще переконвертировать видео позже через
          условный <a href="https://www.shutterencoder.com/">Shutter Encoder</a>. Теперь
          поговорим и о приставках в названиях кодеков.
        </p>
        <AdditionInfo>
          Варианты кодирования показаны на устройстве с связкой процессора AMD и
          видеокарты NVIDIA. Выбор у вас может отличаться в зависимости от вашего железа.
        </AdditionInfo>
        <ul>
          <p>
            Для вариантов <mark className="video">H.264</mark> и{" "}
            <mark className="video">H.265</mark> есть три варианта для кодирования.
          </p>
          <li>
            <mark>x264</mark> или <mark>x265</mark> используется кодирования видео на
            процессоре без дополнительного использования видеокарты. Стабильно, но не
            всегда быстро.
          </li>
          <li>
            <mark>NVIDIA NVENC</mark> используется для кодирования видео с использованием
            видеокарты NVIDIA. Может ускорить процесс рендера, но не гарантирует 100%
            использование видеокарты.
          </li>
          <li>
            <mark>AMD AMF</mark> - тоже самое, что и предыдущий пункт, но на встроенном
            видеочипе AMD.
          </li>
        </ul>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="/images/aftereffects/select_codec_in_voukoder.png"
          imgTitle="Выбираем нужный вариант кодека в Voukoder"
          caption="Voukoder 13.4.1"
        />
        <p>
          После выбора нужного нам кодека (я выбрал{" "}
          <mark className="video">H.264 (NVIDIA NVENC)</mark>), нужно перейти во вкладку{" "}
          <mark className="ui">Параметры</mark>. В этой вкладке можно указать качество
          желаемого видео. По умолчанию там уже стоит то, что нам нужно, а именно параметр
          квантования и его фактор. <mark>CQP</mark> или <mark>CRF</mark> - это некий
          эквивалент качества, чем меньше - тем лучше качество, но больше вес.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="/images/aftereffects/codec_parameter_voukoder.png"
          imgTitle="Настраиваем качество видео в Voukoder"
          caption="Voukoder 13.4.1"
        />
        <ul>
          <li>
            Значения <mark>23</mark> или <mark>25</mark> хватит с головой для экспорта
            видео в YouTube, VK Видео и подобных видеоплощадок.
            <AdditionInfo>
              Учтите, что многие видеоплощадки всё равно будут сжимать видео по своему,
              чтобы уместить их у себя на серверах.
            </AdditionInfo>
          </li>
          <li>
            Если вам нужно около максимальное качество, тогда укажите значение квантования{" "}
            <mark>17</mark> или <mark>20</mark>. В таком случае вес файла заметно
            возрастёт.
          </li>
          <li>
            Если вы хотите получить видео с хорошим соотношением{" "}
            <mark>качество/минимальный вес</mark>, тогда укажите значение <mark>30</mark>.
            Можете поэкспериментировать с значением в большую или меньшую сторону.
            <AdditionWarning>
              Экстремальные значения, например <mark>50</mark>, не рекомендуется
              использовать, так как можете получить кашу из кадров на выходе.
            </AdditionWarning>
          </li>
        </ul>
        <p>
          Дальше нам ничего не нужно настраивать, поэтому просто нажимаем{" "}
          <mark className="ui">ОК</mark> и начинаем рендер композиции в программе как
          обычно, с помощью кнопки <mark className="ui">Render</mark>.
        </p>
        <p>
          Теперь поговорим и про <mark className="plugin">AfterCodecs</mark>. Для начала
          экспорта через <mark className="plugin">AfterCodecs</mark> нам нужно снова зайти
          в <mark className="ui">Output Module</mark> и выбрать то, что нам нужно. Для
          открытия настроек <mark className="plugin">AfterCodecs</mark> мы снова нажимаем
          на кнопку <mark className="ui">Format Options</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/selecting_aftercodecs.png"
          imgTitle="Выбираем AfterCodecs из списка форматов"
          caption="Output Module Settings"
        />
        <p>
          В открывшемся окне мы снова видим кучу непонятных параметров. Здесь нам нужно
          указать качество и скорость кодирования видео.
        </p>
        <ul>
          <li>
            В пункте <mark className="ui">Tradeoff</mark> мы можем указать три варианта на
            что ориентироваться при кодировании: на процент качества (похож на метод
            квантования CQP), на желаемый битрейт или на желаемый размер файла (не
            рекомендуется при повседневном использовании).
          </li>
          <li>
            Значение для скорости кодирования <mark className="ui">Speed</mark> можно
            поставить <mark>2</mark> или <mark>4</mark>.
          </li>
          <li>
            В разделе <mark className="ui">Colors</mark> можно изменить битность и
            цветовой диапазон. Обычно там значения меняют редко.
          </li>
          <AdditionWarning>
            Параметры <mark className="ui">Tuning</mark>,{" "}
            <mark className="ui">H.264 Profiles</mark>, <mark className="ui">GOP</mark>,{" "}
            <mark className="ui">Audio Bitrate</mark>, <mark className="ui">VR Meta</mark>{" "}
            и <mark className="ui">Fast Start</mark> лучше не менять без острой
            необходимости!
          </AdditionWarning>
        </ul>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/aftercodecs_settings.png"
          imgTitle="Настройки AfterCodecs"
          caption="AfterCodecs 1.11.5 for After Effects"
        />
        <p>
          После завершения настроек мы нажимаем <mark className="ui">OK</mark> и начинаем
          рендер как обычно, через кнопку <mark className="ui">Render</mark> или{" "}
          <mark className="key">Enter</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .webm и VP9?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .gif?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести видео с альфа-каналом?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Хочу сохранить один кадр как файл изображения. Как это можно сделать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как я могу сохранить свой пресет для эскпорта файлов?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему из каждого угла советуют не использовать Media Encoder для экспорта композиций из After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать композицию с отображением всех границ и путей движения?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие эффекты можно использовать в Lottie для успешного вывода?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в After Effects, но мне нужно передать .aep файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEExport;
