import React from "react";
import DetailsSummary from "../../../components/DetailsSummary";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";

const AEInterface: React.FC = () => {
  return (
    <div
      className="faq-content"
      id="interface"
    >
      <GithubUpdateInfo filePath="src/pages/sections/aefaq/Interface.tsx" />
      <DetailsSummary title="Случайно закрыл окно в интерфейсе, как мне его вернуть?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как мне прикрепить нужное окно в рабочее пространство программы?">
        <p>{/* fixme: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу прикрепить окно скрипта и как мне его в конце концов закрепить?">
        <p>{/* fixme: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как поставить несколько окон во вкладки или расположить их по строкам?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Пропали нужные переключатели и колонки на таймлайне. Как мне их вернуть?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Компьютер во время работы упал в BSOD и испортил мне настройки. Как мне их восстановить?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='У меня график скорости отличается от того, что у туториала. Как мне сделать "нормальный вид" графика?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Почему я не могу изменить график скорости с помощью "усиков"?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Установил After Effects 2023 или выше и не могу понять, что стало с Alpha/Luma Matte. Что случилось?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title='Бесит окно "Properties", как отключить его автоматическое открытие?'>
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как включить всплывающую панель для применения эффектов, которая открывается с помощью Ctrl+Space?">
        <p>
          То, что описано в этом вопросе - не является встроенной функцией{" "}
          <mark className="app">After Effects</mark>. Здесь идёт речь об стороннем плагине{" "}
          <a href=""></a>
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как мне установить свой процент масштабирования предпросмотра?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как убрать пикселизацию предпросмотра при перемещении плейхеда?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Где найти Front View, Current Camera и прочие варианты отображения камеры?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как отключить автоматическое кэширование предпросмотра при бездействии?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Почему я не могу поставить плейхед в самый конец композиции?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="У меня есть два ключа с одинаковым значением, но между ними всё равно идёт какая-то анимация. Как её убрать?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Не выделяется объект в Rotobrush. Что делать?">
        <p>{/* fixme: баг кролика в 2019 */}</p>
      </DetailsSummary>

      <DetailsSummary title="Как отключить экран со списком недавних проектов при запуске?">
        <p>
          Иногда при открытии <mark className="app">After Effects</mark> открывается
          домашнее окно с приветствием и списком недавних проектов. На некоторых
          устройствах открытие данного окна занимает довольно долгое время. За это время
          пользователь мог бы создать новую композицию и начать работу. К счастью это окно
          можно отключить.
        </p>
        <p>
          Для отключения стартового окна со списком недавних проектов - откройте настройки{" "}
          <mark className="app">After Effects</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + ; (Ж)</mark>, перейдите в раздел{" "}
          <mark className="ui">Startup & Repair</mark> и выключите пункт{" "}
          <mark className="ui">Enable Home Screen</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить акцентный цвет интерфейса программы?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как изменить картинку во время запуска программы?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Где-то слышал про секретные настройки, что это такое?">
        <p>{/* fixme: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEInterface;
