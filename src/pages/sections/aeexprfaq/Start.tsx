import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const AEExprStart: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Start.tsx" />
      <DetailsSummary title="Для чего вообще нужны выражения?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>{" "}
      <DetailsSummary title="Что такое переменные и константы?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие есть стандартные функции в выражениях?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем нужен seedRandom?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как включить режим написания выражения для конкретного параметра?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Мне не нравится редактировать выражения внутри After Effects. Есть ли варианты редактирования в стороннем редакторе кода?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEExprStart;
