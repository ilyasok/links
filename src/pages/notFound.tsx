import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => (
  <main className="not-found">
    <div className="not-found-container">
      <p className="not-found-title">Мы потерялись</p>
      <p className="not-found-description">
        Вы попали на несуществующую страницу. Пожалуйста, вернитесь на главную.
      </p>
      <a
        href="/"
        className="not-found-button to-main"
      >
        На главную
      </a>
      <Link
        to="/"
        className="not-found-small-description"
      >
        Если вы столкнулись с проблемой, пожалуйста, напишите об этом на почту.
      </Link>
    </div>
  </main>
);
export default NotFound;
