import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";

const AEPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Performance.tsx" />
      <DetailsSummary title="Почему у меня, б%@#ь, лагает е&#!%й After Effects, с$%а?">
        <p>
          Здесь по этому вопросу можно рассуждать долго и бесконечно. Тут нельзя назвать
          конкретную причину этого магического явления, так как всё обычно упирается в
          действия пользователя или в железо его устройства. Программа не любит, когда вы
          накидываете кучу эффектов, называя свою композицию &quot;эдитом&quot;, не любит
          когда вы пытаетесь монтировать часовое видео в{" "}
          <mark className="app">After Effects</mark> либо просто программе не нравятся
          ваши исходники.
        </p>
        <p>
          Для начала, пожалуйста, проверьте ваше устройтсво на соответствие{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            системным требованиям
          </a>{" "}
          для <mark className="app">After Effects</mark>. На момент написания этого пункта
          для адекватной работы требуется минимум 16 Гб ОЗУ (для более комфортной работы -
          минимум 32 Гб ОЗУ) и процессор от Intel минимум 8-го поколения или AMD Ryzen
          минимум 1000 серии.
        </p>
        <AdditionWarning>
          С <mark className="app">After Effects 2024</mark> и новее требуются процессоры с
          поддержкой инструкций AVX2. Если у вашего процессора нет таких инструкций, то
          для вас последняя версия программы - <mark>23.6</mark>, более свежую вы не
          сможете поставить,{" "}
          <del style={{opacity: "0.5"}}>
            если не вырезать требования к процессору при установке
          </del>
          .
        </AdditionWarning>
        <p>
          Предположим, что ваше устройство прекрасно соответствует системным требованиям и
          вы начинаете работу, постепенно накидывая в композиции кучу различных эффектов.
          И как раз из-за них вся производительность падает, особенно если вы используете
          сторонние плагины из пакетов от <mark>BorisFX</mark> или <mark>Red Giant</mark>.
          Постарайтесь не устанавливать кучу плагинов и расширений в{" "}
          <mark className="app">After Effects</mark>, а также не мешать в проекте кучу
          эффектов с одинаковой сутью, но из разных пакетов, например{" "}
          <mark className="plugin">BCC Camera Shake</mark> и{" "}
          <mark className="plugin">uni.shake</mark>. Иногда неверная очерёдность эффектов
          может привести к непредвиденным результатам, а также к снижению
          производительности.
        </p>
        <AdditionInfo>
          По умолчанию в <mark className="app">After Effects</mark> 2022 и новее включена
          функция <mark className="ui">Cache Frames When Idle</mark>, которая начинает
          кэширование композиции, когда вы ничего не делаете. Часто на слабых устройствах
          эта функция заставляет тормозить программу и систему, поэтому рекомендую его
          отключить. Для этого достаточно прожать комбинацию клавиш{" "}
          <mark className="key">Alt + Shift + I</mark> или выключить его в{" "}
          <mark className="ui">Composition &gt; Preview</mark>.
        </AdditionInfo>
        <p>
          В <mark className="app">After Effects</mark> с версий 2022 и новее добавили
          функционал <mark className="ui">Render Time</mark>, позволяющий увидеть время
          рендера того или иного эффекта в ваших слоях. С помощью него можно
          проанализировать производительность вашего проекта и по возможности
          оптимизировать его, заменив эффекты на более лёгкие или убрав их. Также внизу
          пишется общее время рендера текущего кадра, вычисляя время рендера всех слоев.
        </p>
        <AdditionInfo>
          Чтобы включить отображение времени рендера того или иного слоя, нажмите на
          иконку улитки в левом нижнем углу окна таймлайна или включите колонку{" "}
          <mark className="ui">Render Time</mark> в пункте{" "}
          <mark className="ui">Columns</mark>, нажав <mark className="key">ПКМ</mark> по
          столбцам.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/view_render_time.png"
          imgTitle="Смотрим время рендера слоя"
          caption="Timeline"
        />
        <p>
          Теперь перейдём к другой категории проблем пользователя, связанных с исходниками
          видео, фото и аудио. Часто пользователи скачивают различные файлы, пережатые
          непонятно во что и импортируют в программу, а потом через некоторое время
          замечают некоторые проблемы: артефакты, баги или вообще снижению
          производительности при банальных действиях с композицией.
        </p>
        <p>
          Если вы скачали видео в формате .mp4, то вам необходимо переконвертировать его в
          срочном порядке в <mark className="video">Apple ProRes 422</mark> или{" "}
          <mark className="video">DNxHR</mark> через{" "}
          <mark className="app">Media Encoder</mark> или{" "}
          <mark className="app">Shutter Encoder</mark>. Это делать нужно каждый раз,
          прежде чем импортировать файлы в <mark className="app">After Effects</mark>,
          полученные через YouTube или другие подобные площадки. Вы спросите, &quot;а
          почему?&quot;, а ответ прост - такие видео запакованы непонятно в что и могут
          плохо крутиться программой.
        </p>
        <p>
          Если ваше видео закодировано с переменным FPS (узнать об этом можно через{" "}
          <mark className="app">MediaInfo</mark>), то такие файлы нужно переконвертировать
          через выше названные утилиты в постоянный (Constant) FPS.
        </p>
        <YouTubeVideo
          link="MprgQSTqL9E"
          caption="Типы кодеков и их применение"
        />
        <p>
          Также чтобы исключить проблемы с звуковыми дорожками - аудио-файлы тоже следует
          переконвертировать, например в <mark className="file">.wav</mark>, ведь оно
          может проигрываться рыками, замедленно или с другими звуковыми багами.
          Переконвертировать аудио можно также через{" "}
          <mark className="app">Media Encoder</mark>,{" "}
          <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">EZ CD Audio Converter</mark>.
        </p>
        <p>
          В редких случаях проблемы с производительностью могут возникнуть из-за шрифтов в
          проекте. Да, такое бывает, когда пользователь использует кривой шрифт и даже не
          догадывается об этом. Для решения этой проблемы достаточно заменить шрифт на
          аналогичный или скачать его из другого источника.
        </p>
        <p>
          Также важную роль в производительности программы играет накопитель, на котором
          установлена программа и на котором лежат исходники. Если вы с{" "}
          <mark>M.2 SSD</mark> особых проблем не почувствуете, то при работе с исходниками
          с <mark>HDD</mark>, особенно медленных и потрёпанных жизнью, могут начаться
          проблемы. Если у вас есть <mark>SSD</mark> с большим объёмом памяти - следует
          перенести весь проект туда и продолжить работу, используя его.
        </p>
        {/* TODO: дополнить при возможности */}
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
      <DetailsSummary title="Зачем люди переключают рендер на процессор, если есть видеокарта? Как мне переключить рендер на процессор?">
        <p>
          Несмотря на то, что в окне менеджера проекта можно включить видеокарту,
          программа не будет использовать его во многих случаях, особенно когда вы
          применяете CPU-эффекты вместе с GPU-эффектами. Рендер на процессоре (или же при
          включенном пункте <mark className="ui">Mercury Software Only</mark>) может
          уменьшить количество возможных артефактов и багов после экспорта вашего проекта,
          нежели при использовании псевдо-GPU-ускорения.
        </p>
        <p>
          Для изменения, на чём выполнять рендеринг, нужно перейти в{" "}
          <mark className="ui">Project Manager</mark>. Его можно открыть комбинацией
          клавиш <mark className="key">Ctrl + Alt + Shift + K</mark>. В вкладке{" "}
          <mark className="ui">Video Rendering and Effects</mark> можно выбрать то, что
          нам нужно, а именно <mark className="ui">Mercury Software Only</mark> для
          включения рендера на процессоре.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/project_manager_mercury.png"
          imgTitle="Переключение типа рендера"
          caption="Project Manager"
        />
        <ul>
          <li>
            <mark className="ui">Mercury Software Only</mark> позволяет{" "}
            <mark className="app">After Effects</mark> реже прибегать к использованию
            видеокарты и использовать в большинстве случаев рендеринг на процессоре.
            <AdditionInfo>
              При включенном <mark className="ui">Mercury Software Only</mark>{" "}
              какой-нибудь сторонний эффект всё же может просчитаться через GPU при
              необходимости, например <mark className="plugin">Depth Scanner</mark>.
              Обычно это поведение можно изменить в настройках стороннего плагина.
            </AdditionInfo>
          </li>
          <li>
            <mark className="ui">Mercury GPU Acceleration (CUDA или OpenCL)</mark>{" "}
            использует процессор и видеокарту, но видеокарта никогда не будет
            гарантированна использоваться во всех случаях, она будет использоваться только
            при необходимости самой программой.
            <AdditionWarning>
              На видеокартах с малым объёмом VRAM лучше не использовать этот пункт, ибо
              будете часто сталкиваться с ошибкой{" "}
              <mark>
                After Effects has encountered a failure related to GPU-enabled effects
                from this frame
              </mark>
              .
            </AdditionWarning>
          </li>
        </ul>
        <p>
          При включенном пункте <mark className="ui">Mercury Software Only</mark>, то есть
          при рендере на процессоре, время просчёта композиций может измениться в худшую
          сторону, но зачастую остаётся неизменным. Иногда при рендеринге на процессоре
          просчёт может пройти быстрее, чем при использовании{" "}
          <mark className="ui">Mercury GPU Acceleration</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Предпросмотр идёт как-будто в slow-motion, что делать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEPerformance;
