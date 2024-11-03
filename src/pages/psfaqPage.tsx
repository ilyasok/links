import React from "react";

import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import {AdditionWarning} from "../components/Additions";
import {Header} from "../components/Header";
import {motion} from "framer-motion";
import {Footer} from "../components/Footer";

const PSFaQ = () => (
  <div>
    <Header title="psfaq" />

    <motion.main
      className="main"
      initial={{y: 50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: 50, opacity: 0}}
      transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
    >
      <div className="faq-container-flex">
        <div className="faq-container">
          <div className="faq-title">
            <h1>psfaq</h1>
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Главная</Link>,
                },
                {
                  title: <Link to="/psfaq">FaQ по Adobe Photoshop</Link>,
                  menu: {
                    items: [
                      {
                        title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>,
                      },
                      {
                        title: <Link to="/prfaq">FaQ по Adobe Premiere Pro</Link>,
                      },
                    ],
                  },
                },
              ]}
            />
          </div>
          <AdditionWarning>
            Данный раздел находится в разработке и иногда обновляется, поэтому могут быть
            неточности в действиях, выводах и тексте. Мнение автора и мнение читателя
            могут отличаться. Предложения по поводу улучшения материала вы можете
            отправить на <a href="mailto:m1sh3r@ya.ru">почту автора</a>.
          </AdditionWarning>
          {/* {[
            ["1", "#wherefind", "Ищем полезности"],
            ["2", "#installproblems", "Проблемы с установкой"],
            ["3", "#fromnewbies", "Вопросы от новичков"],
            ["4", "#tips", "(не)Вредные советы"],
            ["5", "#import", "Про импорт"],
            ["6", "#interface", "Про интерфейс"],
            ["7", "#perfomance", "Про производительность"],
            ["8", "#actions", "Как и чем сделать то или то?"],
            ["9", "#errors", "Ошибки и предупреждения"],
            ["10", "#export", "Про экспорт"],
            ["11", "#exportproblems", "Проблемы при экспорте"],
          ].map(([key, href, title]) => (
            <div key={key}>
              <Divider
                style={{fontSize: "clamp(12px, 2vw, 14px)"}}
                orientation="right"
              >
                {title}
              </Divider>
              {(() => {
                switch (href) {
                  case "#wherefind":
                    return <PSWhereFind />;
                  case "#installproblems":
                    return <PSInstallProblems />;
                  case "#fromnewbies":
                    return <PSFromNewbies />;
                  case "#tips":
                    return <PSTips />;
                  case "#import":
                    return <PSImport />;
                  case "#interface":
                    return <PSInterface />;
                  case "#perfomance":
                    return <PSPerfomance />;
                  case "#actions":
                    return <PSActions />;
                  case "#errors":
                    return <PSErrors />;
                  case "#export":
                    return <PSExport />;
                  case "#exportproblems":
                    return <PSExportProblems />;
                }
              })()}
            </div>
          ))} */}
          <Footer
            title="aechat & dwchat"
            initialYear={2021}
          />
        </div>
      </div>
    </motion.main>
  </div>
);
export default PSFaQ;
