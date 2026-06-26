import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { assetPath } from "./assetPath";
import { slideIn } from "./animations";

const projectImages = [
  assetPath("/images/stayfinder.png"),
  assetPath("/images/ecommerce.png"),
  assetPath("/images/project-hotel-website.png"),
];

export function ProjectCard({ p, i }) {
  const reversed = i % 2 === 1;
  const image = projectImages[i % projectImages.length];
  const links = p[4] || {};

  return (
    <motion.article
      {...slideIn(i)}
      className="card group overflow-hidden p-4 md:p-5"
    >
      <div
        className={`grid gap-5 lg:grid-cols-[.95fr_1.05fr] lg:items-stretch ${
          reversed
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        <div className="relative min-h-[230px] rounded-xl border border-white/10 bg-[#080808] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_20px_70px_rgba(0,0,0,.35)] transition duration-300 group-hover:border-[#0a84ff]/35 group-hover:bg-[#0b0f14] md:min-h-[280px] lg:min-h-[320px]">
          <div className="image-tile relative h-full min-h-[206px] overflow-hidden rounded-md border border-white/10 bg-black md:min-h-[256px] lg:min-h-[296px]">
            <img
              src={image}
              alt={`${p[0]} preview`}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/20" />
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center px-1 py-2 md:px-4">
          <p className="mb-3 text-xs font-black uppercase tracking-[.22em] text-[#0a84ff]">
            Demo Project
          </p>
          <h3 className="max-w-2xl text-2xl font-black leading-tight text-white md:text-3xl">
            {p[0]}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
            {p[1]}
          </p>
          <p className="mt-3 text-xs font-black text-[#0a84ff]">{p[2]}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p[3].map((feature) => (
              <span
                className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-white/70"
                key={feature}
              >
                {feature}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              className="btn-primary px-3.5 py-2 text-xs"
              href={links.live || "https://kith.com/"}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={14} />
              Live
            </a>
            <a
              className="btn-dark px-3.5 py-2 text-xs"
              href={links.github || "#"}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
