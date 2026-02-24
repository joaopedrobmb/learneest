import SectionTitle from "./SectionTitle";

const items = [
  "Flashcards per subject",
  "Summaries editor",
  "Study history by day/week",
  "Performance and consistency metrics",
];

export default function InProgressSection() {
  return (
    <section className="py-20">
      <div className="section-shell rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <SectionTitle
          eyebrow="In Progress"
          title="What is being built now"
          description="The next layers focus on deeper learning content and clearer feedback loops without adding complexity to your routine."
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4"
            >
              <p className="text-sm font-semibold text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
