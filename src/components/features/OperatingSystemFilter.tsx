import {Apple, WindowSharp} from "@mui/icons-material";
import React, {ReactNode, useEffect, useState} from "react";

interface ContentSwitcherProps {
  windowsContent: ReactNode; // контент для Windows
  macContent: ReactNode; // контент для macOS
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  windowsContent,
  macContent,
}) => {
  const [isWindows, setIsWindows] = useState(true);

  // *: определение устройства по userAgent
  const detectOperatingSystem = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (
      userAgent.includes("mac") ||
      userAgent.includes("iphone") ||
      userAgent.includes("ipad")
    ) {
      setIsWindows(false);
    } else {
      setIsWindows(true);
    }
  };

  useEffect(() => {
    detectOperatingSystem();
  }, []);

  const toggleContent = () => {
    setIsWindows(!isWindows);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: 0.8,
          filter: "saturate(0%) brightness(1.1)",
        }}
        className="addition-info"
      >
        {isWindows ? (
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <WindowSharp />
            <div>
              Информация ниже указана для устройств на{" "}
              <b>
                <u>Windows</u>
              </b>
              .
            </div>
          </div>
        ) : (
          <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
            <Apple />
            <div>
              Информация ниже указана для устройств на{" "}
              <b>
                <u>macOS</u>
              </b>
              .
            </div>
          </div>
        )}
        <button
          className="change_os"
          onClick={toggleContent}
        >
          {isWindows ? "Показать для macOS" : "Показать для Windows"}
        </button>
      </div>

      {isWindows ? windowsContent : macContent}
    </div>
  );
};

export default ContentSwitcher;
