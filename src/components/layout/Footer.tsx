import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpIcon,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Star,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { ColorSection } from '../motion/ColorSection';
import { RevealText } from '../motion/RevealText';
import { ArrowButton } from '../ui/ArrowButton';

import { navLinks, site } from '../../data/site';

type FooterProps = {
  from?: string;
  fromText?: string;
};

const FOOTER_IMAGE = 'Fotter.png';

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/vo4rYaREZeWAFM5z8';

const TAXCON_WEBSITE =
  'https://agarwaltaxcon.in/';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: '#',
    icon: Youtube,
  },
];

const PROGRAM_LINKS = [
  { label: 'Education & Literacy', to: '/programs' },
  { label: 'Health Awareness', to: '/programs' },
  { label: 'Women Empowerment', to: '/programs' },
  { label: 'Culture & Skills', to: '/programs' },
  { label: 'Community Development', to: '/programs' },
  { label: 'Donate', to: '/donate' },
];

export function Footer({
  from = '#EAF4EC',
  fromText = '#17251E',
}: FooterProps) {
  return (
    <>
      {/* =====================================================
          STORY CTA
          ===================================================== */}

      <section className="relative isolate min-h-[72vh] overflow-hidden bg-[#17251E] text-cream">
        <motion.div
          className="absolute inset-0 -z-30"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img
            src={FOOTER_IMAGE}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 -z-20 bg-[#17251E]/65" />

        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-r
            from-[#17251E]/95
            via-[#17251E]/65
            to-[#17251E]/25
          "
        />

        <div
          className="
            absolute inset-x-0 bottom-0
            -z-10 h-48
            bg-gradient-to-t
            from-[#17251E]/80
            to-transparent
          "
        />

        <div
          className="
            mx-auto flex min-h-[72vh]
            max-w-[1600px]
            flex-col justify-between
            px-5 py-12
            md:px-10 md:py-16
            lg:px-16 lg:py-20
          "
        >
          <div className="flex flex-1 items-center">
            <div
              className="
                grid w-full
                grid-cols-12
                items-end
                gap-x-8
                gap-y-12
              "
            >
              <div className="col-span-12 lg:col-span-8">
                <RevealText
                  as="h2"
                  id="footer-story-heading"
                  lines={[
                    'Every story begins',
                    'with someone who',
                    'shows up.',
                  ]}
                  className="
                    max-w-[900px]
                    font-serif
                    text-[clamp(3.2rem,6.5vw,6.8rem)]
                    font-normal
                    leading-[0.9]
                    tracking-[-0.045em]
                    text-cream
                  "
                  lineClassNames={['', '', 'italic']}
                  stagger={0.12}
                  duration={0.9}
                />
              </div>

              <div
                className="
                  col-span-12
                  flex flex-wrap gap-3
                  lg:col-span-4
                  lg:justify-end
                "
              >
                <ArrowButton
                  label="Donate now"
                  to="/donate"
                  tone="cream"
                />

                <ArrowButton
                  label="Write to us"
                  href={`mailto:${site.email}`}
                  tone="cream"
                  variant="outline"
                  direction="right"
                />
              </div>
            </div>
          </div>

          <div
            className="
              mt-16 flex flex-col gap-4
              border-t border-cream/20
              pt-5
              text-xs uppercase
              tracking-[0.16em]
              text-cream/65
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>PEN-DRIVE FOUNDATION</span>

            <span>
              EST. {site.founded} · ARUNACHAL PRADESH
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <ColorSection
        from="#EAF4EC"
        to="#E3F0E6"
        fromText="#17251E"
        toText="#17251E"
      >
        <footer
          className="
            mx-auto
            max-w-[1600px]
            px-5
            pb-7
            pt-16
            md:px-10
            md:pb-8
            md:pt-20
            lg:px-16
          "
        >
          {/* =================================================
              MAIN GRID
              ================================================= */}

          <div
            className="
              grid
              grid-cols-12
              gap-x-10
              gap-y-12
            "
          >
            {/* =================================================
                BRAND
                ================================================= */}

            <div
              className="
                col-span-12
                lg:col-span-5
              "
            >
              <Link
                to="/"
                aria-label="Pen-Drive Foundation home"
                className="inline-block"
              >
                <img
                  src="/logo.jpeg"
                  alt="Pen-Drive Foundation"
                  className="
                    h-auto
                    w-[180px]
                    object-contain
                  "
                />
              </Link>

              <p
                className="
                  mt-5
                  max-w-[390px]
                  text-sm
                  leading-[1.8]
                  text-[#17251E]/70
                "
              >
                A community foundation working to empower children,
                women and rural communities through education,
                health awareness, skills and cultural development
                since {site.founded}.
              </p>

              {/* =================================================
                  NEWSLETTER
                  ================================================= */}

              <div
                className="
                  mt-7
                  max-w-[365px]
                "
              >
                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#17251E]/55
                  "
                >
                  Stay Connected
                </p>

                <p
                  className="
                    mt-3
                    text-xs
                    font-medium
                    text-[#17251E]/90
                  "
                >
                  Stay updated
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="
                    mt-2.5
                    flex
                    h-[46px]
                    w-full
                    max-w-[365px]
                    items-center
                    gap-1
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#17251E]/15
                    bg-white/40
                    p-1
                  "
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-3
                      text-xs
                      text-[#17251E]
                      outline-none
                      placeholder:text-[#17251E]/40
                    "
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      flex
                      h-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-[#17251E]
                      px-4
                      text-[11px]
                      font-semibold
                      text-white
                      shadow-sm
                    "
                  >
                    Subscribe
                  </motion.button>
                </form>

                <p
                  className="
                    mt-2
                    text-[10px]
                    leading-relaxed
                    text-[#17251E]/50
                  "
                >
                  Stay connected with our work and community updates.
                </p>
              </div>

              {/* =================================================
                  GOOGLE BUSINESS PROFILE
                  ================================================= */}

              <motion.a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25 }}
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-[#17251E]/15
                  bg-white/20
                  px-3
                  py-2
                  text-[10px]
                  text-[#17251E]/80
                  transition-colors
                  duration-300
                  hover:border-[#17251E]/30
                  hover:bg-white/40
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#17251E]/15
                  "
                >
                  <Star className="h-3 w-3 text-[#E31B14]" />
                </span>

                <span>
                  <span className="block font-medium leading-none">
                    Find us on Google
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[8px]
                      text-[#17251E]/45
                    "
                  >
                    Google Business Profile
                  </span>
                </span>

                <ArrowRight
                  className="
                    ml-1
                    h-3
                    w-3
                    text-[#17251E]/45
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.a>
            </div>

            {/* =================================================
                QUICK LINKS
                ================================================= */}

            <nav
              aria-label="Footer navigation"
              className="
                col-span-6
                sm:col-span-4
                lg:col-span-2
              "
            >
              <h2 className="text-sm font-semibold text-[#17251E]">
                Quick Links
              </h2>

              <span
                className="
                  mt-3
                  block
                  h-[2px]
                  w-9
                  bg-[#009B2D]
                "
              />

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                "
              >
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-1
                        text-[#17251E]/65
                        transition-all
                        duration-300
                        hover:text-[#17251E]
                      "
                    >
                      {link.label}

                      <span
                        className="
                          h-px
                          w-0
                          bg-[#009B2D]
                          transition-all
                          duration-300
                          group-hover:w-3
                        "
                      />
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    to="/donate"
                    className="
                      text-[#17251E]/65
                      transition-opacity
                      hover:text-[#17251E]
                    "
                  >
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>

            {/* =================================================
                PROGRAMS
                ================================================= */}

            <nav
              aria-label="Programs"
              className="
                col-span-6
                sm:col-span-4
                lg:col-span-2
              "
            >
              <h2 className="text-sm font-semibold text-[#17251E]">
                Our Programs
              </h2>

              <span
                className="
                  mt-3
                  block
                  h-[2px]
                  w-9
                  bg-[#009B2D]
                "
              />

              <ul
                className="
                  mt-5
                  space-y-3
                  text-sm
                "
              >
                {PROGRAM_LINKS.map((program) => (
                  <li key={program.label}>
                    <Link
                      to={program.to}
                      className="
                        text-[#17251E]/65
                        transition-all
                        duration-300
                        hover:text-[#17251E]
                      "
                    >
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* =================================================
                CONTACT
                ================================================= */}

            <div
              className="
                col-span-12
                sm:col-span-4
                lg:col-span-3
              "
            >
              <h2 className="text-sm font-semibold text-[#17251E]">
                Contact & Legal
              </h2>

              <span
                className="
                  mt-3
                  block
                  h-[2px]
                  w-9
                  bg-[#E31B14]
                "
              />

              {/* PHONE */}

              <a
                href={`tel:${site.phone}`}
                className="
                  group
                  mt-5
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#17251E]/10
                    bg-white/30
                  "
                >
                  <Phone className="h-3.5 w-3.5 text-[#17251E]/70" />
                </span>

                <span>
                  <span
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-[#17251E]
                    "
                  >
                    Call Us
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      text-[#17251E]/65
                    "
                  >
                    {site.phone}
                  </span>
                </span>
              </a>

              {/* EMAIL */}

              <a
                href={`mailto:${site.email}`}
                className="
                  mt-4
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#17251E]/10
                    bg-white/30
                  "
                >
                  <Mail className="h-3.5 w-3.5 text-[#17251E]/70" />
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-[#17251E]
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      break-all
                      text-xs
                      text-[#17251E]/65
                    "
                  >
                    {site.email}
                  </span>
                </span>
              </a>

              {/* ADDRESS */}

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  mt-4
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#17251E]/10
                    bg-white/30
                  "
                >
                  <MapPin className="h-3.5 w-3.5 text-[#17251E]/70" />
                </span>

                <span>
                  <span
                    className="
                      block
                      text-[11px]
                      font-medium
                      text-[#17251E]
                    "
                  >
                    Office Address
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      leading-relaxed
                      text-[#17251E]/65
                    "
                  >
                    {site.address}
                  </span>

                  <span
                    className="
                      mt-2
                      inline-flex
                      items-center
                      gap-1
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-[#17251E]/45
                      transition-opacity
                      group-hover:text-[#17251E]/80
                    "
                  >
                    View on Google Maps
                    <ArrowRight className="h-2.5 w-2.5" />
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* =================================================
              SOCIAL / LEGAL BAR
              ================================================= */}

          <div
            className="
              mt-14
              border-t
              border-[#17251E]/15
              pt-6
              md:mt-16
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <p className="text-[11px] text-[#17251E]/55">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </p>

              <div
                className="
                  flex
                  items-center
                  gap-5
                  text-[11px]
                  text-[#17251E]/55
                "
              >
                <Link
                  to="/privacy-policy"
                  className="transition-opacity hover:text-[#17251E]"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms"
                  className="transition-opacity hover:text-[#17251E]"
                >
                  Terms & Conditions
                </Link>
              </div>

              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#17251E]/20
                        text-[#17251E]/65
                        transition-all
                        duration-300
                        hover:border-[#009B2D]
                        hover:bg-[#009B2D]/10
                        hover:text-[#17251E]
                      "
                    >
                      <Icon
                        className="h-3.5 w-3.5"
                        strokeWidth={1.7}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              DEVELOPER / BACK TO TOP
              ================================================= */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-3
              border-t
              border-[#17251E]/10
              pt-5
              text-[11px]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="text-[#17251E]/60">
              Designed & Developed by{' '}
              <a
                href={TAXCON_WEBSITE}
                target="_blank"
                rel="noreferrer"
                className="
                  ml-1
                  inline-block
                  font-bold
                  tracking-[0.01em]
                  text-[#E31B14]
                  transition-all
                  duration-300
                  hover:text-[#C9140F]
                  hover:underline
                  hover:underline-offset-4
                "
              >
                Digital Taxcon Pvt. Ltd.
              </a>
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="
                group
                inline-flex
                items-center
                gap-2
                self-start
                text-[#17251E]/55
                transition-all
                duration-300
                hover:text-[#17251E]
                sm:self-auto
              "
            >
              Back to top

              <ArrowUpIcon
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>
        </footer>
      </ColorSection>
    </>
  );
}