import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { RevealText } from '../motion/RevealText';
import { ProgramCard } from './ProgramCard';
import { programs } from '../../data/programs';

/** Desktop: vertical scroll drives the program track horizontally. */
export function ProgramsHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const distanceMV = useMotionValue(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(d);
      distanceMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distanceMV]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const rawX = useTransform([scrollYProgress, distanceMV], ([p, d]: number[]) => -p * d);
  const x = useSpring(rawX, { stiffness: 160, damping: 32, mass: 0.35 });

  // Keyboard users: tabbing to an off-screen card scrolls the page to bring it into the track's view.
  const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>('[data-card]');
    const section = sectionRef.current;
    if (!card || !section || distance === 0) return;
    const offset = Math.min(distance, Math.max(0, card.offsetLeft - 40));
    window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY + offset });
  };

  return (
    <section aria-labelledby="programs-heading">
      <div ref={sectionRef} className="relative" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            onFocus={handleFocus}
            className="relative flex w-max items-stretch gap-10 pl-10 pr-[12vw] will-change-transform">
            
            <div className="flex w-[34vw] max-w-[540px] shrink-0 flex-col justify-between py-2">
              <div>
                <RevealText id="programs-heading" lines={['Our', 'Programs']} className="display text-[clamp(4rem,8.5vw,9rem)]" />
                <p className="mt-8 max-w-sm leading-relaxed text-cream/85">
                  Five long-running programmes, each shaped with the communities who take part in them.
                </p>
              </div>
              <p className="flex items-center gap-3 text-sm text-cream/75">
                Keep scrolling <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </p>
            </div>
            {programs.map((p) =>
            <div key={p.slug} data-card className="w-[clamp(320px,26vw,440px)] shrink-0">
                <ProgramCard program={p} />
              </div>
            )}
          </motion.div>

          <div aria-hidden="true" className="absolute inset-x-10 bottom-8 flex items-center gap-6 text-xs tabular-nums">
            <span>01</span>
            <div className="relative h-px flex-1">
              <span className="absolute inset-0 bg-current opacity-25" />
              <motion.span style={{ scaleX: scrollYProgress }} className="absolute inset-0 origin-left bg-current" />
            </div>
            <span>{String(programs.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>);

}