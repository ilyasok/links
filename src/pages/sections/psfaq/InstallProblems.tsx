import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";

const PSInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <ul>
          <li>
            Если у вас есть плагин формата <mark className="ui">.ccx</mark>, то вам нужно
            переименовать этот файл в <mark className="ui">.zip</mark> и распаковать его.
            Папку с распакованным содержимым вам нужно переместить в{" "}
            <mark className="path">
              C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
            </mark>
            .
          </li>
        </ul>
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary
        title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?"
        tag="части архива, парт, распаковка, rar, zip"
      >
        <p>
          Данные файлы с пометкой <mark>.part1</mark>, <mark>.part2</mark> и далее по
          списку - это лишь части одного и того же архива. Архивы поделены на 2 или на 4
          Гб из-за ограничений Telegram на размер загружаемых файлов. Чтобы корректно
          распаковать нужный архив - нужно загрузить все файлы на ваш компьютер, а затем
          распаковать с помощью программ-архиваторов.
        </p>
        <AdditionWarning>
          Если вы не распакуете архив полностью, то у вас могут быть проблемы с установкой
          или использованием в программах.
        </AdditionWarning>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                Для Windows есть два популярных архиватора, которые умеют работать с
                многотомными архивами. Это{" "}
                <a
                  href="https://www.rarlab.com/download.htm"
                  title="Официальный сайт WinRAR"
                >
                  WinRAR
                </a>{" "}
                и{" "}
                <a
                  href="https://www.7-zip.org/"
                  title="Официальный сайт 7-Zip"
                >
                  7-Zip
                </a>
                . Но для <mark className="file">.rar</mark> файлов всё-таки лучше подойдёт{" "}
                <a
                  href="https://www.rarlab.com/download.htm"
                  title="Официальный сайт WinRAR"
                >
                  WinRAR
                </a>
                . Для распаковки многотомного архива достаточно лишь открыть первую часть
                и начать распаковку, например с помощью <mark>drag&apos;n&apos;drop</mark>{" "}
                в нужное место или кнопки <mark className="ui">Распаковать</mark>.
              </p>
              <YouTubeVideo
                link="1OVwQS0uHhk"
                caption="Распаковка многотомного архива"
              />
            </div>
          }
          macContent={
            <div>
              <p>
                Для распаковки архивов, в том числе и многотомных, вы можете использовать{" "}
                <a
                  href="https://www.keka.io/ru/"
                  title="Официальный сайт keka"
                >
                  keka
                </a>
                . Он поддерживает кучу различных форматов архивов для распаковки, например{" "}
                <mark className="file">.zip</mark> <mark className="file">.7z</mark>,{" "}
                <mark className="file">.rar</mark>, <mark className="file">.tar</mark> и{" "}
                <mark className="file">.iso</mark>. После установки этой программы вы
                можете распаковать скачанный архив различными способами, как на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Extracting-with-Keka#how-to-extract-supported-files">
                  примерах
                </a>{" "}
                ниже.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <ImageFigure
                  styleClass="figure_macos-light"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                  imgTitle="Распаковка через контекстное меню"
                  caption="Распаковка через контекстное меню"
                />
                <ImageFigure
                  styleClass="figure_macos-light"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-window.gif"
                  imgTitle="Распаковка с помощью открытого окна keka"
                  caption="Распаковка с помощью открытого окна keka"
                />
                <ImageFigure
                  styleClass="figure_macos-light"
                  imgSrc="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-dock.gif"
                  imgTitle="Распаковка через иконку keka в Dock-меню"
                  caption="Распаковка через иконку keka в Dock-меню"
                />
              </div>
              <p>
                Также вы можете установить данную утилиту как программу для распаковки
                архивов по умолчанию, установив{" "}
                <a href="https://www.keka.io/defaultapp/">kekaExternalHelper</a>.
                Подробная инструкция расположена в{" "}
                <a href="https://github.com/aonez/Keka/wiki/Default-application">
                  Wiki на GitHub
                </a>
                .
              </p>
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title='Код ошибки 21 при установке Photoshop или "операционная система не соответствует минимальным требованиям для этой программы установки"'>
        <p>
          Вы пытаетесь установить <mark className="app">Photoshop 2024</mark> или новее на
          Windows 10 сборки 21H2 или старее. Если у вас стоит сборка LTSC, поздравляю -
          новее сборки, чем 21H2 для вас нет, переустанавливайте систему на редакцию Home
          или Pro. Или установите более старые сборки{" "}
          <mark className="app">Photosohp</mark>.
        </p>
        <AdditionInfo>
          Текущую сборку Windows вы можете посмотреть открыв{" "}
          <mark className="app">winver</mark>.
        </AdditionInfo>
        <p>
          Для решения этой проблемы прочтите{" "}
          <a href="https://helpx.adobe.com/ru/photoshop/system-requirements.html">
            системные требования Photoshop
          </a>{" "}
          и найдите раздел про минимальную требуемую операционную систему. На момент
          написания этого пункта требуется минимум Windows 10 22H2 или Windows 11 21H2.
          Затем откройте раздел с обновлениями Windows и обновите систему до максимально
          возможной версии, или установите 22H2 поверх существующей Windows 10.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PSInstallProblems;
