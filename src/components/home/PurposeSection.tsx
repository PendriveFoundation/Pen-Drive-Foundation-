import React from 'react';
import { RevealText } from '../motion/RevealText';
import { MaskImage } from '../motion/MaskImage';
import { Counter } from '../motion/Counter';
import { ArrowButton } from '../ui/ArrowButton';
import { images } from '../../data/images';
import { site } from '../../data/site';

export function PurposeSection() {
  return (
    <section aria-labelledby="purpose-heading" className="bg-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 ">
        
        <div className="grid grid-cols-12 gap-x-8 gap-y-10">
          
          {/* Heading */}
          <div className="col-span-12 lg:col-span-5">
            <RevealText
              id="purpose-heading"
              lines={['Our', 'Purpose']}
              className="display text-[clamp(3.5rem,9vw,9rem)]"
            />
          </div>

          {/* Main Purpose Statement */}
          <div className="col-span-12 lg:col-span-7 lg:pt-3">
            <RevealText
              as="p"
              stagger={0.08}
              lines={[
                'We believe education creates',
                'opportunity and lasting change.',
                'We empower children, women and',
                'communities to build a better future.'
              ]}
              lineClassNames={['', 'italic', '', '']}
              className="font-serif text-[clamp(1.75rem,3.3vw,3.25rem)] leading-[1.08]"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-12 md:mt-32">
          
          {/* Founded */}
          <div className="col-span-12 border-t border-ink/15 pt-6 md:col-span-6 lg:col-span-4">
            <p className="text-sm text-ink/60">
              Working for community development since
            </p>

            <p className="display mt-4 text-[clamp(5.5rem,14vw,13rem)] leading-[0.8]">
              <Counter to={site.founded} />
            </p>
          </div>

          {/* Image */}
          <figure className="col-span-12 md:col-span-6 lg:col-span-3 lg:col-start-6">
            <MaskImage
              shape="vertical"
              parallax
              src={images.library}
              alt="Children participating in an educational programme"
              className="aspect-[3/4]"
            />

            <figcaption className="mt-3 text-xs text-ink/60">
              Supporting education and learning opportunities for children
              and communities
            </figcaption>
          </figure>

          {/* Description */}
          <div className="col-span-12 self-end lg:col-span-3 lg:col-start-10">
            <p className="leading-relaxed text-ink/75">
              Pen-Drive Foundation works to create meaningful opportunities
              through education, skill development and community-based
              initiatives. Our work focuses on empowering underprivileged
              children, women, youth and rural communities through
              sustainable programmes that encourage participation,
              confidence and self-reliance.
            </p>

            <ArrowButton
              label="Our Story"
              to="/about"
              variant="outline"
              className="mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}