import React, {useState} from "react";
import {Modal} from "antd";
import {motion} from "framer-motion";

const SupportDonut: React.FC = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <>
      <div className="support">
        <button
          className="support-button support-button-donut"
          onClick={showModal1}
        >
          Поддержать сайт
        </button>
        <button
          className="support-button support-button-share"
          onClick={showModal2}
        >
          Поделиться
        </button>
      </div>
      <Modal
        open={isModalOpen1}
        title="Поддержать автора и сайт"
        closeIcon={null}
        centered
        onCancel={handleCancel1}
        footer={null}
      >
        <p className="support-modal-text">
          Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать его,
          то вы можете поддержать меня любой суммой и любым удобным вам способом.
        </p>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
          <motion.button
            className="support-button support-button-sber"
            onClick={() => setIsModalOpen3(true)}
            whileHover={{
              scale: 1.075,
              transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
            }}
            whileTap={{scale: 0.9, opacity: 0.5}}
          >
            Сбербанк
          </motion.button>{" "}
          <Modal
            open={isModalOpen3}
            closeIcon={null}
            centered
            className="support-modal"
            title="Поддержать на Сбербанк автора"
            onCancel={() => setIsModalOpen3(false)}
            footer={null}
          >
            <p>
              Вы можете перевести из любого банка по номеру банковской карты любую сумму.
            </p>
            <mark
              style={{cursor: "pointer"}}
              className="copy-cardnumber copy-cardnumber-sber"
            >
              2202202357342488
            </mark>
            <p
              style={{
                textAlign: "center",
                fontSize: "10px",
                opacity: "0.75",
                marginTop: "-5px",
              }}
            >
              Нажмите, чтобы скопировать
              <br />
              Получатель: Михаил Денисович Ф.
            </p>
          </Modal>
          <motion.button
            className="support-button support-button-yoomoney"
            onClick={() => setIsModalOpen4(true)}
            whileHover={{
              scale: 1.075,
              transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
            }}
            whileTap={{scale: 0.9, opacity: 0.5}}
          >
            ЮMoney
          </motion.button>
          <Modal
            open={isModalOpen4}
            closeIcon={null}
            centered
            className="support-modal"
            title="Поддержать на ЮMoney автора"
            onCancel={() => setIsModalOpen4(false)}
            footer={null}
          >
            <p>
              Для пополнения кошелька вам нужно проделать несколько действий:
              <ul>
                <li>Зайдите в приложение своего банка.</li>
                <li>
                  Откройте раздел &quot;Платежи&quot; и найдите в категориях
                  &quot;Электронные кошельки&quot; или &quot;Финансы&quot; пункт
                  &quot;ЮMoney&quot;. Ну или в поиске введите &quot;ЮMoney&quot;.
                </li>
                <li>
                  Нажмите на номер кошелька снизу, он скопируется в буфер обмена. Вставьте
                  этот номер в поле &quot;Номер кошелька&quot; приложения банка и введите
                  любую сумму, а затем подтвердите перевод.
                  <mark
                    style={{cursor: "pointer"}}
                    className="copy-cardnumber copy-cardnumber-yoomoney"
                  >
                    410016763684808
                  </mark>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "10px",
                      opacity: "0.75",
                      marginTop: "-5px",
                    }}
                  >
                    Нажмите, чтобы скопировать
                  </p>
                  <p style={{fontSize: "12px", opacity: "0.75"}}>
                    Или пополните баланс автору с помощью{" "}
                    <a
                      style={{
                        color: "var(--accent)",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                      href="https://yoomoney.ru/to/410016763684808"
                    >
                      этой ссылки
                    </a>
                    .
                  </p>
                </li>
              </ul>
            </p>
          </Modal>
        </div>
      </Modal>
      <Modal
        open={isModalOpen2}
        closeIcon={null}
        centered
        onCancel={handleCancel2}
        footer={null}
      >
        <div>
          Модуль &quot;поделиться&quot; пока ещё не разработан
          {/* fixme: сделать */}
        </div>
      </Modal>
    </>
  );
};

export default SupportDonut;
