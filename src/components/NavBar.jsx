import { useState, useEffect } from "react";

const navLinks = [
  "About us",
  "Portfolio",
  "Expertise",
  "Pricing",
  "Experts",
  "Careers",
  "News",
  "Contact",
];

export default function NavBar() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      setTime(`${((h % 12) || 12)}:${m} ${ampm}`);
    };
    update();
    const id = setInterval(update, 10000);
    return () => clearInterval(id);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{css}</style>
      <nav className="nb-nav">
        {/* Left Side: Logo */}
        <div className="nb-logo">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: "10px" }}>
            <path d="M 0 13 L 5 4 L 9 4 L 4 13 Z M 7 13 L 12 4 L 16 4 L 11 13 Z" />
          </svg>
          SOURCE<sup>®</sup>
        </div>

        <div className="nb-spacer" />

        {/* Desktop Right Side */}
        <div className="nb-right-group">
          <div className="nb-location">
            London, UK
            <span className="nb-pulse-square" />
            {time}
          </div>

          <div className="nb-link">
            Company
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="nb-link">
            Portfolio
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="nb-link">
            Expertise
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="nb-contact">Contact</div>
        </div>

        {/* Hamburger — mobile/tablet only */}
        <button
          className="nb-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            /* X icon (crossed lines) */
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 8h20M4 14h20M4 20h20" stroke="#0d0d0d" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M6 6l16 16M22 6L6 22" stroke="#0d0d0d" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Hamburger lines */
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4 8h20M4 14h20M4 20h20" stroke="#0d0d0d" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile/Tablet Drawer ── */}
      <div className={`nb-drawer ${menuOpen ? "nb-drawer--open" : ""}`}>
        {/* Nav links */}
        <div className="nb-drawer-links">
          {navLinks.map(link => (
            <a key={link} className="nb-drawer-item" href="#">
              <span>{link}</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4l5 5-5 5" stroke="#0d0d0d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom contact info */}
        <div className="nb-drawer-footer">
          <a href="tel:4155558247" className="nb-drawer-contact">(415) 555-8247</a>
          <a href="mailto:hello@source.com" className="nb-drawer-contact">hello@source.com</a>
          <div className="nb-drawer-socials">
            {[["LI","#"],["IG","#"],["FB","#"],["X","#"],["YT","#"]].map(([label, href]) => (
              <a key={label} href={href} className="nb-drawer-social">{label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="nb-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

const css = `
  .nb-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    height: 64px;
    background: #f5f2ec;
    border-bottom: 1px solid #ddd9d1;
    display: flex;
    align-items: stretch;
  }

  .nb-logo {
    display: flex;
    align-items: center;
    padding: 0 28px;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: -0.02em;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.2s;
    color: #0d0d0d;
  }
  .nb-logo sup {
    font-size: 9px;
    vertical-align: super;
    margin-left: 2px;
  }
  .nb-logo:hover { opacity: 0.65; }

  .nb-spacer { flex: 1; }

  .nb-right-group {
    display: flex;
    align-items: stretch;
  }

  .nb-location {
    display: flex;
    align-items: center;
    padding: 0 32px;
    font-size: 13.5px;
    font-weight: 500;
    color: #111111;
    gap: 12px;
    white-space: nowrap;
  }

  .nb-pulse-square {
    display: block;
    width: 10px;
    height: 10px;
    background: #00e547;
    border-radius: 1px;
    flex-shrink: 0;
  }

  .nb-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 28px;
    font-size: 13.5px;
    font-weight: 500;
    color: #111111;
    border-left: 1px solid #ddd9d1;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
    white-space: nowrap;
    width: 220px;
  }
  .nb-link:hover { background: rgba(0,0,0,0.03); }
  .nb-link svg { opacity: 0.5; flex-shrink: 0; }

  .nb-contact {
    display: flex;
    align-items: center;
    padding: 0 32px;
    font-size: 16px;
    font-weight: 550;
    background: #26ef66;
    color: #0d0d0d;
    border-left: 1px solid #ddd9d1;
    cursor: pointer;
    white-space: nowrap;
    transition: filter 0.15s;
    width: 250px;
  }
  .nb-contact:hover { filter: brightness(0.95); }

  /* Hamburger — hidden on desktop */
  .nb-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: none;
    border: none;
    border-left: 1px solid #ddd9d1;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0;
  }

  /* ── Drawer ── */
  .nb-drawer {
    display: none;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f5f2ec;
    z-index: 999;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .nb-drawer--open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .nb-overlay {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 998;
    background: transparent;
  }

  /* Drawer links */
  .nb-drawer-links {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ddd9d1;
  }

  .nb-drawer-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    border-bottom: 1px solid #ddd9d1;
    font-size: 18px;
    font-weight: 500;
    color: #0d0d0d;
    text-decoration: none;
    transition: background 0.15s;
  }
  .nb-drawer-item:hover { background: rgba(0,0,0,0.03); }
  .nb-drawer-item:last-child { border-bottom: none; }

  /* Drawer footer */
  .nb-drawer-footer {
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .nb-drawer-contact {
    font-size: 16px;
    font-weight: 500;
    color: #0d0d0d;
    text-decoration: none;
    display: block;
  }
  .nb-drawer-contact:hover { opacity: 0.6; }

  .nb-drawer-socials {
    display: flex;
    gap: 16px;
    margin-top: 8px;
  }

  .nb-drawer-social {
    font-size: 14px;
    font-weight: 600;
    color: #0d0d0d;
    text-decoration: none;
    letter-spacing: 0.02em;
  }
  .nb-drawer-social:hover { opacity: 0.6; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1100px) {
    .nb-location { display: none; }
  }

  @media (max-width: 768px) {
    /* Hide desktop nav, show hamburger */
    .nb-right-group { display: none; }
    .nb-hamburger { display: flex; }
    .nb-drawer { display: flex; }
    .nb-overlay { display: block; }
  }
`;