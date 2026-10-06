import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2Icon } from 'lucide-react';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import type { GalleryImage } from '../../types/content';
import { EASE_OUT } from '../../utils/motion';

type GalleryItemProps = {item: GalleryImage;delay: number;onOpen: () => void;};

export function GalleryItem({ item, delay, onOpen }: GalleryItemProps) {
  const { lite } = useMotionPrefs();

  return (
    <motion.li
      initial={{ opacity: 0, y: lite ? 16 : 40, clipPath: 'inset(14% 0% 0% 0%)' }}
      whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}>
      
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open image: ${item.title}`}
        className="group relative block w-full overflow-hidden bg-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-terracotta"
        style={{ aspectRatio: item.ratio }}>
        
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-ui group-hover:-translate-y-[1%] group-hover:scale-[1.05]" />
        
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 ease-ui group-hover:bg-ink/45" />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-5 text-left text-cream opacity-0 transition-[opacity,transform] duration-300 ease-ui group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <span>
            <span className="block text-xs opacity-85">{item.category}</span>
            <span className="mt-1 block font-serif text-2xl leading-tight">{item.title}</span>
          </span>
          <Maximize2Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        </div>
      </button>
    </motion.li>);

}