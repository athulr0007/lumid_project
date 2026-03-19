export default function GetStartedSection() {
  return (
    <>
      <style>{css}</style>
      <a className="gs-banner" href="#">
        {/* Black curtain that slides up on hover */}
        <div className="gs-curtain" />

        {/* Content sits above the curtain */}
        <span className="gs-text">Get started</span>
        <svg
          className="gs-arrow"
          width="22" height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M4 18L18 4M18 4H7M18 4V15"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}

const css = `
  /* ── Banner ──
     Exact Framer bg: rgb(91,251,122) = #5bfb7a
     Position relative so curtain can overlay                 */
  .gs-banner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #5bfb7a;
    padding: 40px 60px;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;
    margin-top: 89px;
  }

  /* ── Black curtain ──
     Sits at bottom (translateY 100% = hidden below)
     On hover slides up to translateY 0% covering the green  */
  .gs-curtain {
    position: absolute;
    inset: 0;
    background: rgb(23, 20, 18);
    transform: translateY(100%);
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 0;
  }
  .gs-banner:hover .gs-curtain {
    transform: translateY(0%);
  }

  /* Text and arrow sit above the curtain */
  .gs-text {
    position: relative;
    z-index: 1;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: rgb(23, 20, 18);
    transition: color 0.2s ease 0.1s;
  }
  .gs-banner:hover .gs-text {
    color: #ffffff;
  }

  .gs-arrow {
    position: relative;
    z-index: 1;
    color: rgb(23, 20, 18);
    flex-shrink: 0;
    transition: color 0.2s ease 0.1s,
                transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .gs-banner:hover .gs-arrow {
    color: #ffffff;
    transform: translate(3px, -3px);
  }

  @media (min-width: 641px) and (max-width: 1024px) {
  .gs-banner {
    padding: 28px 32px;
    margin-top: 0;
  }

  .gs-text {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .gs-banner {
    padding: 20px 20px;
    margin-top: 0;
  }

  .gs-text {
    font-size: 17px;
    font-weight: 700;
  }

  .gs-arrow {
    width: 20px;
    height: 20px;
  }
}
`;