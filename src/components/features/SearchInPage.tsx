import {Search} from "@mui/icons-material";
import {Modal} from "antd";
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

    details.forEach((detail) => {
      const summary = detail.querySelector("summary");
      if (!summary) return;

      const id = summary.getAttribute("id");
      if (!id) return;

      const title = summary.textContent || "";
      const content =
        Array.from(detail.querySelectorAll<HTMLLIElement | HTMLParagraphElement>("p, li"))
          .map((el) => el.textContent || "")
          .join(" ") || "";

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

  const handleLinkClick = () => {
    closeModal();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={closeModal}
      footer={null}
      width={800}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Найти..."
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
                onClick={handleLinkClick}
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
          <p>Ничего не найдено.</p>
        )}
      </div>
    </Modal>
  );
};
