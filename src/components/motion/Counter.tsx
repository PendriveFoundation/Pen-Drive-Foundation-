import React, { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../../utils/motion';

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
};

/** Counts up once in view. Only use with verified figures. */
export function Counter({ to, from = 0, duration = 2, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || !el) return;
    if (reduced) {
      el.textContent = String(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: EASE_OUT,
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      }
    });
    return () => controls.stop();
  }, [inView, reduced, from, to, duration]);

  return (
    <span className={className}>
      <span className="sr-only">{to}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {reduced ? to : from}
      </span>
    </span>);

}