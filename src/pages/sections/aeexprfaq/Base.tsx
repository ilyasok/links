import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import DetailsSummary from "../../../components/DetailsSummary";
import CodeSnippet from "../../../components/features/CodeSnippet";
import {AdditionInfo, AdditionWarning} from "../../../components/Additions";

const AEExprBase: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/aeexprfaq/Base.tsx" />
      <DetailsSummary title="Что такое переменные и константы? Какие типы данных они могут принимать?">
        <p>
          В программировании есть понятие переменной. Это какое-либо значение с
          определенным именем. В переменную можно записать число, строку, значение
          контроллера, массив, булево значение (True или False), результат какой-нибудь
          функции или что вам душе угодно.
        </p>
        <ul>
          <li>
            У <mark>переменной</mark> значение может меняться когда угодно - с помощью
            контроллера, функции или различных условий. Изменяемая переменная обозначается
            как <mark>var</mark> или <mark>let</mark>.
            <AdditionInfo>
              Основное отличие между <mark>var</mark> и <mark>let</mark> - это область
              видимости. Также переменная <mark>let</mark> с одинаковым названием не может
              быть вновь объявлена в одной и той же области видимости, когда же переменная
              с типом <mark>var</mark> позволит это сделать.
            </AdditionInfo>
          </li>
          <li>
            У <mark>константой переменной</mark> или же <mark>константы</mark> значение не
            может изменяться. Такая переменная обозначается как <mark>const</mark>, её
            нельзя перезаписать или изменить во время работы выражения. Это может быть
            какое-нибудь значение из физики или математики, например число Пи или
            гравитационное ускорение.
            <AdditionWarning>
              При помощи <mark>const</mark> нельзя объявлять переменную без его значения,
              иначе выбьет ошибку.
            </AdditionWarning>
          </li>
        </ul>
        <p>
          Чтобы задать переменную - достаточно придумать ей название, поставить знак равно
          и указать его значение.
        </p>
        <CodeSnippet language="javascript">{`speed = 100 // является переменной, но она не явно задана
var angle = 45
let carBrand = "Ford"
var isEnabled = true`}</CodeSnippet>
        <p>
          Чтобы задать константу, или же неизменяемую переменную - нужно перед названием
          переменной задать тип данных <mark>const</mark>. Это позволит языку выражений
          понять, что данное значение перезаписывать не следует и будет выводить ошибку
          при попытке его перезаписи.
        </p>
        <CodeSnippet language="javascript">{`const pi = 3.1415926535
const gravity = 9.81`}</CodeSnippet>
        {/* TODO: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Как вывести результат выражения?">
        <p>
          Обычно в языке выражений в <mark className="app">After Effects</mark> результат
          определяется последней выполненной строкой. Здесь нельзя задать какое-либо
          значение в любом месте кода с помощью <mark className="code">return</mark> или
          чего-то подобного.
        </p>
        {/* FIXME: написать и показать примеры */}
      </DetailsSummary>
      <DetailsSummary title="Как правильно называть переменные?">
        <p>
          Для имени переменной можно использовать любую букву латинского алфавита и цифры.
          В некоторых случаях можно применять символы подчеркивания и знак доллара.
        </p>
        <p>
          В переменной должны быть только буквы латинского алфавита и цифры. Переменная{" "}
          <b>
            <u>не должна</u>
          </b>{" "}
          начинаться с цифры. Также для переменной{" "}
          <b>
            <u>нельзя использовать</u>
          </b>{" "}
          названия встроенных функций и типов данных.
        </p>
        <CodeSnippet language="javascript">{`// ПРАВИЛЬНО
var Name = "Misha"
var SurName = "Lebedev"

// НЕПРАВИЛЬНО
var 1Person = 1
var const = true`}</CodeSnippet>
        <p>
          По стилю написания названий переменных ограничений нет, но лучше уж следовать
          стандартной методике написания, по типу CamelCase или Snake_Case. Это позволит
          лучше читать код вашего выражения.
        </p>
        <AdditionWarning>
          В <mark>ExtendScript</mark> нельзя использовать метод написания переменных
          CamelCase.
        </AdditionWarning>
        {/* FIXME: написать */}
      </DetailsSummary>
      <DetailsSummary title="Какие типы данных я могу задать для переменных?">
        <p>{/* FIXME: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие есть стандартные функции в выражениях?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие есть атрибуты и методы для работы с композициями и слоями?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Как создать собственную функцию и использовать его?">
        <p>{/* FIXME: */}</p>
      </DetailsSummary>
      <DetailsSummary title="Что такое конструкция условий? Для чего нужен if, else?">
        <p>{/* FIXME: написать */}</p>
      </DetailsSummary>
      <DetailsSummary title="Какие математические выражения я могу использовать?">
        <p>
          С помощью языка выражений вы можете выполнять стандартные арифметические
          выражения, например сложение и вычитание, умножение и деление.
        </p>
        <p>
          Для начала зададим две простые переменные, внутри которых будут храниться число.
        </p>
        <CodeSnippet language="javascript">x = 100 y = 50</CodeSnippet>
        <p>
          После того, как мы задали переменные - мы можем с ними взаимодействовать и даже
          записывать результат математических операций в новые переменные.
        </p>
        <CodeSnippet language="javascript">x + y x - yx * y z = x / y</CodeSnippet>
        <p>
          Помимо стандартных математических операций, которые мы знаем со школьных времён,
          существуют и математические функции, как <mark>Math.round</mark> или{" "}
          <mark>Math.floor</mark>.
        </p>
        {/* TODO: написать!! */}
      </DetailsSummary>
      <DetailsSummary title="Что такое комментарии и для чего они нужны?">
        <p>
          Комментарии - это не обязательная вещь при написании выражений. Но комментарии
          могут пригодиться при объяснении того или иного поведения в вашей инструкции
          другому пользователю или даже себе из будущего.
        </p>
        {/* TODO: написать */}
      </DetailsSummary>
      <DetailsSummary title="Как отформатировать текст или число?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
      <DetailsSummary title="Зачем нужен seedRandom?">
        <p>{/* FIXME: написать!! */}</p>
      </DetailsSummary>
    </div>
  );
};
export default AEExprBase;
