import { motion } from "framer-motion";
import { AgencyVisual } from "./AgencyVisual";
import { BrandTitle } from "./BrandTitle";

export function PageHero({ eyebrow, title, desc, variant = "editor", image, imageAlt = "", animated = false }) {
  const Left = animated ? motion.div : "div";
  const Right = animated ? motion.div : "div";
  const leftMotion = animated
    ? {
        initial: { opacity: 0, x: -42, y: 14, scale: 0.985 },
        whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
      }
    : {};
  const rightMotion = animated
    ? {
        initial: { opacity: 0, x: 42, y: 14, scale: 0.985 },
        whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
      }
    : {};

  return (
    <section id="top" className="hero-surface soft-grid page-pad relative overflow-hidden pb-16">
      <div className="containerx grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <Left {...leftMotion}>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[.96] tracking-normal text-white md:text-7xl">
            <BrandTitle text={title} />
          </h1>
          {desc && <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">{desc}</p>}
        </Left>
        <Right {...rightMotion} className="hidden lg:block">
          {image ? (
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-3 shadow-[0_30px_110px_rgba(0,0,0,.55)]">
              <img
                src={image}
                alt={imageAlt || title}
                className="h-[360px] w-full rounded-2xl object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>
          ) : (
            <AgencyVisual compact variant={variant} />
          )}
        </Right>
      </div>
    </section>
  );
}
