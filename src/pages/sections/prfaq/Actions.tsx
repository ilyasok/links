import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {ImageFigure, YouTubeVideo} from "../../../components/ContentFigure";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";

const PRActions: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/Actions.tsx" />
      <DetailsSummary title="Чем бы мне улучшить качество исходников?">
        <p>
          В наше время существует множество различных способов для улучшения качества
          видеоматериалов с помощью искусственного интеллекта. Все эти методы обычно
          предполагают локальную обработку материалов на вашем компьютере, поэтому
          мощность компьютера играет важную роль: если у вас слабый ПК или
          непроизводительная видеокарта - могут возникнуть проблемы с производительностью.
        </p>
        <p>
          Одним из хороших плагинов для <mark className="app">Premiere Pro</mark> по
          улучшению качества могу назвать <mark className="plugin">BCC UpRes ML</mark> в
          пакете плагинов <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <YouTubeVideo
          link="_gHNqhHfeck"
          caption="BCC UpRes ML"
        />
        <p>
          Далее могу посоветовать программу <mark className="app">Topaz Video AI</mark>.
          Она позволяет улучшить качество видео за счёт различных алгоритмов и моделей.
          Если у вас есть достаточно времени для экспериментов - можно добыть из плохого
          исходника вполне себе хорошее качество изображения. Программа распространяется
          как Standalone, плагин для <mark className="app">Premiere Pro</mark>{" "}
          отсутствует.
        </p>
        <YouTubeVideo
          link="zbX7x8Oo_Uc"
          caption="Topaz Video AI"
        />
        <AdditionInfo>
          Скачать программу <mark className="app">Topaz Video AI</mark>, а также пакет
          плагинов <mark className="plugin">Boris FX Continuum</mark> можно в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary
        title="Чем можно плавно замедлить видео?"
        tag="слоумо, твикстор, топаз, ретаймер, тайм ремапинг, плавное замедление, флоуфреймс"
      >
        <p>
          Бывают случаи, когда перед монтажёром встаёт задача сделать видео более
          медленным, сохраняя плавность движения и избегая рывков. Особенно это актуально,
          если исходный материал имеет невысокий фреймрейт.
        </p>
        <p>
          Для достижения плавного замедления мы рассмотрим популярные инструменты и
          программы, которые могут помочь интерполировать уже существующие кадры. Это
          позволит добавить дополнительные кадры в видео, а значит появляется возможность
          замедлять видео без заметных рывков.
        </p>
        <p>
          Первым плагином для <mark className="app">Premiere Pro</mark> в этом списке
          является <mark className="plugin">Twixtor</mark>. Он вышел достаточно давно,
          хорошо зарекомендовал себя в монтаже и имеет много настроек.
        </p>
        <YouTubeVideo
          link="20Smtrzt3m4"
          caption="Twixtor"
        />
        <p>
          С относительно недавних пор в <mark className="plugin">Boris FX Continuum</mark>{" "}
          тоже добавили некий аналог <mark className="plugin">Twixtor</mark> на основе ИИ.
          Называется <mark className="plugin">BCC Retimer ML</mark> и в сравнении с{" "}
          <mark className="plugin">Twixtor</mark> выдаёт гораздо лучшие результаты.
        </p>
        <AdditionInfo>
          Плагин демонстрируется в <mark className="app">After Effects</mark>. Не
          переживайте, порядок действий можно повторить и в{" "}
          <mark className="app">Premiere Pro</mark>.
        </AdditionInfo>
        <YouTubeVideo
          link="YraSxOpy1Qg"
          caption="BCC Retimer ML"
        />
        <p>
          Если вы не хотите замедлять видео в <mark className="app">Premiere Pro</mark>{" "}
          или если плагины вызывают различные ошибки при рендере, то можно воспользоваться
          сторонними программами. Например, с помощью программы{" "}
          <mark className="app">FlowFrames</mark> можно создать копию вашего видео с
          повышенной частотой кадров через интерполирование и сохранить его на вашем диске
          для дальнейшей работы.
        </p>
        <YouTubeVideo
          link="H8ISNjzDULw"
          caption="FlowFrames"
        />
        <p>
          Или с помощью <mark className="app">FrameGUI</mark>.
        </p>
        <YouTubeVideo
          link="Axz_KwiqNmc"
          caption="FrameGUI"
        />
        <p>
          Ну или замедлить через <mark className="app">Topaz Video AI</mark>. В этой
          программе также можно улучшить качество исходников за счёт искусственного
          интеллекта.
        </p>
        <YouTubeVideo
          link="591MqOooDAE"
          caption="Topaz Video AI"
        />
        <AdditionInfo>
          Действия на видео, приведённые выше, могут отличаться в зависимости от версии
          программы или плагина. Некоторые плагины или программы вы можете скачать в
          канале <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> по
          хештегам <mark className="tag">#twixtor</mark>,{" "}
          <mark className="tag">#continuum</mark> или <mark className="tag">#topaz</mark>.
        </AdditionInfo>
        <p>
          Стандартными средствами <mark className="app">Premiere Pro</mark> тоже можно
          замедлить видео, правда результат будет не таким хорошим, как хотелось бы. Для
          этого выделите нужный клип, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + R</mark> и растяните видео на нужную длину. В
          пункте <mark className="ui">Time Interpolation</mark> можно выбрать три типа
          интерполяции: <mark className="ui">Frame Sampling</mark>,{" "}
          <mark className="ui">Frame Blending</mark> или{" "}
          <mark className="ui">Optical Flow</mark>.
        </p>
        <YouTubeVideo
          link="JemBgoF3K6Q"
          caption="How to Use Optical Flow"
        />
      </DetailsSummary>
      <DetailsSummary title="Чем можно хорошо подавить шумы на видео?">
        <p>
          Когда вы снимаете видео в условиях низкой освещенности или с высоким ISO - вы
          неизбежно столкнётесь с цифровым шумом, дефектом изображения, возникающий при
          съемке из-за несовершенства матрицы (сенсора) камеры. Цифровой шум - это
          избыточный сигнал, который появляется на изображении, когда матрица камеры
          пытается уловить источники света. Особенно он заметен на однотонных поверхностях
          - небо, кожа и в участках теней.
        </p>
        <p>
          Полностью избавиться от шумов и мерцаний на видео сложно, но с помощью различных
          инструментов и плагинов можно существенно уменьшить их проявление. Одним из
          наиболее эффективных плагинов для подавления шумов могу назвать{" "}
          <mark className="plugin">Neat Video</mark>.
        </p>
        <YouTubeVideo
          link="DYKBQF7eIUo"
          caption="Neat Video"
        />
        <p>
          У Red Giant тоже есть свой де-нойзер под названием{" "}
          <mark className="plugin">Denoiser III</mark>, который находится в пакете
          плагинов <mark className="plugin">Magic Bullet Suite</mark>.
        </p>
        <YouTubeVideo
          link="PXCElU7HcX8"
          caption="Denoiser III"
        />
        <p>
          И Boris FX тоже не отстаёт от инструментов для подавления шумов. В пакете
          плагинов <mark className="plugin">Boris FX Continuum</mark> можно найти два
          де-нойзера - <mark className="plugin">BCC DeNoise OBS</mark> на основе
          алгоритмов и относительно новый <mark className="plugin">BCC+DeNoise ML</mark>,
          основанный на машинном обучении.{" "}
        </p>
        <YouTubeVideo
          link="L1PeaTa13H4"
          caption="BCC DeNoise ML"
        />
        <p>
          Ну и куда же без Re:Vision Effects с их <mark className="plugin">DE:Noise</mark>
          .
        </p>
        <YouTubeVideo
          link="tGIXeddCPQM"
          caption="DE:Noise"
        />
        <p>
          Если вам не хочется заморачиваться с сторонними плагинами, но хотите немного
          подавить шум на видео - воспользуйтесь встроенным эффектом{" "}
          <mark className="plugin">VR De-Noise</mark>.
        </p>
        <YouTubeVideo
          link="hr7qFhh6Y5g"
          caption="VR De-Noise"
        />
      </DetailsSummary>
      <DetailsSummary
        title="Какими средствами обычно удаляют зелёный или синий фон?"
        tag="кеинг, клинап, убрать фон"
      >
        <p>
          Допустим, у вас есть видеоматериал с объектом или персонажем на зелёном фоне,
          который требуется удалить. Для этого существует множество инструментов и техник,
          которые помогут вам справиться с этой задачей.
        </p>
        <AdditionInfo>
          Если вы хотите потренироваться с кеингом зелёного фона - скачайте любое видео из{" "}
          <a href="https://www.youtube.com/playlist?list=PLB62ktMZylCyHxubuonbeZ5VWIYPJMY9J">
            этого плейлиста
          </a>{" "}
          и экспериментируйте.
        </AdditionInfo>
        <p>
          В <mark className="app">Premiere Pro</mark> легко убрать зелёный фон, используя
          встроенный эффект
          <mark className="file">Ultra Key</mark>.
        </p>
        <YouTubeVideo
          link="c_P8s3r1dXE"
          caption="Ultra Key"
        />
        <AdditionInfo>
          Плагины ниже демонстрируются в <mark className="app">After Effects</mark>. Все
          эти действия можно повторить и в <mark className="app">Premiere Pro</mark>,
          принцип работы мало чем отличается.
        </AdditionInfo>
        <p>
          Из сторонних инструментов для удаления цветного фона любой сложности можно
          выделить <mark className="plugin">Primatte Keyer</mark>, поставляющийся в пакет
          плагинов <mark className="plugin">Red Giant VFX Suite</mark>.
        </p>
        <YouTubeVideo
          link="zYARqiWTArU"
          caption="Getting Started with Primatte Keyer"
        />
        <p>
          Если результат от работы плагина выше не нравится - есть{" "}
          <mark className="plugin">BCC Primatte Studio</mark>, поставляющийся в пакете{" "}
          <mark className="plugin">Boris FX Continuum</mark>.
        </p>
        <YouTubeVideo
          link="AaKTHKspAkQ"
          caption="BCC Primatte Studio"
        />
      </DetailsSummary>
      <DetailsSummary title="Как мне быстро расставить маркеры под бит, желательно автоматически?">
        <p>
          Если у вас имеется аудиофайл, особенно с чётко выраженными битами - вам будет
          довольно легко сгенерировать ключи на основе звуковой волны.
        </p>
        <AdditionInfo>
          Если вам нужно вытащить биты и отделить их от остальной музыки - воспользуйтесь
          программой{" "}
          <a href="https://github.com/stemrollerapp/stemroller/releases">StemRoller</a>.
        </AdditionInfo>
        <p>
          Чтобы быстро расставить маркеты приходит сторонний плагин{" "}
          <mark className="plugin">Beat Edit</mark>, который как раз и выполняет эту
          задачу.
        </p>
        <YouTubeVideo
          link="JGVLRcjp7ss"
          caption="Как создавать маркеры с помощью Beat Edit"
        />
        <AdditionInfo>
          Плагин, приведённый в этом пункте можно скачать из канала{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>.
        </AdditionInfo>
      </DetailsSummary>
      <DetailsSummary title="Как и чем разделить голос человека от музыки?">
        <p>
          В век различных технологий по обработке звука обычному пользователю наконец-то
          стала доступна возможность разделить голос и &quot;инструментал&quot; на разные
          дорожки с помощью искусственного интеллекта. Онлайн-сервисы здесь рассматривать
          даже не хочется, так как часто они предлагают &quot;очень смешные&quot; условия
          для бесплатных пользователей: либо один файл в день, либо только для
          прослушивания без дальнейшего скачивания.
        </p>
        <p>
          <mark className="app">StemRoller</mark>, наверное, самая адекватная и локальная
          программа для разделения трека на 4 или 6 дорожек (биты, инструментал, бас и
          голос). Скачать его можно{" "}
          <a href="https://www.stemroller.com/">по этой ссылке</a> для устройств на
          Windows и macOS.
        </p>
        <p>
          После распаковки архива с программой, его можно открыть и спокойно закинуть в
          него свой аудио-файл. После обработки ваше аудио будет расположено в папку,
          которая указана в настройках программы. Также его можно открыть, нажав на
          элемент очереди файлов.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="/images/stemroller_interface.png"
          imgTitle="Главная страница StemRoller"
          caption="StemRoller"
        />
        <AdditionWarning>
          Скорость обработки аудио-файла зависит от мощности вашего устройства, обычно оно
          максимум занимает 2-3 минуты. Если вы сталкиваетесь с трудностями в обработке,
          то попробуйте переключить обработку на процессоре в настройках программы.
        </AdditionWarning>
        <p>
          Если же вам всё-таки нужен онлайн-сервис для разделения музыки от голоса, то вы
          можете воспользоваться <a href="https://vocalremover.org/ru/">Vocalremover</a>.
          Сервис предлагает пользователям без подписки обработку одного аудио-файла в
          день.
        </p>
        <AdditionWarning>
          После обработки сразу сохраните обработанный аудио-файлы, чтобы их не потерять.
          Сервис не предусматривает возможность восстановления аудио-файлов после закрытия
          или смены страницы.
        </AdditionWarning>
      </DetailsSummary>
    </div>
  );
};

export default PRActions;
