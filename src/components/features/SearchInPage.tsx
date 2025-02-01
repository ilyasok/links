import {BackspaceRounded, Search} from "@mui/icons-material";
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
  );
};

export const WideSearchButton: React.FC = () => {
  const {openModal, isPageLoaded} = useSearch();

  return (
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
      <div className="wide-search-button">
        {" "}
        <Search />
        Поиск по странице<mark>Ctrl + F</mark>
      </div>
    </button>
  );
};

export const SearchInPage: React.FC = () => {
  const {isOpen, closeModal, isPageLoaded} = useSearch();

  const [query, setQuery] = useState("");

  const [results, setResults] = useState<
    {title: string; content: string; id: string; tag?: string}[]
  >([]);

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

  const extractDetailsData = (searchWords: string[]) => {
    const details = document.querySelectorAll("details");

    const data: {title: string; content: string; id: string; tag?: string}[] = [];
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

      const tag = detail.getAttribute("data-tags") ?? "";

      const content = Array.from(
        detail.querySelectorAll<HTMLParagraphElement>("p, .addition-info")
      )
        .map((el) => decodeHtmlEntities(el.textContent?.trim() ?? ""))
        .filter(Boolean)
        .join("\n");

      const tableContent = Array.from(detail.querySelectorAll<HTMLTableElement>("table"))
        .map((table) => {
          const rows = Array.from(table.querySelectorAll("tr"));

          const headerRow = rows[0];

          const headerCells = Array.from(headerRow.querySelectorAll("td, th"))
            .map((cell) => decodeHtmlEntities(cell.textContent?.trim() ?? ""))
            .filter((cellContent) => !cellContent.toLowerCase().includes("описание"))
            .join("</th><th>");

          const bodyRows = rows
            .slice(1)
            .map((row) => {
              const cells = Array.from(row.querySelectorAll("td, th"))
                .map((cell) => decodeHtmlEntities(cell.textContent?.trim() ?? ""))
                .filter((cellContent) => !cellContent.toLowerCase().includes("видео"))
                .join("</td><td>");

              return `<tr><td>${cells}</td></tr>`;
            })
            .filter((row) =>
              searchWords.every((word) => row.toLowerCase().includes(word))
            )
            .join("\n");

          return bodyRows
            ? `<table><thead><tr><th>${headerCells}</th></tr></thead><tbody>${bodyRows}</tbody></table>`
            : "";
        })
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

      const text = [content, tableContent, listItems].join("\n");
      if (title || text) {
        data.push({title, content: text, id, tag});
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

    const detailsData = extractDetailsData(searchWords);

    const filtered = detailsData.filter(({title, content, tag}) => {
      const titleLower = title.toLowerCase();

      const contentLower = content?.toLowerCase() || "";

      const tagLower = tag?.toLowerCase() ?? "";

      return searchWords.every(
        (word) =>
          titleLower.includes(word) ||
          contentLower.includes(word) ||
          tagLower.includes(word)
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
          hasTitleMatch: searchWords.some((word) =>
            result.title.toLowerCase().includes(word)
          ),
          hasTagMatch: searchWords.some((word) =>
            result.tag?.toLowerCase().includes(word)
          ),
        };
      })
      .sort((a, b) => {
        if (a.hasTagMatch && !b.hasTagMatch) {
          return -1;
        }

        if (!a.hasTagMatch && b.hasTagMatch) {
          return 1;
        }

        if (a.hasTitleMatch && !b.hasTitleMatch) {
          return -1;
        }

        if (!a.hasTitleMatch && b.hasTitleMatch) {
          return 1;
        }

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

  const stripHtmlTags = (text: string) => {
    const div = document.createElement("div");
    div.innerHTML = text;

    return (div.textContent ?? div.innerText) || "";
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) {
      return text;
    }

    const strippedText = stripHtmlTags(text);

    const escapedQuery = query.replace(/[-/\\^$.*+?()[\]{}|]/g, "\\$&");

    const regex = new RegExp(`(${escapedQuery.split(/\s+/).join("|")})`, "gi");

    const highlightedStrippedText = strippedText.replace(regex, (match) => {
      return match.trim() ? `<mark>${match}</mark>` : match;
    });

    const div = document.createElement("div");
    div.innerHTML = text;

    const originalHtml = div.innerHTML;

    return originalHtml.replace(strippedText, highlightedStrippedText);
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
      width={850}
      forceRender={true}
      getContainer={false}
    >
      <div>
        <div className="search-input-wrapper">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Введите что-нибудь для поиска..."
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
                <BackspaceRounded
                  opacity={0.5}
                  fontSize="small"
                />
              </Tooltip>
            </button>
          )}
        </div>
        {query.trim() === "" ? (
          <p className="search-modal-title">Навигация по категориям:</p>
        ) : (
          <p className="search-modal-title">Результаты поиска:</p>
        )}
        <div className="search-results">
          {query.trim() === "" && (
            <div>
              {location.pathname === "/aefaq" && (
                <div className="search-category">
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
                  <button onClick={() => handleLinkClick("interface")}>Интерфейс</button>
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
                <div className="search-category">
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
                  <button onClick={() => handleLinkClick("interface")}>Интерфейс</button>
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
                <div className="search-category">
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
                  <button onClick={() => handleLinkClick("interface")}>Интерфейс</button>
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
                <div className="search-category">
                  <button onClick={() => handleLinkClick("start")}>С чего начать?</button>
                  <button onClick={() => handleLinkClick("base")}>База всех баз</button>
                  <button onClick={() => handleLinkClick("linking")}>
                    Ссылки и привязки
                  </button>
                  <button onClick={() => handleLinkClick("actions")}>Как и чем?</button>
                  <button onClick={() => handleLinkClick("errors")}>
                    Ошибки и предупреждения
                  </button>
                </div>
              )}
            </div>
          )}
          {results.length > 0 &&
            results.map(({title, content, id, tag}, index) => (
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
                  className={`search-link ${index === selectedResultIndex ? "search-selected" : ""}`}
                  initial={{scale: 1}}
                  animate={{
                    scale: index === selectedResultIndex ? 1 : 0.98,
                  }}
                  transition={{duration: 0.5, ease: [0.075, 0.82, 0.165, 1]}}
                >
                  <div
                    className={`search-header ${index === selectedResultIndex ? "search-selected" : ""}`}
                  >
                    <p className="search-title">{title.replace(/^[+-]+/, "").trim()}</p>
                    {tag && tag.trim() !== "" && (
                      <div className="search-tags">
                        {tag.split(", ").map((t, index) => (
                          <mark key={index}>{t}</mark>
                        ))}
                      </div>
                    )}
                  </div>
                  <p
                    className="search-content"
                    dangerouslySetInnerHTML={{__html: content}}
                  />
                </motion.button>
              </div>
            ))}
          {query.trim() !== "" && results.length === 0 && (
            <p className="search-no-results">
              Ничего не нашлось, попробуйте изменить ваш запрос.
            </p>
          )}
          {!isPageLoaded && (
            <p style={{textAlign: "center", fontSize: "1rem", margin: "20px"}}>
              Страница ещё загружается, а поиск всё ещё недоступен. Пожалуйста,
              подождите...
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};
