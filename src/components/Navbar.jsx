import { useEffect, useState } from "react";

const links = ["about", "education", "skills", "projects", "achievements", "contact"];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold text-white">{name}</a>
        <button
          className="rounded p-2 text-soft md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 top-16 w-full flex-col gap-1 border-b border-line bg-ink p-4 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 text-sm capitalize transition-colors hover:text-white ${active === id ? "text-accent" : "text-soft"}`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
