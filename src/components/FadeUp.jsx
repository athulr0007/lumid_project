import { useEffect, useRef } from "react";

export default function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    el.style.transitionDelay = `${delay}ms`;

    const timer = setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100 + delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <div ref={ref}>{children}</div>;
}