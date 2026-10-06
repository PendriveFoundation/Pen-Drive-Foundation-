import  { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { RevealText } from '../motion/RevealText';
import { FocusAreaImage } from './FocusAreaImage';

import type { MaskShape } from '../motion/MaskImage';

import { focusAreas } from '../../data/focusAreas';
import { EASE_UI } from '../../utils/motion';


/* =========================================================
   IMAGE RATIOS

   Health     → 1254 × 1254  → 1:1
   Education  → 1448 × 1086  → 4:3
   Culture    → 1536 × 1024  → 3:2
   Skill      → 1772 × 887   → 2:1
========================================================= */

const IMAGE_RATIOS = [
  'aspect-[1/1]',
  'aspect-[4/3]',
  'aspect-[3/2]',
  'aspect-[2/1]',
];


/* =========================================================
   MASK SHAPES
========================================================= */

const SHAPES: MaskShape[] = [
  'rect',
  'asymmetric',
  'vertical',
  'rect',
];


/**
 * Desktop:
 * Heading and active copy stay anchored while
 * photographs scroll past.
 */
export function FocusAreasSticky() {
  const [active, setActive] = useState(0);

  const onActive = useCallback((i: number) => {
    setActive(i);
  }, []);

  const area = focusAreas[active];

  return (
    <section
      aria-labelledby="focus-heading"
      className="
        mx-auto
        grid
        max-w-[1600px]
        grid-cols-12
        gap-8
        px-6
        md:px-8
        lg:px-10
      "
    >

      {/* =====================================================
          LEFT — STICKY CONTENT
      ===================================================== */}

      <div className="col-span-12 lg:col-span-5">

        <div
          className="
            sticky
            top-0
            flex
            min-h-[100svh]
            flex-col
            justify-center
            py-20
            lg:py-24
          "
        >

          {/* Main heading */}

          <RevealText
            id="focus-heading"
            lines={[
              'Our Focus',
              'Areas',
            ]}
            className="
              display
              text-[clamp(3.5rem,7.2vw,8rem)]
              leading-[0.86]
              tracking-[-0.055em]
            "
          />


          {/* =================================================
              ACTIVE CONTENT
          ================================================= */}

          <div className="mt-12 max-w-md lg:mt-14">

            {/* Progress */}

            <div
              className="
                flex
                items-center
                gap-2
              "
              aria-hidden="true"
            >
              {focusAreas.map((a, i) => (
                <span
                  key={a.title}
                  className="
                    relative
                    h-px
                    flex-1
                    overflow-hidden
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      bg-current
                      opacity-20
                    "
                  />

                  <motion.span
                    className="
                      absolute
                      inset-0
                      origin-left
                      bg-current
                    "
                    initial={false}
                    animate={{
                      scaleX: i <= active ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: EASE_UI,
                    }}
                  />
                </span>
              ))}
            </div>


            {/* Active text */}

            <div
              className="
                relative
                mt-7
                min-h-[13rem]
              "
              aria-live="polite"
            >

              <AnimatePresence
                mode="wait"
                initial={false}
              >

                <motion.div
                  key={area.title}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: EASE_UI,
                  }}
                >

                  <p
                    className="
                      text-sm
                      tabular-nums
                      opacity-60
                    "
                  >
                    {String(active + 1).padStart(2, '0')}
                    {' / '}
                    {String(focusAreas.length).padStart(2, '0')}
                  </p>


                  <h3
                    className="
                      mt-3
                      font-serif
                      text-5xl
                      leading-[0.95]
                      tracking-[-0.025em]
                    "
                  >
                    {area.title}
                  </h3>


                  <p
                    className="
                      mt-5
                      max-w-md
                      text-base
                      leading-relaxed
                      opacity-80
                    "
                  >
                    {area.body}
                  </p>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT — IMAGE STORY
      ===================================================== */}

      <div
        className="
          col-span-12
          col-start-1
          flex
          flex-col
          gap-[18vh]
          py-[18vh]
          lg:col-span-6
          lg:col-start-7
          lg:py-[22vh]
        "
      >

        {focusAreas.map((a, i) => (

          <FocusAreaImage
            key={a.title}
            area={a}
            index={i}
            shape={SHAPES[i % SHAPES.length]}
            onActive={onActive}

            /*
             * Exact image ratio is controlled here.
             * FocusAreaImage should forward this class
             * to its image wrapper.
             */
            className={`
              ${IMAGE_RATIOS[i]}
              w-full
              ${
                i % 2
                  ? 'ml-auto lg:w-[82%]'
                  : 'lg:w-[92%]'
              }
            `}
          />

        ))}

      </div>

    </section>
  );
}