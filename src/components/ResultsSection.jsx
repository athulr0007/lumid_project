import { useEffect, useRef } from "react";

const caseStudies = [
  {
    name: "45 Degrees",
    logo: "↗ 45 Degrees°",
    text: "45 Degrees transformed their luxury travel operations by implementing Source's automation platform — eliminating bottlenecks in itinerary creation, supplier coordination, and client communication that were threatening their ability to scale.",
    metrics: [
      { num: "70%", label: "reduction in manual coordination" },
      { num: "2x",  label: "faster client response times" },
    ],
    img: "https://framerusercontent.com/images/Lx6kJ0F2dUDah4lVapWANVGhWM.jpg?width=900&height=1200",
  },
  {
    name: "Clandestine",
    logo: "✚ Clandestine",
    text: "Clandestine cut fraud false positives by 43% and slashed investigation time by implementing Source's adaptive machine learning system — moving from reactive rule-checking to intelligent, real-time risk assessment.",
    metrics: [
      { num: "43%", label: "reduction in false positives" },
      { num: "60%", label: "faster case resolution" },
    ],
    img: "https://framerusercontent.com/images/SotjoARFrMCehNUIHUe6OayExMw.jpg?width=1200&height=904",
  },
  {
    name: "GlobalBank",
    logo: "⊙ GlobalBank",
    text: "Facing mounting customer demand for faster financial services, GlobalBank turned to Source to modernize its lending operations. The result: a unified, AI-powered system that cuts decision times from days to hours while strengthening compliance and customer trust.",
    metrics: [
      { num: "99.2%", label: "compliance accuracy" },
      { num: "45%",   label: "reduction in manual review steps" },
    ],
    img: "https://framerusercontent.com/images/XjJbDXNixjj6jnvv7Og25LQxyw4.jpg?width=3000&height=4000",
  },
  {
    name: "Railspeed",
    logo: "≡ Railspeed",
    text: "Railspeed eliminated 42% of operational delays by replacing reactive maintenance schedules with AI-driven predictive systems — turning scattered logistics data into a unified command center for their growing European rail network.",
    metrics: [
      { num: "42%", label: "reduction in delays" },
      { num: "30%", label: "less manual scheduling" },
    ],
    img: "https://framerusercontent.com/images/i9PpWqE03arC0NlO1JfKixuIA8.png?width=844&height=1200",
  },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("rs-vis"); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

function CaseCard({ cs, index }) {
  const ref = useRef(null);
  useReveal(ref, index * 80);

  return (
    <div className="rs-card rs-fade" ref={ref}>

      {/* LEFT: image — no padding, fills full height */}
      <div className="rs-img-col">
        <img src={cs.img} alt={cs.name} className="rs-img" />
        <div className="rs-img-logo">{cs.logo}</div>
      </div>

      {/* RIGHT: name, text, metrics */}
      <div className="rs-content">
        <div className="rs-content-top">
          <h3 className="rs-name">{cs.name}</h3>
          <div className="rs-divider" />
          <p className="rs-text">{cs.text}</p>
        </div>
        <div className="rs-metrics">
          {cs.metrics.map((m, j) => (
            <div className="rs-metric" key={j}>
              <div className="rs-metric-num">
                <span className="rs-sq" />{m.num}
              </div>
              <div className="rs-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function ResultsSection() {
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <>
      <style>{css}</style>
      <section className="rs-wrap">

{/* Header */}
<header className="rs-header rs-fade" ref={headRef}>
  <div className="rs-header-left">
    <h2 className="rs-title">Results that move businesses<br />forward.</h2>
  </div>
  <div className="rs-header-right">
    <p className="rs-desc">
      From startups to global enterprises, our clients trust Source<sup>®</sup> to build
      automation strategies that create efficiency and long-term value.
    </p>
  </div>
</header>




        {/* Cards */}
        <div className="rs-list">
          {caseStudies.map((cs, i) => (
            <CaseCard key={cs.name} cs={cs} index={i} />
          ))}
        </div>

        {/* See all */}
<a className="rs-see-all" href="#">
  <div className="rs-curtain" />

  <span className="rs-text">See all case studies</span>

  <svg
    className="rs-arrow"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M3 13L13 3M13 3H5M13 3V11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

      </section>
    </>
  );
}

const css = `
  /* ── Section ──
     Same inset as other sections: margin 60px, border all sides */
.rs-wrap {
  width: 100%;
  background: #f5f2ec;
  border-top: 1px solid #ddd9d1;

  padding: 0 60px;
  box-sizing: border-box;
}

  .rs-fade {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.72s cubic-bezier(0.16,1,0.3,1),
                transform 0.72s cubic-bezier(0.16,1,0.3,1);
  }
  .rs-vis { opacity: 1; transform: none; }

  /* ── Header ── */
.rs-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;        /* aligns desc to title baseline */
  max-width: 1920px;
  margin: 0 auto;
  padding: 96px 0 64px;
}

.rs-header-left {
  flex: 1;
  min-width: 0;
}

.rs-title {
  margin: 0;
  font-size: clamp(52px, 5.2vw, 76px);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 1.05;
  color: #111;
}

.rs-header-right {
  width: 540px;
  flex-shrink: 0;
  margin-left: 80px;
  padding-bottom: 95px;          /* fine-tune baseline alignment */
}

.rs-desc {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.55;
  letter-spacing: -0.01em;
  color: rgba(0, 0, 0, 0.55);
}


  .rs-desc sup { font-size: 60%; vertical-align: super; }

  /* ── Card list ──
     Section bg is white/cream (#f5f2ec).
     Cards are grey (#eeeee3). Gap between cards = 2px
     shows the white section bg through → white gap effect  */
  .rs-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: #f5f2ec;
  }

  /* ── Single card ──
     display: flex, flex-flow: row
     Each half: width 50%, padding 24px, grey bg            */
  .rs-card {
    display: flex;
    flex-flow: row;
    align-items: stretch;
    background: #e2e2d9;
    overflow: hidden;
    position: relative;
     padding: 29px;
  }

  /* ── Image column ──
     width: 50%, position: relative, overflow: hidden
     padding: 24px (matches Framer spec)                    */
  .rs-img-col {
    position: relative;
    overflow: hidden;
    width: 50%;
    flex: none;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    place-content: center;
    align-items: center;
    height: min-content;
    min-height: 329px;
    z-index: 2;
  }

  .rs-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    position: absolute;
    inset: 0;
    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
  }
  .rs-card:hover .rs-img { transform: scale(1.04); }

  /* Logo centered on image */
  .rs-img-logo {
    position: relative;
    z-index: 2;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.03em;
    white-space: nowrap;
    text-shadow: 0 1px 8px rgba(0,0,0,0.5);
    pointer-events: none;
  }

  /* ── Content column ──
     width: 50%, padding: 24px, grey bg same as card        */
  .rs-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    flex: none;
    padding: 24px;
    box-sizing: border-box;
    background: #e2e2d9;
    min-height: 280px;
  }

  .rs-content-top {}

  .rs-name {
    margin: 0 0 0;
    font-size: clamp(22px, 1.8vw, 28px);
    font-weight: 500;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #111;
  }

  .rs-divider {
    height: 1px;
    background: #adaaa6;
    margin: 14px 0 12px;
  }

  .rs-text {
    margin: 0;
    font-size: 16px;
    line-height: 1.55;
    letter-spacing: -0.01em;
    color: #050505;
  }
.rs-see-all .rs-text {
  color: #fff;  
  font-size: 20px;
}
  .rs-see-all .rs-arrow {
  color: #fff;
}

.rs-see-all:hover .rs-arrow {
  color: #000;
}
  /* ── Metrics — bottom of content col ── */
  .rs-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 32px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid #ddd9d1;
  }

  .rs-metric {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .rs-metric-num {
    display: flex;
    align-items: center;
    gap: 9px;
    font-size: clamp(16px, 1.5vw, 20px);
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #111;
  }

  .rs-sq {
    width: 9px;
    height: 9px;
    background: #111;
    flex-shrink: 0;
    display: inline-block;
  }

  .rs-metric-label {
    font-size: 13px;
    font-weight: 400;
    color: #555;
    letter-spacing: -0.01em;
    line-height: 1.35;
    padding-left: 18px;
  }

  /* ── See all ── */
  /* container */
.rs-see-all {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  left: 50%;
  transform: translateX(-50%); /* fix left cut */

  background: #000000;
  padding: 28px 60px;

  text-decoration: none;
  cursor: pointer;
  overflow: hidden;

  margin-top: 84px;
}

/* curtain */
.rs-curtain {
  position: absolute;
  inset: 0;
  background: #22f862;

  transform: translateY(100%);
  transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);

  z-index: 0;
}

.rs-see-all:hover .rs-curtain {
  transform: translateY(0%);
}

/* text */
.rs-text {
  position: relative;
  z-index: 1;

  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;

  color: #0d0d0d;
  transition: color 0.2s ease 0.1s;
}

.rs-see-all:hover .rs-text {
  color: #060606;
}

/* arrow */
.rs-arrow {
  position: relative;
  z-index: 1;

  color: #111;
  flex-shrink: 0;

  transition: color 0.2s ease 0.1s,
              transform 0.3s cubic-bezier(0.16,1,0.3,1);
}

.rs-see-all:hover .rs-arrow {
  color: #fff;
  transform: translate(3px, -3px);
}
  /* ── Responsive ── */
/* ── TABLET (641px – 1024px) ── */
@media (min-width: 641px) and (max-width: 1024px) {
  .rs-wrap {
    padding: 0 20px;
  }

  .rs-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 48px 0 36px;
  }

  .rs-header-right {
    width: 100%;
    margin-left: 0;
    padding-bottom: 0;
  }

  .rs-title {
    font-size: clamp(36px, 5vw, 52px);
  }

  .rs-card {
    flex-flow: row;
    padding: 0;
    gap: 0;
  }

  .rs-img-col {
    width: 45%;
    min-height: 260px;
    height: auto;
    padding: 0;
    flex-shrink: 0;
  }

  .rs-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .rs-content {
    width: 55%;
    padding: 24px 20px;
    min-height: unset;
  }

  .rs-metrics {
    grid-template-columns: 1fr 1fr;
    gap: 0 20px;
  }

  .rs-see-all {
    padding: 24px 20px;
    margin-top: 40px;
  }
}

/* ── MOBILE (≤ 640px) ── */
@media (max-width: 640px) {
  .rs-wrap {
    padding: 0 16px;
  }

  .rs-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    padding: 36px 0 28px;
  }

  .rs-header-right {
    width: 100%;
    margin-left: 0;
    padding-bottom: 0;
  }

  .rs-title {
    font-size: 32px;
    line-height: 1.05;
  }

  .rs-desc {
    font-size: 14px;
    line-height: 1.5;
  }

  .rs-card {
    flex-flow: column;
    padding: 0;
    gap: 0;
  }

  .rs-img-col {
    width: 100%;
    height: 260px;
    min-height: 260px;
    padding: 0;
    flex-shrink: 0;
  }

  .rs-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .rs-img-logo {
    font-size: 15px;
  }

  .rs-content {
    width: 100%;
    padding: 20px 16px 24px;
    min-height: unset;
    box-sizing: border-box;
  }

  .rs-name {
    font-size: 22px;
  }

  .rs-text {
    font-size: 14px;
    line-height: 1.5;
  }

  .rs-metrics {
    grid-template-columns: 1fr;
    gap: 14px;
    margin-top: 20px;
    padding-top: 16px;
  }

  .rs-metric-num {
    font-size: 18px;
  }

  .rs-see-all {
    padding: 20px 16px;
    margin-top: 32px;
  }

  .rs-see-all .rs-text {
    font-size: 16px;
  }
}
`;