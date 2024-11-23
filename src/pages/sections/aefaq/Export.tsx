import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

export const AEExport: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="export"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Export.tsx" />
      <DetailsSummary title="Какие настройки экспорта стоит установить для вывода в социальные сети?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .mp4 и H.264/H.265?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .webm и VP9?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести композицию в .gif?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести видео с альфа-каналом?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="После экспорта у меня изменились цвета. Как избежать изменения цветов?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Хочу сохранить один кадр как файл изображения. Как это можно сделать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как я могу сохранить свой пресет для эскпорта файлов?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему из каждого угла советуют не использовать Media Encoder для экспорта композиций из After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать композицию с отображением всех границ и путей движения?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие эффекты можно использовать в Lottie для успешного вывода?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в After Effects, но мне нужно передать .aep файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
