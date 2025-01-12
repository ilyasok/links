import {motion} from "framer-motion";
import React, {useEffect, useRef} from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const NotFound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/files/404.mp3");

    const handlePlayAudio = () => {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Ошибка воспроизведения аудио:", error);
          });
        }
      }, 1000);
    };

    window.addEventListener("click", handlePlayAudio);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      window.removeEventListener("click", handlePlayAudio);
    };
  }, []);

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <motion.main
      className="not-found"
      initial={{x: 100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{x: -50, opacity: 0}}
      transition={{duration: 0.5, type: "spring", ease: [0.075, 0.82, 0.165, 1]}}
    >
      <Helmet>
        <title>notfound@aechat</title>
      </Helmet>
      <p className="error-backtitle">404</p>
      <div className="error-container">
        <div className="error-modal">
          <p className="error-modal-title">Страница не найдена</p>
          <Link
            to="/"
            onClick={handleLinkClick}
          >
            <motion.div
              className="error-modal-button"
              whileHover={{
                scale: 0.95,
                transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
              }}
              whileTap={{scale: 0.9, opacity: 0.5}}
            >
              На главную
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.main>
  );
};

export default NotFound;
