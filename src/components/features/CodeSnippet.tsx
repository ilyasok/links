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
