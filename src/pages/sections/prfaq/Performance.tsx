import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PRPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Performance.tsx" />
      <DetailsSummary title="Почему у меня, б%@#ь, лагает е&#!%й Premiere Pro, с$%а?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как заставить программу использовать всю мощь компьютера?">
        {/* я заплатил за весь спидометр и я буду использовать весь спидометр */}
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта? Как мне переключить рендер на процессор?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Предпросмотр идёт как-будто в slow-motion, что делать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRPerformance;
