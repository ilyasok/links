import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {AdditionWarning} from "../../../components/Additions";
import {ImageFigure} from "../../../components/ContentFigure";
import DetailsSummary from "../../../components/DetailsSummary";
import ContentSwitcher from "../../../components/features/OperatingSystemFilter";

const PSErrors: React.FC = () => (
  <div className="faq-content">
    <GithubUpdateInfo filePath="src/pages/sections/psfaq/Errors.tsx" />
    <DetailsSummary title='"Для доступа к функциям на базе технологии Firefly в приложениях Adobe у вас должны быть установлены подлинные приложения Adobe", "Проверьте своё подключение к интернету и повторите попытку" или "Could not complete your request because of a program error"'>
      <p>
        Вы пытаетесь использовать функцию генеративной заливки для создания или коррекции
        изображения. На &quot;народных&quot; версиях функции, которые используют Adobe
        Firefly недоступны, так как у вас отсутствует подписка на Creative Cloud.
      </p>
      <p>
        Решения два: либо вы оформляете подписку на Creative Cloud, либо заменяйте Firefly
        на интеграцию <mark className="app">Stable Diffusion</mark> в{" "}
        <mark className="app">Photoshop</mark> через плагин{" "}
        <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
          Auto-Photoshop-StableDiffusion
        </a>
        .
      </p>
      <p>
        Если вы пытаетесь использовать инструмент <mark className="ui">Remove Tool</mark>{" "}
        и у вас выскакивает ошибка{" "}
        <mark>Could not complete your request because of a program error</mark>, то вам
        нужно переключить режим заливки на <mark className="ui">Generative AI Off</mark>.
      </p>
      <ImageFigure
        styleClass="figure_windows-light"
        imgSrc="images/photoshop/disable_generative_ai_removetool.png"
        imgTitle="Отключаем генеративную заливку при использовании инструмента Remove Tool"
        caption="Photoshop"
      />
    </DetailsSummary>
  </div>
);

export default PSErrors;
