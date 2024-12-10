import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import {FlexibleLinks} from "../../../components/FlexibleLinksFaQ";
import {ImageFigure} from "../../../components/ContentFigure";

const PRWhereFind: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="where-find"
    >
      <GithubUpdateInfo filePath="src/pages/sections/prfaq/WhereFind.tsx" />
      <DetailsSummary title="Где найти шаблоны, программы и плагины?">
        <p>
          На <a href="/">главной странице</a>, в закреплённом сообщении в чате{" "}
          <a
            href="https://t.me/joinchat/F1DdXtG9LephYWUy"
            title="AEChat в Telegram"
          >
            AEChat
          </a>{" "}
          и в списке ниже вы всегда сможете найти ссылки на наши каналы с полезным
          контентом.
        </p>
        <ul>
          <li>
            <a href="https://t.me/s/premtemp">PremTemp</a> - канал с переходами,
            шаблонами, расширениями и прочими ништяками для ваших проектов в{" "}
            <mark className="app">Premiere Pro</mark>.
          </li>
          <li>
            <a
              href="https://t.me/s/aetemp"
              title="Канал AETemp в Telegram"
            >
              AETemp
            </a>{" "}
            - как <a href="https://t.me/s/premtemp">PremTemp</a>, только для{" "}
            <mark className="app">After Effects</mark>.
          </li>
          <li>
            <a href="https://t.me/s/designworld">Design World</a> - канал с статичной
            графикой, эффектами и кистями для <mark className="app">Photoshop</mark>,
            которые в дальнейшем можно использовать в Ваших композициях{" "}
            <mark className="app">After Effects</mark>.
          </li>
        </ul>
        <AdditionWarning>
          Контент, предоставленный по ссылкам выше, не должен использоваться в
          коммерческих целях!
        </AdditionWarning>
        <ul>
          <li>
            <a
              href="https://t.me/+Qd9xu7A4TeIwNzY6"
              title="канал склад стройматериалов в Telegram"
            >
              склад стройматериалов
            </a>{" "}
            - канал с творческими программами, утилитами и плагинами к различным
            программам по демократичным ценам для пользователей компьютеров на базе
            Windows.
          </li>
          <li>
            <a
              className="weblink"
              href="https://t.me/+ZqiaMfQRFgM4YmEy"
              title="Яблоневый сад в Telegram"
            >
              Яблоневый сад
            </a>{" "}
            - аналогичный канал с программами, как склад, но для пользователей устройств
            на macOS.
          </li>
        </ul>
        <AdditionInfo>
          Если у вас возникли проблемы с установкой программ или плагинов - прочтите
          раздел <a href="#install-problems">Проблемы с установкой</a> или обратитесь к
          нам в <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </AdditionInfo>
        <AdditionWarning>
          При установке программ с пометкой <mark>репак от кролика</mark> из{" "}
          <a
            href="https://t.me/+Qd9xu7A4TeIwNzY6"
            title="канал склад стройматериалов в Telegram"
          >
            склада стройматериалов (Windows)
          </a>{" "}
          не забывайте убирать галочку с пункта &quot;Реклама&quot; и отключать антивирус
          перед установкой, иначе можете наткнуться на проблему{" "}
          <mark>helper.exe не найден</mark>.
        </AdditionWarning>
        <AdditionDanger>
          Устанавливая софт или плагины из каналов{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a
            href="https://t.me/+Qd9xu7A4TeIwNzY6"
            title="канал склад стройматериалов в Telegram"
          >
            склад стройматериалов (Windows)
          </a>{" "}
          или{" "}
          <a
            className="weblink"
            href="https://t.me/+ZqiaMfQRFgM4YmEy"
            title="Яблоневый сад в Telegram"
          >
            Яблоневый сад (macOS)
          </a>{" "}
          - помните о том, что вы принимаете риск и берёте ответственность за
          использование нелегального ПО. Если вы так боитесь подцепить вирус, троян или
          похожее дерьмо, то вам не место на пиратском море. Претензии людей по типу{" "}
          <mark>&quot;ко-ко-ко, в складе/премтемпе адни выруси!!1!&quot;</mark>,{" "}
          <mark>&quot;у миня антевырус ругается на hacktool!11&quot;</mark> и подобное мы
          не можем принять всерьёз, потому что не знаем внятной причины доверять вбросу.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary title="Как скачать нужный мне шаблон, если у меня есть на него ссылка?">
        <p>
          Если вы не нашли то, что вам нужно из ссылок, то у нас имеется бот{" "}
          <a
            href="https://t.me/HiStockBot?start=509060394"
            title="Бот HiStock для покупки шаблонов в Telegram"
          >
            {" "}
            HiStock в Telegram
          </a>{" "}
          для оперативной покупки шаблонов с платформ{" "}
          <a
            href="https://elements.envato.com"
            title="Envato Elements"
          >
            Envato Elements
          </a>
          ,{" "}
          <a
            href="https://freepik.com/"
            title="Freepik"
          >
            Freepik
          </a>
          ,{" "}
          <a
            href="https://motionarray.com/"
            title="Motion Array"
          >
            Motion Array
          </a>{" "}
          и{" "}
          <a
            href="https://artlist.io/"
            title="Artlist"
          >
            Artlist
          </a>{" "}
          по выгодным ценам.
        </p>
        <AdditionWarning>
          Файлы из Videohive, Shutter Stock и других сервисов, которые не используют
          подписочную модель распространения файлов, не поддерживаются ботом.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где найти бесплатные стоковые видео для своих проектов?">
        <p>
          Существует множество бесплатных видео-стоков онлайн, среди которых многие
          предоставляют материалы с лицензией <mark>Creative Commons Zero (CC0)</mark>,
          что означает возможность использования их в своих коммерческих проектах, не
          указывая авторство. Перед использованием материалов, необходимо внимательно
          ознакомиться с условиями использования на каждом конкретном ресурсе. Ниже
          перечислены популярные источники видео.
        </p>
        <FlexibleLinks>
          <a
            href="https://www.pexels.com/videos/"
            title="Pexels"
          >
            Pexels
          </a>

          <a
            href="https://pixabay.com/videos/"
            title="Pixabay"
          >
            Pixabay
          </a>

          <a
            href="https://www.videvo.net/"
            title="Videvo"
          >
            Videvo
          </a>

          <a
            href="https://coverr.co/"
            title="Coverr"
          >
            Coverr
          </a>

          <a
            href="https://www.splitshire.com"
            title="SplitShire"
          >
            SplitShire
          </a>

          <a
            href="https://mazwai.com/"
            title="Mazvai"
          >
            Mazvai
          </a>

          <a
            href="https://www.videezy.com/"
            title="Videezy"
          >
            Videezy
          </a>

          <a
            href="https://www.vidsplay.com/"
            title="Vidsplay"
          >
            Vidsplay
          </a>

          <a
            href="https://cutestockfootage.com/"
            title="CuteStockFootage"
          >
            CuteStockFootage
          </a>

          <a
            href="https://mitchmartinez.com/free-4k-red-epic-stock-footage/"
            title="Mitch Martinez"
          >
            Mitch Martinez
          </a>

          <a
            href="https://mixkit.co/"
            title="Mixkit"
          >
            Mixkit
          </a>

          <a
            href="https://www.xstockvideo.com/"
            title="XStockVideos"
          >
            XStockVideos
          </a>

          <a
            href="https://www.clipstill.com/"
            title="Clipstill"
          >
            Clipstill
          </a>

          <a
            href="https://vimeo.com/groups/freehd/"
            title="Пользователь Phil Fred на Vimeo"
          >
            Phil Fred на Vimeo
          </a>

          <a
            href="https://www.ignitemotion.com/"
            title="IgniteMotion"
          >
            IgniteMotion
          </a>

          <a
            href="https://www.youtube.com/playlist?list=PLTDgOUcX23hZdwKWhKhWp3H2D5nmWhpvv"
            title="Плейлист на YouTube c абстрактными фонами"
          >
            Абстрактные фоны на YouTube
          </a>
        </FlexibleLinks>
        <AdditionWarning>
          Некоторые ресурсы могут быть заблокированы на территории РФ или других стран,
          используйте VPN для доступа на данные ресурсы.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где найти бесплатные звуки и звуковые эффекты для своих видео?">
        <p>
          В канале <a href="https://t.me/s/aetemp">AETemp</a> вы можете найти звуковые
          эффекты в поиске по хештегу <mark className="tag">#звуки</mark>. Если же вам не
          хватает ассортимента из канала, то ниже предоставлен список сайтов, откуда вы
          можете достать бесплатные звуковые эффекты.
        </p>
        <FlexibleLinks>
          <a
            href="https://www.audiomicro.com/free-sound-effects"
            title="Audiomicro"
          >
            Audiomicro
          </a>

          <a
            href="https://www.zapsplat.com/"
            title="Zapsplat"
          >
            Zapsplat
          </a>

          <a
            href="https://www.freesfx.co.uk/"
            title="FreeSFX"
          >
            FreeSFX
          </a>

          <a
            href="https://www.freesoundslibrary.com/"
            title="FreeSoundLibrary"
          >
            FreeSoundLibrary
          </a>

          <a
            href="https://soundbible.com/"
            title="SoundBible"
          >
            SoundBible
          </a>

          <a
            href="https://www.soundeffectsplus.com/"
            title="soundeffects+"
          >
            soundeffects+
          </a>

          <a
            href="https://freesound.org/"
            title="freesound"
          >
            freesound
          </a>
        </FlexibleLinks>
        <AdditionWarning>
          Перед использованием звуков в коммерческих целях - обязательно прочтите условия
          использования и лицензии, чтобы не попасть в неприятную ситуацию.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где найти шрифт по имеющемуся фото?">
        {/* fixme: исправить пути у фото и стили figure, заменить иконки для прфака */}
        <p>
          Вы можете использовать сервисом{" "}
          <a
            href="https://en.likefont.com"
            title="Сервис по нахождению шрифтов LikeFont"
          >
            LikeFont
          </a>{" "}
          для определения шрифта по фотографии. Этот сервис способен распознавать шрифты
          как на латинице, так и на кириллице.
        </p>
        <p>
          Как начать им пользоваться? Всё просто: зайдите на сайт и загрузите своё
          изображение с помощью проводника или <mark className="key">Ctrl + V</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/likefont_mainpage.png"
          imgTitle="Главная страница LikeFont"
          caption="Главная страница LikeFont"
        />
        <AdditionDanger>
          Учтите, что по умолчанию на странице стоит галка на{" "}
          <mark className="ui">I agree to post it in Identification Community</mark>,
          которая выкладывает ваш скриншот на общее обозрение. Если не хотите выкладывать
          скриншот в сеть - уберите галочку.
        </AdditionDanger>
        <p>
          Предположим, что на вход мы дали скриншот. Но вот незадача: он неконтрастный и
          весь контент сливается. Что же делать?
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/prfaq_likefont_example.png"
          imgTitle="Пример плохого исходника"
          caption="Пример плохого исходника"
        />
        <p>
          Для этого нужно предварительно обработать изображение. После загрузки
          изображения сайт предлагает инструменты для обработки изображения, например{" "}
          <mark className="ui">Threshold</mark>. Мы его повышаем до максимально возможного
          значения, чтобы отделить текст от фона. Также есть инструменты для поворота,
          отзеркаливания и наклона изображения при необходимости.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/prfaq_likefont_fixed.png"
          imgTitle="Изображение после обработки средствами сайта"
          caption="Изображение после обработки средствами сайта"
        />
        <p>
          Как мы видим, Threshold помог, но не сильно, так как фрактальный шум по яркости
          совпал с яркостью текста. Но не унываем, у нас есть как минимум три чистых
          буквы. После обработки пролистываем страницу ниже и мы видим несколько
          изображений к которым нужно вписать букву.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/prfaq_likefont_recognition.png"
          imgTitle="Изображения к которым нужно вписать букву"
          caption="Изображения к которым нужно вписать букву"
        />
        <p>
          Если на таких изображениях нет букв или символа, то такие ячейки можно
          пропустить. После того как вы вписали буквы, нажмите на{" "}
          <mark className="ui">Identify Now</mark> и сервис начнёт распознавать шрифт, а
          затем выдаст результат.
        </p>
        <AdditionInfo>
          Чем больше вы впишете букв, тем лучше будет результат распознавания шрифта!
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/prfaq_likefont_result.png"
          imgTitle="Результат распознавания"
          caption="Результат распознавания"
        />
        <p>
          В моём примере был использован шрифт <mark>Berlin Sans FB</mark> и с его
          нахождением сервис справился прекрасно.
        </p>
      </DetailsSummary>
    </div>
  );
};
export default PRWhereFind;