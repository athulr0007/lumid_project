import { useState } from "react";

const plans = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For teams starting their AI automation journey.",
    monthly: 1199,
    features: [
      "3-Tool Automation",
      "Pre-Built Templates",
      "Workflow analytics",
      "Monthly Insights",
      "Standard Support",
      "Secure Hosting",
    ],
    includesLabel: "Includes:",
    featured: false,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For growing teams expanding automation across systems.",
    monthly: 2399,
    features: [
      "Unlimited Integrations",
      "Dedicated Manager",
      "Priority onboarding",
      "Weekly Reports",
      "Slack Support",
      "Strategy Sessions",
    ],
    includesLabel: "Includes everything in Launch, plus",
    featured: true,
    badge: "Most popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For teams with 50+ employees or advanced needs",
    monthly: 4999,
    features: [
      "Advanced Workflows",
      "Enterprise Security",
      "Custom AI",
      "Private Deployment",
      "24/7 Support",
      "Executive Reports",
    ],
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

  <span className={`pr-label ${!annual ? "active" : ""}`}>
    Monthly
  </span>

  <div
    className={`pr-switch ${annual ? "is-annual" : ""}`}
    onClick={() => setAnnual(a => !a)}
  >
    <div className="pr-switch-inner" />
  </div>

  <span className={`pr-label ${annual ? "active" : ""}`}>
    Annual
  </span>

  <div className={`pr-save ${annual ? "active" : ""}`}>
    Save 20%
  </div>

</div>
        </div>

        {/* Plans grid */}
        <div className="pr-grid">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`pr-plan ${p.featured ? "pr-plan--featured" : ""}`}
            >
              {p.badge && <div className="pr-badge">{p.badge}</div>}
              <div className="pr-plan-name">{p.name}</div>
              <div className="pr-plan-tagline">{p.tagline}</div>
              <div className="pr-plan-price-row">
  {!p.featured && <span className="pr-dollar">$</span>}

<div className={`pr-amount-wrap ${annual ? "is-annual" : "is-monthly"}`}>
  <div className="pr-amount-inner">
    <span>{p.monthly.toLocaleString()}</span>
    <span>{Math.round(p.monthly * 0.8).toLocaleString()}</span>
  </div>
</div>
  <span className="pr-period-inline">/Month</span>
</div>
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
                <span className="pr-btn-text">
                  <span className="pr-btn-text-inner">
                    <span>Select {p.name}</span>
                    <span>Select {p.name}</span>
                  </span>
                </span>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 13L13 3M13 3H5M13 3v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="pr-stripe">
                Payment secured by <strong>stripe</strong>
              </div>
            </div>
          ))}
        </div>

        <a className="pr-comparison" href="#">
          <span className="pr-comp-text">
            <span className="pr-comp-inner">
              <span>See full comparison</span>
              <span>See full comparison</span>
            </span>
          </span>

          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
  gap: 14px;
}
  /* labels */
.pr-label {
  font-size: 14px;
  color: #9a9a9a;
  font-weight: 500;
}
  .pr-label.active {
  color: #111;
}
  /* switch outer (green square) */
.pr-switch {
  width: 54px;
  height: 32px;
  background: #111;
  padding: 4px;
  cursor: pointer;
  position: relative;

  overflow: hidden; /* critical */
}

/* inner block */
.pr-switch-inner {
  width: 24px;
  height: 24px;
  background:#5bfb7a; #111;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 2px;

  transition: left 0.45s cubic-bezier(0.7, 0, 0.2, 1),
              transform 0.45s cubic-bezier(0.7, 0, 0.2, 1);
}

/* default */
.pr-switch-inner {
  transform: rotate(0deg);
}

/* ACTIVE → THIS CREATES "ROLL" ILLUSION */
.pr-switch.is-annual .pr-switch-inner {
  left: 26px;
  transform: rotate(180deg);
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

  /* save badge */
.pr-save {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 999px;

  background: rgba(0,0,0,0.08);
  color: rgba(0,0,0,0.5);

  font-weight: 600;
}
/* active state */
.pr-save.active {
  background: #5bfb7a;
  color: #111;
}
  /* Plans grid */
  .pr-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background: #ddd9d1;
  }
  .pr-plan {
   padding: 56px 44px 44px;
    position: relative;
background: #e5e1d9;
    transition: box-shadow 0.2s;
    
  }
  .pr-plan:last-child { border-right: none; }
 .pr-plan--featured {
  background: #0b0b0b;
  color: #fff;
}
  .pr-plan--featured .pr-plan-tagline { color: rgba(255,255,255,0.55); }
