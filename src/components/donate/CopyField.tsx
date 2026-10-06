import React, { useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

type CopyFieldProps = {label: string;value: string;tone?: 'light' | 'dark';};

export function CopyField({ label, value, tone = 'light' }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const border = tone === 'dark' ? 'border-cream/15' : 'border-ink/10';
  const btn =
  tone === 'dark' ?
  'shadow-[inset_0_0_0_1px_rgba(242,236,225,0.3)] hover:bg-cream hover:text-ink' :
  'shadow-[inset_0_0_0_1px_rgba(27,26,23,0.18)] hover:bg-ink hover:text-cream';

  return (
    <div className={`border-b py-4 last:border-b-0 ${border}`}>
      <dt className="text-xs opacity-60">{label}</dt>
      <dd className="mt-1 flex items-center justify-between gap-4">
        <span className="font-medium tabular-nums">{value}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label}`}
          className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-colors duration-200 ease-ui focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${btn}`}>
          
          {copied ? <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" /> : <CopyIcon className="h-3.5 w-3.5" aria-hidden="true" />}
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </dd>
    </div>);

}