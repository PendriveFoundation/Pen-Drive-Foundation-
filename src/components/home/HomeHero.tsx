import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { RevealText } from '../motion/RevealText';
import { MaskImage } from '../motion/MaskImage';
import { ArrowButton } from '../ui/ArrowButton';

import { images } from '../../data/images';
import { site } from '../../data/site';

import { useMotionPrefs } from '../../hooks/useMotionPrefs';
import { hasPlayedIntro } from '../../utils/intro';
import { EASE_OUT } from '../../utils/motion';

export function HomeHero() {
  const intro = useRef(!hasPlayedIntro()).current;
  const { amp } = useMotionPrefs();

  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* =========================================================
     CINEMATIC SCROLL MOTION
  ========================================================= */

  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45 * amp]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 65 * amp]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.035]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 18 * amp]
  );

  const t0 = intro ? 0.4 : 0.15;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="
        relative
        min-h-0
        overflow-x-clip
        bg-cream
        pt-[7.25rem]
        pb-6
        md:pt-[8rem]
        md:pb-7
        lg:pt-[8.25rem]
      "
    >

      {/* =========================================================
          MAIN HERO GRID
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1700px]
          grid-cols-12
          items-start
          gap-x-6
          px-5
          md:px-10
          lg:gap-x-10
          lg:px-12
          xl:px-16
        "
      >

        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <motion.div
          style={{ y: headlineY }}
          className="
            relative
            z-20
            col-span-12
            lg:col-span-7
            xl:col-span-7
          "
        >

          {/* -----------------------------------------------------
              EYEBROW
          ----------------------------------------------------- */}

          <motion.div
            initial={
              intro
                ? {
                  opacity: 0,
                  y: 12,
                }
                : false
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: EASE_OUT,
              delay: t0,
            }}
            className="
              mb-6
              flex
              items-center
              gap-3
              pl-1
              md:mb-7
            "
          >
            <span
              aria-hidden="true"
              className="
                h-px
                w-8
                shrink-0
                bg-terracotta
                md:w-10
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-ink/55
                md:text-[11px]
              "
            >
              PEN-DRIVE FOUNDATION
            </span>

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-ink/35
                sm:inline
              "
            >
              EST. {site.founded}
            </span>
          </motion.div>


          {/* -----------------------------------------------------
              MAIN HEADLINE
          ----------------------------------------------------- */}

          <div className="pl-1">
            <RevealText
              id="hero-heading"
              as="h1"
              immediate
              delay={t0 + 0.05}
              stagger={0.12}
              duration={1}
              lines={[
                'Empowering Lives,',
                'Shaping Tomorrow.',
              ]}
              className="
      display
      max-w-[1000px]
      pr-2
      text-[clamp(3rem,7.5vw,7.2rem)]
      leading-[0.84]
      tracking-[-0.055em]
      md:text-[clamp(4rem,7.2vw,7.8rem)]
    "
            />
          </div>



          {/* -----------------------------------------------------
              INTRO CONTENT
          ----------------------------------------------------- */}

          <motion.div
            style={{ y: contentY }}
            initial={
              intro
                ? {
                  opacity: 0,
                  y: 22,
                }
                : false
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: EASE_OUT,
              delay: t0 + 0.65,
            }}
            className="
              mt-8
              max-w-[780px]
              md:mt-10
              lg:mt-11
            "
          >

            <p
              className="
                max-w-[700px]
                text-[15px]
                leading-[1.7]
                text-ink/70
                md:text-[16px]
                lg:text-[17px]
              "
            >
              Pen-Drive Foundation is dedicated to transforming
              communities across Arunachal Pradesh through
              quality education, women empowerment and
              sustainable social development.
            </p>

            <p
              className="
                mt-3
                max-w-[680px]
                text-[12.5px]
                leading-[1.65]
                text-ink/50
                md:text-[13px]
              "
            >
              Since 2013, we have worked at the grassroots level
              to support children, women, youth and rural communities
              through learning initiatives, skill development,
              health awareness and community-focused programmes.
            </p>

          </motion.div>

        </motion.div>


        {/* =======================================================
            RIGHT CONTENT
            IMAGE + FOCUS CARDS + CTA
        ======================================================= */}

        <motion.div
          style={{ y: imageY }}
          className="
            relative
            z-10
            col-span-12
            mt-12
            lg:col-span-5
            lg:mt-7
            xl:col-span-5
          "
        >

          {/* =====================================================
              LANDSCAPE HERO IMAGE
              ORIGINAL IMAGE RATIO: 1609 × 856
          ===================================================== */}

          <motion.div
            style={{
              scale: imageScale,
            }}
            className="
              relative
              origin-center
            "
          >

            <MaskImage
              immediate
              shape="full"
              delay={t0 + 0.12}
              duration={1.25}
              fromScale={1.06}
              src={images.hero}
              alt="PEN-DRIVE FOUNDATION community initiative"
              className="
                aspect-[1609/856]
                w-full
                overflow-hidden
              "
            />

            {/* Floating image number */}
            <motion.div
              initial={
                intro
                  ? {
                    opacity: 0,
                    scale: 0.8,
                  }
                  : false
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                ease: EASE_OUT,
                delay: t0 + 1,
              }}
              className="
                absolute
                -bottom-4
                -left-3
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-terracotta
                text-[10px]
                font-semibold
                tracking-[0.08em]
                text-white
                shadow-[0_12px_30px_-15px_rgba(143,50,31,0.8)]
                md:-left-4
              "
            >
              01
            </motion.div>

          </motion.div>


          {/* =====================================================
              IMAGE CAPTION
          ===================================================== */}

          <motion.div
            style={{ y: contentY }}
            initial={
              intro
                ? {
                  opacity: 0,
                  y: 8,
                }
                : false
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: EASE_OUT,
              delay: t0 + 1.05,
            }}
            className="
              mt-4
              flex
              items-start
              justify-between
              gap-4
              border-t
              border-ink/10
              pt-2.5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-ink/50
              md:text-[9px]
            "
          >
            <span>
              Real work. Real communities.
            </span>

            <span className="shrink-0">
              Arunachal Pradesh
            </span>
          </motion.div>


          {/* =====================================================
              FOCUS AREAS
          ===================================================== */}

          <motion.div
            initial={
              intro
                ? {
                  opacity: 0,
                  y: 18,
                }
                : false
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: EASE_OUT,
              delay: t0 + 1.15,
            }}
            className="mt-7"
          >

            <div
              className="
                grid
                grid-cols-1
                border-y
                border-ink/10
                sm:grid-cols-3
              "
            >

              {/* =================================================
                  01 — EDUCATION
              ================================================= */}

              <div
                className="
                  border-b
                  border-ink/10
                  py-4
                  sm:border-b-0
                  sm:border-r
                  sm:pr-4
                "
              >
                <span
                  className="
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-terracotta
                  "
                >
                  01
                </span>

                <h2
                  className="
                    mt-1.5
                    text-[12px]
                    font-semibold
                    leading-tight
                    text-ink
                    md:text-[13px]
                  "
                >
                  Quality Education
                </h2>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    leading-[1.5]
                    text-ink/50
                    md:text-[10px]
                  "
                >
                  Learning support & literacy initiatives.
                </p>
              </div>


              {/* =================================================
                  02 — WOMEN EMPOWERMENT
              ================================================= */}

              <div
                className="
                  border-b
                  border-ink/10
                  py-4
                  sm:border-b-0
                  sm:border-r
                  sm:px-4
                "
              >
                <span
                  className="
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-terracotta
                  "
                >
                  02
                </span>

                <h2
                  className="
                    mt-1.5
                    text-[12px]
                    font-semibold
                    leading-tight
                    text-ink
                    md:text-[13px]
                  "
                >
                  Women Empowerment
                </h2>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    leading-[1.5]
                    text-ink/50
                    md:text-[10px]
                  "
                >
                  Skills, training & financial independence.
                </p>
              </div>


              {/* =================================================
                  03 — COMMUNITY
              ================================================= */}

              <div
                className="
                  py-4
                  sm:pl-4
                "
              >
                <span
                  className="
                    block
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-terracotta
                  "
                >
                  03
                </span>

                <h2
                  className="
                    mt-1.5
                    text-[12px]
                    font-semibold
                    leading-tight
                    text-ink
                    md:text-[13px]
                  "
                >
                  Stronger Communities
                </h2>

                <p
                  className="
                    mt-1.5
                    text-[9px]
                    leading-[1.5]
                    text-ink/50
                    md:text-[10px]
                  "
                >
                  Health, youth & rural development.
                </p>
              </div>

            </div>


            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <ArrowButton
                label="Support Our Mission"
                to="/donate"
              />

              <ArrowButton
                label="Explore Our Work"
                to="/programs"
                variant="outline"
                direction="right"
              />
            </div>

          </motion.div>

        </motion.div>

      </div>


      {/* =========================================================
          BOTTOM FOCUS LINE
      ========================================================= */}

      <motion.div
        initial={
          intro
            ? {
              opacity: 0,
            }
            : false
        }
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          delay: t0 + 1.35,
        }}
        className="
          mx-auto
          mt-8
          max-w-[1700px]
          px-5
          pb-1
          md:mt-9
          md:px-10
          lg:px-12
          xl:px-16
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-ink/10
            pt-4
          "
        >

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-1.5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-ink/40
              md:text-[9px]
            "
          >
            <span>Education</span>

            <span className="text-terracotta">
              ·
            </span>

            <span>Women Empowerment</span>

            <span className="text-terracotta">
              ·
            </span>

            <span>Health Awareness</span>

            <span className="text-terracotta">
              ·
            </span>

            <span>Community Development</span>
          </div>


          {/* Scroll indicator */}
          <div
            className="
              hidden
              items-center
              gap-3
              text-[8px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-ink/35
              md:flex
            "
          >
            <span>
              Scroll
            </span>

            <span
              aria-hidden="true"
              className="
                relative
                block
                h-7
                w-px
                overflow-hidden
                bg-ink/15
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  animate-scroll-cue
                  bg-ink
                "
              />
            </span>
          </div>

        </div>
      </motion.div>


      {/* =========================================================
          BOTTOM HAIRLINE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[calc(100%-2.5rem)]
          -translate-x-1/2
          bg-ink/10
          md:w-[calc(100%-5rem)]
        "
      />

    </section>
  );
}