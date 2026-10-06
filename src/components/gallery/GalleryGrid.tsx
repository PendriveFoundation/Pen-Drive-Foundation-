import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GalleryItem } from './GalleryItem';
import { useColumns } from '../../hooks/useColumns';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import type { GalleryImage } from '../../types/content';

type GalleryGridProps = {items: GalleryImage[];onOpen: (index: number) => void;};

/**
 * Items are dealt into columns in reading order so each row reveals left → right
 * (120ms apart). The middle column drifts slightly faster for depth.
 */
export function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  const cols = useColumns();
  const ref = useRef<HTMLDivElement>(null);
  const { amp } = useMotionPrefs();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const drift = useTransform(scrollYProgress, [0, 1], [0, -80 * amp]);

  const columns = Array.from({ length: cols }, (_, c) =>
  items.map((item, i) => ({ item, i })).filter(({ i }) => i % cols === c)
  );

  if (items.length === 0) {
    return <p className="py-24 text-center text-ink/60">No photographs in this category yet.</p>;
  }

  return (
    <div ref={ref} className="grid gap-5 md:gap-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {columns.map((col, c) =>
      <motion.ul
        key={c}
        style={{ y: cols === 3 && c === 1 ? drift : 0 }}
        className={`flex flex-col gap-5 md:gap-6 ${cols === 3 && c === 1 ? 'pt-24' : ''}`}>
        
          {col.map(({ item, i }) =>
        <GalleryItem key={item.id} item={item} delay={c * 0.12} onOpen={() => onOpen(i)} />
        )}
        </motion.ul>
      )}
    </div>);

}