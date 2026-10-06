import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { RevealText } from '../components/motion/RevealText';
import { MaskImage } from '../components/motion/MaskImage';
import { ColorSection } from '../components/motion/ColorSection';
import { TogetherMask } from '../components/about/TogetherMask';
import { TeamCard } from '../components/about/TeamCard';
import { images } from '../data/images';
import { palette, site } from '../data/site';
import { team, values } from '../data/team';
import { EASE_OUT } from '../utils/motion';

export function About() {
  return (
    <PageShell title="About">

      {/* =========================================================
          HERO / WHO WE ARE
      ========================================================= */}
      <section
        aria-labelledby="about-heading"
        className="bg-cream pt-32 md:pt-44"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-end gap-x-8 gap-y-8 px-5 md:px-10">

          <div className="col-span-12 lg:col-span-7">
            <RevealText
              as="h1"
              id="about-heading"
              immediate
              delay={0.3}
              lines={['Who', 'We Are']}
              className="display text-[clamp(4rem,12vw,12rem)]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: EASE_OUT,
              delay: 0.65
            }}
            className="col-span-12 max-w-xl leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-9 lg:pb-4"
          >
            Established in {site.founded}, {site.name} is a non-profit
            organisation dedicated to creating positive change in the lives
            of vulnerable and underserved communities through education,
            empowerment and community development.
          </motion.p>

        </div>

        <div className="mx-auto mt-14 max-w-[1600px] px-5 md:px-10">
          <MaskImage
            immediate
            delay={0.45}
            shape="asymmetric"
            parallax
            src={images.footer}
            alt="Children participating in an educational programme"
            className="aspect-[4/3] md:aspect-[21/9]"
          />
        </div>
      </section>


      {/* =========================================================
          ABOUT DESCRIPTION
      ========================================================= */}
      <section
        aria-labelledby="about-story-heading"
        className="bg-cream"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-8 gap-y-12 px-5 py-24 md:px-10 md:py-32">

          <div className="col-span-12 lg:col-span-5">
            <RevealText
              id="about-story-heading"
              lines={['Our', 'Work']}
              className="display text-[clamp(3.25rem,7vw,7rem)]"
            />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="max-w-3xl space-y-6 font-serif text-[clamp(1.5rem,2.6vw,2.5rem)] leading-[1.15]">
              <p>
                Pen-Drive Foundation works to create opportunities where they
                are most needed, with a strong focus on child education,
                women&apos;s empowerment, livelihood development and
                community upliftment.
              </p>

              <p className="italic">
                We believe that knowledge, opportunity and empowerment are
                the foundations of a stronger and more secure future.
              </p>
            </div>

            <p className="mt-8 max-w-2xl leading-relaxed text-ink/70">
              Through educational initiatives, skill-development programmes,
              welfare support, health awareness, youth participation and
              rural community initiatives, the Foundation works alongside
              people to strengthen their ability to build a better and more
              sustainable future.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================
          MISSION & VISION
      ========================================================= */}
      <section
        aria-labelledby="mission-vision-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">

          <div className="grid grid-cols-12 gap-x-8 gap-y-16">

            <div className="col-span-12 lg:col-span-5">
              <RevealText
                id="mission-vision-heading"
                lines={['Our', 'Purpose']}
                className="display text-[clamp(3.25rem,7vw,7rem)]"
              />

              <p className="mt-8 max-w-md leading-relaxed text-ink/65">
                Our work is guided by a simple commitment: to empower people,
                strengthen communities and create lasting positive change.
              </p>
            </div>


            {/* MISSION */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="col-span-12 border-t border-ink/15 pt-8 lg:col-span-7 lg:col-start-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-ink/50">
                Our Mission
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.05]">
                Educate. Empower. Create lasting change.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/75">
                Educate and empower underprivileged children, women, and
                communities through quality learning, skill development, and
                sustainable programs to bridge privilege gaps and promote
                gender equality.
              </p>

              <p className="mt-6 max-w-3xl leading-relaxed text-ink/65">
                Through this mission, the Foundation works to create meaningful
                opportunities for people who face social and economic
                disadvantages, helping them gain knowledge, practical skills,
                confidence and greater participation in their communities.
              </p>
            </motion.article>


            {/* VISION */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{
                duration: 0.8,
                ease: EASE_OUT,
                delay: 0.1
              }}
              className="col-span-12 border-t border-ink/15 pt-8 lg:col-span-7 lg:col-start-6"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-ink/50">
                Our Vision
              </p>

              <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,4rem)] leading-[1.05]">
                Education as a force for social change.
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-ink/75">
                Build a society where every child gets quality education and
                equality, making knowledge the most powerful tool for social
                change.
              </p>

              <p className="mt-6 max-w-3xl leading-relaxed text-ink/65">
                The Foundation envisions communities where children can learn,
                women can become financially independent, young people can
                participate meaningfully in society, and rural communities
                have the awareness, skills and opportunities needed to become
                more self-reliant.
              </p>
            </motion.article>

          </div>
        </div>
      </section>


      {/* =========================================================
          VALUES
      ========================================================= */}
      <section
        aria-labelledby="values-heading"
        className="bg-cream"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-8 gap-y-12 px-5 py-24 md:px-10 md:py-40">

          <div className="col-span-12 lg:col-span-5">
            <RevealText
              id="values-heading"
              lines={['What', 'Guides Us']}
              className="display text-[clamp(3.25rem,7vw,7rem)]"
            />

            <p className="mt-8 max-w-md leading-relaxed text-ink/65">
              Integrity, equality, empowerment, collaboration, innovation
              and sustainability guide the Foundation&apos;s work.
            </p>
          </div>

          <ul className="col-span-12 lg:col-span-7">
            {values.map((v, i) => (
              <motion.li
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: '0px 0px -10% 0px'
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE_OUT,
                  delay: i * 0.1
                }}
                className="grid gap-3 border-t border-ink/15 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-10"
              >
                <h3 className="font-serif text-4xl leading-none">
                  {v.title}
                </h3>

                <p className="leading-relaxed text-ink/75">
                  {v.body}
                </p>
              </motion.li>
            ))}
          </ul>

        </div>
      </section>


      {/* =========================================================
          OBJECTIVES
      ========================================================= */}
      <section
        aria-labelledby="objectives-heading"
        className="bg-paper"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">

          <div className="grid grid-cols-12 gap-x-8 gap-y-12">

            <div className="col-span-12 lg:col-span-5">
              <RevealText
                id="objectives-heading"
                lines={['Our', 'Objectives']}
                className="display text-[clamp(3.25rem,7vw,7rem)]"
              />
            </div>

            <div className="col-span-12 lg:col-span-7">

              {[
                {
                  title: 'Promote Education',
                  body:
                    'To provide quality education and academic support to underprivileged children, empowering them to build strong foundations and achieve their potential.'
                },
                {
                  title: 'Empower Women',
                  body:
                    'To empower women through skill development and vocational training, fostering financial independence, confidence and greater participation in their communities.'
                },
                {
                  title: 'Support Needy Families',
                  body:
                    'To provide essential food, clothing, educational support and emergency assistance to vulnerable families, helping them lead more stable, dignified and secure lives.'
                },
                {
                  title: 'Encourage Youth Participation',
                  body:
                    'To guide youth through social leadership development, social services and community engagement, inspiring them to become responsible and proactive leaders.'
                },
                {
                  title: 'Strengthen Rural Communities',
                  body:
                    'To support rural areas through education, skills, health camps and awareness drives, helping villages become more self-reliant, informed and capable of addressing their own developmental needs.'
                }
              ].map((objective, i) => (
                <motion.article
                  key={objective.title}
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
                  className="border-t border-ink/15 py-8"
                >
                  <div className="grid gap-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-10">
                    <h3 className="font-serif text-3xl leading-tight">
                      {objective.title}
                    </h3>

                    <p className="leading-relaxed text-ink/70">
                      {objective.body}
                    </p>
                  </div>
                </motion.article>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          COMMUNITY / TOGETHER SECTION
      ========================================================= */}
      <TogetherMask />


      {/* =========================================================
          TEAM
      ========================================================= */}
      <ColorSection
        from={palette.forest}
        to={palette.cream}
        fromText={palette.cream}
        toText={palette.ink}
      >
        <section
          aria-labelledby="team-heading"
          className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40"
        >

          <div className="grid grid-cols-12 items-end gap-8">

            <div className="col-span-12 lg:col-span-8">
              <RevealText
                id="team-heading"
                lines={['The People', 'Behind It']}
                className="display text-[clamp(3.25rem,8vw,8rem)]"
              />
            </div>

            <p className="col-span-12 max-w-md leading-relaxed opacity-75 lg:col-span-4">
              The Foundation is guided by committed individuals working
              across education, healthcare, social welfare, youth
              empowerment and community development.
            </p>

          </div>

          <ul className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

            {team.map((m, i) => (
              <motion.li
                key={m.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: '0px 0px -10% 0px'
                }}
                transition={{
                  duration: 0.8,
                  ease: EASE_OUT,
                  delay: i * 0.1
                }}
              >
                <TeamCard member={m} />
              </motion.li>
            ))}

          </ul>
        </section>
      </ColorSection>

    </PageShell>
  );
}