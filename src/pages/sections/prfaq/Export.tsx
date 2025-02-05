import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {Divider} from "antd";

const PRExport: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Export.tsx" />
      <DetailsSummary title="Какие настройки экспорта стоит установить для вывода в социальные сети?">
        <p>
          Каждая социальная сеть или видео площадка, увы, пережимают загружаемое
          пользователем видео так, чтобы уместить у себя на серверах с меньшим объёмом
          файла. Если вы установите слишком высокое значение битрейта и разрешение,
          например для <mark>TikTok</mark>, то площадка с радостью всё пережмёт до{" "}
          <mark>1080p/60fps</mark> и около <mark>5 Мбит/с</mark>, поэтому разрешение{" "}
          <mark>4K</mark> и битрейт условно <mark>100 Мбит/с</mark> смысла ставить нет.
          Также установка слишком низкого битрейта или других неверных параметров могут
          испортить ваше прекрасное видео.
        </p>
        <p>
          А теперь в целом про качество: оно будет зависеть от того, что происходит на
          вашем экране. Если вы монтируете спокойные видео, то есть подкасты или ролики
          без редких движений, то вам спокойно хватит <mark>5-10 Мбит/с</mark> в{" "}
          <mark>1080p</mark> для сохранения всех деталей на видео.
        </p>
        <p>
          Если видео было закодировано условно в <mark>1 Мбит/с</mark>, то вернуть
          качество установкой более высокого битрейта, которое пережали до вас, нельзя.
          Это вам не архив, из которого можно распаковать несжатое видео с исходным
          качеством.
        </p>
        <YouTubeVideo
          link="r6Rp-uo6HmI"
          caption="Почему снег и конфетти паршивят картинку"
        />
        <p>
          Теперь поговорим о правилах хорошего тона для FPS. Если вы импортируете видео в
          монтажную программу в 30 кадров/сек, то и выводить нужно точно с такой же
          частотой, не больше. Вывести с меньшим фреймрейтом допустимо, если у вас такая
          творческая задумка, но с большим - нет смысла, кадры не появятся из воздуха.
          Если вы импортируете видео с разным фреймрейтом, например <mark>24</mark>,{" "}
          <mark>30</mark> и <mark>60</mark>, то лучше создавать композицию с наименьшим
          FPS, то есть в <mark>24</mark> кадра/сек в данном примере. Не всем понравится
          ваш трюк с комбинацией различных фреймрейтов в одном видео.
        </p>
        <YouTubeVideo
          link="p3Jb3UPAw-w"
          caption="Как несовпадение частоты кадров портят ваше видео"
        />
        <p>
          И прежде чем загрузить куда-нибудь контент с чересстрочной разверткой - сделайте
          её прогрессивной. Например, если у вас контент в <mark>1080i60</mark>, то его
          следует перевести в <mark>1080p30</mark>, то есть 60 чересстрочных полукадров в
          секунду следует заменить 30 прогрессивными кадрами в секунду.
        </p>
        <Divider>Экспортируем для YouTube</Divider>
        <p>
          Для публикации видео на YouTube нужно соблюдать{" "}
          <a href="https://support.google.com/youtube/answer/1722171?hl=ru#zippy=%2C%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BA%D0%BE%D0%B4%D0%B5%D0%BA-h%2C%D0%B1%D0%B8%D1%82%D1%80%D0%B5%D0%B9%D1%82">
            несколько рекомендаций
          </a>
          .
        </p>
        <ul>
          <li>
            Контейнер у видео должен быть <mark className="file">.mp4</mark>.
          </li>
          <li>
            Видеокодек должен быть <mark className="video">H.264</mark>.
          </li>
          <li>
            Аудиокодек должен быть <mark className="audio">AAC</mark> с частотой
            дискретизации <mark>48 кГц</mark> или <mark>96 кГц</mark>.
          </li>
          <li>
            Видео должно быть в переменном или постоянном битрейте. Ограничений на него
            нет, но лучше соблюдать таблицу битрейтов из официального сайта YouTube.
          </li>
        </ul>
        <table>
          <thead>
            <th
              colSpan={3}
              style={{textAlign: "center", fontWeight: "bold", color: "var(--accent)"}}
            >
              Таблица рекомендуемого битрейта при использовании HDR
            </th>
            <tr>
              <th>Разрешение</th>
              <th>Битрейт (24, 25, 30 FPS)</th>
              <th>Битрейт (48, 50, 60 FPS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8K</td>
              <td>80-160 Мбит/с</td>
              <td>120-240 Мбит/с</td>
            </tr>
            <tr>
              <td>2160p (4K)</td>
              <td>35-45 Мбит/с</td>
              <td>53-68 Мбит/с</td>
            </tr>
            <tr>
              <td>1440p (2К)</td>
              <td>16 Мбит/c</td>
              <td>24 Мбит/c</td>
            </tr>
            <tr>
              <td>1080p</td>
              <td>8 Мбит/c</td>
              <td>12 Мбит/c</td>
            </tr>
            <tr>
              <td>720p</td>
              <td>5 Мбит/c</td>
              <td>7,5 Мбит/c</td>
            </tr>
            <tr>
              <td>480p</td>
              <td>2,5 Мбит/c</td>
              <td>4 Мбит/c</td>
            </tr>
            <tr>
              <td>360p</td>
              <td>1 Мбит/c</td>
              <td>1,5 Мбит/c</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            {" "}
            <th
              colSpan={3}
              style={{textAlign: "center", fontWeight: "bold", color: "var(--accent)"}}
            >
              Таблица рекомендуемого битрейта при использовании SDR
            </th>
            <tr>
              <th>Разрешение</th>
              <th>Битрейт (24, 25, 30 FPS)</th>
              <th>Битрейт (48, 50, 60 FPS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8K</td>
              <td>100-200 Мбит/с</td>
              <td>150-300 Мбит/с</td>
            </tr>
            <tr>
              <td>2160p (4K)</td>
              <td>44-56 Мбит/с</td>
              <td>66-85 Мбит/с</td>
            </tr>
            <tr>
              <td>1440p (2К)</td>
              <td>20 Мбит/с</td>
              <td>30 Мбит/с</td>
            </tr>
            <tr>
              <td>1080p</td>
              <td>10 Мбит/c</td>
              <td>15 Мбит/с</td>
            </tr>
            <tr>
              <td>720p</td>
              <td>6,5 Мбит/с</td>
              <td>9,5 Мбит/с</td>
            </tr>
            <tr>
              <td>480p</td>
              <td>Не поддерживается</td>
              <td>Не поддерживается</td>
            </tr>
            <tr>
              <td>360p</td>
              <td>Не поддерживается</td>
              <td>Не поддерживается</td>
            </tr>
          </tbody>
        </table>
        <Divider>Экспортируем для TikTok</Divider>
        <p>
          Данная площадка с вертикальными видео тоже имеет свои ограничения и рекомендации
          по кодированию видео.
        </p>
        <ul>
          <li>
            Вес полученного файла не должен превышать <mark>75 Мб</mark>, если вы
            собираетесь выкладывать видео с устройства на Android. Или не превышать{" "}
            <mark>250 Мб</mark>, если вы собираетесь выкладывать видео с устройства на
            iOS.
          </li>
          <li>
            Контейнер у видео должен быть <mark className="file">.mp4</mark>.
          </li>
          <li>
            Видеокодек должен быть <mark className="video">H.264</mark>.
          </li>
          <li>
            Рекомендуется установить битрейт <mark>5-8 Мбит/с</mark> для видео в
            разрешении <mark>1080p</mark> или <mark>3-5 Мбит/с</mark> для видео в
            разрешении <mark>720p</mark>.
          </li>
        </ul>
        <Divider>
          Экспортируем для Instagram<sup>*</sup>
        </Divider>
        <AdditionDanger>
          <sup>*</sup>Instagram и Meta всё ещё признаны экстремистскими организациями и
          запрещены на территории Российской Федерации.
        </AdditionDanger>
        <p>
          На этой площадке можно выложить видео как отдельный пост, так и вертикальные
          Reels. Из-за того что это два разных типа публикаций, то и требования тоже
          разные.
        </p>
        <ul>
          <li>
            При создании обычного поста в него можно засунуть видео с соотношением сторон{" "}
            <mark>4:5</mark>, <mark>16:9</mark> или <mark>4:3</mark>.
          </li>
          <li>
            Если вы попытаетесь опубликовать видео с соотношением сторон <mark>9:16</mark>
            , то оно превратится в Reels.
          </li>
          <li>
            Желательно использовать фреймрейт <mark>24</mark>, <mark>25</mark> или{" "}
            <mark>30</mark> FPS, а битрейт установить <mark>5 Мбит/с</mark>.
            <AdditionInfo>
              Из-за специфики алгоритмов сжатия на этой платформе видео с 60 FPS может
              нещадно резаться в битрейте, соответственно и в качестве.
            </AdditionInfo>
          </li>
        </ul>
        <Divider>Экспортируем для Telegram</Divider>
        <p>
          Этот мессенджер более лоялен к видеофайлам. Если выкладывать видео через{" "}
          <mark className="app">Telegram Desktop</mark> в личные чаты или каналы, то он
          отправится без сжатия и не пережмёт ваше видео. Это хорошо, если нужно отдать
          клиенту видео в оригинальном качестве, но не очень, если собираетесь выкладывать
          видео в пост, так как не все смогут скачать полностью видео. Поэтому просто
          постарайтесь любыми способами обойтись в <mark>50 Мб</mark> для коротких видео
          или <mark>300 Мб</mark> для длинных. Желательно тоже в кодеке{" "}
          <mark className="video">H.264</mark>.
        </p>
        <p>
          Публикация видео в каналы и через мобильные устройства может ухудшить ваше видео
          из-за автоматической конвертации по умолчанию в чуть худшее качество, чем
          оригинал. Для того чтобы отправить видео в максимальном качестве - нажмите на
          кнопку выбора качества и потяните его максимально вправо.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/phone_telegram_videoquality.jpg"
          imgTitle="Выбор качества видео в Telegram"
          caption="Telegram"
        />
        <p>
          Если вы хотите опубликовать историю в Telegram, то вам нужно экспортировать
          видео в разрешении <mark>1280 x 720</mark> и указать перед экспортом битрейт до{" "}
          <mark>5 Мбит/с</mark>.
        </p>
        <AdditionWarning>
          Если вы попробуете опубликовать историю с разрешением больше, чем{" "}
          <mark>1280 x 720</mark>, то Telegram обратно сожмёт ваше видео до{" "}
          <mark>720p</mark>.
        </AdditionWarning>
        <p>
          Для анимированной аватарки вашего профиля нужно вывести видео в разрешении до{" "}
          <mark>800 x 800</mark> и с битрейтом до <mark>2 Мбит/с</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в .mp4 и H.264/H.265?">
        <p>
          Предположим, что вы хотите вывести качественное видео с минимальным весом в
          кодеке
          <mark className="video">H.264</mark> или <mark className="video">H.265</mark>, а
          также в цветовом пространстве <mark>Rec.709</mark>. Из{" "}
          <mark className="app">Premiere Pro</mark> можно вывести тремя способами.
        </p>
        <ul>
          <li>
            Через встроенный кодек <mark className="plugin">H.264</mark>.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">Voukoder</mark>. Доступен
            только для Windows, поддержка устройств на macOS косвенно присутствует с
            версий Voukoder Pro 2.0 и новее, но мы его рассматривать не будем.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">AfterCodecs</mark>. Доступен
            для Windows и macOS, а также поддерживает достаточно много старых версий
            программы.
          </li>
        </ul>
        <AdditionWarning>
          Через кодеки <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark> нельзя вывести видео с альфа-каналом, то
          есть с прозрачностью. Для вывода видео на прозрачном фоне воспользуйтесь
          форматом <mark className="video">Quicktime - Apple Prores 4444</mark>.
        </AdditionWarning>
        <p>
          Для начала нужно разобраться, куда что тыкать. Для того чтобы перейти к началу
          экспорта, перейдите в вкладку <mark className="ui">Export</mark> или нажмите на
          комбинацию клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После этого вы переместитесь на полноэкранное окно настроек экспорта. В этой
          вкладке вы можете указать название файла, путь сохранения, формат и указать в
          вкладках более детальные настройки. Также вы можете выбрать область для
          кодирования видео - всю секвенцию или только часть.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/export_interface.png"
          imgTitle="Интерфейс экспорта"
          caption="Интерфейс экспорта"
        />
        <Divider>Выводим через встроенный H.264</Divider>
        <p>
          По умолчанию при открытии вкладки экспорта,{" "}
          <mark className="app">Premiere Pro</mark> сам установит пресет для вывода в{" "}
          <mark className="video">H.264</mark> с переменным битрейтом с одним проходом
          примерно в 15 Мбит/с. Для социальных сетей таких параметров хватит спокойно.
        </p>
        <p>
          Если вам нужно изменить тип битрейта и скорость передачи данных - раскройте
          вкладку <mark className="ui">Video</mark> и измените нужные вам параметры. Из
          доступных параметров нам доступно изменение битрейта, кадров в секунду,
          цветового профиля, включение эффектов и переключение между Software- или
          Hardware-кодированием. Чтобы изменять &quot;заблокированные&quot; параметры -
          просто уберите чекбокс справа от пунктов.
        </p>
        <VideoFigure
          styleClass="figure_windows-dark"
          videoSrc="images/premierepro/export_video_settings.mp4"
          caption="Настройки экспорта видео"
        />
        <p>
          Затем просто нажмите на кнопку <mark className="ui">Export</mark> в правом
          нижнем углу и дождитесь окончания кодирования вашей секвенции.
        </p>
        <Divider>Выводим через Voukoder</Divider>
        <p>
          Если же вас результат рендера от стандартного H.264 не устраивает, то можно
          воспользоваться плагином <mark className="plugin">Voukoder</mark>. В этом
          примере мы рассмотрим плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro версию.
        </p>
        <AdditionWarning>
          Демонстрируемая версия плагина <mark className="plugin">Voukoder</mark>{" "}
          недоступна на устройствах с macOS. Чтобы подключить плагин к программе, нужно
          скачать и установить{" "}
          <a href="https://github.com/Vouk/voukoder/releases/download/13.4.1/voukoder-13.4.1.msi">
            сам Voukoder
          </a>{" "}
          и{" "}
          <a href="https://github.com/Vouk/voukoder-connectors/blob/master/premiere/premiere-connector-1.13.0.msi?raw=true">
            коннектор для Premiere Pro
          </a>{" "}
          к нему.
        </AdditionWarning>
        <p>
          Чтобы начать рендер с помощью <mark className="plugin">Voukoder</mark>, вам
          нужно снова перейти в вкладку <mark className="ui">Export</mark> и в пункте{" "}
          <mark className="ui">Format</mark> выбрать <mark className="ui">Voukoder</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/selecting_voukoder.png"
          imgTitle="Выбираем Voukoder для рендера"
          caption="Export"
        />
        <p>
          Чтобы перейти в настройки плагина, вам нужно раскрыть вкладку{" "}
          <mark className="ui">Voukoder</mark> и нажать на кнопку{" "}
          <mark className="ui">Configure</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/open_voukoder_settings.png"
          imgTitle="Открываем настройки Voukoder"
          caption="Export"
        />
        <p>
          После открытия настроек нам нужно выбрать кодек, в который мы хотим
          экспортировать видео. В основном для вывода видео и его корректного открытия на
          многих современных устройствах используется кодек{" "}
          <mark className="video">H.264</mark>. Но можно и воспользоваться{" "}
          <mark className="video">HEVC (H.265)</mark>, если вам нужно примерно сохранить
          качество видео с меньшим объёмом файла. Кодеки{" "}
          <mark className="video">AV1</mark> и <mark className="video">VP9</mark> для
          вывода из <mark className="app">After Effects</mark> используются редко, а если
          уж и надо вывести в таком формате, то проще переконвертировать видео позже через
          условный <a href="https://www.shutterencoder.com/">Shutter Encoder</a>. Теперь
          поговорим и о приставках в названиях кодеков.
        </p>
        <AdditionInfo>
          Варианты кодирования показаны на устройстве с связкой процессора AMD и
          видеокарты NVIDIA. Выбор у вас может отличаться в зависимости от вашего железа.
        </AdditionInfo>
        <ul>
          <p>
            Для вариантов <mark className="video">H.264</mark> и{" "}
            <mark className="video">H.265</mark> есть три варианта для кодирования.
          </p>
          <li>
            <mark>x264</mark> или <mark>x265</mark> используется кодирования видео на
            процессоре без дополнительного использования видеокарты. Стабильно, но не
            всегда быстро.
          </li>
          <li>
            <mark>NVIDIA NVENC</mark> используется для кодирования видео с использованием
            видеокарты NVIDIA. Может ускорить процесс рендера, но не гарантирует 100%
            использование видеокарты.
          </li>
          <li>
            <mark>AMD AMF</mark> - тоже самое, что и предыдущий пункт, но на встроенном
            видеочипе AMD.
          </li>
        </ul>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/premierepro/select_codec_in_voukoder.png"
          imgTitle="Выбираем нужный вариант кодека в Voukoder"
          caption="Voukoder 13.4.1"
        />
        <p>
          После выбора нужного нам кодека (я выбрал{" "}
          <mark className="video">H.264 (NVIDIA NVENC)</mark>), нужно перейти во вкладку{" "}
          <mark className="ui">Параметры</mark>. В этой вкладке можно указать качество
          желаемого видео. По умолчанию там уже стоит то, что нам нужно, а именно параметр
          квантования и его фактор. <mark>CQP</mark> или <mark>CRF</mark> - это некий
          эквивалент качества, чем меньше - тем лучше качество, но больше вес.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/premierepro/codec_parameter_voukoder.png"
          imgTitle="Настраиваем качество видео в Voukoder"
          caption="Voukoder 13.4.1"
        />
        <ul>
          <li>
            Значения <mark>23</mark> или <mark>25</mark> хватит с головой для экспорта
            видео в YouTube, VK Видео и подобных видео площадок.
            <AdditionInfo>
              Учтите, что многие видео площадки всё равно будут сжимать видео по своему,
              чтобы уместить их у себя на серверах.
            </AdditionInfo>
          </li>
          <li>
            Если вам нужно около максимальное качество, тогда укажите значение квантования{" "}
            <mark>17</mark> или <mark>20</mark>. В таком случае вес файла заметно
            возрастёт.
          </li>
          <li>
            Если вы хотите получить видео с хорошим соотношением{" "}
            <mark>качество/минимальный вес</mark>, тогда укажите значение <mark>30</mark>.
            Можете поэкспериментировать с значением в большую или меньшую сторону.
            <AdditionWarning>
              Экстремальные значения, например <mark>50</mark>, не рекомендуется
              использовать, так как можете получить кашу из кадров на выходе.
            </AdditionWarning>
          </li>
        </ul>
        <p>
          Дальше в <mark className="plugin">Voukoder</mark> нам ничего не нужно
          настраивать. При необходимости вы можете изменить другие параметры в окне
          экспорта и начать экспорт с помощью кнопки <mark className="ui">Export</mark>.
        </p>
        <Divider>Выводим через AfterCodecs</Divider>
        <p>
          Теперь поговорим и про <mark className="plugin">AfterCodecs</mark>. Для начала
          экспорта через <mark className="plugin">AfterCodecs</mark> нам нужно снова
          вернуться во вкладку <mark className="ui">Export</mark> и выбрать в пункте{" "}
          <mark className="ui">Format</mark> значение{" "}
          <mark className="ui">AfterCodecs</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/selecting_aftercodecs.png"
          imgTitle="Выбор AfterCodecs"
          caption="Export"
        />
        <p>
          Чтобы перейти в настройки <mark className="plugin">AfterCodecs</mark> -
          раскройте вкладку <mark className="ui">Video Settings</mark> и нажмите на кнопку{" "}
          <mark className="ui">AfterCodecs Settings</mark>.
        </p>
        <AdditionInfo>
          По умолчанию в <mark className="plugin">AfterCodecs</mark> стоит контейнер{" "}
          <mark className="file">MOV</mark>. Так как мы в этом пункте выводим видео в{" "}
          <mark className="file">.mp4</mark>, то и указать нужно соответствующий контейнер
          для вывода.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/change_format_open_aftercodecs_settings.png"
          imgTitle="Изменение контейнера и открытие настроек AfterCodecs"
          caption="Export"
        />
        <p>
          В открывшемся окне мы снова видим кучу непонятных параметров. Здесь нам нужно
          указать качество и скорость кодирования видео.
        </p>
        <ul>
          <li>
            В пункте <mark className="ui">Tradeoff</mark> мы можем указать три варианта на
            что ориентироваться при кодировании: на процент качества (похож на метод
            квантования CQP), на желаемый битрейт или на желаемый размер файла (не
            рекомендуется при повседневном использовании).
          </li>
          <li>
            Значение для скорости кодирования <mark className="ui">Speed</mark> можно
            поставить <mark>2</mark> или <mark>4</mark>.
          </li>
          <li>
            В разделе <mark className="ui">Colors</mark> можно изменить битность и
            цветовой диапазон. Обычно там значения меняют редко.
          </li>
          <li>
            В <mark className="ui">Audio</mark> лучше указать значение <mark>512</mark>,
            вместо <mark>Auto</mark>, чтобы вывести звук в аудио без сильной потери
            качества.
          </li>
          <AdditionWarning>
            Параметры <mark className="ui">Tuning</mark>,{" "}
            <mark className="ui">H.264 Profiles</mark>, <mark className="ui">GOP</mark>,{" "}
            <mark className="ui">Audio Bitrate</mark>, <mark className="ui">VR Meta</mark>{" "}
            и <mark className="ui">Fast Start</mark> лучше не менять без острой
            необходимости!
          </AdditionWarning>
        </ul>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/aftercodecs_settings.png"
          imgTitle="Настройки AfterCodecs"
          caption="AfterCodecs 1.11.5 for Premiere Pro"
        />
        <p>
          После завершения настроек мы нажимаем <mark className="ui">OK</mark> и начинаем
          рендер как обычно, через кнопку <mark className="ui">Export</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в .WebM и VP9?">
        <p>
          Нативно из <mark className="app">Premiere Pro</mark> и{" "}
          <mark className="app">Media Encoder</mark> нельзя вывести композицию в{" "}
          <mark className="file">.webm</mark>, поэтому мы пойдем таким путём: сначала
          выведем композицию в <mark className="video">Apple Prores 422</mark>, если вам
          не нужно выводить с альфа-каналом или в{" "}
          <mark className="video">Apple Prores 4444</mark>, если вам нужно вывести с
          альфа-каналом.
        </p>
        <AdditionDanger>
          Крайне не рекомендую использовать плагин{" "}
          <a href="http://fnord.com/">WebM от fnord</a> для экспорта из{" "}
          <mark className="app">Premiere Pro</mark> и{" "}
          <mark className="app">Media Encoder</mark>, так как он часто выводит видео на
          прозрачном фоне с жуткими артефактами.
        </AdditionDanger>
        {/* TODO: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию в .gif?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести секвенцию с альфа-каналом, то есть с прозрачностью?">
        <AdditionWarning>
          Сразу скажу, в <mark className="video">H.264</mark> и{" "}
          <mark className="file">.mp4</mark> нельзя вывести композицию с альфа-каналом.
          Это можно сделать только на устройствах с macOS и при использовании кодека{" "}
          <mark className="video">HEVC / H.265</mark>.
        </AdditionWarning>
        <p>
          Прежде чем начать вывод секвенции с прозрачностью, убедитесь в том, что сама
          прозрачность у вас существует. Без этого никак. Чтобы проверить прозрачные
          участки в видео - нажмите на иконку гаечного ключа в окне{" "}
          <mark className="ui">Program Monitor</mark> и выберите в меню пункт{" "}
          <mark className="ui">Transparency Grid</mark>. Данная опция подставляет сетку в
          виде шахматной доски для отображения прозрачных частей в секвенции.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/toggle_transparency_grid.png"
          imgTitle="Включение сетки для отображения прозрачных частей"
          caption="Program Monitor"
        />
        <p>
          Если всё с этим в порядке, то пора переходить во вкладку{" "}
          <mark className="ui">Export</mark> нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в{" "}
          <mark className="ui">Format</mark> параметр{" "}
          <mark className="ui">QuickTime</mark> и в <mark className="ui">Depth</mark>{" "}
          выберите <mark className="ui">8-bpc + Alpha</mark> или{" "}
          <mark className="ui">16-bpc + Alpha</mark>, если вам нужно вывести видео с
          большей битностью.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/premierepro/export_prores4444_8bit-alpha.png"
          imgTitle="Экспорт секвенции с альфа-каналом"
          caption="Export"
        />
        <p>
          Затем укажите путь для вывода файла и нажмите на кнопку{" "}
          <mark className="ui">Export</mark> в левом нижнем углу. После экспорта вы
          сможете воспользоваться этим видео в последующем монтаже видео или где-нибудь
          ещё.
        </p>
        <AdditionInfo>
          Если вы хотите посмотреть такое видео, но у вас оно не открывается стандартным
          плеером, то вам нужно установить сторонний видеоплеер, например{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>.
          Учтите, что не все видео-проигрыватели корректно отображают видео с
          альфа-каналом.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как сохранить свой шаблон с настройками для экспорта секвенций?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести текущий кадр предпросмотра как файл изображения?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести все кадры секвенции как отдельные файлы изображений?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как вывести только часть секвенции?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Я сделал работу в Premiere Pro, но мне нужно передать .prproj файл вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};

export default PRExport;
