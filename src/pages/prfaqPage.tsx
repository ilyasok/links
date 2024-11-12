import React, {useEffect} from "react";

import {Header} from "../components/Header";
import {Breadcrumb, Divider} from "antd";
import {Link} from "react-router-dom";
import {AdditionWarning} from "../components/Additions";
import {motion} from "framer-motion";
import {Footer} from "../components/Footer";
import CopyMark from "../components/features/CopyMark";
import {PRActions} from "./sections/prfaq/Actions";
import {PRErrors} from "./sections/prfaq/Errors";
import {PRExport} from "./sections/prfaq/Export";
import {PRExportProblems} from "./sections/prfaq/ExportProblems";
import {PRFromNewbies} from "./sections/prfaq/FromNewbies";
import {PRImport} from "./sections/prfaq/Import";
import {PRInstallProblems} from "./sections/prfaq/InstallProblems";
import {PRInterface} from "./sections/prfaq/Interface";
import {PRPerfomance} from "./sections/prfaq/Perfomance";
import {PRTips} from "./sections/prfaq/Tips";
import {PRWhereFind} from "./sections/prfaq/WhereFind";

const PRFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);
  return (
    <div>
      <Header title="prfaq" />

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
              <h1>prfaq</h1>
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/">Главная</Link>,
                  },
                  {
                    title: <Link to="/prfaq">FaQ по Adobe Premiere Pro</Link>,
                    menu: {
                      items: [
                        {
                          title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>,
                        },
                        {
                          title: <Link to="/psfaq">FaQ по Adobe Photoshop</Link>,
                        },
                      ],
                    },
                  },
                ]}
              />
            </div>
            <AdditionWarning>
              Данный раздел находится в разработке и иногда обновляется, поэтому могут
              быть неточности в действиях, выводах и тексте. Мнение автора и мнение
              читателя могут отличаться. Предложения по поводу улучшения материала вы
              можете отправить на <a href="mailto:me@m1sh3r.ru">почту автора</a>.
            </AdditionWarning>
            {[
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
                      return <PRWhereFind />;
                    case "#installproblems":
                      return <PRInstallProblems />;
                    case "#fromnewbies":
                      return <PRFromNewbies />;
                    case "#tips":
                      return <PRTips />;
                    case "#import":
                      return <PRImport />;
                    case "#interface":
                      return <PRInterface />;
                    case "#perfomance":
                      return <PRPerfomance />;
                    case "#actions":
                      return <PRActions />;
                    case "#errors":
                      return <PRErrors />;
                    case "#export":
                      return <PRExport />;
                    case "#exportproblems":
                      return <PRExportProblems />;
                  }
                })()}
              </div>
            ))}
            <Footer
              title="aechat"
              initialYear={2023}
            />
          </div>
        </div>
      </motion.main>
    </div>
  );
};
export default PRFaQ;
