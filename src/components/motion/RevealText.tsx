import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../../utils/motion';

type RevealTextProps = {
  lines: string[];
  as?: 'h1' | 'h2' | 'h3' | 'p';
  id?: string;
  className?: string;
  lineClassNames?: string[];
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Play on mount instead of when scrolled into view. */
  immediate?: boolean;
};

/** Line-by-line masked reveal: each line rises out of its own clipping row. */
export function RevealText({
  lines,
  as = 'h2',
  id,
  className = '',
  lineClassNames = [],
  delay = 0,
  stagger = 0.1,
  duration = 0.95,
  immediate = false
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const reduced = useReducedMotion();
  const show = immediate || inView;
  const Tag = as as React.ElementType;

  return (
    <Tag id={id} className={className} aria-label={lines.join(' ')}>
      <span ref={ref} aria-hidden="true" className="block">
        {lines.map((line, i) =>
        <span key={`${line}-${i}`} className="-my-[0.08em] block overflow-hidden py-[0.08em]">
            <motion.span
            className={`block origin-bottom-left ${lineClassNames[i] ?? ''}`}
            initial={reduced ? { opacity: 0 } : { y: '108%', opacity: 0, rotate: 1.2 }}
            animate={show ? { y: '0%', opacity: 1, rotate: 0 } : undefined}
            transition={{
              duration: reduced ? 0.4 : duration,
              ease: EASE_OUT,
              delay: delay + i * stagger
            }}>
            
              {line}
            </motion.span>
          </span>
        )}
      </span>
    </Tag>);

}