export interface Artist {
  name: string;
  slug: string;
  firstName: string;
  bio: string;
  styles: string[];
  instagramHandle: string;
  instagramUrl: string;
  /** Path to portrait photo in /public/images/artists/[slug]/ */
  photo: string;
  /** Up to 3 featured portfolio images */
  featuredImages: string[];
  /** Convention poster image */
  poster: string;
}

export const artists: Artist[] = [
  {
    name: "Gailon Justus",
    slug: "gailon",
    firstName: "Gailon",
    bio: "Gailon is one of the founding artists of Sweet Needles, bringing years of experience and a passion for bold, traditional tattooing. His work is rooted in Americana tradition — clean lines, strong compositions, and timeless imagery that stands the test of time.",
    styles: ["American Traditional", "Black & Grey", "Bold"],
    instagramHandle: "@gailonjustus",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/gailon/photo.jpg",
    featuredImages: [
      "/images/artists/gailon/featured-1.jpg",
      "/images/artists/gailon/featured-2.jpg",
      "/images/artists/gailon/featured-3.jpg",
    ],
    poster: "/images/artists/gailon/poster.jpg",
  },
  {
    name: "Caroline Wallace",
    slug: "caroline",
    firstName: "Caroline",
    bio: "Caroline brings a refined eye for detail and an expressive range to every piece. Whether working in fine line or bold traditional flash, her tattoos carry a personal warmth and artistry that keeps clients coming back.",
    styles: ["Fine Line", "American Traditional", "Illustrative"],
    instagramHandle: "@carolinewallacetattoo",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/caroline/photo.jpg",
    featuredImages: [
      "/images/artists/caroline/featured-1.jpg",
      "/images/artists/caroline/featured-2.jpg",
      "/images/artists/caroline/featured-3.jpg",
    ],
    poster: "/images/artists/caroline/poster.jpg",
  },
  {
    name: "Lily Gustave",
    slug: "lily",
    firstName: "Lily",
    bio: "Lily's work spans the full spectrum of tattoo art — from delicate fine line to bold, saturated color pieces. She approaches each tattoo as a unique collaboration with the client, ensuring the final result feels personal and lasting.",
    styles: ["Fine Line", "Color", "Floral"],
    instagramHandle: "@lilygustave",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/lily/photo.jpg",
    featuredImages: [
      "/images/artists/lily/featured-1.jpg",
      "/images/artists/lily/featured-2.jpg",
      "/images/artists/lily/featured-3.jpg",
    ],
    poster: "/images/artists/lily/poster.jpg",
  },
  {
    name: "Luis Orozco",
    slug: "luis",
    firstName: "Luis",
    bio: "Luis draws from a deep well of cultural and artistic influences, producing tattoos that are bold, graphic, and richly detailed. His Japanese and traditional work carries an energy and precision that is unmistakably his own.",
    styles: ["Japanese", "American Traditional", "Chicano"],
    instagramHandle: "@luisorozcotattoo",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/luis/photo.jpg",
    featuredImages: [
      "/images/artists/luis/featured-1.jpg",
      "/images/artists/luis/featured-2.jpg",
      "/images/artists/luis/featured-3.jpg",
    ],
    poster: "/images/artists/luis/poster.jpg",
  },
  {
    name: "Margarita Martinez",
    slug: "margarita",
    firstName: "Margarita",
    bio: "Margarita's tattoos are vibrant, expressive, and full of personality. She specializes in bold color work and traditional flash, creating pieces that pop off the skin with energy and character.",
    styles: ["Color", "American Traditional", "Bold Flash"],
    instagramHandle: "@margaritamartineztattoo",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/margarita/photo.jpg",
    featuredImages: [
      "/images/artists/margarita/featured-1.jpg",
      "/images/artists/margarita/featured-2.jpg",
      "/images/artists/margarita/featured-3.jpg",
    ],
    poster: "/images/artists/margarita/poster.jpg",
  },
  {
    name: "Nicole Huelskamp",
    slug: "nicole",
    firstName: "Nicole",
    bio: "Nicole is a rising force in the Sweet Needles collective, known for her versatility and attention to client vision. Her work ranges from soft, detailed fine line to punchy traditional pieces that wear beautifully over time.",
    styles: ["Fine Line", "American Traditional", "Blackwork"],
    instagramHandle: "@nicolehuelskamp",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/nicole/photo.jpg",
    featuredImages: [
      "/images/artists/nicole/featured-1.jpg",
      "/images/artists/nicole/featured-2.jpg",
      "/images/artists/nicole/featured-3.jpg",
    ],
    poster: "/images/artists/nicole/poster.jpg",
  },
  {
    name: "Alexa Rich",
    slug: "alexa",
    firstName: "Alexa",
    bio: "Alexa brings a fresh perspective and infectious enthusiasm to every session. Her work is precise, thoughtful, and driven by a genuine love for the art form. She's quickly building a devoted client base through her consistency and creativity.",
    styles: ["Fine Line", "Illustrative", "Color"],
    instagramHandle: "@alexarichtattoo",
    instagramUrl: "https://www.instagram.com/sweetneedlestattoo/",
    photo: "/images/artists/alexa/photo.jpg",
    featuredImages: [
      "/images/artists/alexa/featured-1.jpg",
      "/images/artists/alexa/featured-2.jpg",
      "/images/artists/alexa/featured-3.jpg",
    ],
    poster: "/images/artists/alexa/poster.jpg",
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return artists.map((a) => a.slug);
}
