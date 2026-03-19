import { useEffect, useRef, useState } from "react";

/* ── Animated counter ─────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState("0");
  const ref = useRef(null);
  const rafRef = useRef(null);
  const wasVisible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const num = parseFloat(target);
    const isFloat = num % 1 !== 0;

    const formatValue = (value) =>
      isFloat ? value.toFixed(1) : String(Math.floor(value));

    const runAnimation = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      setVal("0");

      const dur = 1600;
      const t0 = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);

      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1);
        const v = num * ease(t);
        setVal(formatValue(v));

        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setVal(formatValue(num));
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasVisible.current) {
          wasVisible.current = true;
          runAnimation();
        }

        if (!entry.isIntersecting) {
          wasVisible.current = false;
        }
      },
      { threshold: 0.45 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── StatsSection ─────────────────────────────────────── */
export default function StatsSection() {
  return (
    <>
      <style>{css}</style>

      <section className="ss-wrap">
        <div className="ss-cell ss-cell--1">
          <span className="ss-num">
            <Counter target="4.9" suffix="/5" />
          </span>
          <span className="ss-label">client satisfaction rate</span>
        </div>

        <div className="ss-cell ss-cell--2">
          <span className="ss-num">
            <Counter target="50" suffix="+" />
          </span>
          <span className="ss-label">successful client projects</span>
        </div>

        <div className="ss-cell ss-cell--3">
          <span className="ss-num">
            <Counter target="40" suffix="%" />
          </span>
          <span className="ss-label">reduction in manual processes</span>
        </div>

        <div className="ss-cell ss-cell--4">
          <span className="ss-num">
            <Counter target="12" suffix="+" />
          </span>
          <span className="ss-label">AI and automation experts</span>
        </div>

        <div className="ss-media">
          <img
            className="ss-media-img"
            src="https://framerusercontent.com/images/BBo1J126F4DfuLTFLuOFrbkEuNw.jpg"
            alt=""
          />

          <div className="ss-logo">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M6 1L1 6.5H4.5L3 11l6.5-6H6.5L6 1z" fill="#ffffff" />
            </svg>
            SOURCE<sup>®</sup>
          </div>

          <button className="ss-play" aria-label="Play">
            <svg width="16" height="18" viewBox="0 0 14 16" fill="none">
              <path
                d="M1 1.5L13 8L1 14.5V1.5Z"
                fill="#111"
                stroke="#111"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <span className="ss-dur">5:39</span>
        </div>
      </section>
    </>
  );
}

/* ── CSS ──────────────────────────────────────────────── */
const css = `
  .ss-wrap {
    display: grid;
    grid-template-columns: 374px 374px minmax(596px, 1fr);
    grid-template-rows: 264px 264px;
    width: calc(100% - 134px);
    margin-left: 67px;
    margin-right: 67px;
    border-left: 1px solid #d7d3ca;
    border-right: 1px solid #d7d3ca;
    border-bottom: 1px solid #d7d3ca;
    background: #f3f1ea;
    overflow: hidden;
    box-sizing: border-box;
  }

  .ss-cell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 22px 24px 22px;
    box-sizing: border-box;
    min-width: 0;
    background: #f3f1ea;
  }

  .ss-cell--1 {
    grid-column: 1;
    grid-row: 1;
    border-right: 1px solid #d7d3ca;
    border-bottom: 1px solid #d7d3ca;
  }

  .ss-cell--2 {
    grid-column: 2;
    grid-row: 1;
    border-right: 1px solid #d7d3ca;
    border-bottom: 1px solid #d7d3ca;
  }

  .ss-cell--3 {
    grid-column: 1;
    grid-row: 2;
    border-right: 1px solid #d7d3ca;
  }

  .ss-cell--4 {
    grid-column: 2;
    grid-row: 2;
    border-right: 1px solid #d7d3ca;
  }

  .ss-num {
    display: block;
    color: #111111;
    font-size: 76px;
    font-weight: 400;
    line-height: 0.92;
    letter-spacing: -0.075em;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .ss-label {
    display: block;
    color: #6f6c66;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .ss-media {
    grid-column: 3;
    grid-row: 1 / 3;
    position: relative;
    overflow: hidden;
    min-width: 0;
    background: #000;
  }

  .ss-media::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.65) 120%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 1;
  }

  .ss-media:hover::after {
    opacity: 1;
  }

  .ss-media-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center center;
    transition: transform 0.5s ease;
  }

  .ss-media:hover .ss-media-img {
    transform: scale(1.02);
  }

  .ss-logo {
    position: absolute;
    top: 16px;
    left: 16px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: -0.01em;
    z-index: 2;
    text-shadow: 0 1px 3px rgba(0,0,0,0.18);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .ss-logo sup {
    font-size: 7px;
    vertical-align: super;
  }

  .ss-play {
    position: absolute;
    top: 51.5%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: rgba(228, 197, 181, 0.72);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    padding-left: 4px;
  }

  .ss-media:hover .ss-play {
    transform: translate(-50%, -50%) scale(1.15) rotate(360deg);
    background: rgba(228, 197, 181, 0.9);
  }

  .ss-dur {
    position: absolute;
    right: 18px;
    bottom: 16px;
    color: #4e4b47;
    background: rgba(255,255,255,0.9);
    border-radius: 999px;
    padding: 3px 8px;
    font-size: 11px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.01em;
    z-index: 2;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  @media (max-width: 1400px) {
    .ss-wrap {
      grid-template-columns: 320px 320px minmax(420px, 1fr);
      grid-template-rows: 190px 190px;
      width: calc(100% - 80px);
      margin-left: 40px;
      margin-right: 40px;
    }

    .ss-num {
      font-size: 62px;
    }

    .ss-cell {
      padding: 24px 18px 20px 18px;
    }
  }

  @media (max-width: 900px) {
    .ss-wrap {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 170px 170px 280px;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      border-left: none;
      border-right: none;
    }

    .ss-cell--1 {
      grid-column: 1;
      grid-row: 1;
      border-right: 1px solid #d7d3ca;
      border-bottom: 1px solid #d7d3ca;
    }

    .ss-cell--2 {
      grid-column: 2;
      grid-row: 1;
      border-right: none;
      border-bottom: 1px solid #d7d3ca;
    }

    .ss-cell--3 {
      grid-column: 1;
      grid-row: 2;
      border-right: 1px solid #d7d3ca;
      border-bottom: 1px solid #d7d3ca;
    }

    .ss-cell--4 {
      grid-column: 2;
      grid-row: 2;
      border-right: none;
      border-bottom: 1px solid #d7d3ca;
    }

    .ss-media {
      grid-column: 1 / 3;
      grid-row: 3;
      min-height: 280px;
    }

    .ss-num {
      font-size: 48px;
    }

    .ss-label {
      font-size: 13px;
    }
  }
`;