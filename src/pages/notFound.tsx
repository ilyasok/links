import {motion} from "framer-motion";
import React from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const NotFound = () => (
  <motion.main
    className="not-found"
    initial={{y: 50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 50, opacity: 0}}
    transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
  >
    <Helmet>
      <title>notfound@aechat</title>
    </Helmet>
    <div className="not-found-container">
      <p className="not-found-title">Мы потерялись</p>
      <p className="not-found-description">
        Вы попали на несуществующую страницу. Пожалуйста, вернитесь на главную.
      </p>
      <Link
        to="/"
        className="not-found-button to-main"
      >
        На главную
      </Link>
      <a
        href="mailto:me@m1sh3r.ru"
        className="not-found-small-description"
      >
        Если вы столкнулись с проблемой, пожалуйста, напишите об этом на почту.
      </a>
    </div>
  </motion.main>
);
export default NotFound;
