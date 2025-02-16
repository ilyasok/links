import React, {useState} from "react";
import {Modal} from "antd";
import {motion} from "framer-motion";
import {CloseRounded, CoffeeRounded, EditRounded} from "@mui/icons-material";
import {AdditionInfo} from "../Additions";

const SupportDonut: React.FC = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isSberModalOpen, setIsSberModalOpen] = useState(false);

  const [isYoomoneyModalOpen, setIsYoomoneyModalOpen] = useState(false);

  const showDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseDonateModal = () => {
    setIsDonateModalOpen(false);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleCloseSberModal = () => {
    setIsSberModalOpen(false);
  };

  const handleCloseYoomoneyModal = () => {
    setIsYoomoneyModalOpen(false);
  };

  return (
    <>
      <div className="support">
        <motion.button
          className="modal-page-button"
          onClick={showEditModal}
          style={{
            filter: "saturate(0.5)",
          }}
          whileHover={{
            scale: 0.975,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.95, opacity: 0.5}}
        >
          <EditRounded />
          Помочь с редактированием страницы
        </motion.button>
        <motion.button
          className="modal-page-button"
          style={{
            filter: "saturate(1.25)",
          }}
          whileHover={{
            scale: 0.975,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.95, opacity: 0.5}}
          onClick={showDonateModal}
        >
          <CoffeeRounded />
          Поддержать сайт
        </motion.button>
      </div>
      <Modal
        open={isDonateModalOpen}
        closeIcon={null}
        onCancel={handleCloseDonateModal}
        footer={null}
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header-title">Поддержать проект</div>
            <button
              className="modal-header-close"
              onClick={handleCloseDonateModal}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="modal-content">
            <p>
              Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать
              его, то вы можете поддержать меня любой суммой и любым удобным вам способом.
            </p>
            <div className="flexible-links">
              <motion.button
                className="sber"
                onClick={() => setIsSberModalOpen(true)}
                whileHover={{
                  scale: 0.975,
                  transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                }}
                whileTap={{scale: 0.95, opacity: 0.5}}
              >
                Сбербанк
              </motion.button>
              <Modal
                open={isSberModalOpen}
                closeIcon={null}
                className="support-modal"
                onCancel={handleCloseSberModal}
                footer={null}
              >
                <div className="modal">
                  <div className="modal-header">
                    <div className="modal-header-title">Поддержать на Сбербанк</div>
                    <button
                      className="modal-header-close"
                      onClick={handleCloseSberModal}
                    >
                      <CloseRounded />
                    </button>
                  </div>
                  <div className="modal-content">
                    <p>
                      Вы можете перевести из любого банка по номеру банковской карты любую
                      сумму.
                    </p>
                    <motion.mark
                      whileHover={{
                        scale: 0.975,
                        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                      }}
                      whileTap={{scale: 0.95, opacity: 0.5}}
                      className="sber"
                      style={{marginInline: "10px"}}
                    >
                      2202202357342488
                    </motion.mark>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "0.6875rem",
                        opacity: "0.75",
                        marginBlockEnd: "10px",
                      }}
                    >
                      Нажмите на номер карты, чтобы скопировать его в буфер обмена
                      <br />
                      Получатель: Михаил Денисович Ф.
                    </p>
                  </div>
                </div>
              </Modal>
              <motion.button
                className="yoomoney"
                onClick={() => setIsYoomoneyModalOpen(true)}
                whileHover={{
                  scale: 0.975,
                  transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                }}
                whileTap={{scale: 0.95, opacity: 0.5}}
              >
                ЮMoney
              </motion.button>
              <Modal
                open={isYoomoneyModalOpen}
                closeIcon={null}
                className="support-modal"
                onCancel={handleCloseYoomoneyModal}
                footer={null}
              >
                <div className="modal">
                  <div className="modal-header">
                    <div className="modal-header-title">Поддержать на ЮMoney</div>
                    <button
                      className="modal-header-close"
                      onClick={handleCloseYoomoneyModal}
                    >
                      <CloseRounded />
                    </button>
                  </div>
                  <div className="modal-content">
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
                        Вставьте этот номер в поле &quot;Номер кошелька&quot; приложения
                        банка и введите любую сумму, а затем подтвердите перевод.
                        <motion.mark
                          whileHover={{
                            scale: 0.975,
                            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
                          }}
                          whileTap={{scale: 0.95, opacity: 0.5}}
                          className="yoomoney"
                        >
                          410016763684808
                        </motion.mark>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: "0.625rem",
                            opacity: "0.75",
                            marginTop: "-5px",
                          }}
                        >
                          Нажмите, чтобы скопировать
                        </p>
                        <p style={{fontSize: "0.75rem", opacity: "0.75"}}>
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
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={isEditModalOpen}
        closeIcon={null}
        onCancel={handleCloseEditModal}
        footer={null}
      >
        <div className="modal">
          <div className="modal-header">
            <div className="modal-header-title">Помочь с редактированием страницы</div>
            <button
              className="modal-header-close"
              onClick={handleCloseEditModal}
            >
              <CloseRounded />
            </button>
          </div>
          <div className="modal-content">
            {/* FIXME: перефразировать */}
            <p>
              Если вы имеете опыт работы с Git и GitHub, а также у вас есть желание
              поправить какой-либо кусочек текста, то вы можете{" "}
              <a href="https://github.com/aechat/links/fork">
                создать форк репозитория сайта
              </a>{" "}
              и отправить мне Pull Request, чтобы ваши изменения появились тут.
            </p>
            <AdditionInfo>
              Разделы с частыми вопросами находятся в разработке и иногда обновляются,
              поэтому могут быть неточности в действиях, выводах и тексте. Мнение автора и
              мнение читателя могут отличаться.
            </AdditionInfo>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default SupportDonut;
