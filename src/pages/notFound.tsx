import {motion} from "framer-motion";
import React from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const NotFound = () => (
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
    <div className="error-container">
      <div className="error-modal">
        <p className="error-modal-title">404 / Не найдено</p>
        <p>Вы попали на несуществующую страницу, пожалуйста, перейдите на главную.</p>
        <Link to="/">
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
export default NotFound;
