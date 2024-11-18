import {motion} from "framer-motion";
import {Header} from "../components/Header";
import {Breadcrumb, Divider} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import {AdditionWarning} from "../components/Additions";
import {Footer} from "../components/Footer";
// *: разделы aeexprfaq:

const AEExpressionPage = () => {
  return (
    <div className="page">
      <Header title="ae(expr)faq" />
      <motion.main
        className="main"
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 50, opacity: 0}}
        transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
      >
        <div className="faq-container-flex">
          <div className="faq-container">
            <div className="faq-title">
              <h1>aeexpressionfaq</h1>
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/">Главная</Link>,
                  },
                  {
                    title: <Link to="/aeexprfaq">FaQ по выражениям в After Effects</Link>,
                    menu: {
                      items: [
                        {title: <Link to="/aefaq">FaQ по Adobe After Effects</Link>},
                        {
                          title: <Link to="/prfaq">FaQ по Adobe Premiere Pro</Link>,
                        },
                        {
                          title: <Link to="/psfaq">FaQ по Adobe Photoshop</Link>,
                        },
                      ],
                    },
                  },
                ]}
              />
            </div>
            <AdditionWarning>
              Данный раздел не является полноценным курсом по написанию выражений в Adobe
              After Effects и находится в разработке. Мнение автора и мнение читателя
              могут отличаться. Предложения по поводу улучшения материала вы можете
              отправить на <a href="mailto:me@m1sh3r.ru">почту автора</a>.
            </AdditionWarning>
            {[
              ["1", "#start", "С чего начать?"],
              ["2", "#base", "База всех баз"],
              ["3", "#linking", "Ссылки и привязки"],
              ["4", "#formulas", "Формулы"],
              ["5", "#tips", "(не)Вредные советы"],
              ["6", "#tech-question", "Технические вопросы"],
              ["7", "#actions", "Как и чем?"],
              ["8", "#errors", "Ошибки и предупреждения"],
            ].map(([key, href, title]) => (
              <div key={key}>
                <Divider
                  style={{fontSize: "clamp(12px, 2vw, 14px)"}}
                  orientation="right"
                >
                  {title}
                </Divider>
                {(() => {
                  switch (href) {
                    case "#start":
                      return <div>1</div>;
                    case "#base":
                      return <div>2</div>;
                    case "#linking":
                      return <div>3</div>;
                    case "#formulas":
                      return <div>4</div>;
                    case "#tips":
                      return <div>5</div>;
                    case "#tech-question":
                      return <div>6</div>;
                    case "#actions":
                      return <div>7</div>;
                    case "#errors":
                      return <div>8</div>;
                  }
                })()}
              </div>
            ))}
            <Footer
              title="aechat"
              initialYear={2023}
            />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default AEExpressionPage;
