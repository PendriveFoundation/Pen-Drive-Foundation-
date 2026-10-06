import React, { FormEvent, useState } from 'react';
import { PageShell } from '../components/layout/PageShell';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Mail,
  Send,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { palette, site } from '../data/site';

const IMAGES = {
  hero: 'hero.jpg',
  activity: 'Fotter.png',
};

const inputClass = `
  mt-2 h-14 w-full rounded-xl
  border border-forest/15
  bg-cream/50 px-4
  text-sm text-ink outline-none
  transition-all duration-300
  placeholder:text-ink/30
  focus:border-forest/45
  focus:bg-white
  focus:ring-4 focus:ring-forest/5
`;

const textareaClass = `
  mt-2 w-full min-h-[150px]
  resize-y rounded-xl
  border border-forest/15
  bg-cream/50 px-4 py-4
  text-sm text-ink outline-none
  transition-all duration-300
  placeholder:text-ink/30
  focus:border-forest/45
  focus:bg-white
  focus:ring-4 focus:ring-forest/5
`;

const ease = [0.22, 1, 0.36, 1] as const;

export function Volunteer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const phone = String(data.get('phone') || '');
    const city = String(data.get('city') || '');
    const age = String(data.get('age') || '');
    const interest = String(data.get('interest') || '');
    const availability = String(data.get('availability') || '');
    const skills = String(data.get('skills') || '');
    const message = String(data.get('message') || '');

    const subject = encodeURIComponent(
      `Volunteer Application — ${name}`
    );

    const body = encodeURIComponent(
      `VOLUNTEER APPLICATION\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `City: ${city}\n` +
      `Age: ${age}\n` +
      `Area of Interest: ${interest}\n` +
      `Availability: ${availability}\n` +
      `Skills: ${skills}\n\n` +
      `Why I want to volunteer:\n${message}`
    );

    setSubmitted(true);

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell
      title="Volunteer With Us"
      footerFrom={palette.cream}
      footerFromText={palette.ink}
    >
      <main className="overflow-hidden bg-cream text-ink">

        {/* =====================================================
            HERO
            ===================================================== */}
        <section className="relative overflow-hidden bg-cream">

          <div className="
            mx-auto max-w-[1600px]
            px-5 py-14
            md:px-10 md:py-20
            lg:px-16 lg:py-24
          ">

            <div className="
              grid min-h-[calc(100vh-78px)]
              grid-cols-12 items-center
              gap-8 lg:gap-14
            ">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -45 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease }}
                className="
                  col-span-12
                  flex flex-col justify-center
                  lg:col-span-6
                "
              >

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="
                    flex items-center gap-3
                    text-[10px] font-medium
                    uppercase tracking-[0.2em]
                    opacity-50
                  "
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 36 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease,
                    }}
                    className="block h-px bg-current"
                  />
                  Volunteer With Us
                </motion.div>

                <h1 className="
                  mt-7 max-w-[760px]
                  font-serif
                  text-[clamp(3.6rem,6.5vw,7.5rem)]
                  leading-[0.86]
                  tracking-[-0.055em]
                ">
                  <motion.span
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15,
                      ease,
                    }}
                    className="block"
                  >
                    Give your time.
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.28,
                      ease,
                    }}
                    className="block italic text-forest"
                  >
                    Create impact.
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.65, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease,
                  }}
                  className="
                    mt-8 max-w-[570px]
                    text-base leading-[1.8]
                    md:text-lg
                  "
                >
                  Real change begins with people who are willing
                  to show up, listen, learn and contribute. Join
                  PEN-DRIVE FOUNDATION and become part of work
                  that supports children, women, youth and
                  communities.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.62,
                    ease,
                  }}
                  className="mt-9 flex flex-wrap gap-3"
                >

                  {/* CTA — no colour change on hover */}
                  <motion.a
                    href="#volunteer-form"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      duration: 0.25,
                      ease,
                    }}
                    className="
                      group inline-flex
                      items-center gap-3
                      rounded-full
                      bg-[#17251E]
                      px-6 py-3.5
                      text-sm font-medium
                      text-[#F1EFE5]
                      shadow-[0_10px_30px_rgba(23,37,30,0.12)]
                    "
                  >
                    <span>Become a Volunteer</span>

                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </motion.a>

                  <motion.a
                    href="#why-volunteer"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      inline-flex
                      items-center gap-2
                      rounded-full
                      border border-ink/15
                      px-6 py-3.5
                      text-sm font-medium
                    "
                  >
                    Why volunteer?
                  </motion.a>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.85,
                  }}
                  className="
                    mt-12 flex flex-wrap
                    gap-x-7 gap-y-3
                    border-t border-ink/10
                    pt-5 text-[10px]
                    uppercase tracking-[0.15em]
                  "
                >
                  <span>PEN-DRIVE FOUNDATION</span>
                  <span>EST. {site.founded}</span>
                  <span>ARUNACHAL PRADESH</span>
                </motion.div>

              </motion.div>


              {/* RIGHT IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 55,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.05,
                  delay: 0.12,
                  ease,
                }}
                className="
                  relative col-span-12
                  lg:col-span-6
                "
              >

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                  className="
                    relative overflow-hidden
                    bg-forest/10
                  "
                >

                  <motion.img
                    src={IMAGES.hero}
                    alt="PEN-DRIVE FOUNDATION community and volunteers"
                    className="
                      aspect-[4/3]
                      w-full object-cover
                    "
                    initial={{ scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 1.6,
                      delay: 0.2,
                      ease,
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: 0.08 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.6,
                    }}
                    className="absolute inset-0"
                    style={{
                      backgroundColor: palette.forestDeep,
                      mixBlendMode: 'multiply',
                    }}
                  />

                  <div
                    className="
                      absolute inset-x-0
                      bottom-0 h-1/2
                    "
                    style={{
                      background:
                        'linear-gradient(to top, rgba(17,21,18,0.62), transparent)',
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.9,
                    }}
                    className="absolute bottom-5 left-5"
                  >
                    <p className="
                      text-[9px] uppercase
                      tracking-[0.18em] text-white/90
                    ">
                      People · Purpose · Community
                    </p>
                  </motion.div>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.05,
                  }}
                  className="
                    absolute -bottom-5
                    -left-3 hidden
                    rounded-xl
                    border border-forest/10
                    bg-cream px-5 py-4
                    shadow-[0_15px_40px_rgba(23,37,30,0.12)]
                    md:block lg:-left-6
                  "
                >
                  <p className="
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    opacity-45
                  ">
                    Make a difference
                  </p>

                  <p className="
                    mt-1 font-serif
                    text-xl leading-none
                  ">
                    One step at a time.
                  </p>
                </motion.div>

              </motion.div>

            </div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                mt-5 flex
                justify-center
                text-ink/35
                lg:justify-start
              "
            >
              <ArrowDown className="h-4 w-4" />
            </motion.div>

          </div>
        </section>


        {/* =====================================================
            WHY VOLUNTEER
            ===================================================== */}
        <section
          id="why-volunteer"
          className="pb-24 md:pb-32"
        >

          <div className="
            mx-auto max-w-[1600px]
            px-5 md:px-10 lg:px-16
          ">

            <div className="
              grid grid-cols-12
              gap-5 lg:gap-8
            ">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-10% 0px',
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
                className="
                  relative col-span-12
                  overflow-hidden lg:col-span-7
                "
              >

                <motion.img
                  src={IMAGES.activity}
                  alt="Community activity by PEN-DRIVE FOUNDATION"
                  className="
                    aspect-[3/2]
                    h-full w-full
                    object-cover
                  "
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.4,
                    ease,
                  }}
                />

                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                  "
                  style={{
                    background:
                      'linear-gradient(to top, rgba(23,37,30,0.3), transparent)',
                  }}
                />

              </motion.div>


              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-10% 0px',
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease,
                }}
                className="
                  col-span-12
                  flex flex-col
                  justify-end
                  lg:col-span-5
                "
              >

                <div className="max-w-md pb-2 lg:pl-8">

                  <span className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-forest
                  ">
                    Why Volunteer?
                  </span>

                  <h2 className="
                    mt-4 font-serif
                    text-[clamp(2.8rem,5vw,5rem)]
                    leading-[0.9]
                    tracking-[-0.04em]
                  ">
                    Your time can
                    <br />
                    <span className="italic text-forest">
                      become an opportunity.
                    </span>
                  </h2>

                  <p className="
                    mt-6 text-sm
                    leading-[1.8] opacity-65
                  ">
                    Volunteers bring new ideas, energy and skills
                    to community work. Whether you can help with
                    education, awareness, events, documentation,
                    outreach or creative work, your contribution
                    can make a meaningful difference.
                  </p>

                  <div className="
                    mt-8 grid
                    grid-cols-2 gap-3
                  ">

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="
                        rounded-xl
                        border border-forest/15
                        bg-white/40 p-5
                      "
                    >
                      <Heart className="h-5 w-5 text-forest" />

                      <p className="mt-4 text-sm font-medium">
                        Give Back
                      </p>

                      <p className="
                        mt-1 text-xs
                        leading-relaxed opacity-50
                      ">
                        Use your time for something meaningful.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="
                        rounded-xl
                        border border-forest/15
                        bg-white/40 p-5
                      "
                    >
                      <Users className="h-5 w-5 text-forest" />

                      <p className="mt-4 text-sm font-medium">
                        Work Together
                      </p>

                      <p className="
                        mt-1 text-xs
                        leading-relaxed opacity-50
                      ">
                        Learn and grow with the community.
                      </p>
                    </motion.div>

                  </div>

                </div>
              </motion.div>

            </div>

          </div>
        </section>


        {/* =====================================================
            DARK STATEMENT — CINEMATIC
            ===================================================== */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: palette.forestDeep,
            color: palette.cream,
          }}
        >

          {/* Ambient glow */}
          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -right-48 -top-48
              h-[600px] w-[600px]
              rounded-full blur-3xl
            "
            style={{
              backgroundColor: palette.cream,
              opacity: 0.045,
            }}
            animate={{
              x: [0, 25, 0],
              y: [0, 20, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute -bottom-56 -left-48
              h-[520px] w-[520px]
              rounded-full blur-3xl
            "
            style={{
              backgroundColor: palette.cream,
              opacity: 0.025,
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, -25, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="
            relative mx-auto max-w-[1600px]
            px-5 py-20
            md:px-10 md:py-28
            lg:px-16 lg:py-32
          ">

            <div className="
              grid grid-cols-12
              items-center
              gap-10 lg:gap-16
            ">

              {/* LEFT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -45,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: '-15% 0px',
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
                className="
                  col-span-12
                  lg:col-span-5
                "
              >

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    flex items-center gap-3
                    text-[10px]
                    font-medium uppercase
                    tracking-[0.2em]
                  "
                  style={{
                    color: palette.cream,
                    opacity: 0.6,
                  }}
                >
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: 36 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease,
                    }}
                    className="block h-px"
                    style={{
                      backgroundColor: palette.cream,
                    }}
                  />

                  Find Your Place
                </motion.div>

                <h2
                  className="
                    mt-5 max-w-[650px]
                    font-serif
                    text-[clamp(3rem,6vw,6rem)]
                    leading-[0.88]
                    tracking-[-0.045em]
                  "
                  style={{
                    color: palette.cream,
                  }}
                >
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease,
                    }}
                    className="block"
                  >
                    Bring what
                  </motion.span>

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.85,
                      delay: 0.22,
                      ease,
                    }}
                    className="block italic"
                  >
                    you&apos;re good at.
                  </motion.span>
                </h2>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 0.7,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease,
                  }}
                  className="
                    mt-7 max-w-lg
                    text-sm leading-[1.85]
                    md:text-base
                  "
                  style={{
                    color: palette.cream,
                  }}
                >
                  We welcome people with different backgrounds,
                  skills and experiences. Tell us what interests
                  you and where you would like to contribute.
                </motion.p>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.55,
                  }}
                  className="
                    mt-9 flex items-center gap-3
                    text-[10px] uppercase
                    tracking-[0.17em]
                  "
                  style={{
                    color: palette.cream,
                  }}
                >

                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.6,
                      ease,
                    }}
                    className="block h-px"
                    style={{
                      backgroundColor: palette.cream,
                      opacity: 0.45,
                    }}
                  />

                  <span className="opacity-65">
                    Every contribution matters
                  </span>

                </motion.div>

              </motion.div>


              {/* RIGHT IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 55,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: '-12% 0px',
                }}
                transition={{
                  duration: 1.05,
                  delay: 0.12,
                  ease,
                }}
                className="
                  col-span-12
                  lg:col-span-7
                "
              >

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                  className="relative overflow-hidden"
                >

                  <motion.img
                    src={IMAGES.activity}
                    alt="Community activity by PEN-DRIVE FOUNDATION"
                    className="
                      aspect-[3/2]
                      w-full object-cover
                    "
                    initial={{ scale: 1.15 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.6,
                      ease,
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: 0.06 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="absolute inset-0"
                    style={{
                      backgroundColor: palette.forestDeep,
                      mixBlendMode: 'multiply',
                    }}
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute inset-x-0
                      bottom-0 h-1/2
                    "
                    style={{
                      background:
                        'linear-gradient(to top, rgba(17,21,18,0.65), transparent)',
                    }}
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.75,
                    }}
                    className="
                      absolute bottom-0
                      left-0 px-5 pb-5
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                      "
                      style={{
                        color: palette.cream,
                      }}
                    >
                      People · Purpose · Community
                    </p>
                  </motion.div>

                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 0.45,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.85,
                  }}
                  className="
                    mt-3 flex justify-end
                    text-[9px] uppercase
                    tracking-[0.16em]
                  "
                  style={{
                    color: palette.cream,
                  }}
                >
                  02 / 02
                </motion.div>

              </motion.div>

            </div>
          </div>
        </section>


        {/* =====================================================
            VOLUNTEER FORM
            ===================================================== */}
        <section
          id="volunteer-form"
          className="bg-cream py-24 md:py-32"
        >

          <div className="
            mx-auto max-w-[1600px]
            px-5 md:px-10 lg:px-16
          ">

            <div className="
              grid grid-cols-12
              gap-8 lg:gap-12
            ">

              {/* LEFT FORM INTRO */}
              <div className="col-span-12 lg:col-span-4">

                <div className="sticky top-24 max-w-md">

                  <div className="
                    flex items-center gap-3
                    text-[10px]
                    font-medium uppercase
                    tracking-[0.18em]
                    text-forest
                  ">
                    <span className="h-px w-8 bg-current" />
                    Volunteer Application
                  </div>

                  <h2 className="
                    mt-5 font-serif
                    text-[clamp(3rem,5vw,5.5rem)]
                    leading-[0.88]
                    tracking-[-0.045em]
                  ">
                    Ready to
                    <br />
                    <span className="italic text-forest">
                      get involved?
                    </span>
                  </h2>

                  <p className="
                    mt-6 text-sm
                    leading-[1.8] opacity-60
                  ">
                    Tell us a little about yourself and the kind
                    of work you would like to be part of. Our team
                    can understand how your interests and skills
                    may fit into our work.
                  </p>

                  <div className="mt-8 space-y-4">

                    {[
                      'Flexible opportunities',
                      'Community-focused work',
                      'Meaningful experiences',
                    ].map((item) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                        }}
                        className="
                          flex items-start gap-3 text-sm
                        "
                      >
                        <Check className="
                          mt-0.5 h-4 w-4
                          shrink-0 text-forest
                        " />

                        <span className="opacity-65">
                          {item}
                        </span>
                      </motion.div>
                    ))}

                  </div>

                  <div className="
                    mt-10 border-t
                    border-ink/10 pt-5
                    text-xs opacity-50
                  ">
                    We will review your application and contact
                    you with the next steps.
                  </div>

                </div>
              </div>


              {/* FORM */}
              <div className="col-span-12 lg:col-span-8">

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: '-10% 0px',
                  }}
                  transition={{
                    duration: 0.8,
                    ease,
                  }}
                  className="
                    relative overflow-hidden
                    rounded-2xl
                    border border-forest/15
                    bg-white/55
                    p-6
                    shadow-[0_20px_60px_rgba(23,37,30,0.06)]
                    md:p-9 lg:p-10
                  "
                >

                  <div className="
                    absolute inset-x-0 top-0
                    h-[3px] bg-forest
                  " />

                  <form onSubmit={handleSubmit}>

                    {/* 01 */}
                    <div>

                      <p className="
                        text-[10px]
                        font-medium uppercase
                        tracking-[0.18em]
                        text-forest
                      ">
                        01 · About You
                      </p>

                      <h3 className="
                        mt-2 font-serif
                        text-3xl
                        tracking-[-0.025em]
                      ">
                        Let&apos;s get to know you.
                      </h3>

                    </div>

                    <div className="
                      mt-7 grid gap-6
                      md:grid-cols-2
                    ">

                      <label>
                        <span className="text-sm font-medium">
                          Full Name *
                        </span>

                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="text-sm font-medium">
                          Email Address *
                        </span>

                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="text-sm font-medium">
                          Mobile Number *
                        </span>

                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="Your mobile number"
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="text-sm font-medium">
                          City / Location *
                        </span>

                        <input
                          required
                          name="city"
                          type="text"
                          placeholder="Where are you based?"
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="text-sm font-medium">
                          Age
                        </span>

                        <input
                          name="age"
                          type="number"
                          min="13"
                          placeholder="Your age"
                          className={inputClass}
                        />
                      </label>

                    </div>


                    <div className="
                      my-10 h-px bg-ink/10
                    " />


                    {/* 02 */}
                    <div>

                      <p className="
                        text-[10px]
                        font-medium uppercase
                        tracking-[0.18em]
                        text-forest
                      ">
                        02 · Your Interests
                      </p>

                      <h3 className="
                        mt-2 font-serif
                        text-3xl
                        tracking-[-0.025em]
                      ">
                        Where would you like to help?
                      </h3>

                    </div>

                    <div className="
                      mt-7 grid gap-6
                      md:grid-cols-2
                    ">

                      <label>
                        <span className="text-sm font-medium">
                          Area of Interest *
                        </span>

                        <select
                          required
                          name="interest"
                          defaultValue=""
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select an area
                          </option>
                          <option>Education & Literacy</option>
                          <option>Women Empowerment</option>
                          <option>Health Awareness</option>
                          <option>
                            Youth & Community Activities
                          </option>
                          <option>Culture & Heritage</option>
                          <option>
                            Events & Field Activities
                          </option>
                          <option>Digital & Social Media</option>
                          <option>
                            Photography & Documentation
                          </option>
                          <option>
                            Fundraising & Outreach
                          </option>
                          <option>Other</option>
                        </select>
                      </label>

                      <label>
                        <span className="text-sm font-medium">
                          Availability *
                        </span>

                        <select
                          required
                          name="availability"
                          defaultValue=""
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select availability
                          </option>
                          <option>Weekdays</option>
                          <option>Weekends</option>
                          <option>Evenings</option>
                          <option>Occasionally</option>
                          <option>Project Based</option>
                        </select>
                      </label>

                    </div>

                    <label className="mt-6 block">

                      <span className="text-sm font-medium">
                        Skills / Experience
                      </span>

                      <textarea
                        name="skills"
                        rows={4}
                        placeholder="Tell us about your skills, experience or anything you would like to contribute..."
                        className={textareaClass}
                      />

                    </label>


                    <div className="
                      my-10 h-px bg-ink/10
                    " />


                    {/* 03 */}
                    <div>

                      <p className="
                        text-[10px]
                        font-medium uppercase
                        tracking-[0.18em]
                        text-forest
                      ">
                        03 · Your Story
                      </p>

                      <h3 className="
                        mt-2 font-serif
                        text-3xl
                        tracking-[-0.025em]
                      ">
                        What brings you here?
                      </h3>

                    </div>

                    <label className="mt-7 block">

                      <span className="text-sm font-medium">
                        Why would you like to volunteer with us? *
                      </span>

                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell us what motivates you and what you hope to contribute..."
                        className={textareaClass}
                      />

                    </label>


                    {/* CONSENT */}
                    <label className="
                      mt-6 flex cursor-pointer
                      items-start gap-3
                    ">

                      <input
                        required
                        type="checkbox"
                        className="
                          mt-1 h-4 w-4
                          accent-[#17251E]
                        "
                      />

                      <span className="
                        text-xs
                        leading-relaxed
                        opacity-55
                      ">
                        I confirm that the information provided by
                        me is accurate and I agree to be contacted
                        by PEN-DRIVE FOUNDATION regarding volunteer
                        opportunities.
                      </span>

                    </label>


                    {/* SUBMIT */}
                    <div className="
                      mt-8 flex flex-col
                      gap-5 border-t
                      border-ink/10 pt-7
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    ">

                      <div className="
                        flex items-center gap-2
                        text-xs opacity-45
                      ">
                        <Mail className="h-4 w-4" />
                        {site.email}
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="
                          group inline-flex
                          items-center justify-center
                          gap-3 rounded-full
                          bg-[#17251E]
                          px-7 py-4
                          text-sm font-medium
                          text-[#F1EFE5]
                        "
                      >
                        {submitted
                          ? 'Application Ready'
                          : 'Submit Application'}

                        <motion.span
                          animate={{
                            x: [0, 3, 0],
                          }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <Send className="h-4 w-4" />
                        </motion.span>
                      </motion.button>

                    </div>

                  </form>

                </motion.div>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            FINAL CTA
            ===================================================== */}
        <section className="bg-cream pb-24 md:pb-32">

          <div className="
            mx-auto max-w-[1600px]
            px-5 md:px-10 lg:px-16
          ">

            <div className="
              flex flex-col items-start
              justify-between gap-8
              border-t border-ink/10
              pt-8
              md:flex-row md:items-end
            ">

              <div>

                <p className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  opacity-45
                ">
                  Questions?
                </p>

                <h2 className="
                  mt-3 font-serif
                  text-4xl
                  tracking-[-0.03em]
                  md:text-5xl
                ">
                  We&apos;d love to hear from you.
                </h2>

              </div>

              <motion.a
                href={`mailto:${site.email}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group inline-flex
                  items-center gap-3
                  rounded-full
                  border border-forest/25
                  px-6 py-3.5
                  text-sm font-medium
                "
              >
                Get in touch

                <ArrowUpRight className="
                  h-4 w-4
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                " />
              </motion.a>

            </div>

          </div>
        </section>

      </main>
    </PageShell>
  );
}