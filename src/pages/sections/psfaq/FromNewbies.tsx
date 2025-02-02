import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PSFromNewbies: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/FromNewbies.tsx" />
      <DetailsSummary
        title="Первый раз установил Photoshop, с чего бы мне начать обучение?"
        tag="для новичка, первый раз, только открыл"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Не понимаю термины от других пользователей Photoshop, проясните!"
        tag="сленг, жаргон, сокращения, словосочетания, говор"
      >
        <p>{/* FIXME: написать!! по аналогии как с терминами в аефаке */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Где я могу узнать об нововведениях в обновлениях Photoshop?"
        tag="что нового, фишки, обновления, апдейт"
      >
        <p>
          Обычно на сайте Adobe в день выхода публичной стабильной версии выкладываются
          основные нововведения. Это сделано для того, чтобы каждый прохожий не спрашивал
          из каждого угла <mark>&quot;А что обновилось то?&quot;</mark>. Ещё время от
          времени Adobe выкладывает на сайт список выявленных неполадок и старается
          приложить к ним временное решение.
        </p>
        <FlexibleLinks>
          <a href="https://helpx.adobe.com/ru/photoshop/using/whats-new.html">
            Что нового в Photoshop последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/photoshop/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/photoshop/kb/known-issues.html">
            Выявленные неполадки в Photoshop
          </a>
        </FlexibleLinks>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных комбинаций клавиш для работы в Photoshop?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="Зачем мне с каждого угла советуют поставить английский язык программы и как мне это сделать?"
        tag="изменить язык, смена языка, установка английской версии"
      >
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Для чего нужно использвовать Photoshop, а для чего Illustrator?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PSFromNewbies;
