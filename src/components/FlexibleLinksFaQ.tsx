import React from "react";
interface FlexibleLinksProps {
  children: React.ReactNode[];
}

export const FlexibleLinks: React.FC<FlexibleLinksProps> = ({children}) => {
  return <ul className="flexible-links">{children}</ul>;
};
