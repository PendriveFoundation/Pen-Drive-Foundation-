import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { navLinks } from '../../data/site';
import { hasPlayedIntro } from '../../utils/intro';
import { EASE_OUT, EASE_UI } from '../../utils/motion';

export function Nav() {
  const intro = useRef(!hasPlayedIntro()).current;
  const location = useLocation();
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* ---------------------------------------------
     Detect scroll position
  --------------------------------------------- */

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 45);
  });

  /* ---------------------------------------------
     Close mobile menu on route change
  --------------------------------------------- */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  /* ---------------------------------------------
     Active navigation item
  --------------------------------------------- */

  const isActive = (to: string) =>
    to === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(to);

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-[100] pointer-events-none">

        {/* ---------------------------------------------
            Premium glass background
        --------------------------------------------- */}

        <motion.div
          aria-hidden="true"
          className="
            absolute
            inset-x-0
            top-0
            h-28
            bg-cream/85
            backdrop-blur-xl
          "
          initial={false}
          animate={{
            opacity: scrolled ? 1 : 0,
            boxShadow: scrolled
              ? '0 1px 0 rgba(27,26,23,0.08), 0 18px 45px -30px rgba(27,26,23,0.35)'
              : '0 0 0 rgba(0,0,0,0)',
          }}
          transition={{
            duration: 0.4,
            ease: EASE_UI,
          }}
        />

        {/* ---------------------------------------------
            Header content
        --------------------------------------------- */}

        <div
          className={`
            pointer-events-auto
            relative
            mx-auto
            flex
            max-w-[1700px]
            items-center
            justify-between
            px-5
            md:px-8
            lg:px-12
            transition-all
            duration-500
           ${scrolled
              ? 'py-2.5 md:py-3'
              : 'py-4 md:py-5 lg:py-7'
            }
          `}
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <motion.div
            initial={
              intro
                ? {
                  opacity: 0,
                  y: -12,
                  scale: 0.97,
                }
                : false
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: EASE_OUT,
              delay: 0.1,
            }}
            className="
              relative
              z-10
              shrink-0
            "
          >
            <Link
              to="/"
              aria-label="PEN-DRIVE FOUNDATION Home"
              className="
                block
                rounded-xl
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-terracotta
                focus-visible:ring-offset-4
                focus-visible:ring-offset-cream
              "
            >
              <Logo />
            </Link>
          </motion.div>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <motion.div
            initial={
              intro
                ? {
                  opacity: 0,
                  y: -12,
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
              delay: 0.25,
            }}
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
          >

            {/* ---------------------------------------------
                Navigation pill
            --------------------------------------------- */}

            <nav aria-label="Primary navigation">
              <ul
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-ink/10
                  bg-white/60
                  p-1
                  shadow-[0_8px_30px_-20px_rgba(0,0,0,0.35)]
                  backdrop-blur-xl
                "
              >
                {navLinks.map((link) => {
                  const active = isActive(link.to);

                  return (
                    <li key={link.to}>

                      <Link
                        to={link.to}
                        aria-current={
                          active ? 'page' : undefined
                        }
                        className="
                          group
                          relative
                          flex
                          items-center
                          rounded-full
                          px-5
                          py-2.5
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          transition-all
                          duration-300
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-terracotta
                        "
                      >

                        {/* Active background */}

                        {active && (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="
                              absolute
                              inset-0
                              rounded-full
                              bg-ink
                              shadow-[0_5px_15px_-8px_rgba(0,0,0,0.5)]
                            "
                            transition={{
                              duration: 0.4,
                              ease: EASE_UI,
                            }}
                          />
                        )}

                        {/* Hover background */}

                        <span
                          aria-hidden="true"
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-ink/[0.045]
                            opacity-0
                            transition-opacity
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        {/* Navigation text */}

                        <span
                          className={`
                            relative
                            z-10
                            transition-colors
                            duration-300
                            ${active
                              ? 'text-cream'
                              : 'text-ink/65 group-hover:text-ink'
                            }
                          `}
                        >
                          {link.label}
                        </span>

                      </Link>

                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* =================================================
                DONATE BUTTON
            ================================================= */}

            <Link
              to="/donate"
              className="
                group
                relative
                flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-terracotta
                px-5
                py-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                shadow-[0_12px_30px_-14px_rgba(143,50,31,0.65)]
                transition-all
                duration-500
                hover:-translate-y-0.5
                hover:shadow-[0_18px_35px_-14px_rgba(143,50,31,0.75)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-terracotta
                focus-visible:ring-offset-2
                focus-visible:ring-offset-cream
              "
            >

              {/* Sliding hover layer */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-ink
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              {/* Text */}

              <span className="relative z-10">
                Donate
              </span>

              {/* Arrow */}

              <span
                className="
                  relative
                  z-10
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  text-sm
                  transition-transform
                  duration-500
                  group-hover:rotate-45
                "
              >
                ↗
              </span>

            </Link>

          </motion.div>

          {/* =================================================
              TABLET / MOBILE
          ================================================= */}

          <motion.div
            initial={
              intro
                ? {
                  opacity: 0,
                  y: -8,
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
              delay: 0.35,
            }}
            className="
              flex
              items-center
              gap-2
              lg:hidden
            "
          >

            {/* ---------------------------------------------
                Mobile Donate
            --------------------------------------------- */}

            <Link
              to="/donate"
              className="
                hidden
                rounded-full
                bg-terracotta
                px-4
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
                shadow-[0_8px_20px_-10px_rgba(143,50,31,0.65)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                sm:block
              "
            >
              Donate
            </Link>

            {/* ---------------------------------------------
                Mobile Menu Button
            --------------------------------------------- */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
              className="
                group
                flex
                h-11
                items-center
                gap-3
                rounded-full
                border
                border-ink/10
                bg-white/60
                px-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-ink
                shadow-[0_8px_25px_-20px_rgba(0,0,0,0.4)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-ink/20
                hover:bg-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-terracotta
              "
            >

              <span>
                Menu
              </span>

              {/* Animated hamburger */}

              <span
                aria-hidden="true"
                className="
                  flex
                  w-5
                  flex-col
                  items-end
                  gap-[5px]
                "
              >

                <span
                  className="
                    h-px
                    w-5
                    bg-current
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />

                <span
                  className="
                    h-px
                    w-3
                    bg-current
                    transition-transform
                    duration-300
                    group-hover:translate-x-0
                  "
                />

              </span>

            </button>

          </motion.div>

        </div>

        {/* =================================================
            BOTTOM BORDER
        ================================================= */}

        <motion.div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-px
            bg-ink/10
          "
          initial={false}
          animate={{
            opacity: scrolled ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        />

      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <MobileMenu
        open={open}
        onClose={close}
      />
    </>
  );
}