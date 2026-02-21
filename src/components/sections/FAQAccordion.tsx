"use client";

import { useState } from "react";
import { faqCategories } from "@/data/faqs";

interface FAQAccordionProps {
  /** If true, renders all categories. If false, renders only top N items flat. */
  full?: boolean;
  /** When full=false, how many FAQs to show */
  limit?: number;
}

export default function FAQAccordion({ full = true, limit = 3 }: FAQAccordionProps) {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleCategory = (idx: number) => {
    setOpenCategory(openCategory === idx ? null : idx);
  };

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!full) {
    // Flat teaser mode
    const flatFaqs = faqCategories.flatMap((c) => c.faqs).slice(0, limit);
    return (
      <div className="space-y-3">
        {flatFaqs.map((faq, i) => {
          const key = `teaser-${i}`;
          const isOpen = !!openItems[key];
          return (
            <div key={key} className="border border-mortar-light bg-white/40">
              <button
                onClick={() => toggleItem(key)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-bebas text-lg tracking-wide text-ink-black group-hover:text-flash-red transition-colors pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-5 h-5 text-ink-black transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="font-inter text-sm md:text-base text-ink-black/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // Full categorized mode
  return (
    <div className="space-y-4">
      {faqCategories.map((cat, catIdx) => {
        const isCatOpen = openCategory === catIdx;
        return (
          <div key={cat.category} className="border-2 border-ink-black">
            {/* Category header */}
            <button
              onClick={() => toggleCategory(catIdx)}
              className="w-full flex items-center justify-between px-5 md:px-8 py-5 text-left bg-ink-black/5 group"
              aria-expanded={isCatOpen}
            >
              <span className="font-bebas text-2xl tracking-widest text-ink-black group-hover:text-flash-red transition-colors">
                {cat.category}
              </span>
              <span className={`flex-shrink-0 w-6 h-6 text-ink-black transition-transform duration-300 ${isCatOpen ? "rotate-180" : ""}`}>
                <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </span>
            </button>

            {/* FAQ items */}
            {isCatOpen && (
              <div className="divide-y divide-mortar-light">
                {cat.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between px-5 md:px-8 py-4 text-left group"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bebas text-lg md:text-xl tracking-wide text-ink-black group-hover:text-flash-red transition-colors pr-4">
                          {faq.question}
                        </span>
                        <span className={`flex-shrink-0 w-5 h-5 text-ink-black transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                          <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" d="M12 4v16m8-8H4"/>
                          </svg>
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 md:px-8 pb-5">
                          <p className="font-inter text-sm md:text-base text-ink-black/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
