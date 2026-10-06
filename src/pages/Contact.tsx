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
} from 'lucide-react';

import { motion } from 'framer-motion';

import { site, palette } from '../data/site';

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/vo4rYaREZeWAFM5z8';

// =====================================================
// GOOGLE APPS SCRIPT WEB APP URL
// Replace this with your deployed Apps Script URL
// =====================================================
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxA-jfO99bNmxnCsRF0t0Hv_eNGOsKQPz6-j1betRUVblYLTTpaj0ktXQhb97bXJp12/exec';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const mobile = String(data.get('mobile') || '');
    const subject = String(data.get('subject') || '');
    const message = String(data.get('message') || '');

    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          mobile,
          subject,
          message,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.error || 'Form submission failed'
        );
      }

      setSubmittedName(name);
      setSubmitStatus('success');

      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                  Whether you want to support our work, collaborate
                  with us, learn more about our programmes, or simply
                  reach out — we would love to hear from you.
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

                {/* Call */}
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

                {/* Email */}
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

                {/* Office + Map */}
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
                  RIGHT — FORM
              ================================================= */}
              <div className="col-span-12 lg:col-span-7">

                <div className="relative overflow-hidden rounded-2xl border border-forest/15 bg-white/55 p-6 shadow-[0_15px_50px_rgba(23,37,30,0.06)] md:p-9 lg:p-10">

                  <div className="absolute inset-x-0 top-0 h-[3px] bg-forest" />

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
                      SUCCESS MESSAGE
                  ================================================= */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-7 flex items-start gap-3 rounded-xl border border-forest/20 bg-forest/5 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest" />

                      <div>
                        <p className="font-medium text-forestDeep">
                          Thank you{submittedName ? `, ${submittedName}` : ''}!
                        </p>

                        <p className="mt-1 text-sm leading-relaxed text-ink/60">
                          Your message has been received successfully.
                          We have also sent a confirmation email to your
                          email address.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* =================================================
                      ERROR MESSAGE
                  ================================================= */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-7 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                    >
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                      <div>
                        <p className="font-medium text-red-700">
                          Something went wrong
                        </p>

                        <p className="mt-1 text-sm leading-relaxed text-red-600/80">
                          We could not submit your message. Please try
                          again or contact us directly by email.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* =================================================
                      FORM
                  ================================================= */}
                  <form onSubmit={handleSubmit}>

                    {/* Name + Email */}
                    <div className="grid gap-6 md:grid-cols-2">

                      <label className="block">

                        <span className="text-sm font-medium">
                          Full Name *
                        </span>

                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          className="mt-2 h-14 w-full rounded-xl border border-forest/15 bg-cream/40 px-4 text-sm outline-none transition-all placeholder:text-ink/30 focus:border-forest/45 focus:bg-white focus:ring-4 focus:ring-forest/5"
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
                          placeholder="you@example.com"
                          className="mt-2 h-14 w-full rounded-xl border border-forest/15 bg-cream/40 px-4 text-sm outline-none transition-all placeholder:text-ink/30 focus:border-forest/45 focus:bg-white focus:ring-4 focus:ring-forest/5"
                        />

                      </label>

                    </div>

                    {/* Mobile + Subject */}
                    <div className="mt-6 grid gap-6 md:grid-cols-2">

                      <label className="block">

                        <span className="text-sm font-medium">
                          Mobile Number *
                        </span>

                        <input
                          required
                          name="mobile"
                          type="tel"
                          placeholder="Enter your mobile number"
                          className="mt-2 h-14 w-full rounded-xl border border-forest/15 bg-cream/40 px-4 text-sm outline-none transition-all placeholder:text-ink/30 focus:border-forest/45 focus:bg-white focus:ring-4 focus:ring-forest/5"
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
                          className="mt-2 h-14 w-full rounded-xl border border-forest/15 bg-cream/40 px-4 text-sm outline-none transition-all placeholder:text-ink/30 focus:border-forest/45 focus:bg-white focus:ring-4 focus:ring-forest/5"
                        />

                      </label>

                    </div>

                    {/* Message */}
                    <label className="mt-6 block">

                      <span className="text-sm font-medium">
                        Your Message *
                      </span>

                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Write your message here..."
                        className="mt-2 min-h-[175px] w-full resize-y rounded-xl border border-forest/15 bg-cream/40 px-4 py-4 text-sm outline-none transition-all placeholder:text-ink/30 focus:border-forest/45 focus:bg-white focus:ring-4 focus:ring-forest/5"
                      />

                    </label>

                    {/* =================================================
                        TERMS & CONDITIONS
                    ================================================= */}
                    <div className="mt-6">

                      <label className="flex cursor-pointer items-start gap-3">

                        <input
                          type="checkbox"
                          name="termsAccepted"
                          required
                          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-forest/30 accent-forest"
                        />

                        <span className="text-sm leading-relaxed opacity-65">
                          I have read and agree to the{' '}
                          <a
                            href="/terms-conditions"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-forest underline underline-offset-2 transition-colors hover:text-forestDeep"
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
                    <div className="mt-7 flex flex-col gap-5 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                      <p className="max-w-[350px] text-xs leading-relaxed opacity-45">
                        Your information will only be used to respond
                        to your enquiry.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center justify-center gap-3 rounded-full bg-forestDeep px-7 py-4 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-forest disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                      >

                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message

                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}

                      </button>

                    </div>

                  </form>

                  {/* Bottom message */}
                  <div className="-mx-6 -mb-6 mt-7 border-t border-forest/10 bg-forest/[0.035] px-6 py-4 md:-mx-9 md:-mb-9 md:px-9">

                    <p className="text-xs opacity-50">
                      Thank you for your interest in supporting
                      PEN-DRIVE FOUNDATION.
                    </p>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </PageShell>
  );
}
