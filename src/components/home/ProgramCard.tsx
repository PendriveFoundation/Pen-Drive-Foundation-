import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Program } from '../../types/content';

type ProgramCardProps = {program: Program;};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Link
      to={`/gallery?category=${program.category}`}
      aria-label={`View program: ${program.title}`}
      className="group block text-cream focus-visible:outline-none">
      
      <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] transition-[border-radius] duration-300 ease-ui group-hover:rounded-[32px] group-focus-visible:rounded-[32px] group-focus-visible:ring-2 group-focus-visible:ring-cream">
        <img
          src={program.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-ui group-hover:-translate-x-[1.5%] group-hover:scale-[1.05]" />
        
        <div className="absolute inset-0 bg-ink/10 transition-colors duration-300 ease-ui group-hover:bg-ink/50" />
        <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink">
          Program {program.number}
        </span>
        <p className="absolute inset-x-5 bottom-5 hidden translate-y-2 text-sm leading-relaxed text-cream opacity-0 transition-[opacity,transform] duration-300 ease-ui group-hover:translate-y-0 group-hover:opacity-100 md:block">
          {program.summary}
        </p>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <h3 className="display text-[clamp(1.75rem,2.3vw,2.5rem)] leading-[0.92] transition-transform duration-300 ease-ui group-hover:translate-x-1.5">
          {program.title}
        </h3>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/40 transition-[background-color,color,border-color] duration-300 ease-ui group-hover:border-cream group-hover:bg-cream group-hover:text-terracotta">
          
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 ease-ui group-hover:rotate-45" />
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-cream/80 md:hidden">{program.summary}</p>
    </Link>);

}