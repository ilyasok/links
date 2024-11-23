import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

export const AEPerfomance: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="perfomance"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Perfomance.tsx" />
      <DetailsSummary title="Почему у меня, б%@#ь, лагает е&#!%й After Effects, с$%а?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как заставить программу использовать всю мощь компьютера?">
        {/* я заплатил за весь спидометр и я буду использовать весь спидометр */}
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Предпросмотр идёт как-будто в slow-motion, что делать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
