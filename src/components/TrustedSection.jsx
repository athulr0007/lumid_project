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
            {logos.map((logo, i) => (
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
    width:100%;
    padding:0 66px;
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
    font-size:31px;
    line-height:1.02;
    letter-spacing:-0.055em;
    font-weight:700;
    color:var(--trusted-text);
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
    grid-template-columns:repeat(8, 1fr);
    border-top:1px solid var(--trusted-line);
  }

  .trusted__logoItem{
    height:92px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    padding:0 14px;
    border-right:1px solid var(--trusted-line);
    overflow:hidden;
  }

  .trusted__logoItem:last-child{
    border-right:none;
  }

  .trusted__logoSym{
    flex:0 0 auto;
    font-size:20px;
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
    font-size:15px;
    line-height:1;
    font-weight:700;
    letter-spacing:-0.02em;
    color:var(--trusted-text);
    white-space:nowrap;
  }

  @media (max-width: 1280px){
    .trusted__inner{
      padding:0 32px;
    }

    .trusted__header{
      grid-template-columns:1fr;
      gap:16px;
      padding:34px 0 26px;
    }

    .trusted__desc{
      width:auto;
      justify-self:start;
      max-width:100%;
    }

    .trusted__logos{
      grid-template-columns:repeat(4, 1fr);
    }

    .trusted__logoItem:nth-child(4n){
      border-right:none;
    }
  }

  @media (max-width: 768px){
    .trusted__inner{
      padding:0 20px;
    }

    .trusted__title{
      font-size:24px;
    }

    .trusted__desc{
      font-size:14px;
      line-height:1.5;
    }

    .trusted__logos{
      grid-template-columns:repeat(2, 1fr);
    }

    .trusted__logoItem{
      height:74px;
      justify-content:flex-start;
      padding:0 12px;
    }

    .trusted__logoItem:nth-child(2n){
      border-right:none;
    }

    .trusted__logoName{
      font-size:14px;
    }

    .trusted__logoSym{
      font-size:18px;
    }

    .trusted__logoSym--bold{
      font-size:24px;
    }
  }
`;