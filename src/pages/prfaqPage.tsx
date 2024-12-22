import React, {useEffect, Suspense, lazy, useState} from "react";
import {Breadcrumb, Divider} from "antd";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet-async";
import {SearchInPage, SearchProvider} from "../components/features/SearchInPage";
import {AdditionDanger, AdditionWarning} from "../components/Additions";
import SupportDonut from "../components/modal/SupportDonut";
import CopyMark from "../components/features/CopyMark";
import {CircularProgress} from "@mui/material";
import {generateAnchorId} from "../components/DetailsSummary";

const PRActions = lazy(() => import("./sections/prfaq/Actions"));
const PRErrors = lazy(() => import("./sections/prfaq/Errors"));
const PRExport = lazy(() => import("./sections/prfaq/Export"));
const PRExportProblems = lazy(() => import("./sections/prfaq/ExportProblems"));
const PRFromNewbies = lazy(() => import("./sections/prfaq/FromNewbies"));
const PRImport = lazy(() => import("./sections/prfaq/Import"));
const PRInstallProblems = lazy(() => import("./sections/prfaq/InstallProblems"));
const PRInterface = lazy(() => import("./sections/prfaq/Interface"));
const PRPerformance = lazy(() => import("./sections/prfaq/Performance"));
const PRTips = lazy(() => import("./sections/prfaq/Tips"));
const PRWhereFind = lazy(() => import("./sections/prfaq/WhereFind"));

const PRFaQ = () => {
  useEffect(() => {
    CopyMark.enableAutoCopy();
  }, []);

  const sections = [
    {key: "1", title: "Ищем полезности", component: PRWhereFind},
    {key: "2", title: "Проблемы с установкой", component: PRInstallProblems},
    {key: "3", title: "Вопросы от новичков", component: PRFromNewbies},
    {key: "4", title: "(не)Вредные советы", component: PRTips},
    {key: "5", title: "Импорт", component: PRImport},
    {key: "6", title: "Интерфейс", component: PRInterface},
    {key: "7", title: "Производительность", component: PRPerformance},
    {key: "8", title: "Как и чем?", component: PRActions},
    {key: "9", title: "Ошибки и предупреждения", component: PRErrors},
    {key: "10", title: "Экспорт", component: PRExport},
    {key: "11", title: "Проблемы при экспорте", component: PRExportProblems},
  ];
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (loadedCount === sections.length) {
      setIsPageLoaded(true);
      generateAnchorId();
    }
  }, [loadedCount, sections.length]);

  useEffect(() => {
    const loadSections = async () => {
      for (const section of sections) {
        await new Promise<void>((resolve) => {
          setVisibleSections((prev) => [...prev, section.key]);
          setTimeout(resolve, 50);
        });
      }
    };
    loadSections();
  }, []);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>prfaq@aechat</title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="prfaq.svg"
          />
          <meta
            name="description"
            content="Ответы на частые вопросы от пользователей Premiere Pro"
          />
          <meta
            name="keywords"
            content="чат, ссылки, Adobe Premiere Pro, шаблоны Adobe Premiere Pro, AETemp, советы Adobe Premiere Pro, FAQ Adobe Premiere Pro, склад стройматериалов, помощь, видеомонтаж, видеоредактирование, видеопроизводство, видеоэффекты, спецэффекты, звукорежировка, звукомонтаж, звуковое оформление, видеоуроки, обучение, видеокурсы, видеоуроки, курсы по видеомонтажу, туториалы по видеоредактированию, уроки по цветокоррекции, советы по ускорению Adobe Premiere Pro, оптимизация, исправление ошибок, видеографика, видеомаркетинг, визуальные эффекты, мультимедиа, медиа, презентации, обучающие видео, видеокурсы, видеоуроки, курс по видеомонтажу, уроки по видеомонтажу"
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
            content="prfaq@aechat"
          />
          <meta
            property="og:description"
            content="Ответы на частые вопросы от пользователей Premiere Pro"
          />
        </Helmet>
        <Header title="prfaq" />
        <motion.main
          className="main"
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -50, opacity: 0}}
          transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
        >
          <div className="faq-container-flex">
            <div className="faq-container">
              <div className="faq-title">
                <h1>prfaq</h1>
                <Breadcrumb
                  items={[
                    {title: <Link to="/">Главная</Link>},
                    {
                      title: <Link to="/prfaq">FAQ по Adobe Premiere Pro</Link>,
                      menu: {
                        items: [
                          {title: <Link to="/aefaq">FAQ по After Effects</Link>},
                          {title: <Link to="/psfaq">FAQ по Photoshop</Link>},
                        ],
                      },
                    },
                  ]}
                />
              </div>
              <SupportDonut />
              <AdditionDanger>
                На данный момент не все секции перенесены. Если вам нужен доступ к старой
                версии сайта, перейдите на{" "}
                <a href="legacy/prfaq.html">aechat.ru/legacy/prfaq</a>.
              </AdditionDanger>
              <AdditionWarning>
                Данный раздел находится в разработке и иногда обновляется, поэтому могут
                быть неточности в действиях, выводах и тексте. Мнение автора и мнение
                читателя могут отличаться. Предложения по поводу улучшения материала вы
                можете отправить на <a href="mailto:me@m1sh3r.ru">почту автора</a>.
              </AdditionWarning>
              {sections.map(({key, title, component: Component}) =>
                visibleSections.includes(key) ? (
                  <div key={key}>
                    <Suspense
                      fallback={
                        <motion.div
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          style={{
                            height: "70vh",
                            display: "flex",

                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.075, 0.82, 0.165, 1],
                            delay: 1,
                          }}
                        >
                          <CircularProgress sx={{color: "var(--accent)"}} />
                          <div style={{marginInline: "auto", maxWidth: "800px"}}>
                            <motion.p
                              initial={{opacity: 0}}
                              animate={{opacity: 0.5}}
                              transition={{
                                duration: 1,
                                ease: [0.075, 0.82, 0.165, 1],
                                delay: 10,
                              }}
                              style={{
                                margin: "10px",
                                marginTop: "20px",
                                fontSize: "12px",
                                marginInline: "20px",
                              }}
                            >
                              {
                                [
                                  "Всё ещё грузим полезную информацию",
                                  "Интересный факт: в Premiere Pro необязательно делать прокси через Media Encoder",
                                  "Убедитесь в том, что на ваше устройство подключено к Интернету",
                                  "Секция всё ещё грузится, наберитесь терпения",
                                  "Надеемся, что код сайта не поломался",
                                  "Попробуйте перезагрузить страницу, если секция всё ещё грузится",
                                  "Пока секции грузятся, дам совет: в любой непонятной ситуации - делай Nest",
                                  "Прочтите заклинание 'фастус информейтус лоадинг', если секция слишком долго грузится",
                                  "Когда-нибудь секция загрузится и все будут жить счастливо...",
                                ][Math.floor(Math.random() * 9)]
                              }
                            </motion.p>
                          </div>
                        </motion.div>
                      }
                    >
                      <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                          duration: 0.75,
                          ease: [0.075, 0.82, 0.165, 1],
                          delay: 0.1,
                        }}
                        onAnimationComplete={() => setLoadedCount((prev) => prev + 1)}
                      >
                        <Divider
                          style={{fontSize: "clamp(12px, 2vw, 14px)"}}
                          orientation="right"
                        >
                          {title}
                        </Divider>
                        <Component />
                      </motion.div>
                    </Suspense>
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

export default PRFaQ;
