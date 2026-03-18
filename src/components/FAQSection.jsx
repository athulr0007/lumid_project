import { useState, useEffect, useRef } from "react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("fq-vis");
          obs.disconnect();
        }
      },
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

function FAQItem({ f, i, open, setOpen }) {
  const isOpen = open.includes(i);
  const ref = useRef(null);

useEffect(() => {
  const el = ref.current;
  if (!el) return;

  if (isOpen) {
    el.style.height = el.scrollHeight + "px";
  } else {
    el.style.height = "0px";
  }
}, [isOpen]);

  return (
    <div className="fq-item">
     <button
  className="fq-q"
  onClick={() => {
    if (isOpen) {
      setOpen(open.filter((id) => id !== i));
    } else {
      setOpen([...open, i]);
    }
  }}
>
  <span className={`fq-icon ${isOpen ? "fq-icon--open" : ""}`}>
    +
  </span>

  <span className="fq-text">{f.q}</span>
</button>

      <div ref={ref} className="fq-answer">
        <div className="fq-answer-inner">{f.a}</div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useReveal(leftRef);
  useReveal(rightRef, 120);

  return (
    <>
      <style>{css}</style>

      <section className="fq-wrap">
        {/* LEFT */}
        <div className="fq-left fq-fade" ref={leftRef}>
        <div className="fq-faces">
  {faqFaces.map((f, i) => (
    <div key={i} className="fq-face-wrap">

      <div className="fq-face">
        <img src={f.img} alt={f.name} />
      </div>

      <div className="fq-face-tag">
        <span className="fq-source-tag">
          ⚡ SOURCE<sup>®</sup>
        </span>
      </div>

                <div className="fq-face-info">
  <div className="fq-face-name">
    <span
      className="fq-face-dot"
      style={{ background: f.color }}
    />
    {f.name}
  </div>
  <div className="fq-face-role">{f.role}</div>
</div>
              </div>
            ))}
          </div>

          <p className="fq-note">
            Don't see the answer you're looking for?<br /> Reach out to our experts{" "}
            
          </p>

         <a className="fq-contact-btn" href="#">
  <div className="fq-btn-inner">
    <span>Get in touch</span>
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M3 13L13 3M13 3H5M13 3v8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  <div className="fq-btn-inner fq-btn-inner--clone">
    <span>Get in touch</span>
    <svg width="16" height="16" viewBox="0 0 16 16">
      <path
        d="M3 13L13 3M13 3H5M13 3v8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
</a>
        </div>

        {/* RIGHT */}
        <div className="fq-right fq-fade" ref={rightRef}>
          <h2 className="fq-title">Frequently asked questions</h2>

          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              f={f}
              i={i}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </section>
    </>
  );
}

const css = `
.fq-fade {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.7s cubic-bezier(0.16,1,0.3,1);
}
.fq-vis {
  opacity: 1;
  transform: none;
}

.fq-wrap {
  padding: 80px 60px;
  background: #f5f2ec;
  display: grid;
  grid-template-columns: 670px 1fr;
  gap: 80px;
}

/* LEFT */
.fq-faces {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

.fq-face {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  clip-path: polygon(
     0% 22%,   /* vertical down */
     22% 22%,  /* corner */
     32% 0%,
    100% 0%,
    100% 78%,   /* bottom-right cut */
    78% 100%,
    0% 100%
  );
}
  .fq-face-wrap {
  position: relative;
}

.fq-face img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.fq-face-tag {
  position: absolute;
  top: 8px;
  left: 8px;
}

.fq-source-tag {
  color: #000000;
  font-size: 9px;
  font-weight: 800;
  padding: 3px 6px;
}

.fq-face-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.fq-face-dot {
  width: 14px;
  height: 14px;
  display: inline-block;
}

.fq-face-name {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 17px;
  font-weight: 400;
  margin-top: 17px;

}
.fq-face-role {
  font-size: 14px;
  color: #666;
  margin-left: 2px;
  font-weight: 450;
}

.fq-note {
  font-size: 17px;
  color: #555;
  margin-bottom: 16px;
  font-weight: 560;
  line-height: 1.5;
  margin-top: auto;
}

.fq-note a {
  color: #000;
  font-weight: 700;
  text-decoration: underline;
}

.fq-contact-btn {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d0d0d;
  color: #fff;
  padding: 16px 20px;
  text-decoration: none;
  height: 59px;
}
.fq-btn-inner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
}
.fq-left {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.fq-btn-inner--clone {
  transform: translateY(100%);
}

.fq-contact-btn:hover .fq-btn-inner {
  transform: translateY(-100%);
}

.fq-contact-btn:hover .fq-btn-inner--clone {
  transform: translateY(0%);
}
/* RIGHT */
.fq-title {
  font-size: 66px;
  font-weight: 500;
  margin-bottom: 50px;
}

.fq-item {
  border-top: px solid #ddd;
  background: #e5e5e5;
  padding: 0 32px;
  margin-bottom: 3px;
}

.fq-q {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-size: 19px;
  font-weight: 300;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
  .fq-text {
  flex: 1;
  margin-left: 25px;
}

.fq-icon {
  font-size: 26px;
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
  font-weight: 100;
  
}

.fq-icon--open {
  transform: rotate(45deg);
}

.fq-answer {
  height: 0;
  overflow: hidden;
  transition: height 0.45s cubic-bezier(0.16,1,0.3,1);
  margin-left: 41px;
}

.fq-answer-inner {
  padding-bottom: 20px;
  font-size: 15px;
  color: #555;
  line-height: 1.5;
  font-weight: 410;
}

@media (max-width: 1100px) {
  .fq-wrap {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
`;