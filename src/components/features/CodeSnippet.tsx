import React, {useEffect, useRef} from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
interface CodeSnippetProps {
  language: string;
  children: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({language, children}) => {
  const codeRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [children, language]);

  return (
    <pre>
      <code
        ref={codeRef}
        className={language}
      >
        {children}
      </code>
    </pre>
  );
};
export default CodeSnippet;

export const variablesExample = `
speed = 100 // является переменной, но она не явно задана
var angle = 45
let carBrand = "Ford"
var isEnabled = true
`;

export const constExample = `
const pi = 3.1415926535
const gravity = 9.81
`;

export const variablesNameExample = `
// ПРАВИЛЬНО
var Name = "Misha"
var SurName = "Lebedev"

// НЕПРАВИЛЬНО
var 1Person = 1
var const = true
`;
