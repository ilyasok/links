import React from "react";

import Header from "../components/Header";
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import {AdditionDanger, AdditionInfo, AdditionWarning} from "../components/Additions";
import {motion} from "framer-motion";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
const ChatRules = () => (
  <div>
    <Helmet>
      <title>rules@aechat</title>
      <meta
        name="description"
        content="Правила чатов AEChat и DWChat"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content="https://aechat.ru/"
      />
      <meta
        property="og:title"
        content="aechat&dwchat-rules"
      />
      <meta
        property="og:description"
        content="Правила чатов AEChat и DWChat"
      />
    </Helmet>
    <Header title="chatRules" />
    <motion.main
      className="main"
      initial={{x: 100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{x: -50, opacity: 0}}
      transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
    >
      <div className="faq-container-flex">
        <div className="faq-container">
          <div className="faq-title">
            <h1>Правила AEChat и DWChat</h1>
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Главная</Link>,
                },
                {
                  title: <Link to="/rules">Правила AEChat и DWChat</Link>,
                },
              ]}
            />
          </div>
          <AdditionDanger>
            Предупреждение для иноязычных пользователей: In{" "}
            <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a> and{" "}
            <a href="https://t.me/+3LF_B_VK-Nw4YzYy">DWChat</a> we communicate exclusively
            in Russian. If you don&apos;t know Russian, we recommend using an{" "}
            <a href="https://translate.google.com">online-translator</a> or looking for a
            chat in a language that you understand.
          </AdditionDanger>
          <section className="faq-section">
            <div className="faq-content">
              <h2>О принципах в чатах AEChat и DWChat</h2>
              <p>
                В наших чатах <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>{" "}
                и <a href="https://t.me/+3LF_B_VK-Nw4YzYy">DWChat</a> вы можете обсудить
                любые вопросы касающиеся тематики чата. В{" "}
                <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a> мы обычно
                обсуждаем <mark className="app">After Effects</mark>,{" "}
                <mark className="app">Premiere Pro</mark> и плагины для этих программ. А в{" "}
                <a href="https://t.me/+3LF_B_VK-Nw4YzYy">DWChat</a> мы обсуждаем{" "}
                <mark className="app">Photoshop</mark>,{" "}
                <mark className="app">Illustrator</mark>,{" "}
                <mark className="app">Figma</mark> и прочие дизайнерские программы.
              </p>
              <AdditionInfo>
                Пожалуйста, старайтесь не уходить за пределы тематики чатов обсуждая,
                например, другой софт или компьютерное железо. Для этого есть{" "}
                <Link to="/">другие чаты</Link>. Могут быть исключения в зависимости от
                настроения администрации.
              </AdditionInfo>
              <p>
                Прежде чем рассказать о проблеме - нажимайте на галочку рядом с пунктом{" "}
                <mark>&quot;сжать изображение&quot;</mark> при загрузке фото, не делайте
                фото/видео монитора на телефон и опишите проблему текстом, а не голосом.
              </p>
              <AdditionInfo>
                Для записи экрана и скриншотов на Windows подойдут следующие программы:{" "}
                <ul>
                  <li>
                    <a href="https://github.com/ShareX/ShareX/releases">ShareX</a> -
                    популярная программа для создания скриншотов или записи экрана на
                    Windows.
                  </li>
                  <li>
                    <a href="https://www.ntwind.com/software/wincam.html">WinCam</a> -
                    легковесная программа для записи экрана на Windows.
                  </li>
                  <li>
                    <a href="https://www.nvidia.com/ru-ru/software/nvidia-app/">
                      NVIDIA App
                    </a>{" "}
                    - программа для пользователей видеокарт NVIDIA.
                  </li>
                  <li>
                    <a href="https://www.amd.com/en/products/software/adrenalin.html">
                      AMD Software: Adrenalin Edition
                    </a>{" "}
                    - аналогичная программа для пользователей видеокарт AMD.
                  </li>
                </ul>
                Чтобы записать видео экрана на macOS - воспользуйтесь комбинацией клавиш{" "}
                <a href="https://support.apple.com/ru-ru/102618">Shift + Command + 5</a>{" "}
                или встроенной программой QuickTime Player.
              </AdditionInfo>
              <p>
                При описании проблемы давайте более подробное описание ваших действий,
                характеристики вашего ПК <sub>(при необходимости)</sub>, в каком кодеке и
                формате исходники <sub>(при необходимости)</sub>, откуда установлена
                программа, на каком диске она стоит и что вы делали до того, как ошибка
                появилась. Мы не экстрасенсы, поэтому будьте добры - предоставляйте
                информацию по возможности более развёрнуто.
              </p>
              <AdditionWarning>
                Незнание правил не освобождает вас от ответственности. Для действующих
                членов администрации чата правила могут не применяться.
              </AdditionWarning>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2>Администраторы чата никому и ничего не обязаны!</h2>
              <p>
                Администраторы следят за порядком чата и время от времени помогают
                участникам, но не нужно принимать нас как за единственных спасителей. Мы
                не обязаны отвечать на все вопросы до единого, также как и остальные
                участники чата.
              </p>
              <AdditionDanger>
                Не стоит писать администраторам в &quot;личку&quot;, если ваш вопрос никак
                не касается работы чата, каналов{" "}
                <a
                  href="https://t.me/s/aetemp"
                  title="AETemp в Telegram"
                >
                  AETemp
                </a>
                ,{" "}
                <a
                  href="https://t.me/s/designworld"
                  title="Design World в Telegram"
                >
                  Design World
                </a>{" "}
                и бота{" "}
                <a
                  href="https://t.me/HiStockBot?start=509060394"
                  title="Бот HiStock в Telegram"
                >
                  HiStock
                </a>
                . Если вы не можете писать в чат - убедитесь в том, что вы нажали на
                кнопку &quot;Начать общаться&quot; перед входом и не нарушали правила.
              </AdditionDanger>
              <AdditionWarning>
                Бот в нашем чате удаляет сообщения с упоминанием пользователей, поэтому
                старайтесь при формулировке вопроса не использовать упоминание через
                &quot;собаку&quot;.
              </AdditionWarning>
              <AdditionInfo>
                Если ваш вопрос остался незамеченным, не надо жаловаться и ныть об этом.
                Достаточно удалить старое сообщение и написать снова. Пожалуйста, не
                пренебрегайте этим. Слишком частое повторение вопроса может привести к
                запрету на отправку сообщений по усмотрению администрации.
              </AdditionInfo>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2>Не гадим в чате и не злимся на других</h2>
              <p>
                В чате запрещён спам, флуд (отход от темы, вопросы не по продуктам Adobe
                или много бессмысленных сообщений) и чрезмерное употребление матов. Также
                в нашем уставе неприемлемо явное оскорбление других пользователей,
                упоминание родных и токсичность.
              </p>
              <AdditionWarning>
                Если вы после блокировки или запрета на отправку сообщений решите зайти с
                второго аккаунта (&quot;твинка&quot;) или же с другого аккаунта, чтобы
                &quot;поязвить&quot; дальше - в бан пойдут оба аккаунта вне зависимости от
                наказания.
              </AdditionWarning>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2 id="nometa">Ребята, давайте жить без мета-вопросов!</h2>
              <p>
                Предположим, что вы только что зашли в чат и у вас явно есть вопрос. Не
                нужно писать:{" "}
                <mark>&quot;а разбирается кто-то в [название плагина]????&quot;</mark>,{" "}
                <mark>&quot;нужна помощь, пишите в лс&quot;</mark>,{" "}
                <mark>&quot;сложно описать вопрос, помогите в лс&quot;</mark>,{" "}
                <mark>&quot;ау а че все молчат??&quot;</mark> и подобные сообщения.
              </p>
              <div className="message-flex">
                <div className="message-incorrect">
                  <div className="message-left">всем плотнейший салам</div>
                  <div style={{opacity: 0.5, fontSize: "10px", textAlign: "center"}}>
                    Прошло 30 секунд
                  </div>

                  <div className="message-left">алё, все спят что-ли бл&?????</div>
                  <div className="message-right">
                    Привет, здесь не техподдержка Adobe. Если у тебя есть вопрос - задай
                    его. Для разговоров &quot;по душам&quot; у нас есть флудилка.
                  </div>
                  <div className="message-left">
                    ты разбираешся в интерфейсе автор эффекта?
                  </div>
                  <div className="message-right">
                    Предположим, что да. Твой вопрос собственно в чём заключается?
                  </div>
                  <div className="message-left">
                    я не могу нормально объяснить, можно в личку плз?
                  </div>
                  <div className="message-right">
                    Нет, нельзя. Сформулируйте свой вопрос как есть в этом чате, иначе
                    зачем вы зашли? Просто привлечь своё внимание и тянуть время у других?
                  </div>
                  <div style={{opacity: 0.5, fontSize: "10px", textAlign: "center"}}>
                    Прошло N минут
                  </div>
                  <div className="message-left">
                    ладно... я установил скрипт, но не могу закрепить его в рабочей
                    области как панель. что делать?
                  </div>
                  <div className="message-right">
                    Вот так бы сразу... Тебе достаточно расположить .jsx скрипт в подпапку
                    ScriptsUI Panels в директории с программой, а не сразу в папку
                    Scripts. После переноса твой скрипт переместится в раздел Window и
                    оттуда ты можешь открыть окно с нужным скриптом и прикрепить куда тебе
                    удобно.
                  </div>
                  <div style={{opacity: 0.5, fontSize: "10px", textAlign: "center"}}>
                    Время переписки около 5-30 минут
                    <br />
                    (с учётом времени бездействия спрашивающего)
                  </div>
                </div>
                <div className="message-correct">
                  <div className="message-left">
                    Всем привет! Как можно закрепить окно скрипта в рабочем пространстве,
                    если он установлен в папку Scripts?
                  </div>
                  <div className="message-right">
                    Привет, нужно переместить .jsx скрипт в дочернюю папку ScriptsUI
                    Panels, а не сразу в папку Scripts. После переноса твой скрипт
                    переместится в раздел Window и оттуда ты можешь открыть окно с нужным
                    скриптом и прикрепить куда тебе удобно.
                  </div>
                  <div className="message-left">Спасибо за оперативный ответ!</div>
                  <div style={{opacity: 0.5, fontSize: "10px", textAlign: "center"}}>
                    Время переписки около 30 секунд
                  </div>
                </div>
              </div>
              <p>
                Вы спросите: <mark>а почему?</mark>. В примере с зелёным фоном видно, что
                переписка выглядит гораздо адекватнее и занимает куда меньше времени, чем
                пример с красным фоном. У спрашивающего в примере с зелёным фоном уже
                имеется чёткий и сформулированный вопрос, в следствии чего любой участник
                чата может спокойно ответить на вопрос оперативно. Что касается переписки
                на красном фоне: спрашивающий считает, что участники чата являются
                победителями &quot;Битвы экстрасенсов&quot; и могут понять в чём у вас там
                проблема или в чём заключается ваша просьба помощи с помощью силы мысли и
                эзотерики. Это не так. Пустые вопросы, которые подразумевают вопросы в
                ответ - тратят время и на них тупо не хочется отвечать.
              </p>
              <p>
                Из-за ваших мета-вопросов вы не сможете получить внятный ответ, пока не
                объясните ваш вопрос полностью.
              </p>
              <AdditionWarning>
                Если вы всё ещё не понимаете суть проблемы мета-вопросов, то администрация
                оставляет за собой право замутить вас для того, чтобы за это время вы
                смогли внятно сформулировать вопрос.
              </AdditionWarning>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2>Никакой порнухи, политики, сомнительного и шокирующего контента</h2>
              <p>
                Мы не одобряем политические или около-политически дискуссии в наших чатах.
                Также в наших чатах нельзя размещать порнографию или любой другой
                NSFW-контент вне зависимости от контекста.
              </p>
              <AdditionWarning>
                Администрация оставляет за собой право банить пользователей за
                провокационные ники и сомнительные аватарки, например с изображением
                нацистской символики.
              </AdditionWarning>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2>Никаких барыг, попрошаек и рекламодателей</h2>
              <p>
                Запрещена купля, продажа и перепродажа товаров, шаблонов, «доступов», а
                также самопиар своей страницы в соцсетях, реферальные ссылки и реклама без
                разрешения администрации.
              </p>
              <AdditionInfo>
                Бот может удалять ссылки на Telegram-каналы в чате, которых нет в
                закреплённом сообщении. Если вы хотите поделиться с кем-то каналом -
                перешлите его собеседнику в личные сообщения.
              </AdditionInfo>
            </div>
          </section>
          <Footer
            title="aechat"
            initialYear={2021}
          />
        </div>
      </div>
    </motion.main>
  </div>
);
export default ChatRules;
