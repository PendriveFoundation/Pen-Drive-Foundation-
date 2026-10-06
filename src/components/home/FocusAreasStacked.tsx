import { RevealText } from '../motion/RevealText';
import { MaskImage } from '../motion/MaskImage';

import { focusAreas } from '../../data/focusAreas';

/* =========================================================
   EXACT IMAGE RATIOS

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
   MOBILE MASK SHAPES
========================================================= */

const MOBILE_SHAPES = [
  'rect',
  'asymmetric',
  'vertical',
  'rect',
] as const;


/**
 * Mobile:
 * A calm vertical sequence instead of the sticky layout.
 */
export function FocusAreasStacked() {
  return (
    <section
      aria-labelledby="focus-heading-mobile"
      className="
        px-5
        py-20
        md:px-8
        md:py-24
      "
    >

      {/* =====================================================
          HEADING
      ===================================================== */}

      <RevealText
        id="focus-heading-mobile"
        lines={[
          'Our Focus',
          'Areas',
        ]}
        className="
          display
          text-[clamp(3.25rem,15vw,5rem)]
          leading-[0.86]
          tracking-[-0.055em]
        "
      />


      {/* =====================================================
          FOCUS AREAS
      ===================================================== */}

      <ul
        className="
          mt-14
          space-y-20
          md:mt-16
          md:space-y-24
        "
      >

        {focusAreas.map((a, i) => (

          <li
            key={a.title}
            className="relative"
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className={`
                relative
                w-full
                overflow-hidden
                ${IMAGE_RATIOS[i]}
              `}
            >

              <MaskImage
                shape={MOBILE_SHAPES[i]}
                src={a.image}
                alt={a.caption}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                "
              />

            </div>


            {/* =================================================
                IMAGE META
            ================================================= */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-between
              "
            >

              <p
                className="
                  text-sm
                  tabular-nums
                  opacity-60
                "
              >
                {String(i + 1).padStart(2, '0')}
                {' / '}
                {String(focusAreas.length).padStart(2, '0')}
              </p>

              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  opacity-40
                "
              >
                Focus Area
              </span>

            </div>


            {/* =================================================
                TITLE
            ================================================= */}

            <h3
              className="
                mt-2
                max-w-[90%]
                font-serif
                text-4xl
                leading-[0.95]
                tracking-[-0.025em]
              "
            >
              {a.title}
            </h3>


            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-3
                max-w-xl
                leading-relaxed
                opacity-80
              "
            >
              {a.body}
            </p>

          </li>

        ))}

      </ul>

    </section>
  );
}