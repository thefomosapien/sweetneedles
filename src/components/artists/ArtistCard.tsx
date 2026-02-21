import Link from "next/link";
import Image from "next/image";
import type { Artist } from "@/data/artists";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group relative flex flex-col bg-white-block border-2 border-ink-black overflow-hidden hover:border-flash-red transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-flash-red"
    >
      {/* Artist Photo */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-mortar-light">
        <Image
          src={artist.photo}
          alt={`${artist.name} — tattoo artist at Sweet Needles`}
          fill
          className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Fallback placeholder when no image */}
        <div className="absolute inset-0 flex items-center justify-center bg-mortar-light cinderblock-white" aria-hidden="true">
          <svg className="w-16 h-16 text-mortar-gray opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/20 transition-all duration-300"/>
      </div>

      {/* Info bar */}
      <div className="p-4 border-t-2 border-ink-black group-hover:border-flash-red transition-colors">
        <h3 className="font-bebas text-2xl tracking-widest text-ink-black group-hover:text-flash-red transition-colors leading-none">
          {artist.name}
        </h3>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {artist.styles.slice(0, 2).map((style) => (
            <span key={style} className="style-pill text-xs">
              {style}
            </span>
          ))}
        </div>
        <p className="mt-3 font-bebas text-sm tracking-widest text-mortar-gray group-hover:text-flash-red transition-colors">
          View Profile →
        </p>
      </div>
    </Link>
  );
}
