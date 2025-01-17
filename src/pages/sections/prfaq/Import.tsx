import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PRImport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Import.tsx" />
      <DetailsSummary title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Использую исходник в контейнере .mp4 или в кодеке H.264. Почему у меня лезут артефакты, зелёный экран и дергается изображение?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Импортировал видео, а оно слишком засвеченное. Как сделать нормальную яркость?">
        <p>{/* FIXME: написать!! */}</p>
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

      <DetailsSummary title="Откуда-то появились на предпросмотре чёрные полосы, что это может быть?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRImport;
