import React, {useEffect} from "react";

import {Breadcrumb, Divider} from "antd";
import {Link} from "react-router-dom";
import {AdditionWarning} from "../components/Additions";
import {Header} from "../components/Header";
import {motion} from "framer-motion";
import {Footer} from "../components/Footer";
import CopyMark from "../components/features/CopyMark";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
// *: разделы psfaq:
import {PSActions} from "./sections/psfaq/Actions";
import {PSErrors} from "./sections/psfaq/Errors";
import {PSExport} from "./sections/psfaq/Export";
import {PSExportProblems} from "./sections/psfaq/ExportProblems";
import {PSFromNewbies} from "./sections/psfaq/FromNewbies";
import {PSImport} from "./sections/psfaq/Import";
import {PSInstallProblems} from "./sections/psfaq/InstallProblems";
import {PSInterface} from "./sections/psfaq/Interface";
import {PSPerformance} from "./sections/psfaq/Performance";
import {PSWhereFind} from "./sections/psfaq/WhereFind";
const PSFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);
  return (
    <div>
      <SearchProvider>
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
                Данный раздел находится в разработке и иногда обновляется, поэтому могут
                быть неточности в действиях, выводах и тексте. Мнение автора и мнение
                читателя могут отличаться. Предложения по поводу улучшения материала вы
                можете отправить на <a href="mailto:me@m1sh3r.ru">почту автора</a>.
              </AdditionWarning>
              {[
                ["1", "#wherefind", "Ищем полезности"],
                ["2", "#install-problems", "Проблемы с установкой"],
                ["3", "#from-newbies", "Вопросы от новичков"],
                ["4", "#import", "Про импорт"],
                ["5", "#interface", "Про интерфейс"],
                ["6", "#performance", "Про производительность"],
                ["7", "#actions", "Как и чем сделать то или то?"],
                ["8", "#errors", "Ошибки и предупреждения"],
                ["9", "#export", "Про экспорт"],
                ["10", "#export-problems", "Проблемы при экспорте"],
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
                      case "#install-problems":
                        return <PSInstallProblems />;
                      case "#from-newbies":
                        return <PSFromNewbies />;
                      case "#import":
                        return <PSImport />;
                      case "#interface":
                        return <PSInterface />;
                      case "#performance":
                        return <PSPerformance />;
                      case "#actions":
                        return <PSActions />;
                      case "#errors":
                        return <PSErrors />;
                      case "#export":
                        return <PSExport />;
                      case "#export-problems":
                        return <PSExportProblems />;
                    }
                  })()}
                </div>
              ))}
              <Footer
                title="aechat & dwchat"
                initialYear={2023}
              />
            </div>
          </div>
        </motion.main>
        <SearchInPage />
      </SearchProvider>
    </div>
  );
};
export default PSFaQ;
