import { useState } from "react";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    q: "What is Learneest?",
    a: "Learneest is a study platform for planning sessions, tracking real study time, and improving consistency through planned vs actual comparisons.",
  },
  {
    q: "Is it free?",
    a: "The core experience is planned to include a free tier. Pricing details for advanced features will be shared after the first release.",
  },
  {
    q: "How is real study time measured?",
    a: "Real study time is tracked from active study sessions and timer activity, then compared against what you originally planned.",
  },
  {
    q: "Does it work on mobile?",
    a: "Yes. Learneest is designed mobile-first so you can plan and track sessions from phone or desktop.",
  },
  {
    q: "Can I import my schedule?",
    a: "Schedule import is on the roadmap. Early versions focus on fast manual planning and quick weekly setup.",
  },
  {
    q: "When are social features coming?",
    a: "Social features are a later phase after the core planning and tracking workflow is stable and validated by students.",
  },
];

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section id="faq" className="py-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions students ask before joining"
          description="Clear answers about scope, pricing direction, tracking logic, and what is coming next."
          center
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-white shadow-card"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    className="focus-ring flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-sm font-semibold text-ink sm:text-base">
                      {faq.q}
                    </span>
                    <span
                      className="ml-3 text-xl text-muted"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={`faq-panel-${index}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-muted"
                  >
                    {faq.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
