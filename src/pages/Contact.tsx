import React, { FormEvent, useState } from 'react';
import { PageShell } from '../components/layout/PageShell';

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';

import { motion } from 'framer-motion';

import { site, palette } from '../data/site';

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/vo4rYaREZeWAFM5z8';

/*
|--------------------------------------------------------------------------
| GOOGLE APPS SCRIPT WEB APP URL
|--------------------------------------------------------------------------
| IMPORTANT:
| Replace this with your deployed Google Apps Script /exec URL.
|
| Example:
| https://script.google.com/macros/s/XXXXXXXXXXXX/exec
|--------------------------------------------------------------------------
*/

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxfVOdvR6QIMDJf6zvsOwM9zLkyU7KJ6sH90k3tcgsAvdUb2hZS1HjfygQ5yBEQq7KV/exec';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const mobile = String(data.get('mobile') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    const termsAccepted =
      data.get('termsAccepted') === 'on';

    // ---------------------------------------------------------
    // Validation
    // ---------------------------------------------------------

    if (
      !name ||
      !email ||
      !mobile ||
      !subject ||
      !message ||
      !termsAccepted
    ) {
      setSubmitStatus('error');
      return;
    }

    // ---------------------------------------------------------
    // Check Google Script URL
    // ---------------------------------------------------------

    if (
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL.includes(
        'PASTE_YOUR_GOOGLE'
      )
    ) {
      console.error(
        'Google Apps Script URL has not been configured.'
      );

      setSubmitStatus('error');
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      // -------------------------------------------------------
      // Prepare form data for Google Apps Script
      // -------------------------------------------------------

      const formData = new URLSearchParams();

      formData.append('name', name);
      formData.append('email', email);
      formData.append('mobile', mobile);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('termsAccepted', 'Yes');

      // -------------------------------------------------------
      // Send data
      // -------------------------------------------------------

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formData.toString(),
      });

      // -------------------------------------------------------
      // Success
      // -------------------------------------------------------

      setSubmittedName(name);
      setSubmitStatus('success');

      form.reset();

      // Scroll to top of form card
      window.setTimeout(() => {
        window.scrollTo({
          top: Math.max(window.scrollY - 180, 0),
          behavior: 'smooth',
        });
      }, 100);

    } catch (error) {
      console.error(
        'Contact form submission error:',
        error
      );

      setSubmitStatus('error');

    } finally {
      setIsSubmitting(false);
    }
  };

  // -----------------------------------------------------------
  // Start another enquiry
  // -----------------------------------------------------------

  const handleNewMessage = () => {
    setSubmitStatus('idle');
    setSubmittedName('');

    window.setTimeout(() => {
      const form = document.querySelector(
        '#contact-form'
      ) as HTMLFormElement | null;

      form?.reset();
    }, 50);
  };

  return (
    <PageShell
      title="Contact Us"
      footerFrom={palette.cream}
      footerFromText={palette.ink}
    >
      <main className="bg-cream text-ink">

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="relative overflow-hidden">

          <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32 lg:px-16 lg:pt-40">

            <div className="grid grid-cols-12 gap-8">

              <div className="col-span-12 lg:col-span-3">

                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] opacity-50">

                  <span className="h-px w-8 bg-current" />

                  Contact Us

                </div>

              </div>

              <div className="col-span-12 lg:col-span-9">

                <h1 className="max-w-[1050px] font-serif text-[clamp(3.5rem,7.5vw,8rem)] leading-[0.88] tracking-[-0.05em]">

                  Let&apos;s start a

                  <br />

                  <span className="italic text-forest">
                    conversation.
                  </span>

                </h1>

                <p className="mt-8 max-w-[720px] text-base leading-relaxed opacity-65 md:text-lg">
                  Whether you want to support our work,
                  collaborate with us, learn more about our
                  programmes, or simply reach out — we would
                  love to hear from you.
                </p>

              </div>

            </div>

            <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-5 text-[10px] uppercase tracking-[0.16em] opacity-45">

              <span>PEN-DRIVE FOUNDATION</span>

              <span>EST. {site.founded}</span>

              <span>ARUNACHAL PRADESH · INDIA</span>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT + FORM
        ===================================================== */}

        <section className="pb-24 md:pb-32">

          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">

            <div className="grid grid-cols-12 gap-6 lg:gap-10">


              {/* =================================================
                  LEFT SIDE
              ================================================= */}

              <div className="col-span-12 lg:col-span-5">


                {/* CALL */}

                <motion.a
                  href={`tel:${site.phone}`}
                  whileHover={{ y: -3 }}
                  className="group block rounded-2xl border border-forest/15 bg-white/50 p-6 transition-all duration-300 hover:border-forest/30 hover:shadow-[0_15px_45px_rgba(23,37,30,0.07)] md:p-7"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div className="flex gap-4">

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">

                        <Phone className="h-5 w-5" />

                      </span>

                      <div>

                        <h2 className="text-lg font-medium">
                          Call Us
                        </h2>

                        <p className="mt-1 text-sm opacity-50">
                          Have a question? Give us a call.
                        </p>

                        <p className="mt-5 text-sm font-medium text-forest">
                          {site.phone}
                        </p>

                      </div>

                    </div>

                    <ArrowUpRight className="h-5 w-5 opacity-30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

                  </div>

                </motion.a>


                {/* EMAIL */}

                <motion.a
                  href={`mailto:${site.email}`}
                  whileHover={{ y: -3 }}
                  className="group mt-5 block rounded-2xl border border-forest/15 bg-white/50 p-6 transition-all duration-300 hover:border-forest/30 hover:shadow-[0_15px_45px_rgba(23,37,30,0.07)] md:p-7"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div className="flex gap-4">

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">

                        <Mail className="h-5 w-5" />

                      </span>

                      <div>

                        <h2 className="text-lg font-medium">
                          Email Us
                        </h2>

                        <p className="mt-1 text-sm opacity-50">
                          Send us your enquiry anytime.
                        </p>

                        <p className="mt-5 break-all text-sm font-medium text-forest">
                          {site.email}
                        </p>

                      </div>

                    </div>

                    <ArrowUpRight className="h-5 w-5 opacity-30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />

                  </div>

                </motion.a>


                {/* OFFICE + MAP */}

                <motion.div
                  whileHover={{ y: -3 }}
                  className="mt-5 overflow-hidden rounded-2xl border border-forest/15 bg-white/50 transition-all duration-300 hover:border-forest/30 hover:shadow-[0_15px_45px_rgba(23,37,30,0.07)]"
                >

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-6 md:p-7"
                  >

                    <div className="flex items-start justify-between gap-5">

                      <div className="flex gap-4">

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">

                          <MapPin className="h-5 w-5" />

                        </span>

                        <div>

                          <h2 className="text-lg font-medium">
                            Visit Our Office
                          </h2>

                          <p className="mt-1 text-sm opacity-50">
                            Find us at our registered address.
                          </p>

                        </div>

                      </div>

                      <ArrowUpRight className="h-5 w-5 opacity-30" />

                    </div>

                    <p className="mt-6 pl-16 text-sm leading-relaxed opacity-70">
                      {site.address}
                    </p>

                    <div className="mt-5 flex items-center gap-2 pl-16 text-sm font-medium text-forest">

                      Get Directions

                      <ArrowRight className="h-4 w-4" />

                    </div>

                  </a>


                  <div className="relative h-[220px] border-t border-ink/10">

                    <iframe
                      title="PEN-DRIVE FOUNDATION Location"
                      src="https://www.google.com/maps?q=Cheta%20I%2C%20Roing%2C%20Arunachal%20Pradesh%20792110&output=embed"
                      className="h-full w-full border-0 grayscale-[15%]"
                      loading="lazy"
                    />

                  </div>


                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border-t border-ink/10 px-6 py-4 text-xs md:px-7"
                  >

                    <span className="opacity-50">
                      PEN-DRIVE FOUNDATION
                    </span>

                    <span className="font-medium text-forest">
                      Open in Maps ↗
                    </span>

                  </a>

                </motion.div>

              </div>


              {/* =================================================
                  RIGHT SIDE
              ================================================= */}

              <div className="col-span-12 lg:col-span-7">

                <div className="relative overflow-hidden rounded-2xl border border-forest/15 bg-white/55 p-6 shadow-[0_15px_50px_rgba(23,37,30,0.06)] md:p-9 lg:p-10">

                  <div className="absolute inset-x-0 top-0 h-[3px] bg-[#315C42]" />


                  {/* =================================================
                      FORM HEADER
                  ================================================= */}

                  <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-forest">

                    <Send className="h-3.5 w-3.5" />

                    Send a Message

                  </div>


                  <h2 className="mt-5 font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.04em]">

                    How Can We

                    <br />

                    <span className="italic text-forest">
                      Help You?
                    </span>

                  </h2>


                  <p className="mt-5 max-w-[620px] text-sm leading-relaxed opacity-55 md:text-base">
                    Fill out the form below with your enquiry.
                    Our team will get back to you as soon as possible.
                  </p>


                  <div className="my-8 h-px bg-ink/10" />


                  {/* =================================================
                      ERROR MESSAGE
                  ================================================= */}

                  {submitStatus === 'error' && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mb-7 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                    >

                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                      <div>

                        <p className="font-medium text-red-700">
                          Something went wrong
                        </p>

                        <p className="mt-1 text-sm leading-relaxed text-red-600/80">
                          Please make sure all fields are filled
                          and the Terms & Conditions are accepted.
                          If the problem continues, please contact
                          us directly by email.
                        </p>

                      </div>

                    </motion.div>

                  )}


                  {/* =================================================
                      PREMIUM THANK YOU CARD
                  ================================================= */}

                  {submitStatus === 'success' ? (

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden rounded-3xl border border-[#315C42]/15 bg-white shadow-[0_20px_60px_rgba(23,37,30,0.10)]"
                    >

                      {/* ==========================================
                          GREEN HEADER
                      =========================================== */}

                      <div className="relative overflow-hidden bg-[#315C42] px-6 py-10 text-center md:px-10 md:py-12">

                        {/* Decorative circles */}

                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10" />

                        <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/5" />


                        {/* Success icon */}

                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.15,
                            duration: 0.45,
                            type: 'spring',
                            stiffness: 180,
                          }}
                          className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg"
                        >

                          <CheckCircle2
                            className="h-9 w-9 text-[#315C42]"
                            strokeWidth={2}
                          />

                        </motion.div>


                        <p className="relative mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">

                          Message Received

                        </p>


                        <h3 className="relative mt-2 font-serif text-3xl tracking-[-0.03em] text-white md:text-4xl">

                          Thank You
                          {submittedName
                            ? `, ${submittedName}`
                            : ''}!

                        </h3>


                        <p className="relative mx-auto mt-3 max-w-[520px] text-sm leading-relaxed text-white/75 md:text-base">

                          Thank you for reaching out to
                          Pen-Drive Foundation. Your enquiry
                          has been successfully submitted.

                        </p>

                      </div>


                      {/* ==========================================
                          WHITE CONTENT
                      =========================================== */}

                      <div className="px-6 py-7 md:px-10 md:py-8">


                        {/* EMAIL CONFIRMATION */}

                        <div className="flex items-start gap-4">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#315C42]">

                            <Mail className="h-5 w-5" />

                          </div>


                          <div>

                            <p className="font-medium text-[#17251E]">
                              Confirmation email sent
                            </p>

                            <p className="mt-1 text-sm leading-relaxed text-[#17251E]/55">

                              We&apos;ve also sent a confirmation
                              email to your email address.
                              Please check your inbox.

                            </p>

                          </div>

                        </div>


                        <div className="my-6 h-px bg-[#17251E]/10" />


                        {/* WHAT HAPPENS NEXT */}

                        <div className="flex items-start gap-4">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#315C42]">

                            <Send className="h-5 w-5" />

                          </div>


                          <div>

                            <p className="font-medium text-[#17251E]">
                              What happens next?
                            </p>

                            <p className="mt-1 text-sm leading-relaxed text-[#17251E]/55">

                              Our team will review your enquiry
                              and get back to you as soon as possible.

                            </p>

                          </div>

                        </div>


                        {/* TAGLINE */}

                        <div className="mt-7 rounded-2xl bg-[#EAF4EC] px-5 py-4 text-center">

                          <p className="text-sm font-medium text-[#315C42]">

                            Give a Life to a Better Tomorrow

                          </p>

                          <p className="mt-1 text-xs text-[#315C42]/60">

                            Team Pen-Drive Foundation

                          </p>

                        </div>


                        {/* NEW MESSAGE BUTTON */}

                        <button
                          type="button"
                          onClick={handleNewMessage}
                          className="
                            group
                            mt-6
                            inline-flex
                            w-full
                            min-h-[52px]
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            border
                            border-[#315C42]/20
                            bg-white
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-[#315C42]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-[#EAF4EC]
                            hover:shadow-[0_8px_25px_rgba(49,92,66,0.10)]
                            focus:outline-none
                            focus:ring-4
                            focus:ring-[#315C42]/10
                          "
                        >

                          <RotateCcw
                            className="
                              h-4
                              w-4
                              transition-transform
                              duration-300
                              group-hover:-rotate-45
                            "
                          />

                          Send Another Message

                        </button>

                      </div>

                    </motion.div>

                  ) : (

                    /* =================================================
                       CONTACT FORM
                    ================================================= */

                    <form
                      id="contact-form"
                      onSubmit={handleSubmit}
                    >

                      {/* NAME + EMAIL */}

                      <div className="grid gap-6 md:grid-cols-2">

                        <label className="block">

                          <span className="text-sm font-medium">
                            Full Name *
                          </span>

                          <input
                            required
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your full name"
                            className="
                              mt-2
                              h-14
                              w-full
                              rounded-xl
                              border
                              border-forest/15
                              bg-cream/40
                              px-4
                              text-sm
                              outline-none
                              transition-all
                              placeholder:text-ink/30
                              focus:border-forest/45
                              focus:bg-white
                              focus:ring-4
                              focus:ring-forest/5
                            "
                          />

                        </label>


                        <label className="block">

                          <span className="text-sm font-medium">
                            Email Address *
                          </span>

                          <input
                            required
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="
                              mt-2
                              h-14
                              w-full
                              rounded-xl
                              border
                              border-forest/15
                              bg-cream/40
                              px-4
                              text-sm
                              outline-none
                              transition-all
                              placeholder:text-ink/30
                              focus:border-forest/45
                              focus:bg-white
                              focus:ring-4
                              focus:ring-forest/5
                            "
                          />

                        </label>

                      </div>


                      {/* MOBILE + SUBJECT */}

                      <div className="mt-6 grid gap-6 md:grid-cols-2">

                        <label className="block">

                          <span className="text-sm font-medium">
                            Mobile Number *
                          </span>

                          <input
                            required
                            name="mobile"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            placeholder="Enter your mobile number"
                            className="
                              mt-2
                              h-14
                              w-full
                              rounded-xl
                              border
                              border-forest/15
                              bg-cream/40
                              px-4
                              text-sm
                              outline-none
                              transition-all
                              placeholder:text-ink/30
                              focus:border-forest/45
                              focus:bg-white
                              focus:ring-4
                              focus:ring-forest/5
                            "
                          />

                        </label>


                        <label className="block">

                          <span className="text-sm font-medium">
                            Subject *
                          </span>

                          <input
                            required
                            name="subject"
                            type="text"
                            placeholder="How can we help?"
                            className="
                              mt-2
                              h-14
                              w-full
                              rounded-xl
                              border
                              border-forest/15
                              bg-cream/40
                              px-4
                              text-sm
                              outline-none
                              transition-all
                              placeholder:text-ink/30
                              focus:border-forest/45
                              focus:bg-white
                              focus:ring-4
                              focus:ring-forest/5
                            "
                          />

                        </label>

                      </div>


                      {/* MESSAGE */}

                      <label className="mt-6 block">

                        <span className="text-sm font-medium">
                          Your Message *
                        </span>

                        <textarea
                          required
                          name="message"
                          rows={6}
                          placeholder="Write your message here..."
                          className="
                            mt-2
                            min-h-[175px]
                            w-full
                            resize-y
                            rounded-xl
                            border
                            border-forest/15
                            bg-cream/40
                            px-4
                            py-4
                            text-sm
                            outline-none
                            transition-all
                            placeholder:text-ink/30
                            focus:border-forest/45
                            focus:bg-white
                            focus:ring-4
                            focus:ring-forest/5
                          "
                        />

                      </label>


                      {/* =================================================
                          TERMS & CONDITIONS
                      ================================================= */}

                      <div className="mt-6 rounded-xl border border-[#315C42]/10 bg-[#315C42]/[0.03] p-4">

                        <label className="flex cursor-pointer items-start gap-3">

                          <input
                            type="checkbox"
                            name="termsAccepted"
                            required
                            className="
                              mt-1
                              h-4
                              w-4
                              shrink-0
                              cursor-pointer
                              rounded
                              border-[#315C42]/30
                              accent-[#315C42]
                            "
                          />

                          <span className="text-sm leading-relaxed text-[#17251E]/65">

                            I have read and agree to the{' '}

                            <a
                              href="/terms-conditions"
                              target="_blank"
                              rel="noreferrer"
                              className="
                                font-semibold
                                text-[#315C42]
                                underline
                                underline-offset-2
                                transition-colors
                                hover:text-[#234A33]
                              "
                            >
                              Terms & Conditions
                            </a>

                            .

                          </span>

                        </label>

                      </div>


                      {/* =================================================
                          SUBMIT AREA
                      ================================================= */}

                      <div className="mt-7 flex flex-col gap-5 border-t border-[#17251E]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <p className="max-w-[350px] text-xs leading-relaxed text-[#17251E]/50">

                          Your information will only be used
                          to respond to your enquiry.

                        </p>


                        {/* VISIBLE SUBMIT BUTTON */}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="
                            group
                            relative
                            z-10
                            inline-flex
                            min-h-[56px]
                            min-w-[185px]
                            shrink-0
                            cursor-pointer
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-[#315C42]
                            px-8
                            py-4
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_10px_25px_rgba(49,92,66,0.20)]
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:bg-[#234A33]
                            hover:shadow-[0_14px_30px_rgba(49,92,66,0.28)]
                            focus:outline-none
                            focus:ring-4
                            focus:ring-[#315C42]/20
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            disabled:hover:translate-y-0
                          "
                        >

                          {isSubmitting ? (

                            <>

                              <span
                                className="
                                  h-4
                                  w-4
                                  animate-spin
                                  rounded-full
                                  border-2
                                  border-white/30
                                  border-t-white
                                "
                              />

                              <span>
                                Sending...
                              </span>

                            </>

                          ) : (

                            <>

                              <span>
                                Send Message
                              </span>

                              <Send
                                className="
                                  h-4
                                  w-4
                                  transition-transform
                                  duration-300
                                  group-hover:translate-x-1
                                "
                              />

                            </>

                          )}

                        </button>

                      </div>


                    </form>

                  )}

                  {/* =================================================
                      BOTTOM NOTE
                  ================================================= */}

                  {submitStatus !== 'success' && (

                    <div className="mt-7 border-t border-forest/10 bg-forest/[0.035] px-1 py-4">

                      <p className="text-xs leading-relaxed text-ink/50">

                        Thank you for your interest in supporting
                        PEN-DRIVE FOUNDATION.

                      </p>

                    </div>

                  )}

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </PageShell>
  );
}