import type { Metadata } from "next";
import CinderblockHero from "@/components/sections/CinderblockHero";
import ArtistCard from "@/components/artists/ArtistCard";
import { artists } from "@/data/artists";

export const metadata: Metadata = {
  title: "Tattoo Artists",
  description:
    "Meet the artists at Sweet Needles Tattoo in Salt Lake City. 7 expert tattooers specializing in American Traditional, Japanese, fine line, blackwork, color realism, and more.",
};

export default function ArtistsPage() {
  return (
    <>
      <CinderblockHero
        heading="The Crew"
        subheading="Salt Lake City's finest — 7 artists, endless styles"
        heightClass="min-h-[38vh]"
      />

      <section className="cinderblock-white flash-wall-tiger section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-inter text-ink-black/60 leading-relaxed max-w-2xl">
              Our artists span Americana traditional, Japanese tattooing, fine line, bold blackwork,
              color realism, and everything in between. Browse their profiles, explore their work,
              and find the artist whose style speaks to you.
            </p>
          </div>

          {/* 7-artist grid — 3 cols desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
