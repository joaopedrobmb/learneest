export function About() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-900">
          Why did we create Learneest?
        </h2>
        <div className="space-y-6 text-left text-lg text-gray-700">
          <p>
            Studying can be challenging, especially when you can&apos;t
            visualize your real progress. We often plan to study a lot, but end
            up studying less than we&apos;d like.
          </p>
          <p>
            Learneest was born to solve this problem:{" "}
            <strong>
              a simple tool that helps you plan, execute, and compare your study
              sessions
            </strong>
            . No complications, no distractions.
          </p>
          <p>
            We started as an individual productivity tool, but the vision is to
            evolve into a <strong>community of students</strong> who share their
            progress and motivate each other.
          </p>
          <p className="pt-4 text-center italic text-gray-600">
            Made by students, for students. 🦉
          </p>
        </div>
      </div>
    </section>
  );
}
