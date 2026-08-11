import React from "react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      <div className="footer-text">
        Designed &amp; built by <span>Gayatri Vyavahare</span>
      </div>
      <div className="back-top" onClick={scrollTop}>
        <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, fill: "none", stroke: "currentColor", strokeWidth: 2 }}>
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        Back to top
      </div>
    </footer>
  );
};

export default Footer;
