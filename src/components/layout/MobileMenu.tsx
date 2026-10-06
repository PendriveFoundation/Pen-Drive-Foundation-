import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks, site } from '../../data/site';
import { EASE_IN_OUT, EASE_OUT } from '../../utils/motion';

type MobileMenuProps = {open: boolean;onClose: () => void;};

const links = [...navLinks, { label: 'Donate', to: '/donate' }];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-forest text-cream md:hidden"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', transition: { duration: 0.3, ease: EASE_IN_OUT } }}
        exit={{ clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 0.3, ease: EASE_IN_OUT, delay: 0.12 } }}>
        
          <div
          aria-hidden="true"
          className="display pointer-events-none absolute bottom-[10%] left-0 flex animate-drift whitespace-nowrap text-[44vw] text-cream/[0.05]">
          
            <span className="pr-[0.2em]">Sahyog</span>
            <span className="pr-[0.2em]">Sahyog</span>
          </div>

          <div className="relative flex items-center justify-between px-5 py-5">
            <Logo onClick={onClose} />
            <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(242,236,225,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream">
            
              Close <XIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="relative flex flex-1 flex-col justify-center px-5">
            <ul className="space-y-1">
              {links.map((link, i) => {
              const active = link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to);
              return (
                <li key={link.to} className="overflow-hidden">
                    <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: '0%', transition: { duration: 0.3, ease: EASE_OUT, delay: 0.14 + i * 0.05 } }}
                    exit={{ y: '100%', transition: { duration: 0.2, ease: EASE_IN_OUT, delay: (links.length - 1 - i) * 0.03 } }}>
                    
                      <Link
                      to={link.to}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className="display flex items-center gap-4 py-1 text-[17vw] focus-visible:outline-none focus-visible:text-terracotta">
                      
                        {link.label}
                        {active && <span aria-hidden="true" className="h-3 w-3 rounded-full bg-terracotta" />}
                      </Link>
                    </motion.div>
                  </li>);

            })}
            </ul>
          </nav>

          <motion.div
          className="relative flex items-center justify-between border-t border-cream/15 px-5 py-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.4 } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}>
          
            <a href={`mailto:${site.email}`} className="opacity-80">
              {site.email}
            </a>
            <span className="opacity-60">Est. {site.founded}</span>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}