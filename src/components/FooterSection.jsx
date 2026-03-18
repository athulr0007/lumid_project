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
          <a key={s} className="fo-social" href="#">
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
  // border-top: 1px solid #ddd9d1;
  // border-bottom: 1px solid #ddd9d1;
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
  // border-right: 1px solid #ddd9d1;
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
.fo-social:hover span::before {
  height: 85%;
}
  /* text color change */
.fo-social:hover span {
  color: #000;
}
.fo-social:hover::before { height: 70%; }

.fo-contact-info {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 0;                 /* remove extra padding */
  margin-right: 20px;          /* exact gap from edge */
}
.fo-contact-info a {
  position: relative;
  flex-direction:end;
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  z-index: 1; 
}
  /* curtain */
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
  .fo-contact-info a:hover::before {
  height: 85%;
}
  .fo-contact-info a:hover {
  color: #000;
}

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
  font-size: 42px;        /* bigger like design */
  font-weight: 600;
  line-height: 1.05;
  max-width: 700px;
}

.fo-brand-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 110px;   /* critical spacing like reference */
}

.fo-bottom-block {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* RIGHT */

/* RIGHT SIDE FIX */
.fo-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;        /* stop vertical stretching */
  justify-content: start;
  column-gap: 120px;           /* space between Company & Resources */
  row-gap: 0;
  padding-left: 60px;
}

/* column blocks */
.fo-col {
  display: flex;
  flex-direction: column;
}

/* headings */
.fo-col h4 {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 18px;
  color: rgba(0,0,0,0.7);
}

/* list reset */
.fo-col ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

/* items */
.fo-col li {
  margin-bottom: 14px;
}

/* links */
.fo-col a {
  font-size: 22px;
  font-weight: 550;
  color: #0d0d0d;
  text-decoration: none;
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
  border: 1px solid rgba(163, 163, 163, 0.8);
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
/* wrapper for rolling */
.fo-btn-wrap {
  position: relative;
  height: 20px;
  overflow: hidden;
  display: inline-block;
}
/* text layers */
.fo-btn-text {
  display: block;
  transition: transform 0.3s ease;
  line-height: 20px;
}
/* initial positions */
.fo-btn-text.top {
  transform: translateY(0);
}
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
  /* hover roll */
.fo-nl-btn:hover .fo-btn-text.top {
  transform: translateY(-100%);
}

.fo-nl-btn:hover .fo-btn-text.bottom {
  transform: translateY(-100%);
}

/* arrow stays static */
.fo-btn-arrow {
  margin-left: 10px;
}
/* TEXT */
.fo-nl-label {
  font-size: 16px;
  margin-bottom: 6px;
}
  /* INPUT + BUTTON */
.fo-nl-form {
  display: flex;
  align-items: stretch;
}


.fo-btn-text, .fo-btn-arrow {
  position: relative;
  z-index: 2;
}
  /* agreement text */
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

/* UNDERLINE */
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
/* HOVER */
.fo-col a:hover::after,
.fo-bottom-links a:hover::after {
  width: 100%;
}

/* ARROW */
.fo-up {
  width: 44px;
  height: 44px;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.fo-up-inner {
  color: #fff;
  transition: transform 0.3s;
}

.fo-up:hover .fo-up-inner {
  transform: translateY(-100%) rotate(-45deg);
}

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
  color: rgb(255, 255, 255);
  text-decoration: none;
  z-index: 1;
  font-size: 14px;
  
}
  .fo-bottom-links a:last-child {
  margin-left: 450px;   /* increase as needed */
}
/* curtain */
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
.fo-bottom-links a:hover::before {
  height: 85%;
}

.fo-bottom-links a:hover {
  color: #000;   /* must be black, not white */
}
`;