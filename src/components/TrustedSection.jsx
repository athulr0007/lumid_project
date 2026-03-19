const logos = [
  { sym: "⠿", label: "ennLabs" },
  { sym: "↗", label: "Leapyear" },
  { sym: "↗", label: "45 Degrees°" },
  { sym: "✚", label: "Clandestine" },
  { sym: "⬢", label: "GlobalBank" },
  { sym: "≡", label: "Railspeed" },
  { sym: "N", label: "Neon", bold: true },
  { sym: "◖", label: "Elasticware" },
];

export default function TrustedSection() {
  return (
    <>
      <style>{css}</style>

      <section className="trusted">
        <div className="trusted__inner">
          <div className="trusted__header">
            <h2 className="trusted__title">Trusted by the leaders</h2>

            <p className="trusted__desc">
              From startups to global enterprises, leading teams trust Source to
              build scalable AI systems that drive efficiency and growth.
            </p>
          </div>
<div className="trusted__logos">
  <div className="trusted__track">
    {[...logos, ...logos].map((logo, i) => (
      <div className="trusted__logoItem" key={i}>
        <span
          className={`trusted__logoSym ${
            logo.bold ? "trusted__logoSym--bold" : ""
          }`}
        >
          {logo.sym}
        </span>
        <span className="trusted__logoName">{logo.label}</span>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
    </>
  );
}

const css = `
  :root{
    --trusted-bg:#f3f0e8;
    --trusted-line:#d8d2c8;
    --trusted-text:#111111;
    --trusted-muted:#5a5852;
  }

  *{
    box-sizing:border-box;
  }

  .trusted{
    width:100%;
    background:var(--trusted-bg);
    border-top:1px solid var(--trusted-line);
    border-bottom:1px solid var(--trusted-line);

  }

.trusted__inner{
  max-width:1900px;
  margin:0 auto;
  padding:0 66px;
  border-left:1px solid var(--trusted-line);
  border-right:1px solid var(--trusted-line);
}

  .trusted__header{
    display:grid;
    grid-template-columns: 1fr 512px;
    align-items:start;
    gap:40px;
    padding:42px 0 34px;
  }

  .trusted__title{
    margin:0;
    font-size:39px;
    line-height:1.02;
    letter-spacing:-0.055em;
    font-weight:500;
    color:var(--trusted-text);
    border-left:1px solid var(--trusted-line);
  }

  .trusted__desc{
    margin:0;
    width:512px;
    justify-self:end;
    font-size:15px;
    line-height:1.58;
    color:var(--trusted-muted);
  }

.trusted__logos{
  display:grid;
  overflow:hidden;
  grid-template-columns:repeat(8, 1fr);
  border-left:1px solid var(--trusted-line);
  border-right:1px solid var(--trusted-line);
}

.trusted__track{
  display:flex;
  width:max-content;
  animation: trustedScroll 22s linear infinite;
}

  .trusted__logoItem{
  min-width:220px;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:0 20px;
  flex-shrink:0;
}
@keyframes trustedScroll{
  0%{ transform: translateX(0); }
  100%{ transform: translateX(-50%); }
}
  .trusted__logoItem:last-child{
    border-right:1px solid var(--trusted-line);
  }

  .trusted__logoSym{
    flex:0 0 auto;
    font-size:30px;
    line-height:1;
    color:var(--trusted-text);
  }

  .trusted__logoSym--bold{
    font-size:28px;
    font-weight:900;
    letter-spacing:-0.06em;
  }

  .trusted__logoName{
    min-width:0;
    font-size:19px;
    line-height:1;
    font-weight:700;
    letter-spacing:-0.02em;
    color:var(--trusted-text);
    white-space:nowrap;
  }

@media (max-width: 1280px){
  .trusted__inner{
    padding:0 24px;
  }

  .trusted__header{
    grid-template-columns:1fr;
    gap:14px;
    padding:28px 0 22px;
  }

  .trusted__title{
    font-size:28px;
    border-left:none;
  }

  .trusted__desc{
    width:100%;
    max-width:420px;
    justify-self:start;
  }

  /* KEY CHANGE */
  .trusted__logos{
    display:block;
    overflow:hidden;
    border-left:none;
    border-right:none;
  }

  .trusted__track{
    animation: trustedScroll 18s linear infinite;
  }

  .trusted__logoItem{
    min-width:180px;
    height:80px;
    justify-content:flex-start;
    padding:0 14px;
  }

  .trusted__logoName{
    font-size:16px;
  }

  .trusted__logoSym{
    font-size:22px;
  }
}


@media (max-width: 768px){
  .trusted__inner{
    padding:0 16px;
  }

  .trusted__title{
    font-size:22px;
  }

  .trusted__desc{
    font-size:13px;
    line-height:1.45;
  }

  /* keep continuous slider, no grid */
  .trusted__logos{
    display:block;
    overflow:hidden;
  }

  .trusted__track{
    animation: trustedScroll 14s linear infinite;
  }

  .trusted__logoItem{
    min-width:150px;
    height:64px;
    padding:0 10px;
  }

  .trusted__logoName{
    font-size:13px;
  }

  .trusted__logoSym{
    font-size:16px;
  }

  .trusted__logoSym--bold{
    font-size:18px;
  }
}
`;