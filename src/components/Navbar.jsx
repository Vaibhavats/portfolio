import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar" style={scrolled ? { background: "rgba(10,10,15,0.97)" } : {}}>
        <a href="#hero" className="navbar-logo">
          VK<span>.</span>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="mailto:tyagivaibhav2005@gmail.com" className="navbar-cta">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a href="mailto:tyagivaibhav2005@gmail.com" onClick={handleLinkClick}>
          Hire Me →
        </a>
      </div>
    </>
  );
}
