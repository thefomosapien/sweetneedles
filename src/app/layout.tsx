import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sweet Needles Tattoo | Salt Lake City, Utah",
    template: "%s | Sweet Needles Tattoo",
  },
  description:
    "Sweet Needles Tattoo is a premier tattoo studio in downtown Salt Lake City, UT. Expert artists specializing in American Traditional, Japanese, fine line, bold blackwork, and color tattooing. Walk-ins welcome.",
  keywords: [
    "tattoo shop Salt Lake City",
    "tattoo artist SLC",
    "Sweet Needles Tattoo",
    "American traditional tattoo Utah",
    "fine line tattoo Salt Lake City",
    "Japanese tattoo Utah",
    "downtown SLC tattoo shop",
    "walk-in tattoo Salt Lake City",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sweetneedlestattooshop.com",
    siteName: "Sweet Needles Tattoo",
    title: "Sweet Needles Tattoo | Salt Lake City, Utah",
    description:
      "Premier tattoo studio in downtown Salt Lake City. 7 expert artists. Walk-ins welcome.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Needles Tattoo | Salt Lake City, Utah",
    description: "Premier tattoo studio in downtown Salt Lake City. Walk-ins welcome.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Sweet Needles Tattoo",
  url: "https://www.sweetneedlestattooshop.com",
  telephone: "+13855282491",
  address: {
    "@type": "PostalAddress",
    streetAddress: "605 N 300 W",
    addressLocality: "Salt Lake City",
    addressRegion: "UT",
    postalCode: "84103",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7741,
    longitude: -111.9011,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "12:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/sweetneedlestattoo/",
    "https://sweetneedles.bigcartel.com",
  ],
  description:
    "Sweet Needles Tattoo is a premier tattoo studio in downtown Salt Lake City, UT, featuring 7 expert artists specializing in American Traditional, Japanese, fine line, blackwork, and color tattooing.",
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* SVG filter definitions used globally for cinderblock grain and spray paint */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-0 h-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            {/* Cinderblock grain texture */}
            <filter id="cinderblock-grain" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="4" stitchTiles="stitch" result="noise"/>
              <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
              <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended"/>
              <feComponentTransfer in="blended">
                <feFuncA type="linear" slope="1"/>
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>
      </head>
      <body className="font-inter antialiased bg-white-block text-ink-black">
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
