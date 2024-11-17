import {Search} from "@mui/icons-material";
import React, {createContext, useContext, useState} from "react";

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

  return (
    <SearchContext.Provider value={{isOpen, openModal, closeModal}}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchButton: React.FC = () => {
  const {openModal} = useSearch();

  return (
    <button onClick={openModal}>
      <Search />
    </button>
  );
};

export const SearchInPage: React.FC = () => {
  const {isOpen, closeModal} = useSearch();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{title: string; content: string; id: string}[]>(
    []
  );

  const extractDetailsData = () => {
    const details = document.querySelectorAll("details");
    const data: {title: string; content: string; id: string}[] = [];

    details.forEach((detail, index) => {
      const title = detail.querySelector("summary")?.textContent || "";
      const content =
        Array.from(detail.querySelectorAll<HTMLLIElement | HTMLAnchorElement>("p, li"))
          .map((el) => el.textContent || "")
          .join(" ") || "";
      const id = `detail-${index}`;
      detail.setAttribute("id", id);

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

  const highlightText = (text: string, query: string) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <button
          onClick={closeModal}
          style={{
            float: "right",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Введите что-то для поиска"
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        />
        <div style={{maxHeight: "300px", overflowY: "auto"}}>
          {results.length > 0 ? (
            results.map(({title, content, id}) => (
              <div
                key={id}
                style={{borderBottom: "1px solid #ccc", padding: "10px 0"}}
              >
                <a
                  href={`#${id}`}
                  style={{textDecoration: "none", color: "#007BFF"}}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightText(title, query),
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: highlightText(content, query),
                    }}
                  ></p>
                </a>
              </div>
            ))
          ) : (
            <p>Результат не найден</p>
          )}
        </div>
      </div>
    </div>
  );
};
