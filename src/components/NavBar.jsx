import { useState, useEffect } from "react";

export default function NavBar() {
  const [time, setTime] = useState("");

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

  return (
    <>
      <style>{css}</style>
      <nav className="nb-nav">
        {/* Left Side: Logo */}
        <div className="nb-logo">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '10px' }}>
            <path d="M 0 13 L 5 4 L 9 4 L 4 13 Z M 7 13 L 12 4 L 16 4 L 11 13 Z" />
          </svg>
          SOURCE<sup>®</sup>
        </div>

        {/* Huge empty expanse pushing items apart */}
        <div className="nb-spacer" />

        {/* Right Side: Grouped Navigation Elements */}
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
      </nav>
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

  .nb-spacer {
    flex: 1; /* Pushes the right-group flush to the right */
  }

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

  /* Matching the exact green square from reference */
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
  .nb-contact:hover { 
    filter: brightness(0.95); 
  }

  @media (max-width: 1100px) {
    .nb-location { display: none; }
  }

  @media (max-width: 768px) {
    .nb-link { display: none; }
    /* Let the contact button stick around or modify as needed */
  }
`;