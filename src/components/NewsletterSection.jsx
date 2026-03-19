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
    grid-template-columns: 180px 1fr 900px;
    align-items: center;
    column-gap: 48px;
    padding: 63px 80px;
    border-top: 1px solid #1a1a1a;
  }

  .nl-label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 25px;
    font-weight: 600;
    white-space: nowrap;
  }

  .nl-green-sq {
    width: 20px;
    height: 20px;
    background: #00e547;
  }

  .nl-desc {
    font-size: 14px;
    color: rgb(255, 253, 253);
    line-height: 1.6;
    max-width: 420px;
    margin: 0;
    justify-self: end;
    margin-left: 170px;
  }

  .nl-form {
    display: flex;
    justify-content: flex-end;
  }

  .nl-input {
    height: 69px;
    width: 600px;
    padding: 0 18px;
    background: transparent;
    border: 1px solid rgba(255, 254, 254, 0.79);
    color: #fff;
    font-size: 17px;
    outline: none;
  }

  .nl-input::placeholder {
    color: rgba(255, 255, 255, 0.87);
  }

  .nl-input:focus {
    border-color: #00e547;
  }

  .nl-btn {
    height: 69px;
    width: 270px;
    padding: 0 26px;
    background: #00e547;
    color: #0d0d0d;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
     justify-content: space-between; /* key change */
  }

  .nl-btn svg {
    transition: transform 0.2s ease;
  }

  .nl-btn:hover svg {
    transform: translate(3px, -3px);
  }

  /* tablet */
 /* ── TABLET (641px – 1100px) ── */
@media (max-width: 1100px) {
  .nl-wrap {
    grid-template-columns: 1fr;
    row-gap: 16px;
    padding: 40px 28px;
  }

  .nl-desc {
    margin-left: 0;
    justify-self: start;
    max-width: 100%;
  }

  .nl-form {
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
  }

  .nl-input {
    width: 100%;
    box-sizing: border-box;
  }

  .nl-btn {
    width: 100%;
    box-sizing: border-box;
  }
}

/* ── MOBILE (≤ 640px) ── */
@media (max-width: 640px) {
  .nl-wrap {
    padding: 28px 20px;
    row-gap: 14px;
  }

  .nl-label {
    font-size: 20px;
  }

  .nl-desc {
    font-size: 13px;
    line-height: 1.55;
  }

  .nl-form {
    flex-direction: column;
    width: 100%;
  }

  .nl-input {
    width: 100%;
    height: 56px;
    font-size: 15px;
    box-sizing: border-box;
  }

  .nl-btn {
    width: 100%;
    height: 56px;
    font-size: 15px;
    box-sizing: border-box;
  }
}
`;