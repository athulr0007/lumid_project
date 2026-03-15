import { useEffect, useRef, useState } from "react";

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

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

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
  }, [ref]);
}

function StackingCards() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      if (!section || !sticky) return;

      const sectionRect = section.getBoundingClientRect();
      const stickyTop = 80;
      const stickyHeight = sticky.offsetHeight;

      const totalScrollable = section.offsetHeight - stickyHeight;
      const travelled = stickyTop - sectionRect.top;
      const next = clamp(
        totalScrollable > 0 ? travelled / totalScrollable : 0,
        0,
        1
      );

      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const getCardTranslateY = (index) => {
    if (index === 0) return 0;

    const segment = 1 / 3;
    const start = (index - 1) * segment;
    const local = clamp((progress - start) / segment, 0, 1);
    const eased = easeOutCubic(local);

    return (1 - eased) * 100;
  };

  return (
    <div ref={sectionRef} className="hw-pin-section">
      <div ref={stickyRef} className="hw-sticky-band">
        <div className="hw-grid">
          {steps.map((step, i) => (
            <div key={step.num} className="hw-cell">
              <div
                className="hw-card-shell"
                style={{
                  transform: `translateY(${getCardTranslateY(i)}%)`,
                }}
              >
                <article className={`hw-card hw-card-${step.bg}`}>
                  <span className="hw-bg-num">{step.num}</span>

                  <div className="hw-card-top">
                    <p className="hw-step-num">{step.num}</p>
                    <h3 className="hw-step-name">{step.name}</h3>
                  </div>

                  <p className="hw-step-text">{step.text}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const headRef = useRef(null);
  useReveal(headRef);

  return (
    <>
      <style>{css}</style>

      <section className="hw-wrap">
        <div ref={headRef} className="hw-header hw-fade">
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

        <StackingCards />
      </section>
    </>
  );
}

const css = `
  html, body, #root {
    background: #f5f2ec;
  }

  .hw-wrap {
    width: 100%;
    background: #f5f2ec;
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
    gap: 48px;
    align-items: start;
    padding: 80px 54px 42px;
    box-sizing: border-box;
    background: #f5f2ec;
  }

  .hw-title {
    margin: 0;
    max-width: 760px;
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

  .hw-desc sup {
    font-size: 60%;
    vertical-align: super;
  }

  /* critical fix:
     sticky visible height = card row height
     section total height = sticky height + exact pin distance
  */
  .hw-pin-section {
    --band-h: 430px;
    --pin-distance: 300vh;

    position: relative;
    margin: 0 54px;
    height: calc(var(--band-h) + var(--pin-distance));
    background: #f5f2ec;
  }

  .hw-sticky-band {
    position: sticky;
    top: 80px;
    height: var(--band-h);
    overflow: hidden;
    background: #f5f2ec;
  }

  .hw-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .hw-cell {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .hw-card-shell {
    width: 100%;
    height: 100%;
    will-change: transform;
  }

  .hw-card {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 28px 20px 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .hw-card-default {
    background: rgb(238, 236, 227);
    color: #0d0d0d;
  }

  .hw-card-green {
    background: rgb(91, 251, 122);
    color: #0d0d0d;
  }

  .hw-card-blue {
    background: rgb(50, 85, 255);
    color: rgb(251, 249, 239);
  }

  .hw-card-dark {
    background: rgb(13, 10, 10);
    color: rgb(251, 249, 239);
  }

  .hw-bg-num {
    position: absolute;
    top: -6px;
    right: -8px;
    font-size: clamp(128px, 12vw, 210px);
    line-height: 0.82;
    letter-spacing: -0.07em;
    font-weight: 900;
    pointer-events: none;
    user-select: none;
    color: rgba(0, 0, 0, 0.06);
  }

  .hw-card-blue .hw-bg-num,
  .hw-card-dark .hw-bg-num {
    color: rgba(255, 255, 255, 0.07);
  }

  .hw-card-top {
    position: relative;
    z-index: 1;
  }

  .hw-step-num {
    margin: 0 0 4px;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.04em;
    font-weight: 500;
  }

  .hw-step-name {
    margin: 0;
    font-size: clamp(26px, 2.05vw, 42px);
    line-height: 1;
    letter-spacing: -0.05em;
    font-weight: 500;
  }

  .hw-step-text {
    position: relative;
    z-index: 1;
    margin: 0;
    max-width: 95%;
    font-size: 13px;
    line-height: 1.48;
    letter-spacing: -0.02em;
    font-weight: 500;
    color: inherit;
  }

  .hw-card-default .hw-step-text,
  .hw-card-green .hw-step-text {
    color: rgba(13, 13, 13, 0.92);
  }

  .hw-card-blue .hw-step-text,
  .hw-card-dark .hw-step-text {
    color: rgba(251, 249, 239, 0.94);
  }

  @media (max-width: 1200px) {
    .hw-header {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 64px 32px 34px;
    }

    .hw-pin-section {
      margin: 0 32px;
    }

    .hw-desc {
      max-width: 430px;
    }
  }

  @media (max-width: 900px) {
    .hw-pin-section {
      --band-h: auto;
      height: auto;
      margin: 0 24px 24px;
    }

    .hw-sticky-band {
      position: relative;
      top: 0;
      height: auto;
      overflow: visible;
    }

    .hw-grid {
      grid-template-columns: 1fr 1fr;
      height: auto;
    }

    .hw-cell {
      height: 320px;
      overflow: visible;
    }

    .hw-card-shell {
      transform: none !important;
      height: 100%;
    }

    .hw-card {
      height: 100%;
    }
  }

  @media (max-width: 640px) {
    .hw-header {
      padding: 44px 20px 26px;
    }

    .hw-title {
      font-size: clamp(34px, 10vw, 52px);
    }

    .hw-pin-section {
      margin: 0 20px 20px;
    }

    .hw-grid {
      grid-template-columns: 1fr;
    }

    .hw-cell {
      height: 260px;
    }

    .hw-card {
      padding: 22px 18px 18px;
    }

    .hw-step-num {
      font-size: 16px;
    }

    .hw-step-name {
      font-size: 22px;
    }

    .hw-step-text {
      font-size: 12px;
      line-height: 1.45;
    }
  }
`;