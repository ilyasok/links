import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionDanger, AdditionInfo} from "../../../components/Additions";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import {YouTubeVideo} from "../../../components/ContentFigure";

export const AEFromNewbies: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="from-newbies"
    >
      <DetailsSummary title="Первый раз установил After Effects, с чего бы мне начать обучение?">
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
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="https://www.youtube.com/embed/nogR7eyhYug"
          caption="Видеоплеер YouTube"
        />

        <p>
          Если вы уже знакомы с интерфейсом программы, но испытываете трудности с
          насмотренностью - изучите каналы на YouTube ниже.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/@TutoView">Tutorial View+</a>{" "}
          <a href="https://www.youtube.com/@BenMarriott">Ben Marriott</a>{" "}
          <a href="https://www.youtube.com/@AEPlug">AEPlug</a>{" "}
          <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a>
        </div>
        <p style={{textAlign: "center"}}>
          Надеюсь что вы найдете для себя что-то полезное. Удачи в начинаниях!
        </p>
      </DetailsSummary>
      <DetailsSummary title="Не понимаю термины от других пользователей программы, проясните!">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="А есть список популярных горячих клавиш для работы в After Effects?">
        <p>Конечно!</p>
      </DetailsSummary>
      <DetailsSummary title="Где я могу узнать об нововведениях в обновлениях After Effects?">
        <p>
          Обычно на сайте Adobe в день выхода публичной стабильной версии выкладываются
          основные нововведения. Это сделано для того, чтобы каждый прохожий не спрашивал
          из каждого угла <mark>&quot;А что обновилось то?&quot;</mark>
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
        </div>
        <p>
          Время от времени Adobe также выкладывает на сайт список выявленных неполадок и
          старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/ru/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">After Effects</mark>, а также сторонние плагины, чтобы
          исключить возможные проблемы при дальнейшем использовании программы. Многие баги
          из старых версий уже исправлены, например утечка ОЗУ или смещение кадра при
          рендере.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Хочу обновиться с одного года программы на другой. Как мне перенести плагины без танцев с бубнами?">
        <AdditionDanger>
          Данный способ обновления не гарантирует 100% стабильность работы новой версии
          программы, поэтому обновляйтесь таким способом на свой страх и риск. Если после
          такого способа обновления вы столкнулись с трудностями в работе - переустановите
          программу начисто, предварительно удалив предыдущие версии с помощью{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>
          .
        </AdditionDanger>
        <p>
          Прежде чем обновить программу без потери плагинов - вам нужно переименовать
          папку установленной программы в{" "}
          <mark className="path">C:\Program Files\Adobe</mark>. Для этого дублируем
          исходную папку с программой, убираем приставку <mark>- копия</mark> и меняем
          номер года на нужный.
        </p>
        <AdditionInfo>
          Если вы обновляетесь, например, с 2022 на 2025 - вы должны переименовать новую
          дублированную папку в <mark className="file">Adobe After Effects 2025</mark>.
        </AdditionInfo>
        <p>
          После успешного переименования папки - откройте установщик новой версии
          программы. Она должна увидеть продублированную папку и предложить установить в
          неё. Далее выбираем нужный язык программы и нажимаем на{" "}
          <mark className="ui">Продолжить</mark>. После установки новая версия программы
          предложит вам перенести настройки со старой версии, с чем мы и соглашаемся.
          После успешного запуска программы проверьте - всё ли на месте и продолжайте
          работу как ни в чём не бывало.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Зачем с каждого угла советуют мне поставить английский язык программы и как мне это сделать?">
        <p>
          Установив английскую версию программы - вы оберегаете себя от возможных ошибок с
          выражениями или кривой работы сторонних плагинов. Не все выражения и плагины
          спокойно дружат с языками, отличными от английского.
        </p>
        <p>
          Также при начале своего пути - вам будет гораздо легче найти нужный туториал по
          определённому эффекту на английском языке в котором будет продемонстрирована
          работа английской версии. Ещё будет легче находить эффекты, потому что на
          русской локализации некоторые эффекты максимально нелогично переведены.
        </p>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                Для быстрой смены языка программы на английский - просто создайте пустой
                текстовый документ <mark className="file">ae_force_english.txt</mark>. В
                текстовый файл ничего прописывать не надо. Созданный пустой текстовый
                документ переместите в папку{" "}
                <mark className="path">%USERPROFILE%/Documents</mark>, а затем
                перезапустите <mark className="app">After Effects</mark>. После этого у
                вас программа станет на английском языке.
              </p>
              <p>
                Создать пустой текстовый документ можно с помощью команды ниже в командной
                строке Windows. Через <mark className="app">PowerShell</mark> эта команда
                не будет работать, используйте <mark className="app">cmd</mark>.
              </p>
              <code>
                echo.{">"}&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
              </code>
              <AdditionDanger>
                После такого способа смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановить программу сразу на русский язык.
              </AdditionDanger>
            </div>
          }
          macContent={
            <div>
              <p>{/* fixme: написать */}</p>
            </div>
          }
        />
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
