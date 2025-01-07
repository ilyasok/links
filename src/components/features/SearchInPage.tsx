import {BackspaceOutlined, Search} from "@mui/icons-material";
import {Modal, Tooltip, message} from "antd";
import {motion} from "framer-motion";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
interface SearchContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isPageLoaded: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);
export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}> = ({children, isPageLoaded}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (isPageLoaded) {
      setIsOpen(true);
    }
  };

  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key === "f") || (event.ctrlKey && event.key === "а")) {
        event.preventDefault();
        if (isPageLoaded) {
          openModal();
        } else {
          message.warning(
            "Поиск временно недоступен, дождитесь полной загрузки страницы"
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({isOpen, openModal, closeModal, isPageLoaded}),
    [isOpen, isPageLoaded]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearch должен использоваться с SearchProvider. кто-то забыл обернуть компонент на странице."
    );
  }

  return context;
};

export const SearchButton: React.FC = () => {
  const {openModal, isPageLoaded} = useSearch();

  return (
    <Tooltip title={"Поиск по странице (Ctrl+F)"}>
      <button
        style={{
          opacity: isPageLoaded ? 1 : 0.5,
          filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
        }}
        onClick={() => {
          if (!isPageLoaded) {
            message.warning(
              "Поиск временно недоступен, дождитесь полной загрузки страницы"
            );
          } else {
            openModal();
          }
        }}
      >
        <Search />
      </button>
    </Tooltip>
  );
};

