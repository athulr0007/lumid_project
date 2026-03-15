// Avatar images from the screenshot (Unsplash random avatars for demo)
const avatarIds = [
  "photo-1580489944761-15a19d654956",
  "photo-1506794778202-cad84cf45f1d",
  "photo-1534528741775-53994a69daeb",
  "photo-1552058544-f2b08422138a",
  "photo-1487412720507-e7ab37603c6f",
];

export default function HeroSection() {
  return (
    <>
      <style>{css}</style>

      <section className="hero">
        <div className="hero__left">
          <div className="hero__imageWrap">
            <div className="hero__imageMask" />
            <img
              className="hero__image"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85"
              alt="Source team"
            />
          </div>

          <div className="hero__desc">
            We design automation systems that help companies cut manual work,
            connect their tools, and operate more efficiently so teams can focus
            on solving real problems, not repeating the same tasks.
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__top">
            <a className="hero__badge" href="#">
              <span className="hero__badgeIcon">
                <svg width="11" height="14" viewBox="0 0 11 14" fill="none">
                  <path
                    d="M6.5 1L1 7.5h4.5L4 13l7-7H7L6.5 1z"
                    fill="#0d0d0d"
                  />
                </svg>
              </span>

              <span className="hero__badgeText">
                Source joins the OpenAI Services Partner Program
              </span>

              <svg
                className="hero__badgeArrow"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <h1 className="hero__title">
              Designing intelligent systems for teams that move fast.
            </h1>

            <div className="hero__trust">
              <div className="hero__avatars">
                {avatarIds.map((id, i) => (
                  <span className="hero__avatar" key={i}>
                    <img
                      src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=80&q=80`}
                      alt=""
                    />
                  </span>
                ))}
              </div>

              <div className="hero__trustMeta">
                <div className="hero__ratingRow">
                  <span className="hero__diamonds">◆◆◆◆◆</span>
                  <span className="hero__rating">4.9/5</span>
                </div>
                <div className="hero__trustText">
                  Trusted by 50+ startups & enterprises
                </div>
              </div>
            </div>
          </div>

          <a className="hero__cta" href="#">
            <span>Book a strategy call</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 16L16 4M16 4H6M16 4v10"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}

const css = `
  :root{
    --bg:#f3f0e8;
    --line:#d9d3c9;
    --text:#111111;
    --muted:#4d4c47;
    --black:#120f0d;
    --green:#59ef69;
  }

  *{
    box-sizing:border-box;
  }

  html,body{
    margin:0;
    padding:0;
    background:var(--bg);
    color:var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .hero{
    width:100vw;
    position:relative;
    left:50%;
    margin-left:-50vw;
    margin-top:64px;
    background:var(--bg);
    border-top:1px solid var(--line);
    border-bottom:1px solid var(--line);
    display:grid;
    grid-template-columns:50.6% 49.4%;
    min-height:612px;
  }

  .hero__left{
    min-width:0;
    display:grid;
    grid-template-rows:460px 152px;
  }

  .hero__imageWrap{
    position:relative;
    overflow:hidden;
    background:var(--bg);
    padding-left:54px;
  }

  .hero__image{
    width:100%;
    height:100%;
    display:block;
    object-fit:cover;
    object-position:center center;
    clip-path:polygon(
      19.2% 0,
      100% 0,
      100% 100%,
      0 100%,
      0 35%
    );
  }

  .hero__imageMask{
    position:absolute;
    top:0;
    left:54px;
    width:calc(100% - 54px);
    height:100%;
    background:var(--bg);
    pointer-events:none;
    z-index:2;
    clip-path:polygon(
      0 0,
      19.2% 0,
      0 35%
    );
  }

  .hero__desc{
    border-top:1px solid var(--line);
    padding:21px 26px 0 74px;
    font-size:15px;
    line-height:1.45;
    font-weight:400;
    color:var(--muted);
    max-width:860px;
  }

  .hero__right{
    min-width:0;
    border-left:1px solid var(--line);
    display:grid;
    grid-template-rows:1fr 98px;
  }

  .hero__top{
    padding:18px 0 0 22px;
    display:flex;
    flex-direction:column;
    min-height:0;
  }

  .hero__badge{
    width:max-content;
    max-width:100%;
    display:inline-flex;
    align-items:center;
    gap:10px;
    min-height:32px;
    padding:4px 13px 4px 6px;
    background:#111111;
    color:#ffffff;
    text-decoration:none;
    font-size:13px;
    font-weight:500;
    line-height:1;
    margin-bottom:20px;
  }

  .hero__badgeIcon{
    width:22px;
    height:22px;
    flex:0 0 22px;
    display:grid;
    place-items:center;
    background:var(--green);
  }

  .hero__badgeText{
    white-space:nowrap;
  }

  .hero__badgeArrow{
    flex:0 0 auto;
  }

  .hero__title{
    margin:0;
    max-width:760px;
    font-size:67px;
    line-height:0.935;
    letter-spacing:-0.064em;
    font-weight:700;
    color:var(--text);
  }

  .hero__trust{
    margin-top:auto;
    display:flex;
    align-items:center;
    gap:13px;
    padding-bottom:18px;
  }

  .hero__avatars{
    display:flex;
    align-items:center;
    flex-shrink:0;
  }

  .hero__avatar{
    width:34px;
    height:34px;
    border-radius:999px;
    overflow:hidden;
    border:2px solid var(--bg);
    background:#cec7bb;
    margin-left:-9px;
    flex-shrink:0;
  }

  .hero__avatar:first-child{
    margin-left:0;
  }

  .hero__avatar img{
    width:100%;
    height:100%;
    display:block;
    object-fit:cover;
  }

  .hero__trustMeta{
    display:flex;
    align-items:center;
    gap:12px;
    flex-wrap:wrap;
  }

  .hero__ratingRow{
    display:flex;
    align-items:center;
    gap:8px;
    height:18px;
  }

  .hero__diamonds{
    font-size:12px;
    line-height:1;
    letter-spacing:1px;
    color:#111111;
    transform:translateY(-1px);
  }

  .hero__rating{
    font-size:15px;
    line-height:1;
    font-weight:500;
    color:#111111;
  }

  .hero__trustText{
    font-size:13px;
    line-height:1;
    color:#3f3f39;
    white-space:nowrap;
  }

  .hero__cta{
    width:100%;
    height:98px;
    background:var(--black);
    color:#ffffff;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 39px;
    font-size:17px;
    font-weight:500;
    line-height:1;
  }

  .hero__cta svg{
    flex-shrink:0;
  }

  @media (max-width:1280px){
    .hero{
      grid-template-columns:1fr;
      min-height:auto;
    }

    .hero__left{
      grid-template-rows:420px auto;
    }

    .hero__right{
      border-left:none;
      border-top:1px solid var(--line);
      grid-template-rows:auto 90px;
    }

    .hero__top{
      padding:18px 18px 18px 18px;
    }

    .hero__cta{
      height:90px;
      padding:0 24px;
    }

    .hero__title{
      font-size:56px;
    }
  }

  @media (max-width:768px){
    .hero{
      margin-top:64px;
    }

    .hero__left{
      grid-template-rows:300px auto;
    }

    .hero__imageWrap{
      padding-left:18px;
    }

    .hero__image{
      clip-path:none;
    }

    .hero__imageMask{
      display:none;
    }

    .hero__desc{
      padding:18px;
      font-size:14px;
      line-height:1.5;
    }

    .hero__top{
      padding:18px 18px 14px 18px;
    }

    .hero__badge{
      max-width:100%;
    }

    .hero__badgeText{
      white-space:normal;
    }

    .hero__title{
      font-size:42px;
      line-height:0.98;
      letter-spacing:-0.05em;
    }

    .hero__trust{
      margin-top:24px;
      padding-bottom:0;
      flex-direction:column;
      align-items:flex-start;
    }

    .hero__trustMeta{
      gap:8px;
    }

    .hero__trustText{
      white-space:normal;
      line-height:1.25;
    }

    .hero__cta{
      height:84px;
      padding:0 24px;
      font-size:16px;
    }
  }
`;