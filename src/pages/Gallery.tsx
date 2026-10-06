import  { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { PageShell } from '../components/layout/PageShell';
import { RevealText } from '../components/motion/RevealText';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Lightbox } from '../components/gallery/Lightbox';

import { gallery, galleryCategories } from '../data/gallery';
import { EASE_OUT, EASE_UI } from '../utils/motion';

export function Gallery() {
  const [params, setParams] = useSearchParams();

  const raw = params.get('category');

  const category =
    galleryCategories.find((c) => c === raw) ?? 'All';

  const items =
    category === 'All'
      ? gallery
      : gallery.filter((item) => item.category === category);

  const [index, setIndex] = useState<number | null>(null);

  const select = (c: string) => {
    setIndex(null);

    setParams(
      c === 'All'
        ? {}
        : { category: c },
      { replace: true }
    );
  };

  return (
    <PageShell title="Gallery">

      {/* =========================================================
          GALLERY HERO
      ========================================================= */}
      <section
        aria-labelledby="gallery-heading"
        className="bg-cream pb-24 pt-32 md:pb-40 md:pt-44"
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">

          <div className="grid grid-cols-12 items-end gap-x-8 gap-y-8">

            <div className="col-span-12 lg:col-span-8">
              <RevealText
                as="h1"
                id="gallery-heading"
                immediate
                delay={0.3}
                lines={['Our Work', 'In Action']}
                className="display text-[clamp(3.75rem,11vw,11rem)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay: 0.6
              }}
              className="col-span-12 max-w-lg leading-relaxed text-ink/75 lg:col-span-4"
            >
              Explore moments from Pen-Drive Foundation's work across
              education, healthcare awareness, community development,
              women empowerment, youth activities, cultural programmes
              and skill development initiatives.
            </motion.p>

          </div>


          {/* =====================================================
              CATEGORY FILTERS
          ===================================================== */}
          <motion.div
            role="group"
            aria-label="Filter gallery by category"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.75
            }}
            className="no-scrollbar -mx-5 mt-14 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0"
          >

            {galleryCategories.map((c) => {
              const active = c === category;

              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => select(c)}
                  aria-pressed={active}
                  className={`relative h-10 shrink-0 whitespace-nowrap rounded-full px-5 text-sm font-medium transition-colors duration-200 ease-ui focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                    active
                      ? 'text-cream'
                      : 'text-ink shadow-[inset_0_0_0_1px_rgba(27,26,23,0.2)] hover:bg-ink/5'
                  }`}
                >

                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{
                        duration: 0.3,
                        ease: EASE_UI
                      }}
                    />
                  )}

                  <span className="relative">
                    {c}
                  </span>

                </button>
              );
            })}

          </motion.div>


          {/* =====================================================
              IMAGE GALLERY
          ===================================================== */}
          <div className="mt-12">

            <GalleryGrid
              key={category}
              items={items}
              onOpen={setIndex}
            />

          </div>

        </div>
      </section>


      {/* =========================================================
          LIGHTBOX
      ========================================================= */}
      <Lightbox
        items={items}
        index={index}
        onClose={() => setIndex(null)}
        onIndex={setIndex}
      />

    </PageShell>
  );
}