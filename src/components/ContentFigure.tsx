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
    <div className="figure_container">
      <figure className={styleClass}>
        {isWindowsStyle && (
          <div>
            <div className="window-header">
              <figcaption>{caption}</figcaption>
              <div className="window-controls">
                <div className="minimize">
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
                </div>
                <div className="maximize">
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
                </div>
                <div className="close">
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
    </div>
  );
};
const VideoFigure: React.FC<VideoFigureProps> = ({styleClass, videoSrc, caption}) => {
  const isWindowsStyle =
    styleClass === "figure_windows-light" || styleClass === "figure_windows-dark";
  const isMacOSStyle =
    styleClass === "figure_macos-light" || styleClass === "figure_macos-dark";
  return (
    <div className="figure_container">
      <figure className={styleClass}>
        {isWindowsStyle && (
          <div>
            <div className="window-header">
              <figcaption>{caption}</figcaption>
              <div className="window-controls">
                <div className="minimize">
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
                </div>
                <div className="maximize">
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
                </div>
                <div className="close">
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
                <div className="close"></div>
                <div className="maximize"></div>
                <div className="minimize"></div>
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
    </div>
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
