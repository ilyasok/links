// ThemeComponents.tsx
import {
  Close,
  DarkModeRounded,
  FormatColorFillOutlined,
  HideSourceRounded,
  LightModeRounded,
} from "@mui/icons-material";
import React, {createContext, useContext, useEffect, useRef, useState} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  accentHue: number;
  setAccentHue: (hue: number) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );
  const [accentHue, setAccentHueState] = useState<number>(() =>
    parseInt(localStorage.getItem("accentHue") || "210", 10)
  );
  const [isModalOpen, setModalOpen] = useState(false);

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
    root.style.setProperty("--accent-hue", accentHue.toString());

    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkMode = theme === "dark" || (theme === "system" && isSystemDark);

    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
  };

  useEffect(() => updateTheme(), [theme, accentHue]);

  useEffect(() => {
    const handleSystemThemeChange = () => theme === "system" && updateTheme();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        accentHue,
        setAccentHue,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// *: кнопка для открытия модалки
export const ThemeToggleButton: React.FC = () => {
  const {openModal} = useTheme();
  return (
    <button onClick={openModal}>
      <FormatColorFillOutlined />
    </button>
  );
};

// *: модальное окно для смены темы
export const ThemeModal: React.FC = () => {
  const {theme, setTheme, accentHue, setAccentHue, isModalOpen, closeModal} = useTheme();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) =>
      event.key === "Escape" && closeModal();
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node))
        closeModal();
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="theme-overlay">
      <div
        className="theme-modal"
        ref={modalRef}
      >
        <div
          style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}
        >
          <p className="title">Менятор темы</p>
          <button onClick={closeModal}>
            <Close />
          </button>
        </div>
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
        <h3>Оттенок акцентного цвета</h3>
        <input
          type="number"
          min="0"
          max="360"
          value={accentHue}
          onChange={(e) => setAccentHue(Number(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="360"
          value={accentHue}
          onChange={(e) => setAccentHue(Number(e.target.value))}
        />
        <button onClick={() => setAccentHue(210)}>Сбросить</button>
        
      </div>
    </div>
  );
};

export {ThemeContext};
