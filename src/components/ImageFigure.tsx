import React from "react";

interface ImageFigureProps {
  styleClass: string;
  imgSrc: string;
  imgTitle: string;

  caption: string;
}

const ImageFigure: React.FC<ImageFigureProps> = ({
  styleClass,
  imgSrc,
  imgTitle,
  caption,
}) => {
  return (
    <figure className={styleClass}>
      <figcaption>{caption}</figcaption>
      <img
        loading="lazy"
        src={imgSrc}
        title={imgTitle}
        alt={imgTitle}
      />
    </figure>
  );
};

export default ImageFigure;
