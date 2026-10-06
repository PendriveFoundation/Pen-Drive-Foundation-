import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { MaskImage } from '../motion/MaskImage';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import type { TimelineEntry } from '../../types/content';
import { EASE_OUT } from '../../utils/motion';

type TimelineItemProps = {entry: TimelineEntry;index: number;};

export function TimelineItem({ entry, index }: TimelineItemProps) {
  const ref = useRef<HTMLLIElement>(null);
  const reached = useInView(ref, { once: true, margin: '0px 0px -30% 0px' });
  const { lite } = useMotionPrefs();

  return (
    <li ref={ref} className="relative grid grid-cols-1 gap-6 pl-10 md:grid-cols-4 md:gap-0 md:pl-0">
      <span
        aria-hidden="true"
        className={`absolute left-[8px] top-4 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-terracotta transition-colors duration-300 ease-ui md:left-1/4 ${
        reached ? 'bg-terracotta' : 'bg-cream'}`
        } />
      
      <div className="md:pr-12 md:text-right">
        <RevealText as="p" lines={[entry.year]} className="display text-[clamp(3rem,5vw,5.5rem)]" />
      </div>
      <div className="grid items-start gap-8 md:col-span-3 md:pl-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: lite ? 0 : 28 }}
          animate={reached ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}>
          
          <h3 className="font-serif text-3xl leading-tight md:text-4xl">{entry.title}</h3>
          <p className="mt-4 max-w-md leading-relaxed text-ink/75">{entry.body}</p>
        </motion.div>
        <MaskImage
          shape={index % 2 ? 'vertical' : 'rect'}
          parallax
          delay={0.2}
          src={entry.image}
          alt={entry.title}
          className="aspect-[4/3]" />
        
      </div>
    </li>);

}