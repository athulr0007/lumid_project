import { useState, useEffect, useRef } from "react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("fq-vis"); obs.disconnect(); } },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

const faqs = [
  {
    q: "What kind of companies does Source work with?",
    a: "We partner with organizations of all sizes — from early-stage startups to global enterprises. Whether you're scaling operations, improving internal workflows, or exploring AI adoption, our solutions are built to fit your business model and growth goals.",
  },
  {
    q: "What types of automations does Source create?",
    a: "We build workflow automation, custom AI solutions, data infrastructure pipelines, predictive analytics systems, and strategic AI consulting services tailored to your specific needs and industry.",
  },
  {
    q: "How long does it take to implement an AI automation solution?",
    a: "Timelines vary by project complexity. Simple workflow automations can be deployed in 2–4 weeks. More complex custom AI systems typically take 6–12 weeks from strategy session to full launch.",
  },
  {
    q: "Do we need existing AI infrastructure to work with Source?",
    a: "Not at all. We assess your current setup and design solutions that meet you where you are — whether that's starting from scratch or integrating with existing tools.",
  },
  {
    q: "How secure are Source's AI systems?",
    a: "Security is built into every layer of our work. We follow enterprise-grade security practices including data encryption, access controls, compliance alignment, and regular security audits.",
  },
  {
    q: "What makes Source different from other AI consultancies?",
    a: "We combine strategic insight with deep technical execution. We don't just advise — we build, deploy, and continuously optimize your systems for long-term, measurable impact.",
  },
];

const faqFaces = [
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80",
    name: "Jessica Peterson",
    role: "Client Success Manager",
    color: "#00e547",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    name: "Dmitri Novikov",
    role: "AI Automations Advisor",
    color: "#3b5bff",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  useReveal(leftRef);
  useReveal(rightRef, 120);

  return (
    <>
      <style>{css}</style>
      <section className="fq-wrap">
        {/* ── Left ── */}
        <div className="fq-left fq-fade" ref={leftRef}>
          <div className="fq-faces">
            {faqFaces.map((f, i) => (
              <div key={i} className="fq-face">
                <img src={f.img} alt={f.name} />
                <div className="fq-face-tag">
                  <span className="fq-source-tag">
                    ⚡ SOURCE<sup>®</sup>
                  </span>
                </div>
                <div className="fq-face-info">
                  <div className="fq-face-dept">
                    <span className="fq-face-dot" style={{ background: f.color }} />
                  </div>
                  <div className="fq-face-name">{f.name}</div>
                  <div className="fq-face-role">{f.role}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="fq-note">
            Don't see the answer you're looking for?{" "}
            Reach out to our <a href="#">experts.</a>
          </p>

          <a className="fq-contact-btn" href="#">
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H5M13 3v8"
                stroke="white" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* ── Right ── */}
        <div className="fq-right fq-fade" ref={rightRef}>
          <h2 className="fq-title">Frequently asked questions</h2>

          {faqs.map((f, i) => (
            <div key={i} className="fq-item">
              <button
                className="fq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className={`fq-icon ${open === i ? "fq-icon--open" : ""}`}>
                  +
                </span>
              </button>
              <div className={`fq-answer ${open === i ? "fq-answer--open" : ""}`}>
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const css = `
  .fq-fade {
    opacity: 0; transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .fq-vis { opacity: 1; transform: none; }

  .fq-wrap {
    padding: 80px 60px;
    border-top: 1px solid #ddd9d1;
    background: #f5f2ec;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 80px;
  }

  /* ── Left ── */
  .fq-faces {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 16px; margin-bottom: 24px;
  }
  .fq-face { position: relative; overflow: hidden; }
  .fq-face img { width: 100%; height: 200px; object-fit: cover; display: block; }

  .fq-face-tag { position: absolute; top: 8px; left: 8px; }
  .fq-source-tag {
    background: rgba(0,0,0,0.65); color: #fff;
    padding: 3px 7px; font-size: 9px; font-weight: 800;
    display: flex; align-items: center; gap: 3px;
  }
  .fq-source-tag sup { font-size: 6px; vertical-align: super; }

  .fq-face-info {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.72));
    padding: 24px 10px 8px; color: #fff;
  }
  .fq-face-dept { margin-bottom: 2px; }
  .fq-face-dot {
    width: 6px; height: 6px; border-radius: 50%;
    display: inline-block;
  }
  .fq-face-name { font-size: 11.5px; font-weight: 700; }
  .fq-face-role { font-size: 10px; opacity: 0.75; }

  .fq-note {
    font-size: 14px; color: #555; line-height: 1.65;
    margin-bottom: 16px;
  }
  .fq-note a {
    color: #0d0d0d; font-weight: 700;
    text-decoration: underline; text-underline-offset: 2px;
  }

  .fq-contact-btn {
    display: flex; align-items: center; justify-content: space-between;
    background: #0d0d0d; color: #fff;
    padding: 16px 20px; font-size: 14px; font-weight: 600;
    text-decoration: none; transition: background 0.18s;
  }
  .fq-contact-btn:hover { background: #1a1a1a; }
  .fq-contact-btn svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .fq-contact-btn:hover svg { transform: translate(3px,-3px); }

  /* ── Right ── */
  .fq-title {
    font-size: clamp(26px, 2.8vw, 40px);
    font-weight: 900; letter-spacing: -1px;
    margin: 0 0 32px; color: #0d0d0d;
  }
  .fq-item { border-top: 1px solid #ddd9d1; }
  .fq-item:last-child { border-bottom: 1px solid #ddd9d1; }

  .fq-q {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%; padding: 20px 0;
    font-size: 15px; font-weight: 600; color: #0d0d0d;
    background: none; border: none; cursor: pointer;
    font-family: inherit; text-align: left; gap: 20px;
    transition: color 0.18s;
  }
  .fq-q:hover { color: #555; }

  .fq-icon {
    font-size: 22px; font-weight: 300; line-height: 1;
    flex-shrink: 0;
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .fq-icon--open { transform: rotate(45deg); }

  .fq-answer {
    overflow: hidden; max-height: 0;
    font-size: 14px; color: #555; line-height: 1.72;
    transition: max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding 0.3s;
  }
  .fq-answer--open { max-height: 280px; padding-bottom: 22px; }

  @media (max-width: 1100px) {
    .fq-wrap { grid-template-columns: 1fr; gap: 40px; padding: 56px 32px; }
  }
  @media (max-width: 640px) {
    .fq-wrap { padding: 40px 24px; }
  }
`;