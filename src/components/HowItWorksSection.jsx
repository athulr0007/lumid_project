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
        if (entry.isIntersecting) {
          el.classList.add("hw-vis");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);
}

/* ===== FIXED STACK ANIMATION ===== */
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

    const init = () => {
      if (isMobile() || isTablet()) {
        section.style.marginBottom = "0px";
        desktopOffsets = [];
      } else {
        initDesktop();
      }
    };

    const handleScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = wrap.offsetHeight - vh;
      if (total <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total; // 0 → 1

      if (isMobile()) {
        // card 1 sits at top, each subsequent card travels up to overlap card 1
        // card height = 25svh each
        const cardH = cards[0].offsetHeight;

        // card2 moves during progress 0→0.33
        // card3 moves during progress 0.33→0.66
        // card4 moves during progress 0.66→1
        [1, 2, 3].forEach((i) => {
          const segStart = (i - 1) / 3;
          const segEnd = i / 3;
          const p = Math.min(
            Math.max((progress - segStart) / (segEnd - segStart), 0),
            1
          );
          // Each card travels up by i * cardH to land on card 1
          const totalTravel = i * cardH;
          cards[i].style.transform = `translateY(-${p * totalTravel}px)`;
        });

      } else if (isTablet()) {
        // card2 + card3 move together in phase 1 (0→0.6)
        // card4 moves in phase 2 (0.4→1)
        const p1 = Math.min(Math.max(progress / 0.6, 0), 1);
        const p2 = Math.min(Math.max((progress - 0.4) / 0.6, 0), 1);

        cards[1].style.transform = `translateY(-${p1 * 100}%)`;
        cards[2].style.transform = `translateY(-${p1 * 100}%)`;
        cards[3].style.transform = `translateY(-${p2 * 100}%)`;

      } else {
        // Desktop original diagonal
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
      // reset all transforms on resize before reinit
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

  /* ===== CORRECT PIN AREA ===== */
  .hw-diagonal-wrap {
    padding: 0 54px 100px;
    box-sizing: border-box;
    position: relative;
    height: 400vh; /* scroll space */
  }

  .hw-diagonal-track {
    position: sticky;
    top: 96px; /* 64px navbar + 32px gap */
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

  .hw-diagonal-track {
    width: 100%;
   
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

  .hw-card-pos-4 { right: 0; bottom: -810px; }
  .hw-card-pos-3 { right: 25%; bottom: -410px; }
  .hw-card-pos-2 { right: 50%; bottom: -10px; }
  .hw-card-pos-1 { right: 75%; bottom: 390px; }

  .hw-card-default { background: #e4e4e4ff; color:#111111; }
  .hw-card-green { background: #00e547; color:#111111; }
  .hw-card-blue { background: #3b5bff; color:#ffffff; }
  .hw-card-dark { background: #111111; color:#ffffff; }

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

  /* Card 1: top-left, static anchor */
  .hw-card-pos-1 {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: auto; right: auto;
    grid-column: 1;
    grid-row: 1;
    transform: none !important;
    z-index: 1;
  }

  /* Card 2: top-right, slides DOWN over card 1 from above */
  .hw-card-pos-2 {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: auto; right: auto;
    grid-column: 2;
    grid-row: 1;
    z-index: 2;
    /* js translateY drives this on scroll */
  }

  /* Card 3: bottom-left, slides UP over card 1 from below */
  .hw-card-pos-3 {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: auto; right: auto;
    grid-column: 1;
    grid-row: 2;
    z-index: 3;
  }

  /* Card 4: bottom-right, slides UP over card 2 from below */
  .hw-card-pos-4 {
    position: relative;
    width: 100%;
    height: 100%;
    bottom: auto; right: auto;
    grid-column: 2;
    grid-row: 2;
    z-index: 4;
  }

  .hw-card-diagonal {
    will-change: transform;
  }

  .hw-header {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 40px 20px 32px;
  }

  .hw-title {
    font-size: clamp(32px, 5vw, 48px);
  }

  .hw-desc {
    padding-top: 0;
    font-size: 14px;
  }
}

/* ── MOBILE (≤ 640px) ── */
@media (max-width: 640px) {
  .hw-diagonal-wrap {
    padding: 0;
    height: 400vh;
     overflow: visible;
  }
 .hw-diagonal-wrap {
    padding: 0 !important;
    height: 400vh !important; /* MUST stay 400vh for scroll space */
    margin-bottom: 0 !important;
  }
  .hw-diagonal-track {
    position: sticky !important;
    top: 0 !important;
    height: 100svh !important;
    display: flex !important;
    flex-direction: column !important;
    overflow: hidden !important;
  }

  /* All cards: full width, stacked absolutely so JS can layer them */
   .hw-card-diagonal {
    position: relative !important;
    width: 100% !important;
    height: 25svh !important;
    bottom: auto !important;
    right: auto !important;
    left: auto !important;
    top: auto !important;
    flex-shrink: 0 !important;
    will-change: transform;
    transform: none; /* reset — JS takes over */
  }

  /* card 1: base layer, never moves */
  .hw-card-pos-1 {
    z-index: 1;
    transform: none !important;
  }

  /* card 2 starts below, scrolls up over card 1 */
  .hw-card-pos-2 {
    z-index: 2;
    transform: translateY(100%) !important; /* overridden by JS */
  }

  /* card 3 starts below card 2 */
  .hw-card-pos-3 {
    z-index: 3;
    transform: translateY(200%) !important;
  }

  /* card 4 starts below card 3 */
  .hw-card-pos-4 {
    z-index: 4;
    transform: translateY(300%) !important;
  }

  .hw-header {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 28px 16px 24px;
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

  .hw-step-num {
    font-size: 28px;
  }

  .hw-step-name {
    font-size: 18px;
  }

  .hw-step-text {
    font-size: 13.5px;
  }

  .hw-bg-num {
    font-size: 120px;
    opacity: 0.07;
  }
}
`;