import { Link } from 'react-router-dom';

type LogoProps = {
  onClick?: () => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="PEN-DRIVE FOUNDATION — Home"
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-terracotta
        focus-visible:ring-offset-4
        focus-visible:ring-offset-cream
      "
    >
      {/* Foundation Logo */}
      <img
        src="logo.png"
        alt="Pen-Drive Foundation Logo"
        className="
          h-[72px]
          w-auto
          object-contain
          transition-all
          duration-500
          ease-out
          group-hover:scale-[1.04]
          md:h-[82px]
        "
      />

      {/* Brand Name */}
      <div className="flex flex-col justify-center">
        <span
          className="
            font-serif
            text-[22px]
            italic
            leading-[0.95]
            tracking-[-0.02em]
            text-ink
            transition-all
            duration-300
            group-hover:text-terracotta
            md:text-[25px]
          "
        >
          Pen-Drive
        </span>

        <span
          className="
            mt-1
            font-serif
            text-[17px]
            italic
            leading-none
            tracking-[0.02em]
            text-ink/75
            md:text-[19px]
          "
        >
          Foundation
        </span>

        <span
          className="
            mt-1.5
            text-[7px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-ink/45
            md:text-[8px]
          "
        >
          Drive for a better tomorrow
        </span>
      </div>
    </Link>
  );
}