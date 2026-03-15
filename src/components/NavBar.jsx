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
        <div className="nb-logo">SOURCE<sup>®</sup></div>

        <div className="nb-center">
          <span className="nb-pulse" />
          London, UK &nbsp;&nbsp; {time}
        </div>

        <div className="nb-links">
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
    font-size: 17px;
    font-weight: 900;
    letter-spacing: -0.3px;
    border-right: 1px solid #ddd9d1;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.2s;
    color: #0d0d0d;
  }
  .nb-logo sup { font-size: 9px; vertical-align: super; margin-left: 1px; }
  .nb-logo:hover { opacity: 0.65; }

  .nb-center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    color: #888;
    font-weight: 400;
    letter-spacing: 0;
  }

  .nb-pulse {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00e547;
    animation: nb-pulse-anim 2.5s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes nb-pulse-anim {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.45; transform: scale(0.8); }
  }

  .nb-links {
    display: flex;
    align-items: stretch;
  }

  .nb-link {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 22px;
    font-size: 13.5px;
    font-weight: 500;
    color: #0d0d0d;
    border-left: 1px solid #ddd9d1;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
    white-space: nowrap;
  }
  .nb-link:hover { background: rgba(0,0,0,0.04); }
  .nb-link svg { opacity: 0.45; flex-shrink: 0; }

  .nb-contact {
    display: flex;
    align-items: center;
    padding: 0 32px;
    font-size: 13.5px;
    font-weight: 700;
    background: #00e547;
    color: #0d0d0d;
    border-left: 1px solid #ddd9d1;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.15s;
  }
  .nb-contact:hover { background: #00cf3f; }

  @media (max-width: 768px) {
    .nb-links { display: none; }
    .nb-center { font-size: 12px; justify-content: flex-start; padding-left: 20px; }
  }
`;