import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ColorSection } from '../motion/ColorSection';
import { RevealText } from '../motion/RevealText';
import { images } from '../../data/images';
import { palette } from '../../data/site';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { EASE_IN_OUT } from '../../utils/motion';

/** Typography mask: the photograph lives inside the letters and drifts as you scroll. */
export function TogetherMask() {
  const ref = useRef<HTMLDivElement>(null);
  const { amp, reduced } = useMotionPrefs();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], [`50% ${50 - 35 * amp}%`, `50% ${50 + 35 * amp}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1 + 0.06 * amp, 1]);

  return (
    <ColorSection from={palette.cream} to={palette.forest} fromText={palette.ink} toText={palette.cream}>
      <section aria-labelledby="together-heading" className="overflow-hidden py-24 md:py-40">
        <div ref={ref} className="mx-auto max-w-[1600px] px-5 md:px-10">
          <motion.h2
            id="together-heading"
            className="display text-mask text-center text-[min(23vw,21rem)] leading-[0.8]"
            style={{
              backgroundImage: `url(${images.hero})`,
              backgroundSize: 'cover',
              backgroundPosition,
              scale
            }}
            initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0% 50% 0% 50%)' }}
            whileInView={reduced ? { opacity: 1 } : { clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 1.2, ease: EASE_IN_OUT }}>
            
            Together
          </motion.h2>
          <RevealText
            as="p"
            lines={['Sahyog means cooperation.', 'It is both our name and our method.']}
            lineClassNames={['', 'italic']}
            className="mx-auto mt-12 max-w-3xl text-center font-serif text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.1]" />
          
        </div>
      </section>
    </ColorSection>);

}