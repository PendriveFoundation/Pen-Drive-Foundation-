import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { TeamMember } from '../../types/content';
import { EASE_UI } from '../../utils/motion';

type TeamCardProps = {member: TeamMember;};

export function TeamCard({ member }: TeamCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="group block w-full text-left focus-visible:outline-none">
      
      <div className="relative aspect-[3/4] overflow-hidden bg-sand group-focus-visible:ring-2 group-focus-visible:ring-terracotta">
        <img
          src={member.image}
          alt={`Portrait of ${member.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-[transform,filter] duration-300 ease-ui group-hover:scale-[1.03] md:grayscale md:group-hover:grayscale-0 md:group-focus-visible:grayscale-0" />
        
        <AnimatePresence>
          {open &&
          <motion.p
            className="absolute inset-x-0 bottom-0 bg-ink/90 p-5 text-sm leading-relaxed text-cream"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.25, ease: EASE_UI }}>
            
              {member.bio}
            </motion.p>
          }
        </AnimatePresence>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="transition-transform duration-300 ease-ui md:group-hover:translate-x-1.5">
          <h3 className="font-serif text-3xl leading-none">{member.name}</h3>
          <p className="mt-2 text-sm opacity-70 transition-[opacity,transform] duration-300 ease-ui md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-70 md:group-focus-visible:opacity-70">
            {member.role}
          </p>
        </div>
        <ArrowUpRightIcon
          aria-hidden="true"
          className={`mt-1 h-5 w-5 shrink-0 transition-[opacity,transform] duration-300 ease-ui md:-translate-x-1 md:translate-y-1 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
          open ? 'rotate-90 md:opacity-100' : ''}`
          } />
        
      </div>
    </button>);

}