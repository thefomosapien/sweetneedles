import type { Metadata } from "next";
import { Suspense } from "react";
import CinderblockHero from "@/components/sections/CinderblockHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sweet Needles Tattoo in Salt Lake City. Send a message, call (385) 528-2491, or walk in. Located at 605 N 300 W, open 7 days a week, 12pm–8pm.",
};

function ContactFormWrapper() {
  return <ContactForm />;
}

export default function ContactPage() {
  return (
    <>
      <CinderblockHero
        heading="Get in Touch"
        subheading="Tell us about your idea — we'd love to hear it."
        heightClass="min-h-[36vh]"
      />

      <section className="cinderblock-white flash-wall section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="font-bebas text-3xl tracking-widest text-ink-black mb-6 leading-none">
              Send Us a Message
            </h2>
            <Suspense fallback={<div className="h-64 shimmer"/>}>
              <ContactFormWrapper />
            </Suspense>
          </div>

          {/* Shop Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-bebas text-3xl tracking-widest text-ink-black mb-6 leading-none">
                Find the Shop
              </h2>

              {/* Map embed */}
              <div className="aspect-video border-2 border-ink-black overflow-hidden mb-6">
                <iframe
                  title="Sweet Needles Tattoo location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.0!2d-111.9011!3d40.7741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjA1IE4gMzAwIFcsIFNhbHQgTGFrZSBDaXR5LCBVVCA4NDEwMw!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoBlock label="Address">
                  <a
                    href="https://maps.google.com/?q=605+N+300+W+Salt+Lake+City+UT+84103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-ink-black hover:text-flash-red transition-colors leading-relaxed"
                  >
                    605 N 300 W<br />Salt Lake City, UT 84103
                  </a>
                </InfoBlock>

                <InfoBlock label="Phone">
                  <a href="tel:3855282491" className="font-inter text-ink-black hover:text-flash-red transition-colors text-lg font-medium">
                    (385) 528-2491
                  </a>
                </InfoBlock>

                <InfoBlock label="Hours">
                  <p className="font-inter text-ink-black leading-relaxed">
                    Sunday – Saturday<br />12:00 PM – 8:00 PM
                  </p>
                </InfoBlock>

                <InfoBlock label="Instagram">
                  <a
                    href="https://www.instagram.com/sweetneedlestattoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-ink-black hover:text-flash-red transition-colors"
                  >
                    @sweetneedlestattoo
                  </a>
                </InfoBlock>
              </div>
            </div>

            {/* Deposit note */}
            <div className="border-l-4 border-flash-red pl-5 py-2">
              <p className="font-bebas text-lg tracking-wide text-ink-black mb-1">Deposit Required</p>
              <p className="font-inter text-sm text-ink-black/70 leading-relaxed">
                A non-refundable $100 deposit is required to secure your appointment.
                Walk-ins are always welcome — call ahead to check availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-bebas text-sm tracking-[0.2em] text-mortar-gray uppercase mb-2">{label}</p>
      {children}
    </div>
  );
}
