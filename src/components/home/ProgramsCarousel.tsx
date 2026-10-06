import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { ProgramCard } from './ProgramCard';
import { programs } from '../../data/programs';
import { EASE_OUT } from '../../utils/motion';

/** Mobile / reduced motion: native horizontal swipe with snap points. */
export function ProgramsCarousel() {
  return (
    <section aria-labelledby="programs-heading-mobile" className="py-24">
      <div className="px-5">
        <RevealText id="programs-heading-mobile" lines={['Our', 'Programs']} className="display text-[clamp(3.25rem,15vw,5rem)]" />
        <p className="mt-6 max-w-sm leading-relaxed text-cream/85">
          Five long-running programmes, each shaped with the communities who take part in them.
        </p>
      </div>
      <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4">
        {programs.map((p, i) =>
        <motion.li
          key={p.slug}
          className="w-[78vw] max-w-[360px] shrink-0 snap-start"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: Math.min(i, 2) * 0.1 }}>
          
            <ProgramCard program={p} />
          </motion.li>
        )}
      </ul>
      <p className="mt-4 px-5 text-sm text-cream/75">Swipe to explore →</p>
    </section>);

}