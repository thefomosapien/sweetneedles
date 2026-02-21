"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { artists } from "@/data/artists";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [artistsOpen, setArtistsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change / ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setArtistsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-shop-black/95 backdrop-blur-sm shadow-lg"
            : "bg-shop-black/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
          {/* Logo / Shop Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/svg/sweet-needles-logo.svg"
              alt="Sweet Needles Tattoo"
              width={160}
              height={46}
              className="h-10 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link href="/" className="nav-link font-bebas text-lg tracking-widest text-off-white hover:text-flash-red transition-colors">
              Home
            </Link>

            {/* Artists dropdown */}
            <div className="relative group">
              <button
                className="nav-link font-bebas text-lg tracking-widest text-off-white hover:text-flash-red transition-colors flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={artistsOpen}
                onMouseEnter={() => setArtistsOpen(true)}
                onMouseLeave={() => setArtistsOpen(false)}
              >
                Artists
                <svg className="w-3 h-3 mt-0.5 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-52 bg-shop-black border border-mortar-gray shadow-xl transition-all duration-200 ${
                  artistsOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
                onMouseEnter={() => setArtistsOpen(true)}
                onMouseLeave={() => setArtistsOpen(false)}
              >
                <Link
                  href="/artists"
                  className="block px-4 py-2.5 font-bebas text-base tracking-wider text-mortar-light hover:text-flash-red hover:bg-white/5 border-b border-mortar-gray/40 transition-colors"
                >
                  View All Artists
                </Link>
                {artists.map((artist) => (
                  <Link
                    key={artist.slug}
                    href={`/artists/${artist.slug}`}
                    className="block px-4 py-2.5 font-bebas text-base tracking-wider text-off-white hover:text-flash-red hover:bg-white/5 transition-colors"
                  >
                    {artist.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="nav-link font-bebas text-lg tracking-widest text-off-white hover:text-flash-red transition-colors">
              About
            </Link>
            <Link href="/faq" className="nav-link font-bebas text-lg tracking-widest text-off-white hover:text-flash-red transition-colors">
              FAQ
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2 ml-2"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-flash-red"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
            <span className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
            <span className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-shop-black z-50 md:hidden flex flex-col transform transition-transform duration-300 ease-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mortar-gray/40">
          <Image
            src="/svg/sweet-needles-logo.svg"
            alt="Sweet Needles Tattoo"
            width={130}
            height={38}
            className="h-9 w-auto opacity-90"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-off-white hover:text-flash-red transition-colors p-1"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col flex-1 overflow-y-auto px-6 py-6 gap-1" aria-label="Mobile navigation">
          <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/artists" onClick={() => setMenuOpen(false)}>All Artists</MobileNavLink>

          {/* Artist sub-links */}
          <div className="ml-4 flex flex-col gap-1 mt-1 mb-2">
            {artists.map((artist) => (
              <Link
                key={artist.slug}
                href={`/artists/${artist.slug}`}
                onClick={() => setMenuOpen(false)}
                className="font-bebas text-base tracking-widest text-mortar-light hover:text-flash-red py-2 border-l-2 border-mortar-gray/40 pl-4 transition-colors"
              >
                {artist.name}
              </Link>
            ))}
          </div>

          <MobileNavLink href="/about" onClick={() => setMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="/faq" onClick={() => setMenuOpen(false)}>FAQ</MobileNavLink>

          <div className="mt-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary block text-center text-base w-full"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-mortar-gray/40 text-center">
          <p className="font-bebas text-mortar-light tracking-widest text-sm">
            605 N 300 W · Salt Lake City, UT
          </p>
          <a href="tel:3855282491" className="font-bebas text-flash-red tracking-widest text-lg hover:text-off-white transition-colors">
            (385) 528-2491
          </a>
        </div>
      </div>
    </>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-bebas text-xl tracking-widest text-off-white hover:text-flash-red py-3 border-b border-mortar-gray/20 transition-colors"
    >
      {children}
    </Link>
  );
}
