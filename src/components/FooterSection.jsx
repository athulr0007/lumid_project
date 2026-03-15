const footerLinks = {
  Company:   ["Home", "About", "Pricing", "Expertise", "News"],
  Resources: ["Portfolio", "Experts", "Careers", "Contact", "404"],
};

export default function FooterSection() {
  return (
    <>
      <style>{css}</style>

      {/* ── Social bar ── */}
      <div className="fo-socials">
        {["LinkedIn", "Instagram", "Facebook", "Twitter (X)", "YouTube"].map((s) => (
          <a key={s} className="fo-social" href="#">{s}</a>
        ))}
        <div className="fo-contact-info">
          <a href="mailto:hello@source.com">hello@source.com</a>
          <span className="fo-green-dot" />
          <a href="tel:+14155558247">(415) 555-8247</a>
        </div>
      </div>

      {/* ── Green main area ── */}
      <div className="fo-main">
        <div className="fo-grid">
          {/* Brand + newsletter */}
          <div>
            <div className="fo-brand-row">
              <h3 className="fo-brand">
                Source — Your source for smart automations.
              </h3>
              <button
                className="fo-up"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
              >
                ↑
              </button>
            </div>

            <p className="fo-nl-label">
              Subscribe to our newsletter for Software and AI industry insights
              and company news!
            </p>
            <div className="fo-nl-form">
              <input
                className="fo-nl-input"
                type="email"
                placeholder="Email Address *"
              />
              <button className="fo-nl-btn">Join newsletter ↗</button>
            </div>
            <p className="fo-nl-agree">
              By submitting, you agree to our <a href="#">Terms</a> and{" "}
              <a href="#">Privacy Policy</a> and give your permission to process
              your personal data.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="fo-col">
              <h4 className="fo-col-head">{heading}</h4>
              <ul className="fo-col-list">
                {links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="fo-bottom">
        <span>
          © 2025 Source<sup>®</sup> LLC{" "}
          <span className="fo-bottom-dot" />{" "}
          All rights reserved.
        </span>
        <div className="fo-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </>
  );
}

const css = `
  /* ── Social bar ── */
  .fo-socials {
    display: flex; align-items: stretch;
    border-top: 1px solid #ddd9d1;
    border-bottom: 1px solid #ddd9d1;
    background: #f5f2ec;
  }
  .fo-social {
    padding: 16px 28px; font-size: 13px; font-weight: 500;
    color: #0d0d0d; text-decoration: none;
    border-right: 1px solid #ddd9d1;
    display: flex; align-items: center;
    transition: background 0.18s;
  }
  .fo-social:hover { background: rgba(0,0,0,0.04); }

  .fo-contact-info {
    margin-left: auto;
    display: flex; align-items: center; gap: 12px;
    padding: 16px 28px; font-size: 13px; font-weight: 500;
    border-left: 1px solid #ddd9d1; color: #0d0d0d;
  }
  .fo-contact-info a {
    color: #0d0d0d; text-decoration: none;
    transition: opacity 0.2s;
  }
  .fo-contact-info a:hover { opacity: 0.6; }
  .fo-green-dot {
    width: 8px; height: 8px;
    background: #00e547; display: inline-block; flex-shrink: 0;
  }

  /* ── Green area ── */
  .fo-main { background: #00e547; padding: 56px 60px; }
  .fo-grid {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 80px;
  }
  .fo-brand-row {
    display: flex; align-items: flex-start;
    justify-content: space-between; margin-bottom: 32px;
  }
  .fo-brand {
    font-size: clamp(26px, 2.8vw, 38px);
    font-weight: 900; letter-spacing: -1.2px;
    line-height: 1.1; max-width: 480px;
    margin: 0; color: #0d0d0d;
  }
  .fo-up {
    width: 44px; height: 44px;
    background: #0d0d0d; color: #fff;
    border: none; cursor: pointer;
    font-size: 18px; font-family: inherit;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; transition: background 0.18s;
  }
  .fo-up:hover { background: #1a1a1a; }

  .fo-nl-label {
    font-size: 13px; color: rgba(0,0,0,0.55);
    margin: 0 0 12px; line-height: 1.5;
  }
  .fo-nl-form { display: flex; }
  .fo-nl-input {
    flex: 1; max-width: 260px;
    padding: 12px 16px;
    background: rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.15);
    font-size: 13px; color: #0d0d0d;
    font-family: inherit; outline: none;
    transition: border-color 0.2s;
  }
  .fo-nl-input::placeholder { color: rgba(0,0,0,0.4); }
  .fo-nl-input:focus { border-color: #0d0d0d; }
  .fo-nl-btn {
    background: #0d0d0d; color: #fff;
    padding: 12px 18px; font-size: 13px; font-weight: 700;
    border: none; cursor: pointer; font-family: inherit;
    transition: background 0.18s;
  }
  .fo-nl-btn:hover { background: #1a1a1a; }

  .fo-nl-agree {
    font-size: 11px; color: rgba(0,0,0,0.45);
    margin-top: 8px; line-height: 1.5;
  }
  .fo-nl-agree a { color: rgba(0,0,0,0.6); font-weight: 600; }

  /* Link cols */
  .fo-col-head {
    font-size: 14px; font-weight: 700;
    margin: 0 0 16px; color: #0d0d0d;
  }
  .fo-col-list { list-style: none; padding: 0; margin: 0; }
  .fo-col-list li { margin-bottom: 10px; }
  .fo-col-list a {
    font-size: 14px; color: rgba(0,0,0,0.65);
    text-decoration: none; transition: color 0.18s;
  }
  .fo-col-list a:hover { color: #0d0d0d; }

  /* ── Bottom bar ── */
  .fo-bottom {
    background: #0d0d0d; color: rgba(255,255,255,0.6);
    padding: 16px 60px;
    display: flex; align-items: center; justify-content: space-between;
    font-size: 13px;
  }
  .fo-bottom sup { font-size: 60%; vertical-align: super; }
  .fo-bottom-dot {
    display: inline-block; width: 8px; height: 8px;
    background: #00e547; margin: 0 8px; vertical-align: middle;
  }
  .fo-bottom-links { display: flex; }
  .fo-bottom-links a {
    color: rgba(255,255,255,0.45); margin-left: 28px;
    text-decoration: none; transition: color 0.18s;
  }
  .fo-bottom-links a:hover { color: #fff; }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .fo-main { padding: 40px 32px; }
    .fo-grid { grid-template-columns: 1fr; gap: 40px; }
    .fo-bottom { padding: 16px 32px; }
    .fo-socials { flex-wrap: wrap; }
  }
  @media (max-width: 640px) {
    .fo-main { padding: 36px 24px; }
    .fo-bottom {
      flex-direction: column; gap: 12px;
      padding: 16px 24px; text-align: center;
    }
    .fo-contact-info { display: none; }
  }
`;