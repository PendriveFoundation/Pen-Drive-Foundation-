import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { TimelineItem } from './TimelineItem';
import { timeline } from '../../data/timeline';

/** The line draws itself as you scroll; each year lights up when reached. */
export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return (
    <section aria-labelledby="timeline-heading" className="bg-cream">
      <div className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10 md:pb-40">
        <RevealText id="timeline-heading" lines={['Year by', 'Year']} className="display text-[clamp(3.25rem,7vw,7rem)]" />
        <div className="relative mt-16 md:mt-24">
          <div aria-hidden="true" className="absolute bottom-0 left-[8px] top-0 w-px bg-ink/15 md:left-1/4" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute bottom-0 left-[8px] top-0 w-px origin-top bg-terracotta md:left-1/4" />
          
          <ol ref={ref} className="space-y-24 md:space-y-40">
            {timeline.map((entry, i) =>
            <TimelineItem key={entry.year} entry={entry} index={i} />
            )}
          </ol>
        </div>
      </div>
    </section>);

}