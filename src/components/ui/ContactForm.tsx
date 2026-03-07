import { useState } from "react";
import { SERVICES } from "@/data/services";

const BUDGET_RANGES = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card text-card-foreground rounded-lg p-12 text-center">
        <h3 className="font-serif text-2xl font-bold mb-3">Thank you!</h3>
        <p className="font-sans opacity-80">We'll get back to you shortly.</p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-accent text-accent-foreground font-sans text-sm rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-foreground/30 transition placeholder:opacity-50";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input name="name" required placeholder="Name" className={inputClass} />
        <input name="company" placeholder="Company" className={inputClass} />
        <input name="phone" type="tel" placeholder="Phone" className={inputClass} />
        <input name="email" type="email" required placeholder="Email" className={inputClass} />
      </div>

      <select name="service" required className={inputClass} defaultValue="">
        <option value="" disabled>
          Services Required
        </option>
        {SERVICES.map((s) => (
          <option key={s.title} value={s.title}>
            {s.title}
          </option>
        ))}
      </select>

      <select name="budget" className={inputClass} defaultValue="">
        <option value="" disabled>
          Budget Range
        </option>
        {BUDGET_RANGES.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <textarea
        name="details"
        rows={5}
        placeholder="Project Details"
        className={inputClass + " resize-none"}
      />

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground font-sans font-semibold text-sm py-4 rounded-md hover:opacity-90 transition-opacity"
      >
        Submit Enquiry
      </button>
    </form>
  );
};

export default ContactForm;
