import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";

const AEInterface: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Interface.tsx" />
      <DetailsSummary title="Как включить отображение границ слоёв?">
        <p>
          Для включения отображения границ слоёв и их манипуляторов в окне предпросмотра,
          нажмите на комбинацию клавиш <mark className="key">Ctrl + Shift + H</mark> или
          нажмите на соответствующую иконку в окне предпросмотра и продолжайте работу.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/view_layer_bounds.png"
          imgTitle="Включение отображение границ масок и слоёв"
          caption="Composition"
        />
        <p>
          Если вы всё ещё не видите то, что вам нужно с этой включённой опцией, проверьте
          настройки <mark className="ui">View Options</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + U</mark> и выставьте галочки рядом со всеми
          пунктами.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/view_options.png"
          imgTitle="Настройка отображения параметров слоя"
          caption="View Options"
        />
      </DetailsSummary>
      <DetailsSummary title="Случайно закрыл окно в интерфейсе, как мне его вернуть?">
        <p>
          Для восстановления закрытого окна перейдите в <mark className="ui">Window</mark>{" "}
          и выберите нужное вам окно. Также в этом пункте можно открыть окна расширений
          или переключаться между рабочими пространствами.
        </p>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/aftereffects/open_window.mp4"
          caption="Восстановление закрытого окна"
        />
        <p>
          Чтобы закрыть окно, нажмите на три полоски возле заголовка окна и нажмите на{" "}
          <mark className="ui">Close Panel</mark>. Или нажмите на крестик слева от
          выбранного заголовка окна.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как мне прикрепить нужное окно в рабочее пространство программы?">
        <p>
          Для того, чтобы прикрепить окно к рабочему пространству, нужно зажать курсор в
          районе названия окна и перетащить его в нужное место. Программа предложит вам
          прицепить его внутрь окна или в сторону.
        </p>
        <AdditionWarning>
          Цепляться нужно именно за название вкладки в интерфейсе самого{" "}
          <mark className="app">After Effects</mark>, а не за заголовок окна, создаваемый
          вашей операционной системой.
        </AdditionWarning>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/attach_window.mp4"
          caption="Прикрепление окна в рабочее пространство"
        />
        <p>
          Чтобы отцепить окно, нажмите на три полоски возле заголовка окна и нажмите на{" "}
          <mark className="ui">Undock Panel</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу прикрепить окно скрипта и как мне его в конце концов закрепить?">
        <p>{/* FIXME: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как поставить несколько окон во вкладки или расположить их по списку?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Пропали нужные переключатели и колонки на таймлайне. Как мне их вернуть?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Компьютер во время работы упал в BSOD и испортил мне настройки. Как мне их восстановить?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Установил After Effects 2023 или новее и не могу понять, что стало с Track Matte?">
        <p>
          С версий 2023 и новее пришла новая эпоха работы с масками. Теперь старые
          обучающие видео будут вводить новичков с новыми версиями в заблуждение, а новые
          - пользователей с старыми версиями <mark className="app">After Effects</mark>.
        </p>
        <YouTubeVideo
          link="2Fi57LLJrUE"
          caption="Обновление вкладки Track Matte"
        />
        <AdditionInfo>
          Дополнительную информацию об обновлении работы с масками можно{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/track-mattes-and-traveling-mattes.html">
            прочитать на сайте Adobe
          </a>
          .
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='Бесит окно "Properties", как отключить его автоматическое открытие?'>
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как включить всплывающую панель для применения эффектов, которая открывается с помощью Ctrl+Space?">
        <p>
          То, что описано в этом вопросе - не является встроенной функцией{" "}
          <mark className="app">After Effects</mark>. Здесь идёт речь об стороннем плагине{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">FX Console</a>.
        </p>
        <p>
          С помощью этого плагина действительно можно быстро применить эффект на
          выделенный слой, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Space</mark>. Также с помощью него можно быстро
          создать скриншот текущего кадра в файл или в буфер обмена
        </p>
        <AdditionInfo>
          Для создания скриншотов с полным разрешением - укажите пункт{" "}
          <mark className="ui">Full Resolution Screenshots</mark> в настройках плагина.
          Там же можно и переназначить комбинацию клавиш для открытия окна плагина.
        </AdditionInfo>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/fx_console_demonstration.mp4"
          caption="Демонстрация плагина FX Console"
        />
      </DetailsSummary>
      <DetailsSummary title="Как мне установить свой процент масштабирования предпросмотра?">
        <p>
          Многих пользователей бесит, что по умолчанию в{" "}
          <mark className="app">After Effects</mark> в предпросмотре нельзя установить
          свой процент масштабирования, доступны только жалкие фиксированные значения:{" "}
          <mark>25%</mark>, <mark>33.3%</mark>, <mark>50%</mark>, <mark>100%</mark> и
          прочие. К счастью, есть сторонний плагин <mark className="plugin">ae-zoom</mark>
          , который создаёт окно с регулировкой своего процента масштабирования в
          предпросмотре и решает проблему. Скачать его можно на{" "}
          <a href="https://github.com/QuisPic/ae-zoom/releases">
            странице релизов в GitHub
          </a>
          .
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="https://private-user-images.githubusercontent.com/56075863/246931354-811d3433-8170-491e-a2c7-bca56bbf998d.webm?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU2NTEwMDEsIm5iZiI6MTczNTY1MDcwMSwicGF0aCI6Ii81NjA3NTg2My8yNDY5MzEzNTQtODExZDM0MzMtODE3MC00OTFlLWEyYzctYmNhNTZiYmY5OThkLndlYm0_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjMxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIzMVQxMzExNDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kNDhkNDQ3M2ZmZTZiZjdlMWRkODcxNGFhOTg0ZTJlZmQ3NGExNTAxOWRhMGI5NWUzY2U0ZWU2ZmMyZTZkY2VjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9D5_lxHrEFFfZDskkKA7RawakaMB45UojRfQVDsUxjk"
          caption="Демонстрация плагина ae-zoom"
        />
        <ContentSwitcher
          windowsContent={
            <div>
              <ul>
                <li>
                  Чтобы установить это расширение для изменения масштабирования
                  предпросмотра, вам нужно перенести файл{" "}
                  <mark className="file">Zoom.jsx</mark> из архива в стандартную папку для
                  скриптов:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts\
                  </mark>
                  .
                </li>
                <li>
                  Затем перенесите <mark className="file">Zoom.aex</mark> из папки архива{" "}
                  <mark className="path">Plug-in/Windows</mark> в общую папку для
                  плагинов:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                </li>
              </ul>
              <p>
                После установки расширения вы сможете его открыть в{" "}
                <mark className="ui">File &gt; Scripts</mark> и регулировать
                масштабирование как вашей душе угодно.
              </p>
            </div>
          }
          macContent={
            <div>
              <ul>
                <li>
                  Чтобы установить это расширение для изменения масштабирования
                  предпросмотра, вам нужно перенести файл{" "}
                  <mark className="file">Zoom.jsx</mark> из архива в стандартную папку для
                  скриптов:{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Scripts/
                  </mark>
                  .
                </li>
                <li>
                  Затем перенесите <mark className="file">Zoom.plugin</mark> из папки
                  архива <mark className="path">Plug-in/macOS</mark> в общую папку для
                  плагинов:{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  .
                </li>
              </ul>
              <p>
                После установки расширения вы сможете его открыть в{" "}
                <mark className="ui">File &gt; Scripts</mark> и регулировать
                масштабирование как вашей душе угодно.
              </p>
            </div>
          }
        />
        <AdditionInfo>
          Если вы хотите сделать прикрепляемое окно для масштабирования, то переместите{" "}
          <mark className="file">Zoom.jsx</mark> в дочернюю папку{" "}
          <mark className="path">Script UI Panels</mark>. Тогда скрипт будет открываться
          из пункта <mark className="ui">Window</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как убрать пикселизацию предпросмотра при перемещении плейхеда?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Где найти Front View, Current Camera и прочие варианты отображения камеры?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как отключить автоматическое кэширование предпросмотра при бездействии?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу поставить плейхед в самый конец композиции?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="У меня есть два ключа с одинаковым значением, но между ними всё равно идёт какая-то анимация. Как её убрать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Я использую After Effects 2019 и в нём не выделяется объект в Rotobrush, что делать?">
        <p>
          Скорее всего вы столкнулись с багом этой версии, если вы используете репак от
          KpoJluk. Проблема решается откатом до CC 2018, установкой{" "}
          <mark className="app">After Effects 2019</mark> сборки от m0nkrus или установкой
          более свежих версий программы.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как отключить экран со списком недавних проектов при запуске?">
        <p>
          Иногда при открытии <mark className="app">After Effects</mark> открывается
          домашнее окно с приветствием и списком недавних проектов. На некоторых
          устройствах или старых версиях <mark className="app">After Effects</mark>{" "}
          загрузка данного окна занимает относительно много времени. За это время
          пользователь мог бы создать новую композицию и уже начать работу.
        </p>
        <p>
          К счастью, это окно можно отключить. Для отключения стартового окна со списком
          недавних проектов - откройте настройки{" "}
          <mark className="app">After Effects</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + ; (Ж)</mark>, перейдите в раздел{" "}
          <mark className="ui">Startup & Repair</mark> и выключите пункт{" "}
          <mark className="ui">Enable Home Screen</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/enable_home_screen.png"
          imgTitle="Переключаем отображение домашнего экрана"
          caption="Preferences"
        />
        <AdditionInfo>
          Если вы хотите оставить стартовое окно, но оно у вас не грузится корректно -
          попробуйте войти в аккаунт Adobe. Это можно сделать через{" "}
          <mark className="ui">Help &gt; Sign In</mark>. После входа псевдо-лицензия не
          слетит.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить картинку во время запуска программы?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Где-то слышал про секретные настройки, что это такое?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEInterface;
