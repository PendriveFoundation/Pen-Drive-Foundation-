import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealText } from '../motion/RevealText';
import { ArrowButton } from '../ui/ArrowButton';
import { images } from '../../data/images';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';

/** Full-screen crop: the frame opens to full bleed as it arrives, then the photo settles from 1.08 → 1. */
export function FieldSection() {
  const ref = useRef<HTMLElement>(null);
  const { amp, mobile } = useMotionPrefs();
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const { scrollYProgress: through } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const inset = amp === 0 ? 0 : mobile ? 4 : 10;
  const clipPath = useTransform(
    enter,
    [0, 1],
    [`inset(${inset}% ${inset}% ${inset}% ${inset}% round 28px)`, 'inset(0% 0% 0% 0% round 0px)']
  );
  const scale = useTransform(through, [0, 1], [1 + 0.08 * amp, 1]);
  const y = useTransform(through, [0, 1], [`${-7 * amp}%`, `${7 * amp}%`]);
  const textY = useTransform(through, [0, 1], [70 * amp, -70 * amp]);

  return (
    <section ref={ref} aria-labelledby="field-heading" className="relative h-[100svh] min-h-[620px] bg-forest text-cream">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath }}>
        <motion.img
          src={images.field}
          alt="Volunteers and school children walking together along a village path at golden hour"
          className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
          style={{ scale, y }} />
        
        <div className="absolute inset-0 bg-ink/45" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-12 md:px-10 md:pb-20">
        
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-8">
            <RevealText id="field-heading" lines={['From the', 'Field']} className="display text-[clamp(4rem,12vw,12rem)]" />
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-4">
            <p className="max-w-sm leading-relaxed text-cream/85">
              Photographs and notes from the people who carry our work into classrooms, clinics and courtyards every week.
            </p>
            <ArrowButton label="Explore our work" to="/gallery" tone="cream" className="mt-8" />
          </div>
        </div>
      </motion.div>
    </section>);

}