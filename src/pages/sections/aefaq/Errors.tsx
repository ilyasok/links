import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure} from "../../../components/ContentFigure";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
const AEErrors: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="errors"
    >
      <AdditionDanger>
        Пожалуйста, не ленитесь и внимательно прочтите ошибку, которую выдаёт программа. В
        большинстве случаев в описании ошибки уже содержится причина и возможное решение
        проблемы. Если возникают трудности с чтением ошибки или предупреждения на
        английском интерфейсе программы -{" "}
        <a href="https://translate.yandex.ru/">воспользуйтесь переводчиком</a>.
      </AdditionDanger>
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Errors.tsx" />
      <DetailsSummary title='Ошибка 23::40, окно "Out of Memory", "After Effects has unexpectedly run out of memory and cannot complete this export" или "Low memory warning. RAM use has been extended for previews"'>
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
            65536 или 131072 (будет создаваться файл подкачки с изначальным размером в 4
            Гб, который динамически может расширяться до 64 Гб или 128 Гб), в большинстве
            случаев этого хватает.
          </li>
          <li>
            Установите программу{" "}
            <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a> для
            периодической очистки ОЗУ, если у вас Windows, и настройте очистку оперативной
            памяти при достижении 90%.
          </li>
          <li>
            Если у вас включена функция Multi-Frame Render - попробуйте его отключить на
            время. Для этого вам нужно перейти в{" "}
            <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark> и
            убрать галочку с <mark className="ui">Enable Multi-frame Render</mark>.
          </li>
          <li>
            Проверьте настройки в{" "}
            <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark>.
            Если вы туда лезли и что-то настраивали, то есть шанс, что вы неправильно
            прочитали описание настройки и оставили программам Adobe 1 Гб ОЗУ, а
            оставшуюся часть памяти - на другие программы. Для того чтобы выделить всю
            возможную память для программ Adobe, установите значение <mark>0</mark> в
            пункте <mark className="ui">RAM reserved for other applications</mark>. После
            нажатия на <mark className="key">Enter</mark> программа сама установит нужное
            значение.
          </li>
          <li>
            Если вы используете несколько композиций с различными эффектами - попробуйте
            создать прокси для них и использовать их в дальнейшем. Заодно таким образом вы
            уменьшите временные затраты на перепросчёт кадров, если вы не планируете
            дальше изменять эти композиции. Создать прокси для композиций можно в окне{" "}
            <mark className="ui">Project</mark>, найдя нужную композицию и нажав на{" "}
            <mark className="key">ПКМ</mark>. В контекстном меню нужно выбрать{" "}
            <mark className="ui">Create Proxy &gt; Movie</mark>. Далее в окне экспорта вы
            выбираете любой удобный вам формат для создания прокси и начните генерацию
            прокси. После рендера - он автоматически подключится к композиции. Отключить
            прокси у композиции можно также через контекстное меню:{" "}
            <mark className="ui">Set Proxy &gt; None</mark>.
          </li>
          <li>
            Ну и самое главное: если у вас мало оперативной памяти на вашем устройстве -
            докупите ещё и установите в материнскую плату, если возможно. В нынешних
            реалиях для комфортной работы в <mark className="app">After Effects</mark>{" "}
            требуется минимум 32 Гб ОЗУ.
          </li>
        </ul>
        <p>
          Обычно эти советы помогают избавиться от типичных проблем с оперативной памятью,
          но полностью исключить не могут.
        </p>
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
          Это можно сделать через окно <mark className="ui">Project Manager</mark>, открыв
          его с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark> и указав{" "}
          <mark className="ui">Mercury Software Only</mark> в вкладке{" "}
          <mark className="ui">Video Rendering and Effects</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/set_render_on_cpu.png"
          imgTitle="Установка рендера на процессор"
          caption="Project Settings"
        />
        <AdditionInfo>
          Подробнее о каждом пункте на примере использования устройства на связке
          &quot;процессор AMD и видеокарта NVIDIA&quot;:
          <ul>
            <li>
              <mark className="ui">Mercury GPU Acceleration (CUDA)</mark> - программа{" "}
              <u>возможно</u> будет использовать видеокарту вместе с процессором для
              обработки композиций. Но видеокарта не всегда и не во всех случаях будет
              использоваться, так как не все эффекты программы оптимизированы под работу с
              ним.
            </li>
            <li>
              <mark className="ui">Mercury GPU Acceleration (OpenCL или OpenGL)</mark> -
              аналогично предыдущему пункту, но на встроенном видеочипе процессора.
            </li>
            <li>
              <mark className="ui">Mercury Software only</mark> - программа будет
              преимущественно обрабатывать композиции через видеокарту, но может
              использовать видеокарту принудительно, если какому-то эффекту будет
              необходимо это сделать.{" "}
            </li>
          </ul>
        </AdditionInfo>
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
          Для этого вам нужно перейти в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Memory & Performance</mark> и
          убрать галочку с <mark className="ui">Enable Multi-frame Render</mark>.
        </p>
        <ImageFigure
          imgSrc="images/aftereffects/checkbox_multiframe-render.png"
          imgTitle="Переключение работы функции Multi-Frame Render"
          styleClass="figure_windows-dark"
          caption="Preferences"
        />
      </DetailsSummary>
      <DetailsSummary title="Иногда появляются тонкие полосы в композициях при использовании видео-исходников">
        <p>
          Такой баг встречался на некоторых версиях драйверов для видеокарт NVIDIA с 55X
          до 56X. Для решения этой проблемы достаточно обновить драйвера на видеокарту или
          перекодировать видео в <mark className="file">Prores 422</mark> через любой
          удобный вам конвертер видео файлов, например{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Не удалось выполнить преобразование символов Unicode" или "Не удалось загрузить псевдоэффекты" при запуске After Effects'>
        <p>
          Такой баг встречается, когда вы пытаетесь{" "}
          <mark className="app">After Effects</mark> установленный с русским языком.
          Встречался на старых версиях и на версии 24.4, позже исправили.
        </p>
        <p>
          Для решения проблемы нужно переустановить{" "}
          <mark className="app">After Effects</mark> на английский язык. Если вы не хотите
          менять язык - вам нужно обновиться до более свежей версии программы или
          откатиться до более старой.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Красный или синий экран при использовании Twixtor">
        <p>
          Синяя заливка по всему размеру слоя показывает, что вы каким-то образом ушли за
          пределы вашего видео и плагин не понимает, что ему отобразить. Для решения
          синего экрана - уменьшите скорость клипа или расширьте диапазон отображения
          исходника.
        </p>
        <p>
          Красная заливка показывает, что вы установили{" "}
          <mark className="plugin">Twixtor</mark> по очередности не первым по списку
          применённых эффектов. Для решения - просто поставьте эффект первым по списку или
          примените <mark className="plugin">Twixtor</mark> на корректирующий слой.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Красный экран при использовании BorisFX Sapphire">
        <p>
          Это редкий и неприятный баг пиратской{" "}
          <mark className="plugin">BorisFX Sapphire</mark> версий 2024.5X в виде репаков
          от KpoJluk. Вместе с этим багом у вас пропадают все переключатели и настройки у
          применённых эффектов.
        </p>
        <p>
          Для решения этой проблемы установите более поздние релизы от Team V.R. или
          откатитесь на ранние версии репаков от KpoJluk.
        </p>
        <AdditionInfo>
          Скачать популярные репаки плагинов и программ можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="File is damaged или Unable to import file (НАЗВАНИЕ_ФАЙЛА.XYZ) as project (bad format or not readable)">
        <p>
          Если вы открыли проект, прекрасно работавший вчера, но вдруг сегодня он перестал
          открываться, то поздравляю. Возможно, вы экстренно завершили процесс с
          программой или компьютер упал в BSOD. В таком случае восстановить проект будет
          крайне проблематично.
        </p>
        <p>
          Попробуйте найти авто-сохранения проекта и открыть их, а затем продолжить работу
          с них. Если авто-сохранения нет, или очень старые, то снова мои соболезнования.
          В следующий раз создавайте резервные копии проекта или настройте облачное
          хранилище с поддержкой отката файлов, например{" "}
          <a href="https://360.yandex.ru/">Яндекс.Диск</a>.
        </p>
        <AdditionInfo>
          Интересный факт: при нажатии на <mark className="key">Ctrl + S</mark>, таймер
          автоматического авто-сохранения сбрасывается. Поэтому рекомендуется поставить
          минимальное время для авто-сохранений в настройках программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Auto-Save</mark> и укажите
          значение от 1 до 3 минуты.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="This project must be converted from version XX.X.X (Windows/macOS). The original file will be unchanged">
        <AdditionInfo>
          Данное окно не является ошибкой, а предупреждением.{" "}
          <b>Не забудьте сохранить конвертированный проект на ваш диск.</b>
        </AdditionInfo>
        <p>
          Вы открыли проект, созданный в более ранней версии{" "}
          <mark className="app">After Effects</mark> в более свежей версии программы. В
          таком случае программа переконвертирует исходный файл проекта для работы с более
          новой версией <mark className="app">After Effects</mark>. Исходный файл проекта
          не будет затронут и каким-либо образом изменён. Такое часто бывает при
          обновлении с версии на версию и в этом нет ничего страшного.
        </p>
      </DetailsSummary>
      <DetailsSummary title="The file you are attempting to open was created with After Effects version XX.X.X (Windows/macOS) and cannot be opened with this version">
        <p>
          Вы пытаетесь открыть проект, созданный в более поздней версии{" "}
          <mark className="app">After Effects</mark>, чем та, что у вас установлена. У вас
          нет другого выхода, кроме как просить пользователя более новой версии{" "}
          <mark className="app">After Effects</mark> сохранить проект под более старую
          версию программы. Учтите, что свежие версии программы уже не позволяют сохранить
          проекты для версии 18.X или 22.X, для этого нужно городить цепочку из
          установленных нескольких версий на вашем компьютере и перегонять по цепочке.
        </p>
        <p>
          Для конвертации файла проекта для старой версии{" "}
          <mark className="app">After Effects</mark> вам нужно перейти в{" "}
          <mark className="ui">File</mark>, в контекстном меню выбрать{" "}
          <mark className="ui">Save As</mark> и выбрать минимально возможную версию для
          конвертации.
        </p>
        <p style={{fontSize: "12px", opacity: "0.5"}}>
          Или просто обновите программу до более свежей версии, не мучайте себя
          конвертациями.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Your disk cache folder is on a drive that does not have enough avaiable space to safely store the full amount specified in your preferences. Please make more space available or go to Media & Disk Cache preferences to change the folder or maximium disk cache size">
        <p>
          В данном предупреждении буквально написано, что не хватает места на разделе, где
          указано хранение дискового кэша. Для решения этой проблемы просто освободите
          место на разделе, где хранится дисковый кэш.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/low_diskcache_space_warning.png"
          imgTitle="Предупреждение о недостаточном свободном месте на диске"
          caption="Warning"
        />
        <p>
          Вы можете уменьшить максимальное количество гигабайт для дискового кэша или
          изменить местоположение хранения в настройках{" "}
          <mark className="app">After Effects</mark>. Для этого перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark> и
          уменьшите максимальный размер дискового кэша или укажите другое расположение,
          например на другом диске или внешнем накопителе.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/preferences-media_and_disk_cache.png"
          imgTitle="Настройка дискового кэша"
          caption="Preferences"
        />
        <p style={{fontSize: "12px", opacity: "0.5"}}>
          Или просто отключите дисковый кэш, убрав галочку с{" "}
          <mark className="ui">Enable Disk Cache</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="After Effects error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory. Please check your settings in Media and Disk Cache Preferences">
        <AdditionInfo>Не является критичной ошибкой.</AdditionInfo>
        <p>
          Данная ошибка указывает на то, что настройки кэша в программе ссылаются на
          несуществующий раздел. Обычно это происходит при переносе настроек программы из
          одного компьютера на другой.
        </p>
        <p>
          Программа в таком случае укажет на системную папку временных файлов, ссылаясь на
          переменные среды. Для настройки расположения дискового кэша перейдите в{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Media & Disk Cache</mark> и
          укажите свое местоположение. Также в этом разделе вы можете указать максимальный
          размер для дискового кэша или очистить его.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/preferences-media_and_disk_cache.png"
          imgTitle="Настройка дискового кэша"
          caption="Preferences"
        />
        <p style={{fontSize: "12px", opacity: "0.5"}}>
          Или просто отключите дисковый кэш, убрав галочку с{" "}
          <mark className="ui">Enable Disk Cache</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Error: overflow converting ratio denominators (17::19) или (17::18)">
        <p>
          Данная ошибка может выскочить по совершенно разным причинам и чаще всего на
          старых версиях <mark className="app">After Effects</mark>. Если вы сталкиваетесь
          с трудностями при открытии и работе с проектами, создайте новый проект и
          импортируйте туда композиции из проекта, где вылезает данная ошибка.
        </p>
        <p>
          Или попробуйте перекодировать исходники через{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>, если
          сталкиваетесь с данной проблемой при импорте какого-нибудь исходника.
        </p>
        {/* todo: дописать, если найдутся ещё варианты решения */}
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
            <mark className="app">After Effects 25.1 и новее</mark> требует{" "}
            <mark className="app">Cinema 4D 2025.X.X</mark>.
          </li>
          <li>
            <mark className="app">After Effects 24.1-25.0</mark> требует{" "}
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              }}
            >
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/composition_settings_3drenderer_cinema4d.png"
                imgTitle="Composition Settings"
                caption="Composition Settings"
              />
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/cinema4d_renderer_options.png"
                imgTitle="Choose CINEMA 4D Installation"
                caption="Choose CINEMA 4D Installation"
              />
              <ImageFigure
                styleClass="figure_windows-dark"
                imgSrc="images/aftereffects/choose_cinema4d_installation.png"
                imgTitle="Choose CINEMA 4D Installation"
                caption="Choose CINEMA 4D Installation"
              />
            </div>
          </li>
        </ul>
        <p>
          Если у вас установлен <mark className="app">After Effects</mark> из{" "}
          <mark className="app">Creative Cloud</mark> - достаточно установить{" "}
          <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
          <mark className="ui">
            Установленные приложения &gt; After Effects &gt; Подключаемые модули &gt;
            Cinema 4D &gt; Установить
          </mark>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary title="Frame rate mismatch, or footage with fields found. For best Roto Brush & Refine Edge results, set the composition to XX fps to match the layer source">
        <p>
          Данное предупреждение показывается при использовании инструмента{" "}
          <mark className="plugin">Rotobrush</mark> и оповещает пользователя о том, что
          количество кадров в секунду у исходника отличается от указанного количества
          кадров в секунду в настройках композиции. Например, вы используете исходник с
          частотой кадров 50 к/c, а композиция настроена на 30. Программа прямым текстом
          скажет, что нужно поставить верный фреймрейт в настройках композиции и какое
          именно значение, чтобы всё вырезалось верно.
        </p>
        <AdditionInfo>
          Чтобы открыть настройки композиции - нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + K</mark>.
        </AdditionInfo>
        <p>
          Если вы не хотите менять значение FPS в настройках композиции, то для вас есть
          три способа псевдо-решения:
        </p>
        <ul>
          <li>
            Создайте прекомпозицию с нужным исходником, а затем прямо на слое с
            свежесозданной прекомпозицией начинаем делать ротоскопинг через{" "}
            <mark className="plugin">Rotobrush</mark>.
          </li>
          <li>
            Интерпретируйте FPS у исходника. Для этого перейдите в окно Project, найдите
            там ваш исходник и нажмите на него <mark className="key">ПКМ</mark>. Затем в
            контекстном меню выберите{" "}
            <mark className="ui">Interpret Footage &gt; Conform to frame rate</mark>.
          </li>
          <li>
            Просто перекодировать исходник через{" "}
            <a href="https://www.shutterencoder.com/">Shutter Encoder</a> с указанием
            нужного FPS и заменить позже в проекте через{" "}
            <mark className="ui">Replace Footage &gt; File</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary title="Content Aware Fill Error: Initialization Failed">
        <p>
          Данная ошибка может вылезти по совершенно разным причинам. Одна из них -
          кириллица в пути к <mark className="file">.aep</mark> файлу, в названии
          файла-исходника или в названии композиции. Для решения постарайтесь отказаться
          от кириллицы в путях и названиях, а также попробуйте перенести файлы проекта из
          внешнего жёсткого диска на внутренний вашего устройства, если они там
          расположены. После этого попробуйте воспользоваться{" "}
          <mark className="plugin">Content Aware Fill</mark> заново.
        </p>
        <p>
          Иногда ещё такое может произойти из-за неверно установленного цветового профиля
          в настройках проекта. Для этого проверьте ваше цветовое пространство во вкладке{" "}
          <mark className="ui">Color</mark> в <mark className="ui">Project Manager</mark>,
          которое открывается комбинацией клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark>. Затем укажите значение{" "}
          <mark className="ui">None</mark> или любое другое в пункте{" "}
          <mark className="ui">Working Color Space</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/change_working_color_space.png"
          imgTitle="Изменение цветового профиля"
          caption="Project Settings"
        />
      </DetailsSummary>
      <DetailsSummary title="Layer must match Composition and use default transform values при использовании 3D Camera Tracker">
        <p>
          Данная ошибка прямым текстом указывает на то, что слой должен быть по размеру
          композиции, а также не быть перемещённым, повёрнут или ещё каким-то образом
          видоизменён.
        </p>
        <p>
          Если вы не хотите или не можете изменить трансформацию и размер слоя, то
          сделайте прекомпозицию через комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + C</mark>с переносом аттрибутов на новую
          композицию, выбрав{" "}
          <mark className="ui">Move all attributes into the new composition</mark>, а
          затем на нём сделайте трекинг.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Analysis Solve Failed" или "Unable to solve camera for this frame" при использовании 3D Camera Tracker'>
        <p>
          Если у вас исходник c слабым контрастом - накрутите контрастности через{" "}
          <mark className="plugin">Curves</mark> или{" "}
          <mark className="plugin">Brightness & Contrast</mark>, а затем повторите анализ
          заново. Если у оператора сильно трясутся руки, попробуйте сначала применить{" "}
          <mark className="plugin">Warp Stabilizer</mark>, а только потом уже создавать
          3D-трекинг.
        </p>
        <p>
          Иногда избавлению от ошибки может помочь изменение{" "}
          <mark className="ui">Solve Method</mark> или установка галочки{" "}
          <mark className="ui">Detailed Analysis</mark> в вкладке{" "}
          <mark className="ui">Advanced</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/aftereffects/detailed_analysis-3d_camera_tracker.png"
          imgTitle="Включение детального анализа исходника"
          caption="Effect Controls"
        />
        {/* todo: дописать по возможности */}
      </DetailsSummary>
      <DetailsSummary title='Вылезло "System Compatibility Report" при запуске After Effects'>
        <AdditionInfo>
          Когда вы видите это окно при запуске - не надо паниковать. Это не является
          ошибкой или серьёзной проблемой, но исправлять причину её появления нам в любом
          случае нужно. Запустить программу можно как обычно, нажав на{" "}
          <mark className="ui">Continue with known issues</mark>.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/system_compatibility_report.png"
          imgTitle="Предупреждение о несовместимости оборудования с программой"
          caption="System Compatibility Report"
        />
        <p>
          В данном окне обычно пишутся возможные проблемы с использованием программы,
          например устаревшие драйвера или плагины с каким-то критическим багом.
        </p>
        <p>
          Если вы в курсе о причинах некой несовместимости и вы согласны работать дальше с
          некими ограничениями (например отсутствие режима Draft 3D), лишь бы не видеть
          это окно при запуске - вы можете отключить это окно, программа даёт это сделать.
        </p>
        <p>
          Для отключения этого окна перейдите в настройки программы:{" "}
          <mark className="ui">Edit &gt; Preferences &gt; Startup & Repair</mark>. Затем в
          этом разделе отключите галочку с пункта{" "}
          <mark className="ui">Show System Compatibility Issues</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/show_system_compatibility_issues.png"
          imgTitle="Отключаем предупреждения о несовместимости оборудования с программой"
          caption="Preferences"
        />
        <AdditionInfo>
          В старых версиях <mark className="app">After Effects</mark> этот пункт находится
          в разделе <mark className="ui">General</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Advanced 3D is not supported by the current software">
        <p>
          Ваша видеокарта не соответствует требованиям и не поддерживает функцию{" "}
          <mark className="plugin">Advanced 3D</mark>. Проверьте на наличие и соответствие
          вашей видеокарты в{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html">
            системных требованиях
          </a>{" "}
          для этого модуля рендеринга.
        </p>
        <p>
          Если ваш графический процессор имеется в{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html">
            списке поддерживаемых видеокарт
          </a>
          , но при использовании <mark className="plugin">Advanced 3D</mark> программа
          вылетает или не даёт ею воспользоваться - попробуйте обновить{" "}
          <mark className="app">After Effects</mark> до последней версии или попробуйте
          запустить <mark className="app">After Effects</mark> от имени администратора.
          Чтобы каждый раз не прожимать кнопку &quot;Запустить от имени
          администратора&quot;, установите галочку &quot;Запускать от имени
          администратора&quot; в свойствах программы.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/aftereffects/open_ae_as_admin.mp4"
          caption="Настройка ярлыка для дальнейшего запуска от имени администратора"
        />
        <AdditionInfo>
          Совет про обновление даю не просто так. Когда эта функция только-только выходила
          - моя GTX 1060 на 3 Гб VRAM отказывалась работать с ним (хотя карта была в{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/using/advanced-3d-renderer.html">
            списке
          </a>
          ), также не работала функция Draft 3D долгое время. После нескольких обновлений
          всё таки мне вернули и <mark className="plugin">Advanced 3D</mark>, и Draft 3D,
          правда через пару месяцев я уже успел обновиться до RTX 4060 Ti.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Ошибка при запуске приложения 0xc0000142">
        <p>
          Вы пытаетесь запустить приложение на устройстве с процессором без поддержки
          инструкций AVX2. В{" "}
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
          в системах с процессорами Intel® 3-го поколения или более ранних версий (а
          также в системах с более ранними процессорами AMD).
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
        <p>
          Вы забыли установить{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            Microsoft Visual C++ Redistributable
          </a>
          , который можно установить перед установкой After Effects в репаке от{" "}
          <mark>KpoJluk</mark> или вручную из{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">этой ссылки</a>. Или
          обновите вашу систему до последней версии, хотя бы до Windows 10 22H2.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Точка входа в процедуру не найдена в библиотеке Kernel32.dll или не могу запустить программу, хотя Visual C++ Redistributable установил">
        <p>
          Вы зачем-то установили <mark className="app">After Effects</mark> версии 2020
          или новее и пытаетесь запустить программу на неподдерживаемой операционной
          системе, например <mark>Windows 7</mark> или <mark>Windows 8.1</mark>. Adobe
          давно прекратила поддержку этих операционных систем, поэтому для вас максимально
          последняя версия <mark className="app">After Effects</mark> - это{" "}
          <mark>After Effects 2019</mark> или более старые.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Не найден файл D3DCompiler_47.dll">
        <p>
          Для решения этой ошибки при запуске программы - распакуйте архив{" "}
          <a
            download
            href="images/files/D3DCompiler_47.zip"
          >
            D3DCompiler_47.zip
          </a>
          , откройте папку с архитектурой и возьмите оттуда{" "}
          <mark className="file">.dll</mark> файл. Затем этот файл переместите в
          директорию где установлена программа, по умолчанию это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe After Effects 20XX</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="After Effects warning: A rendering plug-in was not found. The default rendering plug-in will be substituted. “Ray-Traced 3D”">
        <p>
          Данное предупреждение появится, когда вы попытаетесь открыть очень старый проект
          с использованием движка <mark className="plugin">Ray-Traced 3D</mark> в новых
          версиях <mark className="app">After Effects</mark>. Его вырезали с версии 2020 и
          выше, соответственно в вы не сможете там открыть проект.
        </p>
        <p>
          Чтобы корректно открыть проект с использованием устаревшего{" "}
          <mark className="plugin">Ray-Traced 3D</mark> - вам нужно открыть его в любой
          версии 2019 года или старше, в котором этот движок доживал последние дни.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Warning: This project uses fonts that are not currently available on this computer. Font substitution will occur until the originals become available">
        <AdditionInfo>
          Это окно является не ошибкой, а предупреждением. Вы можете запустить проект без
          установленного шрифта. В композициях с отсутствующим шрифтом вы можете
          установить другой шрифт самостоятельно.
        </AdditionInfo>
        <p>
          Данное окно при запуске предупреждает о том, что вы запустили проект с
          использованием шрифта, который не установлен в вашей системе. Для этого
          попросите у автора проекта файл с шрифтом и установите его в соответствии с
          вашей операционной системой. Обычно в этом окне прилагается список отсутствующих
          шрифтов.
        </p>
        <AdditionInfo>
          Если автор проекта не может предоставить шрифт, вам нужно будет поискать его
          вручную в сети Интернет.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/missing_fonts_warning.png"
          imgTitle="Предупреждение об отсутствующих шрифтах в системе"
          caption="Предупреждение об отсутствующих шрифтах в системе"
        />
        <p>
          Если вы установили шрифт, а это сообщение никуда не пропало - просто
          переназначьте шрифты на те, что вы недавно установили. Бывает такое, что один и
          тот же шрифт распространяется под разными названиями и{" "}
          <mark className="app">After Effects</mark> не понимает, как ему нужно
          использовать.
        </p>
      </DetailsSummary>
      <DetailsSummary title="This project contains references to missing effects. Please install the following effects to restore these references">
        <p>
          Данное предупреждение указывает на то, что у вас не установлены какие-то
          эффекты, которые используются в проекте.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/aftereffects/missing_effects_warning.png"
          imgTitle="Предупреждение об отсутствующих эффектах"
          caption="Warning"
        />
        <p>
          Для решения этой проблемы - просто доустановите эффекты и плагины из этого
          списка, а затем перезапустите программу. В редких случаях бывает такое, что
          эффект в зависимости от версии плагина или{" "}
          <mark className="app">After Effects</mark> могут переименоваться. Поэтому вам
          нужно их будет заменить вручную.
        </p>
        <AdditionInfo>
          Иногда многие спрашивают, что за эффекты с приставкой <mark>S_</mark> и{" "}
          <mark>BCC</mark>? Эффекты с такой приставкой поставляются компанией{" "}
          <mark>BorisFX</mark> в пакетах <mark className="plugin">Sapphire</mark> и{" "}
          <mark className="plugin">Continuum</mark>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="After Effects warning: The following plugins have failed to load. Please reinstall these plugins">
        <p>
          Некоторые плагины не могут загрузиться по причине того, что они либо битые и
          криво установились, либо не поддерживаются текущей версией{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <p>
          Ещё иногда такое бывает из-за отсутствия обновлений пакетов{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            Microsoft C++ Visual Redistributable
          </a>
          . Для этого обновите все пакеты или доустановите недостающие с помощью{" "}
          <a href="https://github.com/abbodi1406/vcredist/releases/">
            репака от abbodi1406
          </a>
          , перезагрузите компьютер и попробуйте запустить проект с плагинами, которые до
          этого не могли загрузиться.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"Приложение Adobe Creative Cloud, необходимое для устранения проблемы отсутствует или повреждено..."?'>
        <p>
          Вы зачем-то установили приложение <mark className="app">Creative Cloud</mark>{" "}
          рядом с пиратскими программами, у которых вырезан модуль{" "}
          <mark className="app">creative Cloud</mark>. А потом само приложение{" "}
          <mark className="app">Creative Cloud</mark> удалили, оставив за собой
          нежелательные хвосты.
        </p>
        <p>
          Решение довольно простое - снесите приложения и поставьте их заново, чтобы
          лишние зависимости программм от <mark className="app">Creative Cloud</mark>{" "}
          почистились. Да, вы не ослышались. Для очистки системы от некоторых или всех
          программ от Adobe можно воспользоваться консольной утилитой{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Clenaer
          </a>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary title="Вылетает Adobe Media Encoder после установки плагинов BorisFX Sapphire">
        <p>
          Это довольно популярный баг, который мешает нормальному запуску{" "}
          <mark className="app">Media Encoder</mark> при наличии установленных в системе
          плагинов <mark className="plugin">BorisFX Sapphire</mark>. В более поздних
          версиях плагинов и программ это исправили, но если вы с таким столкнулись - вам
          достаточно просто указать{" "}
          <mark className="ui">режим совместимости с Windows 8</mark> в свойствах ярлыка
          программы.
        </p>
        <p>
          Для этого открываем свойства ярлыка, переходим в вкладку{" "}
          <mark className="ui">Совместимость</mark> и нажимаем галочку рядом с пунктом{" "}
          <mark className="ui">
            Запускать программу в режиме совместимости с Windows 8
          </mark>
          .
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/compatibility_media_encoder.mp4"
          caption="Настройка режима совместимости"
        />
        <p>
          После проделанных действий программа при запуске не должна вылетать. Если всё
          ещё вылетает, обновите плагины <mark className="plugin">BorisFX Sapphire</mark>{" "}
          до последних версий.
        </p>
      </DetailsSummary>
      <DetailsSummary title='"This unlicensed Adobe app is not genuine and will be disabled soon" или что-то похожее с красной полоской при запуске, но на другом языке. Как запустить программу нормально?'>
        <p>Программа от Adobe решила достучаться в интернет. Причин может быть две:</p>
        <ul>
          <li>
            Вы забыли отключить VPN. С наплывом блокировок различных ресурсов на
            территории СНГ пользователи стали часто пользоваться обходами, да вот забыли
            что не все VPN-клиенты корректно работают с правилами в{" "}
            <mark className="file">hosts</mark> и системном брандмауэре. Соответственно
            клиентами они игнорируются и пускают доступ к интернету программам.
          </li>
          <li>
            Если вы не пользуетесь VPN, то возможно, что во время установки программ от
            Adobe что-то не прописалось в файл <mark className="file">hosts</mark> или
            кто-то удалил оттуда строки.
          </li>
        </ul>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                Если вы хотите использовать одновременно VPN и{" "}
                <mark className="app">After Effects</mark>, то изучите настройки вашего
                VPN-клиента. Возможно там есть пункт про раздельное тунеллирование или
                список исключений, не позволяющий прогонять трафик программы через VPN.
              </p>
              <p>
                Если вы не используете VPN на устройстве с Windows, то попробуйте
                отредактровать файл <mark className="file">hosts</mark>. Для этого вам
                нужно перейти в{" "}
                <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать
                файл <mark className="path">hosts</mark> в любое удобное место, открыть
                любой текстовый редактор (например Notepad++ или VS Code) и внести строки
                чуть ниже в конец файла. Затем сохраните отредактированный файл и
                перенесите его обратно в{" "}
                <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с
                заменой. Также попробуйте скрипт{" "}
                <a href="https://github.com/ph33nx/WinMasterBlocker">WinMasterBlocker</a>{" "}
                для автоматического внесения правил блокировки доступа в интернет в
                брандмауэр.
              </p>
              <AdditionWarning>
                Для изменения системных файлов требуются права администратора.
              </AdditionWarning>
              <code>
                0.0.0.0 ic.adobe.io
                <br />
                0.0.0.0 cc-api-data.adobe.io
                <br />
                0.0.0.0 genuine.adobe.com
                <br />
                0.0.0.0 assets.adobedtm.
                <br />
                0.0.0.0 cc-api-data.adobe.io
                <br />
                0.0.0.0 ic.adobe.io
                <br />
                0.0.0.0 lm.licenses.adobe.com
                <br />
                0.0.0.0 lmlicenses.wip4.adobe.com
                <br />
                0.0.0.0 lm-prd-da1.licenses.adobe.com
                <br />
                0.0.0.0 activate.adobe.com
                <br />
                0.0.0.0 activate.wip4.adobe.com
                <br />
                0.0.0.0 practivate.adobe.com
                <br />
                0.0.0.0 practivate-da1.adobe.com
                <br />
                0.0.0.0 na1r.services.adobe.com
                <br />
                0.0.0.0 hlrcv.stage.adobe.com
                <br />
                0.0.0.0 uds.licenses.adobe.com
                <br />
                0.0.0.0 licenses.adobe.com
                <br />
                0.0.0.0 license.adobe.com
                <br />
                0.0.0.0 helpexamples.com
                <br />
                0.0.0.0 activate-sea.adobe.com
                <br />
                0.0.0.0 activate-sjc0.adobe.com
                <br />
                0.0.0.0 ereg.adobe.com
                <br />
                0.0.0.0 activate.wip3.adobe.com
                <br />
                0.0.0.0 wip3.adobe.com
                <br />
                0.0.0.0 ereg.wip3.adobe.com
                <br />
                0.0.0.0 wwis-dubc1-vip60.adobe.com <br />
                0.0.0.0 prod.adobegenuine.com
                <br />
                0.0.0.0 gocart-web-prod-ue1-alb-1461435473.us-east-1.elb.amazonaws.com
                <br />
                0.0.0.0 dyzt55url8.adobe.io
                <br />
                0.0.0.0 b5kbg2ggog.adobe.io
                <br />
                0.0.0.0 5zgzzv92gn.adobe.io
                <br />
                0.0.0.0 0mo5a70cqa.adobe.io
                <br />
                0.0.0.0 pojvrj7ho5.adobe.io
                <br />
                0.0.0.0 i7pq6fgbsl.adobe.io
                <br />
                0.0.0.0 ph0f2h2csf.adobe.io
                <br />
                0.0.0.0 r3zj0yju1q.adobe.io
                <br />
                0.0.0.0 9ngulmtgqi.adobe.io
                <br />
                0.0.0.0 guzg78logz.adobe.io
                <br />
                0.0.0.0 2ftem87osk.adobe.io
                <br />
                0.0.0.0 1b9khekel6.adobe.io
                <br />
                0.0.0.0 3d3wqt96ht.adobe.io
                <br />
                0.0.0.0 23ynjitwt5.adobe.io
                <br />
                0.0.0.0 4vzokhpsbs.adobe.io
                <br />
                0.0.0.0 3ca52znvmj.adobe.io
                <br />
                0.0.0.0 r5hacgq5w6.adobe.io
                <br />
                0.0.0.0 gw8gfjbs05.adobe.io
                <br />
                0.0.0.0 lre1kgz2u4.adobe.io
                <br />
                0.0.0.0 ij0gdyrfka.adobe.io
                <br />
                0.0.0.0 8ncdzpmmrg.adobe.io
                <br />
                0.0.0.0 7sj9n87sls.adobe.io
                <br />
                0.0.0.0 7m31guub0q.adobe.io
                <br />
                0.0.0.0 7g2gzgk9g1.adobe.io
                <br />
                0.0.0.0 cd536oo20y.adobe.io
                <br />
                0.0.0.0 dxyeyf6ecy.adobe.io
                <br />
                0.0.0.0 jc95y2v12r.adobe.io
                <br />
                0.0.0.0 1hzopx6nz7.adobe.io
                <br />
                0.0.0.0 m59b4msyph.adobe.io
                <br />
                0.0.0.0 69tu0xswvq.adobe.io
                <br />
                0.0.0.0 vajcbj9qgq.adobe.io
                <br />
                0.0.0.0 p7uxzbht8h.adobe.io
                <br />
                0.0.0.0 vcorzsld2a.adobe.io
                <br />
                0.0.0.0 p0bjuoe16a.adobe.io
                <br />
                0.0.0.0 fqaq3pq1o9.adobe.io
                <br />
                0.0.0.0 aoorovjtha.adobe.io
                <br />
                0.0.0.0 pv256ds6c99.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2l4573ukh.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv24v41zibm.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2nn9r0j2r.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2yt8sqmh0.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv218qmzox6.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv218qmzox6.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2b0yc07ls.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2nn9r0j2r.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2yt8sqmh0.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv256ds6c99.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2zp87w2eo.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2ys4tjt9x.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2ska86hnt.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv24b15c1z0.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv256ds6c99.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2ska86hnt.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2b0yc07ls.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2l4573ukh.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv24v41zibm.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2ska86hnt.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2l4573ukh.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv24v41zibm.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2zp87w2eo.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2ys4tjt9x.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2ys4tjt9x.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2fcqvzl1r.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2fcqvzl1r.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv24b15c1z0.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv24b15c1z0.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2bqhsp36w.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2b0yc07ls.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv218qmzox6.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2yt8sqmh0.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2fcqvzl1r.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2bqhsp36w.prod.cloud.adobe.io
                <br />
                0.0.0.0 pv2nn9r0j2r.prod.cloud.adobe.io
                <br />
                0.0.0.0 cv2zp87w2eo.prod.cloud.adobe.io
                <br />
                0.0.0.0 iv2bqhsp36w.prod.cloud.adobe.io
                <br />
                0.0.0.0 yj8yx3y8zo.adobestats.io
                <br />
                0.0.0.0 mpsige2va9.adobestats.io
                <br />
                0.0.0.0 ujqx8lhpz4.adobestats.io
                <br />
                0.0.0.0 y2r8jzsv4p.adobestats.io
                <br />
                0.0.0.0 eq7dbze88m.adobestats.io
                <br />
                0.0.0.0 q9hjwppxeq.adobestats.io
                <br />
                0.0.0.0 skg7pqn0al.adobestats.io
                <br />
                0.0.0.0 9iay914wzy.adobestats.io
                <br />
                0.0.0.0 yuzuoqo0il.adobestats.io
                <br />
                0.0.0.0 2o3c6rbyfr.adobestats.io
                <br />
                0.0.0.0 vicsj37lhf.adobestats.io
                <br />
                0.0.0.0 nhc73ypmli.adobestats.io
                <br />
                0.0.0.0 oxiz2n3i4v.adobestats.io
                <br />
                0.0.0.0 2qjz50z5lf.adobestats.io
                <br />
                0.0.0.0 i2x2ius9o5.adobestats.io
                <br />
                0.0.0.0 lnwbupw1s7.adobestats.io
                <br />
                0.0.0.0 n746qg9j4i.adobestats.io
                <br />
                0.0.0.0 2621x1nzeq.adobestats.io
                <br />
                0.0.0.0 r9r6oomgms.adobestats.io
                <br />
                0.0.0.0 99pfl4vazm.adobestats.io
                <br />
                0.0.0.0 zekdqanici.adobestats.io
                <br />
                0.0.0.0 g9cli80sqp.adobestats.io
                <br />
                0.0.0.0 dyv9axahup.adobestats.io
                <br />
                0.0.0.0 17ov1u3gio.adobestats.io
                <br />
                0.0.0.0 7l4xxjhvkt.adobestats.io
                <br />
                0.0.0.0 wcxqmuxd4z.adobestats.io
                <br />
                0.0.0.0 l558s6jwzy.adobestats.io
                <br />
                0.0.0.0 85n85uoa1h.adobestats.io
                <br />
                0.0.0.0 zrao5tdh1t.adobestats.io
                <br />
                0.0.0.0 eftcpaiu36.adobestats.io
                <br />
                0.0.0.0 2qj10f8rdg.adobestats.io
                <br />
                0.0.0.0 ffs3xik41x.adobestats.io
                <br />
                0.0.0.0 g3y09mbaam.adobestats.io
                <br />
                0.0.0.0 x880ulw3h0.adobestats.io
                <br />
                0.0.0.0 jaircqa037.adobestats.io
                <br />
                0.0.0.0 ppn4fq68w7.adobestats.io
                <br />
                0.0.0.0 1ei1f4k9yk.adobestats.io
                <br />
                0.0.0.0 6j0onv1tde.adobestats.io
                <br />
                0.0.0.0 pljm140ld1.adobestats.io
                <br />
                0.0.0.0 50sxgwgngu.adobestats.io
                <br />
                0.0.0.0 u31z50xvp9.adobestats.io
                <br />
                0.0.0.0 2dhh9vsp39.adobestats.io
                <br />
                0.0.0.0 rb0u8l34kr.adobestats.io
                <br />
                0.0.0.0 3odrrlydxt.adobestats.io
                <br />
                0.0.0.0 3u6k9as4bj.adobestats.io
                <br />
                0.0.0.0 curbpindd3.adobestats.io
                <br />
                0.0.0.0 4dviy9tb3o.adobestats.io
                <br />
                0.0.0.0 yb6j6g0r1n.adobestats.io
                <br />
                0.0.0.0 0bj2epfqn1.adobestats.io
                <br />
                0.0.0.0 ura7zj55r9.adobestats.io
                <br />
                0.0.0.0 xesnl0ss94.adobestats.io
                <br />
                0.0.0.0 xbd20b9wqa.adobestats.io
                <br />
                0.0.0.0 cr2fouxnpm.adobestats.io
                <br />
                0.0.0.0 zmg3v61bbr.adobestats.io
                <br />
                0.0.0.0 bk7y1gneyk.adobestats.io
                <br />
                0.0.0.0 dx0nvmv4hz.adobestats.io
                <br />
                0.0.0.0 eyiu19jd5w.adobestats.io
                <br />
                0.0.0.0 561r5c3bz1.adobestats.io
                <br />
                0.0.0.0 54cu4v5twu.adobestats.io
                <br />
                0.0.0.0 6eidhihhci.adobestats.io
                <br />
                0.0.0.0 31q40256l4.adobestats.io
                <br />
                0.0.0.0 bs2yhuojzm.adobestats.io
                <br />
                0.0.0.0 p50zgina3e.adobestats.io
                <br />
                0.0.0.0 yri0bsu0ak.adobestats.io
                <br />
                0.0.0.0 zu8yy3jkaz.adobestats.io
                <br />
                0.0.0.0 m59cps6x3n.adobestats.io
                <br />
                0.0.0.0 kgj0gsg3cf.adobestats.io
                <br />
                0.0.0.0 uf0onoepoe.adobestats.io
                <br />
                0.0.0.0 28t4psttw7.adobestats.io
                <br />
                0.0.0.0 hjs70w1pdi.adobestats.io
                <br />
                0.0.0.0 klw4np5a1x.adobestats.io
                <br />
                0.0.0.0 lz2x4rks1u.adobestats.io
                <br />
                0.0.0.0 pc6sk9bygv.adobestats.io
                <br />
                0.0.0.0 t9phy8ywkd.adobestats.io
                <br />
                0.0.0.0 dfnm3epsb7.adobestats.io
                <br />
                0.0.0.0 5ky0dijg73.adobestats.io
                <br />
                0.0.0.0 124hzdrtoi.adobestats.io
                <br />
                0.0.0.0 69rxfbohle.adobestats.io
                <br />
                0.0.0.0 9uffo0j6wj.adobestats.io
                <br />
                0.0.0.0 kwi5n2ruax.adobestats.io
                <br />
                0.0.0.0 nh8wam2qd9.adobestats.io
                <br />
                0.0.0.0 rm3xrk61n1.adobestats.io
                <br />
                0.0.0.0 rmnia8d0tr.adobestats.io
                <br />
                0.0.0.0 vrz9w7o7yv.adobestats.io
                <br />
                0.0.0.0 5m62o8ud26.adobestats.io
                <br />
                0.0.0.0 esx6aswt5e.adobestats.io
                <br />
                0.0.0.0 hwfqhlenbg.adobestats.io
                <br />
                0.0.0.0 je5ufnklzs.adobestats.io
                <br />
                0.0.0.0 jmx50quqz0.adobestats.io
                <br />
                0.0.0.0 jsxfc5yij1.adobestats.io
                <br />
                0.0.0.0 vfsjlgw02v.adobestats.io
                <br />
                0.0.0.0 yshuhythub.adobestats.io
                <br />
                0.0.0.0 zrbzvc9mel.adobestats.io
                <br />
                0.0.0.0 rj669kv2lc.adobestats.io
                <br />
                0.0.0.0 agxqobl83f.adobestats.io
                <br />
                0.0.0.0 zr60t8ia88.adobestats.io
                <br />
                0.0.0.0 a1y2b7wsna.adobestats.io
                <br />
                0.0.0.0 hf6s5jdv95.adobestats.io
                <br />
                0.0.0.0 tprqy2lgua.adobestats.io
                <br />
                0.0.0.0 c474kdh1ky.adobestats.io
                <br />
                0.0.0.0 d101mw99xq.adobestats.io
                <br />
                0.0.0.0 oh41yzugiz.adobestats.io
                <br />
                0.0.0.0 jwonv590qs.adobestats.io
                <br />
                0.0.0.0 7k1t5im229.adobestats.io
                <br />
                0.0.0.0 3xuuprv9lg.adobestats.io
                <br />
                0.0.0.0 9wm8di7ifk.adobestats.io
                <br />
                0.0.0.0 ebvf40engd.adobestats.io
                <br />
                0.0.0.0 hq0mnwz735.adobestats.io
                <br />
                0.0.0.0 j134yk6hv5.adobestats.io
                <br />
                0.0.0.0 j14y4uzge7.adobestats.io
                <br />
                0.0.0.0 jye4987hyr.adobestats.io
                <br />
                0.0.0.0 kvi8uopy6f.adobestats.io
                <br />
                0.0.0.0 lv5yrjxh6i.adobestats.io
                <br />
                0.0.0.0 m95pt874uw.adobestats.io
                <br />
                0.0.0.0 pdb7v5ul5q.adobestats.io
                <br />
                0.0.0.0 px8vklwioh.adobestats.io
                <br />
                0.0.0.0 qmyqpp3xs3.adobestats.io
                <br />
                0.0.0.0 r1lqxul5sr.adobestats.io
                <br />
                0.0.0.0 tf3an24xls.adobestats.io
                <br />
                0.0.0.0 tyradj47rp.adobestats.io
                <br />
                0.0.0.0 vp7ih9xoxg.adobestats.io
                <br />
                0.0.0.0 x5cupsunjc.adobestats.io
                <br />
                0.0.0.0 ll8xjr580v.adobestats.io
                <br />
                0.0.0.0 n0yaid7q47.adobestats.io
                <br />
                0.0.0.0 nhs5jfxg10.adobestats.io
                <br />
                0.0.0.0 wz8kjkd9gc.adobestats.io
                <br />
                0.0.0.0 zfzx6hae4g.adobestats.io
                <br />
                0.0.0.0 6y6ozj4sot.adobestats.io
                <br />
                0.0.0.0 qxc5z5sqkv.adobestats.io
                <br />
                0.0.0.0 1qwiekvkux.adobestats.io
                <br />
              </code>
            </div>
          }
          macContent={
            <div>
              <p>
                Для блокировки доступа определённым программам к интернету на устройствах
                с macOS можно воспользоваться программой{" "}
                <a href="https://radiosilenceapp.com/">Radio Silence</a>. После установки
                и активации этой программы перейдите в вкладку{" "}
                <mark className="ui">Network Monitor</mark>. В этой же вкладке запретите
                программам от Adobe, которые лезут в сеть, доступ в интернет, нажав на
                кнопку <mark className="ui">Block</mark>.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="/images/network_radio_silence.png"
                imgTitle="Блокируем доступ в интернет программам на примере Premiere Pro"
                caption="Radio Silence"
              />
              <p>
                После проделанных действий <mark className="app">After Effects</mark> и
                остальные программы от Adobe не должен стучаться в сеть и выдавать ошибку
                об отсутствии лицензии. Ниже показано, как в итоге примерно должна
                выглядеть у вас вкладка <mark className="ui">Firewall</mark> после отлова
                процессов Adobe, лезущие в интернет.
              </p>
              <ImageFigure
                styleClass="figure_macos-dark"
                imgSrc="/images/firewall_radio_silence.png"
                imgTitle="Окно Firewall после блокировки доступа в интернет программам"
                caption="Radio Silence"
              />
            </div>
          }
        />
      </DetailsSummary>
      <DetailsSummary title="Код ошибки 1 или 501 при установке After Effects">
        <p>
          У вас было криво установлено в системе приложение{" "}
          <mark className="app">Adobe Creative Cloud</mark>. Очистите остатки от него с
          помощью{" "}
          <a href="https://helpx.adobe.com/ru/creative-cloud/kb/cc-cleaner-tool-installation-problems.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          и повторите попытку установки заново.
        </p>
        <p>
          Если очистка с помощью <mark className="app">ACCR</mark> не помогла, почистите
          папку <mark className="path">C:\Program Files (x86)\Common Files\Adobe</mark> и{" "}
          <mark className="path">C:\Program Files\Adobe</mark> от лишних хвостов.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Код ошибки 21 при установке After Effects или 'операционная система не соответствует минимальным требованиям для этой программы установки'">
        <p>
          Вы пытаетесь установить <mark className="app">After Effects 2024</mark> или
          новее на Windows 10 сборки 21H2 или старее. Если у вас стоит сборка LTSC,
          поздравляю - новее сборки, чем 21H2 для вас нет, переустанавливайте систему на
          редакцию Home или Pro. Или установите более старые сборки{" "}
          <mark className="app">After Effects</mark>.
        </p>
        <AdditionInfo>
          Текущую сборку Windows вы можете посмотреть открыв{" "}
          <mark className="app">winver</mark>.
        </AdditionInfo>
        <p>
          Для решения этой проблемы прочтите{" "}
          <a href="https://helpx.adobe.com/ru/after-effects/system-requirements.html">
            системные требования After Effects
          </a>{" "}
          и найдите раздел про минимальную требуемую операционную систему. На момент
          написания этого пункта требуется минимум Windows 10 22H2 или Windows 11 21H2.
          Затем откройте раздел с обновлениями Windows и обновите систему до максимально
          возможной версии, или установите 22H2 поверх существующей Windows 10.
        </p>
      </DetailsSummary>
    </div>
  );
};
export default AEErrors;
