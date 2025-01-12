import {motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
interface Subtitle {
  start: number;
  end: number;
  text: string;
}

const NotFound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);

  const [currentSubtitle, setCurrentSubtitle] = useState<string>("404");
  const [lastSubtitleChangeTime, setLastSubtitleChangeTime] = useState<number>(0);

  useEffect(() => {
    audioRef.current = new Audio("/files/404.mp3");

    const fetchSubtitles = async () => {
      try {
        const response = await fetch("/files/404.json");

        const json = await response.json();
        setSubtitles(json);
      } catch (error) {
        console.error("Ошибка загрузки субтитров:", error);
      }
    };
    fetchSubtitles();

    const handlePlayAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Ошибка воспроизведения аудио:", error);
        });
      }
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
  useEffect(() => {
    const updateSubtitle = () => {
      if (!audioRef.current) {
        return;
      }

      const currentTime = audioRef.current.currentTime;

      const current = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );

      if (current && current.text !== currentSubtitle) {
        setCurrentSubtitle(current.text);
      } else if (!current && currentSubtitle !== "404") {
        setCurrentSubtitle("404");
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateSubtitle);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateSubtitle);
      }
    };
  }, [subtitles, currentSubtitle]);

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
      <p className="error-backtitle">{currentSubtitle}</p>
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
