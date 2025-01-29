import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo} from "../../../components/Additions";

const AEExprStart: React.FC = () => {
  return (
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
          скриптовый язык - <mark>ExtentedScript</mark>. Сейчас он считается устаревшим,
          но на него всё ещё можно перейти в настройках проекта. На этой странице будут
          затрагиваться примеры с использованием только <mark>JavaScript</mark> в
          настройках проекта.
        </AdditionInfo>
        <p>
          С помощью выражений вы можете задать случайное движение объекту, связать
          свойства того или иного параметра, вычислить значение согласно заданным условиям
          или просто отформатировать текст. Вариаций для использования выражений
          множество, но в некоторых случаях можно обойтись без них.{" "}
        </p>
        {/* TODO: написать!! */}
      </DetailsSummary>{" "}
      <DetailsSummary title="Как включить режим написания выражения для конкретного параметра?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как отобразить результат выражения в графике скорости?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как удалить выражения сразу в нескольких слоях?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как выводится результат выражения?">
        <p>{/* FIXME: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Мне не нравится редактировать выражения внутри After Effects. Есть ли варианты редактирования в стороннем редакторе кода?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Можно ли использовать GPT и аналогичные чат-боты для генерации выражений?">
        <p>{/* FIXME: написать */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEExprStart;