.pr-plan--featured .pr-plan-period {
  border-color: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.45);
}
    .pr-plan--featured .pr-plan-includes { color: rgba(255,255,255,0.55); }
  .pr-plan--featured .pr-feature { color: #fff; }
  .pr-plan--featured .pr-stripe { color: rgba(255,255,255,0.32); }

  .pr-badge {
  position: absolute;
  top: 24px;
  right: 24px;

  background: #5bfb7a;
  color: #0d0d0d;
  padding: 4px 10px;

  font-size: 13px;
  font-weight: 600;
}

  .pr-plan-name {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}
  .pr-plan-tagline {
  font-size: 14px;
  color: rgba(0,0,0,0.55);
  margin-bottom: 28px;
}
 .pr-plan-price-row {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 28px;
  
}

.pr-dollar {
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.pr-amount {
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
}
/* wrapper masks overflow */
.pr-amount-wrap {
  height: 56px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
  /* stack horizontally */
.pr-amount-inner {
  display: flex;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
  /* both values */
.pr-amount-inner span {
  min-width: 100%;
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
}

/* STATES */

/* monthly → show first */
.pr-amount-wrap.is-monthly .pr-amount-inner {
  transform: translateX(0%);
}

/* annual → slide LEFT to show second */
.pr-amount-wrap.is-annual .pr-amount-inner {
  transform: translateX(-100%);
}
.pr-period-inline {
  font-size: 14px;
  color: rgba(0,0,0,0.55);
  margin-left: 0;
   transform: translateX(-100px);
}

/* featured (black card) */
.pr-plan--featured .pr-dollar {
  display: none;
}

.pr-plan--featured .pr-period-inline {
  color: rgba(255,255,255,0.45);
}
  .pr-plan-includes {
    font-size: 12px; font-weight: 700; letter-spacing: 0.3px;
    color: #888; margin-bottom: 16px; text-transform: none;
  }

  .pr-features { list-style: none; padding: 0; margin: 0; }
 .pr-feature {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 14px;
  font-size: 14px;
}
  .pr-check {
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2px;
  font-size: 11px;
  font-weight: 700;

  background: #111;   /* default → grey cards */
  color: #5bfb7a;     /* green tick */
}
.pr-plan--featured .pr-check {
  background: #5bfb7a; /* green box */
  color: #111;         /* black tick */
}
 .pr-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 18px 20px;

  margin-top: 36px;

  font-size: 14px;
  font-weight: 600;
}
  /* text container */
.pr-btn-text {
  height: 18px; /* lock height */
  overflow: hidden;
  display: block;
}
  /* inner stack */
.pr-btn-text-inner {
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
}
  /* both texts same spacing */
.pr-btn-text-inner span {
  line-height: 18px;
}
  /* hover → move up exactly one line */
.pr-btn:hover .pr-btn-text-inner {
  transform: translateY(-18px);
}
  /* arrow stays separate */
.pr-btn svg {
  transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
}
.pr-btn:hover svg {
  transform: translate(3px,-3px);
}
  .pr-btn svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .pr-btn:hover svg { transform: translate(3px,-3px); }
  .pr-btn--dark { background: #0d0d0d; color: #fff; }
  .pr-btn--dark:hover { background: #1a1a1a; }
  .pr-btn--green { background: #00e547; color: #0d0d0d; }
  .pr-btn--green:hover { background: #00cf3f; }
.pr-btn,
.pr-btn:hover,
.pr-btn:focus,
.pr-btn:active {
  text-decoration: none !important;
}
  .pr-stripe {
    text-align: center; font-size: 13px;
   color: rgba(0, 0, 0, 0.55); margin-top: 10px;
   font-weight: 450;
  }
   .pr-stripe strong {
  font-weight: 800;
  color: inherit; /* keeps same color but bold */
}
  .pr-plan--featured .pr-stripe {
  color: rgba(255, 254, 254, 0.93); /* white text */
}

.pr-plan--featured .pr-stripe strong {
  color: #ffffff; /* stripe stays solid white */
}

  .pr-comparison {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  margin-top: 68px;
   font-weight: 650;
color: #0d0d0d;
  /* align to start of 3rd column */
  margin-left: calc(64.666% + 44px);
  
}
  .pr-comparison:hover { opacity: 0.6; }
  .pr-comparison svg { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1); }
  .pr-comparison:hover svg { transform: translate(2px,-2px); }

  /* text wrapper */
  .pr-comp-text {
    height: 18px;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid currentColor;
    padding-bottom: 3px;
  }

  /* stacked text */
  .pr-comp-inner {
    display: flex;
    flex-direction: column;
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
  }

  /* exact line height */
  .pr-comp-inner span {
    line-height: 18px;
  }

  /* hover roll */
  .pr-comparison:hover .pr-comp-inner {
    transform: translateY(-18px);
  }

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
