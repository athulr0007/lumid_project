export default function NewsletterSection() {
  return (
    <>
      <style>{css}</style>
      <div className="nl-wrap">
        <div className="nl-label">
          <div className="nl-green-sq" />
          Newsletter
        </div>
        <p className="nl-desc">
          Stay in the loop with case studies and actionable tips sent straight to you.
        </p>
        <div className="nl-form">
          <input className="nl-input" type="email" placeholder="Email Address *" />
          <button className="nl-btn">
            Join newsletter
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H5M13 3v8"
                stroke="#0d0d0d" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

const css = `
  .nl-wrap {
    background: #0d0d0d;
    color: #fff;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 40px;
    padding: 28px 60px;
    border-top: 1px solid #222;
  }
  .nl-label {
    display: flex; align-items: center; gap: 10px;
    font-size: 16px; font-weight: 700; white-space: nowrap;
  }
  .nl-green-sq {
    width: 10px; height: 10px;
    background: #00e547; flex-shrink: 0;
  }
  .nl-desc {
    font-size: 14px; color: rgba(255,255,255,0.5);
    line-height: 1.55; margin: 0;
  }
  .nl-form { display: flex; }
  .nl-input {
    padding: 14px 18px; min-width: 280px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
    color: #fff; font-size: 14px;
    font-family: inherit; outline: none;
    transition: border-color 0.2s;
  }
  .nl-input::placeholder { color: rgba(255,255,255,0.35); }
  .nl-input:focus { border-color: #00e547; }
  .nl-btn {
    background: #00e547; color: #0d0d0d;
    padding: 14px 22px; font-size: 14px; font-weight: 700;
    border: none; cursor: pointer; font-family: inherit;
    display: flex; align-items: center; gap: 9px;
    transition: background 0.18s; white-space: nowrap;
  }
  .nl-btn:hover { background: #00cf3f; }
  .nl-btn svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .nl-btn:hover svg { transform: translate(2px,-2px); }

  @media (max-width: 1100px) {
    .nl-wrap { grid-template-columns: 1fr; gap: 20px; padding: 32px; }
  }
  @media (max-width: 640px) {
    .nl-wrap { padding: 28px 24px; }
    .nl-input { min-width: 0; flex: 1; }
  }
`;