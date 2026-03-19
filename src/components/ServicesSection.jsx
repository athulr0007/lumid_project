import { useEffect, useRef } from "react";

const services = [
  {
    num: "01",
    name: "Workflow Automation",
    desc: "We streamline operations by designing intelligent workflows that automate repetitive processes, reduce human error, and enhance team productivity.",
    tags: ["#Intelligent Workflows", "#Process Orchestration", "#Ops Efficiency"],
    img: "https://framerusercontent.com/images/wRyw2dTMH5rgSb9UhWZMngHZn2Y.jpg?width=6000&height=4000",
  },
  {
    num: "02",
    name: "Custom AI Solutions",
    desc: "Our engineers build bespoke AI systems tailored to your data, tools, and business goals — from intelligent assistants to fully automated decision platforms.",
    tags: ["#Applied AI", "#Model Engineering"],
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
  },
  {
    num: "03",
    name: "Data Infrastructure & Integration",
    desc: "We consolidate your scattered data into clean, unified systems, ensuring seamless connections between platforms and enabling powerful AI performance.",
    tags: ["#Unified Data Pipelines", "#System Connectivity"],
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
  },
  {
    num: "04",
    name: "Predictive Analytics & Insights",
    desc: "Using advanced machine learning models, we transform your data into forward-looking insights that drive better decisions and measurable business outcomes.",
    tags: ["#Forecasting Intelligence", "#Real-Time Insights", "#Decision Optimization"],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    num: "05",
    name: "AI Strategy & Consulting",
    desc: "We help organizations define clear AI adoption strategies, assess readiness, and align automation goals with long-term operational objectives.",
    tags: ["#AI Roadmapping", "#Transformation Strategy"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
];

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("sv-in"); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

function ServiceRow({ s, index }) {
  const ref = useRef(null);
  useReveal(ref, index * 60);

  return (
    <div className="sv-row sv-fade" ref={ref}>

      {/* LEFT: name + desc + tags + learn more */}
      <div className="sv-left">
        <div className="sv-text-group">
          <h3 className="sv-name">{s.name}</h3>
          <p className="sv-desc">{s.desc}</p>
        </div>
        <div className="sv-footer">
          <div className="sv-tags">
            {s.tags.map(t => (
              <span key={t} className="sv-tag">{t}</span>
            ))}
          </div>
     <a className="sv-learn" href="#">
  <span className="sv-learn-text">
    <span className="sv-learn-track">
      <span className="sv-learn-label">Learn more</span>
      <span className="sv-learn-label">Learn more</span>
    </span>
  </span>

  <span className="sv-learn-icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H5M13 3V11"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</a>
        </div>
      </div>

      {/* RIGHT: image with number+logo overlay in corner */}
      <div className="sv-right">
        <div className="sv-img-wrap">
          <img src={s.img} alt={s.name} />

          {/* Number — top-left of image */}
          <div className="sv-img-corner">
            <span className="sv-img-num">{s.num}</span>
            {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H4M12 2V10"
                stroke="#171412" strokeWidth="1.4"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg> */}
          </div>

          {/* SOURCE® logo — bottom-right of image */}
          <div className="sv-img-logo">
            <svg width="9" height="11" viewBox="0 0 10 12" fill="none">
              <path d="M6 1L1 6.5H4.5L3 11l6.5-6H6.5L6 1z" fill="#fbf9ef"/>
            </svg>
            <span>SOURCE<sup>®</sup></span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function ServicesSection() {
  const headRef = useRef(null);
  useReveal(headRef, 0);

  return (
    <>
      <style>{css}</style>
      <section className="sv-wrap">

        {/* Header */}
        <div className="sv-header sv-fade" ref={headRef}>
          <h2 className="sv-title">
            Building intelligent foundations for the modern enterprise.
          </h2>
          <p className="sv-subtitle">
            We help you modernize operations through custom AI systems,
            automated processes, and data-driven insights built to scale with
            your goals.
          </p>
        </div>

        {/* Rows */}
        <div className="sv-list">
          {services.map((s, i) => (
            <ServiceRow key={s.num} s={s} index={i} />
          ))}
        </div>

      </section>
    </>
  );
}

const css = `
  /* ── Section wrapper ──
     Background WHITE so gaps between cards show as white     */
  .sv-wrap {
    width: 100%;
    background: #f5f2ec;
    border-top: 1px solid #d7d3ca;
    box-sizing: border-box;
  }

  /* ── Reveal animation ── */
  .sv-fade {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.72s cubic-bezier(0.16,1,0.3,1),
                transform 0.72s cubic-bezier(0.16,1,0.3,1);
  }
  .sv-in { opacity: 1; transform: none; }

  /* ── Header ── */
  .sv-header {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 48px;
    align-items: start;
    padding: 56px 60px 48px 60px;
    background: #f5f2ec;
  }

  .sv-title {
    margin: 0;
    font-size: clamp(38px, 3.8vw, 56px);
    font-weight: 600;
    letter-spacing: -0.05em;
    line-height: 0.98;
    color: #171412;
  }

  .sv-subtitle {
    margin: 4px 0 0;
    font-size: 15px;
    line-height: 1.55;
    letter-spacing: -0.02em;
    color: #666;
  }

  /* ── Service list container ──
     Padding matches header sides                              */
  .sv-list {
    padding: 0 60px 0 60px;
  }

  /* ── Each row ──
     Grey card bg, separated by white gaps (section bg shows through)
     NO border lines — white space is the divider              */
  .sv-row {
    display: grid;
    grid-template-columns: 1fr 420px;
    align-items: stretch;
    background: #e8e8e0;
    min-height: 300px;
    margin-bottom: 5px;
  }
  .sv-row:last-child { margin-bottom: 0; }

  /* ── LEFT column ── */
  .sv-left {
    display: flex;
    flex-direction: column;
    padding: 32px 40px 28px 25px;
  }

  .sv-text-group {
    flex: 1;
  }

  .sv-name {
    margin: 0 0 12px;
    font-size: clamp(30px, 2.8vw, 44px);
    font-weight: 600;
    letter-spacing: -0.05em;
    line-height: 1.0;
    color: #171412;
  }

  .sv-desc {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #666;
    max-width: 600px;
  }

  /* Tags + Learn more row */
  .sv-footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;
    margin-top: 32px;
  }

  .sv-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }

  /* Tag: exact Framer values
     bg: rgb(23,20,18) | text: rgb(251,249,239)               */
  .sv-tag {
    display: inline-flex;
    align-items: center;
    height: 24px;
    padding: 0 10px;
    background: #171412;
    color: #fbf9ef;
    font-size: 11.5px;
    font-weight: 500;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

.sv-learn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #171412;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  flex-shrink: 0;
}

.sv-learn-text {
  position: relative;
  height: 22px;
  overflow: hidden;
  display: inline-block;
}

.sv-learn-track {
  display: flex;
  flex-direction: column;
  transform: translateY(0);
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.sv-learn-label {
  display: inline-flex;
  align-items: center;
  height: 22px;
  line-height: 22px;
  border-bottom: 2px solid #171412;
  box-sizing: border-box;
}

.sv-learn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translate(0, 0);
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.sv-learn svg {
  flex-shrink: 0;
}

.sv-learn:hover .sv-learn-track {
  transform: translateY(-22px);
}

.sv-learn:hover .sv-learn-icon {
  transform: translate(2px, -2px);
}
}  
  /* ── RIGHT column: image ── */
  .sv-right {
    padding: 20px 0 20px 0;
  }

  .sv-img-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 260px;
    overflow: hidden;
  }

  .sv-img-wrap img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    transition: transform 0.65s cubic-bezier(0.16,1,0.3,1);
  }
  .sv-row:hover .sv-img-wrap img { transform: scale(1.03); }

  /* Number + arrow — top-left corner of image
     bg: light cream matching page                            */
  .sv-img-corner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #e5e5df;
    padding: 7px 12px;
    z-index: 2;
  }

  .sv-img-num {
    font-size: 14px;
    font-weight: 400;
    color: #171412;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  /* SOURCE® logo — bottom-right of image */
  .sv-img-logo {
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fbf9ef;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.01em;
    z-index: 2;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }
  .sv-img-logo sup { font-size: 6px; vertical-align: super; }

  /* ── Responsive ── */
 @media (max-width: 1024px) {
  .sv-header {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 36px 20px 28px;
  }

  .sv-list {
    padding: 0 20px;
  }

  .sv-row {
    grid-template-columns: 1fr;
    margin-bottom: 12px;
  }

  .sv-right {
    order: 1;
    padding: 0;
  }

  .sv-left {
    order: 2;
    padding: 18px 0 24px;
  }

  .sv-img-wrap {
    min-height: 240px;
  }

  /* Number badge sits flush top-left ON the image */
  .sv-img-corner {
    top: 0;
    left: 0;
    padding: 6px 10px;
  }

  .sv-name {
    font-size: 26px;
    margin-bottom: 10px;
  }

  .sv-desc {
    font-size: 13.5px;
    line-height: 1.5;
  }

  .sv-footer {
    margin-top: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }

  .sv-tags {
    flex-wrap: wrap;
    gap: 6px;
  }
}

@media (max-width: 640px) {
  .sv-header {
    padding: 28px 16px 22px;
  }

  .sv-title {
    font-size: 28px;
    line-height: 1.05;
  }

  .sv-subtitle {
    font-size: 13px;
  }

  .sv-list {
    padding: 0 16px;
  }

  .sv-row {
    margin-bottom: 10px;
  }

  .sv-img-wrap {
    min-height: 200px;
  }

  .sv-left {
    padding: 16px 0 20px;
  }

  .sv-name {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .sv-desc {
    font-size: 13px;
    line-height: 1.45;
  }

  .sv-tag {
    height: 22px;
    font-size: 10.5px;
    padding: 0 8px;
  }

  .sv-learn {
    font-size: 15px;
  }
}
`;