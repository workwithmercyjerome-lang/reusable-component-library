import { useState } from "react";
import "./Navbar.css";

function Navbar({ logo = "Brand", links = [], actionText = "Get Started", mobile = false }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header${mobile ? " force-mobile" : ""}`}>
      <div className="nav-wrap">
        <a className="brand" href="#" onClick={(e) => e.preventDefault()}>
          <span className="brand-name">{logo}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#" className="btn btn-primary btn-small" onClick={(e) => e.preventDefault()}>
            {actionText}
          </a>

          <button
            className={`hamburger${open ? " open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">
        {links.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;