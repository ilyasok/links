import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure} from "../../../components/ContentFigure";
import {AdditionWarning} from "../../../components/Additions";

const PRActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Actions.tsx" />
      <DetailsSummary title="Как и чем разделить голос человека от музыки?">
        <p>
          В век различных технологий по обработке звука обычному пользователю наконец-то
          стала доступна возможность разделить голос и &quot;инструментал&quot; на разные
          дорожки с помощью искусственного интеллекта. Онлайн-сервисы здесь рассматривать
          даже не хочется, так как часто они предлагают &quot;очень смешные&quot; условия
          для бесплатных пользователей: либо один файл в день, либо только для
          прослушивания без дальнейшего скачивания.
        </p>
        <p>
          <mark className="app">StemRoller</mark>, наверное, самая адекватная и локальная
          программа для разделения трека на 4 или 6 дорожек (биты, инструментал, бас и
          голос). Скачать его можно{" "}
          <a href="https://www.stemroller.com/">по этой ссылке</a> для устройств на
          Windows и macOS.
        </p>
        <p>
          После распаковки архива с программой, его можно открыть и спокойно закинуть в
          него свой аудио-файл. После обработки ваше аудио будет расположено в папку,
          которая указана в настройках программы. Также его можно открыть, нажав на
          элемент очереди файлов.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/stemroller_interface.png"
          imgTitle="Главная страница StemRoller"
          caption="StemRoller"
        />
        <AdditionWarning>
          Скорость обработки аудио-файла зависит от мощности вашего устройства, обычно оно
          максимум занимает 2-3 минуты. Если вы сталкиваетесь с трудностями в обработке,
          то попробуйте переключить обработку на процессоре в настройках программы.
        </AdditionWarning>
        <p>
          Если же вам всё-таки нужен онлайн-сервис для разделения музыки от голоса, то вы
          можете воспользоваться <a href="https://vocalremover.org/ru/">Vocalremover</a>.
          Сервис предлагает пользователям без подписки обработку одного аудио-файла в
          день.
        </p>
        <AdditionWarning>
          После обработки сразу сохраните обработанный аудио-файлы, чтобы их не потерять.
          Сервис не предусматривает возможность восстановления аудио-файлов после закрытия
          или смены страницы.
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};

export default PRActions;
