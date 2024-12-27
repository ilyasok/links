import React from "react";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
const AEInstallProblems: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="install-problems"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/InstallProblems.tsx" />
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <AdditionWarning>
          Прежде чем использовать <mark className="file">.aep</mark> и{" "}
          <mark className="file">.mogrt</mark> шаблоны или пакеты для{" "}
          <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> и подобных расширений - убедитесь,
          что они полностью распакованы и расположены в пути не длиннее 256 символов без
          кириллицы!
        </AdditionWarning>
        <ul>
          <li>
            Если в архиве находится файл <mark className="file">.aep</mark> или{" "}
            <mark className="file">.mogrt</mark>, то такие файлы просто импортируются в
            ваш проект с помощью <mark className="ui">File &gt; Import</mark> или{" "}
            <mark className="key">Ctrl+I</mark> и никуда не устанавливаются.
          </li>
          <li>
            Если в архиве находится <mark className="file">.atom</mark>, то такие файлы
            устанавливаются путём <mark>drag&apos;n&apos;drop</mark> в окно расширения{" "}
            <mark className="plugin">AtomX</mark>.
          </li>
          <li>
            Если в архиве находится <mark className="file">.mbr</mark>, то такие файлы
            устанавливаются путём <mark>drag&apos;n&apos;drop</mark> в окно расширения{" "}
            <mark className="plugin">Motion Bro</mark>.
          </li>
        </ul>
        <ContentSwitcher
          windowsContent={
            <div>
              <ul>
                <li>
                  Если в архиве или в записи находится файл{" "}
                  <mark className="file">.exe</mark>, то обычно в нём содержится
                  установщик. Если в записи указано, что данный установщик является
                  репаком - в таком случае после его установки плагин будет уже
                  активирован, никаких лишних телодвижений после установки делать не надо.
                </li>
              </ul>
              <AdditionWarning>
                При использовании установщиков убедитесь в том, что у вас{" "}
                <mark className="app">After Effects</mark> установлен в стандартном
                расположении <mark className="path">C:\Program Files\Adobe\</mark>, не на
                другом месте или разделе. В противном случае устанавливаемый плагин
                установится в другом месте и не будет отображаться в вашем{" "}
                <mark className="app">After Effects</mark>.
              </AdditionWarning>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.aex</mark>, то
                  такие плагины обычно распаковываются в общую папку плагинов:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                </li>
              </ul>
              <AdditionWarning>
                Если вы ищете куда расположить файл <mark className="file">.plugin</mark>,
                то спешу огорчить: данный файл не является плагином для устройств на
                Windows.
              </AdditionWarning>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.ffx</mark>, то
                  такие пресеты обычно распаковываются в стандартную папку пресетов:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Presets
                  </mark>
                </li>
              </ul>
              <AdditionInfo>
                В папке с пресетами вы можете создать свою собственную папку со своим
                именем или расположить скачанные пресеты в уже существующие.
              </AdditionInfo>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.jsx</mark>, то
                  такие скрипты распаковываются в стандартную папку скриптов -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts
                  </mark>
                  . После установки скрипты такого формата должны появиться в{" "}
                  <mark className="ui">File &gt; Scripts</mark>.
                </li>
                <li>
                  Если в архиве находится <mark className="file">.jsxbin</mark> файл, то
                  такие скрипты распаковываются в стандартную папку Script UI Panels -{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Scripts\Script UI Panels
                  </mark>
                  . После установки скрипты такого формата должны появиться в{" "}
                  <mark className="ui">Window</mark> в самом конце списка.
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.zxp</mark>, то
                  такие расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  . После установки нужно обязательно применить{" "}
                  <a
                    download
                    href="files/Enable Extensions Adobe.reg"
                  >
                    REG-патч
                  </a>
                  , чтобы ваше расширение смогло спокойно отобразиться и работать в{" "}
                  <mark className="app">After Effects</mark>.
                </li>
              </ul>
              <AdditionInfo>
                <a
                  download
                  href="files/Enable Extensions Adobe.reg"
                >
                  REG-патч
                </a>{" "}
                нужно применить лишь один раз, он универсален. В дальнейшем при установке
                подобных расширений файл для внесений записей в реестр системы не нужно
                снова открывать.
              </AdditionInfo>
              <AdditionInfo>
                Если вы не хотите устанавливать стороннее ПО для установки{" "}
                <mark className="file">.zxp</mark>, то вы можете переименовать файл{" "}
                <mark className="file">.zxp</mark> в <mark className="file">.zip</mark> и
                распаковать его как обычный архив. Содержимое свежераспакованного файла
                нужно поместить в папку{" "}
                <mark className="path">
                  C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
                </mark>{" "}
                (если такой папки нет - создайте) и после этого применить{" "}
                <a
                  download
                  href="files/Enable Extensions Adobe.reg"
                >
                  REG-патч
                </a>
                , если вы его не применяли.
              </AdditionInfo>
              <AdditionDanger>
                Пожалуйста, не используйте{" "}
                <a href="https://zxpinstaller.com/">
                  ZXP Installer от ELEMENTS Storage Media
                </a>
                , если вы используете версии программ от Adobe, отвязанные от приложения{" "}
                <mark className="app">Creative Cloud</mark>. Данный{" "}
                <a href="https://zxpinstaller.com/">ZXP Installer</a> будет вам выдавать
                ошибку <strong>-193</strong> до тех пор, пока вы не установите программу{" "}
                <mark className="app">Creative Cloud</mark>, а он же может вам поломать
                уже установленные программы.
              </AdditionDanger>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.cube</mark>,{" "}
                  <mark className="file">.itx</mark>, <mark className="file">.look</mark>{" "}
                  или <mark className="file">.lut</mark>, то такие файлы распаковываются в{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Lumetri\LUTs\Creative
                  </mark>{" "}
                  и затем используются с эффектом{" "}
                  <mark className="plugin">Lumetri Color</mark> в вкладке{" "}
                  <mark className="ui">Creative</mark>.
                </li>
              </ul>
            </div>
          }
          macContent={
            <div>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.plugin</mark>, то
                  такие плагины обычно распаковываются в общую папку плагинов{" "}
                  <mark className="path">
                    ~/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  .
                </li>
              </ul>
              <AdditionWarning>
                Если вы ищете куда расположить файл <mark className="file">.aex</mark>, то
                спешу огорчить: этот файл не является плагином для устройств на macOS.
              </AdditionWarning>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.ffx</mark>, то
                  такие пресеты обычно распаковываются в стандартную папку пресетов:{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Presets
                  </mark>
                </li>
              </ul>
              <AdditionInfo>
                В папке с пресетами вы можете создать свою собственную папку со своим
                именем или расположить скачанные пресеты в уже существующие.
              </AdditionInfo>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.jsx</mark>, то
                  такие скрипты распаковываются в стандартную папку скриптов:{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Scripts
                  </mark>
                  .
                </li>
                <li>
                  Если в архиве находится <mark className="file">.jsxbin</mark> файл, то
                  такие скрипты распаковываются в стандартную папку Script UI Panels:{" "}
                  <mark className="path">
                    ~/Library/Applications/Adobe After Effects 20XX/Scripts/Script UI
                    Panels
                  </mark>
                  .
                </li>
                <li>
                  Если в архиве находится файл <mark className="file">.zxp</mark>, то
                  такие расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">
                    ZXP Installer от aescripts
                  </a>
                  . После того как вы установите расширение, откройте терминал и введите
                  команды ниже, их можно скопировать одним нажатием. Если терминал не
                  выдал никакие ошибки, то вы можете спокойно открыть{" "}
                  <mark className="app">After Effects</mark> и проверить работоспособность
                  установленного расширения.
                  <AdditionInfo>
                    Эти команды достаточно ввести один раз, в дальнейшем при установке
                    подобных расширений команды для терминала вводить не нужно.
                  </AdditionInfo>
                  <code>
                    defaults write com.adobe.CSXS.5 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.6 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.7 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.8 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.9 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.10 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.11 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.12 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.13 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.14 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.15 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.16 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.17 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.18 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.19 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.20 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.21 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.22 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.23 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.24 PlayerDebugMode 1<br />
                    defaults write com.adobe.CSXS.25 PlayerDebugMode 1<br />
                  </code>
                </li>
              </ul>
              <AdditionInfo>
                Если вы не хотите устанавливать стороннее ПО для установки{" "}
                <mark className="file">.zxp</mark>, то вы можете переименовать файл{" "}
                <mark className="file">.zxp</mark> в <mark className="file">.zip</mark> и
                распаковать его как обычный архив. Содержимое свежераспакованного файла
                нужно поместить в папку{" "}
                <mark className="path">
                  ~/Library/Application Support/Adobe/CEP/extensions
                </mark>
                и после этого ввести команды, которые были расположены чуть выше в
                терминал.
              </AdditionInfo>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.cube</mark>,{" "}
                  <mark className="file">.itx</mark>, <mark className="file">.look</mark>{" "}
                  или <mark className="file">.lut</mark>, то для распаковки таких файлов
                  вам нужно перейти в{" "}
                  <mark className="path">~/Library/Applications/After Effects 20XX</mark>,
                  затем нажать <mark className="key">ПКМ</mark> по{" "}
                  <mark className="app">Adobe After Effects 20XX</mark> и выбрать{" "}
                  <mark className="ui">Показать содержимое пакета</mark>. После открытия
                  содержимого перейдите в{" "}
                  <mark className="path">Contents/Lumetri/LUTs/Creative</mark> и
                  переместите ваши файлы. Затем эти файлы для цветокоррекции вы можете
                  использовать в эффекте <mark className="plugin">Lumetri Color</mark> в
                  вкладке <mark className="ui">Creative</mark>.
                </li>
              </ul>
              <AdditionInfo>
                Если вы скачали архив, внутри которого есть папка{" "}
                <mark className="file">_MACOSX</mark> и вы думаете что там файлы
                специально для устройств macOS, то я спешу огорчить. Это скрытая системная
                папка, которая иногда может появляться при создании или распаковке файлов
                на компьютерах с операционной системой macOS. Она содержит метаданные и
                информацию о файловой системе и обычно в этой папке нет ничего интересного
                для пользователя.
              </AdditionInfo>
            </div>
          }
        />
        <AdditionInfo>
          Если у вас остались вопросы или до сих пор сталкиваетесь с проблемами при
          установке - обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?">
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
      <DetailsSummary title="Зачем мне советуют не менять расположение After Effects при установке? А если у меня нет места на жёстком диске?">
        <p>
          Установка программ от Adobe не на стандартный раздел, то есть на раздел отличный
          от <mark className="path">C:\Program Files\Adobe</mark> влечёт за собой
          несколько проблем пользователю на задницу.
        </p>
        <ul>
          <li>
            Плагины, которые распространяются в установщиках могут не установить себя там,
            где вы указали путь установки <mark className="app">After Effects</mark>.
            Например, если вы установили программу на{" "}
            <mark className="path">D:\Adobus</mark>, то при установке условного{" "}
            <mark className="plugin">Magic Bullet Suite</mark> вы его не увидите в{" "}
            <mark className="app">After Effects</mark>. А всё почему? Правильно, потому
            что установщик плагина завязан на типичных для Adobe расположениях и не
            подразумевает тот факт, что пользователю придёт в голову установить{" "}
            <mark className="app">After Effects</mark> не на стандартном расположении.
          </li>
          <li>
            Продолжая первый пункт: распаковывая скрипты, плагины или пресеты в
            расположениях, которые указаны в{" "}
            <a href="/aefaq#2.1">типичных инструкциях по установке</a> также есть риск,
            что вы их тоже не увидите в программе.
          </li>
          <li>
            <mark className="app">Media Encoder</mark> и{" "}
            <mark className="app">Premiere Pro</mark> вряд ли подключатся к{" "}
            <mark className="app">After Effects</mark>, если они установлены на разных
            директориях.
          </li>
        </ul>
        <p>
          Чтобы исправить всё эти приколы, нужно переустановить{" "}
          <mark className="app">After Effects</mark> по нормальному, не меняя раздел при
          установке. Часто установка программы не на стандартный раздел пользователем
          происходит из-за того, что у него мало места на системном разделе. И вследствие
          этого совершает ошибку, установив программу на другое расположение. Советую
          почистить диск с помощью <mark className="app">cleanmgr</mark> и сжать место
          через <mark className="copy">compact /s /c /a /i /f /exe:lzx</mark>.
        </p>
        <p>
          Если вы действительно хотите перенести программы на другой раздел, то
          воспользуйтесь функцией символьных ссылок, или же{" "}
          <mark className="app">Symlink</mark> в операционной системе Windows. Если вы
          боитесь командной строки, воспользуйтесь различными программами с интерфейсом
          для создания символьных ссылок, например{" "}
          <a href="https://github.com/arnobpl/SymlinkCreator">Symlink Creator</a>.
        </p>
        <AdditionWarning>
          Используйте эту функцию с осторожностью! Стабильная работа программ при
          использовании символьных ссылок не гарантируется.
        </AdditionWarning>
        <YouTubeVideo
          link="VaupaCuluJA"
          caption="Как сделать символическую ссылку в Windows на файл и папку"
        />
      </DetailsSummary>
      <DetailsSummary title="Установил плагин с помощью установщика, а я его не вижу в After Effects">
        <p>
          А вот и следствие игнорирования совета выше. Переместите плагины вручную из
          папок, в которые они распаковались в папку с установленной вами программы на
          другом разделе. Или всё-таки переустановите программу на стандартное
          расположение или воспользуйтесь функцией символьных ссылок.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Распаковал и установил плагин, а мой антивирус решил его съесть. Действительно ли в нём может быть вирус?">
        <p>
          Когда вы только-только встаёте на путь пиратства, то ложные срабатывания от
          антивирусов, особенного встроенного{" "}
          <mark className="app">Windows Defender</mark> должны для вас уже стать нормой.
          Если вы доверяете источнику, откуда вы скачиваете плагины или программы, то
          занесите папки от Adobe в{" "}
          <a href="https://remontka.pro/exclusions-defender-windows-10/">
            белый лист вашего антивируса
          </a>{" "}
          или настройте его только на ручное сканирование.
        </p>
        <p>
          Иногда неопытные пираты могут скачать сомнительный софт маленького размера,
          такое часто распространяется на YouTube под видео с названиями &quot;скачать
          бесплатно борис фх сапфир 2077 без смс и регистрации&quot;. Надеюсь, что сейчас
          такого говна стало гораздо меньше, но раньше этим весь YouTube кишил, даже я
          где-то в 2018 чуть не нарвался на такое.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Этот проект содержит ошибки выражений или This project contains an expression error">
        <p>
          Чаще всего это происходит из-за двух факторов: язык программы и язык
          программирования, указываемый в настройках проекта.
        </p>
        <p>
          Если у вас установлен <mark className="app">After Effects</mark> на языке,
          отличном от английского - попробуйте сменить язык на английский. Делается это
          достаточно просто.
        </p>
        <AdditionDanger>
          При смене языка программы программа сбрасывает настройки пользователя (плагины
          останутся, не переживайте), так как они привязаны к используемому вами языку.
        </AdditionDanger>
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
                строке Windows.
              </p>
              <AdditionWarning>
                Через <mark className="app">PowerShell</mark> эта команда не будет
                работать, используйте <mark className="app">cmd</mark>.
              </AdditionWarning>
              <code>
                echo.{">"}&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
              </code>
              <AdditionWarning>
                Альтернативный способ ниже работает только с версиями программы 24.x и
                новее, зато универсален для обеих систем.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                caption="Включение вида Debug Database View"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">After Effects</mark>.
              </p>
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                caption="Установка английского языка в консоли"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
              <AdditionDanger>
                После таких способов смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановите программу сразу на английском
                языке.
              </AdditionDanger>
            </div>
          }
          macContent={
            <div>
              <AdditionWarning>
                Приведённый ниже способ работает только с версиями программы 24.x и новее.
              </AdditionWarning>
              <p>
                В новых версиях <mark className="app">After Effects</mark> разработчики
                добавили возможность быстро поменять язык через консоль. Для этого нажмите
                на комбинацию клавиш <mark className="key">Ctrl + F12</mark>. В
                открывшемся окне у заголовка нажимаем три полоски и переключаемся в режим{" "}
                <mark className="ui">Debug Database View</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="images/aftereffects/console_debug-database-view.png"
                imgTitle="Включение вида Debug Database View"
                caption="Включение вида Debug Database View"
              />
              <p>
                Затем в строке поиска нам нужно писать{" "}
                <mark className="copy">ApplicationLanguage</mark>. В строке с одноимённым
                параметром пишем <mark className="copy">en_US</mark>. После ввода значения
                - перезапускаем <mark className="app">After Effects</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="images/aftereffects/set_language_console.png"
                imgTitle="Установка английского языка в консоли"
                caption="Установка английского языка в консоли"
              />
              <AdditionInfo>
                Чтобы вернуть язык, который был установлен по умолчанию - достаточно
                убрать значение из этого параметра и снова перезапустить{" "}
                <mark className="app">After Effects</mark>.
              </AdditionInfo>
              <AdditionDanger>
                После таких способов смены языка названия стандартных пресетов и рабочих
                областей останутся на русском языке. Их можно будет переименовать вручную
                или удалить, а затем поставить поверх дистрибутив{" "}
                <mark className="app">After Effects</mark> с указанием английского языка в
                установщике. Ну или просто переустановите программу сразу на английском
                языке.
              </AdditionDanger>
            </div>
          }
        />
        <p>
          Если смена языка программы вам не помогла, попробуйте сменить язык
          программирования для выражений. Для этого откройте ваш проект и откройте{" "}
          <mark className="ui">Project Manager</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark>. Затем перейдите во вкладку{" "}
          <mark className="ui">Expressions</mark> и выберите в пункте{" "}
          <mark className="ui">Expressions Engine</mark> другой движок, отличный от
          текущего.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_expression_language.png"
          imgTitle="Изменяем движок выражений"
          caption="Project Settings"
        />
      </DetailsSummary>
      <DetailsSummary title="Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again">
        <p>
          На вашем устройстве отсутствует программа Adobe Creative Cloud, но не спешите
          его устанавливать, особенно если используете репаки от <mark>KpoJluK</mark> или{" "}
          <mark>m0nkrus</mark>.
        </p>
        <p>
          Если вы пытаетесь установить расширение с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer от ELEMENTS Storage Media</a>,
          то откажитесь от него в пользу{" "}
          <a href="https://aescripts.com/learn/zxp-installer/">
            ZXP Installer от aescripts
          </a>{" "}
          или ручной распаковки <mark className="file">.zxp</mark> файла в нужное место.
        </p>
      </DetailsSummary>
      <DetailsSummary title="В названиях установщиков плагинов увидел непонятные обозначения. Для каких программ они предназначены?">
        <p>
          Обычно в названии установочных файлов указывается для каких программ
          устанавливается плагин.
        </p>
        <ul>
          <li>
            <mark>AE</mark>, <mark>PR</mark>, <mark>PS</mark> <mark>Adobe</mark> - такие
            плагины устанавливаются для программ от Adobe. Иногда, если в названии имеется
            суффикс <mark>AE</mark>, то он может устанавливаться и для{" "}
            <mark className="app">After Effects</mark> и для{" "}
            <mark className="app">Premiere Pro</mark>. Суффикс <mark>PS</mark> означает,
            что плагин будет установлен для <mark className="app">Photoshop</mark>.
          </li>
          <li>
            <mark>OFX</mark> - такие плагины устанавливаются для программ с поддержкой
            плагинов формата OpenFX. К ним относятся{" "}
            <mark className="app">Davinci Resolve</mark>,{" "}
            <mark className="app">Vegas Pro</mark>, <mark className="app">Nuke</mark> и{" "}
            <a href="https://ru.wikipedia.org/wiki/OpenFX#%D0%A5%D0%BE%D1%81%D1%82%D1%8B">
              далее по списку
            </a>
            .
          </li>
          <li>
            <mark>Standalone</mark> - плагин ни от кого не зависит и запускается как
            обычное приложение. Таких плагинов мало, один из таких является{" "}
            <mark className="plugin">Mocha Pro</mark>.
          </li>
          <li>
            <mark>CE</mark> - маркировка от группы релизеров Team V.R., которая
            расшифровывается как <mark>Corporate Edition</mark>. Таким образом они
            помечают, что такие дистрибутивы достаточно просто установить без всяких
            лишних действий по активации плагинов. То есть это для них как синоним к слову
            &quot;репак&quot;.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title='"Система Windows защитила ваш компьютер" или как отключить Windows Smartscreen?'>
        <p>
          <mark className="app">Windows Smartscreen</mark> - это некий фильтр программ,
          скачанных с интернета и часто он помечает <mark className="file">.exe</mark>{" "}
          файлы как подозрительные. Поэтому и приостанавливает запуск исполняемых файлов.
          Чтобы запустить такой файл, вам нужно нажать на{" "}
          <mark className="ui">Подробнее</mark> и на{" "}
          <mark className="ui">Выполнить в любом случае</mark>.
        </p>
        <p>
          Но бывают такие случаи, что после нажатия на{" "}
          <mark className="ui">Подробнее</mark> ничего не выводится. В таком случае вам
          нужно отключить <mark className="app">Windows Smartscreen</mark> в параметрах{" "}
          <mark className="app">Защитника Windows</mark>.
        </p>
        <YouTubeVideo
          link="HxlxS1Mdyp0"
          caption="Как отключить Windows Smartscreen"
        />
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
        <YouTubeVideo
          link="blwRAOQUjsM"
          caption="Как отключить Защитник Windows 11"
        />
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
      <DetailsSummary title='Перед установкой программы с помощью репака от KpoJluK, я забыл убрать галку с пункта "Реклама". Что делать и как избавиться от его последствий?'>
        <p>
          По умолчанию в репаках от KpoJluk включена галочка &quot;Реклама&quot;, поэтому
          можно случайно нарваться на установку <mark>me.fo</mark> или <mark>hi.ru</mark>{" "}
          в качестве стартовой страницы браузера или на установку{" "}
          <mark className="app">Яндекс.Браузера</mark>. К счастью все эти
          &quot;нововведения&quot; можно удалить через{" "}
          <mark className="app">Панель управления</mark>.
        </p>
        <p>
          В следующий раз не забывайте убирать галочку с пункта &quot;Реклама&quot;. Если
          вы хотите поставить себе автоматический &quot;убиратель галочек&quot; при
          установке, воспользуйтесь программой{" "}
          <a href="https://unchecky.com/">Unchecky</a>.
        </p>
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
      <DetailsSummary title="Не доверяю репакам Adobe, в частности от KpoJluk и m0nkrus, но установить программы от Adobe хочу. Какие есть ещё варианты?">
        <p>
          Если вы параноик и боитесь, что при установке репаков в ваш компьютер ворвётся
          &quot;барабашка&quot; с троянами и прочей бякой, то вы можете активировать
          программы от Adobe вручную через <mark className="app">GenP</mark>.
        </p>
        <ul>
          <li>
            Из плюсов этого способа: активируя Adobe через{" "}
            <mark className="app">GenP</mark>, вы можете устанавливать, обновлять
            программы, а также устанавливать бесплатные плагины напрямую из Creative
            Cloud. Также вы можете устанавливать бета-версии, если вы хотите потыкать
            нововведения, которые ещё не выкатили в публичный релиз.
          </li>
          <li>
            Из минусов: пользователи часто жалуются на проблемы при использовании{" "}
            <mark className="plugin">Dynamic Link</mark>, то есть{" "}
            <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Premiere Pro</mark> могут не увидеть друг друга. После
            обновления программ от Adobe может не всегда работать патч, для этого нужно
            периодически обновлять сам <mark className="app">GenP</mark>.
          </li>
        </ul>
        <AdditionDanger>
          Если вы хотите &quot;переехать&quot; с репаков или у вас уже установлены
          какие-то приложения от Adobe на вашем устройстве, то перед активацией через{" "}
          <mark className="app">GenP</mark> лучше удалите все приложения от Adobe во
          избежание различных проблем при активации. Удалить приложения от Adobe вы можете
          через{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems">
            Adobe Creative Cloud Cleaner Tool
          </a>
          .
        </AdditionDanger>
        <p>
          Предположим, что ваша система уже чиста от Adobe или вы только-только
          переустановили Windows. Для начала вам нужно загрузить{" "}
          <a href="https://creativecloud.adobe.com/apps/download/creative-cloud?locale=en">
            Adobe Creative Cloud
          </a>{" "}
          с официального сайта и установить его как обычную программу. Далее нам требуется
          войти в аккаунт: вы можете создать новый или войти в уже существующий.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/creative_cloud_main_menu.png"
          imgTitle="Главное окно Creative Cloud"
          caption="Adobe Creative Cloud"
        />
        <p>
          После успешного входа нам нужно отключить автоматические обновления и автозапуск{" "}
          <mark className="app">Creative Cloud</mark> во избежание различных &quot;детских
          неожиданностей&quot;. Для этого вам нужно нажать на изображение вашего профиля в
          правом верхнем углу и в меню выбрать <mark className="ui">Установки</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/creative_cloud_open_settings.png"
          imgTitle="Открытие настроек Creative Cloud"
          caption="Adobe Creative Cloud"
        />
        <p>
          В открывшемся окне отключаем три пункта про автозапуск и авто обновление
          приложений в разделе <mark className="ui">Общие</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/creative_cloud_settings.png"
          imgTitle="Пункты для отключения обновлений и автозапуска Creative Cloud"
          caption="Adobe Creative Cloud"
        />
        <AdditionInfo>
          По вашему желанию вы можете выбрать английский язык для новых приложений по
          умолчанию в разделе <mark className="ui">Приложения</mark> или изменить язык{" "}
          <mark className="app">After Effects</mark> вручную после установки.
        </AdditionInfo>
        <p>
          После изменения настроек и перед применением патча обязательно закрываем
          приложение <mark className="app">Creative Cloud</mark>. Далее нам нужно скачать
          сам <mark className="app">GenP</mark> с темы{" "}
          <a href="https://www.reddit.com/r/genP/">/r/genp</a> на Reddit.
        </p>
        <AdditionWarning>
          Если ссылка на скачивание не работает, то обычно ниже прикладываются ссылки на
          зеркало скачивания. Перед скачиванием, распаковкой и дальнейшем использованием{" "}
          <mark className="app">GenP</mark>, отключите ваш антивирус на время.
        </AdditionWarning>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/reddit_genp.png"
          imgTitle="Скачиваем GenP из Reddit"
          caption="Браузер"
        />
        <p>
          После успешной загрузки архива нам нужно распаковать его в любом удобном месте,
          а затем открыть <mark className="app">AdobeGenP.exe</mark> в папке{" "}
          <mark className="path">Source</mark>. Если вас при первом открытии спросят{" "}
          <mark>
            Do you wish to elevate GenP to Trustedlnstaller to allow for patching of
            XD/UWP apps?
          </mark>
          , на что мы любезно отвечаем <mark className="ui">No</mark>.
        </p>
        <p>
          Внизу интерфейса <mark className="app">GenP</mark> есть несколько кнопок. Нам
          нужно нажать на кнопку <mark className="ui">Search</mark> и подождать до
          появления двух файлов для <mark className="app">Creative Cloud</mark>.{" "}
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/patching_creative_cloud.png"
          imgTitle="Патчим Creative Cloud"
          caption="Adobe GenP"
        />
        <p>
          Их мы выделяем и нажимаем на кнопку <mark className="ui">Patch</mark> и ждём
          успешного патча.
        </p>
        <p>
          После патча <mark className="app">Creative Cloud</mark>, нам нужно в него зайти
          и начать скачивать оттуда программы. После установки{" "}
          <mark className="app">After Effects</mark> и остального софта -{" "}
          <u>не спешите</u> их открывать.
        </p>
        <p>
          После установки нужного софта снова открываем <mark className="app">GenP</mark>{" "}
          и снова нажимаем на кнопку <mark className="ui">Search</mark>. Но уже теперь мы
          выделяем галочки на всех установленных нами приложениях и снова нажимаем на
          кнопку <mark className="ui">Patch</mark>.
        </p>
        <p>
          Если в <mark className="ui">Logs</mark> ничего не указывает на ошибки при
          патчинге, то поздравляю, вы можете теперь запустить свежеустановленные программы
          от Adobe и работать в них. В противном случае пересмотрите инструкцию, обновите{" "}
          <mark className="app">GenP</mark> или всё-таки поборойте свою паранойю насчёт
          репаков.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Установил After Effects и Media Encoder, но они не видят друг друга и не подключаются. Как это исправить?">
        <p>
          Функция Dynamic Link позволяет синхронизировать композиции из{" "}
          <mark className="app">After Effects</mark> и очередь рендера в{" "}
          <mark className="app">Media Encoder</mark>. Но не всегда их получается
          подружить.
        </p>
        <p>
          Иногда <mark className="app">After Effects</mark> при попытке отправить
          композицию на очередь рендера в <mark className="app">Media Encoder</mark>{" "}
          выдаёт просьбу мол &quot;чувак, установи Media Encoder, а то ты его не
          установил&quot;, хотя эта программа вроде как установлена. Для того, чтобы
          программы видели друг друга - вам нужно соблюсти два условия:
        </p>
        <ul>
          <li>
            Убедитесь в том, что вы установили <mark className="app">After Effects</mark>{" "}
            и <mark className="app">Media Encoder</mark> одного &quot;года&quot;. Если вы,
            например, установили <mark className="app">After Effects 2022</mark> и{" "}
            <mark className="app">Media Encoder 2019</mark> - они никогда не увидят друг
            друга, так как программы жёстко привязаны к &quot;году&quot;.
          </li>
          <li>
            Если вы установили <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Media Encoder</mark> одного года, но они всё ещё не
            видят друг друга - убедитесь в том, что вы установили обе программы в место по
            умолчанию, не на другом разделе, отличном от <mark className="path">C:\</mark>
            .
          </li>
        </ul>
        <AdditionInfo>
          Если у вас мало места на системном диске или вы хотите перенести программы от
          Adobe на другой раздел - воспользуйтесь функцией символьных ссылок.
        </AdditionInfo>
        <p>
          Обычно при соблюдении этих двух условий программы видят друг друга и спокойно
          отправляются композиции из <mark className="app">After Effects</mark> в{" "}
          <mark className="app">Media Encoder</mark>.
        </p>
        <p>
          Также в редких случаях при использовании патча GenP функция Dynamic Link может
          работать криво. Поэтому попробуйте удалить ваши программы Adobe и установить
          репаки от KpoJluK или m0nkrus.
        </p>
      </DetailsSummary>
      <DetailsSummary title='При установке любого пакета Red Giant выскакивает "This installer application has been moved. It must be run from its original folder containing a packages directory. The installer will now exit."'>
        <p>
          Вы пытаетесь установить плагины от <mark className="plugin">Red Giant</mark>, не
          распаковав архив полностью. При использовании стандартного просмотрщика архивов
          в Windows 10/11 и при открытии в нём любого <mark className="file">.exe</mark>{" "}
          файла - остальные файлы-зависимости не будут распакованы, поэтому и установщик
          не видит файлы для распаковки.
        </p>
        <p>
          Чтобы установить плагины от Red Giant корректно - вам нужно распаковать
          полностью архив или использовать{" "}
          <a
            href="https://www.rarlab.com/download.htm"
            title="Официальный сайт WinRAR"
          >
            WinRAR
          </a>
          . Он умеет распаковывать весь архив в временную папку при открытии{" "}
          <mark className="file">.exe</mark>, <mark className="file">.msi</mark> и
          подобных установочных файлов.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Установил плагин, но при его применении вылазают красные кресты или надписи про отсутствие лицензии">
        <p>
          Скорее всего вы проигнорировали инструкцию по установке или неправильно ею
          воспользовались. Попробуйте начать установку и активацию плагина с самого
          начала.
        </p>
        <p>
          В редких случаях источник, откуда вы скачали плагин, может дать нерабочий
          вариант. Для этого найдите нужный плагин из другого источника, например из
          самого первого пункта этой страницы.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Чую, что у меня программа работает неправильно, но переустанавливать программу я не хочу. Как сбросить все настройки After Effects?">
        <p>
          Перед запуском программы из ярлыка, зажмите модификаторы{" "}
          <mark className="key">Ctrl + Alt + Shift</mark> на клавиатуре одновременно и не
          отпуская клавиши, откройте ярлык запуска программы левой кнопкой мыши. После
          этого у вас должно открыться окно{" "}
          <mark className="ui">Startup Repair Options</mark>, где вы можете запустить
          программу в безопасном режиме, отключить плагины или сбросить настройки
          программы.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/startup_repair_options.png"
          imgTitle="Окно для решения проблем при запуске программы"
          caption="After Effects"
        />
        <p>
          Для сброса всех настроек нужно нажать на прекрасную кнопочку{" "}
          <mark className="ui">Reset Preferences</mark>. Диалога подтверждения удаления
          настроек не будет, поэтому заранее сохраните ваши настройки. Обычно они
          находятся в <mark className="path">%APPDATA%\Adobe\After Effects\XX.X</mark>.
        </p>
        <p>
          Если вы все ещё сталкиваетесь с какими-то трудностями при работе с программой -
          попробуйте накатить ту же версию, что у вас установлена поверх. Либо просто
          переустановите <mark className="app">After Effects</mark> с нуля.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Настало время переустановки. Как мне полностью удалить After Effects и остальные продукты от Adobe?">
        <p>
          Если вы хотите переустановить или забыть о программах Adobe раз и навсегда, то
          можно сделать это двумя способами, а лучше объединить их.
        </p>
        <ul>
          <li>
            Через <mark className="app">Adobe Creative Cloud Cleaner Tool</mark>, который
            можно скачать{" "}
            <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
              по этой ссылке
            </a>
            . Это консольная утилита, не требующая установки. Инструкция по использованию
            указана как раз на странице рядом с кнопкой загрузки.
          </li>
          <li>
            Через <mark className="app">Revo Uninstaller</mark> или подобный софт, который
            чистит хвосты после удаления. Не все подобные программы могут полностью
            удалить Adobe, но смогут удалить большую часть зависимостей. По желанию можно
            почистить реестр после удаления, например с помощью{" "}
            <mark className="app">Vit Registry Fix</mark>.
          </li>
        </ul>
      </DetailsSummary>
    </div>
  );
};
export default AEInstallProblems;
