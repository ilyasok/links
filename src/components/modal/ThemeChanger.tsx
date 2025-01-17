import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {Modal, Slider, Tooltip} from "antd";
import {
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
  RestartAlt,
} from "@mui/icons-material";
import {motion} from "framer-motion";
type Theme = "light" | "dark" | "system";
interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  accentHue: number;
  setAccentHue: (hue: number) => void;
  saturateRatio: number;
  setSaturateRatio: (ratio: number) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeState, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );

  const [accentHueState, setAccentHueState] = useState<number>(() =>
    parseInt(localStorage.getItem("accentHue") ?? "210", 10)
  );

  const [saturateRatioState, setSaturateRatioState] = useState<number>(() =>
    parseFloat(localStorage.getItem("saturateRatio") ?? "1")
  );

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const setAccentHue = (hue: number) => {
    setAccentHueState(hue);
    localStorage.setItem("accentHue", hue.toString());
  };

  const setSaturateRatio = (ratio: number) => {
    setSaturateRatioState(ratio);
    localStorage.setItem("saturateRatio", ratio.toString());
  };

  const updateTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--accent-hue", accentHueState.toString());
    root.style.setProperty("--saturate-ratio", saturateRatioState.toString());

    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkMode = themeState === "dark" || (themeState === "system" && isSystemDark);
    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
  };
  useEffect(() => updateTheme(), [themeState, accentHueState, saturateRatioState]);
  useEffect(() => {
    const handleSystemThemeChange = () => themeState === "system" && updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeState]);

  const contextValue = useMemo(
    () => ({
      theme: themeState,
      setTheme,
      accentHue: accentHueState,
      setAccentHue,
      saturateRatio: saturateRatioState,
      setSaturateRatio,
    }),
    [themeState, accentHueState, saturateRatioState]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export const ThemeToggleButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>
        <FormatColorFillOutlined />
      </button>
      <ThemeModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};
interface ThemeModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({isModalOpen, closeModal}) => {
  const {theme, setTheme, accentHue, setAccentHue, saturateRatio, setSaturateRatio} =
    useTheme();

  return (
    <Modal
      closeIcon={null}
      open={isModalOpen}
      footer={null}
      destroyOnClose
      onCancel={closeModal}
      width={450}
    >
      <p className="modal-title">Оформление</p>
      <p className="theme-title">Тема сайта:</p>
      <div className="theme-selector">
        <motion.button
          whileHover={{
            scale: 1.075,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.9, opacity: 0.5}}
          className={
            theme === "light" ? "theme-button theme-button-selected" : "theme-button"
          }
          onClick={() => setTheme("light")}
        >
          <LightModeRounded />
          Светлая
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.075,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.9, opacity: 0.5}}
          className={
            theme === "dark" ? "theme-button theme-button-selected" : "theme-button"
          }
          onClick={() => setTheme("dark")}
        >
          <DarkModeRounded />
          Тёмная
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.075,
            transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
          }}
          whileTap={{scale: 0.9, opacity: 0.5}}
          className={
            theme === "system" ? "theme-button theme-button-selected" : "theme-button"
          }
          onClick={() => setTheme("system")}
        >
          <HideSourceRounded />
          Системная
        </motion.button>
      </div>
      <p className="theme-title">Оттенок акцентного цвета:</p>
      <div className="theme-slider">
        <Slider
          min={0}
          max={360}
          value={accentHue}
          onChange={(value) => setAccentHue(value)}
          style={{flex: "1 1 auto", width: "100%"}}
        />
        <Tooltip title="Сбросить оттенок">
          <button
            onClick={() => setAccentHue(210)}
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <RestartAlt />
          </button>
        </Tooltip>
      </div>
      <p className="theme-title">Насыщенность акцентного цвета:</p>
      <div className="theme-slider">
        <Slider
          min={0}
          max={1.25}
          step={0.025}
          value={saturateRatio}
          onChange={(value) => setSaturateRatio(value)}
          style={{flex: "1 1 auto", width: "100%"}}
        />
        <Tooltip title="Сбросить насыщенность">
          <button
            onClick={() => setSaturateRatio(1)}
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <RestartAlt />
          </button>
        </Tooltip>
      </div>
    </Modal>
  );
};
export {ThemeModal};
