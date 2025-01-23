import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";

const PRExportProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/ExportProblems.tsx" />
      <DetailsSummary title="Почему созданные субтитры не отображаются на экспортированной секвенции?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что делать, если экспорт зависает на определённом моменте?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Экспортировал секвенцию, а оно занимает очень много места на диска. Как его сжать без потери качества?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу экспортировать видео в H.264 с нечётным разрешением?">
        <p>
          Вы не сможете экспортировать видео в <mark className="video">H.264</mark> или{" "}
          <mark className="video">H.265</mark> с нечётным разрешением из-за технических
          особенностей кодекса. Данные кодеки используют макроблоки с чётными значениями,
          поэтому чисто технически у вас не получится указать разрешение, например{" "}
          <mark>575</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/odd_resolution_error.png"
          imgTitle="Ошибка экспорта с нечётным разрешением"
          caption="Ошибка в AfterCodecs при экспорте с нечётным разрешением"
        />
        <p>
          Для решения проблемы просто укажите чётное значение пикселей у каждой стороны в
          свойствах композиции. Для этого откройте настройки композиции с помощью
          комбинации клавиш <mark className="key">Ctrl + K</mark> и укажите в параметрах
          ширины и высоты цифровое значение, которые делится на 2 без остатка. После
          изменения настроек композиции попробуйте начать экспорт заново.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PRExportProblems;
