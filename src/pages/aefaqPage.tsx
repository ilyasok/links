import React, {useEffect, useState} from "react";
import {Breadcrumb, Divider} from "antd";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
import {AdditionWarning} from "../components/Additions";
import SupportDonut from "../components/modal/SupportDonut";
import CopyMark from "../components/features/CopyMark";

import AEActions from "./sections/aefaq/Actions";
import AEErrors from "./sections/aefaq/Errors";
import AEExport from "./sections/aefaq/Export";
import AEExportProblems from "./sections/aefaq/ExportProblems";
import AEFromNewbies from "./sections/aefaq/FromNewbies";
import AEImport from "./sections/aefaq/Import";
import AEInstallProblems from "./sections/aefaq/InstallProblems";
import AEInterface from "./sections/aefaq/Interface";
import AEPerformance from "./sections/aefaq/Performance";
import AETips from "./sections/aefaq/Tips";
import AEWhereFind from "./sections/aefaq/WhereFind";

const AEFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);

  const sections = [
    {key: "1", title: "Ищем полезности", component: AEWhereFind},
    {key: "2", title: "Проблемы с установкой", component: AEInstallProblems},
    {key: "3", title: "Вопросы от новичков", component: AEFromNewbies},
    {key: "4", title: "(не)Вредные советы", component: AETips},
    {key: "5", title: "Импорт", component: AEImport},
    {key: "6", title: "Интерфейс", component: AEInterface},
    {key: "7", title: "Производительность", component: AEPerformance},
    {key: "8", title: "Как и чем?", component: AEActions},
    {key: "9", title: "Ошибки и предупреждения", component: AEErrors},
    {key: "10", title: "Экспорт", component: AEExport},
    {key: "11", title: "Проблемы при экспорте", component: AEExportProblems},
  ];
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const loadSections = async () => {
      for (let i = 0; i < sections.length; i++) {
        await new Promise<void>((resolve) => {
          setVisibleSections((prev) => [...prev, sections[i].key]);
          setTimeout(resolve, 200);
        });
      }
      setIsPageLoaded(true);
    };
    loadSections();
  }, []);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>aefaq@aechat</title>
          <meta
            name="description"
            content="Ответы на частые вопросы от пользователей After Effects"
          />
          <meta
            name="keywords"
            content="чат, ссылки, After Effects, шаблоны After Effects, AETemp, Adobe, советы After Effects, FAQ After Effects, склад стройматериалов, помощь, видеомонтаж, графический дизайн, видеоэффекты, спецэффекты, анимация, 3D-моделирование, motion graphics, композитинг, цветокоррекция, Adobe Premiere, Photoshop, Illustrator, Media Encoder, плагины After Effects, видеопроизводство, рендеринг, обучение, видеоуроки, монтаж видео, создание видео, редактирование видео, графика, видеоконтент, пост-продакшн, filmmaking, кино, телевидение, спецэффекты для фильмов, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, видеореклама, обучающие видео, видеокурсы, видеоуроки, курсы по анимации, туториалы по видеомонтажу, уроки по цветокоррекции, советы по ускорению After Effects, оптимизация, исправление ошибок, видеографика, motion design, инфографика, 3D-анимация, видеоклипы, рекламные ролики, видеопрезентации"
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
            content="aefaq@aechat"
          />
          <meta
            property="og:description"
            content="Ответы на частые вопросы от пользователей After Effects"
          />
        </Helmet>
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
                можете отправить на <a href="mailto:me@m1sh3r.ru">почту автора</a>.
              </AdditionWarning>
              {sections.map(({key, title, component: Component}) =>
                visibleSections.includes(key) ? (
                  <div key={key}>
                    <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{
                        duration: 0.75,
                        ease: [0.075, 0.82, 0.165, 1],
                        delay: 0.1,
                      }}
                    >
                      <Divider
                        style={{fontSize: "clamp(12px, 2vw, 14px)"}}
                        orientation="right"
                      >
                        {title}
                      </Divider>
                      <Component />
                    </motion.div>
                  </div>
                ) : null
              )}
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
