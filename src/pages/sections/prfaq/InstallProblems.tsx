import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";

const PRInstallProblems: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?">
        <p>
          {/* FIXME: дописать до конца */}
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
              {/* TODO: добавить видео по распаковке многотомных архивов через винрар */}
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
      <DetailsSummary title="Установил VST-плагины, но они не отображаются в Premiere Pro. Где их включить?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Я установил BorisFX Sapphire, но при открытии Premiere Pro или Media Encoder - программа вылетает">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='"Не удаётся найти helper.exe", "Обнаружены угрозы" или как отключить Windows Defender?'>
        <p>
          Когда вы встаёте на путь пиратства, нередко можно заметить постоянные жалобы на
          то, что встроенный антивирус в Windows удаляет файлы, мол там вирус. Из-за этого
          у пользователей возникает паника и фальшивые мнения о том, что в &quot;вот в
          складе/аетемпе вирусы водятся!!1!&quot; и всякое в таком духе.
        </p>
        <p>
          Для того, чтобы нормально установить программы, плагины или вас бесит ложное
          срабатывание встроенного антивируса - вам следует отключить{" "}
          <mark className="app">Windows Defender</mark> на время. Ну или навсегда, если
          доверяете своей голове и источникам, откуда вы ставите софт.
        </p>
        <p></p>
      </DetailsSummary>
      <DetailsSummary title='Скачал репак от KpoJluK, а мне пишут "Некоторые установочные файлы были повреждены"'>
        <p>
          Вы не докачали <mark className="file">.exe</mark> файл до конца или прервали его
          скачивание. В таком случае перекачайте файл и попробуйте открыть его еще раз.
          Иногда при скачивании репака или при распаковке архива ваш антивирус может
          вставить палки в колёса. Поэтому при скачивании, распаковки или открытии репака
          вам нужно отключить на время ваш антивирус.
        </p>
        <AdditionInfo>
          Если вы полностью скачали файл с канала{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и вы уверены,
          что проблема не на вашей стороне - сообщите об этом в комментариях под постом.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title='Скачал репак от KpoJluK, а мне утверждают, что "rsload.net заблокирован в hosts"'>
        <p>
          Такое бывает, если в вашей системе отсутствует файл{" "}
          <mark className="file">hosts</mark>. Для этого вам нужно создать пустой
          текстовый документ с названием <mark className="file">hosts</mark> без
          расширения <mark className="file">.txt</mark>. Затем нужно открыть этот файл и
          вписать строки, в зависимости от вашей системы{" "}
          <a href="https://support.microsoft.com/ru-ru/topic/%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-hosts-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">
            (подробнее на сайте Microsoft)
          </a>
          .
        </p>
        <p>
          Как только вы создали файл <mark className="file">hosts</mark> и внесли нужные
          строки - вам нужно переместить этот файл в путь{" "}
          <mark className="path">%WinDir%\System32\Drivers\etc</mark>. После перемещения
          попробуйте открыть репак снова и начать установку. Такая ошибка должна
          исчезнуть.
        </p>
      </DetailsSummary>
      <DetailsSummary title='Перед установой программы с помощью репака от KpoJluK, я забыл убрать галку с пункта "Реклама". Что делать и как избавиться от его последствий?'>
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Правда ли, что в репаках Кролика, Монкруса и остальных релизеров водятся вирусы?">
        <p>
          Я всё ещё не понимаю, откуда идут байки про вирусы. Наверное от тех людей, кто
          скачивал из сомнительных источников или попался на фейковый &quot;репак&quot;, в
          которых вместе с оригиналом добавлялся неприятный бонус.
        </p>
        <p>
          Если у вас включилась паника при виде срабатывания антивируса, мол &quot;в вашей
          системе нашёлся вирус!&quot; - не спешите орать что в &quot;репаках от
          кролика/монкруса&quot; реально водятся зловреды. Обычно антивирусы ложно
          срабатывают на замену оригинальных файлов, чтобы подсунуть псевдо-лицензию и не
          платить за софт и помечают такое действие как{" "}
          <mark>HackTool:Win32/Crack!MTB</mark>. Также антивирус может сожрать файл{" "}
          <mark className="file">helper.exe</mark>, который распаковывает дистрибутивы
          Adobe из-за того, что в нём находится галочка &quot;реклама&quot; и помечает это
          как <mark>Contrebrew.A!ml</mark>.
        </p>
        <p>
          Логичней всего проверять вашу систему на вирусы уже после установки программ, а
          не во время. И не паниковать лишний раз и не распускать слухи.
        </p>
        <AdditionDanger>
          Используя пиратские версии ПО - вы сами принимаете на себя риск и вы сами
          выбираете, ставить ли &quot;репаки&quot; или нет.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary title="Не доверяю Кролику, Монкрусу и в принципе всем репакам, но установить программы от Adobe хочу. Какие есть ещё варианты?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Установил Premiere Pro и Media Encoder, но они не видят друг друга и не подключаются. Как это исправить?">
        <p>
          Функция Dynamic Link позволяет синхронизировать композиции из{" "}
          <mark className="app">Premiere Pro</mark> и очередь рендера в{" "}
          <mark className="app">Media Encoder</mark>. Но не всегда их получается
          подружить.
        </p>
        <p>
          Иногда <mark className="app">Premiere Pro</mark> при попытке отправить секвенцию
          на очередь рендера в <mark className="app">Media Encoder</mark> выдаёт просьбу
          мол &quot;чувак, установи Media Encoder, а то ты его не установил&quot;, хотя
          эта программа вроде как установлена. Для того, чтобы программы видели друг друга
          - вам нужно соблюсти два условия:
        </p>
        <ul>
          <li>
            Убедитесь в том, что вы установили <mark className="app">Premiere Pro</mark> и{" "}
            <mark className="app">Media Encoder</mark> одного &quot;года&quot;. Если вы,
            например, установили <mark className="app">Premiere Pro 2022</mark> и{" "}
            <mark className="app">Media Encoder 2019</mark> - они никогда не увидят друг
            друга, так как программы жёстко привязаны к &quot;году&quot;.
          </li>
          <li>
            Если вы установили <mark className="app">Premiere Pro</mark> и{" "}
            <mark className="app">Media Encoder</mark> одного года, но они всё ещё не
            видят друг друга - убедитесь в том, что вы установили обе программы в место по
            умолчанию, не на другом разделе, отличном от <mark className="path">C:\</mark>
            .
          </li>
        </ul>
        <AdditionInfo>
          Если у вас мало места на системном диске или вы хотите перенести программы от
          Adobe на другой раздел - воспользуйтесь функцией символьных ссылок.
          {/* FIXME: объяснить про symlink */}
        </AdditionInfo>
        <p>
          Обычно при соблюдении этих двух условий программы видят друг друга и спокойно
          отправляются композиции из <mark className="app">Premiere Pro</mark> в{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <p>
          Также в редких случаях при использовании патча GenP функция Dynamic Link может
          работать криво. Поэтому попробуйте удалить ваши программы Adobe и установить
          репаки от KpoJluK или m0nkrus.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PRInstallProblems;
