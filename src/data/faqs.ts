export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  faqs: FAQ[];
}

export const faqCategories: FAQCategory[] = [
  {
    category: "Booking & Appointments",
    faqs: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment by filling out our contact form on this website, calling us at (385) 528-2491, or stopping by the shop at 605 N 300 W, Salt Lake City, UT. Walk-ins are always welcome — we recommend calling ahead to check availability.",
      },
      {
        question: "Is a deposit required to book?",
        answer:
          "Yes. A non-refundable $100 deposit is required to secure your appointment. This deposit goes toward the cost of your tattoo.",
      },
      {
        question: "Can I walk in without an appointment?",
        answer:
          "Absolutely. Walk-ins are welcome. We recommend calling ahead at (385) 528-2491 to make sure your preferred artist is available.",
      },
      {
        question: "How do I choose an artist?",
        answer:
          "Browse our artist profiles to find someone whose style resonates with you. Each of our artists has their own unique specialty — from bold American traditional to fine line, Japanese, and color realism. When you contact us, let us know which artist you'd like to work with and a little about your idea.",
      },
    ],
  },
  {
    category: "Cancellations & Rescheduling",
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer:
          "We require at least 24 hours notice to cancel or reschedule an appointment. Cancellations made with less than 24 hours notice may result in forfeiture of your deposit.",
      },
      {
        question: "What happens if I no-show?",
        answer:
          "No-shows will lose their deposit. A new deposit will be required to book a future appointment.",
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          "Yes, as long as you give us at least 24 hours notice, we are happy to reschedule your appointment. Your deposit will transfer to the new date.",
      },
    ],
  },
  {
    category: "Tattoo Aftercare",
    faqs: [
      {
        question: "When should I remove my bandage?",
        answer:
          "Remove your bandage after 2–3 hours. If your artist used a second-skin or Saniderm bandage, you can leave it on for 3–5 days.",
      },
      {
        question: "How do I clean my new tattoo?",
        answer:
          "Wash your tattoo gently with antibacterial soap and warm water immediately after removing the bandage. Pat dry with a clean paper towel. Wash twice daily for the first week.",
      },
      {
        question: "What should I apply to my tattoo?",
        answer:
          "Apply a thin layer of unscented lotion or tattoo aftercare ointment (like Aquaphor or Hustle Butter) 3–5 times per day, or whenever the tattoo feels tight or dry.",
      },
      {
        question: "What should I avoid during healing?",
        answer:
          "Avoid swimming, sun exposure, and soaking in water for at least 3 weeks. Do not pick, scratch, or peel the skin — let it flake off naturally. Keep it out of direct sunlight and tight clothing.",
      },
      {
        question: "How long does a tattoo take to heal?",
        answer:
          "The surface of your tattoo typically heals in 7–10 days. Full healing of the deeper skin layers can take 2–3 months. Everyone heals differently — listen to your body and reach out if you have concerns.",
      },
    ],
  },
  {
    category: "Our Shop",
    faqs: [
      {
        question: "Where are you located?",
        answer:
          "We're located at 605 N 300 W, Salt Lake City, UT 84103 — in the heart of downtown SLC.",
      },
      {
        question: "What are your hours?",
        answer: "We're open Sunday through Saturday, 12pm – 8pm.",
      },
      {
        question: "Do you sell art and apparel?",
        answer:
          "Yes! Our artists create original paintings, prints, and alternative apparel. Visit our online shop at sweetneedles.bigcartel.com.",
      },
      {
        question: "What styles of tattooing do your artists specialize in?",
        answer:
          "Our crew covers a wide range of styles including American Traditional, Japanese tattooing, fine line, black & grey, color realism, Chicano, illustrative, and bold blackwork. Browse our individual artist pages to see who specializes in what.",
      },
    ],
  },
];

/** Returns a flat list of the first N FAQs for teaser sections */
export function getFeaturedFAQs(count: number = 3): FAQ[] {
  return faqCategories.flatMap((c) => c.faqs).slice(0, count);
}
