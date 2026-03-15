import { useEffect, useRef } from "react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("ct-vis"); obs.disconnect(); } },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function ContactSection() {
  const headRef = useRef(null);
  const formRef = useRef(null);
  useReveal(headRef);
  useReveal(formRef, 100);

  return (
    <>
      <style>{css}</style>
      <section className="ct-wrap">
        {/* Header */}
        <div className="ct-head ct-fade" ref={headRef}>
          <h2 className="ct-title">Get in touch.</h2>
          <p className="ct-desc">
            Whether you have questions or just want to explore what's possible,
            we're here to help.
          </p>
        </div>

        {/* Form */}
        <div className="ct-form ct-fade" ref={formRef}>
          <input className="ct-field" type="text"  placeholder="Full name *" />
          <input className="ct-field" type="email" placeholder="Email Address *" />
          <input className="ct-field ct-full" type="tel" placeholder="Phone number (optional)" />
          <textarea className="ct-field ct-full ct-area" placeholder="How can we help you?" />

          <div className="ct-footer">
            <label className="ct-agree">
              <input className="ct-checkbox" type="checkbox" />
              By submitting, you agree to our{" "}
              <a href="#">Terms</a> and <a href="#">Privacy Policy</a> and give
              your permission to process your personal data for the purposes
              specified in our Privacy Policy.
            </label>
            <button className="ct-submit">
              Submit
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3.5 14.5L14.5 3.5M14.5 3.5H6M14.5 3.5V12"
                  stroke="#0d0d0d" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

const css = `
  .ct-fade {
    opacity: 0; transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .ct-vis { opacity: 1; transform: none; }

  .ct-wrap {
    padding: 80px 60px;
    border-top: 1px solid #ddd9d1;
    background: #f5f2ec;
  }

  .ct-head {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 48px;
    margin-bottom: 48px;
  }
  .ct-title {
    font-size: clamp(40px, 4.5vw, 64px);
    font-weight: 900; letter-spacing: -2.5px;
    line-height: 1; margin: 0; color: #0d0d0d;
  }
  .ct-desc {
    font-size: 15px; color: #555; line-height: 1.65;
    max-width: 380px; margin: 0; padding-top: 4px;
  }

  .ct-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .ct-field {
    border: 1px solid #ddd9d1;
    padding: 20px 24px; font-size: 15px;
    background: transparent; color: #0d0d0d;
    font-family: inherit; outline: none;
    margin: -1px 0 0 -1px;
    transition: border-color 0.2s;
  }
  .ct-field:focus { border-color: #0d0d0d; z-index: 1; position: relative; }
  .ct-field::placeholder { color: #aaa; }
  .ct-full { grid-column: span 2; }
  .ct-area { min-height: 140px; resize: vertical; }

  .ct-footer {
    grid-column: span 2;
    display: flex; align-items: center;
    border: 1px solid #ddd9d1; margin-top: -1px;
  }
  .ct-agree {
    flex: 1; display: flex; align-items: flex-start; gap: 12px;
    padding: 18px 22px;
    font-size: 12px; color: #555; line-height: 1.55;
    cursor: pointer;
  }
  .ct-checkbox {
    width: 16px; height: 16px;
    border: 1px solid #ddd9d1;
    cursor: pointer; margin-top: 1px; flex-shrink: 0;
    appearance: none; -webkit-appearance: none;
    transition: background 0.18s;
  }
  .ct-checkbox:checked { background: #0d0d0d; border-color: #0d0d0d; }
  .ct-agree a { color: #0d0d0d; font-weight: 600; }

  .ct-submit {
    background: #00e547; color: #0d0d0d;
    padding: 0 44px; height: 64px;
    font-size: 16px; font-weight: 700;
    display: flex; align-items: center; gap: 12px;
    border: none; cursor: pointer; font-family: inherit;
    white-space: nowrap; flex-shrink: 0;
    transition: background 0.18s;
  }
  .ct-submit:hover { background: #00cf3f; }
  .ct-submit svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .ct-submit:hover svg { transform: translate(3px,-3px); }

  @media (max-width: 1100px) {
    .ct-wrap { padding: 56px 32px; }
    .ct-head { flex-direction: column; gap: 16px; }
  }
  @media (max-width: 640px) {
    .ct-wrap { padding: 40px 24px; }
    .ct-form { grid-template-columns: 1fr; }
    .ct-full, .ct-footer { grid-column: span 1; }
    .ct-footer { flex-direction: column; }
    .ct-submit { width: 100%; justify-content: space-between; }
  }
`;