import { motion } from "framer-motion";
import { slideIn } from "./animations";

export function WhyPreview() {
  return (
    <section className="relative overflow-hidden bg-[#070707] py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(10,132,255,.18),transparent_24rem)]" />
      <div className="containerx relative">
        <div className="grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
          <motion.div
            {...slideIn(0)}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-3 shadow-[0_30px_110px_rgba(0,0,0,.55)]"
          >
            <img
              src="/images/business-discussion.png"
              alt="Business team discussing a project"
              className="h-[280px] w-full rounded-2xl object-cover object-center md:h-[400px]"
            />
            <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </motion.div>

          <motion.div {...slideIn(1)} className="lg:pl-4">
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              Built for{" "}
              <span className="text-[#0a84ff]">Real Business Growth</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
              We focus on modern and responsive design, smooth animations,
              affordable pricing, clean code, fast delivery, user-friendly
              websites, source code delivery, deployment support, clear
              communication and basic support after delivery.
            </p>
            <div className="mt-10 flex flex-wrap gap-5 text-xs font-bold text-white/35 md:text-sm">
              <span>2026 FrelanceSofteare</span>
              <span>Modern Websites</span>
              <span>Web Apps</span>
              <span>Digital Solutions</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
