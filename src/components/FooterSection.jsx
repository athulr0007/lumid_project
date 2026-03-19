const footerLinks = {
  Company: ["Home", "About", "Pricing", "Expertise", "News"],
  Resources: ["Portfolio", "Experts", "Careers", "Contact", "404"],
};

export default function FooterSection() {
  return (
    <>
      <style>{css}</style>

      {/* ── Social bar ── */}
      <div className="fo-socials">
        {["LinkedIn", "Instagram", "Facebook", "Twitter (X)", "YouTube"].map((s) => (
          <a key={s} className="fo-social fo-social-link" href="#">
            <span>{s}</span>
          </a>
        ))}
        <div className="fo-contact-info">
          <a href="#">hello@source.com</a>
          <span className="fo-green-dot" />
          <a href="#">(415) 555-8247</a>
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="fo-main">
        <div className="fo-wrapper">

          {/* LEFT */}
          <div className="fo-left">
            <div className="fo-brand-row">
              <h3 className="fo-brand">
                Source — Your source for smart automations.
              </h3>
              <button className="fo-up">
                <span className="fo-up-inner">↑</span>
              </button>
            </div>

            <div className="fo-bottom-block">
              <p className="fo-nl-label">
                Subscribe to our newsletter for Software and AI industry insights
                and company news!
              </p>

              <div className="fo-nl-form">
                <input className="fo-nl-input" placeholder="Email Address *" />
                <button className="fo-nl-btn">
                  <span className="fo-btn-wrap">
                    <span className="fo-btn-text top">Join newsletter</span>
                    <span className="fo-btn-text bottom">Join newsletter</span>
                  </span>
                  <span className="fo-btn-arrow">↗</span>
                </button>
              </div>

              <p className="fo-nl-agree">
                By submitting, you agree to our <a href="#">Terms</a> and{" "}
                <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fo-right">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="fo-col">
                <h4>{heading}</h4>
                <ul>
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#"><span>{l}</span></a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social col — only visible on tablet/mobile as 3rd column */}
            <div className="fo-col fo-social-col">
              <h4>Social</h4>
              <ul>
                {["LinkedIn", "Instagram", "Facebook", "Twitter (X)", "YouTube"].map(s => (
                  <li key={s}><a href="#"><span>{s}</span></a></li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="fo-bottom">
        <span>
          © 2025 Source LLC <span className="fo-bottom-dot" /> All rights reserved.
        </span>

        <div className="fo-bottom-links">
          <a href="#"><span>Privacy Policy</span></a>
          <a href="#"><span>Terms of Service</span></a>
        </div>
      </div>
    </>
  );
}

const css = `

/* ── SOCIAL BAR ── */
.fo-socials {
  display: flex;
  background: #000000;
}

.fo-social {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  padding: 16px 28px;
  width: 208px;
  font-size: 15px;
  font-weight: 400;
  color: #f5f2f2;
  text-decoration: none;
}

.fo-social span {
  position: relative;
  z-index: 2;
}

.fo-social span::before {
  content: "";
  position: absolute;
  left: -6px;
  right: -6px;
  bottom: 0;
  height: 0%;
  background: #fff;
  z-index: -1;
  transition: height 0.3s ease;
}
.fo-social:hover span::before { height: 85%; }
.fo-social:hover span { color: #000; }
.fo-social:hover::before { height: 70%; }

.fo-contact-info {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 20px;
}
.fo-contact-info a {
  position: relative;
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  z-index: 1;
}
.fo-contact-info a::before {
  content: "";
  position: absolute;
  left: -6px;
  right: -6px;
  bottom: 0;
  height: 0%;
  background: #fff;
  z-index: -1;
  transition: height 0.3s ease;
}
.fo-contact-info a:hover::before { height: 85%; }
.fo-contact-info a:hover { color: #000; }

.fo-green-dot {
  width: 8px;
  height: 8px;
  background: #00e547;
}

/* ── MAIN ── */
.fo-main {
  background: #28f067;
  height: 450px;
  padding: 50px 60px;
}

.fo-wrapper {
  display: grid;
  grid-template-columns: 55% 45%;
  height: 100%;
}

/* LEFT */
.fo-left {
  display: flex;
  flex-direction: column;
  padding-right: 60px;
  border-right: 1px solid rgba(0,0,0,0.2);
}

.fo-brand {
  font-size: 42px;
  font-weight: 600;
  line-height: 1.05;
  max-width: 700px;
}

.fo-brand-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 110px;
}

.fo-bottom-block {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* RIGHT */
.fo-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  justify-content: start;
  column-gap: 120px;
  row-gap: 0;
  padding-left: 60px;
}

.fo-col {
  display: flex;
  flex-direction: column;
}

.fo-col h4 {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 18px;
  color: rgba(0,0,0,0.7);
}

.fo-col ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.fo-col li {
  margin-bottom: 14px;
}

.fo-col a {
  font-size: 22px;
  font-weight: 550;
  color: #0d0d0d;
  text-decoration: none;
}

/* Social col hidden on desktop */
.fo-social-col {
  display: none;
}

/* INPUT */
.fo-nl-form { display: flex; }

.fo-nl-input {
  flex: 1;
  height: 60px;
  padding: 0 16px;
  font-size: 14px;
  color: #ececec;
  background: transparent;
  border: 1px solid rgba(163,163,163,0.8);
}

/* BUTTON */
.fo-nl-btn {
  height: 60px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 260px;
  font-size: 16px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.fo-btn-wrap {
  position: relative;
  height: 20px;
  overflow: hidden;
  display: inline-block;
}

.fo-btn-text {
  display: block;
  transition: transform 0.3s ease;
  line-height: 20px;
}

.fo-btn-text.top { transform: translateY(0); }

.fo-nl-btn::before {
  content: "";
  position: absolute;
  bottom: 0;
  height: 0%;
  width: 100%;
  background: #fff;
  transition: height 0.3s;
}

.fo-btn-text.bottom {
  position: absolute;
  left: 0;
  top: 100%;
}

.fo-nl-btn:hover .fo-btn-text.top { transform: translateY(-100%); }
.fo-nl-btn:hover .fo-btn-text.bottom { transform: translateY(-100%); }

.fo-btn-arrow { margin-left: 10px; }

.fo-nl-label { font-size: 16px; margin-bottom: 6px; }

.fo-btn-text, .fo-btn-arrow { position: relative; z-index: 2; }

.fo-nl-agree {
  font-size: 12px;
  max-width: 640px;
  line-height: 1.4;
}

/* UNDERLINE */
.fo-col a,
.fo-bottom-links a {
  position: relative;
  text-decoration: none;
}

.fo-col a::after,
.fo-bottom-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 1.5px;
  background: #0d0d0d;
  transition: width 0.25s ease;
}

.fo-col a:hover::after,
.fo-bottom-links a:hover::after { width: 100%; }

/* ARROW */
.fo-up {
  width: 44px;
  height: 44px;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}

.fo-up-inner {
  color: #fff;
  transition: transform 0.3s;
}

.fo-up:hover .fo-up-inner { transform: translateY(-100%) rotate(-45deg); }

/* ── BOTTOM BAR ── */
.fo-bottom {
  background: #0d0d0d;
  color: rgba(255,255,255,0.6);
  padding: 16px 60px;
  display: flex;
  justify-content: flex-start;
  gap: 550px;
  align-items: center;
}

.fo-bottom-dot {
  width: 8px;
  height: 8px;
  background: #00e547;
  display: inline-block;
  margin: 0 8px;
}

.fo-bottom-links {
  display: flex;
  gap: 28px;
}

.fo-bottom-links a {
  position: relative;
  display: inline-block;
  color: rgb(255,255,255);
  text-decoration: none;
  z-index: 1;
  font-size: 14px;
}

.fo-bottom-links a:last-child { margin-left: 450px; }

.fo-bottom-links a::before {
  content: "";
  position: absolute;
  left: -6px;
  right: -6px;
  bottom: 0;
  height: 0%;
  background: #fff;
  z-index: -1;
  transition: height 0.3s ease;
}

.fo-bottom-links a:hover::before { height: 85%; }
.fo-bottom-links a:hover { color: #000; }

/* ══════════════════════════════════════
   TABLET (641px – 1100px)
══════════════════════════════════════ */
@media (min-width: 641px) and (max-width: 1100px) {

  /* Social bar: hide social links, show phone + email only */
  .fo-socials {
    padding: 14px 28px;
    justify-content: space-between;
  }

  .fo-social-link { display: none; }

  .fo-contact-info {
    margin: 0;
    width: 100%;
    justify-content: space-between;
    margin-right: 0;
  }

  /* Main */
  .fo-main {
    height: auto;
    padding: 32px 28px 40px;
  }

  .fo-wrapper {
    grid-template-columns: 1fr;
    height: auto;
    gap: 32px;
  }

  .fo-left {
    padding-right: 0;
    border-right: none;
  }

  .fo-brand-row { margin-bottom: 24px; }
  .fo-brand { font-size: 32px; }

  /* Newsletter stacked */
  .fo-nl-form { flex-direction: column; }
  .fo-nl-input { width: 100%; box-sizing: border-box; }
  .fo-nl-btn { width: 100%; min-width: unset; box-sizing: border-box; }

  /* Right: 3 columns with social */
  .fo-right {
    padding-left: 0;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 24px;
  }

  .fo-social-col { display: flex; }

  .fo-col a { font-size: 18px; }

  /* Bottom */
  .fo-bottom {
    padding: 14px 28px;
    gap: 0;
    justify-content: space-between;
  }

  .fo-bottom-links a:last-child { margin-left: 0; }
  .fo-bottom-links { gap: 20px; }
}

/* ══════════════════════════════════════
   MOBILE (≤ 640px)
══════════════════════════════════════ */
@media (max-width: 640px) {

  /* Social bar: hide social links, show phone + email only */
  .fo-socials {
    padding: 14px 16px;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .fo-social-link { display: none; }

  .fo-contact-info {
    margin: 0;
    width: 100%;
    justify-content: space-between;
    margin-right: 0;
  }

  .fo-contact-info a { font-size: 13px; }

  /* Main */
  .fo-main {
    height: auto;
    padding: 24px 16px 36px;
  }

  .fo-wrapper {
    grid-template-columns: 1fr;
    height: auto;
    gap: 28px;
  }

  .fo-left {
    padding-right: 0;
    border-right: none;
  }

  .fo-brand-row { margin-bottom: 20px; }
  .fo-brand { font-size: 24px; line-height: 1.1; }
  .fo-up { width: 40px; height: 40px; }
  .fo-nl-label { font-size: 14px; }

  /* Newsletter stacked */
  .fo-nl-form { flex-direction: column; }
  .fo-nl-input { width: 100%; box-sizing: border-box; }
  .fo-nl-btn { width: 100%; min-width: unset; box-sizing: border-box; padding: 0 20px; }
  .fo-nl-agree { font-size: 11px; }

  /* Right: 3 columns with social */
  .fo-right {
    padding-left: 0;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12px;
  }

  .fo-social-col { display: flex; }

  .fo-col a { font-size: 16px; }
  .fo-col h4 { font-size: 11px; }
  .fo-col li { margin-bottom: 10px; }

  /* Bottom */
  .fo-bottom {
    padding: 14px 16px;
    gap: 0;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 8px;
  }

  .fo-bottom-links a:last-child { margin-left: 0; }
  .fo-bottom-links { gap: 16px; }
  .fo-bottom-links a { font-size: 13px; }
}
`;