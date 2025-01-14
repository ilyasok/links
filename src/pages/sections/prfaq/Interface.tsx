import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PRInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Interface.tsx" />{" "}
      <DetailsSummary title="Как изменить вид отсчёта времени на таймлайне?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Есть ли аналог FX Console для Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>{" "}
      <DetailsSummary title="Пропала визуализация аудиодорожек на таймлайне, как их вернуть?">
        <p>
          Это довольно частый и неприятный баг, возникающий при использовании{" "}
          <mark className="app">Premiere Pro</mark>. Обычно это лечится очисткой кэша{" "}
          <mark className="file">.peak</mark> файлов.
        </p>
        {/* FIXME: написать!! */}
      </DetailsSummary>{" "}
      <DetailsSummary title="Как отключить выделение объекта на таймлайне при перемещении временной метки?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Куда пропала настройка Timeline в Preferences?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Куда пропал Essential Graphics?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вернуть старый интерфейс окна экспорта?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRInterface;
