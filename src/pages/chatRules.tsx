import React from "react";

import {Header} from "../components/Header";
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import {AdditionDanger, AdditionInfo, AdditionWarning} from "../components/Additions";
const ChatRules = () => (
  <div>
    <Header title="chatRules" />
    
    <main className="main">
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
                    <a href="https://www.ntwind.com/software/wincam.html">Wincam</a> -
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
                Незнание правил не освобождает вас от ответственности.
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
                  href="http://t.me/aetemp"
                  title="AETemp в Telegram"
                >
                  AETemp
                </a>
                ,{" "}
                <a
                  href="http://t.me/designworld"
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
                Если ваш вопрос остался не замеченым, не надо жаловаться и ныть об этом.
                Достаточно удалить старое сообщение и написать снова. Пожалуйста, не
                пренебрегайте этим. Слишком частое повторение вопроса может привести к
                муту по усмотрению администрации.
              </AdditionInfo>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2></h2>
              <p></p>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2></h2>
              <p></p>
            </div>
          </section>
          <section className="faq-section">
            <div className="faq-content">
              <h2></h2>
              <p></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
);
export default ChatRules;
