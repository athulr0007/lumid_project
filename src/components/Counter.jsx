import { useEffect, useState } from "react";

export default function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numTarget = parseFloat(target);
    if (isNaN(numTarget)) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numTarget) {
        setCount(numTarget);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toFixed(target.includes('.') ? 1 : 0)}{suffix}</span>;
}