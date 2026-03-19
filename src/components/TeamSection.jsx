import { useState, useEffect } from "react";
import { team } from "../data";

export default function TeamSection() {
  const [perPage, setPerPage] = useState(4);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const pp = w <= 640 ? 1 : w <= 1024 ? 3 : 4;
      setPerPage(pp);
      setPage(0); // reset page on resize
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(team.length / perPage);

  const next = () => { if (page < totalPages - 1) setPage(page + 1); };
  const prev = () => { if (page > 0) setPage(page - 1); };

  return (
    <>
      <style>{`
        .team {
          padding: 60px 80px;
          background: #f5f5f3;
        }

        .team-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .team-title {
          font-size: 55px;
          font-weight: 700;
          white-space: nowrap;
        }

        .team-desc {
          max-width: 520px;
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;
        }

        .team-slider {
          overflow: hidden;
        }

        .team-track {
          display: flex;
          transition: transform 0.6s ease;
          margin-top: 40px;
        }

        .team-page {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 5px;
          flex-shrink: 0;
        }

        .team-card {
          background: #fff;
          border: 1px solid #e5e5e5;
          position: relative;
          overflow: hidden;
        }

        .team-top {
          position: absolute;
          top: 0;
          width: 100%;
          padding: 6px 10px;
          display: flex;
          justify-content: space-between;
          background: rgba(0,0,0,0.85);
          z-index: 2;
        }

        .team-dept {
          font-size: 12px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dept-dot {
          width: 8px;
          height: 8px;
          transition: width 0.3s ease;
        }

        .dept-text {
          transition: transform 0.3s ease;
        }

        .team-card:hover .dept-dot { width: 34px; }
        .team-card:hover .team-dept { gap: 12px; }
        .team-card:hover .dept-text { transform: translateX(4px); }

        .team-img-wrap {
          height: 580px;
          overflow: hidden;
        }

        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .team-card:hover .team-img { transform: scale(1.08); }

        .team-info {
          background: #ecece3;
          padding: 17px;
        }

        .team-name {
          font-weight: 600;
          font-size: 23px;
        }

        .verify { color: #22c55e; }

        .team-role {
          font-size: 16px;
          color: #666;
          margin-top: 4px;
        }

        .team-bottom-row {
          display: flex;
          justify-content: space-between;
          margin-top: 14px;
          border-top: 1px solid #dcdcdc;
        }

        .team-bars { display: flex; gap: 4px; }

        .bar {
          width: 7px;
          height: 24px;
          margin-top: 20px;
        }

        .bar.dark { background: #111; }
        .bar.light { background: #ccc; }

        .team-location { font-size: 12px; color: #777; }

        .team-controls {
          display: flex;
          align-items: center;
          margin-top: 40px;
        }

        .team-nav { display: flex; gap: 12px; }

        .team-btn {
          width: 48px;
          height: 48px;
          border: none;
          background: #86efac;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .team-btn.right { background: #22c55e; }
        .team-btn:hover { transform: scale(0.9); }

        .team-btn.disabled {
          opacity: 0.4;
          pointer-events: none;
        }

        .see-experts {
          margin-left: auto;
          width: 425px;
          height: 56px;
          overflow: hidden;
          background: #111;
          color: #fff;
          cursor: pointer;
          border: none;
        }

        .roll {
          display: flex;
          flex-direction: column;
          transition: transform 0.4s ease;
        }

        .roll span {
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right: 270px;
        }

        .see-experts:hover .roll { transform: translateY(-56px); }

        /* ── TABLET (641px – 1024px) ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .team {
            padding: 48px 28px;
          }

          .team-header {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 28px;
          }

          .team-title {
            font-size: 38px;
            white-space: normal;
          }

          .team-desc {
            max-width: 100%;
            font-size: 14px;
          }

          .team-page {
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
          }

          .team-img-wrap { height: 280px; }
          .team-name { font-size: 16px; }
          .team-role { font-size: 13px; }

          .team-controls {
            margin-top: 24px;
            align-items: center;
          }

          .team-btn {
            width: 40px;
            height: 40px;
          }

          .see-experts {
            width: auto;
            height: 40px;
            padding: 0;
          }

          .see-experts .roll span {
            height: 40px;
            padding: 0 24px;
            white-space: nowrap;
          }

          .see-experts:hover .roll { transform: translateY(-40px); }
        }

        /* ── MOBILE (≤ 640px) ── */
        @media (max-width: 640px) {
          .team {
            padding: 36px 16px 0;
          }

          .team-header {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
          }

          .team-title {
            font-size: 32px;
            white-space: normal;
            line-height: 1.05;
            letter-spacing: -0.03em;
          }

          .team-desc {
            max-width: 100%;
            font-size: 14px;
            line-height: 1.5;
          }

          .team-page {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .team-img-wrap { height: 320px; }
          .team-track { margin-top: 20px; }
          .team-name { font-size: 20px; }
          .team-role { font-size: 14px; }

          /* Nav: two full-width equal buttons side by side */
          .team-controls {
            margin-top: 0;
            flex-direction: row;
            gap: 0;
          }

          .team-nav {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
            width: 100%;
          }

          .team-btn {
            width: 100%;
            height: 56px;
            font-size: 20px;
          }

          .see-experts { display: none; }
        }
      `}</style>

      <section className="team">
        <div className="team-header">
          <h2 className="team-title">Global Talent, Unified Vision.</h2>
          <p className="team-desc">
            From London to Tokyo, our specialists collaborate seamlessly to design smarter, faster, and more human AI systems
          </p>
        </div>

        <div className="team-slider">
          <div
            className="team-track"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${page * (100 / totalPages)}%)`
            }}
          >
            {Array.from({ length: totalPages }).map((_, p) => (
              <div
                key={p}
                className="team-page"
                style={{ width: `${100 / totalPages}%` }}
              >
                {team.slice(p * perPage, p * perPage + perPage).map((m, i) => (
                  <div key={i} className="team-card">
                    <div className="team-top">
                      <div className="team-dept">
                        <span
                          className="dept-dot"
                          style={{ background: m.color === "green" ? "#22c55e" : "#2563eb" }}
                        />
                        <span className="dept-text">{m.dept}</span>
                      </div>
                      <div style={{ color: "#fff" }}>⚡</div>
                    </div>

                    <div className="team-img-wrap">
                      <img src={m.img} alt={m.name} className="team-img" />
                    </div>

                    <div className="team-info">
                      <div className="team-name">
                        {m.name} <span className="verify">✓</span>
                      </div>
                      <div className="team-role">{m.role}</div>
                      <div className="team-bottom-row">
                        <div className="team-bars">
                          {m.bars.map((b, j) => (
                            <div key={j} className={`bar ${b ? "dark" : "light"}`} />
                          ))}
                        </div>
                        <div className="team-location">{m.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="team-controls">
          <div className="team-nav">
            <button
              className={`team-btn ${page === 0 ? "disabled" : ""}`}
              onClick={prev}
            >
              ←
            </button>
            <button
              className={`team-btn right ${page === totalPages - 1 ? "disabled" : ""}`}
              onClick={next}
            >
              →
            </button>
          </div>

          <div className="see-experts">
            <div className="roll">
              <span>See all experts ↗</span>
              <span>See all experts ↗</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}