import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    name: "Strategy",
    bg: "default",
    text: "We begin by understanding your organization's goals, pain points, and existing systems. Together, we define a clear roadmap that aligns automation with measurable business outcomes.",
  },
  {
    num: "02",
    name: "Architect",
    bg: "green",
    text: "Our team designs a custom automation framework tailored to your tools, data, and workflows—ensuring scalability, reliability, and effortless integration across your ecosystem.",
  },
  {
    num: "03",
    name: "Launch",
    bg: "blue",
    text: "From prototypes to full-scale rollouts, we implement, test, and refine intelligent systems that deliver immediate efficiency gains and lasting operational impact.",
  },
  {
    num: "04",
    name: "Growth",
    bg: "dark",
    text: "After deployment, we continuously optimize performance, expand capabilities, and help your teams harness automation to drive sustained growth and innovation.",
  },
];

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("hw-vis"); obs.disconnect(); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

function useStackAnimation(ref) {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const wrap = section.querySelector(".hw-diagonal-wrap");
    const cards = Array.from(section.querySelectorAll(".hw-card-diagonal"));
    if (!wrap || cards.length < 2) return;

    const isMobile = () => window.innerWidth <= 640;
    const isTablet = () => window.innerWidth > 640 && window.innerWidth <= 900;

    let desktopOffsets = [];

    const initDesktop = () => {
      const prev = cards.map(c => c.style.transform);
      cards.forEach(c => (c.style.transform = "none"));
      const baseTop = cards[0].getBoundingClientRect().top;
      desktopOffsets = cards.map((c, i) =>
        i === 0 ? 0 : baseTop - c.getBoundingClientRect().top
      );
      cards.forEach((c, i) => (c.style.transform = prev[i] || ""));
      wrap.style.height = "";

      const track = wrap.querySelector(".hw-diagonal-track");
      const trackGap =
        track.getBoundingClientRect().bottom -
        cards[0].getBoundingClientRect().bottom;
      const pb = parseFloat(window.getComputedStyle(wrap).paddingBottom) || 0;
      section.style.marginBottom = `-${trackGap + pb - 70}px`;
    };

    const initMobile = () => {
      // marginBottom is driven dynamically in handleScroll during phase 3
      // (when card 4 is moving). Reset to 0 on init/resize.
      section.style.marginBottom = "0px";
    };

    const init = () => {
      if (isMobile()) {
        desktopOffsets = [];
        initMobile();
      } else if (isTablet()) {
        section.style.marginBottom = "0px";
        desktopOffsets = [];
      } else {
        initDesktop();
      }
    };

    // ease-in-out cubic
    const ease = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const handleScroll = () => {
      if (isMobile()) {
        // ── MOBILE STACKING ──
        // Cards start: 01 top, 02 below 01, 03 below 02, 04 below 03 (each 25svh).
        // Each card travels UP exactly 1 × cardH — filling the slot of the card above it.
        //
        // Phase 0→1/3 : card 2 slides up 1×cardH  → sits on card 1's slot
        // Phase 1/3→2/3 : card 3 slides up 1×cardH  → sits on card 2's old slot
        //                  (which visually = card 1's slot because card 2 is already there)
        // Phase 2/3→1  : card 4 slides up 1×cardH  → same
        //
        // Cards hold their final translateY once their phase is done.
        // progress = 1 → all stacked, wrap exits sticky, scroll resumes.

        const rect = wrap.getBoundingClientRect();
        const wrapScrolled = -rect.top;
        const animTotal = wrap.offsetHeight - window.innerHeight;

        if (wrapScrolled <= 0 || animTotal <= 0) {
          cards.forEach((c, i) => { if (i > 0) c.style.transform = "translateY(0px)"; });
          return;
        }

        const progress = Math.min(wrapScrolled / animTotal, 1);
        const cardH = cards[0].offsetHeight;

        // All active cards move together each phase by 1×slot upward.
        // Each card stops when it has accumulated enough travel to reach card 1.
        //
        // Phase 1 (0→1/3):   cards 2,3,4 all move 1×slot. Card 2 arrives at card 1 → done.
        // Phase 2 (1/3→2/3): cards 3,4 move another 1×slot. Card 3 arrives → done.
        // Phase 3 (2/3→1):   card 4 moves final 1×slot. Arrives → done.
        //
        // card 2 total = 1×slot  (only phase 1)
        // card 3 total = 2×slot  (phase 1 + phase 2)
        // card 4 total = 3×slot  (phase 1 + phase 2 + phase 3)
        const gap = 8;
        const slot = cardH + gap;
        const e1 = ease(Math.min(Math.max((progress - 0)   / (1/3), 0), 1));
        const e2 = ease(Math.min(Math.max((progress - 1/3) / (1/3), 0), 1));
        const e3 = ease(Math.min(Math.max((progress - 2/3) / (1/3), 0), 1));

        cards[1].style.transform = `translateY(-${slot * e1}px)`;
        cards[2].style.transform = `translateY(-${slot * (e1 + e2)}px)`;
        cards[3].style.transform = `translateY(-${slot * (e1 + e2 + e3)}px)`;

        // Pull next component up as card 4 moves (phase 3 only).
        // e3 goes 0→1 during phase 3, so marginBottom goes 0 → -(slot*3).
        // This means the next section starts moving exactly when card 4 starts.
        section.style.marginBottom = `-${slot * 3 * e3}px`;

      } else if (isTablet()) {
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = wrap.offsetHeight - vh;
        if (total <= 0) return;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = scrolled / total;

        const p1 = Math.min(Math.max(progress / 0.6, 0), 1);
        const p2 = Math.min(Math.max((progress - 0.4) / 0.6, 0), 1);
        cards[1].style.transform = `translateY(-${p1 * 100}%)`;
        cards[2].style.transform = `translateY(-${p1 * 100}%)`;
        cards[3].style.transform = `translateY(-${p2 * 100}%)`;

      } else {
        // ── DESKTOP (unchanged) ──
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = wrap.offsetHeight - vh;
        if (total <= 0) return;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = scrolled / total;

        if (!desktopOffsets.length) return;
        const maxOffset = Math.max(...desktopOffsets.map(Math.abs));
        const simulatedScroll = progress * maxOffset;
        cards.forEach((card, i) => {
          if (i === 0) return;
          const travel = Math.min(simulatedScroll, Math.abs(desktopOffsets[i]));
          card.style.transform = `translateY(-${travel}px)`;
        });
      }
    };

    const onResize = () => {
      cards.forEach(c => (c.style.transform = ""));
      init();
      handleScroll();
    };

    init();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", onResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
}

