import React, {useEffect, useState, Suspense, lazy} from "react";
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
import {CircularProgress} from "@mui/material";

const AEWhereFind = lazy(() => import("./sections/aefaq/WhereFind"));
const AEInstallProblems = lazy(() => import("./sections/aefaq/InstallProblems"));
const AEFromNewbies = lazy(() => import("./sections/aefaq/FromNewbies"));
const AETips = lazy(() => import("./sections/aefaq/Tips"));
const AEImport = lazy(() => import("./sections/aefaq/Import"));
const AEInterface = lazy(() => import("./sections/aefaq/Interface"));
const AEPerformance = lazy(() => import("./sections/aefaq/Performance"));
const AEActions = lazy(() => import("./sections/aefaq/Actions"));
const AEErrors = lazy(() => import("./sections/aefaq/Errors"));
const AEExport = lazy(() => import("./sections/aefaq/Export"));
const AEExportProblems = lazy(() => import("./sections/aefaq/ExportProblems"));

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

  useEffect(() => {
    setVisibleSections([sections[0].key]);
    const loadSections = async () => {
      for (let i = 1; i < sections.length; i++) {
        await new Promise<void>((resolve) => {
          setVisibleSections((prev) => [...prev, sections[i].key]);
          setTimeout(resolve, 200);
        });
      }
    };
    loadSections();
  }, []);

  return (
    <div className="page">
      <SearchProvider>
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
                                  "Интересный факт: в After Effects можно выполнять арифметические операции с помощью знаков сложения и вычитания, умножения и деления",
                                  "Убедитесь в том, что на ваше устройство подключено к Интернету",
                                  "Секция всё ещё грузится, наберитесь терпения",
                                  "Надеемся, что код сайта не поломался",
                                  "Попробуйте перезагрузить страницу, если секция всё ещё грузится",
                                  "Интересный факт: в After Effects имеется ограничение размера в 30 тысяч пикселей на каждую ось",
                                  "Пока секции грузятся, дам совет: в любой непонятной ситуации - делай прекомпоз",
                                  "Прочтите заклинание 'фастус информейтус лоадинг', если секция слишком долго грузится",
                                  "Когда-нибудь секция загрузится и все будут жить счастливо...",
                                ][Math.floor(Math.random() * 10)]
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

export default AEFaQ;
