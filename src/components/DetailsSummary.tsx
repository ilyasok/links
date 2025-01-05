import {Tooltip, message} from "antd";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
interface DetailsSummaryProps {
  title: string;
  children: ReactNode;
}

const SpoilerContext = createContext(false);
export const useSpoiler = () => useContext(SpoilerContext);
export let isCopyEnabled = false;
export const enableCopyAnchors = () => {
  isCopyEnabled = true;
};

export const generateAnchorId = () => {
  const containers = Array.from(document.querySelectorAll(".faq-content"));
  let generatedAnchor = "";
  containers.forEach((container, blockIndex) => {
    const summaries = Array.from(container.querySelectorAll(".faq-summary"));
    summaries.forEach((summary, summaryIndex) => {
      generatedAnchor = `${blockIndex + 1}.${summaryIndex + 1}`;
      if (!summary.hasAttribute("id")) {
        summary.setAttribute("id", generatedAnchor);
      }

      if (window.location.hash === `#${generatedAnchor}`) {
        const details = summary.closest("details");
        if (details && !details.hasAttribute("data-anchor-processed")) {
          details.setAttribute("open", "true");
          details.setAttribute("data-anchor-processed", "true");
          setTimeout(() => {
            const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

            const padding = 24;

            const y =
              summary.getBoundingClientRect().top +
              window.pageYOffset -
              headerHeight -
              padding;
            window.scrollTo({top: y, behavior: "smooth"});
          }, 100);
        }
      }
    });
  });

  return generatedAnchor;
};

const DetailsSummary: React.FC<DetailsSummaryProps> = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const detailsRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (detailsRef.current) {
      const observer = new MutationObserver(() => {
        setIsOpen(detailsRef.current?.open || false);
      });
      observer.observe(detailsRef.current, {attributes: true, attributeFilter: ["open"]});

      return () => observer.disconnect();
    }
  }, []);

  const handleToggle = (event: React.SyntheticEvent) => {
    const details = event.currentTarget as HTMLDetailsElement;
    if (details.hasAttribute("data-anchor-processed")) {
      details.removeAttribute("data-anchor-processed");
    }
  };

  const handleCopyAnchor = () => {
    if (!isCopyEnabled) {
      message.warning(
        "Копирование ссылок на пункты временно недоступно, дождитесь полной загрузки страницы"
      );

      return;
    }

    const anchorId = detailsRef.current?.querySelector(".faq-summary")?.id ?? "";

    const anchor = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    navigator.clipboard.writeText(anchor);
    message.success(`Ссылка на пункт ${anchorId} скопирована в буфер обмена`);
  };

  const anchorId = detailsRef.current?.querySelector(".faq-summary")?.id ?? "";

  return (
    <details
      ref={detailsRef}
      open={isOpen}
      onToggle={handleToggle}
    >
      <summary className="faq-summary">
        <div className="faq-summary-left">
          <span style={{fontFamily: "JetBrains Mono, monospace"}}>
            {isOpen ? "-" : "+"}
          </span>
          <h3>{`${anchorId ? `${anchorId}. ` : ""}${title}`}</h3>
        </div>
        <Tooltip title="Скопировать ссылку на пункт">
          <button
            onClick={handleCopyAnchor}
            className="copy_button"
            style={{
              width: "20px",
              height: "20px",
              flex: "none",
              filter: !isCopyEnabled ? "saturate(0%)" : "none",
              opacity: !isCopyEnabled ? 0.5 : 1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              width="20px"
              height="20px"
            >
              <path d="M684-80q-48.33 0-82.17-33.83Q568-147.67 568-196q0-7.33 4.33-32l-293-171.33q-16.18 16.56-37.42 25.94Q220.67-364 196-364q-48.33 0-82.17-33.83Q80-431.67 80-480t33.83-82.17Q147.67-596 196-596q24 0 45 9.03T278-562l294.33-170q-2-7.67-3.16-15.5Q568-755.33 568-764q0-48.33 33.83-82.17Q635.67-880 684-880t82.17 33.83Q800-812.33 800-764t-33.83 82.17Q732.33-648 684-648q-23.52 0-44.09-8.83-20.58-8.84-36.58-23.84L307-513.33q2.67 7.66 3.83 16.16 1.17 8.5 1.17 16.84 0 8.33-.83 15.5-.84 7.16-2.84 14.83L604-280q16-15 36.4-23.5 20.39-8.5 43.7-8.5 48.57 0 82.23 33.83Q800-244.33 800-196t-33.83 82.17Q732.33-80 684-80Zm.02-66.67q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm-488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16Zm488-284q20.98 0 35.15-14.19 14.16-14.19 14.16-35.16 0-20.98-14.19-35.15-14.19-14.16-35.16-14.16-20.98 0-35.15 14.19-14.16 14.19-14.16 35.16 0 20.98 14.19 35.15 14.19 14.16 35.16 14.16ZM684-196ZM196-480Zm488-284Z" />
            </svg>
          </button>
        </Tooltip>
      </summary>
      <SpoilerContext.Provider value={isOpen}>
        <section className="faq-section">{children}</section>
      </SpoilerContext.Provider>
    </details>
  );
};
export default DetailsSummary;
