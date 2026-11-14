import { useState } from "react";
import { profile } from "../data.js";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!emailRe.test(v.email)) e.email = "Enter a valid email address, like name@example.com.";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    // No backend: open the visitor's email app with the message filled in.
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + values.name)}&body=${body}`;
    setSent(true);
    setValues({ name: "", email: "", message: "" });
  };

  const field = "mt-1 w-full rounded border border-line bg-panel px-3 py-2.5 text-white placeholder:text-soft/60";

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-3 text-slate-300">
        <p>Open to internships and entry-level roles. Send a message or reach out directly.</p>
        <p><a className="text-accent hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p>{profile.phone}</p>
        <ul className="flex flex-wrap gap-4 pt-2">
          {Object.entries(profile.links).map(([label, url]) => (
            <li key={label}><a className="text-accent hover:underline" href={url} target="_blank" rel="noreferrer">{label}</a></li>
          ))}
        </ul>
      </div>

      <form onSubmit={onSubmit} noValidate className="space-y-4">
        {[["name", "Name", "text"], ["email", "Email", "email"]].map(([key, label, type]) => (
          <div key={key}>
            <label htmlFor={key} className="text-sm text-soft">{label}</label>
            <input id={key} name={key} type={type} value={values[key]} onChange={onChange} className={field}
              aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-err` : undefined} />
            {errors[key] && <p id={`${key}-err`} className="mt-1 text-sm text-red-400">{errors[key]}</p>}
          </div>
        ))}
        <div>
          <label htmlFor="message" className="text-sm text-soft">Message</label>
          <textarea id="message" name="message" rows="5" value={values.message} onChange={onChange} className={field}
            aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
          {errors.message && <p id="message-err" className="mt-1 text-sm text-red-400">{errors.message}</p>}
        </div>
        <button type="submit" className="rounded bg-accent px-6 py-2.5 font-semibold text-ink hover:bg-white">Send message</button>
        {sent && <p role="status" className="text-sm text-gold">Your email app should open with the message ready to send.</p>}
      </form>
    </div>
  );
}
