import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
const AEExport: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="export"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Export.tsx" />
      <DetailsSummary title="Какие настройки экспорта стоит установить для вывода в социальные сети?">
        <p>{/* fixme: написать!! */}</p>
      <DetailsSummary title="Почему из каждого угла советуют не использовать Media Encoder для экспорта композиций из After Effects?">
        <p>
          <mark className="app">Media Encoder</mark> славится своими багами и различными
          проблемами при экспорте композиций из <mark className="app">After Effects</mark>
          . Поэтому чтобы исключить траблы и не морочить себе голову при экспорте -
          советуем от него отказаться и использовать его только в крайних случаях,
          например для создания прокси-видео.
        </p>
        <p>
          Вы спросите, а в чём собственно проблема? Да проблем то от него целая куча...
        </p>
        <ul>
          <li>
            <mark className="app">Media Encoder</mark> при экспорте сложных сцен может
            просто остановить процесс рендера, и всё. Без объяснения причин, а потом ищи и
            гадай, что ему не нравится.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> любит терять исходники просто так,
            поэтому не удивляйтесь, если вы вместо изображения или видео вы увидите
            палитру цветов как при технических работах на ТВ.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> может вывести композиции с
            артефактами, например сместив изображение в сторону. Хоть этот баг и исправили
            в поздних версиях программ, но тем не менее.
          </li>
          <li>
            При экспорте из <mark className="app">After Effects</mark> в{" "}
            <mark className="app">Media Encoder</mark> также могут появиться красные
            кресты, водяные знаки или ещё что-то похожее, сигнализирующее об отсутствии
            лицензии на плагин. Если в <mark className="app">After Effects</mark> всё с
            активацией хорошо, то не факт что она адекватно перенесётся в{" "}
            <mark className="app">Media Encoder</mark>.
          </li>
          <li>
            При экспорте в <mark className="app">Media Encoder</mark> вы не получите
            стабильную работу функции Multi-frame Render, которая отлично работает в самом{" "}
            <mark className="app">After Effects</mark>.
          </li>
        </ul>
        <p>
          Изначально <mark className="app">Media Encoder</mark> был создан для
          перекодирования исходников из одного формата в другой и для создания прокси,
          чтобы в дальнейшем их подключить в <mark className="app">Premiere Pro</mark>. Но
          со временем Adobe решил добавить туда функцию экспорта из{" "}
          <mark className="app">After Effects</mark> и понеслась. Большинство
          пользователей экспортом в этой программе занимались по причине того, что в{" "}
          <mark className="app">After Effects</mark> по стандарту в старых версиях не было
          возможности экспортировать в кодек <mark className="file">H.264</mark>.
        </p>
        <AdditionInfo>
          Если вам нужно поставить на очередь просчёта сразу несколько композиций -
          создайте проект болванку и импортируйте туда несколько своих проектов. Затем вы
          сможете все нужные композиции закинуть в очередь просчёта и начать его,
          предварительно указав нужный формат и расположение.
        </AdditionInfo>
        <p>
          При экспорте напрямую из <mark className="app">After Effects</mark> вы можете
          уберечь себя от ужасов, описанных в списке выше. Надеюсь, что мы убедили вас его
          не использовать.
        </p>
        <AdditionInfo>
          О том, как экспортировать в популярные форматы, вы можете посмотреть в следующих
          пунктах по списку.
        </AdditionInfo>
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
export default AEExport;
