import { useEffect, useRef } from "react";

function useReveal(ref, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("ns-vis");
          obs.disconnect();
        }
      },
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
              Explore the latest from Source<sup>®</sup> — product updates,
              thought pieces, and ideas driving the future of intelligent systems.
            </p>

            <a className="ns-all" href="#">
  <span>All news ↗</span>
</a>
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
                  <span className="ns-sq" />
                  {n.tag}
                  <span className="ns-sep">■</span>
                  {n.date}
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
/* reveal */
.ns-fade {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
              transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
.ns-vis {
  opacity: 1;
  transform: none;
}

/* layout */
.ns-wrap {
  padding: 80px 60px;
  border-top: 1px solid #ddd9d1;
  background: #f5f2ec;
}

.ns-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  margin-bottom: 38px;
}

.ns-title {
  font-size: clamp(28px, 3.2vw, 66px);
  font-weight: 600;
  letter-spacing: -1.2px;
  line-height: 1.1;
  margin: 0;
  color: #0d0d0d;
}

.ns-right {
  text-align: left;
}

.ns-sub {
  font-size: 17px;
  color: #555;
  line-height: 1.65;
  max-width: 580px;
  margin: 0 0 10px;
  font-weight: 600;
}

.ns-sub sup {
  font-size: 60%;
  vertical-align: super;
}

/* container */
.ns-all {
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: #0d0d0d;
  font-size: 19px;
  font-weight: 500;
  text-decoration: none; /* remove moving underline */
  padding-bottom: 4px; /* space for underline */
}

/* fixed underline */
.ns-all::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0; /* inside, not outside */
  width: 100%;
  height: 2px;
  background: #0d0d0d;
}

/* animated text */
.ns-all span {
  display: inline-block;
  position: relative;
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
}

/* second text layer */
.ns-all span::after {
  content: "All news ↗";
  position: absolute;
  left: 0;
  top: 100%;
}

/* roll */
.ns-all:hover span {
  transform: translateY(-100%);
}

/* grid */
.ns-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #ddd9d1;
}

.ns-card {
  border-right: 1px solid #ddd9d1;
  overflow: hidden;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.ns-card:last-child {
  border-right: none;
}

/* image zoom */
.ns-img-wrap {
  height: 430px;
  overflow: hidden;
}

.ns-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
}

.ns-card:hover .ns-img-wrap img {
  transform: scale(1.12);
}

/* meta */
.ns-meta {
  padding: 24px;
}

.ns-tag-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #888;
  margin-bottom: 12px;
}

/* rotating square */
.ns-sq {
  width: 13px;
  height: 13px;
  background: #0d0d0d;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1),
              background 0.3s ease;
}

.ns-card:hover .ns-sq {
  transform: rotate(360deg);
  background: #22c55e;
}

.ns-sep {
  font-size: 8px;
}

.ns-card-title {
  font-size: 22px;
  font-weight: 450;
  line-height: 1.3;
  letter-spacing: -0.3px;
  color: #0d0d0d;
}

/* responsive */
@media (min-width: 641px) and (max-width: 1100px) {
  .ns-wrap {
    padding: 48px 28px;
  }

  .ns-head {
    flex-direction: column;
    gap: 14px;
    margin-bottom: 32px;
  }

  .ns-title {
    font-size: clamp(36px, 5vw, 52px);
  }

  .ns-sub {
    font-size: 15px;
    max-width: 100%;
  }

  .ns-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ns-card:nth-child(2) {
    border-right: none;
  }

  .ns-card:nth-child(3) {
    border-right: none;
    border-top: 1px solid #ddd9d1;
  }

  .ns-img-wrap {
    height: 320px;
  }

  .ns-card-title {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .ns-wrap {
    padding: 36px 16px;
  }

  .ns-head {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }

  .ns-title {
    font-size: 32px;
    letter-spacing: -0.03em;
  }

  .ns-sub {
    font-size: 14px;
    line-height: 1.55;
    max-width: 100%;
    margin-bottom: 8px;
  }

  .ns-grid {
    grid-template-columns: 1fr;
  }

  .ns-card {
    border-right: none;
    border-bottom: 1px solid #ddd9d1;
  }

  .ns-card:last-child {
    border-bottom: none;
  }

  .ns-img-wrap {
    height: 240px;
  }

  .ns-meta {
    padding: 18px 0;
  }

  .ns-tag-row {
    font-size: 13px;
  }

  .ns-card-title {
    font-size: 18px;
    line-height: 1.3;
  }
}

`;