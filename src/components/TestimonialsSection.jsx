import { useState, useEffect, useRef } from "react";

/* ── Reveal hook ─────────────────────────────────────────── */
function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("tt-vis"); obs.disconnect(); } },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

/* ══════════════════════════════════════════════════════════
   TESTIMONIALS
   ══════════════════════════════════════════════════════════ */
const testimonials = [
  {
    text: "Manual itinerary building and supplier coordination were breaking our operations. Source rebuilt the process — our team moves twice as fast, client communication is seamless, and scaling is finally possible.",
    name: "Daria Simonova",
    role: "Director of Operations, 45 Degrees",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80",
    img: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=600&q=80",
    company: "45 Degrees°",
  },
  {
    text: "Source's AI system transformed how we assess risk. False positives dropped dramatically and our team can focus on real threats instead of noise in the pipeline.",
    name: "Marcus Chen",
    role: "CTO, Clandestine",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    company: "Clandestine",
  },
  {
    text: "The level of technical precision and strategic insight Source brought was unlike any consultancy we'd worked with. They delivered on every promise.",
    name: "Emma Walsh",
    role: "VP Operations, GlobalBank",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    img: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80",
    company: "GlobalBank",
  },
];

const clientLogos = ["GlobalBank", "Railspeed", "Neon", "Elasticware", "ennLabs"];

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const headerRef = useRef(null);
  const blockRef  = useRef(null);
  const logosRef  = useRef(null);
  useReveal(headerRef);
  useReveal(blockRef, 100);
  useReveal(logosRef, 200);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => (i + dir + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 280);
  };

  const t = testimonials[idx];

  return (
    <>
      <style>{css}</style>
      <section className="tt-testimonials">
        {/* Header */}
        <div className="tt-head tt-fade" ref={headerRef}>
          <h2 className="tt-head-title">
            What our clients say about working with Source<sup>®</sup>.
          </h2>
          <div className="tt-head-right">
            <p className="tt-head-sub">
              Hear from the companies that rely on Source to build, scale, and
              innovate with AI every day.
            </p>
            <a className="tt-leave" href="#">Leave a review ↗</a>
          </div>
        </div>

        {/* Main block */}
        <div className={`tt-block tt-fade ${animating ? "tt-block--out" : ""}`} ref={blockRef}>
          {/* Quote side */}
          <div className="tt-quote-side">
            <p className="tt-quote-text">"{t.text}"</p>
            <div className="tt-author">
              <div className="tt-avatar">
                <img src={t.avatar} alt={t.name} />
              </div>
              <div>
                <div className="tt-author-name">{t.name}</div>
                <div className="tt-author-role">{t.role}</div>
              </div>
            </div>
          </div>

          {/* Image + nav side */}
          <div className="tt-img-side">
            <div className="tt-img-wrap">
              <img src={t.img} alt="" />
              <div className="tt-img-counter">{idx + 1}</div>
              <div className="tt-img-logo">
                <span style={{ color: "#00e547" }}>⚡</span>
                SOURCE<sup style={{ fontSize: 8 }}>®</sup>
              </div>
            </div>
            <div className="tt-nav">
              <button className="tt-nav-btn" onClick={() => go(1)}>
                Next <span className="tt-arr">→</span>
              </button>
              <button className="tt-nav-btn tt-nav-btn--prev" onClick={() => go(-1)}>
                <span className="tt-arr">←</span> Previous
              </button>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="tt-logos tt-fade" ref={logosRef}>
          {clientLogos.map((l) => (
            <div key={l} className="tt-logo-item">○ {l}</div>
          ))}
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   TEAM
   ══════════════════════════════════════════════════════════ */
const teamMembers = [
  {
    name: "Mila Kovalenko", role: "Chief Strategy Officer",
    dept: "Leadership", deptColor: "#00e547",
    location: "London, UK", bars: [1,1,1,1,1,0,0,0,0,0],
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
  },
  {
    name: "David Sato", role: "Head of AI Engineering",
    dept: "Engineering", deptColor: "#3b5bff",
    location: "Tokyo, Japan", bars: [1,1,1,1,1,1,0,0,0,0],
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
  },
  {
    name: "Sophia Nguyen", role: "Automation Architect",
    dept: "Engineering", deptColor: "#3b5bff",
    location: "New York, USA", bars: [1,1,1,1,1,0,0,0,0,0],
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
  },
  {
    name: "Tobias Keller", role: "Senior Software Engineer",
    dept: "Engineering", deptColor: "#3b5bff",
    location: "Berlin, Germany", bars: [1,1,1,1,1,1,1,0,0,0],
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&q=80",
  },
];

export function TeamSection() {
  const headRef = useRef(null);
  const gridRef = useRef(null);
  useReveal(headRef);
  useReveal(gridRef, 80);

  return (
    <>
      <style>{css}</style>
      <section className="tt-team">
        <div className="tt-team-head tt-fade" ref={headRef}>
          <h2 className="tt-team-title">Global Talent, Unified Vision.</h2>
          <p className="tt-team-desc">
            From London to Tokyo, our specialists collaborate seamlessly to
            design smarter, faster, and more human AI systems.
          </p>
        </div>

        <div className="tt-team-grid tt-fade" ref={gridRef}>
          {teamMembers.map((m, i) => (
            <div key={i} className="tt-team-card">
              <div className="tt-team-img-wrap">
                <img src={m.img} alt={m.name} />
                <div className="tt-team-bar">
                  <div className="tt-dept-row">
                    <span className="tt-dept-dot" style={{ background: m.deptColor }} />
                    {m.dept}
                  </div>
                  <span className="tt-bolt">⚡</span>
                </div>
              </div>
              <div className="tt-team-body">
                <div className="tt-team-name">
                  {m.name}
                  <span className="tt-verified">✓</span>
                </div>
                <div className="tt-team-role">{m.role}</div>
                <div className="tt-team-foot">
                  <div className="tt-bars">
                    {m.bars.map((b, j) => (
                      <div key={j} className={`tt-bar ${b ? "" : "tt-bar--off"}`} />
                    ))}
                  </div>
                  <div className="tt-loc">{m.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="tt-team-controls">
          <button className="tt-arr-btn">←</button>
          <button className="tt-arr-btn">→</button>
          <a className="tt-experts-btn" href="#">
            See all experts
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3v8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

/* ── Styles ─────────────────────────────────────────────── */
const css = `
  .tt-fade {
    opacity: 0; transform: translateY(32px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .tt-vis { opacity: 1; transform: none; }

  /* ── Testimonials ── */
  .tt-testimonials {
    padding: 80px 60px;
    border-top: 1px solid #ddd9d1;
    background: #f5f2ec;
  }
  .tt-head {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 48px;
    margin-bottom: 48px;
  }
  .tt-head-title {
    font-size: clamp(28px, 3vw, 44px);
    font-weight: 900; letter-spacing: -1.2px;
    line-height: 1.1; max-width: 420px;
    margin: 0; color: #0d0d0d;
  }
  .tt-head-title sup { font-size: 60%; vertical-align: super; }
  .tt-head-right { text-align: right; }
  .tt-head-sub { font-size: 15px; color: #555; line-height: 1.65; max-width: 380px; margin: 0 0 10px; }
  .tt-leave {
    font-size: 14px; font-weight: 700; color: #0d0d0d;
    text-decoration: underline; text-underline-offset: 3px;
    cursor: pointer; transition: opacity 0.2s;
  }
  .tt-leave:hover { opacity: 0.6; }

  .tt-block {
    display: grid; grid-template-columns: 1fr 380px;
    border: 1px solid #ddd9d1;
    transition: opacity 0.28s ease, transform 0.28s ease;
  }
  .tt-block--out { opacity: 0; transform: translateX(16px); }

  .tt-quote-side {
    background: #3b5bff; color: #fff;
    padding: 48px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .tt-quote-text {
    font-size: clamp(16px, 1.9vw, 24px);
    font-weight: 700; line-height: 1.4;
    margin: 0 0 36px; letter-spacing: -0.3px;
  }
  .tt-author { display: flex; align-items: center; gap: 14px; }
  .tt-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    overflow: hidden; flex-shrink: 0;
    background: rgba(255,255,255,0.2);
  }
  .tt-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; display: block; }
  .tt-author-name { font-size: 15px; font-weight: 700; }
  .tt-author-role { font-size: 13px; opacity: 0.75; }

  .tt-img-side {
    display: flex; flex-direction: column;
    border-left: 1px solid rgba(255,255,255,0.15);
  }
  .tt-img-wrap { flex: 1; position: relative; overflow: hidden; min-height: 280px; }
  .tt-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .tt-img-counter {
    position: absolute; top: 14px; right: 14px;
    background: #0d0d0d; color: #fff;
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    font-size: 13px; font-weight: 800;
  }
  .tt-img-logo {
    position: absolute; top: 14px; left: 14px;
    color: #fff; font-size: 11px; font-weight: 800;
    display: flex; align-items: center; gap: 5px;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .tt-nav { display: flex; border-top: 1px solid #ddd9d1; }
  .tt-nav-btn {
    flex: 1; display: flex; align-items: center; justify-content: space-between;
    padding: 18px 22px; font-size: 14px; font-weight: 600;
    background: #f5f2ec; color: #0d0d0d;
    border: none; cursor: pointer; font-family: inherit;
    gap: 8px; transition: background 0.18s;
  }
  .tt-nav-btn:hover { background: #ece9e2; }
  .tt-nav-btn--prev { border-right: 1px solid #ddd9d1; }
  .tt-arr { font-size: 18px; }

  .tt-logos {
    display: flex; align-items: center;
    gap: 40px; flex-wrap: wrap;
    margin-top: 32px; padding-top: 32px;
    border-top: 1px solid #ddd9d1;
  }
  .tt-logo-item {
    font-size: 13.5px; font-weight: 700;
    color: #0d0d0d; opacity: 0.6;
    cursor: default; transition: opacity 0.2s;
  }
  .tt-logo-item:hover { opacity: 1; }

  /* ── Team ── */
  .tt-team {
    padding: 80px 60px;
    border-top: 1px solid #ddd9d1;
    background: #f5f2ec;
  }
  .tt-team-head {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 48px;
    margin-bottom: 48px;
  }
  .tt-team-title {
    font-size: clamp(28px, 3.2vw, 46px);
    font-weight: 900; letter-spacing: -1.2px;
    line-height: 1.1; margin: 0; color: #0d0d0d;
  }
  .tt-team-desc {
    font-size: 15px; color: #555; line-height: 1.65;
    max-width: 400px; margin: 0;
  }

  .tt-team-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
  .tt-team-card {
    border: 1px solid #ddd9d1;
    margin: -1px 0 0 -1px;
    overflow: hidden; cursor: pointer;
    transition: box-shadow 0.2s;
  }
  .tt-team-card:hover { box-shadow: 0 0 0 2px #0d0d0d inset; z-index: 1; }

  .tt-team-img-wrap {
    height: 300px; overflow: hidden; position: relative;
  }
  .tt-team-img-wrap img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .tt-team-card:hover .tt-team-img-wrap img { transform: scale(1.06); }

  .tt-team-bar {
    position: absolute; top: 0; left: 0; right: 0;
    background: rgba(13,13,13,0.82);
    padding: 10px 14px;
    display: flex; align-items: center; justify-content: space-between;
    color: #fff; font-size: 11px; font-weight: 700;
  }
  .tt-dept-row { display: flex; align-items: center; gap: 6px; }
  .tt-dept-dot { width: 7px; height: 7px; border-radius: 50%; display: block; }
  .tt-bolt { font-size: 13px; opacity: 0.8; }

  .tt-team-body { padding: 18px 20px; }
  .tt-team-name {
    font-size: 15.5px; font-weight: 800;
    display: flex; align-items: center; gap: 7px;
    margin-bottom: 4px; color: #0d0d0d;
  }
  .tt-verified { color: #00e547; font-size: 14px; }
  .tt-team-role { font-size: 12.5px; color: #888; margin-bottom: 14px; }
  .tt-team-foot { display: flex; align-items: center; justify-content: space-between; }
  .tt-bars { display: flex; gap: 2px; }
  .tt-bar { width: 9px; height: 18px; background: #0d0d0d; }
  .tt-bar--off { background: #ccc; }
  .tt-loc { font-size: 12px; color: #888; }

  .tt-team-controls {
    display: flex; align-items: stretch;
    margin-top: 28px; gap: 0;
  }
  .tt-arr-btn {
    width: 54px; height: 54px;
    background: #00e547;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; cursor: pointer;
    border: none; font-family: inherit;
    transition: background 0.18s; flex-shrink: 0;
  }
  .tt-arr-btn:hover { background: #00cf3f; }
  .tt-experts-btn {
    flex: 1;
    background: #0d0d0d; color: #fff;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 24px; font-size: 14px; font-weight: 600;
    text-decoration: none; margin-left: 1px;
    transition: background 0.18s;
  }
  .tt-experts-btn:hover { background: #1a1a1a; }
  .tt-experts-btn svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .tt-experts-btn:hover svg { transform: translate(3px,-3px); }

  /* Responsive */
  @media (max-width: 1100px) {
    .tt-testimonials, .tt-team { padding: 60px 32px; }
    .tt-head, .tt-team-head { flex-direction: column; gap: 16px; }
    .tt-head-right { text-align: left; }
    .tt-block { grid-template-columns: 1fr; }
    .tt-img-side { border-left: none; border-top: 1px solid #ddd9d1; }
    .tt-team-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .tt-testimonials, .tt-team { padding: 40px 24px; }
    .tt-team-grid { grid-template-columns: 1fr 1fr; }
    .tt-quote-text { font-size: 16px; }
  }
`;