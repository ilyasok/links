import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

export const AEErrors: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="errors"
    >
      <AdditionDanger>
        Пожалуйста, не ленитесь и внимательно прочтите ошибку, которую выдаёт программа. В
        большинстве случаев в описании ошибки уже содержится причина и возможное решение
        проблемы.
      </AdditionDanger>
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Errors.tsx" />
      <DetailsSummary title='Ошибка 23::40, окно "Out of Memory", "After Effects has unexpectedly run out of memory and cannot complete this export" или "Low memory warning. RAM use has been extended for previews"'>
        {/* fixme: написать!! */}
        <p>
          Поздравляю, вы встретились с первым боссом в{" "}
          <mark className="app">After Effects</mark>! Эти ошибки возникают из-за того, что
          у вас банально не хватает оперативной памяти для реализации ваших проектов. Это
          происходит из-за того что вы используете слишком нагруженные эффекты, не
          монтажный кодек у видео-исходников или неправильно настроили программу.
        </p>
        <AdditionWarning>
          При появлении данных ошибок убедитесь в том, что вы не используете исходники с
          большим разрешением (больше, чем 1080p), не установили 16 или 32 бит в
          параметрах проекта и не перегружаете свой проект различными эффектами (например
          от Red Giant или BorisFX).
        </AdditionWarning>
        <p>
          Обычно для устранения этой ошибки могут помочь некоторые советы, приведённые
          ниже:
        </p>
        <ul>
          <li>
            Очистите кэш и оперативную память через{" "}
            <mark className="ui">Edit &gt; Purge &gt; All Memory & Disk Cache</mark>.
          </li>
          <li>
            Если вы используете исходники из интернета, в частности из видео площадок -
            перекодируйте их через программу{" "}
            <a href="https://www.shutterencoder.com/">Shutter Encoder</a> в{" "}
            <mark className="file">ProRes 422</mark> или повторно в{" "}
            <mark className="file">H.264</mark>. Таким образом вы ещё можете оградить себя
            от различных багов во время использования подобных исходников.
          </li>
          <li>
            <a href="https://remontka.pro/fail-podkachki-windows/">
              Настройте файл подкачки
            </a>
            , если у вас устройство на Windows. Советую установить значение от 4096 до
            65536 (будет создаваться файл подкачки с изначальным размером в 4 Гб, который
            динамически может расширяться до 64 Гб), в большинстве случаев этого хватает.
          </li>
          <li>
            Установите программу{" "}
            <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a>, если у
            вас Windows, для периодической очистки ОЗУ и настройте очистку оперативной
            памяти при достижении 90%.
          </li>
          <li>
            Если у вас включена функция Multi-Frame Render - попробуйте его отключить на
            время.
            {/* fixme: как его отключить */}
          </li>
          <li>
            Проверьте настройки в{" "}
            <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark>.
            Если вы туда лезли и что-то настраивали, то есть шанс, что вы неправильно
            прочитали описание настройки и оставили программам Adobe 1 Гб ОЗУ, а
            оставшуюся часть памяти - на другие программы.
            {/* fixme: показать как правильно */}
          </li>
          <li>
            Если вы используете несколько композиций с различными эффектами - попробуйте
            создать прокси для них и использовать их в дальнейшем. Заодно таким образом вы
            уменьшите временные затраты на перепросчёт кадров, если вы не планируете
            дальше изменять эти композиции.
            {/* fixme: как создать прокси */}
          </li>
          <li>
            Ну и самое главное: если у вас мало оперативной памяти на вашем устройстве -
            докупите ещё и установите в материнскую плату, если возможно. В нынешних
            реалиях для комфортной работы в <mark className="app">After Effects</mark>{" "}
            требуется минимум 32 Гб ОЗУ.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="After Effects has encountered a failure related to GPU-enabled effects from this frame. This is likely because your GPU is out of memory.">
        <p>
          Данная ошибка указывает на то, что видеопамять вашей видеокарты заполнена и
          эффект, использующий GPU-ускорение, задыхается. Такое часто происходит, если у
          вас видеокарта с объёмом видеопамяти меньше чем 4 Гб.
        </p>
        <p>
          В таком случае пользователю надо освободить видеопамять любым способом -
          перезагрузка устройства или &quot;перезагрузка&quot; драйверов видеокарты с
          помощью комбинации клавиш <mark className="key">Ctrl + Win + Shift + B</mark>.
        </p>
        <p>
          В данной ошибке вам прямо советуют переключить рендер с видеокарты на процессор.
          Это можно сделать через окно <mark className="ui">Project Manager</mark> (
          <mark className="key">Ctrl + Alt + Shift + K</mark>), указав{" "}
          <mark className="ui">Mercury Software Only</mark> в вкладке{" "}
          <mark className="ui">Video Rendering and Effects</mark>.
        </p>
        {/* fixme: добавить картинку переключения на гпу */}
      </DetailsSummary>
      <DetailsSummary title="Cached preview needs 2 or more frames for playback">
        <p>
          Данная ошибка может выскочить по двум причинам: из-за переполненного кэша и
          оперативной памяти или из-за банальной невнимательности пользователя программы.
        </p>
        <p>
          В первом случае пользователю надо почистить кэш{" "}
          <mark className="app">After Effects</mark>. Для этого ему нужно зайти в{" "}
          <mark className="ui">Edit &gt; Purge &gt; All Memory & Disk Cache</mark> и
          нажать на <mark className="ui">OK</mark>. После этого попробуйте закэшировать
          предпросмотр снова.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          imgTitle="Очистка кэша и освобождение оперативной памяти"
          caption="Очистка кэша и освобождение оперативной памяти"
        />
        <AdditionInfo>
          Иногда может быть такое, что применяемый эффект может заставить держать ваш
          компьютер в страхе, поэтому он и не может нормально обработать кадры для
          предпросмотра. Если у вас есть возможность - найдите эффект, который мешает
          нормальному рендеру и замените его на похожий.
        </AdditionInfo>
        <p>
          Если очистка кэша не помогла, то проверьте длину вашей рабочей области. Может вы
          упустили тот факт, что вы случайным образом сократили его до одного кадра,
          поэтому и отображается эта ошибка.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/low_work-area.png"
          imgTitle="Маленькая рабочая область"
          caption="Одна из причин ошибки - маленькая рабочая область"
        />
        <p>
          Чтобы это исправить - перейдите в начало вашей композиции (
          <mark className="key">Home</mark>) и нажмите на <mark className="key">B</mark>,
          а затем перейдите в конец вашей композиции (<mark className="key">End</mark>) и
          нажмите на <mark className="key">N</mark>. Таким образом вы расширите вашу
          рабочую область от начала до конца вашей композиции и эта ошибка должна
          исчезнуть.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Unable to allocate enough memory to render the current frame (XXXX x XXXX @ X bpc). Either decrease the memory requirements for the rendering frame, or install more RAM">
        <p>
          Вы создали каким-то образом (с помощью{" "}
          <mark className="plugin">Motion Tile</mark>,{" "}
          <mark className="plugin">CC Repetile</mark> или другим способом) настолько
          большое изображение, что ваш компьютер не переваривает. Или установили высокую
          битность (16 или 32 бит) в настройках проекта. Ну или вы просто применили
          эффект, который потребляет слишком много оперативной памяти.
        </p>
        <p>
          В описании ошибки буквально есть решение проблемы - нужно уменьшить требования к
          кадру. Это означает что вам нужно убрать жручие эффекты, понизить битность и
          банально освободить оперативную память, например через{" "}
          <mark className="ui">Edit &gt; Purge</mark>.
        </p>
        <p>
          Иногда может помочь{" "}
          <a href="https://remontka.pro/fail-podkachki-windows/">
            настройка файла подкачки
          </a>{" "}
          в вашей системе, если у вас устройство на Windows. Советую установить значение
          от 4096 до 65536 (будет создаваться файл подкачки с изначальным размером в 4 Гб,
          который динамически может расширяться до 64 Гб), в большинстве случаев этого
          хватает.
        </p>
        <AdditionInfo>
          Если у вас мало оперативной памяти и советы выше не помогают - вряд ли что-то
          можно сделать, не переделывая весь проект. В таком случае советую докупить
          больше оперативной памяти. В нынешних реалиях для комфортной работы в{" "}
          <mark className="app">After Effects</mark> требуется минимум 32 Гб ОЗУ.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Effect cannot allocate a buffer larger than 30000 pixels in either dimension">
        <p>
          Вы создали слишком большое изображение, например через{" "}
          <mark className="plugin">Motion Tile</mark> или{" "}
          <mark className="plugin">CC Repetile</mark>. Ошибка указывает на то, что слой на
          выходе не может превышать больше чем 30000 пикселей на одну ось.
        </p>
        <AdditionInfo>
          30000 пикселей у слоя на каждую ось - это максимальное значение для{" "}
          <mark className="app">After Effects</mark>. Данное ограничение нельзя обойти.
        </AdditionInfo>
        <p>
          Для решения этой проблемы уменьшите разрешение вашего слоя любыми удобными для
          вас способами или настройте эффекты так, чтобы они не генерировали слишком
          большое разрешение у слоя.
        </p>
      </DetailsSummary>
      <DetailsSummary title="This effect may slow down Preview and Export as it is optimized Multi-Frame Render">
        <AdditionInfo>
          Когда вы видите это окно - не надо паниковать. Это не является ошибкой или
          серьёзной проблемой.
        </AdditionInfo>
        <p>
          Данное предупреждение указывает вас на то, что вы используете старую версию
          плагина, не адаптированная под Multi-Frame Render. В таком случае рекомендуется
          обновить используемый плагин, если разработчик всё ещё поддерживает свой плагин.
          Ну или просто можете проигнорировать.
        </p>
        <p>
          Если эта ошибка вас раздражает или у вас нет возможности/желания обновлять
          используемый плагин - вы можете отключить предупреждение, отключив функцию
          многокадрового рендера в настройках <mark className="app">After Effects</mark>.
        </p>
        {/* fixme: показать как отключить */}
      </DetailsSummary>
      <DetailsSummary title="Иногда появляются тонкие полосы в композициях при использовании видео-исходников">
        {/* fixme: написать!! */}
        <p>
          Такой баг встречался на некоторых версиях драйверов для видеокарт NVIDIA с 55X
          до 56X. Для решения этой проблемы достаточно обновить драйвера на видеокарту или
          перекодировать видео в <mark className="file">Prores 422</mark> через любой
          удобный вам конвертер видео файлов.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Не удалось выполнить преобразование символов Unicode" или "Не удалось загрузить псевдоэффекты" при запуске After Effects'>
        {/* fixme: написать!! */}
        <p>
          Такой баг встречается, когда вы пытаетесь{" "}
          <mark className="app">After Effects</mark> установленный с русским языком.
          Встречался на старых версиях и на версии 24.4, позже исправили.
        </p>
        <p>
          Для решения проблемы нужно переустановить{" "}
          <mark className="app">After Effects</mark> на английский язык. Или обновиться до
          более свежей версии <mark className="app">After Effects</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Синий экран при использовании Twixtor">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>{" "}
      <DetailsSummary title="Красный экран при использовании BorisFX Sapphire">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="File is damaged или Unable to import file (НАЗВАНИЕ_ФАЙЛА.XYZ) as project (bad format or not readable)">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged">
        {/* fixme: написать!! */}
        <AdditionInfo>
          Данное окно не является ошибкой, скорее является предупреждением. Не забудьте
          сохранить конвертированный проект на ваш диск.
        </AdditionInfo>
        <p>
          Вы открыли проект, созданный в более ранней версии{" "}
          <mark className="app">After Effects</mark> в более свежей версии программы. В
          таком случае программа переконвертирует исходный файл проекта для работы с более
          новой версией <mark className="app">After Effects</mark>. Исходный файл проекта
          не будет затронут и каким-либо образом изменён.
        </p>
      </DetailsSummary>
      <DetailsSummary title="The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version">
        {/* fixme: написать!! */}
        <p>
          Вы пытаетесь открыть проект, созданный в более поздней версии{" "}
          <mark className="app">After Effects</mark>, чем та, что у вас установлена.
        </p>
      </DetailsSummary>
      <DetailsSummary title="After Effects error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory. Please check your settings in Media and Disk Cache Preferences">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Error: overflow converting ratio denominators (17::19) или (17::18)">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='"Cinema 4D must be installed in order to use the Cinema 4D renderer" или "Cineware Server Suite failed to acquire renderer port and path. Server commands not available" или "Cinema 4D: Render Failed"'>
        <p>
          Если у вас установлен <mark className="app">After Effects</mark> от KpoJluK, то
          в его дистрибутивах c версий 2020 и выше не поставляется плагин{" "}
          <mark className="plugin">Cineware</mark> и{" "}
          <mark className="plugin">Cinema 4D</mark> для уменьшения веса программы. Чтобы
          решить эту проблему - установите полноценную{" "}
          <mark className="app">Maxon Cinema 4D</mark> нужной версии, которую просит ваша
          версия <mark className="app">After Effects</mark>. Обычно в такой ошибке
          указывается, какую версию <mark className="app">Cinema 4D</mark> нужно
          установить.
        </p>
        <AdditionInfo>
          Если After Effects пишет, что нужно установить, например Cinema 4D 2023 - то
          нужно ставить строго любую версию 2023.X.X! Версии 2024.X.X. или 25.X.X в таком
          случае не подойдут.
          <br />
          Также Cinema 4D версий 26.X.X не подойдут для версий After Effects ниже 23.1,
          так как Adobe не включала в поддержку эту версию.
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
            <mark className="app">Cinema 4D R21.X.X.</mark>. Путь до установленных
            программ вы можете настроить в настройках 3D-рендера.
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
          <mark className="app">Creative Cloud</mark> - до установите{" "}
          <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
          <mark className="ui">
            Установленные приложения &gt; After Effects &gt; Подключаемые модули &gt;
            Cinema 4D &gt; Установить
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
        {/* fixme: написать!! */}
        <p>
          Вы пытаетесь запустить приложение на устройстве с процессором который не
          поддерживает инструкции AVX2. В{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            нынешних системных требованиях для After Effects
          </a>{" "}
          указано, что требуется процессор от Intel минимум 6 поколения (например,
          i7-6700) или свежее, или процессор от AMD серии минимум 1000 (например, Ryzen 5
          1600) например или свежее. У процессора, установленный в вашем устройстве,
          обязательно должна быть поддержка инструкций AVX2.
        </p>
        <AdditionInfo>
          На сайте Adobe пишется следующее: версии 24.х и более поздние нельзя установить
          в системах с процессорами Intel® 3-го поколения или более ранних версий (а также
          в системах с более ранними процессорами AMD).
        </AdditionInfo>
        <p>
          Решение достаточно простое: вы можете установить{" "}
          <mark className="app">After Effects</mark> версии 23.6. Это будет последняя
          поддерживаемая для вас версия программы. Либо обновите процессор на вашем
          устройстве.
        </p>
        <p>
          Бывают редкие случаи, когда процессор действительно поддерживает инструкции
          AVX2, но он каким-то образом выключен в вашей системе. Для этого вам нужно
          попробовать ввести команду ниже в командную строку от имени администратора и
          перезагрузить устройство.
        </p>
        <code>bcdedit /set xsavedisable 0</code>
        <AdditionInfo>
          Чтобы снова отключить AVX2, введите команду{" "}
          <mark>bcdedit /set xsavedisable 1</mark> и снова перезагрузите устройство.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Ошибка про отсутствие MSVCP140.dll, api-ms-win-crt-runtime-l1-1-0.dll или аналогичные">
        {/* fixme: написать!! */}
        <p>
          Вы забыли установить{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            Microsoft Visual C++ Redistributable
          </a>
          , который можно установить перед установкой After Effects в репаке от{" "}
          <mark>KpoJluk</mark>. Или обновите вашу систему до последней версии, хотя бы до
          Windows 10 22H2.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Точка входа в процедуру не найдена в библиотеке Kernel32.dll">
        {/* fixme: написать!! */}
        <p>
          Вы зачем-то установили <mark className="app">After Effects</mark> версии 2020
          или новее на неподдерживаемую операционную систему, например{" "}
          <mark>Windows 7</mark> или <mark>Windows 8.1</mark>. Adobe давно прекратила
          поддержку этих операционных систем, поэтому для вас максимально последняя версия{" "}
          <mark className="app">After Effects</mark> - это <mark>After Effects 2019</mark>{" "}
          или более старые.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Не найден файл D3DCompiler_47.dll">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="After Effects warning: A rendering plug-in was not found. The default rendering plug-in will be substituted. “Ray-Traced 3D”">
        <p>
          Данное предупреждение появится, когда вы попытаетесь открыть очень старый проект
          с использованием движка <mark className="plugin">Ray-Traced 3D</mark> в новых
          версиях <mark className="app">After Effects</mark>. Его вырезали с версии 2020 и
          выше.
        </p>
        <p>
          Чтобы корректно открыть проект с использованием устаревшего{" "}
          <mark className="plugin">Ray-Traced 3D</mark> - вам нужно открыть его в любой
          версии 2019 года или старше, в котором этот движок доживал последние дни.
        </p>
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
      <DetailsSummary title='"This unlicensed Adobe app is not genuine and will be disabled soon" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Код ошибки 1 или 501 при установке After Effects">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Код ошибки 21 при установке After Effects или 'операционная система не соответствует минимальным требованиям для этой программы установки'">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
