import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AEExportProblems: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="export-problems"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/ExportProblems.tsx" />
      <DetailsSummary title="An unexpected error occurred while exporting a composition. Error code: 9988">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему при экспорте в .mp4 через встроенный кодек H.264 сохраняется файл с памятью 1 Кб?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="После экспорта у меня изменились цвета. Как избежать изменения цветов?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему в предпросмотре Media Encoder и после экспорта видео смещается влево или вправо?">
        <p>{/* fixme: написать!!  баг 23.1-23.5 */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему моё видео сплющилось после экспорта?">
        <p>{/* fixme: написать!! про квадратный пиксель */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему композиция с Element 3D экспортируется с мерцаниями?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Экспортировал композицию и вижу в результате ужасный ступенчатый градиент. Как мне от него избавиться?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу экспортировать видео в H.264 с нечётным разрешением?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как экспортировать композицию, если After Effects сбоит на конкретном участке?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему после экспорта в видеоформат отсутствует звук в видео?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Экспортировал композицию, а оно занимает очень много места на диске. Как его сжать без потери качества?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEExportProblems;
