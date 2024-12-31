import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";

const AEPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Performance.tsx" />
      <DetailsSummary title="Почему у меня, б%@#ь, лагает е&#!%й After Effects, с$%а?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как заставить программу использовать всю мощь компьютера?">
        {/* я заплатил за весь спидометр и я буду использовать весь спидометр */}
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как отключить автоматическое кэширование предпросмотра при бездействии?">
        <p>
          Функция автоматического кэширования кадров во время простоя была добавлена в{" "}
          <mark className="app">After Effects</mark> версии 2022 и новее, а также включена
          по умолчанию. Но эта функция часто мешает комфортной работе с проектом на слабых
          компьютерах или с нагруженными эффектами, нагружая системные компоненты лишний
          раз и заполняя оперативную память. Благо в Adobe додумались ввести параметр для
          отключения кэширования в простое.
        </p>
        <p>
          Для отключения автоматического кэширования при бездействии пользователя,
          перейдите в <mark className="ui">Composition &gt; Preview</mark> и выключите
          галочку <mark className="ui">Cache Frames When Idle</mark> или прожмите
          комбинацию клавиш <mark className="key">Alt + Shift + I</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="/images/aftereffects/disable_idle_cache.png"
          imgTitle="Отключение автоматического кэширования предпросмотра при бездействии"
          caption="After Effects"
        />
        <p>
          Если вы не хотите отключать эту функцию, но хотите изменить время, после
          которого начнётся автоматического кэширования, то перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Previews</mark>. В пункте{" "}
          <mark className="ui">Idle Delay Before Caching Starts</mark> вы можете указать
          любое число от <mark>2</mark> до <mark>15</mark>.
        </p>
        <AdditionInfo>
          Чуть ниже этого пункта можно настроить область кэширования и направление
          кэширования: вокруг временной метки, от временной метки или от начала рабочей
          области.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/change_time_idle_cache.png"
          imgTitle="Изменение времени для автоматического кэширования при бездействии"
          caption="Preferences"
        />
      </DetailsSummary>
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Предпросмотр идёт как-будто в slow-motion, что делать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEPerformance;
