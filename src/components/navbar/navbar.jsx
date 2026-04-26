import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact Us" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className={`navbar${isMenuOpen ? " navbar--open" : ""}`}>
      <div className="navbar__inner">
        <Link className="navbar__brand" to="/" aria-label="Bendruya Travel">
          <img
            className="navbar__brand-logo"
            src="/logo.png"
            alt=""
            aria-hidden="true"
          />
          <span className="navbar__sr-only">Bendruya Travel</span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="navbar__toggle-icon" aria-hidden="true">
            <span className="navbar__toggle-line" />
            <span className="navbar__toggle-line" />
            <span className="navbar__toggle-line" />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__links${isMenuOpen ? " navbar__links--open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="navbar__menu-brand" aria-hidden="true">
            <img className="navbar__menu-brand-logo" src="/logo.png" alt="" />
          </div>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar__link${isActive ? " navbar__link--active" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
