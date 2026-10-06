import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

type Tone = 'ink' | 'cream' | 'terracotta';
type Variant = 'solid' | 'outline';
type Direction = 'up-right' | 'right' | 'down';

type ArrowButtonProps = {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  tone?: Tone;
  direction?: Direction;
  size?: 'md' | 'sm';
  className?: string;
  ariaLabel?: string;
};

const STYLES: Record<Variant, Record<Tone, {base: string;fill: string;hoverText: string;}>> = {
  solid: {
    ink: { base: 'bg-ink text-cream', fill: 'bg-terracotta', hoverText: '' },
    cream: { base: 'bg-cream text-ink', fill: 'bg-terracotta', hoverText: 'group-hover:text-cream' },
    terracotta: { base: 'bg-terracotta text-cream', fill: 'bg-ink', hoverText: '' }
  },
  outline: {
    ink: { base: 'text-ink shadow-[inset_0_0_0_1px_rgba(27,26,23,0.28)]', fill: 'bg-ink', hoverText: 'group-hover:text-cream' },
    cream: { base: 'text-cream shadow-[inset_0_0_0_1px_rgba(242,236,225,0.45)]', fill: 'bg-cream', hoverText: 'group-hover:text-ink' },
    terracotta: { base: 'text-terracotta shadow-[inset_0_0_0_1px_rgba(180,83,47,0.5)]', fill: 'bg-terracotta', hoverText: 'group-hover:text-cream' }
  }
};

const ARROWS: Record<Direction, {Icon: typeof ArrowUpRightIcon;out: string;enter: string;}> = {
  'up-right': {
    Icon: ArrowUpRightIcon,
    out: 'group-hover:translate-x-full group-hover:-translate-y-full',
    enter: '-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0'
  },
  right: {
    Icon: ArrowRightIcon,
    out: 'group-hover:translate-x-full',
    enter: '-translate-x-full group-hover:translate-x-0'
  },
  down: {
    Icon: ArrowDownIcon,
    out: 'group-hover:translate-y-full',
    enter: '-translate-y-full group-hover:translate-y-0'
  }
};

export function ArrowButton({
  label,
  to,
  href,
  onClick,
  variant = 'solid',
  tone = 'ink',
  direction = 'up-right',
  size = 'md',
  className = '',
  ariaLabel
}: ArrowButtonProps) {
  const s = STYLES[variant][tone];
  const a = ARROWS[direction];
  const sizing = size === 'sm' ? 'h-10 px-5' : 'h-12 px-6';
  const cls = `group relative isolate inline-flex shrink-0 items-center overflow-hidden whitespace-nowrap rounded-full text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${sizing} ${s.base} ${className}`;

  const inner =
  <>
      <span
      aria-hidden="true"
      className={`absolute inset-0 -z-0 translate-y-[101%] rounded-full transition-transform duration-300 ease-ui group-hover:translate-y-0 ${s.fill}`} />
    
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-300 ease-ui ${s.hoverText}`}>
        <span className="relative block overflow-hidden leading-5">
          <span className="block transition-transform duration-300 ease-ui group-hover:-translate-y-full">{label}</span>
          <span
          aria-hidden="true"
          className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-ui group-hover:translate-y-0">
          
            {label}
          </span>
        </span>
        <span aria-hidden="true" className="relative block h-4 w-4 overflow-hidden">
          <a.Icon className={`absolute inset-0 h-4 w-4 transition-transform duration-300 ease-ui ${a.out}`} />
          <a.Icon className={`absolute inset-0 h-4 w-4 transition-transform duration-300 ease-ui ${a.enter}`} />
        </span>
      </span>
    </>;


  if (to) {
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>);

  }
  if (href) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </a>);

  }
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>);

}