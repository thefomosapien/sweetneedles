import Image from "next/image";

interface CinderblockHeroProps {
  /** Show the main SVG spray-painted logo */
  showLogo?: boolean;
  /** Custom heading text (used on inner pages) */
  heading?: string;
  /** Sub-heading or address line */
  subheading?: string;
  /** CTA buttons rendered below heading */
  children?: React.ReactNode;
  /** Height class — defaults to full viewport on home, shorter on inner pages */
  heightClass?: string;
}

export default function CinderblockHero({
  showLogo = false,
  heading,
  subheading,
  children,
  heightClass = "min-h-[40vh]",
}: CinderblockHeroProps) {
  return (
    <section className={`cinderblock-gray relative flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 ${heightClass} overflow-hidden`}>
      {/* Inline SVG grain filter definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="cinderblock-grain" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended"/>
            <feComponentTransfer in="blended">
              <feFuncA type="linear" slope="1"/>
            </feComponentTransfer>
          </filter>
          <filter id="spray-paint" x="-5%" y="-10%" width="110%" height="130%">
            <feTurbulence type="turbulence" baseFrequency="0.02 0.04" numOctaves="4" seed="5" result="turbulence"/>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="5" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {showLogo ? (
          <Image
            src="/svg/sweet-needles-logo.svg"
            alt="Sweet Needles Tattoo"
            width={900}
            height={260}
            className="w-full max-w-4xl mx-auto h-auto"
            priority
          />
        ) : heading ? (
          <h1 className="font-bebas text-off-white tracking-widest leading-none"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}>
            {heading}
          </h1>
        ) : null}

        {subheading && (
          <p className="font-bebas text-mortar-light tracking-[0.2em] text-sm md:text-base mt-3">
            {subheading}
          </p>
        )}

        {children && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
