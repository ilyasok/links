import {Breadcrumb, Divider} from "antd";
import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
// *: разделы aefaq:
import {AEActions} from "./sections/aefaq/Actions";
import {AEErrors} from "./sections/aefaq/Errors";
import {AEExport} from "./sections/aefaq/Export";
import {AEExportProblems} from "./sections/aefaq/ExportProblems";
import {AEFromNewbies} from "./sections/aefaq/FromNewbies";
import {AEImport} from "./sections/aefaq/Import";
import {AEInstallProblems} from "./sections/aefaq/InstallProblems";
import {AEInterface} from "./sections/aefaq/Interface";
import {AEPerformance} from "./sections/aefaq/Performance";
import {AETips} from "./sections/aefaq/Tips";
import {AEWhereFind} from "./sections/aefaq/WhereFind";

import {AdditionWarning} from "../components/Additions";
import CopyMark from "../components/features/CopyMark";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
import SupportDonut from "../components/modal/SupportDonut";

const AEFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);
  return (
    <div className="page">
      <SearchProvider>
        <Header title="aefaq" />
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
                <h1>aefaq</h1>
                <Breadcrumb
                  items={[
                    {
                      title: <Link to="/">Главная</Link>,
                    },
                    {
                      title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>,
                      menu: {
                        items: [
                          {
                            title: (
                              <Link to="/aeexprfaq">
                                FaQ по выражениям в After Effects
                              </Link>
                            ),
                          },
                          {
                            title: <Link to="/prfaq">FaQ по Adobe Premiere Pro</Link>,
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
              <SupportDonut />
              <AdditionWarning>
                Данный раздел находится в разработке и иногда обновляется, поэтому могут
                быть неточности в действиях, выводах и тексте. Мнение автора и мнение
                читателя могут отличаться. Предложения по поводу улучшения материала вы
                можете отправить на <a href="mailto:m1sh3r@ya.ru">почту автора</a>.
              </AdditionWarning>
              {[
                ["1", "#wherefind", "Ищем полезности"],
                ["2", "#install-problems", "Проблемы с установкой"],
                ["3", "#from-newbies", "Вопросы от новичков"],
                ["4", "#tips", "(не)Вредные советы"],
                ["5", "#import", "Импорт"],
                ["6", "#interface", "Интерфейс"],
                ["7", "#performance", "Производительность"],
                ["8", "#actions", "Как и чем?"],
                ["9", "#errors", "Ошибки и предупреждения"],
                ["10", "#export", "Экспорт"],
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
                        return <AEWhereFind />;
                      case "#install-problems":
                        return <AEInstallProblems />;
                      case "#from-newbies":
                        return <AEFromNewbies />;
                      case "#tips":
                        return <AETips />;
                      case "#import":
                        return <AEImport />;
                      case "#interface":
                        return <AEInterface />;
                      case "#performance":
                        return <AEPerformance />;
                      case "#actions":
                        return <AEActions />;
                      case "#errors":
                        return <AEErrors />;
                      case "#export":
                        return <AEExport />;
                      case "#export-problems":
                        return <AEExportProblems />;
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
export default AEFaQ;
