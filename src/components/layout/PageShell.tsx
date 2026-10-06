import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Footer } from './Footer';
import { site } from '../../data/site';
import { hasPlayedIntro } from '../../utils/intro';
import { EASE_IN_OUT, EASE_UI } from '../../utils/motion';

type PageShellProps = {
  title: string;
  footerFrom?: string;
  footerFromText?: string;
  children: React.ReactNode;
};

const COVER = 'inset(0% 0% 0% 0%)';
const LIFTED = 'inset(0% 0% 100% 0%)';
const BELOW = 'inset(100% 0% 0% 0%)';

/**
 * Page transition: a forest curtain rises from below to cover the old page,
 * then keeps rising to uncover the new one — one continuous upward sweep.
 */
export function PageShell({ title, footerFrom, footerFromText, children }: PageShellProps) {
  const firstLoad = useRef(!hasPlayedIntro()).current;
  const reduced = useReducedMotion();

  useEffect(() => {
    document.title = `${title} — ${site.name}`;
  }, [title]);

  return (
    <>
      {!reduced &&
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[55] bg-forest"
        initial={{ clipPath: firstLoad ? LIFTED : COVER }}
        animate={{ clipPath: LIFTED, transition: { duration: 0.3, ease: EASE_IN_OUT, delay: 0.05 } }}
        exit={{ clipPath: [BELOW, COVER], transition: { duration: 0.3, ease: EASE_IN_OUT } }} />

      }
      <motion.main
        initial={reduced && !firstLoad ? { opacity: 0 } : false}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: EASE_UI } }}
        exit={reduced ? { opacity: 0, transition: { duration: 0.2 } } : { y: -40, transition: { duration: 0.3, ease: EASE_IN_OUT } }}>
        
        {children}
        <Footer from={footerFrom} fromText={footerFromText} />
      </motion.main>
    </>);

}