import { FormEvent, useState } from "react";

export function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError("Enter a valid email address.");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setEmail("");
  };

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg sm:p-10">
        <h2 className="text-center text-3xl font-bold text-gray-900">Join Learneest early access</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          Be first to use planned vs actual tracking, real study time metrics, and consistency tools.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4" noValidate>
          <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none ring-blue-200 transition focus:ring"
              aria-invalid={error ? "true" : "false"}
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-shadow hover:shadow-lg"
            >
              Join Waitlist
            </button>
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {success ? <p className="text-sm text-green-700">Thanks, you are on the waitlist.</p> : null}
        </form>
      </div>
    </section>
  );
}
