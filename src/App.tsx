import CircularProgress from "@mui/material/CircularProgress";
import {ConfigProvider} from "antd";
import {AnimatePresence} from "framer-motion";
import React, {lazy, Suspense, useEffect} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";

const Links = lazy(() => import("./pages/linksPage"));
const AboutPage = lazy(() => import("./pages/aboutPage"));
const ChatRules = lazy(() => import("./pages/chatRules"));
const NotFound = lazy(() => import("./pages/notFound"));
const AEFaQ = lazy(() => import("./pages/aefaqPage"));
const PRFaQ = lazy(() => import("./pages/prfaqPage"));
const PSFaQ = lazy(() => import("./pages/psfaqPage"));

const RedirectHtml = () => {
  const location = useLocation();
  const path = location.pathname;
  if (path.endsWith(".html")) {
    return (
      <Navigate
        to={path.replace(/\.html$/, "")}
        replace
      />
    );
  }
  return null;
};

export const App = () => {
  const location = useLocation();
  useEffect(() => {
    const path = window.location.pathname;
    if (path.endsWith(".html")) {
      window.location.replace(path.replace(/\.html$/, ""));
    }
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Breadcrumb: {
            linkHoverColor: "var(--accent)",
            linkColor: "var(--text-color)",
            itemColor: "#707070",
            separatorColor: "var(--accent)",
          },
          Divider: {
            colorSplit: "var(--accent)",
          },
        },
        token: {
          fontFamily: "Inter",
          colorText: "var(--text-color)",
        },
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress sx={{color: "var(--accent)"}} />
          </div>
        }
      >
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Routes
            location={location}
            key={location.pathname}
          >
            <Route
              path="/"
              element={<Links />}
            />
            <Route
              path="/aefaq"
              element={<AEFaQ />}
            />
            <Route
              path="/prfaq"
              element={<PRFaQ />}
            />
            <Route
              path="/psfaq"
              element={<PSFaQ />}
            />
            <Route
              path="/rules"
              element={<ChatRules />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
            />
            <Route
              path="*"
              element={
                <>
                  <NotFound />
                  <RedirectHtml />
                </>
              }
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ConfigProvider>
  );
};
