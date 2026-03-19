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

    let offsets = [];
    const initOffsets = () => {
      // Remove any existing transforms to get pure, accurate CSS layout differences
      const prevTransforms = cards.map(c => c.style.transform);
      cards.forEach(card => card.style.transform = 'none');

      const baseTop = cards[0].getBoundingClientRect().top;
      offsets = cards.map((card, i) =>
        i === 0 ? 0 : baseTop - card.getBoundingClientRect().top
      );

      // Restore transforms
      cards.forEach((card, i) => card.style.transform = prevTransforms[i] || '');

      // Let the original CSS 400vh handle the deep stick duration, remove inline override
      wrap.style.height = '';

      // === REMOVE THE UNWANTED BOTTOM VOID ===
      // Because Card 4 starts at the bottom and translates up to align, it naturally leaves exactly
      // 'maxOffset' pixels of empty void space beneath it inside the track.
      // We physically pull the next section up to cover this void perfectly, leaving only a 20px gap.
      const maxOffset = Math.abs(offsets[cards.length - 1]);
      const paddingBottom = parseFloat(window.getComputedStyle(wrap).paddingBottom) || 0;
      const targetGap = 70;
      
      // Apply negative margin to the OUTermost section so it perfectly pulls the next React 
      // component on the page up to cover the empty track space. Also prevent this on mobile.
      if (window.innerWidth > 900) {
        section.style.marginBottom = `-${maxOffset + paddingBottom - targetGap}px`;
        wrap.style.marginBottom = '0px'; 
      } else {
        section.style.marginBottom = '0px';
        wrap.style.marginBottom = '0px';
      }
    };
    initOffsets();

    const handleScroll = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;

      const total = wrap.offsetHeight - vh;
      if (total <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = scrolled / total;

      // The maximum distance the LAST card needs to travel
      const maxOffset = Math.abs(offsets[cards.length - 1]);

      // Scrub the short physical travel distance over the entire massive 400vh track
      // Because it finishes exactly at progress = 1.0, there is zero unwanted bottom.
      const simulatedScroll = progress * maxOffset;

      cards.forEach((card, i) => {
        if (i === 0) return;

        const cardMaxTravel = Math.abs(offsets[i]);

        // As you scroll, they scrub smoothly and cap exactly when they align
        let travel = Math.min(simulatedScroll, cardMaxTravel);

        card.style.transform = `translateY(-${travel}px)`;
      });
    };

    const onResize = () => {
      initOffsets();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
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
    top: 0;
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
    font-weight: 900;
  }

  .hw-desc {
    margin: 0;
    padding-top: 6px;
    color: #6f6a63;
    font-size: 15px;
    line-height: 1.58;
    letter-spacing: -0.015em;
  }

  .hw-diagonal-track {
    width: 100%;
  }

  .hw-card {
    position: relative;
    padding: 28px 20px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hw-card-diagonal {
    position: absolute;
    width: calc(25% - 5px);
    height: 460px;
    will-change: transform;
  }

  .hw-card-pos-4 { right: 0; bottom: 0; }
  .hw-card-pos-3 { right: 25%; bottom: 130px; }
  .hw-card-pos-2 { right: 50%; bottom: 260px; }
  .hw-card-pos-1 { right: 75%; bottom: 390px; }

  .hw-card-default { background: rgb(238,236,227); color:#0d0d0d; }
  .hw-card-green { background: rgb(91,251,122); color:#0d0d0d; }
  .hw-card-blue { background: rgb(50,85,255); color:#fff; }
  .hw-card-dark { background: rgb(13,10,10); color:#fff; }

  .hw-bg-num {
    position:absolute;
    top:-6px;
    right:-8px;
    font-size:clamp(128px,12vw,210px);
    opacity:0.06;
  }

  .hw-step-name { font-size:clamp(26px,2vw,42px); }
  .hw-step-text { font-size:13px; }

  @media (max-width:900px){
    .hw-diagonal-wrap{height:auto;}
    .hw-diagonal-track{position:static;height:auto;display:grid;grid-template-columns:1fr 1fr;}
    .hw-card-diagonal{position:relative;width:100%;height:320px;transform:none !important;}
  }

  @media (max-width:640px){
    .hw-diagonal-track{grid-template-columns:1fr;}
  }
`;