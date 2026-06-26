import { motion } from "framer-motion";
import { slideIn, stagger } from "./animations";

const stats = [
  {
    title: "Multiple Projects Completed",
    desc: "From landing pages to full web applications, every project is planned, designed, built and optimized for real users.",
    tags: ["Websites", "Web Apps", "Responsive"],
  },
  {
    title: "Modern Tech Stack",
    desc: "We use practical modern technology for frontend, mobile, backend, database and deployment-ready product development.",
    tags: ["React", "Angular", "Firebase"],
  },
  {
    title: "Creative Development Team",
    desc: "Every screen is shaped with visual hierarchy, smooth interactions, clean spacing and a premium digital product feel.",
    tags: ["UI Design", "Animation", "Brand Feel"],
  },
  {
    title: "Client-Focused Work",
    desc: "You get clear updates, source code delivery, launch support and reliable communication throughout the project.",
    tags: ["Support", "Delivery", "Communication"],
  },
];

export function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-[#070707] py-14 md:py-20">
      <div className="containerx">
        <motion.div
          {...slideIn(0)}
          className="mb-10 max-w-3xl text-left md:mb-12"
        >
          <p className="eyebrow mb-3">Our Strength</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
            Results that support{" "}
            <span className="text-[#0a84ff]">real projects</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-white/50 md:text-lg">
            We combine delivery, technology, creative thinking and communication
            to build reliable digital products for businesses.
          </p>
        </motion.div>
        <motion.div {...stagger} className="grid gap-5 md:grid-cols-2">
          {stats.map((stat, index) => (
            <motion.div
              {...slideIn(index + 1)}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-6 shadow-[0_24px_90px_rgba(0,0,0,.38)] transition duration-300 hover:-translate-y-2 hover:border-[#0a84ff]/45 md:p-8"
              key={stat.title}
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#0a84ff]/10 blur-3xl transition group-hover:bg-[#0a84ff]/20" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#0a84ff] via-[#5db7ff] to-transparent opacity-50" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="text-sm font-black text-[#0a84ff]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <div>
                  <h3 className="max-w-sm text-2xl font-black leading-tight text-white md:text-3xl">
                    {stat.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 md:text-base">
                    {stat.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {stat.tags.map((tag) => (
                      <span
                        className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 text-xs font-black text-white/65"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
