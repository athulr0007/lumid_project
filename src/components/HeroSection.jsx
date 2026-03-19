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
  src="https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?width=3580&height=2574"
  srcSet="https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?scale-down-to=512&width=3580&height=2574 512w,
          https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?scale-down-to=1024&width=3580&height=2574 1024w,
          https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?scale-down-to=2048&width=3580&height=2574 2048w,
          https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?width=3580&height=2574 3580w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="a couple of men standing next to each other"
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
  <span className="hero__ctaText">
    <span>Book a strategy call</span>
    <span>Book a strategy call</span>
  </span>
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
    margin-top:94px;
    background:var(--bg);
    border-bottom:1px solid var(--line);
    display:grid;
    grid-template-columns:50.6% 49.4%;
    min-height:auto;
    
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
  clip-path: polygon(
     0% 22%,   /* vertical down */
     22% 22%,  /* corner */
     32% 0%,
    100% 0%,
    100% 78%,   /* bottom-right cut */
    100% 100%,
    0% 100%
  );
}


  .hero__desc{
    padding:21px 26px 0 74px;
    font-size:19px;
    line-height:1.45;
    font-weight:450;
    color:var(--muted);
    max-width:990px;
  }

  .hero__right{
    min-width:0;
    display:grid;
    grid-template-rows:1fr 98px;
  }

  .hero__top{
    padding:18px 74px 0 74px;
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
    font-size:80px;
    line-height:0.935;
    letter-spacing:-0.064em;
    font-weight:500;
    color:var(--text);
    margin-bottom:90px;
  }

  .hero__trust{
    margin-top:20px;
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
    border:2px solid var(--black);
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
  flex-direction:column;
  align-items:flex-start;
    gap:2px;
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
    font-size:15px;
    line-height:1;
    color:#3f3f39;
    white-space:normal;
    font-weight:450;
  }

  .hero__cta{
    width:850px;
    height:120px;
    background:var(--black);
    color:#ffffff;
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 74px;
    font-size:17px;
    font-weight:500;
    line-height:1;
     margin-top:-55px;
  }

  .hero__cta svg{
    flex-shrink:0;
  }

  @media (max-width:1280px){
    .hero{
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 48px 36px 64px;
      gap: 32px 48px;
      margin-top: 64px;
      width: 100%;
      left: auto;
      margin-left: 0;
    }
    .hero__left, .hero__right, .hero__top {
      display: contents;
    }
    .hero__badge {
      display: none;
    }
    .hero__imageWrap {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      order: 1;
      padding-left: 0;
      width: 100%;
      height: 100%;
      min-height: 380px;
    }
    .hero__image {
      clip-path: none;
    }
    .hero__imageMask {
      display: none;
    }
    .hero__title {
      grid-column: 2 / 3;
      grid-row: 1;
      order: 2;
      font-size: clamp(40px, 5vw, 60px);
      margin-bottom: 0;
      padding: 0;
      align-self: start;
    }
    .hero__trust {
      grid-column: 2 / 3;
      grid-row: 2;
      order: 3;
      align-self: start;
      margin-top: -12px;
      padding-bottom: 0;
    }
    .hero__desc {
      grid-column: 1 / 3;
      grid-row: 3;
      order: 4;
      padding: 16px 0 0;
      font-size: 18px;
      max-width: 100%;
      line-height: 1.55;
    }
    .hero__cta {
      grid-column: 1 / 3;
      grid-row: 4;
      order: 5;
      width: 100%;
      height: 84px;
      margin-top: 24px;
      padding: 0 40px;
    }
  }

  @media (max-width:768px){
    .hero{
      display: flex;
      flex-direction: column;
      padding: 32px 24px 48px;
      gap: 24px;
      margin-top: 64px;
    }
    .hero__imageWrap {
      width: 100%;
      height: auto;
      min-height: 280px;
    }
    .hero__title {
      font-size: 44px;
      line-height: 1.02;
      letter-spacing: -0.05em;
    }
    .hero__trust {
      margin-top: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .hero__desc {
      padding: 0;
      font-size: 16px;
      line-height: 1.5;
    }
    .hero__cta {
      height: 80px;
      padding: 0 24px;
      font-size: 16px;
      margin-top: 12px;
    }
  }

  .hero__ctaText{
    display:block;
    height:20px;
    overflow:hidden;
    position:relative;
  }
  .hero__ctaText span{
    display:block;
    transition:transform 0.35s ease;
  }
  .hero__ctaText span:last-child{
    position:absolute;
    top:100%;
    left:0;
  }
  .hero__cta:hover .hero__ctaText span{
    transform:translateY(-100%);
  }
`;