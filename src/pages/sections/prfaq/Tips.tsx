import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import {YouTubeVideo} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";
import {FlexibleLinks} from "../../../components/FlexibleLinksFaQ";
import {Divider} from "antd";

const PRTips: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Tips.tsx" />
      <DetailsSummary title="Как мне сделать историю изменений файлов и в случае чего - откатываться до предыдущих версий проекта?">
        <p>
          Вы, наверное, не раз натыкались на случаи, когда сделали какую-то правку, а
          клиенту это не понравилось и нужно откатиться на раннюю версию проекта. Или{" "}
          <mark className="file">.prproj</mark> файл внезапно сломался и не открывается,
          прям как назло.
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
                В Windows функция бэкапа файлов называется &quot;История файлов&quot;,
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
                <mark className="app">Time Machine</mark>, которая создаёт снапшот вашей
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
        <p>
          <mark className="app">Git</mark> - это консольная утилита для контроля версий
          ваших файлов, можно отслеживать изменения и фиксировать их, а затем при
          необходимости откатываться. Доступен для многих операционных систем, в том числе{" "}
          <a href="https://git-scm.com/downloads/win">Windows</a> и{" "}
          <a href="https://git-scm.com/downloads/mac">macOS</a>. Изначально этот
          инструмент был создан для работы с версиями текстовых файлов, но можно работать
          и с версиями изображений, видео, файлов проекта и прочими файлами. Если вам не
          нравится консольная версия <mark className="app">Git</mark> - можно
          воспользоваться <mark className="app">GitHub Desktop</mark>,{" "}
          <mark className="ui">SourceTree</mark> или{" "}
          <mark className="app">SourceGit</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        title="Какие плагины и инструменты мне стоит поставить в первую очередь для программы?"
        tag="рекомендация, топ, борисфх, твикстор, рсмб, юниверс, мбл, mbl"
      >
        <p>{/* TODO: добавить список */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRTips;
