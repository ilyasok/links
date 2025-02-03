import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo} from "../../../components/Additions";
import {VideoFigure} from "../../../components/ContentFigure";

const AEExprStart: React.FC = () => (
  <div className="faq-content">
    <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Start.tsx" />
    <DetailsSummary title="Для чего вообще нужны выражения?">
      <p>
        <mark>Выражения</mark> или же <mark>expression</mark> - это некая сводка правил,
        согласно которому должно высчитываться то или иное значение. В{" "}
        <mark className="app">After Effects</mark> вычисления выражений происходит с
        помощью языка программирования <mark>JavaScript</mark>, но он здесь не такой же,
        как для браузеров.
      </p>
      <AdditionInfo>
        В старых версиях <mark className="app">After Effects</mark> использовался свой
        скриптовый язык - <mark>ExtendScript</mark>. Сейчас он считается устаревшим, но на
        него всё ещё можно перейти в настройках проекта. На этой странице будут
        затрагиваться примеры с использованием только <mark>JavaScript</mark> в настройках
        проекта.
      </AdditionInfo>
      <p>
        С помощью выражений вы можете задать случайное движение объекту, связать свойства
        того или иного параметра, вычислить значение согласно заданным условиям или просто
        отформатировать текст. Вариаций для использования выражений множество, но в
        некоторых случаях можно обойтись без них.{" "}
      </p>
      {/* TODO: написать!! */}
    </DetailsSummary>{" "}
    <DetailsSummary title="Как включить режим написания выражения для конкретного параметра?">
      <p>
        Для того, чтобы включить выражение для какого-нибудь параметра, просто нажмите на
        иконку секундомера с зажатым <mark className="key">Alt</mark>. После активации
        режима выражений для конкретного параметра вы сможете писать код внутри текстового
        поля.
      </p>
      <VideoFigure
        styleClass="figure_windows-dark"
        videoSrc="images/aftereffects/enable_expressions.mp4"
        caption="After Effects"
      />
    </DetailsSummary>
    <DetailsSummary title="Как отобразить результат выражения в графике скорости?">
      <p>{/* FIXME: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Как удалить выражения сразу в нескольких слоях?">
      <p>{/* FIXME: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Как вывести результат выражения?">
      <p>{/* FIXME: написать */}</p>
    </DetailsSummary>
    <DetailsSummary title="Мне не нравится редактировать выражения внутри After Effects. Есть ли варианты редактирования в стороннем редакторе кода?">
      <p>
        Если вам не удобно писать по каким-то причинам выражение внутри самого{" "}
        <mark className="app">After Effects</mark>, то вы можете воспользоваться{" "}
        <mark className="app">VS Code</mark> для написания в нём выражений и отправки из
        него прямиком на выделенный параметр в <mark className="app">After Effects</mark>.
      </p>
      <p>
        Скачать <mark className="app">VS Code</mark> можно{" "}
        <a href="https://code.visualstudio.com/download">из официального сайта</a>.
      </p>
      <p>
        После установки данного редактора, нам нужно отправиться в список расширений.
        Открыть его можно с помощью комбинации клавиш{" "}
        <mark className="key">Ctrl + Shift + X</mark>. Оттуда нам нужно скачать несколько
        расширений.
      </p>
      {/* FIXME: написать!! */}
    </DetailsSummary>
    <DetailsSummary title="Можно ли использовать GPT и аналогичные чат-боты для генерации выражений?">
      <p>
        Мнение по этому вопросу у всех будет разное. Моё мнение - и да, и нет. Не смотря
        на то, что язык выражений в какой-то степени схож с стандартным JavaScript,
        который мы видим в браузерах, он имеет свои особенности. Прежде чем писать запрос
        различным чат-ботам для создания выражения - уточните, что вы собираетесь
        использовать код в <mark className="app">After Effects</mark> и приготовьтесь к
        тому, что вам нужно будет часто давать текст ошибки, чтобы его устранить.
      </p>
      {/* FIXME: написать */}
    </DetailsSummary>
  </div>
);
export default AEExprStart;
