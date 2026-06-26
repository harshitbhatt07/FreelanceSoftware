import { motion } from "framer-motion";
import { slideIn } from "./animations";

export function ServiceCard({ title, desc, Icon, index = 0 }) {
  return (
    <motion.div
      {...slideIn(index)}
      className={`card group relative min-h-[260px] overflow-hidden ${index === 1 ? "lg:translate-y-8" : ""} ${
        index === 4 ? "lg:-translate-y-8" : ""
      }`}
      key={title}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#0a84ff]/10 blur-2xl transition duration-500 group-hover:bg-[#0a84ff]/20" />
      <span className="relative mb-7 grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-white to-white/70 text-black shadow-[0_18px_50px_rgba(10,132,255,.20)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_24px_70px_rgba(10,132,255,.35)]">
        <span className="absolute inset-1 rounded-xl border border-black/5" />
        <Icon className="relative h-7 w-7 stroke-[2.4]" />
      </span>
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-4 leading-7 text-white/50">{desc}</p>
    </motion.div>
  );
}
