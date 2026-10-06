import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { RevealText } from '../components/motion/RevealText';
import { Counter } from '../components/motion/Counter';
import { ColorSection } from '../components/motion/ColorSection';
import { ArrowButton } from '../components/ui/ArrowButton';
import { Timeline } from '../components/impact/Timeline';

import { images } from '../data/images';
import { palette, site } from '../data/site';
import { EASE_OUT } from '../utils/motion';

export function Impact() {
  return (
    <PageShell
      title="Our Impact"
      footerFrom={palette.terracotta}
      footerFromText={palette.cream}
    >

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        aria-labelledby="impact-page-heading"
        className="bg-cream pb-24 pt-32 md:pb-36 md:pt-44"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-end gap-x-8 gap-y-12 px-5 md:px-10">

          <div className="col-span-12 lg:col-span-7">

            <RevealText
              as="h1"
              id="impact-page-heading"
              immediate
              delay={0.3}
              lines={['Our', 'Impact']}
              className="display text-[clamp(4rem,12vw,12rem)]"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay: 0.65
              }}
              className="mt-10 max-w-xl leading-relaxed text-ink/75"
            >
              Since {site.founded}, Pen-Drive Foundation has worked to
              create meaningful opportunities through education,
              empowerment, healthcare awareness, skill development and
              community-based initiatives.
            </motion.p>

          </div>

          <div className="col-span-12 border-t border-ink/15 pt-6 lg:col-span-4 lg:col-start-9">

            <p className="text-sm text-ink/60">
              Working for communities since
            </p>

            <p className="display mt-4 text-[clamp(5rem,12vw,11rem)] leading-[0.8] text-terracotta">
              <Counter to={site.founded} />
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          AREAS OF IMPACT
      ========================================================= */}
      <section
        aria-labelledby="impact-areas-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">

          <div className="grid grid-cols-12 gap-x-8 gap-y-12">

            <div className="col-span-12 lg:col-span-5">

              <RevealText
                id="impact-areas-heading"
                lines={['Where We', 'Create Change']}
                className="display text-[clamp(3.25rem,7vw,7rem)]"
              />

              <p className="mt-8 max-w-md leading-relaxed text-ink/65">
                Our work responds to practical needs while creating
                opportunities for learning, participation, confidence
                and long-term community development.
              </p>

            </div>


            <div className="col-span-12 lg:col-span-7">

              {[
                {
                  number: '01',
                  title: 'Education',
                  body:
                    'We support children through educational activities, learning support, literacy initiatives and phonics-based programmes designed to strengthen reading and learning skills.'
                },
                {
                  number: '02',
                  title: 'Women Empowerment',
                  body:
                    'Our skill-development initiatives help women build practical skills, confidence and pathways towards greater financial independence.'
                },
                {
                  number: '03',
                  title: 'Youth Development',
                  body:
                    'We encourage young people to participate in education, sports, debate, social activities and leadership-oriented programmes that build confidence and responsibility.'
                },
                {
                  number: '04',
                  title: 'Health & Awareness',
                  body:
                    'Through health awareness campaigns and community initiatives, we promote healthy habits, hygiene, wellbeing and informed choices.'
                },
                {
                  number: '05',
                  title: 'Community Support',
                  body:
                    'We provide welfare support to needy and socially vulnerable families while working to strengthen rural communities through awareness and development initiatives.'
                },
                {
                  number: '06',
                  title: 'Culture & Language',
                  body:
                    'We support the preservation and promotion of Idu Mishmi language and cultural heritage through educational and community programmes.'
                }
              ].map((area, i) => (
                <motion.article
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: '0px 0px -10% 0px'
                  }}
                  transition={{
                    duration: 0.7,
                    ease: EASE_OUT,
                    delay: i * 0.08
                  }}
                  className="grid gap-4 border-t border-ink/15 py-8 md:grid-cols-[80px_minmax(0,0.8fr)_minmax(0,1.3fr)] md:gap-8"
                >

                  <span className="text-sm text-ink/40">
                    {area.number}
                  </span>

                  <h3 className="font-serif text-3xl leading-tight">
                    {area.title}
                  </h3>

                  <p className="leading-relaxed text-ink/70">
                    {area.body}
                  </p>

                </motion.article>
              ))}

            </div>

          </div>


          {/* =====================================================
              IMAGE — WHERE WE CREATE CHANGE
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '0px 0px -10% 0px'
            }}
            transition={{
              duration: 0.9,
              ease: EASE_OUT
            }}
            className="mt-16 w-full overflow-hidden md:mt-24"
          >
            <img
              src={images.hero}
              alt="Pen-Drive Foundation working with children and communities"
              className="h-[320px] w-full object-cover md:h-[520px] lg:h-[680px]"
              loading="lazy"
            />
          </motion.div>

        </div>
      </section>


      {/* =========================================================
          YEAR-BY-YEAR TIMELINE
      ========================================================= */}
      <Timeline />


      {/* =========================================================
          WHAT OUR WORK CREATES
      ========================================================= */}
      <section
        aria-labelledby="change-heading"
        className="bg-cream"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">

          <div className="grid grid-cols-12 gap-x-8 gap-y-12">

            <div className="col-span-12 lg:col-span-5">

              <RevealText
                id="change-heading"
                lines={['What Our', 'Work Creates']}
                className="display text-[clamp(3.25rem,7vw,7rem)]"
              />

            </div>


            <div className="col-span-12 lg:col-span-7">

              <div className="grid gap-0 md:grid-cols-2">

                {[
                  {
                    title: 'Stronger Learning',
                    body:
                      'Educational activities and literacy programmes help children develop stronger foundations for reading, learning and continued education.'
                  },
                  {
                    title: 'Greater Confidence',
                    body:
                      'Debates, sports, creative activities and youth programmes create opportunities for children and young people to express themselves and participate.'
                  },
                  {
                    title: 'Practical Skills',
                    body:
                      'Skill-development initiatives, including handloom and crochet training, encourage practical learning, creativity and self-reliance.'
                  },
                  {
                    title: 'Healthier Communities',
                    body:
                      'Health and awareness campaigns encourage students and communities to understand healthy habits, hygiene and wellbeing.'
                  },
                  {
                    title: 'Cultural Preservation',
                    body:
                      'Idu Mishmi language and cultural programmes help preserve local heritage while encouraging younger generations to engage with their language and traditions.'
                  },
                  {
                    title: 'Community Participation',
                    body:
                      'By working with schools, educators, NGOs and communities, the Foundation creates spaces for collaboration and shared learning.'
                  }
                ].map((item, i) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: '0px 0px -10% 0px'
                    }}
                    transition={{
                      duration: 0.7,
                      ease: EASE_OUT,
                      delay: i * 0.08
                    }}
                    className="border-t border-ink/15 p-6 pl-0 md:p-8 md:pl-0 md:pr-10"
                  >

                    <span className="text-xs uppercase tracking-[0.18em] text-ink/40">
                      0{i + 1}
                    </span>

                    <h3 className="mt-4 font-serif text-3xl leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-ink/70">
                      {item.body}
                    </p>

                  </motion.article>
                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
              IMAGE — WHAT OUR WORK CREATES
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: '0px 0px -10% 0px'
            }}
            transition={{
              duration: 0.9,
              ease: EASE_OUT
            }}
            className="mt-16 w-full overflow-hidden md:mt-24"
          >
            <img
              src={images.impactWork}
              alt="Children and community members participating in Pen-Drive Foundation activities"
              className="h-[320px] w-full object-cover md:h-[520px] lg:h-[680px]"
              loading="lazy"
            />
          </motion.div>

        </div>
      </section>

      {/* =========================================================
          REPORT / CTA
      ========================================================= */}
      <ColorSection
        from={palette.cream}
        to={palette.terracotta}
        fromText={palette.ink}
        toText={palette.cream}
      >

        <section
          aria-labelledby="report-heading"
          className="mx-auto grid max-w-[1600px] grid-cols-12 items-end gap-8 px-5 py-24 md:px-10 md:py-40"
        >

          <div className="col-span-12 lg:col-span-7">

            <RevealText
              id="report-heading"
              lines={['Read the', 'Full Story']}
              className="display text-[clamp(3.25rem,8vw,8rem)]"
            />

          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">

            <p className="leading-relaxed opacity-85">
              Our activity reports document the Foundation&apos;s work
              across education, health awareness, skill development,
              community welfare and cultural programmes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <ArrowButton
                label="Request reports"
                href={`mailto:${site.email}?subject=Pen-Drive%20Foundation%20Annual%20Report%20Request`}
                tone="cream"
              />

              <ArrowButton
                label="Donate now"
                to="/donate"
                tone="cream"
                variant="outline"
                direction="right"
              />

            </div>

          </div>

        </section>

      </ColorSection>

    </PageShell>
  );
}