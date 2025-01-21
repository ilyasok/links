import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {AdditionDanger, AdditionInfo} from "../../../components/Additions";
import {FlexibleLinks} from "../../../components/FlexibleLinksFaQ";

const PRFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/FromNewbies.tsx" />
      <DetailsSummary
        title="Первый раз установил Premiere Pro, с чего бы мне начать обучение?"
        tag="для новичка, первый раз, только открыл"
      >
        <p>
          Если вы только начинаете свой путь в монтаже или никогда не использовали{" "}
          <mark className="app">Premiere Pro</mark> как основной инструмент и хотите
          разобраться в интерфейсе и его возможностях, то посмотрите плейлист{" "}
          <a href="https://www.youtube.com/watch?v=Wi-AalXwilg&list=PLcN7xY5E2wrmIlv6SNF2xacsryFtGIfXK&pp=iAQB">
            Азбука Premiere Pro
          </a>{" "}
          от{" "}
          <a href="https://www.youtube.com/channel/UCmLY17yagzLy6GRiI1nVBow">
            Ильи Зернова
          </a>
          .
        </p>
        <YouTubeVideo
          link="Wi-AalXwilg"
          caption="Азбука Premiere Pro"
        />
        <AdditionInfo>
          Курс был записан в <mark className="app">Premiere Pro</mark> версии 2019.
          Некоторые функции могут чуть отличаться от вашей текущей версии программы.
        </AdditionInfo>
        <p>
          Также при желании вы можете отдельно посмотреть курс по работе с вкладкой{" "}
          <mark className="plugin">Lumetri Color</mark> в{" "}
          <mark className="app">Premiere Pro</mark> для цветокоррекции различных футажей и
          исходников от <a href="https://www.youtube.com/@Bolharov">Романа Болгарова</a>.
        </p>
        <YouTubeVideo
          link="xqRnW1T_pNk"
          caption="Цветокоррекция в Lumetri"
        />
        <p>
          Если вы уже уверенно монтируете в <mark className="app">Premiere Pro</mark>, и
          хотите узнать что-то новое, то рекомендую заглянуть на каналы ниже.
        </p>
        <FlexibleLinks>
          <a href="https://www.youtube.com/@khs_yt">Хохлов Сабатовский</a>
          <a href="https://www.youtube.com/@egorlistopadov">Егор Листопадов</a>
          <a href="https://www.youtube.com/@Profileschool/videos">Profileschool</a>
          <a href="https://www.youtube.com/@pankovskii/playlists">PANKOVSKII</a>
          <a href="https://www.youtube.com/@DmitryKolotilshikov/videos">
            Дмитрий Колотильщиков
          </a>
          <a href="https://www.youtube.com/@VIDEODIM/videos">Как монтировать видео</a>
        </FlexibleLinks>
        <p style={{textAlign: "center"}}>
          Надеюсь, вы найдёте что-то полезное для себя. Удачи в ваших начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Не понимаю термины от других пользователей Premiere Pro, проясните!"
        tag="сленг, жаргон, сокращения, словосочетания, говор"
      >
        <p>{/* FIXME: написать!! по аналогии как с терминами в аефаке */}</p>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш для работы в Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Где я могу узнать об нововведениях в обновлениях Premiere Pro?"
        tag="что нового, фишки, обновления, апдейт"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Зачем мне с каждого угла советуют поставить английский язык программы и как мне это сделать?"
        tag="изменить язык, смена языка, установка английской версии"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Что такое Nest, как их создать и распаковывать?"
        tag="нест, unnest, вложенный таймлайн, вложенные клипы, прекомпоз"
      >
        <p>
          <mark>Nest</mark> - функция объединения нескольких клипов или слоев в одну
          секвенцию, которая затем может быть использована как единый элемент в таймлайне.
          Это бывает полезным для организации материала или применения эффектов к группе
          клипов одновременно.
        </p>
        <p>
          Для создания <mark>Nest</mark> нужно выделить нужные клипы, нажать на{" "}
          <mark className="key">ПКМ</mark> и выбрать пункт{" "}
          <mark className="ui">Nest</mark>. После этого откроется окно в которое вы можете
          вписать название новой секвенции.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/creating_nest.mp4"
          caption="Premiere Pro"
        />
        <p>
          А чтобы распаковать <mark>Nest</mark> или же наложить на таймлайн
          &quot;распакованную&quot; секвенцию - найдите нужную секвенцию в окне{" "}
          <mark className="ui">Project</mark>, отключите функцию{" "}
          <mark className="ui">
            Insert and overwrite sequences as nests or individual clips
          </mark>{" "}
          и перетяните секвенцию прямо на таймлайн. Если вы хотите - старый{" "}
          <mark>Nest</mark> можно удалить без всяких проблем.
        </p>
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как вернуть звуковую или видео дорожку на таймлайн?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Хочу перевести голос в субтитры, но загрузка падает в бесконечность. Почему функция транскрибации не работает?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>{" "}
      <DetailsSummary title="Пропал звук при проигрывании предпросмотра">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>{" "}
    </div>
  );
};

export default PRFromNewbies;
