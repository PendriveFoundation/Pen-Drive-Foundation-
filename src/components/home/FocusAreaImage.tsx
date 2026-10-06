import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { MaskImage, type MaskShape } from '../motion/MaskImage';
import type { FocusArea } from '../../types/content';

type FocusAreaImageProps = {
  area: FocusArea;
  index: number;
  shape: MaskShape;
  className?: string;
  onActive: (index: number) => void;
};

const IMAGE_RATIOS = [
  'aspect-[1/1]', // Health — 1254 × 1254
  'aspect-[4/3]', // Education — 1448 × 1086
  'aspect-[3/2]', // Culture — 1536 × 1024
  'aspect-[2/1]', // Skill — 1772 × 887
];

export function FocusAreaImage({
  area,
  index,
  shape,
  className = '',
  onActive,
}: FocusAreaImageProps) {
  const ref = useRef<HTMLElement>(null);
  const centered = useInView(ref, {
    margin: '-45% 0px -45% 0px',
  });

  useEffect(() => {
    if (centered) {
      onActive(index);
    }
  }, [centered, index, onActive]);

  const imageRatio = IMAGE_RATIOS[index % IMAGE_RATIOS.length];

  return (
    <figure ref={ref} className={className}>
      <MaskImage
        shape={shape}
        parallax
        src={area.image}
        alt={area.caption}
        className={`w-full ${imageRatio}`}
      />

      <figcaption className="mt-3 text-xs opacity-60">
        {area.caption}
      </figcaption>
    </figure>
  );
}