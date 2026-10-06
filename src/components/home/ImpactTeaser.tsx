import React from 'react';
import { motion } from 'framer-motion';
import { ColorSection } from '../motion/ColorSection';
import { RevealText } from '../motion/RevealText';
import { ArrowButton } from '../ui/ArrowButton';
import { palette } from '../../data/site';
import { timeline } from '../../data/timeline';
import { EASE_OUT } from '../../utils/motion';

export function ImpactTeaser() {
  return (
    <ColorSection from={palette.terracotta} to={palette.cream} fromText={palette.cream} toText={palette.ink}>
      <section aria-labelledby="impact-heading" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid grid-cols-12 items-end gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <RevealText id="impact-heading" lines={['Our', 'Impact']} className="display text-[clamp(3.5rem,10vw,10rem)]" />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="leading-relaxed opacity-80">
              We measure progress in the programmes communities keep coming back to. Here is how the work has grown,
              year by year.
            </p>
            <ArrowButton label="View report" to="/impact" className="mt-8" />
          </div>
        </div>

        <ol className="mt-16 grid grid-cols-1 border-t border-ink/15 md:mt-24 md:grid-cols-5">
          {timeline.map((t, i) =>
          <motion.li
            key={t.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: i * 0.1 }}
            className="flex flex-col border-b border-ink/15 py-6 md:border-b-0 md:border-l md:px-6 md:py-8 md:first:border-l-0 md:first:pl-0">
            
              <span className="display text-4xl md:text-5xl">{t.year}</span>
              <span className="mt-3 text-sm leading-snug opacity-75">{t.title}</span>
            </motion.li>
          )}
        </ol>
      </section>
    </ColorSection>);

}