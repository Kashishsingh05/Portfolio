import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import { profile, codeCard, education, skills, achievements, certifications } from "./data.js";

// Contact loads separately to keep the first page load light
const Contact = lazy(() => import("./components/Contact.jsx"));

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <h2 className="mb-8 font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar name={profile.name} />
      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-16 pt-32 md:grid-cols-2 md:pt-40">
          <div>
            <p className="text-soft">Hi, I'm</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-white md:text-7xl">{profile.name}</h1>
            <p className="mt-5 max-w-md text-lg text-slate-300">{profile.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded bg-accent px-5 py-2.5 font-semibold text-ink hover:bg-white">View projects</a>
              <a href={profile.resume} download className="rounded border border-line px-5 py-2.5 text-slate-200 hover:border-accent">Download CV</a>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-line bg-panel p-5 font-code text-xs leading-7 text-slate-300 sm:text-sm" aria-label="Summary of Kashish as a Java class">
            {codeCard.map((line, i) => (
              <div key={i} className="code-line whitespace-pre" style={{ animationDelay: `${i * 160}ms` }}>
                {line}
              </div>
            ))}
          </div>
        </section>

        <Section id="about" title="About">
          <div className="grid items-center gap-8 md:grid-cols-[240px_1fr]">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="240"
              height="300"
              loading="lazy"
              className="aspect-[4/5] w-48 rounded-lg border border-line object-cover object-top md:w-full"
            />
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{profile.summary}</p>
          </div>
        </Section>

        <Section id="education" title="Education">
          <ol className="space-y-6 border-l border-line pl-6">
            {education.map((e) => (
              <li key={e.school} className="relative">
                <span className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">{e.school}</h3>
                <p className="text-slate-300">{e.detail}</p>
                <p className="text-sm text-soft">{e.period} · <span className="text-gold">{e.score}</span></p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt className="mb-2 text-sm text-soft">{group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded border border-line bg-panel px-3 py-1.5 text-sm text-slate-200">{s}</span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" title="Projects"><Projects /></Section>

        <Section id="achievements" title="Achievements and certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">Achievements</h3>
              <ul className="list-disc space-y-2 pl-5 text-slate-300">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
            <div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">Certifications</h3>
              <ul className="list-disc space-y-2 pl-5 text-slate-300">{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Suspense fallback={<p className="text-soft">Loading contact form...</p>}><Contact /></Suspense>
        </Section>
      </main>
      <footer className="border-t border-line py-6 text-center text-sm text-soft">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
