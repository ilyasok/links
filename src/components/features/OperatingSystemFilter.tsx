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
        {isWindows
          ? "Информация ниже указана для устройств на Windows."
          : "Информация ниже указана для устройств на macOS."}
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

// !: пример использования:

// import React from "react";
// import ContentSwitcher from "./ContentSwitcher";

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Фильтрация контента для разных систем</h1>

//       {/* Первый пример с одним набором контента */}
// <ContentSwitcher
//   windowsContent={
//     <div>
//       <h2>Информация для Windows #1</h2>
//       <p>Это контент для системы Windows #1.</p>
//     </div>
//   }
//   macContent={
//     <div>
//       <h2>Информация для macOS #1</h2>
//       <p>Это контент для системы macOS #1.</p>
//     </div>
//   }
// />

//       {/* Второй пример с другим набором контента */}
//       <ContentSwitcher
//         windowsContent={
//           <div>
//             <h2>Информация для Windows #2</h2>
//             <p>Это контент для системы Windows #2.</p>
//           </div>
//         }
//         macContent={
//           <div>
//             <h2>Информация для macOS #2</h2>
//             <p>Это контент для системы macOS #2.</p>
//           </div>
//         }
//       />
//     </div>
//   );
// };

// export default App;
