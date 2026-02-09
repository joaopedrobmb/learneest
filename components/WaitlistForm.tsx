import { FormEvent, useState } from "react";

type WaitlistFormProps = {
  compact?: boolean;
};

export default function WaitlistForm({ compact = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isEmailValid) {
      setError("Enter a valid email address.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-4"} noValidate aria-label="Waitlist form">
      <label htmlFor="waitlist-email" className="block text-sm font-medium text-ink">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="waitlist-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@university.edu"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "waitlist-error" : undefined}
          className="focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="focus-ring rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Join waitlist
        </button>
      </div>

      {error ? (
        <p id="waitlist-error" className="text-sm text-rose-600">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p className="text-sm text-emerald-700">Thanks. You are on the list. We will contact you soon.</p>
      ) : null}
    </form>
  );
}
