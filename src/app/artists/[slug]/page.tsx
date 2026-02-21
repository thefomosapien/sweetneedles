import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { artists, getArtistBySlug, getAllSlugs } from "@/data/artists";
import InstagramFeed from "@/components/artists/InstagramFeed";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return {};
  return {
    title: artist.name,
    description: `${artist.name} is a tattoo artist at Sweet Needles Tattoo in Salt Lake City, UT. Specializes in ${artist.styles.join(", ")}. ${artist.bio.slice(0, 120)}...`,
    openGraph: {
      title: `${artist.name} — Sweet Needles Tattoo`,
      description: `${artist.styles.join(", ")} artist in Salt Lake City.`,
    },
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const otherArtists = artists.filter((a) => a.slug !== artist.slug).slice(0, 3);

  return (
    <>
      {/* ── ARTIST HERO — Portrait + Featured Images ──────────────── */}
      <section className="cinderblock-white pt-8 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Portrait */}
            <div className="relative aspect-[3/4] md:aspect-[2/3] overflow-hidden border-2 border-ink-black bg-mortar-light">
              <Image
                src={artist.photo}
                alt={`${artist.name} — tattoo artist at Sweet Needles Tattoo, Salt Lake City`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Featured portfolio images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 content-start">
              {artist.featuredImages.slice(0, 3).map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden border-2 border-ink-black bg-mortar-light ${
                    i === 2 ? "sm:col-span-2 md:col-span-1 lg:col-span-2 aspect-[16/9]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${artist.name} tattoo work ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BIO SECTION ──────────────────────────────────────────────── */}
      <section className="cinderblock-white section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* Name + Bio */}
            <div className="lg:col-span-2">
              <h1
                className="font-bebas text-ink-black tracking-widest leading-none mb-4"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                {artist.name}
              </h1>
              {/* Style tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {artist.styles.map((style) => (
                  <span key={style} className="style-pill">{style}</span>
                ))}
              </div>
              <p className="font-inter text-ink-black/75 leading-relaxed text-base md:text-lg mb-8">
                {artist.bio}
              </p>
              <Link href={`/contact?artist=${encodeURIComponent(artist.name)}`} className="btn-primary">
                Book with {artist.firstName}
              </Link>
            </div>

            {/* Convention Poster */}
            <div>
              <p className="font-bebas text-mortar-gray tracking-[0.2em] text-xs uppercase mb-3">
                Convention Poster
              </p>
              <div className="relative aspect-[2/3] border-2 border-ink-black overflow-hidden bg-mortar-light">
                <Image
                  src={artist.poster}
                  alt={`${artist.name} tattoo convention poster`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTAGRAM FEED ───────────────────────────────────────────── */}
      <InstagramFeed
        handle={artist.instagramHandle}
        instagramUrl={artist.instagramUrl}
      />

      {/* ── CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="bg-shop-mint py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bebas text-shop-black tracking-widest text-3xl md:text-4xl leading-none">
              Want to Book with {artist.firstName}?
            </h2>
            <p className="font-inter text-shop-black/70 text-sm mt-1">
              Reach out via the contact form or call us directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:3855282491" className="btn-outline-dark">
              (385) 528-2491
            </a>
            <Link
              href={`/contact?artist=${encodeURIComponent(artist.name)}`}
              className="btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER ARTISTS ─────────────────────────────────────────────── */}
      {otherArtists.length > 0 && (
        <section className="bg-shop-black section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-bebas text-off-white tracking-widest text-3xl md:text-4xl leading-none">
                More Artists
              </h2>
              <Link href="/artists" className="btn-outline text-sm">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherArtists.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artists/${a.slug}`}
                  className="group relative aspect-square overflow-hidden border-2 border-mortar-gray hover:border-flash-red transition-colors"
                >
                  <Image
                    src={a.photo}
                    alt={a.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shop-black/80 to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-bebas text-off-white tracking-widest text-xl leading-none">
                      {a.name}
                    </p>
                    <p className="font-inter text-mortar-light text-xs mt-1">
                      {a.styles.slice(0, 2).join(" · ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
