import {Search, BackspaceOutlined} from "@mui/icons-material";
import {Modal, Tooltip} from "antd";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";

interface SearchContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey && event.key === "f") || (event.ctrlKey && event.key === "а")) {
        event.preventDefault();
        openModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const value = useMemo(() => ({isOpen, openModal, closeModal}), [isOpen]);

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
  const {openModal} = useSearch();

  return (
    <Tooltip title="Поиск по странице (Ctrl+F)">
      <button onClick={openModal}>
        <Search />
      </button>
    </Tooltip>
  );
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const SearchInPage: React.FC = () => {
  const {isOpen, closeModal} = useSearch();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{title: string; content: string; id: string}[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement>(null);

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

  const extractDetailsData = () => {
    const details = document.querySelectorAll("details");
    const data: {title: string; content: string; id: string}[] = [];

    details.forEach((detail) => {
      const summary = detail.querySelector("summary");
      if (!summary) return;

      const id = summary.getAttribute("id");
      if (!id) return;

      const title = summary.textContent ?? "";
      const content = Array.from(
        detail.querySelectorAll<HTMLLIElement | HTMLParagraphElement>("p, li")
      )
        .map((el) => el.textContent ?? "")
        .join("\n");

      if (title || content) {
        data.push({title, content, id});
      }
    });

    return data;
  };

  const handleSearch = (text: string) => {
    setQuery(text);

    if (!text.trim()) {
      setResults([]);
      return;
    }

    const lowerCaseText = text.toLowerCase();
    const detailsData = extractDetailsData();

    const filtered = detailsData.filter(
      ({title, content}) =>
        title.toLowerCase().includes(lowerCaseText) ||
        content.toLowerCase().includes(lowerCaseText)
    );

    setResults(filtered);
  };

  const extractMatchingLine = (content: string, query: string) => {
    const lines = content.split("\n");
    const lowerQuery = query.toLowerCase();

    for (const line of lines) {
      if (line.toLowerCase().includes(lowerQuery)) {
        return line;
      }
    }

    return content.split("\n")[0] ?? "";
  };

  const highlightText = (text: string, query: string) => {
    const escapedQuery = escapeRegExp(query);
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const handleLinkClick = (id: string) => {
    const summaryElement = document.getElementById(id);
    if (!summaryElement) return;

    const detailsElement = summaryElement.closest("details");
    if (detailsElement) {
      detailsElement.setAttribute("open", "true");
    }

    summaryElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    closeModal();
  };
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
              height: "250px",
              marginBlock: "auto",
            }}
          >
            {/* todo: добавить список всех секций вместо этого смайла */}
            ¯\_(ツ)_/¯
          </p>
        )}
        {results.length > 0 &&
          results.map(({title, content, id}) => (
            <div key={id}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id);
                }}
                className="search-link"
              >
                <p
                  className="search-title"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(title.replace(/^[+-]+/, ""), query),
                  }}
                ></p>
                <p
                  className="search-content"
                  dangerouslySetInnerHTML={{
                    __html:
                      highlightText(extractMatchingLine(content, query), query) ||
                      highlightText(content, query),
                  }}
                ></p>
              </button>
            </div>
          ))}
        {query.trim() !== "" && results.length === 0 && (
          <p
            className="search-no-results"
            style={{
              textAlign: "center",
              fontSize: "13px",
              opacity: "0.75",
              height: "250px",
              marginBlock: "auto",
            }}
          >
            Ничего не нашлось, попробуйте изменить ваш запрос.
          </p>
        )}
      </div>
    </Modal>
  );
};
