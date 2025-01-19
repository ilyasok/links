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
        title="Где я могу узнать об нововведениях в обновлениях After Effects?"
        tag="что нового, фишки, обновления, апдейт"
      >
        <p>{/* FIXME: написать!! */}</p>
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
