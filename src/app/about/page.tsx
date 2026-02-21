import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CinderblockHero from "@/components/sections/CinderblockHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sweet Needles Tattoo — a premier tattoo studio in downtown Salt Lake City, UT. Founded in 2019 by a small crew of dedicated tattooers. Styles include American Traditional, Japanese, fine line, and more.",
};

export default function AboutPage() {
  return (
    <>
      <CinderblockHero
        heading="About the Shop"
        subheading="Downtown Salt Lake City · Est. 2019"
        heightClass="min-h-[38vh]"
      />

      {/* ── STORY ──────────────────────────────────────────────────── */}
      <section className="cinderblock-white flash-wall section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="font-bebas text-flash-red tracking-[0.25em] text-sm mb-3 uppercase">
              Our Story
            </p>
            <h2
              className="font-bebas text-ink-black tracking-widest leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Born in Downtown SLC
            </h2>
            <div className="space-y-4 font-inter text-ink-black/75 leading-relaxed text-base md:text-lg">
              <p>
                Sweet Needles Tattoo started in 2019 in downtown Salt Lake City with a small
                group of tattooers who shared a common belief: that quality, creativity, and
                community should be at the center of every tattoo experience.
              </p>
              <p>
                What started as a tight-knit crew has blossomed into what it is now — a unique,
                diverse group of artists spanning older generation tattooers and an exciting wave
                of new and inspiring talent.
              </p>
              <p>
                Together, we cover a wide variety of styles: from bold Americana traditional and
                Japanese tattooing to fine line, color realism, blackwork, and everything in
                between. Whatever your vision, we&apos;re here to make it permanent.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[4/3] border-2 border-ink-black overflow-hidden bg-mortar-light">
              <Image
                src="/images/shop/interior.jpg"
                alt="Sweet Needles Tattoo shop interior — white cinderblock walls with bold tattoo flash murals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WALL ART / ATMOSPHERE ──────────────────────────────────── */}
      <section className="bg-shop-black section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-bebas text-shop-mint tracking-[0.25em] text-sm uppercase mb-2">
              The Space
            </p>
            <h2
              className="font-bebas text-off-white tracking-widest leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              The Walls Speak for Themselves
            </h2>
            <p className="font-inter text-mortar-light text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Our cinderblock walls are covered in massive, hand-painted tattoo flash — from sacred
              hearts and sparrows to dragons and three pharaoh&apos;s horses. Every corner of our
              shop is a gallery.
            </p>
          </div>

          {/* Wall art photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: "/images/shop/wall-sacred-heart.jpg", alt: "Sacred heart with cross and flames mural on white cinderblock — Sweet Needles Tattoo" },
              { src: "/images/shop/wall-swallow.jpg", alt: "Traditional swallow with 'True Love' banner mural — Sweet Needles Tattoo" },
              { src: "/images/shop/wall-horses.jpg", alt: "Three Pharaoh's Horses in floral wreath mural — Sweet Needles Tattoo" },
              { src: "/images/shop/wall-dragon.jpg", alt: "Traditional dragon mural and skull — Sweet Needles Tattoo" },
              { src: "/images/shop/wall-flower-vase.jpg", alt: "Flower vase with roses mural — Sweet Needles Tattoo" },
              { src: "/images/shop/interior-2.jpg", alt: "Sweet Needles Tattoo interior — tattoo station with art gallery wall" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative aspect-square border border-mortar-gray overflow-hidden bg-mortar-gray/20">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION + MERCH ────────────────────────────────────────── */}
      <section className="cinderblock-white section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-bebas text-flash-red tracking-[0.25em] text-sm mb-3 uppercase">
              Our Mission
            </p>
            <h2
              className="font-bebas text-ink-black tracking-widest leading-none mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Quality Tattooing for Everyone
            </h2>
            <p className="font-inter text-ink-black/75 leading-relaxed mb-6">
              We are dedicated to providing a service of quality tattooing to the public.
              Together we have a wide variety of styles combined between a group of likeminded
              individuals with unique perspectives. We celebrate local culture and believe
              the tattoo experience should feel collaborative, creative, and comfortable.
            </p>
            <Link href="/artists" className="btn-outline-dark">
              Meet the Artists
            </Link>
          </div>

          <div className="border-2 border-ink-black p-8 cinderblock-gray text-center">
            <p className="font-bebas text-shop-mint tracking-[0.25em] text-sm uppercase mb-3">
              Art & Apparel
            </p>
            <h3 className="font-bebas text-off-white tracking-widest text-3xl mb-4 leading-none">
              Shop Our Merch
            </h3>
            <p className="font-inter text-mortar-light text-sm leading-relaxed mb-6">
              From bold paintings to original prints and alternative apparel,
              Sweet Needles brings raw creativity to life beyond the needle.
            </p>
            <a
              href="https://sweetneedles.bigcartel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Shop Merch →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-shop-mint py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-shop-black tracking-widest text-3xl md:text-4xl leading-none">
              Come See Us
            </h2>
            <p className="font-inter text-shop-black/70 text-sm mt-1">
              Walk-ins welcome · 605 N 300 W, Salt Lake City · Sun–Sat 12–8pm
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
