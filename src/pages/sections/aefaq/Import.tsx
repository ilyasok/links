import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

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
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Хочу импортировать секвенцию изображений, но полученная секвенция импортируется короче/длиннее чем нужно или с неверным FPS. Как исправить?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Импортировал исходник с перменным FPS. Почему длина исходника в After Effects короче, чем в видео-проигрывателе?">
        <p>{/* fixme: написать!! */}</p>
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
            Для скачивания кодека <mark className="video">HEIF</mark>.
            <code>https://apps.microsoft.com/9pmmsr1cgpwg</code>
          </li>
        </ul>
        <p>
          После вставки ссылки и нажатия на кнопку <mark className="ui">OK</mark>, нажмите
          на файл с форматом <mark className="file">.appxbundle</mark> для его скачивания.
        </p>
        <AdditionWarning>
          Если браузер жалуется, мол вы скачиваете редкий файл или некий вирус, то
          проигнорируйте это и продолжите скачивание дальше.
        </AdditionWarning>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/link_generator_msstore.png"
          imgTitle="Генератор ссылок из Microsoft Store"
          caption="Браузер"
        />
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