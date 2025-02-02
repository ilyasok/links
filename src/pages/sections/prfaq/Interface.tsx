import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionDanger} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";

const PRInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Interface.tsx" />
      <DetailsSummary title="Как сделать двойной язык интерфейса?">
        <p>
          Если вы не хотите кардинально менять язык программы, то вы можете установить
          &quot;двойной язык&quot; интерфейса. Для этого откройте консоль с помощью
          комбинации клавиш <mark className="key">Ctrl + F12</mark> и переключитесь на
          режим отображения <mark className="ui">Debug Database View</mark>. Далее найдите
          пункты <mark className="ui">ApplicationLanguage</mark> и{" "}
          <mark className="ui">ApplicationLanguageBilingual</mark> и укажите значения{" "}
          <mark className="copy">ru_RU</mark> и <mark className="copy">true</mark>{" "}
          соответственно. После этого перезагрузите программу и теперь во многих пунктах
          интерфейса у вас будет русский язык и в скобках будет эквивалент на английском
          языке.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/set_double_language.png"
          imgTitle="Установка двойного языка"
          caption="Premiere Pro"
        />
        <AdditionDanger>
          Не рекомендуется использовать двойной язык на постоянной основе, так как
          основной язык программы останется русским, а соответственно баги русской
          локализации <mark className="app">Premiere Pro</mark> никуда не денутся от вас.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary title="Куда пропало окно Essential Graphics?">
        <p>
          В <mark className="app">Premiere Pro</mark> версий 2025 и новее панель{" "}
          <mark className="ui">Essential Graphics</mark> убрали и перенесли часть
          функционала в новое окно <mark className="ui">Graphics Templates</mark>. Открыть
          его можно в контекстном меню <mark className="ui">Window</mark>.
        </p>
        <p>
          Из нового окна <mark className="ui">Graphics Templates</mark> вы до сих пор
          можете импортировать <mark className="file">.mogrt</mark> файлы прямиком в ваш
          проект и редактировать их в новом окне <mark className="ui">Properties</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title='Куда пропала кнопка "Set to Frame Size"?'>
        <p>{/* FIXME: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить вид отсчёта времени на таймлайне?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Есть ли аналог FX Console для Premiere Pro?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как включить отображение рабочей области на таймлайне?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Пропала визуализация аудиодорожек на таймлайне, как их вернуть?">
        <p>
          Это довольно частый и неприятный баг, возникающий при использовании{" "}
          <mark className="app">Premiere Pro</mark>. Обычно это лечится очисткой кэша{" "}
          <mark className="file">.peak</mark> файлов.
        </p>
        {/* FIXME: написать!! */}
      </DetailsSummary>{" "}
      <DetailsSummary title="Как отключить выделение объекта на таймлайне при перемещении временной метки?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Куда пропала настройка Timeline в Preferences?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вернуть старый интерфейс окна экспорта?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRInterface;
