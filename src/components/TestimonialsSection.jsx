import { useState, useEffect, useRef } from "react";

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
  }, []);
}

const testimonials = [
  {
    text: "Manual itinerary building and supplier coordination were breaking our operations. Source rebuilt the process — our team moves twice as fast, client communication is seamless, and scaling is finally possible.",
    name: "Daria Simonova",
    role: "Director of Operations, 45 Degrees",
    avatar: "https://framerusercontent.com/images/MrSXoTCvZNgopeJDgDzvkqAu4U.jpg?width=4000&height=6000",
    img: "https://framerusercontent.com/images/jp9F0cHBhgczl2BdRQvqWjqm4c.jpg?width=800&height=1200",
    logo: "↗ 45 Degrees°",
    counter: "1",
    bg: "#3b5bff", /* Blue */
  },
  {
    text: "Source's AI system transformed how we assess risk. False positives dropped dramatically, and our team can now focus on real threats rather than chasing noise through the system.",
    name: "Marcus Chen",
    role: "CTO, Clandestine",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    logo: "✚ Clandestine",
    counter: "2",
    bg: "#111111", /* Dark */
  },
];

/* Exact Framer logo image URLs */
const logos = [
  { name: "45 Degrees", src: "https://framerusercontent.com/images/NpCJD35se5ZstHxiQHsYL1hNxQ.png?width=3760&height=960", w: 125 },
  { name: "Clandestine", src: "https://framerusercontent.com/images/dTTcUwFxCWed7n4BIICu9bRBIQ.png?width=4060&height=960", w: 135 },
  { name: "GlobalBank", src: "https://framerusercontent.com/images/7lAKw9G4k2mR442E7S5a1bsETrU.png?width=3860&height=960", w: 129 },
  { name: "Railspeed", src: "https://framerusercontent.com/images/SiA8FFeu51xNGTj1GdFx3tVltos.png?width=3400&height=960", w: 113 },
  { name: "Neon", src: "https://framerusercontent.com/images/h1OyLn2Oobo9tYLyvrks2tmtpY.png?width=1136&height=960", w: 38 },
  { name: "Elasticware", src: "https://framerusercontent.com/images/9sG6LBmCkl76pGr7c4XTqH1uw.png?width=4420&height=960", w: 147 },
  { name: "ennLabs", src: "https://framerusercontent.com/images/zi9dvmHsn9gDIUpoYID7APz5Us.png?width=3240&height=960", w: 108 },
  { name: "Leapyear", src: "https://framerusercontent.com/images/gooMgmz9gGvHuaYpnBPqgk8nDp0.png?width=3260&height=960", w: 109 },
];

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const headRef = useRef(null);
  const blockRef = useRef(null);
  const logosRef = useRef(null);

  useReveal(headRef);
  useReveal(blockRef, 100);
  useReveal(logosRef, 180);

  const go = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIdx(i => (i + dir + testimonials.length) % testimonials.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(false);
        });
      });
    }, 300);
  };

  const t = testimonials[idx];
  const track = [...logos, ...logos];

  return (
    <>
      <style>{css}</style>
      <section className="tt-wrap">

        {/* ── Header ── */}
        <div className="tt-head tt-fade" ref={headRef}>
          <h2 className="tt-title">
            What our clients say about working with Source<sup>®</sup>.
          </h2>
          <div className="tt-head-right">
            <p className="tt-sub">
              Hear from the companies that rely on Source to build, scale, and
              innovate with AI every day.
            </p>
            <a className="tt-review" href="#">
              <span className="tt-roll-wrap">
                <span className="tt-roll-text">Leave a review ↗</span>
                <span className="tt-roll-text">Leave a review ↗</span>
              </span>
            </a>
          </div>
        </div>

        {/* ── Main block ── */}
        <div className={`tt-block tt-fade`} ref={blockRef}>

          {/* LEFT: colored quote panel */}
          <div className="tt-quote" style={{ backgroundColor: t.bg }}>
            <div className={`tt-quote-content ${isAnimating ? "tt-slide-out" : "tt-slide-in"}`}>
              <p className="tt-quote-text">"{t.text}"</p>
              <div className="tt-author">
                <img className="tt-avatar" src={t.avatar} alt={t.name} />
                <div>
                  <div className="tt-author-name">{t.name}</div>
                  <div className="tt-author-role">{t.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: image + counter + nav */}
          <div className="tt-right">
            {/* Image Wrap */}
            <div className="tt-img-wrap">
              <img src={t.img} alt="" className={`tt-img ${isAnimating ? "tt-fade-out" : "tt-fade-in"}`} />
              {/* Counter top-left */}
              <div className="tt-counter">{t.counter}</div>
              {/* Total bottom-right */}
              <div className="tt-total">{testimonials.length}</div>
              {/* Logo centred */}
              <div className={`tt-img-logo ${isAnimating ? "tt-fade-out" : "tt-fade-in"}`}>{t.logo}</div>
            </div>

            {/* Nav buttons */}
            <div className="tt-nav">
              <button className="tt-btn tt-btn-next" onClick={() => go(1)}>
                <span className="tt-roll-wrap">
                  <span className="tt-roll-text">Next →</span>
                  <span className="tt-roll-text">Next →</span>
                </span>
              </button>
              <button className="tt-btn tt-btn-prev" onClick={() => go(-1)}>
                <span className="tt-roll-wrap">
                  <span className="tt-roll-text">← Previous</span>
                  <span className="tt-roll-text">← Previous</span>
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* ── Logos marquee ── */}
        <div className="tt-logos-outer tt-fade" ref={logosRef}>
          <div className="tt-logos-track">
            {track.map((l, i) => (
              <div key={i} className="tt-logo-item" style={{ width: l.w }}>
                <img src={l.src} alt={l.name} />
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}

const css = `
  /* ── Section ── */
  .tt-wrap {
  position: relative;
    width: 100%;
    background: #f5f2ec;
    border-top: 1px solid #ddd9d1;
    padding: 80px 60px 0;
    box-sizing: border-box;
  }

  /* ── Reveal ── */
  .tt-fade {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .tt-vis { opacity: 1; transform: none; }

  /* ── Header ──
     Reference: large title left, sub+button right, same grid pattern */
  .tt-head {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 400px;
    gap: 48px;
    align-items: start;
    padding-bottom: 48px;
  }

  .tt-title {
    margin: 0;
    font-size: clamp(36px, 3.8vw, 56px);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 1.0;
    color: #0d0d0d;
  }
  .tt-title sup { font-size: 50%; vertical-align: super; }

  .tt-head-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .tt-sub {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: #666;
    letter-spacing: -0.01em;
  }

  /* Leave a review — roll animation */
  .tt-review {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #0d0d0d;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.01em;
    overflow: hidden;
  }

  /* ── Roll animation (used for review + nav buttons) ── */
  .tt-roll-wrap {
    display: flex;
    flex-direction: column;
    height: 1.2em;
    overflow: hidden;
    position: relative;
  }
  .tt-roll-text {
    display: block;
    line-height: 1.2em;
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
    white-space: nowrap;
  }
  .tt-roll-text:last-child {
    position: absolute;
    top: 100%;
    left: 0;
  }
  .tt-review:hover .tt-roll-text,
  .tt-btn:hover .tt-roll-text {
    transform: translateY(-100%);
  }

  /* ── Main block ──
     Reference: blue left (~65%) | image+nav right (~35%)
     Left/right border at 60px inset matching page          */
  .tt-block {
    display: grid;
     grid-template-columns: 60% 40%;
    border: 1px solid #ddd9d1;
    overflow: hidden;
    transition: opacity 0.26s, transform 0.26s;
    align-items: start;
  }

  /* LEFT: colored quote panel */
  .tt-quote {
    color: #fff;
    padding: 90px 48px;
    display: flex;
    flex-flow: column;
    place-content: flex-start;
    align-items: flex-start;
    height: min-content;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    transition: background-color 0.5s ease;
  }

  .tt-quote-content {
    display: flex;
    flex-flow: column;
    gap: 64px;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .tt-slide-out {
    opacity: 0;
    transform: translateX(40px);
  }
  .tt-slide-in {
    opacity: 1;
    transform: translateX(0);
  }

  .tt-quote-text {
    margin: 0;
    font-size: clamp(16px, 1.6vw, 22px);
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: -0.03em;
    color: rgb(251, 249, 239);
  }

  .tt-author {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .tt-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  .tt-author-name {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: rgb(251, 249, 239);
  }
  .tt-author-role {
    font-size: 13px;
    color: rgb(238, 236, 227);
    letter-spacing: -0.01em;
    margin-top: 2px;
  }

  /* RIGHT: image + nav */
  .tt-right {
    display: flex;
    flex-direction: column;
    border-left: 1px solid #ddd9d1;
  }

  .tt-img-wrap {
    position: relative;
    overflow: hidden;
    /* Image is taller than colored box — logos strip sits below box */
    height: clamp(260px, 28vw, 390px);
    min-height: 150px;
    transition: opacity 0.3s ease;
    padding: 30px;
    background: #dadada;
  }

  .tt-fade-out { opacity: 0; }
  .tt-fade-in  { opacity: 1; }

  .tt-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: opacity 0.3s ease;
    clip-path: polygon(64px 0, 100% 0, 100% calc(100% - 64px), calc(100% - 64px) 100%, 0 100%, 0 64px);
  }

  /* Counter — top left void */
  .tt-counter {
    position: absolute;
    top: 16px;
    left: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #111111;
    z-index: 2;
  }

  /* Total — bottom right void */
  .tt-total {
    position: absolute;
    bottom: 16px;
    right: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #111111;
    z-index: 2;
  }

  /* Logo centered on image */
  .tt-img-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #d5d5d5;
    font-size: clamp(24px, 3vw, 42px);
    font-weight: 700;
    letter-spacing: -0.03em;
    z-index: 2;
    width: 100%;
    text-align: center;
    transition: opacity 0.3s ease;
  }

  /* Nav buttons */
  .tt-nav {
    display: grid;
    grid-template-columns: 1fr;
    border-top: 1px solid #ddd9d1;
  }

  .tt-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 24px;
    background: #0d0d0d;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: left;
    width: 100%;
    transition: background 0.18s;
  }
  .tt-btn:hover { background: #1a1a1a; }

  .tt-btn-prev {
    background: #000000;
    color: #f8f5f5;
    border-top: 1px solid #ddd9d1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tt-btn-prev:hover { background: #eeeee3; }

  /* ── Logos marquee ──
     Uses exact Framer logo images, gap: 128px matching Framer */
  .tt-logos-outer {
    width: 60%;
    background-color:#ddd9d1;
    overflow: hidden;
    border-top: 1px solid #ddd9d1;
    padding: 42px 0;
transform: translateY(-115px);
  //   mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  //   -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  // }

  .tt-logos-track {
    display: flex;
    align-items: center;
    gap: 128px;
    width: max-content;
    animation: tt-scroll 28s linear infinite;
    will-change: transform;
  }
    .tt-logos-outer::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;              /* match right column */
  height: 100%;
  border-top: 1px solid #ddd9d1;
}
  

  @keyframes tt-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .tt-logo-item {
    flex-shrink: 0;
    height: 29px;
    display: flex;
    align-items: center;
  }
  .tt-logo-item img {
    height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
    filter: brightness(0);
    opacity: 0.7;
  }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .tt-wrap { padding: 64px 40px 0; }
    .tt-head { grid-template-columns: 1fr; gap: 20px; }
    .tt-block { grid-template-columns: 1fr; }
    .tt-right { border-left: none; border-top: 1px solid #ddd9d1; }
    .tt-img-wrap { min-height: 280px; }
  }

  @media (max-width: 640px) {
    .tt-wrap { padding: 48px 24px 0; }
    .tt-title { font-size: 32px; }
    .tt-quote { padding: 36px 28px; }
    .tt-quote-text { font-size: 17px; }
  }
`;