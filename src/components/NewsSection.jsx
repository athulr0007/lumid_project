import { useEffect, useRef } from "react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("ns-vis"); obs.disconnect(); } },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

const newsItems = [
  {
    tag: "News",
    date: "Oct 7, 2025",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80",
    title: "Source Joins the OpenAI Services Partner Program",
  },
  {
    tag: "Artificial Intelligence",
    date: "Oct 7, 2025",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    title: "How Intelligent Workflows Are Redefining Enterprise Operations",
  },
  {
    tag: "News",
    date: "Oct 7, 2025",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80",
    title: "Source Opens New Office in Dubai to Serve the Middle East",
  },
];

export default function NewsSection() {
  const headRef = useRef(null);
  const gridRef = useRef(null);
  useReveal(headRef);
  useReveal(gridRef, 100);

  return (
    <>
      <style>{css}</style>
      <section className="ns-wrap">
        <div className="ns-head ns-fade" ref={headRef}>
          <h2 className="ns-title">News & Insights.</h2>
          <div className="ns-right">
            <p className="ns-sub">
              Explore the latest from Source<sup>®</sup> — product updates, thought
              pieces, and ideas driving the future of intelligent systems.
            </p>
            <a className="ns-all" href="#">All news ↗</a>
          </div>
        </div>

        <div className="ns-grid ns-fade" ref={gridRef}>
          {newsItems.map((n, i) => (
            <a
              key={i}
              className="ns-card"
              href="#"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="ns-img-wrap">
                <img src={n.img} alt="" />
              </div>
              <div className="ns-meta">
                <div className="ns-tag-row">
                  <span className="ns-sq" /> {n.tag}
                  <span className="ns-sep">■</span> {n.date}
                </div>
                <div className="ns-card-title">{n.title}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

const css = `
  .ns-fade {
    opacity: 0; transform: translateY(30px);
    transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                transform 0.7s cubic-bezier(0.16,1,0.3,1);
  }
  .ns-vis { opacity: 1; transform: none; }

  .ns-wrap {
    padding: 80px 60px;
    border-top: 1px solid #ddd9d1;
    background: #f5f2ec;
  }
  .ns-head {
    display: flex; align-items: flex-start;
    justify-content: space-between; gap: 48px;
    margin-bottom: 48px;
  }
  .ns-title {
    font-size: clamp(28px, 3.2vw, 46px);
    font-weight: 900; letter-spacing: -1.2px;
    line-height: 1.1; margin: 0; color: #0d0d0d;
  }
  .ns-right { text-align: right; }
  .ns-sub {
    font-size: 15px; color: #555; line-height: 1.65;
    max-width: 380px; margin: 0 0 10px;
  }
  .ns-sub sup { font-size: 60%; vertical-align: super; }
  .ns-all {
    font-size: 14px; font-weight: 700; color: #0d0d0d;
    text-decoration: underline; text-underline-offset: 3px;
    transition: opacity 0.2s;
  }
  .ns-all:hover { opacity: 0.6; }

  .ns-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid #ddd9d1;
  }
  .ns-card {
    border-right: 1px solid #ddd9d1;
    overflow: hidden; cursor: pointer;
    text-decoration: none; display: block;
    transition: background 0.18s;
  }
  .ns-card:last-child { border-right: none; }
  .ns-card:hover { background: rgba(0,0,0,0.02); }

  .ns-img-wrap { height: 280px; overflow: hidden; }
  .ns-img-wrap img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .ns-card:hover .ns-img-wrap img { transform: scale(1.05); }

  .ns-meta { padding: 24px; }
  .ns-tag-row {
    display: flex; align-items: center; gap: 6px;
    font-size: 12px; color: #888; margin-bottom: 12px;
  }
  .ns-sq {
    width: 7px; height: 7px; background: #0d0d0d;
    flex-shrink: 0; display: block;
  }
  .ns-sep { font-size: 8px; }
  .ns-card-title {
    font-size: 18px; font-weight: 800;
    line-height: 1.3; letter-spacing: -0.3px; color: #0d0d0d;
  }

  @media (max-width: 1100px) {
    .ns-wrap { padding: 56px 32px; }
    .ns-head { flex-direction: column; gap: 16px; }
    .ns-right { text-align: left; }
  }
  @media (max-width: 640px) {
    .ns-wrap { padding: 40px 24px; }
    .ns-grid { grid-template-columns: 1fr; }
    .ns-card { border-right: none; border-bottom: 1px solid #ddd9d1; }
  }
`;