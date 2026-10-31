"use client";

import { useEffect, useState } from "react";

/** Types `text`, pauses, clears and repeats. */
export function useTyping(text: string, { speed = 70, hold = 2600, start = 400 } = {}) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setOut(text.slice(0, i));
      if (i < text.length) t = setTimeout(tick, speed);
      else
        t = setTimeout(() => {
          i = 0;
          setOut("");
          t = setTimeout(tick, start);
        }, hold);
    };
    t = setTimeout(tick, start);
    return () => clearTimeout(t);
  }, [text, speed, hold, start]);
  return out;
}

/** Counts from 0 up to `target`, then restarts every `every` ms. */
export function useCountUp(target: number, { duration = 1800, every = 6000 } = {}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    let loop: ReturnType<typeof setInterval>;
    const run = () => {
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    run();
    loop = setInterval(run, every);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(loop);
    };
  }, [target, duration, every]);
  return n.toLocaleString("en-US");
}
