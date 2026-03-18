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
  useReveal(headRef);

  return (
    <>
      <style>{css}</style>

      <section className="hw-wrap">
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

  .hw-diagonal-wrap {
    padding: 0 54px 100px;
    box-sizing: border-box;
    overflow: visible;
  }

  .hw-diagonal-track {
    position: relative;
    width: 100%;
    height: 820px;
  }

  .hw-card {
    position: relative;
    padding: 28px 20px 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .hw-card-diagonal {
    position: absolute;
    width: calc(25% - 2px);
    height: 430px;
  }

  .hw-card-pos-4 {
    right: 0;
    bottom: 0;
  }

  .hw-card-pos-3 {
    right: 25%;
    bottom: 130px;
  }

  .hw-card-pos-2 {
    right: 50%;
    bottom: 260px;
  }

  .hw-card-pos-1 {
    right: 75%;
    bottom: 390px;
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

    .hw-desc {
      max-width: 430px;
    }

    .hw-diagonal-wrap {
      padding: 0 32px 80px;
    }

    .hw-diagonal-track {
      height: 700px;
    }

    .hw-card-diagonal {
      height: 380px;
    }

    .hw-card-pos-4 {
      right: 0;
      bottom: 0;
    }

    .hw-card-pos-3 {
      right: 25%;
      bottom: 105px;
    }

    .hw-card-pos-2 {
      right: 50%;
      bottom: 210px;
    }

    .hw-card-pos-1 {
      right: 75%;
      bottom: 315px;
    }
  }

  @media (max-width: 900px) {
    .hw-diagonal-wrap {
      padding: 0 24px 40px;
    }

    .hw-diagonal-track {
      position: static;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .hw-card-diagonal {
      position: relative;
      width: 100%;
      height: 320px;
      right: auto !important;
      bottom: auto !important;
    }
  }

  @media (max-width: 640px) {
    .hw-header {
      padding: 44px 20px 26px;
    }

    .hw-title {
      font-size: clamp(34px, 10vw, 52px);
    }

    .hw-diagonal-wrap {
      padding: 0 20px 20px;
    }

    .hw-diagonal-track {
      grid-template-columns: 1fr;
    }

    .hw-card-diagonal {
      height: 260px;
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