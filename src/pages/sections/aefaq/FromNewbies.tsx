import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";

export const AEFromNewbies: React.FC = () => {
  return (
    <div className="faq-content" id="from-newbies">
      <DetailsSummary title="Только установил After Effects, с чего бы мне начать изучение?">
        {/* fixme: больше курсов: по типу вольницы, видеосмайлов, панковского и тд и тп */}
        <p>
          Если вы ранее не работали в программах для композитинга, в том числе и{" "}
          <mark className="app">After Effects</mark>, то вы можете начать проходить курс
          от{" "}
          <a
            href="https://www.youtube.com/channel/UCmLY17yagzLy6GRiI1nVBow"
            title="Канал Ильи Зернова на YouTube"
          >
            Ильи Зернова
          </a>
          . Данный курс поможет вам разобраться в интерфейсе программы и не задавать
          глупых вопросов уже в начале своего пути.
        </p>
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/nogR7eyhYug?si=J6cn-LEwLZasb5vR"
          title="Видеоплеер YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </DetailsSummary>
      <DetailsSummary title="Не понимаю термины от других пользователей программы, проясните!">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных горячих клавиш для работы в After Effects?">
        <p>Конечно!</p>
      </DetailsSummary>
      <DetailsSummary title="Где я могу узнать об нововведениях в обновлениях After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем с каждого угла советуют мне поставить английский язык программы?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как найти нужный эффект на английском языке, если у меня стоит русский язык в After Effects?">
        <p>{/* про колхозный способ двойного языка и про таблицу эффектов */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем мне советуют не менять расположение установки After Effects? А если у меня нет места на жёстком диске?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему предпросмотр проигрывается в хреновом качестве, в пикселях?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Чем отличается Mocha AE от Mocha Pro?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Где-то слышал про секретные настройки, что это такое?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что такое Null Object и как с ним работать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что такое Adjustment Layer и для чего он нужен?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что за решётка у слоя на таймлайне и для чего нужен Guides Layer?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
