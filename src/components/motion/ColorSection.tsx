import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ColorSectionProps = {
  from: string;
  to: string;
  fromText: string;
  toText: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Background and text colour blend from the previous section's colour
 * into this one as its top edge travels up the viewport — tied to scroll, never abrupt.
 */
export function ColorSection({ from, to, fromText, toText, className = '', children }: ColorSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.3'] });
  const backgroundColor = useTransform(scrollYProgress, [0, 1], [from, to]);
  const color = useTransform(scrollYProgress, [0, 1], [fromText, toText]);

  return (
    <motion.div ref={ref} style={{ backgroundColor, color }} className={`relative ${className}`}>
      {children}
    </motion.div>);

}