import React from 'react';
import { RevealText } from '../motion/RevealText';
import { MaskImage } from '../motion/MaskImage';
import { ArrowButton } from '../ui/ArrowButton';
import { images } from '../../data/images';

export function ClosingCta() {
  return (
    <section aria-labelledby="closing-heading" className="bg-cream">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-end gap-x-8 gap-y-12 px-5 pb-8 pt-8 md:px-10 md:pt-16">
        <div className="col-span-12 lg:col-span-7">
          <RevealText
            id="closing-heading"
            lines={['Stand with', 'the people', 'doing the work']}
            className="display text-[clamp(3.25rem,8.5vw,8.75rem)]"
            lineClassNames={['', '', 'text-terracotta']} />
          
          <p className="mt-10 max-w-md leading-relaxed text-ink/75">
            Your support keeps classrooms open, health camps running and young people learning skills that last.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ArrowButton label="Donate now" to="/donate" />
            <ArrowButton label="Read their stories" to="/gallery" variant="outline" direction="right" />
          </div>
        </div>
        <figure className="col-span-12 md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9">
          <MaskImage
            shape="asymmetric"
            parallax
            src={images.volunteers}
            alt="Volunteers handing school kits to children in a village courtyard"
            className="aspect-[4/5]" />
          
        </figure>
      </div>
    </section>);

}