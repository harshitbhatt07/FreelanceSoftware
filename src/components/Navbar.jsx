import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`containerx flex h-16 items-center justify-between transition ${
          scrolled ? "bg-black/80 backdrop-blur-2xl" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-24 place-items-center overflow-hidden rounded-md bg-white shadow-[0_10px_30px_rgba(10,132,255,.22)]">
            <img
              src="/images/navbar-logo.svg"
              alt="FrelanceSofteare logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="text-lg font-black tracking-tight text-white">
            Frelance<span className="brand-dot">Softeare</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map(([name, path]) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive ? "text-white" : "text-white/45 hover:text-white"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg bg-white text-black lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="containerx lg:hidden">
          <div className="grid gap-1 rounded-2xl border border-white/10 bg-[#111] p-3 shadow-2xl">
            {nav.map(([name, path]) => (
              <Link
                onClick={() => setOpen(false)}
                key={name}
                to={path}
                className="rounded-xl px-4 py-3 font-bold text-white/70 hover:bg-white/10 hover:text-white"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
