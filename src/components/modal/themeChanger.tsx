import React, {createContext, useContext, useEffect, useState, useMemo} from "react";
import {Modal, Slider} from "antd";
import {
  DarkModeRounded,
  HideSourceRounded,
  LightModeRounded,
  FormatColorFillOutlined,
  RestartAlt,
} from "@mui/icons-material";
type Theme = "light" | "dark" | "system";
interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  accentHue: number;
  setAccentHue: (hue: number) => void;
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeState, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );
  const [accentHueState, setAccentHueState] = useState<number>(() =>
    parseInt(localStorage.getItem("accentHue") ?? "210", 10)
  );
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const setAccentHue = (hue: number) => {
    setAccentHueState(hue);
    localStorage.setItem("accentHue", hue.toString());
  };
  const updateTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--accent-hue", accentHueState.toString());
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = themeState === "dark" || (themeState === "system" && isSystemDark);
    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
  };
  useEffect(() => updateTheme(), [themeState, accentHueState]);
  useEffect(() => {
    const handleSystemThemeChange = () => themeState === "system" && updateTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeState]);
  const contextValue = useMemo(
    () => ({theme: themeState, setTheme, accentHue: accentHueState, setAccentHue}),
    [themeState, accentHueState]
  );
  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
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
  const {theme, setTheme, accentHue, setAccentHue} = useTheme();
  return (
    <Modal
      closeIcon={null}
      title="Менятор темы"
      open={isModalOpen}
      footer={null}
      destroyOnClose
      onCancel={closeModal}
      className="theme-modal"
      width={300}
    >
      <div
        style={{
          marginBlock: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button
          className={
            theme === "light" ? "theme-button theme-button-selected" : "theme-button"
          }
          onClick={() => setTheme("light")}
        >
          <LightModeRounded />
        </button>
        <button
          className={
            theme === "dark" ? "theme-button theme-button-selected" : "theme-button"
          }
          onClick={() => setTheme("dark")}
        >
          <DarkModeRounded />
        </button>
        <button
          className={
            theme === "system" ? "theme-button theme-button-selected" : "theme-button"
          }
          onClick={() => setTheme("system")}
        >
          <HideSourceRounded />
        </button>
      </div>
      <div style={{display: "flex", alignItems: "center", gap: "5px"}}>
        <p style={{fontSize: "14px"}}>Оттенок:</p>
        <Slider
          min={0}
          max={360}
          value={accentHue}
          onChange={(value) => setAccentHue(value)}
          style={{flex: "1 1 auto", width: "100%"}}
        />
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
      </div>
    </Modal>
  );
};
export {ThemeModal};
