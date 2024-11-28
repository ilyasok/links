import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import {VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {AdditionInfo} from "../../../components/Additions";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

export const AEActions: React.FC = () => {
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
          хештегам <mark>#twixtor</mark>, <mark>#continuum</mark> или <mark>#topaz</mark>.
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
        <p>{/* fixme: primatte keyer, стандартные плагины для кеинга */}</p>
      </DetailsSummary>
      <DetailsSummary title="Чем бы убрать белый или чёрный цвет у слоя?">
        <p>{/* fixme: extract, uni.unmult */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как и чем можно прицепить слой к объекту на видео?">
        <p>{/* fixme: 3d camera tracking, mocha pro, tracking object */}</p>
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
