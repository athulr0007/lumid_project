import { useState } from "react";

const plans = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For teams starting their AI automation journey.",
    monthly: 1199,
    features: ["3-Tool Automation", "Pre-Built Templates", "Workflow analytics", "Monthly Insights", "Standard Support", "Secure Hosting"],
    includesLabel: "Includes:",
    featured: false,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For growing teams expanding automation across systems.",
    monthly: 2399,
    features: ["Unlimited Integrations", "Dedicated Manager", "Priority onboarding", "Weekly Reports", "Slack Support", "Strategy Sessions"],
    includesLabel: "Includes everything in Launch, plus",
    featured: true,
    badge: "Most popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For teams with 50+ employees or advanced needs",
    monthly: 4999,
    features: ["Advanced Workflows", "Enterprise Security", "Custom AI", "Private Deployment", "24/7 Support", "Executive Reports"],
    includesLabel: "Includes everything in Scale, plus",
    featured: false,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const price = (base) => {
    const p = annual ? Math.round(base * 0.8) : base;
    return p.toLocaleString();
  };

  return (
    <>
      <style>{css}</style>
      <section className="pr-wrap">
        {/* Top row */}
        <div className="pr-top">
          <h2 className="pr-title">The right plan to power your progress.</h2>

          <div className="pr-toggle-row">
            <span className={`pr-toggle-label ${!annual ? "pr-toggle-active" : ""}`}>Monthly</span>
            <div
              className={`pr-track ${annual ? "pr-track--annual" : "pr-track--monthly"}`}
              onClick={() => setAnnual((a) => !a)}
              role="switch"
              aria-checked={annual}
            >
              <div className="pr-knob" />
            </div>
            <span className={`pr-toggle-label ${annual ? "pr-toggle-active" : ""}`}>Annual</span>
            <div className="pr-save">Save 20%</div>
          </div>
        </div>

        {/* Plans grid */}
        <div className="pr-grid">
          {plans.map((p) => (
            <div key={p.id} className={`pr-plan ${p.featured ? "pr-plan--featured" : ""}`}>
              {p.badge && <div className="pr-badge">{p.badge}</div>}
              <div className="pr-plan-name">{p.name}</div>
              <div className="pr-plan-tagline">{p.tagline}</div>
              <div className="pr-plan-price">
                <sup>$</sup>{price(p.monthly)}
              </div>
              <div className="pr-plan-period">/ Month</div>
              <div className="pr-plan-includes">{p.includesLabel}</div>
              <ul className="pr-features">
                {p.features.map((f) => (
                  <li key={f} className="pr-feature">
                    <div className="pr-check">✓</div>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={`pr-btn ${p.featured ? "pr-btn--green" : "pr-btn--dark"}`}
                href="#"
              >
                Select {p.name}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="pr-stripe">
                Payment secured by <strong>stripe</strong>
              </div>
            </div>
          ))}
        </div>

        <a className="pr-comparison" href="#">
          See full comparison
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </section>
    </>
  );
}

const css = `
  .pr-wrap {
    padding: 80px 60px;
    border-top: 1px solid #ddd9d1;
    background: #f5f2ec;
  }

  /* Top row */
  .pr-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 52px;
    flex-wrap: wrap;
  }
  .pr-title {
    font-size: clamp(32px, 3.4vw, 50px);
    font-weight: 900;
    letter-spacing: -1.5px;
    line-height: 1.08;
    max-width: 560px;
    margin: 0;
    color: #0d0d0d;
  }

  /* Toggle */
  .pr-toggle-row {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    padding-top: 6px;
  }
  .pr-toggle-label {
    font-size: 14px;
    font-weight: 500;
    color: #888;
    transition: color 0.2s;
  }
  .pr-toggle-active { color: #0d0d0d; }
  .pr-track {
    width: 50px; height: 28px;
    background: #00e547;
    border-radius: 14px;
    position: relative;
    cursor: pointer;
    transition: background 0.2s;
  }
  .pr-knob {
    position: absolute;
    top: 4px;
    width: 20px; height: 20px;
    background: #0d0d0d;
    border-radius: 50%;
    transition: left 0.25s cubic-bezier(0.16,1,0.3,1);
  }
  .pr-track--monthly .pr-knob { left: 4px; }
  .pr-track--annual  .pr-knob { left: 26px; }

  .pr-save {
    background: #00e547;
    color: #0d0d0d;
    padding: 3px 10px;
    font-size: 11px;
    font-weight: 800;
  }

  /* Plans grid */
  .pr-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid #ddd9d1;
  }
  .pr-plan {
    padding: 40px;
    border-right: 1px solid #ddd9d1;
    position: relative;
    background: #f5f2ec;
    transition: box-shadow 0.2s;
  }
  .pr-plan:last-child { border-right: none; }
  .pr-plan--featured {
    background: #0d0d0d;
    color: #fff;
  }
  .pr-plan--featured .pr-plan-tagline { color: rgba(255,255,255,0.5); }
  .pr-plan--featured .pr-plan-period  { color: rgba(255,255,255,0.4); border-color: rgba(255,255,255,0.12); }
  .pr-plan--featured .pr-plan-includes { color: rgba(255,255,255,0.55); }
  .pr-plan--featured .pr-feature { color: #fff; }
  .pr-plan--featured .pr-stripe { color: rgba(255,255,255,0.32); }

  .pr-badge {
    position: absolute; top: 40px; right: 40px;
    background: #00e547;
    color: #0d0d0d;
    padding: 4px 12px;
    font-size: 11px; font-weight: 800;
  }

  .pr-plan-name {
    font-size: 24px; font-weight: 900; letter-spacing: -0.4px;
    margin-bottom: 8px; color: inherit;
  }
  .pr-plan-tagline {
    font-size: 13px; color: #888; line-height: 1.5;
    margin-bottom: 24px;
  }
  .pr-plan-price {
    font-size: 52px; font-weight: 900; letter-spacing: -2.5px;
    line-height: 1; color: inherit;
  }
  .pr-plan-price sup { font-size: 26px; vertical-align: super; letter-spacing: 0; }
  .pr-plan-period {
    font-size: 14px; color: #888;
    margin-bottom: 32px; padding-bottom: 32px;
    border-bottom: 1px solid #ddd9d1;
  }
  .pr-plan-includes {
    font-size: 12px; font-weight: 700; letter-spacing: 0.3px;
    color: #888; margin-bottom: 16px; text-transform: none;
  }

  .pr-features { list-style: none; padding: 0; margin: 0; }
  .pr-feature {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 13px; font-size: 14px; color: inherit;
  }
  .pr-check {
    width: 20px; height: 20px;
    background: #00e547;
    border-radius: 3px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 800;
    color: #0d0d0d; flex-shrink: 0;
  }

  .pr-btn {
    display: flex; align-items: center; justify-content: space-between;
    padding: 17px 20px;
    margin-top: 32px;
    font-size: 14px; font-weight: 700;
    text-decoration: none;
    transition: background 0.18s, opacity 0.18s;
  }
  .pr-btn svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .pr-btn:hover svg { transform: translate(3px,-3px); }
  .pr-btn--dark { background: #0d0d0d; color: #fff; }
  .pr-btn--dark:hover { background: #1a1a1a; }
  .pr-btn--green { background: #00e547; color: #0d0d0d; }
  .pr-btn--green:hover { background: #00cf3f; }

  .pr-stripe {
    text-align: center; font-size: 12px;
    color: #888; margin-top: 10px;
  }

  .pr-comparison {
    display: flex; align-items: center; justify-content: flex-end;
    gap: 5px; margin-top: 16px;
    font-size: 14px; font-weight: 700;
    color: #0d0d0d; text-decoration: underline;
    text-underline-offset: 3px;
    transition: opacity 0.2s;
  }
  .pr-comparison:hover { opacity: 0.6; }
  .pr-comparison svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .pr-comparison:hover svg { transform: translate(2px,-2px); }

  @media (max-width: 1024px) {
    .pr-wrap { padding: 60px 32px; }
    .pr-grid { grid-template-columns: 1fr; }
    .pr-plan { border-right: none; border-bottom: 1px solid #ddd9d1; }
    .pr-plan:last-child { border-bottom: none; }
  }
  @media (max-width: 640px) {
    .pr-wrap { padding: 40px 24px; }
    .pr-top { flex-direction: column; }
  }
`;