function DiagonalCards() {
  return (
    <div className="hw-diagonal-wrap">
      <div className="hw-diagonal-track">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className={`hw-card hw-card-${s.bg} hw-card-diagonal hw-card-pos-${i + 1}`}
          >
            <span className="hw-bg-num">{s.num}</span>
            <div className="hw-card-top">
              <p className="hw-step-num">{s.num}</p>
              <h3 className="hw-step-name">{s.name}</h3>
            </div>
            <p className="hw-step-text">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const headRef = useRef(null);
  const sectionRef = useRef(null);

  useReveal(headRef);
  useStackAnimation(sectionRef);

  return (
    <>
      <style>{css}</style>
      <section ref={sectionRef} className="hw-wrap">
        <div ref={headRef} className="hw-fade hw-header">
          <div>
            <h2 className="hw-title">
              How we turn ideas into intelligent systems.
            </h2>
          </div>
          <div>
            <p className="hw-desc">
              Source<sup>®</sup> guides you through a focused, four-step process
              that blends strategic insight, technical precision, and measurable
              outcomes.
            </p>
          </div>
        </div>
        <DiagonalCards />
      </section>
    </>
  );
}

const css = `
  .hw-wrap {
    width: 100%;
    background: #f5f2ec;
    overflow: visible;
  }

  .hw-diagonal-wrap {
    padding: 0 54px 100px;
    box-sizing: border-box;
    position: relative;
    height: 400vh;
  }

  .hw-diagonal-track {
    position: sticky;
    top: 96px;
    height: 100vh;
  }

  .hw-fade {
    opacity: 0;
    transform: translateY(28px);
    transition:
      opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hw-vis {
    opacity: 1;
    transform: translateY(0);
  }

  .hw-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    align-items: start;
    gap: 48px;
    padding: 80px 54px 42px;
    box-sizing: border-box;
  }

  .hw-title {
    margin: 0;
    max-width: 860px;
    color: #111111;
    font-size: clamp(44px, 4vw, 76px);
    line-height: 0.96;
    letter-spacing: -0.06em;
    font-weight: 600;
  }

  .hw-desc {
    margin: 0;
    padding-top: 30px;
    color: #6f6a63;
    font-size: 16px;
    line-height: 1.58;
    letter-spacing: -0.015em;
  }

  .hw-card {
    position: relative;
    padding: 42px 36px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .hw-card-diagonal {
    position: absolute;
    width: 25%;
    height: 460px;
    will-change: transform;
  }

  .hw-card-pos-4 { right: 0;   bottom: -810px; }
  .hw-card-pos-3 { right: 25%; bottom: -410px; }
  .hw-card-pos-2 { right: 50%; bottom: -10px;  }
  .hw-card-pos-1 { right: 75%; bottom: 390px;  }

  .hw-card-default { background: #e4e4e4ff; color: #111111; }
  .hw-card-green   { background: #00e547;   color: #111111; }
  .hw-card-blue    { background: #3b5bff;   color: #ffffff; }
  .hw-card-dark    { background: #111111;   color: #ffffff; }

  .hw-bg-num {
    position: absolute;
    top: -24px;
    right: -10%;
    font-size: clamp(160px, 14vw, 240px);
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.04em;
    opacity: 0.05;
    pointer-events: none;
  }

  .hw-card-top {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .hw-step-num {
    margin: 0;
    font-size: clamp(32px, 3vw, 42px);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.04em;
  }

  .hw-step-name {
    margin: 0;
    font-size: clamp(20px, 2vw, 24px);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .hw-step-text {
    margin: 0;
    font-size: 15px;
    line-height: 1.58;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  /* ── TABLET (641px – 900px) ── */
  @media (min-width: 641px) and (max-width: 900px) {
    .hw-diagonal-wrap {
      padding: 0 20px 0;
      height: 400vh;
    }
    .hw-diagonal-track {
      position: sticky;
      top: 64px;
      height: calc(100vh - 64px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 0;
    }
    .hw-card-pos-1 {
      position: relative; width: 100%; height: 100%;
      bottom: auto; right: auto;
      grid-column: 1; grid-row: 1;
      transform: none !important;
      z-index: 1;
    }
    .hw-card-pos-2 {
      position: relative; width: 100%; height: 100%;
      bottom: auto; right: auto;
      grid-column: 2; grid-row: 1;
      z-index: 2;
    }
    .hw-card-pos-3 {
      position: relative; width: 100%; height: 100%;
      bottom: auto; right: auto;
      grid-column: 1; grid-row: 2;
      z-index: 3;
    }
    .hw-card-pos-4 {
      position: relative; width: 100%; height: 100%;
      bottom: auto; right: auto;
      grid-column: 2; grid-row: 2;
      z-index: 4;
    }
    .hw-card-diagonal { will-change: transform; }
    .hw-header {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 40px 20px 32px;
    }
    .hw-title  { font-size: clamp(32px, 5vw, 48px); }
    .hw-desc   { padding-top: 0; font-size: 14px; }
  }

  /* ── MOBILE (≤ 640px) ── */
  @media (max-width: 640px) {
    .hw-wrap {
      overflow: visible;
    }

   
    .hw-diagonal-wrap {
      padding: 0 !important;
      height: 400vh !important;
      margin-bottom: 0 !important;
      overflow: visible !important;
    }

    .hw-diagonal-track {
      position: sticky !important;
      top: 0 !important;
      height: calc(28svh * 4 + 8px * 3) !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      padding: 0 16px !important;
      box-sizing: border-box !important;
      gap: 8px !important;
    }

    /*
      Each card: taller (calc so 4 cards + 3 gaps = 100svh),
      rounded corners, full width within the padded track.
      NO CSS transform — JS sets translateY exclusively.
    */
    .hw-card-diagonal {
      position: relative !important;
      width: 100% !important;
      height: 28svh !important;
      bottom: auto !important;
      right: auto !important;
      left: auto !important;
      top: auto !important;
      flex-shrink: 0 !important;
      will-change: transform;
      border-radius: 16px !important;
      box-sizing: border-box !important;
    }

    /* Card 1 never moves. Higher z-index = slides on top. */
    .hw-card-pos-1 { z-index: 1; }
    .hw-card-pos-2 { z-index: 2; }
    .hw-card-pos-3 { z-index: 3; }
    .hw-card-pos-4 { z-index: 4; }

    .hw-header {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 28px 16px 20px;
    }
    .hw-title {
      font-size: 28px;
      line-height: 1.05;
      letter-spacing: -0.04em;
    }
    .hw-desc {
      padding-top: 0;
      font-size: 13px;
      line-height: 1.5;
    }
    .hw-step-num  { font-size: 28px; }
    .hw-step-name { font-size: 18px; }
    .hw-step-text { font-size: 13.5px; }
    .hw-bg-num    { font-size: 120px; opacity: 0.07; }
  }
`;