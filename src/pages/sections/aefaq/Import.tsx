import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

export const AEImport: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="import"
    >
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
      <DetailsSummary title="Прислали исходники в формате .mkv, .flv или что-то не поддерживаемое программой. Как мне их импортировать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Прислали исходники в формате .heic, .heif или .hevc. Как мне импортировать?">
        <p>{/* fixme: написать!! */}</p>
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
