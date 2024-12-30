import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";

const AEImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Import.tsx" />
      <DetailsSummary title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Использую исходник в контейнере .mp4 или в кодеке H.264. Почему у меня лезут артефакты, зелёный экран и дергается изображение?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу импортировать .psd по слоям? After Effects не мне предлагает выбор типа импорта!">
        <p>
          Такое бывает, когда вы сохраняете в <mark className="app">Photoshop</mark> файл
          в формате <mark className="file">PSD</mark> в цветовом режиме, отличном от{" "}
          <mark>RGB</mark>. <mark className="app">After Effects</mark> не понимает файлы в{" "}
          <mark>CMYK</mark> или аналогичных режимах, поэтому импортирует файл как целый
          холст без возможности разделения по слоям.
        </p>
        <p>
          Чтобы проверить, в каком режиме сохраняется ваш файл, вам нужно открыть его в{" "}
          <mark className="app">Photoshop</mark> и посмотреть на его заголовок.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/tab_in_photoshop.png"
          imgTitle="Проверяем цветовой режим в Photoshop"
          caption="Photoshop"
        />
        <p>
          Если в заголовке написано <mark>CMYK</mark>, <mark>Grayscale</mark> или что-то
          другое, отличающееся от <mark>RGB</mark>, то вам нужно будет преобразовать файл
          в <mark>RGB</mark>. Для этого нужно в{" "}
          <mark className="ui">Image &gt; Mode</mark> выбрать режим{" "}
          <mark className="ui">RGB Color</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/photoshop_switch_to_rgb.png"
          imgTitle="Переключаем цветовой режим на RGB в Photoshop"
          caption="Photoshop"
        />
        <AdditionWarning>
          Если появится окно с вопросом{" "}
          <mark>
            Change modes can affect the appearance of layers. Flatten image before mode
            change?
          </mark>
          , то смело нажимаем на кнопку <mark className="ui">Don&apos;t Flatten</mark>.
          Иначе ваши слои объединятся в один слой, если вы нажмёте на{" "}
          <mark className="ui">Flatten</mark>.
          <AdditionDanger>
            Цвета, возможно, сильно изменятся после смены цветового режима.
          </AdditionDanger>
        </AdditionWarning>
        <p>
          После изменения цветового режима сохраните <mark className="file">.psd</mark>{" "}
          файл и попробуйте снова импортировать его в{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/correct_import_psd.png"
          imgTitle="Корректный импорт PSD в After Effects"
          caption="filename.psd"
        />
        <p>
          Если этот способ вам не помог или вас не устраивают цвета после изменения
          цветового режима, то выведите все слои из <mark className="app">Photoshop</mark>{" "}
          отдельными файлами. Для этого перейдите в{" "}
          <mark className="ui">File &gt; Export</mark> и выберите пункт{" "}
          <mark className="ui">Layers to Files</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/photoshop_layers_to_files.png"
          imgTitle="Пункт для начала экспорта слоёв в файлы"
          caption="Photoshop"
        />
        <p>
          В открывшемся окне вы можете указать путь для сохранения файлов, название и тип
          файла, в который вы хотите экспортировать слои. После настроек нажмите на{" "}
          <mark className="ui">OK</mark> и ваши слои сохранятся как файлы.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/photoshop_export_layers.png"
          imgTitle="Экспорт слоёв в файлы"
          caption="Photoshop"
        />
      </DetailsSummary>
      <DetailsSummary title="Хочу импортировать секвенцию изображений, но полученная секвенция импортируется короче/длиннее чем нужно или с неверным FPS. Как исправить?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Импортировал исходник с переменным FPS. Почему длина исходника в After Effects короче, чем в видео-проигрывателе?">
        <p>
          <mark className="app">After Effects</mark> при импорте преобразует все кадры у
          видео без учёта пропусков от переменного или дробного FPS. Поэтому и получается
          так, что при импорте такого исходника некоторые дублирующие кадры пропускаются и
          длина исходника в <mark className="app">After Effects</mark> становится короче,
          чем в видео-проигрывателе.
        </p>
        <p>
          Чтобы исправить эту проблему измените FPS с помощью интерпретации. Для этого
          выделите ваш исходник в окне <mark className="ui">Project</mark> и нажмите на
          комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В открывшемся
          окне в разделе <mark className="ui">Frame Rate</mark> укажите пункт{" "}
          <mark className="ui">Conform to frame rate</mark> и установите ожидаемое
          количество кадров в секунду.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/interpret_footage_main.png"
          imgTitle="Интерпретация футажа"
          caption="Interpret Footage"
        />
        <p>
          Если это не помогло, то перекодируйте ваш исходник с постоянным FPS через{" "}
          <mark className="app">Media Encoder</mark>,{" "}
          <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">Handbrake</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать 3D-объекты формата .obj, .fbx или .glb?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой. Как мне их импортировать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .heic, .heif или .hevc, но выбивает ошибку. Как их мне импортировать в проект?">
        <AdditionInfo>
          Пользователям устройств на macOS ничего устанавливать не нужно, данные файлы
          импортируются нормально.
        </AdditionInfo>
        <AdditionDanger>
          <mark className="app">After Effects</mark> даже после установки кодеков HEVC не
          сможет импортировать видеофайлы формата <mark className="file">.hevc</mark>,
          перекодируйте их через <mark className="app">Shutter Encoder</mark> в другой
          кодек.
        </AdditionDanger>
        <p>
          Некоторые пользователи, использующие <mark className="app">After Effects</mark>{" "}
          на операционных системах Windows 10 и 11 могут столкнуться с проблемой импорта
          таких файлов, так как у них не установлены кодеки для работы с данными форматами
          изображений и видео. Казалось бы, достаточно их установить с{" "}
          <mark className="app">Microsoft Store</mark>, но увы. Один из кодеков платный, а
          другой - устанавливается неочевидно.
        </p>
        <p>
          Для того чтобы корректно открыть такие изображения и видео, вам нужно установить
          нужные кодеки. Для начала загрузки кодеков нужно посетить{" "}
          <a href="https://store.rg-adguard.net/">
            онлайн-генератор ссылок из Microsoft Store
          </a>
          , а затем вставить ссылку в сервис, взяв их чуть ниже.
        </p>
        <ul>
          <li>
            Для скачивания кодека <mark className="video">HEVC</mark>.
            <code>https://apps.microsoft.com/9n4wgh0z6vhq</code>
          </li>
          <li>
            Для скачивания кодека <mark className="video">HEIF/HEIC</mark>.
            <code>https://apps.microsoft.com/9pmmsr1cgpwg</code>
          </li>
        </ul>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/link_generator_msstore.png"
          imgTitle="Генератор ссылок из Microsoft Store"
          caption="Браузер"
        />
        <p>
          После вставки ссылки и нажатия на кнопку <mark className="ui">OK</mark>, нажмите
          на файл с форматом <mark className="file">.appxbundle</mark> для его скачивания.
        </p>
        <AdditionWarning>
          Если браузер жалуется, мол вы скачиваете редкий файл или некий вирус, то
          проигнорируйте это и продолжите скачивание дальше.
        </AdditionWarning>
        <p>
          Чтобы установить пакеты с расширением <mark className="file">.appxbundle</mark>,
          достаточно их открыть двойным кликом. Если вам предлагают открыть файл с помощью{" "}
          <mark className="app">Обработчика команд Windows</mark> или{" "}
          <mark className="app">Установщика приложений</mark>, то выберите то, что вам
          душе угодно. Я же предпочту установку через{" "}
          <mark className="app">Обработчик команд Windows</mark>.
        </p>
        <p>
          После успешной установки кодеков вы теперь сможете открыть файлы форматов{" "}
          <mark className="file">.heif</mark>, <mark className="file">.heic</mark> и{" "}
          <mark className="file">.hevc</mark> в различных видеоплеерах и просмотрщиков
          фото, например в <mark className="app">MPC-HC</mark> и{" "}
          <mark className="app">FastStone Image Viewer</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как импортировать анимированный стикер из Telegram в формате .tgs?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Скинули проект, который нельзя открыть в старой версии After Effects, но я не хочу обновляться. Или мне придётся?">
        {/* fixme: написать!! */}
        <p></p>
      </DetailsSummary>
      <DetailsSummary title='При открытии чужого проекта выскакивает "After Effects warning: X files are missing sience you last saved project" и из-за этого вместо исходников - цветовая палитра, как во время профилактических работ на ТВ. Как мне переподключить исходники?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Пытаюсь импортировать .ai с градиентами, но не получается. Как всё-таки перенести градиенты из Illustrator в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как перенести макет Figma в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEImport;