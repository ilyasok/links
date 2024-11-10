import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";

export const AEExportProblems: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="export-problems"
    >
      <DetailsSummary title="An unexpected error occurred while exporting a composition. Error code: 9988">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему при выводе в .mp4 через встроенный кодек H.264 сохраняется файл с памятью 1 Кб?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему цвета после рендера отличаются от тех, что в программе?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему изображение после рендера вытянутое или искажённое?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему композиция с Element 3D выводится с периодическими мерцаниями?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Вывел видео, но вижу ужасный ступенчатый градиент. Как мне от него избавиться?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему в предпросмотре Media Encoder и после рендера видео смещается влево или вправо?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу экспортировать видео в H.264 с нечётным разрешением?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как отрендерить видео, если After Effects сбоит на конкретном участке?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему после рендера отсутствует звук в видео?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Отрендерил композицию, а оно занимает очень много места на диске. Как его сжать без потери качеств?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
