import React, {useState, useEffect, useCallback} from "react";

interface ImageFigureProps {
  styleClass: string;
  imgSrc: string;
  imgTitle: string;
  caption: string;
}

interface VideoFigureProps {
  styleClass: string;
  videoSrc: string;
  caption: string;
}

const ImageFigure: React.FC<ImageFigureProps> = ({
  styleClass,
  imgSrc,
  imgTitle,
  caption,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";

  const handleMaximize = useCallback(() => {
    setIsFullscreen(true);
    setIsClosing(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    });
  }, []);

  const handleClick = useCallback(() => {
    if (isFullscreen) {
      handleClose();
    } else {
      handleMaximize();
    }
  }, [isFullscreen, handleClose, handleMaximize]);

  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        handleClose();
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullscreen, handleClose]);

  const content = isWindowsStyle ? (
    <div onClick={handleClick}>
      <div className="window-header">
        <figcaption>{caption}</figcaption>
        <div className="window-controls">
          <button
            className="minimize"
            onClick={handleClose}
            aria-label="Свернуть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h14q.425 0 .713.288T20 19q0 .425-.288.713T19 20H5Z"
              />
            </svg>
          </button>
          <button
            className="maximize"
            onClick={handleMaximize}
            aria-label="Раскрыть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 20q-.825 0-1.413-.588T4 18V6q0-.825.588-1.413T6 4h12q.825 0 1.413.588T20 6v12q0 .825-.588 1.413T18 20H6Zm0-2h12V6H6v12ZM6 6v12V6Z"
              />
            </svg>
          </button>
          <button
            className="close"
            onClick={handleClose}
            aria-label="Закрыть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              />
            </svg>
          </button>
        </div>
      </div>
      <img
        src={imgSrc}
        alt={imgTitle}
      />
    </div>
  ) : (
    <div onClick={handleClick}>
      <div className="window-header">
        <div className="window-controls">
          <button
            className="close"
            onClick={handleClose}
            aria-label="Закрыть"
          ></button>
          <button
            className="maximize"
            onClick={handleMaximize}
            aria-label="Раскрыть"
          ></button>
          <button
            className="minimize"
            onClick={handleClose}
            aria-label="Свернуть"
          ></button>
        </div>
        <figcaption>{caption}</figcaption>
      </div>
      <img
        src={imgSrc}
        alt={imgTitle}
      />
    </div>
  );

  return (
    <>
      <div className="figure_container">
        <figure className={styleClass}>{content}</figure>
      </div>
      {isFullscreen && (
        <div
          className={`fullscreen-overlay ${isClosing ? "closing" : ""}`}
          onClick={handleClickOutside}
        >
          <div
            className={`fullscreen-content ${styleClass} ${isClosing ? "closing" : ""}`}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

const VideoFigure: React.FC<VideoFigureProps> = ({styleClass, videoSrc, caption}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";

  const handleMaximize = useCallback(() => {
    setIsFullscreen(true);
    setIsClosing(false);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsFullscreen(false);
      setIsClosing(false);
    });
  }, []);

  const handleClick = useCallback(() => {
    if (isFullscreen) {
      handleClose();
    } else {
      handleMaximize();
    }
  }, [isFullscreen, handleClose, handleMaximize]);

  const handleClickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        handleClose();
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullscreen, handleClose]);

  const content = isWindowsStyle ? (
    <div onClick={handleClick}>
      <div className="window-header">
        <figcaption>{caption}</figcaption>
        <div className="window-controls">
          <button
            className="minimize"
            onClick={handleClose}
            aria-label="Свернуть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 20q-.425 0-.713-.288T4 19q0-.425.288-.713T5 18h14q.425 0 .713.288T20 19q0 .425-.288.713T19 20H5Z"
              />
            </svg>
          </button>
          <button
            className="maximize"
            onClick={handleMaximize}
            aria-label="Раскрыть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 20q-.825 0-1.413-.588T4 18V6q0-.825.588-1.413T6 4h12q.825 0 1.413.588T20 6v12q0 .825-.588 1.413T18 20H6Zm0-2h12V6H6v12ZM6 6v12V6Z"
              />
            </svg>
          </button>
          <button
            className="close"
            onClick={handleClose}
            aria-label="Закрыть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
              />
            </svg>
          </button>
        </div>
      </div>
      <video
        controls
        loop
        preload="metadata"
      >
        <source src={videoSrc} />
      </video>
    </div>
  ) : (
    <div onClick={handleClick}>
      <div className="window-header">
        <div className="window-controls">
          <button
            className="close"
            onClick={handleClose}
            aria-label="Закрыть"
          ></button>
          <button
            className="maximize"
            onClick={handleMaximize}
            aria-label="Раскрыть"
          ></button>
          <button
            className="minimize"
            onClick={handleClose}
            aria-label="Свернуть"
          ></button>
        </div>
        <figcaption>{caption}</figcaption>
      </div>
      <video
        controls
        loop
        preload="metadata"
      >
        <source src={videoSrc} />
      </video>
    </div>
  );

  return (
    <>
      <div className="figure_container">
        <figure className={styleClass}>{content}</figure>
      </div>
      {isFullscreen && (
        <div
          className={`fullscreen-overlay ${isClosing ? "closing" : ""}`}
          onClick={handleClickOutside}
        >
          <div
            className={`fullscreen-content ${styleClass} ${isClosing ? "closing" : ""}`}
          >
            {content}
          </div>
        </div>
      )}
    </>
  );
};

const YouTubeVideo: React.FC<{
  link: string;
  caption: string;
}> = ({link, caption}) => {
  const id = link.split("/").pop();

  return (
    <figure className="figure_browser-youtube">
      <div className="window-header">
        <figcaption>
          <b>YouTube</b>: {caption}
        </figcaption>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={caption}
        allowFullScreen
      />
    </figure>
  );
};
export {ImageFigure, VideoFigure, YouTubeVideo};
