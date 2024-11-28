import React, {useEffect} from "react";

import {Header} from "../components/Header";
import {Breadcrumb, Divider} from "antd";
import {Link} from "react-router-dom";
import {AdditionWarning} from "../components/Additions";
import {motion} from "framer-motion";
import {Footer} from "../components/Footer";
import CopyMark from "../components/features/CopyMark";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
// *: разделы prfaq:
import {PRActions} from "./sections/prfaq/Actions";
import {PRErrors} from "./sections/prfaq/Errors";
import {PRExport} from "./sections/prfaq/Export";
import {PRExportProblems} from "./sections/prfaq/ExportProblems";
import {PRFromNewbies} from "./sections/prfaq/FromNewbies";
import {PRImport} from "./sections/prfaq/Import";
import {PRInstallProblems} from "./sections/prfaq/InstallProblems";
import {PRInterface} from "./sections/prfaq/Interface";
import {PRPerformance} from "./sections/prfaq/Performance";
import {PRTips} from "./sections/prfaq/Tips";
import {PRWhereFind} from "./sections/prfaq/WhereFind";

const PRFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);
  return (
    <div>
      <SearchProvider>
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
                ["2", "#install-problems", "Проблемы с установкой"],
                ["3", "#from-newbies", "Вопросы от новичков"],
                ["4", "#tips", "(не)Вредные советы"],
                ["5", "#import", "Про импорт"],
                ["6", "#interface", "Про интерфейс"],
                ["7", "#performance", "Про производительность"],
                ["8", "#actions", "Как и чем сделать то или то?"],
                ["9", "#errors", "Ошибки и предупреждения"],
                ["10", "#export", "Про экспорт"],
                ["11", "#export-problems", "Проблемы при экспорте"],
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
                      case "#install-problems":
                        return <PRInstallProblems />;
                      case "#from-newbies":
                        return <PRFromNewbies />;
                      case "#tips":
                        return <PRTips />;
                      case "#import":
                        return <PRImport />;
                      case "#interface":
                        return <PRInterface />;
                      case "#performance":
                        return <PRPerformance />;
                      case "#actions":
                        return <PRActions />;
                      case "#errors":
                        return <PRErrors />;
                      case "#export":
                        return <PRExport />;
                      case "#export-problems":
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
        <SearchInPage />
      </SearchProvider>
    </div>
  );
};
export default PRFaQ;
