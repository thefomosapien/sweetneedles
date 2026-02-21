import type { Metadata } from "next";
import CinderblockHero from "@/components/sections/CinderblockHero";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Sweet Needles Tattoo in Salt Lake City. Learn about booking appointments, tattoo aftercare, deposits, cancellations, and more.",
};

export default function FAQPage() {
  return (
    <>
      <CinderblockHero
        heading="Frequently Asked Questions"
        subheading="Everything you need to know before your appointment"
        heightClass="min-h-[36vh]"
      />

      <section className="cinderblock-white section-padding">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion full />

          {/* Still have questions CTA */}
          <div className="mt-14 border-2 border-ink-black p-8 text-center cinderblock-gray">
            <h2 className="font-bebas text-off-white tracking-widest text-3xl mb-3 leading-none">
              Still Have Questions?
            </h2>
            <p className="font-inter text-mortar-light text-sm mb-6">
              Call us or send a message — we&apos;re happy to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:3855282491" className="btn-outline">
                (385) 528-2491
              </a>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
