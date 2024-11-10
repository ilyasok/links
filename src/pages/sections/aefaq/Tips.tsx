import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";

export const AETips: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="tips"
    >
      <DetailsSummary
        title="Как мне сделать историю изменений файлов и в случае чего - откатываться до
            предыдущих версий?"
      >
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие плагины мне стоит поставить для упрощения работы?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Хочу обновиться до более новой версии. Как мне перенести плагины без танцев с
            бубнами?"
      >
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какой компьютер или ноутбук стоит взять для работы в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какую версию After Effects мне лучше всего поставить?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