export const SearchInPage: React.FC = () => {
  const {isOpen, closeModal, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const [results, setResults] = useState<{title: string; content: string; id: string}[]>(
    []
  );

  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);

  const resultRefs = useRef<(HTMLButtonElement | null)[]>([]);
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);

      const timeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);
  useEffect(() => {
    setSelectedResultIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  const decodeHtmlEntities = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;

    return textArea.value;
  };

  const extractDetailsData = () => {
    const details = document.querySelectorAll("details");

    const data: {title: string; content: string; id: string}[] = [];
    details.forEach((detail) => {
      const summary = detail.querySelector("summary");
      if (!summary) {
        return;
      }

      const id = summary.getAttribute("id");
      if (!id) {
        return;
      }

      const title = summary.textContent ?? "";

      const content = Array.from(detail.querySelectorAll<HTMLParagraphElement>("p"))
        .map((el) => decodeHtmlEntities(el.textContent?.trim() ?? ""))
        .filter(Boolean)
        .join("\n");

      const listItems = Array.from(detail.querySelectorAll<HTMLLIElement>("li"))
        .map((el) => {
          const directChildUl = el.querySelector("ul");

          const parentText = Array.from(el.childNodes)
            .map((node) => {
              if (node.nodeType === Node.TEXT_NODE) {
                return decodeHtmlEntities(node.textContent?.trim() ?? "");
              } else if (
                node.nodeType === Node.ELEMENT_NODE &&
                (node as HTMLElement).tagName !== "UL"
              ) {
                const element = node as HTMLElement;
                if (element.tagName === "MARK" || element.tagName === "A") {
                  return decodeHtmlEntities(element.innerHTML?.trim() ?? "");
                }

                return decodeHtmlEntities(element.textContent?.trim() ?? "");
              }

              return "";
            })
            .filter(Boolean)
            .join(" ")
            .trim();
          if (!directChildUl) {
            return parentText;
          }

          const childItems = Array.from(directChildUl.querySelectorAll("li"))
            .map((child) => {
              const text = Array.from(child.childNodes)
                .map((node) => {
                  if (node.nodeType === Node.TEXT_NODE) {
                    return decodeHtmlEntities(node.textContent?.trim() ?? "");
                  } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node as HTMLElement;
                    if (element.tagName === "MARK" || element.tagName === "A") {
                      return decodeHtmlEntities(element.innerHTML?.trim() ?? "");
                    }

                    return decodeHtmlEntities(element.textContent?.trim() ?? "");
                  }

                  return "";
                })
                .filter(Boolean)
                .join(" ");

              return text.trim();
            })
            .filter(Boolean)
            .join("\n");

          return `${parentText}\n${childItems}`;
        })
        .filter(Boolean)
        .join("\n");

      const text = [content, listItems].join("\n");
      if (title || text) {
        data.push({title, content: text, id});
      }
    });

    return data;
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    if (!isPageLoaded || !text.trim()) {
      setResults([]);

      return;
    }

    const searchWords = text
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const detailsData = extractDetailsData();

    const filtered = detailsData.filter(({title, content}) => {
      const titleLower = title.toLowerCase();

      const contentLower = content.toLowerCase();

      return searchWords.every(
        (word) => titleLower.includes(word) || contentLower.includes(word)
      );
    });

    const highlightedResults = filtered
      .map((result) => {
        const isSingleParagraphMatch = result.content.split("\n").some((line) => {
          const lineLower = line.toLowerCase();

          return searchWords.every((word) => lineLower.includes(word));
        });

        return {
          ...result,
          content: extractMatchingLine(result.content, text),
          isSingleParagraphMatch,
        };
      })
      .sort((a, b) => {
        if (a.isSingleParagraphMatch && !b.isSingleParagraphMatch) {
          return -1;
        }

        if (!a.isSingleParagraphMatch && b.isSingleParagraphMatch) {
          return 1;
        }

        return 0;
      });
    setResults(highlightedResults);
  };

  const extractMatchingLine = (content: string, query: string) => {
    if (!content || !query.trim()) {
      return "";
    }

    const lines = content.split("\n").filter((line) => line.trim().length > 0);

    const searchWords = query
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const cleanLines = lines.map((line) => line.trim());
    for (const line of cleanLines) {
      const lineLower = line.toLowerCase();
      if (searchWords.every((word) => lineLower.includes(word))) {
        return highlightText(line, query);
      }
    }

    for (const line of cleanLines) {
      const lineLower = line.toLowerCase();
      if (searchWords.some((word) => lineLower.includes(word))) {
        return highlightText(line, query);
      }
    }

    return highlightText(cleanLines[0] ?? "", query);
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) {
      return text;
    }

    const escapedQuery = query.replace(/[-/\\^$.*+?()[\]{}|]/g, "\\$&");

    const regex = new RegExp(`(${escapedQuery.split(/\s+/).join("|")})`, "gi");

    return text.replace(regex, (match) => {
      return match.trim() ? `<mark>${match}</mark>` : match;
    });
  };

  const handleLinkClick = (id: string) => {
    const summaryElement = document.getElementById(id);
    if (!summaryElement) {
      return;
    }

    const detailsElement = summaryElement.closest("details");
    if (detailsElement) {
      if (!detailsElement.hasAttribute("open")) {
        detailsElement.setAttribute("open", "true");
      }
    }

    const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

    const padding = 24;

    const y =
      summaryElement.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      padding;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    closeModal();
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) {
        return;
      }
      inputRef.current?.focus();
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedResultIndex((prevIndex) =>
            prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedResultIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
          break;
        case "Enter":
          e.preventDefault();
          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            const selectedResult = results[selectedResultIndex];
            handleLinkClick(selectedResult.id);
          }
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, results, selectedResultIndex, handleLinkClick]);
  useEffect(() => {
    if (selectedResultIndex >= 0) {
      const resultContainer = document.querySelector(".search-results");

      const selectedResultElements = resultContainer?.querySelectorAll(".search-link");
      if (selectedResultElements && selectedResultElements[selectedResultIndex]) {
        (selectedResultElements[selectedResultIndex] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [selectedResultIndex]);
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, results, selectedResultIndex]);

  return (
    <Modal
      closeIcon={null}
      open={isOpen}
      onCancel={closeModal}
      footer={null}
      width={800}
      forceRender={true}
      getContainer={false}
    >
      <div style={{padding: "10px"}}>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Найти контент по странице..."
            ref={inputRef}
            style={{cursor: "text"}}
          />
          {query.trim() !== "" && (
            <button
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              className="search-clear-button"
              style={{cursor: "pointer"}}
            >
              <Tooltip title="Очистить">
                <BackspaceOutlined
                  opacity={0.5}
                  fontSize="small"
                />
              </Tooltip>
            </button>
          )}
        </div>
        <div className="search-results">
          {query.trim() === "" && (
            <p
              className="search-no-results"
              style={{
                textAlign: "center",
                fontSize: "36px",
                height: "200%",
                padding: "20px",
              }}
            >
              <div>
                {location.pathname === "/aefaq" && (
                  <div className="flexible-links">
                    <button onClick={() => handleLinkClick("where-find")}>
                      Ищем полезности
                    </button>
                    <button onClick={() => handleLinkClick("install-problems")}>
                      Проблемы с установкой
                    </button>
                    <button onClick={() => handleLinkClick("from-newbies")}>
                      Вопросы от новичков
                    </button>
                    <button onClick={() => handleLinkClick("tips")}>
                      (не)Вредные советы
                    </button>
                    <button onClick={() => handleLinkClick("import")}>Импорт</button>
                    <button onClick={() => handleLinkClick("interface")}>
                      Интерфейс
                    </button>
                    <button onClick={() => handleLinkClick("performance")}>
                      Производительность
                    </button>
                    <button onClick={() => handleLinkClick("actions")}>Как и чем?</button>
                    <button onClick={() => handleLinkClick("errors")}>
                      Ошибки и предупреждения
                    </button>
                    <button onClick={() => handleLinkClick("export")}>Экспорт</button>
                    <button onClick={() => handleLinkClick("export-problems")}>
                      Проблемы при экспорте
                    </button>
                  </div>
                )}
                {location.pathname === "/prfaq" && (
                  <div className="flexible-links">
                    <button onClick={() => handleLinkClick("where-find")}>
                      Ищем полезности
                    </button>
                    <button onClick={() => handleLinkClick("install-problems")}>
                      Проблемы с установкой
                    </button>
                    <button onClick={() => handleLinkClick("from-newbies")}>
                      Вопросы от новичков
                    </button>
                    <button onClick={() => handleLinkClick("tips")}>
                      (не)Вредные советы
                    </button>
                    <button onClick={() => handleLinkClick("import")}>Импорт</button>
                    <button onClick={() => handleLinkClick("interface")}>
                      Интерфейс
                    </button>
                    <button onClick={() => handleLinkClick("performance")}>
                      Производительность
                    </button>
                    <button onClick={() => handleLinkClick("actions")}>Как и чем?</button>
                    <button onClick={() => handleLinkClick("errors")}>
                      Ошибки и предупреждения
                    </button>
                    <button onClick={() => handleLinkClick("export")}>Экспорт</button>
                    <button onClick={() => handleLinkClick("export-problems")}>
                      Проблемы при экспорте
                    </button>
                  </div>
                )}
                {location.pathname === "/psfaq" && (
                  <div className="flexible-links">
                    <button onClick={() => handleLinkClick("where-find")}>
                      Ищем полезности
                    </button>
                    <button onClick={() => handleLinkClick("install-problems")}>
                      Проблемы с установкой
                    </button>
                    <button onClick={() => handleLinkClick("from-newbies")}>
                      Вопросы от новичков
                    </button>
                    <button onClick={() => handleLinkClick("import")}>Импорт</button>
                    <button onClick={() => handleLinkClick("interface")}>
                      Интерфейс
                    </button>
                    <button onClick={() => handleLinkClick("performance")}>
                      Производительность
                    </button>
                    <button onClick={() => handleLinkClick("actions")}>Как и чем?</button>
                    <button onClick={() => handleLinkClick("errors")}>
                      Ошибки и предупреждения
                    </button>
                    <button onClick={() => handleLinkClick("export")}>Экспорт</button>
                    <button onClick={() => handleLinkClick("export-problems")}>
                      Проблемы при экспорте
                    </button>
                  </div>
                )}
                {location.pathname === "/aeexprfaq" && (
                  <div className="flexible-links">
                    <button onClick={() => handleLinkClick("start")}>
                      С чего начать?
                    </button>
                    <button onClick={() => handleLinkClick("base")}>База всех баз</button>
                    <button onClick={() => handleLinkClick("linking")}>
                      Ссылки и привязки
                    </button>
                    <button onClick={() => handleLinkClick("formulas")}>Формулы</button>
                    <button onClick={() => handleLinkClick("tips")}>
                      (не)Вредные советы
                    </button>
                    <button onClick={() => handleLinkClick("tech-question")}>
                      Технические вопросы
                    </button>
                    <button onClick={() => handleLinkClick("actions")}>Как и чем?</button>
                    <button onClick={() => handleLinkClick("errors")}>
                      Ошибки и предупреждения
                    </button>
                  </div>
                )}
              </div>
            </p>
          )}
          {results.length > 0 &&
            results.map(({title, content, id}, index) => (
              <div key={id}>
                <motion.button
                  ref={(el) => {
                    resultRefs.current[index] = el;
                  }}
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(id);
                  }}
                  className={`search-link ${index === selectedResultIndex ? "selected-result" : ""}`}
                  style={{
                    backgroundColor:
                      index === selectedResultIndex
                        ? "var(--summary_background)"
                        : "transparent",
                    width: "100%",
                    outline:
                      index === selectedResultIndex
                        ? "1px solid var(--summary_border)"
                        : "none",
                  }}
                  initial={{scale: 1}}
                  animate={{
                    scale: index === selectedResultIndex ? 0.98 : 1,
                  }}
                  transition={{duration: 0.25, ease: [0.075, 0.82, 0.165, 1]}}
                >
                  <p className="search-title">{title.replace(/^[+-]+/, "").trim()}</p>
                  <p
                    className="search-content"
                    dangerouslySetInnerHTML={{__html: content}}
                  />
                </motion.button>
              </div>
            ))}
          {query.trim() !== "" && results.length === 0 && (
            <p
              className="search-no-results"
              style={{
                textAlign: "center",
                fontSize: "13px",
                opacity: "0.75",
                height: "200%",
                padding: "20px",
                marginBlock: "auto",
              }}
            >
              Ничего не нашлось, попробуйте изменить ваш запрос.
            </p>
          )}
          {!isPageLoaded && (
            <p style={{textAlign: "center", fontSize: "16px", margin: "20px"}}>
              Страница ещё загружается, а поиск всё ещё недоступен. Пожалуйста,
              подождите...
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};
