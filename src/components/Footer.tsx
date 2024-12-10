import React from "react";

interface FooterProps {
  title: string;
  initialYear: number;
}

const Footer: React.FC<FooterProps> = ({title, initialYear}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        {title} &copy; {initialYear} - {currentYear} {"// "}
        <a href="https://t.me/m1sh3r">m1sh3r</a>
      </p>
    </footer>
  );
};
export default Footer;
