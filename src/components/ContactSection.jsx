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
  <div className="ct-text-wrap">
    <div className="ct-inner">
      <span className="ct-text">Submit</span>
    </div>

    <div className="ct-inner ct-inner--clone">
      <span className="ct-text">Submit</span>
    </div>
  </div>

  <svg className="ct-arrow" width="18" height="18" viewBox="0 0 18 18">
    <path
      d="M3.5 14.5L14.5 3.5M14.5 3.5H6M14.5 3.5V12"
      stroke="#0d0d0d"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
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
    font-weight: 600; letter-spacing: -2.5px;
    line-height: 1; margin: 0; color: #0d0d0d;
  }
  .ct-desc {
    font-size: 15px; color: #555; line-height: 1.65;
    max-width: 590px; margin: 0; padding-top: 4px;
    font-weight: 500;
  }

  .ct-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .ct-field {
    border: 1px solid #a0a0a0;
    padding: 20px 24px; font-size: 15px;
    background: transparent; color: #0d0d0d;
    font-family: inherit; outline: none;
    margin: -1px 0 0 -1px;
    transition: border-color 0.2s;
  }
  .ct-field:focus { border-color: #0d0d0d; z-index: 1; position: relative; }
  .ct-field::placeholder { color: #707070; }
  .ct-full { grid-column: span 2; }
  .ct-area { min-height: 140px; resize: vertical; }

  .ct-footer {
    grid-column: span 2;
    display: flex; align-items: center;
    border: 1px solid #a0a0a0; margin-top: -1px;
  }
  .ct-agree {
    flex: 1; display: flex; align-items: flex-start; gap: 12px;
    padding: 18px 22px;
    font-size: 12px; color: #555; line-height: 1.55;
    cursor: pointer;
  }
  .ct-checkbox {
    width: 16px; height: 16px;
    border: 1px solid #9c9c9c;
    cursor: pointer; margin-top: 1px; flex-shrink: 0;
    appearance: none; -webkit-appearance: none;
    transition: background 0.18s;
    position: relative;
  }
  .ct-checkbox:checked { background: #0d0d0d; border-color: #0d0d0d; }
  .ct-agree a { color: #0d0d0d; font-weight: 600; }
.ct-checkbox::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0);
  top: 2px;
  left: 5px;
  transition: transform 0.15s ease;
}
  .ct-checkbox:checked {
  background: #0d0d0d;
  border-color: #0d0d0d;
}

.ct-checkbox:checked::after {
  transform: rotate(45deg) scale(1);
}
.ct-submit {
  background: #00e547;
  color: #0d0d0d;
  height: 64px;
  width: 33%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
}
  .ct-text-wrap {
  position: relative;
  height: 20px;
  overflow: hidden;
}
 .ct-inner {
  height: 20px;
  display: flex;
  align-items: center;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
  .ct-inner svg {
  margin-left: auto;
  transform: none !important; /* pushes arrow to end */
}
.ct-inner--clone {
  position: absolute;
  top: 100%;
  left: 0;
}
  .ct-submit:hover .ct-inner {
  transform: translateY(-100%);
}
  .ct-submit:hover .ct-inner--clone {
  transform: translateY(-100%);
}



 /* ── TABLET (641px – 1100px) ── */
@media (min-width: 641px) and (max-width: 1100px) {
  .ct-wrap {
    padding: 56px 28px;
  }

  .ct-head {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 36px;
  }

  .ct-title {
    font-size: clamp(36px, 5vw, 52px);
  }

  .ct-desc {
    max-width: 100%;
    font-size: 14px;
  }

  /* Single column, all fields full width */
  .ct-form {
    grid-template-columns: 1fr;
  }

  .ct-full {
    grid-column: span 1;
  }

  /* Footer: submit full width on top, checkbox below */
  .ct-footer {
    grid-column: span 1;
    flex-direction: column;
    align-items: stretch;
    border: none;
    margin-top: 0;
    padding: 0;
  }

  .ct-submit {
    width: 100%;
    height: 60px;
    font-size: 16px;
    border: none;
    justify-content: space-between;
    order: 1;
  }

  .ct-agree {
    order: 2;
    border: 1px solid #a0a0a0;
    margin-top: -1px;
    font-size: 12px;
  }
}

/* ── MOBILE (≤ 640px) ── */
@media (max-width: 640px) {
  .ct-wrap {
    padding: 36px 16px;
  }

  .ct-head {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .ct-title {
    font-size: 32px;
    letter-spacing: -0.03em;
  }

  .ct-desc {
    font-size: 13.5px;
    max-width: 100%;
  }

  .ct-form {
    grid-template-columns: 1fr;
  }

  .ct-full {
    grid-column: span 1;
  }

  .ct-field {
    padding: 18px 16px;
    font-size: 14px;
  }

  .ct-area {
    min-height: 120px;
  }

  /* Footer: submit full width on top, checkbox below */
  .ct-footer {
    grid-column: span 1;
    flex-direction: column;
    align-items: stretch;
    border: none;
    margin-top: 0;
    padding: 0;
  }

  .ct-submit {
    width: 100%;
    height: 56px;
    font-size: 16px;
    order: 1;
    justify-content: space-between;
  }

  .ct-agree {
    order: 2;
    border: 1px solid #a0a0a0;
    margin-top: -1px;
    padding: 16px;
    font-size: 11.5px;
  }
}
`;