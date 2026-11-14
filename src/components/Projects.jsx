import { useState } from "react";
import { projects } from "../data.js";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === c ? "border-accent bg-accent text-ink" : "border-line text-soft hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p) => (
          <article key={p.title} className="flex flex-col rounded-lg border border-line bg-panel p-6">
            <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-gold">{p.category}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded bg-ink px-2 py-1 font-code text-xs text-soft">{t}</li>
              ))}
            </ul>
            <div className="mt-auto flex gap-4 pt-5 text-sm">
              {p.github && <a className="text-accent hover:underline" href={p.github} target="_blank" rel="noreferrer">View code</a>}
              {p.live && <a className="text-accent hover:underline" href={p.live} target="_blank" rel="noreferrer">Open live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
