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
        <motion.button
          className="modal-button"
          style={{
            padding: "10px",
            fontSize: "13px",
          }}
          whileHover={{
            scale: 1.075,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.9, opacity: 0.5}}
          onClick={showModal1}
        >
          Поддержать сайт
        </motion.button>
        <motion.button
          className="support-button support-button-share"
          onClick={showModal2}
          style={{
            padding: "10px",
            fontSize: "13px",
          }}
          whileHover={{
            scale: 1.075,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.9, opacity: 0.5}}
        >
          Поделиться
        </motion.button>
      </div>
      <Modal
        open={isModalOpen1}
        closeIcon={null}
        centered
        onCancel={handleCancel1}
        footer={null}
      >
        <div className="modal">
          <div className="modal-title">Поддержать проект</div>
          <p>
            Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать его,
            то вы можете поддержать меня любой суммой и любым удобным вам способом.
          </p>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
            <motion.button
              className="sber"
              onClick={() => setIsModalOpen3(true)}
              whileHover={{
                scale: 1.075,
                transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
              }}
              whileTap={{scale: 0.9, opacity: 0.5}}
            >
              Сбербанк
            </motion.button>
            <Modal
              open={isModalOpen3}
              closeIcon={null}
              centered
              className="support-modal"
              onCancel={() => setIsModalOpen3(false)}
              footer={null}
            >
              <div className="modal">
                <div className="modal-title">Поддержать на Сбербанк</div>
                <p>
                  Вы можете перевести из любого банка по номеру банковской карты любую
                  сумму.
                </p>
                <motion.mark
                  whileHover={{
                    scale: 0.975,
                    transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                  }}
                  whileTap={{scale: 0.9, opacity: 0.5}}
                  className="sber"
                >
                  2202202357342488
                </motion.mark>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "11px",
                    opacity: "0.75",
                  }}
                >
                  Нажмите на номер карты, чтобы скопировать его в буфер обмена
                  <br />
                  Получатель: Михаил Денисович Ф.
                </p>
              </div>
            </Modal>
            <motion.button
              className="yoomoney"
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
              onCancel={() => setIsModalOpen4(false)}
              footer={null}
            >
              <div className="modal">
                <div className="modal-title">Поддержать на ЮMoney</div>
                <p>Для пополнения кошелька вам нужно проделать несколько действий:</p>
                <ul>
                  <li>Зайдите в приложение своего банка.</li>
                  <li>
                    Откройте раздел &quot;Платежи&quot; и найдите в категориях
                    &quot;Электронные кошельки&quot; или &quot;Финансы&quot; пункт
                    &quot;ЮMoney&quot;. Ну или в поиске введите &quot;ЮMoney&quot;.
                  </li>
                  <li>
                    Нажмите на номер кошелька снизу, он скопируется в буфер обмена.
                    Вставьте этот номер в поле &quot;Номер кошелька&quot; приложения банка
                    и введите любую сумму, а затем подтвердите перевод.
                    <motion.mark
                      whileHover={{
                        scale: 0.975,
                        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                      }}
                      whileTap={{scale: 0.9, opacity: 0.5}}
                      className="yoomoney"
                    >
                      410016763684808
                    </motion.mark>
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
              </div>
            </Modal>
          </div>
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
          {/* FIXME: сделать */}
        </div>
      </Modal>
    </>
  );
};
export default SupportDonut;
