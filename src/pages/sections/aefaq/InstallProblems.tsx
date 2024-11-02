import React from "react";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
export const AEInstallProblems: React.FC = () => {
  return (
    <div className="faq-content" id="install-problems">
      <DetailsSummary title="Забыли положить инструкцию для установки рядом с файлами, куда что кидать?">
        <AdditionWarning>
          Прежде чем использовать <mark className="file">.aep</mark> и{" "}
          <mark className="file">.mogrt</mark> шаблоны или пакеты для{" "}
          <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> и подобных расширений - убедитесь,
          что они полностью распакованы и расположены в пути не длиннее 256 символов без
          кириллицы!
        </AdditionWarning>
        <li>
          Если в архиве находится файл <mark className="file">.aep</mark> или{" "}
          <mark className="file">.mogrt</mark>, то такие файлы просто импортируются в ваш
          проект с помощью <mark className="ui">File &gt; Import</mark> или{" "}
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
        <ContentSwitcher
          windowsContent={
            <div>
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
                <AdditionInfo>
                  В папке с пресетами вы можете создать свою собственную папку со своим
                  именем или расположить скачанные пресеты в уже существующие.
                </AdditionInfo>
              </ul>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.jsx</mark>, то
                  такие скрипты распаковываются в стандартную папку скриптов:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts
                  </mark>
                  .
                </li>
                <li>
                  Если в архиве находится <mark className="file">.jsxbin</mark> файл, то
                  такие скрипты распаковываются в стандартную папку Script UI Panels:{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                    Files\Scripts\Script UI Panels
                  </mark>
                  .
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
                и после этого применить{" "}
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
                <AdditionInfo>
                  В папке с пресетами вы можете создать свою собственную папку со своим
                  именем или расположить скачанные пресеты в уже существующие.
                </AdditionInfo>
              </ul>
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
      </DetailsSummary>
      <DetailsSummary title="В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое и как такие файлы корректно распаковать?">
        <p>
          {/* fixme: дописать до конца */}
          Данные файлы с пометкой <mark>.part1</mark>, <mark>.part2</mark> и далее по
          списку - это лишь части одного и того же архива. Архивы поделены на 2 или на 4
          Гб из-за ограничений Telegram на размер загружаемых файлов. Чтобы корректно
          распаковать нужный архив - нужно загрузить все файлы на ваш компьютер, а затем
          распаковать с помощью программ-архиваторов.
        </p>
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
              <iframe
                loading="lazy"
                src="https://www.youtube.com/embed/z7n6fUMYX9Y?si=uTH_JKjLCHFNpmMb"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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
                . Он поддерживает кучу различных форматов для распаковки, например{" "}
                <mark className="file">.zip</mark> <mark className="file">.7z</mark>,{" "}
                <mark className="file">.rar</mark>, <mark className="file">.tar</mark> и{" "}
                <mark className="file">.iso</mark>. После установки этой программы вы
                можете распаковать скачанный архив различными способами, как на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Extracting-with-Keka#how-to-extract-supported-files">
                  примерах
                </a>{" "}
                ниже.
              </p>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                <figure className="fig_windows-white">
                  <figcaption>Распаковка с помощью открытого окна keka</figcaption>
                  <img
                    loading="lazy"
                    src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-window.gif"
                    alt="Распаковка с помощью открытого окна keka"
                  />
                </figure>
                <figure className="fig_windows-white">
                  <figcaption>Распаковка через контекстное меню</figcaption>
                  <img
                    loading="lazy"
                    src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                    alt="Распаковка через контекстное меню"
                  />
                </figure>
                <figure className="fig_windows-white">
                  <figcaption>Распаковка через иконку keka в Dock-меню</figcaption>
                  <img
                    loading="lazy"
                    src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-dock.gif"
                    alt="Распаковка через иконку keka в Dock-меню"
                  />
                </figure>
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
      <DetailsSummary title="Распаковал и установил плагин, а мой антивирус решил его съесть. Действительно ли в нём может быть вирус?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Этот проект содержит ошибки выражений или This project contains an expression error">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title=" В названиях установщиков плагинов увидел обозначения. Для каких программ они предназначены?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Система Windows защитила ваш компьютер или как отключить Windows Smartscreen?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Скачал репак от KpoJluK, а мне выдают "Не удаётся найти helper.exe" или как отключить Windows Defender?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Скачал репак от KpoJluK, а мне пишут "Некоторые установочные файлы были повреждены"'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Скачал репак от KpoJluK, а мне утверждают, что "rsload.net заблокирован в hosts"'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Перед установой программы с помощью репака от KpoJluK, я забыл убрал галку с "Реклама". Что делать и как её убрать потом?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Правда ли, что в репаках Кролика, Монкруса и остальных релизеров водятся вирусы?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Не доверяю Кролику, Монкрусу и впринципе всем репакам, но установить программы от Adobe хочу. Какие есть ещё варианты?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Установил After Effects и Media Encoder, но они не видят друг друга и не подключатся. Как это исправить?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
