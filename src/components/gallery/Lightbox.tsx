import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import type { GalleryImage } from '../../types/content';
import { EASE_UI } from '../../utils/motion';

type LightboxProps = {
  items: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
};

const variants = {
  enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.98 })
};

export function Lightbox({ items, index, onClose, onIndex }: LightboxProps) {
  const [dir, setDir] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const open = index !== null;
  const item = index !== null ? items[index] : undefined;

  const go = useCallback(
    (d: number) => {
      if (index === null) return;
      setDir(d);
      onIndex((index + d + items.length) % items.length);
    },
    [index, items.length, onIndex]
  );

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      returnFocus.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go, onClose]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80 || info.velocity.x < -500) go(1);else
    if (info.offset.x > 80 || info.velocity.x > 500) go(-1);
  };

  return (
    <AnimatePresence>
      {open && item &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        className="fixed inset-0 z-[70] flex flex-col bg-ink/95 text-cream"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE_UI }}>
        
          <div className="flex items-center justify-between px-5 py-4 md:px-10 md:py-6">
            <p className="text-sm tabular-nums opacity-70">
              {String((index ?? 0) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(242,236,225,0.35)] transition-colors duration-200 ease-ui hover:bg-cream hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream">
            
              Close <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div
          className="relative flex flex-1 items-center justify-center overflow-hidden px-4 md:px-24"
          onClick={(e) => e.target === e.currentTarget && onClose()}>
          
            <AnimatePresence custom={dir} mode="popLayout">
              <motion.img
              key={item.id}
              src={item.src}
              alt={item.title}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: EASE_UI }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={onDragEnd}
              draggable={false}
              className="max-h-[74vh] max-w-full cursor-grab touch-pan-y select-none object-contain active:cursor-grabbing" />
            
            </AnimatePresence>
            {(['prev', 'next'] as const).map((k) =>
          <button
            key={k}
            type="button"
            onClick={() => go(k === 'next' ? 1 : -1)}
            aria-label={k === 'next' ? 'Next image' : 'Previous image'}
            className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full shadow-[inset_0_0_0_1px_rgba(242,236,225,0.35)] transition-colors duration-200 ease-ui hover:bg-cream hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream sm:flex ${
            k === 'next' ? 'right-4 md:right-8' : 'left-4 md:left-8'}`
            }>
            
                {k === 'next' ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className="h-5 w-5" />}
              </button>
          )}
          </div>

          <div className="flex items-end justify-between gap-4 px-5 py-5 md:px-10 md:py-8">
            <div>
              <p className="text-xs opacity-70">{item.category}</p>
              <p className="mt-1 font-serif text-2xl md:text-3xl">{item.title}</p>
            </div>
            <p className="text-xs opacity-60 sm:hidden">Swipe to browse</p>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}