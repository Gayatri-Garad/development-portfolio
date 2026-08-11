import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="nav_bar">
      <div className="logo">gayatri.dev</div>
      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div className={`nav_links ${open ? "active" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav_items" onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
