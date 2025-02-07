import {motion} from "framer-motion";
import React, {useState} from "react";
import {Link} from "react-router-dom";
interface LinkCardProps {
  href: string;
  icon: JSX.Element;
  name: string;
  description: string;
}
interface LinkCardPropsNoDescription {
  href: string;
  icon: JSX.Element;
  name: string;
}
// *: компонент для анимированной ссылки, которая принимает на себя ссылку идущая за пределы приложения, иконку, имя и описание
export const LinkCard: React.FC<LinkCardProps> = ({href, icon, name, description}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.a
      href={href}
      className="links-button"
      onClick={() => setIsClicked(!isClicked)}
      whileHover={{
        scale: 1.05,
        rotate: isClicked ? Math.random() * 2 : -Math.random() * 2,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        type: "spring",
      }}
      whileTap={{
        scale: 0.95,
        rotate: isClicked ? -Math.random() * 2 : Math.random() * 2,
        opacity: 0.5,
      }}
    >
      <div className="name_container">
        <span className="icon">{icon}</span>
        <p className="name">{name}</p>
      </div>
      <p className="description">{description}</p>
    </motion.a>
  );
};

// *: компонент для анимированной ссылки, которая принимает на себя ссылку идущая за пределы приложения, иконку и имя, без описания
export const LinkCardNoDescription: React.FC<LinkCardPropsNoDescription> = ({
  href,
  icon,
  name,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.a
      href={href}
      className="links-button"
      onClick={() => setIsClicked(!isClicked)}
      whileHover={{
        scale: 1.05,
        rotate: isClicked ? Math.random() * 2 : -Math.random() * 2,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        type: "spring",
      }}
      whileTap={{
        scale: 0.95,
        rotate: isClicked ? -Math.random() * 2 : Math.random() * 2,
        opacity: 0.5,
      }}
    >
      <div className="name_container">
        <div className="icon">{icon}</div>
        <p className="name">{name}</p>
      </div>
    </motion.a>
  );
};

// *: компонент для анимированной ссылки внутри приложения, которая принимает на себя ссылку, иконку, имя и описание
export const LinkInAppCard: React.FC<LinkCardProps> = ({
  href,
  icon,
  name,
  description,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="links-button"
      onClick={() => setIsClicked(!isClicked)}
      whileHover={{
        scale: 1.05,
        rotate: isClicked ? Math.random() * 2 : -Math.random() * 2,
        transition: {duration: 0.5, ease: [0.075, 0.82, 0.165, 1]},
        type: "spring",
      }}
      whileTap={{
        scale: 0.95,
        rotate: isClicked ? -Math.random() * 2 : Math.random() * 2,
        opacity: 0.5,
      }}
    >
      <Link to={href}>
        <div className="name_container">
          <div className="icon">{icon}</div>
          <p className="name">{name}</p>
        </div>
        <p className="description">{description}</p>
      </Link>
    </motion.div>
  );
};
