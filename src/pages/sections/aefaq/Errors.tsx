import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {AdditionInfo} from "../../../components/Additions";
import { ImageFigure } from "../../../components/ContentFigure";

export const AEErrors: React.FC = () => (
  <div
    className="faq-content"
    id="errors"
  >
    <DetailsSummary title="Почему у меня отсутствует звук в предпросмотре?">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Делал проект, но я его изначально не сохранял. Вдруг After Effects вылетел. Возможно ли восстановить проект?">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Почему After Effects иногда сам меняет начертание шрифта?">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="File is damaged или Unable to import file (...) as project (bad format or not readable)">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Cached preview needs 2 or more frames for playback">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Unable to allocate enough memory to render the current frame (XXXX x XXXX @ X bpc). Either decrease the memory requirements for the rendering frame, or install more RAM">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Effect cannot allocate a buffer larger than 30000 pixels in either dimension">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="This effect may slow down Preview and Export as it is optimized Multi-Frame Render">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Иногда появляются тонкие полосы в композициях при использовании видео-исходников">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title='"Не удалось выполнить преобразование символов Unicode" или "Не удалось загрузить псевдоэффекты"'>
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Красный или синий экран при использовании Twixtor или BorisFX Sapphire">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="After Effects error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory. Please check your settings in Media and Disk Cache Preferences">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Error: overflow converting ratio denominators (17::19) или (17::18)">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title='"Cinema 4D must be installed in order to use the Cinema 4D renderer" или "Cineware Server Suite failed to acquire renderer port and path. Server commands not available" или "Cinema 4D: Render Failed"'>
      <p>
        Если у вас установлен <mark className="app">After Effects</mark> от KpoJluK, то в
        его дистрибутивах c версий 2020 и выше не поставляется плагин{" "}
        <mark className="plugin">Cineware</mark> и{" "}
        <mark className="plugin">Cinema 4D</mark> для уменьшения веса программы. Чтобы
        решить эту проблему - установите полноценную{" "}
        <mark className="app">Maxon Cinema 4D</mark> нужной версии, которую просит ваша
        версия <mark className="app">After Effects</mark>. Обычно в такой ошибке
        указывается, какую версию <mark className="app">Cinema 4D</mark> нужно установить.
      </p>
      <AdditionInfo>
        Если After Effects пишет, что нужно установить, например Cinema 4D 2023 - то нужно
        ставить строго любую версию 2023.X.X! Версии 2024.X.X. или 25.X.X в таком случае
        не подойдут.
        <br />
        Также Cinema 4D версий 26.X.X не подойдут для версий After Effects ниже 23.1, так
        как Adobe не включала в поддержку эту версию.
      </AdditionInfo>
      <ul>
        <li>
          <mark className="app">After Effects 24.1 и выше</mark> требует{" "}
          <mark className="app">Cinema 4D 2024.X.X</mark>.
        </li>
        <li>
          <mark className="app">After Effects 23.1 - 23.6</mark> требует{" "}
          <mark className="app">Cinema 4D 2023.X.X</mark>.
        </li>
        <li>
          <mark className="app">After Effects 22.x и выше</mark> требует{" "}
          <mark className="app">Cinema 4D 25.X.X</mark>.
        </li>
        <li>
          <mark className="app">After Effects 17.x (2020)</mark> и{" "}
          <mark className="app">After Effects 18.x (2021)</mark> требует{" "}
          <mark className="app">Cinema 4D R21.X.X.</mark>. Путь до установленных программ
          вы можете настроить в настройках 3D-рендера.
          {/* fixme: сделать карусель из картинок!!1! */}
          <ImageFigure
            styleClass="figure_windows-light"
            imgSrc="images/aftereffects/composition_settings_3drenderer_cinema4d.png"
            imgTitle="Composition Settings"
            caption="Composition Settings"
          />
          <ImageFigure
            styleClass="figure_windows-light"
            imgSrc="images/aftereffects/cinema4d_renderer_options.png"
            imgTitle="Choose CINEMA 4D Installation"
            caption="Choose CINEMA 4D Installation"
          />
          <ImageFigure
            styleClass="figure_windows-light"
            imgSrc="images/aftereffects/choose_cinema4d_installation.png"
            imgTitle="Choose CINEMA 4D Installation"
            caption="Choose CINEMA 4D Installation"
          />
        </li>
      </ul>
      <p>
        Если у вас установлен <mark className="app">After Effects</mark> из{" "}
        <mark className="app">Creative Cloud</mark> - доустановите{" "}
        <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
        <mark className="ui">
          Установленные приложения &gt; After Effects &gt; Подключаемые модули &gt; Cinema
          4D &gt; Установить
        </mark>
        .
      </p>
    </DetailsSummary>
    <DetailsSummary title="Frame rate mismatch, or footage with fields found. For best Roto Brush & Refine Edge results, set the composition to XX fps to match the layer source">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Content Aware Fill Error: Initialization Failed">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Analys Solve Failed в 3D Camera Tracker">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title='Вылезло "System Compatibility Report" при запуске After Effects'>
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Advanced 3D is not supported by the current software">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Ошибка при запуске приложения 0xc0000142">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Ошибка про отсутствие MSVCP140.dll, api-ms-win-crt-runtime-l1-1-0.dll и аналогичные">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Точка входа в процедуру не найдена в библиотеке Kernel32.dll">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Не найден файл D3DCompiler_47.dll">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="After Effects warning: A rendering plug-in was not found. The default rendering plug-in will be substituted. “Ray-Traced 3D”">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Warning: This project uses fonts that are not currently available on this computer. Font substitution will occur until the originals become available">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="This project contains references to missing effects. Please install the following effects to restore these references">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="After Effects warning: The following plugins have failed to load. Please reinstall these plugins">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title='"Приложение Adobe Creative Cloud, необходимое для устранения проблемы отсутствует или повреждено..."?'>
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Вылетает Adobe Media Encoder после установки плагинов BorisFX Sapphire">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="This unlicensed Adobe app has been disabled или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Код ошибки 1 или 501 при установке After Effects">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Код ошибки 21 при установке After Effects или 'операционная система не соответствует минимальным требованиям для этой программы установки'">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Установил плагин с помощью установщика, а я его не вижу в After Effects">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
    <DetailsSummary title="Установил плагин, но при его применении вылазают красные кресты или надписи про отсутствие лицензии">
      <p>{/* fixme: написать!! */}</p>
    </DetailsSummary>
  </div>
);
