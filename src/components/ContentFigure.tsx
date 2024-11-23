import React from "react";

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
  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";
  const isMacOSStyle =
    styleClass === "figure_macos-light" || styleClass === "figure_macos-dark";

  return (
    <figure className={styleClass}>
      {isWindowsStyle && (
        <div>
          <div className="window-header">
            <figcaption>{caption}</figcaption>
            <div className="window-controls">
              <div className="minimize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M 3.5 22.5 A 1.50015 1.50015 0 1 0 3.5 25.5 L 44.5 25.5 A 1.50015 1.50015 0 1 0 44.5 22.5 L 3.5 22.5 z"></path>
                </svg>
              </div>
              <div className="maximize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z"></path>
                </svg>
              </div>
            </div>
          </div>
          <img
            src={imgSrc}
            alt={imgTitle}
          />
        </div>
      )}
      {isMacOSStyle && (
        <div>
          <div className="window-header">
            <div className="window-controls">
              <div className="minimize"></div>
              <div className="maximize"></div>
              <div className="close"></div>
            </div>
            <figcaption>{caption}</figcaption>
          </div>
          <img
            src={imgSrc}
            alt={imgTitle}
          />
        </div>
      )}
    </figure>
  );
};

const VideoFigure: React.FC<VideoFigureProps> = ({styleClass, videoSrc, caption}) => {
  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";
  const isMacOSStyle =
    styleClass === "figure_macos-light" || styleClass === "figure_macos-dark";
  return (
    <figure className={styleClass}>
      {isWindowsStyle && (
        <div>
          <div className="window-header">
            <figcaption>{caption}</figcaption>
            <div className="window-controls">
              <div className="minimize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M 3.5 22.5 A 1.50015 1.50015 0 1 0 3.5 25.5 L 44.5 25.5 A 1.50015 1.50015 0 1 0 44.5 22.5 L 3.5 22.5 z"></path>
                </svg>
              </div>
              <div className="maximize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z"></path>
                </svg>
              </div>
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
      )}
      {isMacOSStyle && (
        <div>
          <div className="window-header">
            <div className="window-controls">
              <div className="minimize"></div>
              <div className="maximize"></div>
              <div className="close"></div>
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
      )}
    </figure>
  );
};

const YouTubeVideo: React.FC<{
  styleClass: string;
  link: string;
  caption: string;
}> = ({styleClass, link, caption}) => {
  const id = link.split("/").pop();

  return (
    <figure className={styleClass}>
      <figcaption>{caption}</figcaption>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={caption}
        allowFullScreen
      />
    </figure>
  );
};
export {ImageFigure, VideoFigure, YouTubeVideo};
