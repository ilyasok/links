import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AEActions: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="actions"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Actions.tsx" />
      <DetailsSummary title="Чем бы мне улучшить качество исходников?">
        <p>
          В настоящее время существует куча различных способов для улучшения качества
          видео или фото с помощью нейросетей. В данном пункте все способы будут работать
          локально на вашем компьютере, поэтому если у вас слабый ПК или
          непроизводительная видеокарта - будет туговато.
        </p>
        <p>
          Для улучшения качества видео существует{" "}
          <mark className="app">Topaz Video AI</mark>. Он поставляется как отдельная
          программа и может подключаться в <mark className="app">After Effects</mark> и{" "}
          <mark className="app">Davinci Resolve</mark>. Но я бы посоветовал работать в
          Standalone-версии, так стабильней и проще будет использовать исходники в
          дальнейшем.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="zbX7x8Oo_Uc"
          caption="Topaz Video AI"
        />
        <p>
          Плагинов для <mark className="app">After Effects</mark> по улучшению качества
          исходников довольно много, но нам нужно собрать что-то достойное в этот список.
          В качестве хорошего апскейлера-плагина могу привести{" "}
          <mark className="plugin">BCC UpRes ML</mark> в пакете плагинов{" "}
          <mark className="plugin">BorisFX Continuum</mark>.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="fTYcNP8ZdTE"
          caption="BCC UpRes ML"
        />
        <p>
          Если вы хотите улучшить качество фотографий, то для этого есть{" "}
          <mark className="app">Topaz Photo AI</mark> и{" "}
          <mark className="app">Topaz Gigapixel AI</mark>. Кажется, что это похожие
          программы, но результат порой бывает настолько разный, что приходится миксовать
          между этими программами. Для <mark className="app">Topaz Photo AI</mark>{" "}
          готовьте примерно 15 Гб на вашем жёстком диске, а для{" "}
          <mark className="app">Topaz Gigapixel AI</mark> - около 25 Гб. И в этот вес не
          учитываются будущие обновления.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="VMaYdjWqRRg"
          caption="Topaz Gigapixel AI"
        />
        <p>
          Если вы ищете бесплатный и open-source аналог Topaz - для вас есть более простой
          вариант - <mark className="app">Upscayl</mark>. Скачать его вы можете по{" "}
          <a href="https://upscayl.org/">этой ссылке</a>. Данная программа также напичкана
          ИИ-моделями для улучшения качества изображений, без поддержки видео-файлов.
        </p>
        <VideoFigure
          styleClass="figure_macos-dark"
          videoSrc="https://github.com/upscayl/upscayl/assets/25067102/ad2453b1-3c5a-4eb2-b992-4cf10e6a49f5"
          caption="Upscayl"
        />
        <p>
          В далёком прошлом &quot;деды-фотографы&quot; до мейнстрима всяких ИИ-апскейлеров
          улучшали изображения через <mark className="app">Benvista PhotoZoom</mark>,
          который вышел аж в 2005 году. С недавних пор в него тоже добавили ИИ-модели, но
          можно обойтись и без них. За счёт своих алгоритмов результат в этой программе
          может выйти лучше, чем в программах описанных выше. И занимает всего лишь 110 Мб
          на жёстком диске.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="woDDQ0xnt84"
          caption="Benvista Photozoom"
        />
        <AdditionInfo>
          Скачать программы <mark className="app">Benvista PhotoZoom</mark>,{" "}
          <mark className="app">Topaz Photo AI</mark>,{" "}
          <mark className="app">Topaz Gigapixel AI</mark> и{" "}
          <mark className="app">Topaz Video AI</mark>, а также пакет плагинов{" "}
          <mark className="plugin">BorisFX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Чем можно плавно замедлить видео?">
        <p>
          Рано или поздно наступает момент, когда монтажёру или композеру нужно замедлить
          видео так, чтобы оно было плавным, без рывков, имея у себя исходник с маленьким
          количеством кадров в секунду. С нынешними технологиями выполнить задачу
          &quot;плавного замедления видео&quot; стало ещё проще.
        </p>
        <p>
          Для этого мы разберём популярные плагины и программы, позволяющие
          интерполировать кадры между собой. Таким образом вы добавите лишних кадров в
          секунду и позволите себе растягивать видео без мерзких пропусков кадров.
        </p>
        <p>
          Первым плагином для <mark className="app">After Effects</mark> в этом списке
          является <mark className="plugin">Twixtor</mark>. Он вышел достаточно давно,
          хорошо зарекомендовал себя в монтаже и имеет много настроек.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="EGZCNcQyvrE"
          caption="Twixtor"
        />
        <p>
          С относительно недавних пор в <mark className="plugin">BorisFX Continuum</mark>{" "}
          тоже добавили некий аналог <mark className="plugin">Twixtor</mark> на основе ИИ.
          Называется <mark className="plugin">BCC Retimer ML</mark> и в сравнении с{" "}
          <mark className="plugin">Twixtor</mark> выдаёт гораздо лучшие результаты.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="YraSxOpy1Qg"
          caption="BCC Retimer ML"
        />
        <p>
          Если вы не хотите использовать <mark className="app">After Effects</mark> для
          замедления видео или если при использовании плагинов у вас всё тормозит, то
          можно использовать сторонние программы, которые генерируют видео отдельно на ваш
          диск с увеличенной частотой кадров за счёт интерполяции. Например,{" "}
          <mark className="app">FlowFrames</mark>.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="H8ISNjzDULw"
          caption="FlowFrames"
        />
        <p>
          Или <mark className="app">FrameGUI</mark>.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="Axz_KwiqNmc"
          caption="FrameGUI"
        />
        <p>
          Ну или <mark className="app">Topaz Video AI</mark>. В этой программе также можно
          улучшить качество исходников за счёт искусственного интеллекта.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="591MqOooDAE"
          caption="Topaz Video AI"
        />
        <AdditionInfo>
          Действия на видео, приведённые выше, могут отличаться в зависимости от версии
          программы или плагина. Некоторые плагины или программы вы можете скачать в
          канале <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> по
          хештегам <mark className="tag">#twixtor</mark>, <mark className="tag">#continuum</mark> или <mark className="tag">#topaz</mark>.
        </AdditionInfo>
        <p>
          Стандартными средствами <mark className="app">After Effects</mark> тоже можно
          замедлить видео, правда результат будет не таким хорошим, как хотелось бы. Для
          этого вам нужно добавить видео на таймлайн и замедлить его с помощью комбинации
          клавиш <mark className="key">Ctrl + Alt + T</mark>. Эта комбинация включит
          функцию <mark className="ui">Enable Time Remapping</mark> для слоя. После
          изменения длины видео - выделите слой, нажмите на{" "}
          <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
          <mark className="ui">Frame Blending &gt; Frame Mix или Pixel Motion</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Чем можно хорошо подавить шумы на видео?">
        <p>
          Когда видео-исходник был снят в условиях малой освещенности или с высоким ISO -
          вы неизбежно столкнётесь с цифровым шумом - дефектом изображения, возникающий
          при съемке из-за несовершенства технологий сенсоров камер фотоаппаратов,
          видеокамер и телефонов, а также из-за фотонной природы света. Особенно он
          заметен на однотонных поверхностях - небо, кожа и в участках теней.
        </p>
        <p>
          Полностью от шума избавиться сложно, но можно его существенно подавить с помощью
          различных инструментов и плагинов. Одним из эффективных плагинов для уменьшения
          шума (и мерцаний от искусственного освещения) является{" "}
          <mark className="plugin">Neat Video</mark>. Плагин гибко настраивается и
          поддерживает GPU-ускорение.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="https://youtube.com/embed/mwSqzxApy-E"
          caption="Neat Video"
        />
        <p>
          У Red Giant тоже есть свой де-нойзер под названием{" "}
          <mark className="plugin">Denoiser III</mark>, который находится в пакете
          плагинов <mark className="plugin">Magic Bullet Suite</mark>.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="PXCElU7HcX8"
          caption="Denoiser III"
        />
        <p>
          И Boris FX тоже не отстаёт от инструментов для подавления шумов. В пакете
          плагинов <mark className="plugin">Boris FX Continuum</mark> тоже можно найти два
          де-нойзера - <mark className="plugin">BCC DeNoise OBS</mark> на основе
          алгоритмов и относительно новый <mark className="plugin">BCC+DeNoise ML</mark>,
          основанный на машинном обучении.{" "}
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="https://youtube.com/embed/L1PeaTa13H4"
          caption="BCC DeNoise ML"
        />
        <p>
          Ну и куда же без Re:vision Effects с их <mark className="plugin">DE:Noise</mark>
          .
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="tGIXeddCPQM"
          caption="DE:Noise"
        />
        <p>
          Если вы не хотите использовать сторонние плагины в своём проекте - вы можете
          воспользоваться встроенным эффектом <mark className="plugin">Reduce Grain</mark>
          .
        </p>
      </DetailsSummary>
      <DetailsSummary title="Какими средствами обычно убирают зелёный или синий фон?">
        {/* fixme: primatte keyer, стандартные плагины для кеинга */}
        <p></p>
      </DetailsSummary>
      <DetailsSummary title='А если исходник был снят не на "зелёнке", то как отделить объект от фона?"'>
        {/* fixme: ротобрашик любимый и силуэт со своим повер матте  */}
        <p>
          В век технологий существует много различных инструментов для отделения объекта
          от фона в сложных ситуациях. Например, когда у оператора не было возможности
          снять объект на однотонном фоне, а вырезать объект на пост-обработке нужно.
        </p>
        <p>
          В базовой поставке <mark className="app">After Effects</mark> давно существует
          прекрасный инструмент <mark className="plugin">Rotobrush</mark>{" "}
          <mark className="key">Alt + Win</mark>, который позволяет вырезать объект от
          фона любой сложности. С относительно недавних пор Adobe обновили этот инструмент
          до версии 3.0, в которой улучшили работу ротоскопирования объектов с помощью
          ИИ-моделей и выдаёт довольно хорошие результаты при правильном использовании
          инструмента.
          {/* fixme: написать комбинацию клавиш для вызова ротобраша */}
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="eoOIrdb_0ko"
          caption="Rotobrush"
        />
        <p>
          Если результат от <mark className="plugin">Rotobrush</mark> вам не нравится - вы
          можете воспользоваться сторонним плагином{" "}
          <mark className="plugin">BorisFX Silhouette</mark> в котором есть инструмент{" "}
          <mark className="plugin">Power Matte</mark>.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="3pdkJ1BPEg0"
          caption="Power Matte in Silhouette"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем бы убрать белый или чёрный цвет у слоя?">

        <p>{/* fixme: extract, uni.unmult */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно прицепить слой к объекту на видео?">
        <p>
          Предположим, что у вас есть видео в котором вы хотите прицепить слой к объекту с
          небольшими движениями. Для этого вам нужно открыть окно{" "}
          <mark className="plugin">Tracker</mark>, которое можно вызвать из меню{" "}
          <mark className="ui">Window</mark> в верхней части интерфейса программы. В этом
          же окне вы можете выбрать четыре действия:
        </p>
        <ul>
          <li>
            <mark className="ui">Track Camera</mark> - применяет эффект{" "}
            <mark className="plugin">3D Camera Tracking</mark>. Полезен если вам нужно
            прицепить объект к поворачивающейся плоскости.
          </li>
          <li>
            <mark className="ui">Warp Stabilizer</mark> - применяет эффект{" "}
            <mark className="plugin">Warp Stabilizer</mark>. Нужен для стабилизации
            дёрганной камеры и устранения эффекта &quot;пьяного оператора&quot; с его
            трясущимися руками и может помочь улучшить качество трекинга. В эффекте есть
            несколько методов для стабилизации камеры на случай, если стандартный не
            нравится.{" "}
            <AdditionWarning>
              Эффект стабилизации может обрезать вашу картинку, для устранения этого -
              раскройте Auto-Scale и установите приемлемое для вас значение Maximum Scale.
              Слишком большие значения в Smoothness могут превратить вашу картинку в
              непонятное желе. Экспериментируйте с умом!
            </AdditionWarning>
          </li>
          <li>
            <mark className="ui">Track Motion</mark> - то, что нам нужно для трекинга
            движения объекта. Благодаря этому мы сможем прицепить любой слой к движущемуся
            объекту.
          </li>
          <li>
            <mark className="ui">Stabilize Motion</mark> - функция, которая перемещает
            исходное видео под движение трекаемого объекта. Может быть полезно, когда
            нужно зафиксировать взгляд на нужный объект.
          </li>
        </ul>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="tqWWhChc8RA"
          caption="Motion Tracking"
        />
        <AdditionInfo>
          Если ваш объект движется слишком быстро - увеличьте область действия работы
          трекинга, так как за пределы области действия трекер не увидит объект. Если же
          наоборот, медленно, но точку уводит непонятно куда - уменьшите область трекинга
          и постарайтесь улучшить контраст любым способом у исходного видео.
        </AdditionInfo>
        <p>
          Если же вам надо оттречить плоскость, которая движется под разными углами
          стандартными способами - сделайте это через{" "}
          <mark className="plugin">3D Camera Tracker</mark>.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="yaT3YwIK-BI"
          caption="3D Camera Tracker"
        />
        <p>
          Если результат от способов выше не понравился, то не время унывать. В
          стандартной поставке <mark className="app">After Effects</mark> есть прекрасный
          инструмент для планарного трекинга под названием{" "}
          <mark className="plugin">Mocha AE</mark>. Он будет несколько урезанней, нежели
          его полноценная версия под названием <mark className="plugin">Mocha Pro</mark>,
          которую надо устанавливать отдельно, но базовые вещи для наложения слоя с
          движением на исходное видео выполнить может.
        </p>
        <YouTubeVideo
          styleClass="figure_browser-youtube"
          link="be_8uRcyiEs"
          caption="Mocha AE For Beginners"
        />
        <AdditionInfo>
          Если у вас слой после переноса трекинга из <mark className="plugin">Mocha</mark>{" "}
          куда то улетает - проверьте разрешение слоя, который вы собираетесь разместить и
          сравните его с разрешением вашей композиции. Если они отличаются - слой так и
          будет улетать. Для исправления этого недочёта - примените{" "}
          <a href="files/Mocha_data_rescale_import.ffx">пресет по этой ссылке</a> от{" "}
          <a href="https://t.me/Pavelusha">@Pavelusha</a> на слой, на котором добавлен{" "}
          <mark className="plugin">Corner Pin</mark>. В применённом пресете вам нужно
          выбрать в Source Layer тот слой, на котором тречили данные. При правильном
          использовании ваша вставляемая картинка переместится куда надо.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как мне сделать точки у шейпового слоя управляемыми с помощью 'нулевых слоёв'?">
        <p>{/* fixme: встроенный скрипт create path from nulls */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как мне сделать 'прыгучую' анимацию нужного параметра?">
        <p>
          {/* fixme: про bouncy текста или положения. можно привести в пример motion tools pro где это есть */}
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем сделать анимацию толщины variable-шрифта?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Чем бы красиво сделать анимацию появления слоя?">
        <p>{/* fixme: про фрактал нойз или autofill 2 */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какими средствами и плагинами обычно делают анимацию 2D-персонажей?">
        <p>{/* fixme: паппет тулс, дюик ангелина и подобные плагины */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать слайдер с значением больше миллиона?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как мне точнее расставить ключи и маркеры под бит?">
        <p>{/* fixme: beat edit, sound keys или по вейвформе */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как мне распаковать пре-композицию?">
        <p>{/* fixme: сторонний плагин unprecompose */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать так, чтобы мой счётчик не дёргался при анимации числа?">
        <p>{/* fixme: написать про monospace шрифт через поворот */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить параметры сразу нескольких композиций?">
        <p>{/* fixme: rd_compsetter */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как удалить выражения сразу в нескольких слоях?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как применить Adjustment Layer только на конкретные слои?">
        <p>{/* fixme: через маску в red giant supercomp */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как сделать прозрачный фон у слоя с эффектом Saber?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Применил Saber, но он обрезается в пределах слоя. Grow Bounds не помогает. Как расширить эффект?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEActions;