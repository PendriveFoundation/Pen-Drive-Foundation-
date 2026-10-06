import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { RevealText } from '../components/motion/RevealText';
import { MaskImage } from '../components/motion/MaskImage';
import { ArrowButton } from '../components/ui/ArrowButton';
import { CopyField } from '../components/donate/CopyField';
import { QrCode } from '../components/donate/QrCode';
import { images } from '../data/images';
import { bankDetails, site, upiId } from '../data/site';
import { EASE_OUT } from '../utils/motion';

export function Donate() {
  const scrollToGive = () => document.getElementById('give')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <PageShell title="Donate">
      <section aria-labelledby="donate-heading" className="bg-cream pt-32 md:pt-44">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-end gap-x-8 gap-y-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-7">
            <RevealText as="h1" id="donate-heading" immediate delay={0.3} lines={['Support', 'Our Work']} className="display text-[clamp(4rem,11.5vw,11.5rem)]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.6 }}
            className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-4">
            
            <p className="max-w-md leading-relaxed text-ink/75">
              Every contribution goes into our programmes: classrooms, health camps, training and cultural work in the
              communities we serve.
            </p>
            <ArrowButton label="Donate now" onClick={scrollToGive} direction="down" className="mt-8" />
          </motion.div>
        </div>
        <div className="mx-auto mt-14 max-w-[1600px] px-5 md:px-10">
          <MaskImage
            immediate
            delay={0.4}
            shape="full"
            parallax
            src={images.donatation}
            alt="A child's hands writing in a notebook"
            className="aspect-[4/3] md:aspect-[21/9]" />
          
        </div>
      </section>

      <section id="give" aria-labelledby="give-heading" className="scroll-mt-20 bg-cream">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-8 gap-y-12 px-5 py-24 md:px-10 md:py-32">
          <div className="col-span-12 lg:col-span-4">
            <RevealText id="give-heading" lines={['Ways to', 'Give']} className="display text-[clamp(3.25rem,6.5vw,6.5rem)]" />
            <ol className="mt-10 space-y-4 text-ink/80">
              <li className="flex gap-4">
                <span className="font-serif text-2xl leading-none text-terracotta">1.</span>
                Transfer to our bank account or scan the UPI code.
              </li>
              <li className="flex gap-4">
                <span className="font-serif text-2xl leading-none text-terracotta">2.</span>
                Email your transaction reference and name.
              </li>
              <li className="flex gap-4">
                <span className="font-serif text-2xl leading-none text-terracotta">3.</span>
                We send a receipt for your contribution.
              </li>
            </ol>
            <ArrowButton
              label="Email your reference"
              href={`mailto:${site.donateEmail}?subject=Donation%20reference`}
              variant="outline"
              direction="right"
              className="mt-10" />
            
          </div>

          <div className="col-span-12 grid gap-6 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="rounded-3xl bg-paper p-7 shadow-[0_0_0_1px_rgba(27,26,23,0.08)] md:p-9">
              
              <h3 className="font-serif text-3xl leading-none">Bank transfer</h3>
              <p className="mt-2 text-sm text-ink/60">NEFT, RTGS or IMPS</p>
              <dl className="mt-6">
                {bankDetails.map((d) =>
                <CopyField key={d.label} label={d.label} value={d.value} />
                )}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
              className="flex flex-col rounded-3xl bg-forest p-7 text-cream md:p-9">
              
              <h3 className="font-serif text-3xl leading-none">Scan & pay</h3>
              <p className="mt-2 text-sm text-cream/70">Any UPI app</p>
              <div className="mx-auto mt-8 aspect-square w-full max-w-[220px] rounded-2xl bg-paper p-3">
                <QrCode label={`UPI QR code for ${site.name}`} />
              </div>
              <dl className="mt-auto pt-6">
                <CopyField label="UPI ID" value={upiId} tone="dark" />
              </dl>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>);

}