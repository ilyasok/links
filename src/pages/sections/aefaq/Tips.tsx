import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import {YouTubeVideo} from "../../../components/ContentFigure";
import {FlexibleLinks} from "../../../components/FlexibleLinksFaQ";

const AETips: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="tips"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Tips.tsx" />
      <DetailsSummary title="Как мне сделать историю изменений файлов и в случае чего - откатываться до предыдущих версий проекта?">
        <p>
          Вы, наверное, не раз натыкались на случаи, когда сделали какую-то правку, а
          клиенту это не понравилось и нужно откатиться на раннюю версию проекта. Или{" "}
          <mark className="file">.aep</mark> файл внезапно сломался и не открывается, прям
          как назло.
        </p>
        <p>
          Если вы бы настроили функцию резервного копирования файлов заранее перед началом
          создания и редактирования ваших проектов - ваши нервы были бы целее, а мозг бы
          убедился в том, что бэкапы - штука полезная и не нужно про них забывать.
        </p>
        <p>
          Начнём по порядку: обсудим сохранение резервных копий в облачных хранилищах. В
          популярных облачных хранилищах имеется функция восстановления файлов при их
          изменении на сервере и сервис позволяет сохранить старую копию файла на ваше
          устройство. Ниже приведены ссылки на документацию по использованию этой функции
          в некоторых популярных сервисах облачного хранилища.
        </p>
        <AdditionWarning>
          У каждого сервиса свой срок хранения истории файлов, уточняйте это в вашем
          тарифном плане.
        </AdditionWarning>
        <FlexibleLinks>
          <a href="https://yandex.ru/support/yandex-360/customers/disk/desktop/windows/ru/version-control">
            История изменения файла в Яндекс.Диск
          </a>
          <a href="https://support.google.com/drive/answer/2409045?hl=ru&co=GENIE.Platform%3DDesktop">
            Журнал файлов в Google Drive
          </a>
          <a href="https://help.dropbox.com/ru-ru/delete-restore/version-history-overview">
            Журнал версий файлов в Dropbox
          </a>
          <a href="https://help.mega.io/ru/files-folders/restore-delete/file-version-history">
            Как управлять версиями файлов в Mega?
          </a>
          <a href="https://support.microsoft.com/ru-ru/office/%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%8B%D0%B4%D1%83%D1%89%D0%B5%D0%B9-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%85%D1%80%D0%B0%D0%BD%D1%8F%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%B2-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893">
            Восстановление предыдущей версии файла в OneDrive
          </a>
        </FlexibleLinks>
        <AdditionInfo>
          Если вы используете другое облачное хранилище - найдите информацию об истории
          файлов в вашем сервисе самостоятельно в сети Интернет.
        </AdditionInfo>
        <p>
          В Windows и macOS есть функция локального резервного копирования файлов, которую
          необходимо включить. Обычно для работы этой функции нужен внешний накопитель.
        </p>
        <ContentSwitcher
          windowsContent={
            <div>
              <p>
                В Windows фукнция бэкапа файлов называется &quot;История файлов&quot;,
                которая создаёт копии файлов на другую директорию.
              </p>
              <AdditionInfo>
                Для работы данной функции заранее укажите диск, на который вы планируете
                сохранять копии файлов в разделе <mark className="ui">Смена диска</mark>.
              </AdditionInfo>
              <YouTubeVideo
                link="IIgxtSnURoA"
                caption="История файлов в Windows 10"
              />
              <p>
                В настройках этой функции можно установить интервал сохранения от 10 минут
                до одного раза в день. Также можно задать срок хранения от одного месяца
                до двух лет, по истечении которого система автоматически удалит старые
                резервные копии из указанной директории.
              </p>
              <AdditionInfo>
                По умолчанию функция &quot;История файлов&quot; копирует только из
                стандартных папок <mark className="path">Библиотеки</mark>,{" "}
                <mark className="path">Рабочий стол</mark>,{" "}
                <mark className="path">Контакты</mark> и{" "}
                <mark className="path">Избранное</mark>. Если вам нужно установить свои
                папки, откуда нужно копировать файлы - зайдите в параметры и перейдите в
                нужный раздел:
                <ul>
                  <li>
                    На Windows 11 - откройте проводник, выберите нужную папку и нажмите на{" "}
                    <mark className="key">ПКМ</mark>. Затем в контекстном меню нажмите на{" "}
                    <mark className="ui">Добавить в библиотеку</mark>. Вы можете выбрать
                    уже существующую библиотеку или создать новую.
                    <AdditionWarning>
                      Если у вас нет пункта{" "}
                      <mark className="ui">Добавить в библиотеку</mark> в контекстном меню
                      - включите их отображение в параметрах папок.{" "}
                      <a href="https://remontka.pro/manage-libraries-windows/">
                        Подробнее...
                      </a>
                    </AdditionWarning>
                  </li>
                </ul>
              </AdditionInfo>
            </div>
          }
          macContent={
            <div>
              <p>
                В macOS функция бэкапа файлов называется{" "}
                <mark className="app">Time Machine</mark>, которая создаёт снепшот вашей
                системы и файлов каждый час или по нажатию кнопки создания бэкапа.
              </p>
              <AdditionWarning>
                Для работы данной функции нужен внешний накопитель, желательно с объёмом
                от 512 Гб и более.
              </AdditionWarning>
              <YouTubeVideo
                link="Gx76i28c150"
                caption="How to Set up & Use Time Machine to Backup your Mac"
              />
            </div>
          }
        />
        <p>
          Самый крайний способ для контроля версий ваших файлов, если у вас нет желания
          работать с облачными хранилищами или если у вас отсутствует внешний жёсткий диск
          - это работа с <mark className="app">Git</mark>. Для новичков этот инструмент
          будет сложновато использовать, но я не могу о нём не рассказать.
        </p>
        {/* todo: написать!! */}
        <AdditionInfo>
          Если вы хотите просто сохранить быстро проект под другим названием - используйте
          комбинацию клавиш <mark className="key">Ctrl + Alt + Shift + S</mark>. Данная
          комбинация клавиш сохранит проект с тем же названием, но добавит число по
          иерархии. Если вы 25 раз выполните эту комбинацию клавиш, у вас создадутся 25
          файлов с разными числами по возрастанию в папке, где был изначально создан
          проект.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Какие плагины мне стоит поставить для упрощения работы?">
        <AdditionWarning>
          Сразу хочу предупредить - не надо скачивать все плагины мира подряд, особенно
          когда вы только установили программу. Для начала разберитесь с тем, что вам
          действительно нужно.
        </AdditionWarning>
        <p>
          Плагины - вещь действительно интересная и полезная, особенно когда оно ускоряет
          работу за счёт автоматизации рутинных задач. Вот мой личный топ плагинов,
          которые я ставлю при каждой установке.
        </p>
        <p style={{fontWeight: "bold"}}>
          Для совместимости с чужими проектами и не только я ставлю:
        </p>
        <ul>
          <li>
            <mark className="plugin">BorisFX Sapphire</mark> и{" "}
            <mark className="plugin">BorisFX Continuum</mark> - база из всех баз. Особенно
            популярен у <del>мамкиных</del> эдиторов, они без него жить не могут.
          </li>
          <li>
            <mark className="plugin">BorisFX Mocha Pro</mark> - расширенная версия
            стандартного плагина <mark className="plugin">Mocha AE</mark>.
          </li>
          <li>
            Плагины от Red Giant: <mark className="plugin">Magic Bullet Suite</mark>,{" "}
            <mark className="plugin">Trapcode Suite</mark>,{" "}
            <mark className="plugin">VFX Suite</mark> и{" "}
            <mark className="plugin">Universe</mark> - сборник плагинов для цветокора,
            частиц и различных эффектов. Особенно хорош{" "}
            <mark className="plugin">Primatte Keyer</mark> и{" "}
            <mark className="plugin">Supercomp</mark> для решения повседневных задач по
            композингу.
          </li>
          <li>
            <mark className="plugin">Element 3D от VideoCopilot</mark> - даже после выхода
            Advanced 3D - этот плагин не теряет актуальности в плане импорта 3D-моделей в
            вашу композицию.
          </li>
          <li>
            <mark className="plugin">Deep Glow</mark> - даёт хорошее свечение, но неплохо
            замедляет скорость экспорта. Если производительность проекта вам очень важна -
            замените его на более простые решения.
          </li>
        </ul>
        <p style={{fontWeight: "bold"}}>Из инструментов можно поставить:</p>
        <ul>
          <li>
            <mark className="plugin">FXConsole от VideoCopilot</mark> - всплывающая
            панелька для быстрого поиска и применения эффектов и пресетов.
          </li>
          <li>
            <mark className="plugin">Flow</mark> - расширение для быстрого применения
            интерполяции ключей. Если создать свои пресеты, которыми часто пользуешься в
            анимации - ускоришь свою рутинную работу в несколько раз.
          </li>
          <li>
            <mark className="plugin">Motion Tools Pro</mark> - набор инструментов для
            анимации. Полностью настраиваемый.
          </li>
          <li>
            <mark className="plugin">Keystone</mark> - инструмент для манипуляций над
            ключевыми кадрами и слоями на таймлайне: растягивание, смещение, выравнивание
            и много чего другого.{" "}
          </li>
          <li>
            <mark className="plugin">True Comp Duplicator</mark> - скрипт для дублирования
            композиций с нужными параметрами.
          </li>
          <li>
            <mark className="plugin">rd_compsetter</mark> - скрипт для одновременного
            изменения параметров нескольких композиций.
          </li>
          <li>
            <mark className="plugin">Workflower</mark> - плагин для организации слоёв на
            таймлайне, позволяет делать папки со слоями без прекомпоза.{" "}
            <AdditionDanger>
              Не рекомендуется передавать проект с использованием этого плагина другим
              лицам, у которых не установлен этот плагин. Иначе столкнётесь с неожиданными
              результатами.
            </AdditionDanger>
          </li>
        </ul>
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
      <DetailsSummary title="Как мне закэшировать композиции так, чтобы я в финальном рендере их заново не просчитывал?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какой компьютер или ноутбук стоит взять для работы в After Effects?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какую версию After Effects мне лучше всего поставить?">
        <p>
          Этот холивар будет вечным. Мнение по поводу &quot;стабильности&quot; у всех
          разное на этот счёт, как и железо, на котором пользователи работают.
          Соответственно отзывы у всех координально отличаются. Ни одна версия{" "}
          <mark className="app">After Effects</mark> не может считаться эталонным, поэтому
          рекомендации на момент написания этого пункта следующие.
        </p>
        <ul>
          <li>
            Если вы не часто работаете в программе, любите новые функции и стабильность
            для вас не в приоритете - ставьте максимально последнюю версию{" "}
            <mark className="app">After Effects</mark>.
          </li>
          <li>
            Если вам нужна более откатанная и стабильная версия программы - установите
            версию <mark>23.6</mark> или <mark>24.1</mark>. От пользователей, сидящих на
            этих версиях мы слышали меньше всего жалоб на возможные приколы работы
            программы.
          </li>
          <li>
            Если у вас устройство не поддерживает инструкции <mark>AVX2</mark> -
            установите версию <mark>23.6</mark>, она для вас последняя.
          </li>
          <li>
            Если вы используете устройство на Windows 7 или Windows 8.1 - установите
            версию <mark>16.1</mark> (2019) или <mark>15.1</mark> (2018). Новее вы не
            установите из-за отсутствия официальной поддержки операционной системы
            компанией Adobe.
          </li>
        </ul>
        <p>
          Список обновлений и исправлений в версиях{" "}
          <mark className="app">After Effects</mark> вы всегда можете посмотреть на
          официальном сайте Adobe.
        </p>
        <FlexibleLinks>
          <a href="https://helpx.adobe.com/ru/after-effects/using/whats-new.html">
            Что нового в After Effects последних выпусков
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/ru/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки в After Effects
          </a>
        </FlexibleLinks>
        <AdditionInfo>
          <b>Не забывайте своевременно обновлять и сторонние плагины!</b> Из-за того что
          существуют пользователи, которые сидят на устаревших версиях сторонних плагинов
          (например <mark className="plugin">BorisFX Sapphire</mark>) на новых версиях{" "}
          <mark className="app">After Effects</mark>, бытуют ложные слухи о том что
          &quot;ой, версия <mark>XX.X</mark> очень логучая и вылитает на маих
          эдитах!!1!&quot; и вводят остальных пользователей в заблуждение.
        </AdditionInfo>
      </DetailsSummary>
    </div>
  );
};
export default AETips;
