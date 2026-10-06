import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { EASE_IN_OUT, EASE_OUT } from '../../utils/motion';

export type MaskShape = 'rect' | 'vertical' | 'full' | 'asymmetric';

type MaskImageProps = {
  src: string;
  alt: string;
  shape?: MaskShape;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
  /** Scroll-linked scale 1.08 → 1 plus slow vertical drift. */
  parallax?: boolean;
  fromScale?: number;
  imgClassName?: string;
};

const CLIPS: Record<MaskShape, string> = {
  rect: 'inset(14% 14% 14% 14%)',
  vertical: 'inset(0% 38% 0% 38%)',
  full: 'inset(100% 0% 0% 0%)',
  asymmetric: 'inset(32% 46% 0% 0%)'
};
const OPEN = 'inset(0% 0% 0% 0%)';

export function MaskImage({
  src,
  alt,
  shape = 'rect',
  className = '',
  delay = 0,
  duration = 1.1,
  immediate = false,
  parallax = false,
  fromScale = 1.05,
  imgClassName = ''
}: MaskImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const { reduced, amp } = useMotionPrefs();
  const show = (immediate || inView) && loaded;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.6], [1 + 0.08 * amp, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [`${-6 * amp}%`, `${6 * amp}%`]);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-sand/40 ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduced ? { opacity: 0, clipPath: OPEN } : { opacity: 1, clipPath: CLIPS[shape] }}
        animate={show ? { opacity: 1, clipPath: OPEN } : undefined}
        transition={{ duration: reduced ? 0.4 : duration, ease: EASE_IN_OUT, delay }}>
        
        <motion.div
          className={parallax ? 'absolute inset-x-0 -bottom-[8%] -top-[8%]' : 'absolute inset-0'}
          style={parallax ? { scale, y } : undefined}>
          
          <motion.img
            ref={imgRef}
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)}
            className={`h-full w-full object-cover ${imgClassName}`}
            initial={{ scale: reduced ? 1 : fromScale }}
            animate={show ? { scale: 1 } : undefined}
            transition={{ duration: duration + 0.4, ease: EASE_OUT, delay }} />
          
        </motion.div>
      </motion.div>
    </div>);

}