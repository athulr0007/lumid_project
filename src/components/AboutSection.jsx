import { useEffect, useRef, useState } from "react";

function ScrollRevealText({ text }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.9;
      const end = vh * 0.18;
      const raw = (start - rect.top) / (start - end);

      setProgress(Math.max(0, Math.min(1, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const words = text.split(" ");
  const total = words.length;

  return (
    <p className="ab-text" ref={ref}>
      {words.map((word, index) => {
        const local = Math.max(
          0,
          Math.min(1, (progress - index / total) / (1 / total))
        );

        const value = Math.round(175 + (18 - 175) * local);

        return (
          <span
            key={`${word}-${index}`}
            style={{ color: `rgb(${value}, ${value}, ${value})` }}
          >
            {word}
            {index !== total - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

const offices = [
  "London, UK",
  "New York, USA",
  "Berlin, Germany",
  "Tokyo, Japan",
  "Dubai, UAE",
];

const aboutText =
  "Founded in 2020, Source® has quickly become a trusted partner for companies seeking to integrate AI into their daily operations. Our team blends strategic insight with technical precision to design automation systems that deliver measurable impact.";

export default function AboutSection() {
  return (
    <>
      <style>{css}</style>

      <section className="ab-wrap">
        <div className="ab-left">
          <div className="ab-left-inner">
            <p className="ab-off-label">
              We're a remote-first
              <br />
              company and operate from
              <br />
              our offices in:
            </p>

            <ul className="ab-off-list">
              {offices.map((office) => (
                <li key={office}>
                  <span className="ab-bullet" />
                  <span>{office}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ab-right">
          <div className="ab-right-inner">
            <ScrollRevealText text={aboutText} />

        <a className="ab-btn" href="#">
  <span className="ab-btn-roll">
    <span className="ab-btn-track">
      <span>About us</span>
      <span>About us</span>
    </span>
  </span>

  <svg className="ab-btn-icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3.5 14.5L14.5 3.5M14.5 3.5H6M14.5 3.5V12"
                  stroke="currentColor"
                  strokeWidth="1.55"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const css = `
  .ab-wrap {
    position: relative;
    display: grid;
    grid-template-columns: 375px minmax(0, 1fr);
    width: calc(100% - 67px);
    margin-left: 67px;
    margin-right: 0;
    min-height: 476px;
    background: #f3f1ea;
    border-top: 1px solid #d7d3ca;
    border-left: 1px solid #d7d3ca;
    border-right: 1px solid #d7d3ca;
    border-bottom: 1px solid #d7d3ca;
    box-sizing: border-box;
  }

  .ab-left {
    min-width: 0;
  }

  .ab-left-inner {
    padding: 83px 34px 48px 19px;
    box-sizing: border-box;
  }

  .ab-off-label {
    margin: 0 0 46px 0;
    color: #171717;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.34;
    letter-spacing: -0.035em;
  }

  .ab-off-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .ab-off-list li {
    display: flex;
    align-items: center;
    gap: 9px;
    margin: 0 0 9px 0;
    color: #5d5b56;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .ab-bullet {
    width: 5px;
    height: 5px;
    background: #8d8a84;
    flex: 0 0 auto;
    display: inline-block;
  }

  .ab-right {
    min-width: 0;
  }

  .ab-right-inner {
    padding: 78px 78px 56px 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
  }

  .ab-text {
    margin: 0;
    max-width: 1180px;
    color: #151515;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: clamp(42px, 3.55vw, 60px);
    font-weight: 500;
    line-height: 1.12;
    letter-spacing: -0.055em;
    text-wrap: balance;
  }

  .ab-btn {
    margin-top: 28px;
    width: 368px;
    height: 42px;
    padding: 0 18px 0 19px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: #100b0b;
    color: #f4f1eb;
    text-decoration: none;
    border: none;
    box-sizing: border-box;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.02em;
    transition: background-color 0.18s ease;
  }

.ab-btn-roll{
  height:1em;
  overflow:hidden;
  display:inline-block;
  line-height:1;
}

.ab-btn-track{
  display:flex;
  flex-direction:column;
}




.ab-btn:hover .ab-btn-track{
  animation: btnRollOnce 0.45s ease forwards;
}
  .ab-btn-track span{
  height:1em;
  display:flex;
  align-items:center;
}
  @keyframes btnRollOnce{
  0%{ transform: translateY(0); }
  100%{ transform: translateY(-50%); }
}
  .ab-btn:not(:hover) .ab-btn-track{
  transform: translateY(0);
}

  .ab-btn-icon {
    flex: 0 0 auto;
    transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  }



  @media (max-width: 1200px) {
    .ab-wrap {
      grid-template-columns: 320px minmax(0, 1fr);
      width: calc(100% - 40px);
      margin-left: 40px;
      min-height: auto;
    }

    .ab-left-inner {
      padding: 64px 24px 40px 20px;
    }

    .ab-right-inner {
      padding: 64px 36px 44px 36px;
    }

    .ab-text {
      font-size: clamp(36px, 4vw, 52px);
      max-width: none;
    }
  }

  @media (max-width: 768px) {
    .ab-wrap {
      grid-template-columns: 1fr;
      width: 100%;
      margin-left: 0;
      border-left: none;
      border-right: none;
    }

    .ab-left {
      border-bottom: 1px solid #d7d3ca;
    }

    .ab-left-inner {
      padding: 36px 24px 28px 24px;
    }

    .ab-right-inner {
      padding: 36px 24px 36px 24px;
    }

    .ab-off-label {
      font-size: 16px;
      margin-bottom: 24px;
    }

    .ab-off-list li {
      font-size: 13px;
      margin-bottom: 8px;
    }

    .ab-text {
      font-size: clamp(26px, 7vw, 34px);
      line-height: 1.14;
      letter-spacing: -0.045em;
      max-width: none;
    }

    .ab-btn {
      width: 100%;
      max-width: 368px;
      height: 48px;
      margin-top: 24px;
    }
  }
`;