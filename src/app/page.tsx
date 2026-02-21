import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CinderblockHero from "@/components/sections/CinderblockHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import ArtistCard from "@/components/artists/ArtistCard";
import { artists } from "@/data/artists";

export const metadata: Metadata = {
  title: "Sweet Needles Tattoo | Salt Lake City Tattoo Shop",
  description:
    "Sweet Needles Tattoo — downtown Salt Lake City's premier tattoo studio. 7 expert artists, walk-ins welcome. American Traditional, Japanese, fine line, bold blackwork, color. Call (385) 528-2491.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO — Gray cinderblock exterior ──────────────────────── */}
      <CinderblockHero
        showLogo
        subheading="605 N 300 W · Salt Lake City, UT · Sun–Sat 12pm–8pm"
        heightClass="min-h-[92vh]"
      >
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
        <Link href="/artists" className="btn-outline">
          Meet the Artists
        </Link>
      </CinderblockHero>

      {/* ── ABOUT TEASER — White cinderblock interior ─────────────── */}
      <section className="cinderblock-white flash-wall section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-bebas text-flash-red tracking-[0.25em] text-sm mb-3 uppercase">
              Est. 2019 · Salt Lake City
            </p>
            <h2
              className="font-bebas text-ink-black tracking-widest leading-none mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              A Diverse Crew.<br />One Standard: Excellence.
            </h2>
            <p className="font-inter text-ink-black/75 leading-relaxed text-base md:text-lg mb-8">
              Sweet Needles Tattoo started in 2019 in downtown Salt Lake City with a small
              group of tattooers. We&apos;ve grown into a unique, diverse collective — spanning
              older generation artists and a new wave of inspiring talent. Together we offer
              everything from Americana traditional to Japanese tattooing, fine line to bold
              blackwork. Come see us.
            </p>
            <Link href="/about" className="btn-outline-dark">
              About the Shop
            </Link>
          </div>
          {/* Shop interior image */}
          <div className="relative aspect-[4/3] bg-mortar-light border-2 border-ink-black overflow-hidden">
            <Image
              src="/images/shop/interior.jpg"
              alt="Inside Sweet Needles Tattoo — white cinderblock walls with bold tattoo flash murals, tattoo tables and plants"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── ARTISTS — Dark section ─────────────────────────────────── */}
      <section className="bg-shop-black section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-bebas text-shop-mint tracking-[0.25em] text-sm uppercase mb-2">
                The Crew
              </p>
              <h2
                className="font-bebas text-off-white tracking-widest leading-none"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
              >
                The Artists
              </h2>
            </div>
            <Link href="/artists" className="btn-outline self-start sm:self-auto">
              View All Artists
            </Link>
          </div>

          {/* All 7 artists — responsive grid, no horizontal scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MINT STRIP — Walk-ins welcome ─────────────────────────── */}
      <section className="bg-shop-mint py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-shop-black tracking-widest text-3xl md:text-4xl leading-none">
              Walk-Ins Welcome
            </h2>
            <p className="font-inter text-shop-black/70 text-sm mt-1">
              Sun–Sat 12pm–8pm · 605 N 300 W, Salt Lake City
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:3855282491" className="btn-outline-dark">
              (385) 528-2491
            </a>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ TEASER — White cinderblock ────────────────────────── */}
      <section className="cinderblock-white section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="font-bebas text-flash-red tracking-[0.25em] text-sm uppercase mb-2">
                Got Questions?
              </p>
              <h2
                className="font-bebas text-ink-black tracking-widest leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Quick Answers
              </h2>
            </div>
            <Link href="/faq" className="btn-outline-dark self-start sm:self-auto">
              All FAQs
            </Link>
          </div>
          <FAQAccordion full={false} limit={3} />
        </div>
      </section>

      {/* ── BOTTOM CTA — Gray cinderblock exterior ────────────────── */}
      <CinderblockHero
        heading="Ready to Get Inked?"
        subheading="Walk in or reach out — we'd love to hear your idea."
        heightClass="min-h-[35vh]"
      >
        <Link href="/contact" className="btn-primary">
          Contact Us
        </Link>
        <a href="tel:3855282491" className="btn-outline">
          (385) 528-2491
        </a>
      </CinderblockHero>
    </>
  );
}
